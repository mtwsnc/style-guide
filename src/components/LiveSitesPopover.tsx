"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface LiveSite {
  title: string;
  url: string;
  description: string;
}

const liveSites: LiveSite[] = [
  {
    title: "Main Website",
    url: "mtws.org",
    description: "Community hub and worship information"
  },
  {
    title: "Seminars & Events Site", 
    url: "mtws.one",
    description: "Educational seminars and community events"
  },
  {
    title: "Da'wah Portal",
    url: "dawah.mtws.one", 
    description: "Islamic outreach and educational resources"
  }
];

export const LiveSitesPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close popover on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSiteClick = (url: string) => {
    window.open(`https://${url}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
          ${isOpen 
            ? 'bg-primary-green text-white shadow-md' 
            : 'text-gray-700 hover:text-primary-green hover:bg-gray-50'
          }
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="View live MTWS websites"
      >
        <Globe className="w-4 h-4" />
        Live Sites
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
          role="menu"
          aria-label="Live MTWS websites"
        >
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">MTWS Digital Ecosystem</h3>
            <p className="text-xs text-gray-500 mt-1">Access our live websites</p>
          </div>
          
          <div className="py-2">
            {liveSites.map((site, index) => (
              <button
                key={index}
                onClick={() => handleSiteClick(site.url)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 group"
                role="menuitem"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-green transition-colors">
                        {site.title}
                      </h4>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-primary-green transition-colors" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{site.description}</p>
                    <p className="text-xs font-mono text-primary-green bg-primary-green/10 px-2 py-1 rounded inline-block">
                      {site.url}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="px-4 py-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              Click any site to open in a new tab
            </p>
          </div>
        </div>
      )}
    </div>
  );
};