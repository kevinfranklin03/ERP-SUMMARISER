import React from "react";

export default function SummaryCard({ summary, fields }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-green-700 mb-3">🔍 AI-Generated Summary</h3>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
        {summary.split(". ").map((point, i) => point.trim() && <li key={i}>{point.trim()}</li>)}
      </ul>

      {fields && Object.keys(fields).length > 0 && (
        <>
          <h4 className="mt-6 text-md font-medium text-indigo-600">📌 Extracted Fields</h4>
          <pre className="mt-2 bg-gray-100 p-3 text-xs rounded overflow-x-auto">
            {JSON.stringify(fields, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
}
