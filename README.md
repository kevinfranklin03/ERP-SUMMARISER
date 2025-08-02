# ERP-Summariser 🔍📄

ERP-Summariser360 is an AI-powered document summarisation tool designed to extract key insights from ERP-related documents like procurement contracts, job descriptions, and invoices. Built with a React + Tailwind frontend and a Flask backend, this tool integrates Hugging Face's transformer models to generate meaningful summaries from PDFs and DOCX files.

## 🚀 Demo

👉 [Watch Demo Video](https://github.com/user-attachments/assets/aaec62eb-5feb-431e-a29c-1443eeb063a2)

## 🧠 Features

- ✨ AI-powered summarisation using BART-large CNN
- 📁 Upload `.pdf` or `.docx` files for processing
- 🧠 Real-time preview of AI-generated summary
- 📦 Frontend built in React with Tailwind CSS
- 🔧 Backend powered by Flask and Hugging Face Transformers API
- 🔐 Secrets removed and GitHub-safe
- 🔄 Chunked input to bypass token limits and improve summarisation accuracy

## 🖼️ Screenshot

![App Screenshot](https://github.com/user-attachments/assets/a10bff18-ae3c-4370-b4c0-ddbf1d6589ff)


## 🧱 Tech Stack

| Layer     | Stack                        |
|-----------|------------------------------|
| Frontend  | React.js, Tailwind CSS       |
| Backend   | Python, Flask, Transformers  |
| Hosting   | GitHub Pages (frontend), local dev server (backend) |
| AI Model  | [facebook/bart-large-cnn](https://huggingface.co/facebook/bart-large-cnn) |
| File Parsing | PyMuPDF, python-docx       |

## Setup Instructions

### 1. Prerequisites
- Python 3.8+
- Node.js 16+
- Hugging Face API token (for summarization)

### 2. Backend Setup
```bash
cd Backend
pip install -r requirements.txt
python app.py
```


```bash
API_TOKEN = "your_hf_token_here"
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
