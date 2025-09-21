import React from 'react';

interface TypographyScaleProps {
  title: string;
  samples: {
    element: string;
    className: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    text: string;
  }[];
}

export function TypographyScale({ title, samples }: TypographyScaleProps) {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-6">
        {samples.map((sample, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              {/* Typography Sample */}
              <div className="lg:col-span-2">
                <div 
                  className={sample.className}
                  style={{ 
                    fontSize: sample.fontSize,
                    lineHeight: sample.lineHeight,
                    fontWeight: sample.fontWeight 
                  }}
                >
                  {sample.text}
                </div>
              </div>
              
              {/* Typography Details */}
              <div className="lg:col-span-1">
                <div className="text-sm text-gray-600 space-y-1">
                  <div><strong>Element:</strong> {sample.element}</div>
                  <div><strong>Class:</strong> <code className="bg-gray-100 px-1 rounded">{sample.className}</code></div>
                  <div><strong>Size:</strong> {sample.fontSize}</div>
                  <div><strong>Line Height:</strong> {sample.lineHeight}</div>
                  <div><strong>Weight:</strong> {sample.fontWeight}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}