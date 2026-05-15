import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
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
    <div className="flex w-full flex-col items-center gap-8">
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
      <div className="grid w-full grid-cols-2 md:grid-cols-4">
        {data.items.map((lang, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center gap-1 py-4',
              'border-very-soft-violet/30 border-r border-b',
              // Remove right border for the last item in each row (mobile)
              index % 2 === 1 && 'border-r-0',
              // Remove bottom border for the last items (mobile)
              index >=
                data.items.length - (data.items.length % 2 === 0 ? 2 : 1) &&
                'border-b-0',
              // Desktop overrides: Remove all borders
              'md:border-r-0 md:border-b-0',
              // Desktop: Add back right border except for the last item
              index < data.items.length - 1 &&
                'md:border-very-soft-violet/30 md:border-r',
            )}
          >
            <h6 className="text-moderate-lime-green text-sm sm:text-lg lg:text-xl">
              {lang.language}
            </h6>
            <p className="text-very-light-gray/60 text-xs sm:text-sm lg:text-lg">
              {lang.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
