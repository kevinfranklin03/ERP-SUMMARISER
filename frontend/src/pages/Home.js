import React, { useState } from "react";
import axios from "axios";
import SummaryCard from "../components/SummaryCard";

export default function Home() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSummarise = async () => {
    setLoading(true);
    try {
      let response;
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        response = await axios.post(`${process.env.REACT_APP_API_BASE}/api/summarise-file`, formData);
      } else {
        response = await axios.post(`${process.env.REACT_APP_API_BASE}/api/summarise`, { text });
      }
      setResult(response.data);
    } catch (err) {
      alert("Error summarising file.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fefae0] flex flex-col justify-center items-center px-4 py-10">
      {/* 🧠 Hero */}
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">📑 ERP-Summariser360</h1>
      <p className="text-sm text-gray-600 mb-8">powered by GenAI</p>

      {/* 📦 Card Container */}
      <div className="bg-white w-full max-w-3xl shadow-lg rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold text-indigo-800">Summarise your document</h2>

        {/* 📝 Inputs */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Text Input */}
          <textarea
            className="flex-1 border border-gray-300 rounded-lg p-4 text-sm resize-none min-h-[160px] focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Paste contract text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* File Upload */}
<div className="flex flex-col gap-4 w-full md:w-1/2 mx-auto mt-8">
  <label className="text-sm font-semibold text-gray-700">
    Or upload a file:
  </label>

  <input
    type="file"
    accept=".pdf,.docx"
    onChange={(e) => {
      const selected = e.target.files[0];
      setFile(selected);
      console.log("📁 File selected:", selected?.name, selected?.size + " bytes");
    }}
    className="block w-full text-sm text-gray-900
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:bg-pink-600 file:text-white
      hover:file:bg-pink-700 transition-colors duration-200
      cursor-pointer shadow-sm border border-gray-200 rounded-lg p-1"
  />

  <p className="text-xs text-gray-500">
    Supported formats: <strong>.pdf</strong>, <strong>.docx</strong>
  </p>
</div>
        </div>

        {/* 🔘 Button */}
        <div className="text-center">
          <button
            onClick={handleSummarise}
            disabled={loading}
            className={`w-full md:w-auto px-8 py-2 rounded-lg font-semibold text-white transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 shadow-md"
            }`}
          >
            {loading ? "Summarising..." : "Get Summary"}
          </button>
        </div>
      </div>

      {/* 🎯 Output */}
      {result && (
        <div className="mt-10 w-full max-w-3xl">
          <SummaryCard summary={result.summary} fields={result.fields} />
        </div>
      )}

      {/* 🚀 Footer */}
      <footer className="text-center text-sm text-gray-400 mt-10">
        © 2025 ERP-Summariser360 by Kevin | Built with React + Tailwind
      </footer>
    </div>
  );
}
