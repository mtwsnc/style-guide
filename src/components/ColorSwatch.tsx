'use client';

import React, { useState } from 'react';

interface ColorSwatchProps {
  name: string;
  value: string;
  description: string;
  usage: string[];
}

export function ColorSwatch({ name, value, description, usage }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy color:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      <div 
        className="h-24 cursor-pointer flex items-center justify-center relative group"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          {copied ? 'Copied!' : 'Click to copy'}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <code 
            className="text-xs bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={copyToClipboard}
          >
            {value}
          </code>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div>
          <h4 className="text-xs font-medium text-gray-900 mb-1">Usage:</h4>
          <ul className="text-xs text-gray-600">
            {usage.map((use, index) => (
              <li key={index}>• {use}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}