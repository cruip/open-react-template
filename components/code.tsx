"use client";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import html from "highlight.js/lib/languages/xml";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/vs2015.min.css";

type CodeProps = {
  snippet: string;
  title?: string;
  type: "json" | "javascript" | "html" | "typescript" | "xml";
};

export default function Code({ snippet, title, type }: CodeProps) {
  const lang = { javascript, json, html, typescript, xml };

  hljs.registerLanguage(type, lang[type]);
  const highlightedCode = hljs.highlight(snippet, { language: type }).value;

  return (
    <div className="relative bg-gray-900 w-full p-4 rounded-md border border-gray-700">
      <div className="static text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">{title || "Code:"}</span>
        </div>
      </div>
      <div className="relative overflow-x-auto border border-gray-700 h-96">
        <div className="flex justify-between items-center">
          <pre id="code" className="text-gray-300">
            <code className={`language-${type}`}>
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
