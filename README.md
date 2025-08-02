# ERP-Summariser360 🔍📄

ERP-Summariser360 is an AI-powered document summarisation tool designed to extract key insights from ERP-related documents like procurement contracts, job descriptions, and invoices. Built with a React + Tailwind frontend and a Flask backend, this tool integrates Hugging Face's transformer models to generate meaningful summaries from PDFs and DOCX files.

## 🚀 Demo

👉 [Watch Demo Video]
(https://github.com/user-attachments/assets/aaec62eb-5feb-431e-a29c-1443eeb063a2)


## 🧠 Features

- ✨ AI-powered summarisation using BART-large CNN
- 📁 Upload `.pdf` or `.docx` files for processing
- 🧠 Real-time preview of AI-generated summary
- 📦 Frontend built in React with Tailwind CSS
- 🔧 Backend powered by Flask and Hugging Face Transformers API
- 🔐 Secrets removed and GitHub-safe
- 🔄 Chunked input to bypass token limits and improve summarisation accuracy


![App Screenshot] (<img width="2555" height="1270" alt="image" src="https://github.com/user-attachments/assets/a10bff18-ae3c-4370-b4c0-ddbf1d6589ff" />)



## 🧱 Tech Stack

| Layer     | Stack                        |
|-----------|------------------------------|
| Frontend  | React.js, Tailwind CSS       |
| Backend   | Python, Flask, Transformers  |
| Hosting   | GitHub Pages (frontend), local dev server (backend) |
| AI Model  | [facebook/bart-large-cnn](https://huggingface.co/facebook/bart-large-cnn) |
| File Parsing | PyMuPDF, python-docx       |

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/kevinfranklin03/ERP-SUMMARISER.git
cd ERP-SUMMARISER
