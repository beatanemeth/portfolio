import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { Chip } from '@heroui/react';
import { FaCode, FaCogs, FaMicroscope } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface TimelineEvent {
  title: string;
  date: string;
  status: string;
  description: string;
  technologies: string[];
  icon: 'science' | 'web' | 'engineering';
}

interface TimelineData {
  title: string;
  events: TimelineEvent[];
}

const ICON_MAP = {
  science: <FaMicroscope className="text-very-dark-blue/80 text-2xl" />,
  web: <FaCode className="text-very-dark-blue/80 text-2xl" />,
  engineering: <FaCogs className="text-very-dark-blue/80 text-2xl" />,
};

const getIcon = (iconName: keyof typeof ICON_MAP) => {
  return ICON_MAP[iconName] || null;
};

export default function Timeline() {
  const { data } = getMarkdownContent<TimelineData>('timeline.md');

  return (
    <div className="flex flex-col gap-12 py-12">
      <h3 className="text-center">{data.title}</h3>
      <div className="relative">
        {data.events.map((event, index) => (
          <div key={index} className="relative z-10 mb-12 flex gap-8 last:mb-0">
            {/* The Vertical Line Logic */}
            <div
              className={cn(
                'bg-very-dark-blue/20 absolute left-[23px] w-[2px]',
                index === 0 && 'top-[-40px] bottom-[-48px]',
                index > 0 &&
                  index < data.events.length - 1 &&
                  'top-0 bottom-[-48px]',
                index === data.events.length - 1 && 'top-0 h-[24px]',
              )}
            />

            {/* Timeline Marker */}
            <div
              className={cn(
                'bg-very-soft-violet relative z-10 flex shrink-0 items-center justify-center rounded-full',
                'h-12 w-12',
                'shadow-very-dark-blue/80 shadow-lg',
              )}
            >
              {getIcon(event.icon)}
            </div>

            <div className="flex flex-1 flex-col">
              <div className="mb-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-2">
                <h5 className="text-very-dark-blue">{event.title}</h5>
                <div className="flex items-center gap-3">
                  <span className="text-very-light-gray/80 text-xs font-medium sm:text-sm lg:text-base">
                    {event.date}
                  </span>
                  <div className="border-r-solid border-r-very-soft-violet h-6 border-r-2"></div>
                  <span
                    className={cn(
                      'text-very-light-gray/80',
                      event.status === 'COMPLETED'
                        ? 'font-normal'
                        : 'font-bold',
                    )}
                  >
                    {event.status}
                  </span>
                </div>
              </div>

              <div className="my-4">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="italic">{children}</p>,
                  }}
                >
                  {event.description}
                </ReactMarkdown>
              </div>

              <div className="flex flex-wrap gap-2">
                {event.technologies.map((tech, tIndex) => (
                  <Chip
                    key={tIndex}
                    size="lg"
                    variant="tertiary"
                    className={cn(
                      'bg-moderate-lime-green text-very-dark-blue',
                      'text-semibold text-sm sm:text-base lg:text-xl',
                      'shadow-very-dark-blue/80 shadow-lg/40',
                    )}
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
