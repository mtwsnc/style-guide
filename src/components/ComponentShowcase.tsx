'use client';

import React, { ReactNode } from 'react';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
}

export function ComponentShowcase({ title, description, children, code }: ComponentShowcaseProps) {
  return (
    <div className="mb-12 p-6 border border-gray-200 rounded-lg bg-white">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      
      {/* Live Component Demo */}
      <div className="mb-6 p-6 bg-gray-50 rounded-lg border">
        <div className="flex flex-wrap gap-4 items-center">
          {children}
        </div>
      </div>
      
      {/* Code Example */}
      <div className="bg-gray-900 rounded-lg p-4 text-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-xs">React/TypeScript</span>
          <button 
            onClick={() => navigator.clipboard.writeText(code)}
            className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Copy
          </button>
        </div>
        <pre className="text-gray-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}