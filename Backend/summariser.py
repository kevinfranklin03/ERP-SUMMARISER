# backend/summariser.py
import os
import requests
from dotenv import load_dotenv

load_dotenv()
API_TOKEN = os.getenv("HF_API_TOKEN")

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"

# 🧠 Break text into ~1024 token-like chunks (word-based)
def split_text_into_chunks(text, chunk_word_limit=700):
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_word_limit):
        chunk = " ".join(words[i:i + chunk_word_limit])
        chunks.append(chunk)
    return chunks

# 🔍 Main GenAI function
def generate_summary(text):
    if not text.strip():
        return "No content to summarise", {}

    chunks = split_text_into_chunks(text)
    all_summaries = []

    print(f"📄 Splitting into {len(chunks)} chunks...")

    for idx, chunk in enumerate(chunks):
        print(f"📤 Sending chunk {idx + 1}/{len(chunks)} to HF API...")

        payload = {"inputs": chunk}
        try:
            response = requests.post(API_URL, headers=headers, json=payload)
            if response.status_code != 200:
                print(f"❌ Error on chunk {idx + 1}: {response.status_code} {response.text}")
                continue

            result = response.json()
            summary_text = result[0]["summary_text"] if isinstance(result, list) else result.get("summary_text", "")
            all_summaries.append(summary_text.strip())

        except Exception as e:
            print(f"🔥 Exception in chunk {idx + 1}: {e}")
            continue

    full_summary = "\n\n".join(all_summaries) if all_summaries else "Error summarising document"

    # 🏷 Dummy field extraction
    extracted_fields = {}
    if "vendor" in text.lower():
        extracted_fields["vendor"] = "Example Vendor"
    if "amount" in text.lower():
        extracted_fields["amount"] = "$10,000"

    return full_summary, extracted_fields
