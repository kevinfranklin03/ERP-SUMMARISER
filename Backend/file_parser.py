from docx import Document
import fitz  # PyMuPDF
import os

def extract_text_from_file(filepath, filename):
    ext = os.path.splitext(filename)[1].lower()

    if ext == ".pdf":
        text = extract_text_from_pdf(filepath)
        print("📄 PDF Extracted Text:\n", text[:500])  # Debug: show first 500 chars
        return text

    elif ext == ".docx":
        text = extract_text_from_docx(filepath)
        print("📄 DOCX Extracted Text:\n", text[:500])  # Debug: show first 500 chars
        return text

    else:
        print(f"⚠️ Unsupported file type: {ext}")
        return ""

def extract_text_from_pdf(filepath):
    text = ""
    try:
        with fitz.open(filepath) as doc:
            for page in doc:
                text += page.get_text()
    except Exception as e:
        print(f"❌ Error reading PDF: {e}")
    return text

def extract_text_from_docx(filepath):
    try:
        doc = Document(filepath)
        return "\n".join([para.text for para in doc.paragraphs])
    except Exception as e:
        print(f"❌ Error reading DOCX: {e}")
        return ""
