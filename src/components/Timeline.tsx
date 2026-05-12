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
  science: <FaMicroscope className="text-very-dark-blue text-2xl" />,
  web: <FaCode className="text-very-dark-blue text-2xl" />,
  engineering: <FaCogs className="text-very-dark-blue text-2xl" />,
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
              className={`bg-very-dark-blue/20 absolute left-[23px] w-[2px] ${index === 0 ? 'top-[-40px] bottom-[-48px]' : ''} ${index > 0 && index < data.events.length - 1 ? 'top-0 bottom-[-48px]' : ''} ${index === data.events.length - 1 ? 'top-0 h-[24px]' : ''} `}
            />

            {/* Timeline Marker */}
            <div className="bg-very-soft-violet shadow-very-dark-blue relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-lg">
              {getIcon(event.icon)}
            </div>

            <div className="flex flex-1 flex-col">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                <h5 className="text-very-dark-blue">{event.title}</h5>
                <div className="flex gap-2">
                  <span className="text-very-light-gray/70 text-base font-medium">
                    {event.date}
                  </span>
                  <Chip
                    size="md"
                    variant="secondary"
                    className={`text-very-dark-blue/80 bg-very-light-gray/60 text-base ${
                      event.status !== 'Completed' ? 'font-bold' : ''
                    }`}
                  >
                    {event.status}
                  </Chip>
                </div>
              </div>

              <div className="mb-4">
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
                    variant="primary"
                    className="bg-moderate-lime-green/80 text-bold text-very-light-gray text-xl"
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
