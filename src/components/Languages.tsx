import { getMarkdownContent } from '@/utils/mdContent';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface LanguageItem {
  language: string;
  level: string;
}

interface LanguageData {
  intro: string;
  items: LanguageItem[];
}

export default function Languages() {
  const { data } = getMarkdownContent<LanguageData>('language.md');

  return (
    <div className="flex w-full flex-col items-center gap-1">
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="text-very-light-gray/80 text-center italic">
              {children}
            </p>
          ),
        }}
      >
        {data.intro}
      </ReactMarkdown>

      <hr className="border-very-soft-violet/30 mx-auto my-6 w-1/4" />

      <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
        {data.items.map((lang, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-2">
              <span className="text-moderate-lime-green font-raleway">
                {lang.language}
              </span>
              <span className="text-very-light-gray/60 italic">
                ({lang.level})
              </span>
            </div>
            {index < data.items.length - 1 && (
              <span className="text-very-light-gray/30 select-none">
                &#8212;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
