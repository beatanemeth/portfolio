'use client';

import { cn } from '@/utils/cn';
import { BlogCategory, PostMetadata, Short } from '@/utils/mdContent';
import { Accordion, Tabs } from '@heroui/react';
import { SlArrowDown } from 'react-icons/sl';
import ReactMarkdown from 'react-markdown';
import Container from './Container';
import PostCard from './PostCard';

interface BlogTabsProps {
  posts: PostMetadata[];
  shorts: Short[];
}

interface TabItem {
  id: BlogCategory;
  label: string;
}

const TAB_LIST: TabItem[] = [
  { id: 'engineering', label: 'Engineering' },
  { id: 'insights', label: 'Insights' },
  { id: 'shorts', label: 'Shorts' },
];

const ShortsAccordion = ({ shorts }: { shorts: Short[] }) => (
  <Accordion hideSeparator>
    {shorts.map((short, index) => (
      <Accordion.Item
        id={index.toString()}
        key={index.toString()}
        className="border-b-solid border-very-soft-violet/20 border-b"
      >
        <Accordion.Heading>
          <Accordion.Trigger className="flex w-full items-center justify-start! gap-4 py-4">
            <Accordion.Indicator className="text-very-soft-violet order-first transition-transform duration-300 data-[open=true]:rotate-180">
              <SlArrowDown strokeWidth={96} />
            </Accordion.Indicator>
            <span className="text-very-soft-violet flex-1 text-left text-sm leading-relaxed font-medium tracking-normal sm:text-base lg:text-xl">
              {short.headline.replace(/\*\*/g, '')}
            </span>
          </Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel className={cn('bg-very-light-gray/80 rounded-b-md')}>
          <Accordion.Body>
            <div className="px-2 pt-4 sm:px-4 sm:pt-8 lg:px-8 lg:pt-8">
              <ReactMarkdown
                components={{
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-very-dark-blue hover:decoration-very-dark-blue underline underline-offset-4 transition-colors"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-very-soft-violet text-very-dark-blue/80 my-4 border-l-4 pl-4 italic">
                      {children}
                    </blockquote>
                  ),
                  p: ({ children }) => (
                    <p className="text-very-dark-blue mb-4">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => <li>{children}</li>,
                  strong: ({ children }) => (
                    <strong className="text-very-dark-blue font-semibold">
                      {children}
                    </strong>
                  ),
                }}
              >
                {short.content}
              </ReactMarkdown>
            </div>
          </Accordion.Body>
        </Accordion.Panel>
      </Accordion.Item>
    ))}
  </Accordion>
);

export default function BlogTabs({ posts, shorts }: BlogTabsProps) {
  const engineeringPosts = posts.filter((p) => p.category === 'engineering');
  const insightsPosts = posts.filter((p) => p.category === 'insights');

  return (
    <Container className="space-y-4 px-0">
      <Tabs variant="secondary" className="w-full">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Blog Categories">
            {TAB_LIST.map((tab) => (
              <Tabs.Tab key={tab.id} id={tab.id}>
                {tab.label}
                <Tabs.Indicator />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>

        <Tabs.Panel id="engineering" className="pt-8">
          <div className="space-y-4">
            {engineeringPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="insights" className="pt-8">
          <div className="space-y-4">
            {insightsPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="shorts" className="pt-8">
          <ShortsAccordion shorts={shorts} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
