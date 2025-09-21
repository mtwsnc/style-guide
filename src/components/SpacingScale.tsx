import React from 'react';

interface SpacingScaleProps {
  values: {
    name: string;
    value: string;
    pixels: string;
    usage: string;
  }[];
}

export function SpacingScale({ values }: SpacingScaleProps) {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Spacing Scale</h3>
      <div className="space-y-4">
        {values.map((spacing, index) => (
          <div key={index} className="flex items-center gap-6 p-4 border border-gray-100 rounded-lg">
            {/* Visual Representation */}
            <div className="flex items-center gap-2">
              <div 
                className="bg-primary-green"
                style={{ 
                  width: spacing.pixels, 
                  height: '20px',
                  minWidth: '4px'
                }}
              />
              <span className="text-sm text-gray-600 w-12">{spacing.pixels}</span>
            </div>
            
            {/* Details */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                  {spacing.name}
                </code>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                  {spacing.value}
                </code>
                <span className="text-sm text-gray-600">{spacing.usage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}