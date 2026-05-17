import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { getMarkdownContent } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
import { Accordion } from '@heroui/react';
import React from 'react';
import { AiOutlinePartition } from 'react-icons/ai';
import { GiCrane, GiTestTubes } from 'react-icons/gi';
import { SlArrowDown } from 'react-icons/sl';
import ReactMarkdown, { type Components } from 'react-markdown';

interface Analogy {
  title: string;
  biology: string;
  architecture: string;
}

interface EvolutionData {
  title: string;
  intro: string;
  example1: string;
  example2: string;
  closing: string;
  analogies: Analogy[];
}

const MARKDOWN_LIST_COMPONENTS: Components = {
  p: ({ children }) => <p className="mb-4">{children}</p>,
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6">{children}</ol>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
};

const ExampleItem = ({
  icon: Icon,
  content,
}: {
  icon: React.ElementType;
  content: string;
}) => (
  <div className="flex flex-col gap-4">
    <div className="bg-moderate-lime-green w-fit rounded-full p-4">
      <Icon className="text-very-light-gray text-3xl" />
    </div>
    <div className="text-very-light-gray">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  </div>
);

const AnalogyItem = ({ title, biology, architecture }: Analogy) => (
  <Accordion allowsMultipleExpanded className="text-very-dark-blue">
    <Accordion.Item>
      <Accordion.Heading className="bg-very-soft-blue rounded-lg">
        <Accordion.Trigger>
          {title}
          <Accordion.Indicator className="text-very-dark-blue">
            <SlArrowDown strokeWidth={96} />
          </Accordion.Indicator>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body className="bg-very-light-gray mx-4 rounded-b-2xl">
          <div className="px-6 py-6 text-justify">
            <ReactMarkdown components={MARKDOWN_LIST_COMPONENTS}>
              {biology}
            </ReactMarkdown>
            <div className="mt-10 flex items-center gap-4">
              <GiCrane className="text-dark-moderate-lime-green text-4xl" />
              <div className="bg-dark-moderate-lime-green/30 h-0.5 flex-1" />
              <p className="text-very-dark-blue font-semibold">
                The Architecture Analogy
              </p>
            </div>
            <ReactMarkdown components={MARKDOWN_LIST_COMPONENTS}>
              {architecture}
            </ReactMarkdown>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export default function SectionEvolution() {
  const { data: evolutionData, content } =
    getMarkdownContent<EvolutionData>('evolution.md');

  return (
    <ContainerWrapper
      id="evolutionSection"
      variant="primary"
      className="bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${withBasePath('/system_blue.webp')}')` }}
    >
      {/* Intro Block */}
      <Container className="flex flex-col gap-8">
        <h2 className="text-center">{evolutionData.title}</h2>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="mx-auto w-full text-center lg:w-2/3">{children}</p>
            ),
          }}
        >
          {evolutionData.intro}
        </ReactMarkdown>
      </Container>

      {/* Core Concept Block */}
      <div className="bg-strong-blue my-20 max-w-none py-16">
        <Container className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Left Side Content: Text */}
          <div className="flex w-full flex-col lg:w-1/3">
            <ReactMarkdown components={MARKDOWN_LIST_COMPONENTS}>
              {content}
            </ReactMarkdown>
          </div>

          {/* Right Side Content: Text */}
          <div className="bg-very-light-gray/10 border-very-light-gray/10 flex w-full flex-col justify-center rounded-2xl border p-8 backdrop-blur-xs lg:w-2/3 lg:p-12">
            <ExampleItem icon={GiTestTubes} content={evolutionData.example1} />
            <hr className="border-moderate-lime-green my-8" />
            <ExampleItem
              icon={AiOutlinePartition}
              content={evolutionData.example2}
            />
          </div>
        </Container>
      </div>

      {/* Analogies Block */}
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-center">Analogies: Biology vs Tech</h3>
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="text-center">{children}</p>,
            }}
          >
            {evolutionData.closing}
          </ReactMarkdown>
        </div>

        <div className="columns-1 gap-12 lg:columns-2">
          {evolutionData.analogies.map((analogy: Analogy, index: number) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <AnalogyItem {...analogy} />
            </div>
          ))}
        </div>
      </Container>
    </ContainerWrapper>
  );
}
