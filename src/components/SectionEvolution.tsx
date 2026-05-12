import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Accordion } from '@heroui/react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { AiOutlinePartition } from 'react-icons/ai';
import { GiCrane, GiTestTubes } from 'react-icons/gi';
import { SlArrowDown } from 'react-icons/sl';
import ReactMarkdown from 'react-markdown';

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

const AnalogyItem = ({ title, biology, architecture }: Analogy) => (
  <Accordion
    allowsMultipleExpanded
    className="text-very-dark-blue bg-very-soft-blue w-full rounded-md"
  >
    <Accordion.Item>
      <Accordion.Heading>
        <Accordion.Trigger>
          {title}
          <Accordion.Indicator className="text-very-dark-blue">
            <SlArrowDown />
          </Accordion.Indicator>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="px-6">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-4">{children}</p>,
                ol: ({ children }) => (
                  <ol className="mb-4 list-decimal space-y-2 pl-6">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>
                ),
                li: ({ children }) => <li className="pl-1">{children}</li>,
              }}
            >
              {biology}
            </ReactMarkdown>
            <div className="mt-10 flex items-center gap-4">
              <p className="mb-0 font-semibold">The Architecture Analogy</p>
              <GiCrane className="text-moderate-lime-green text-3xl" />
            </div>
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-4">{children}</p>,
                ol: ({ children }) => (
                  <ol className="mb-4 list-decimal space-y-2 pl-6">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>
                ),
                li: ({ children }) => <li className="pl-1">{children}</li>,
              }}
            >
              {architecture}
            </ReactMarkdown>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export default function SectionEvolution() {
  const filePath = path.join(process.cwd(), 'src/data/evolution.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const evolutionData = data as unknown as EvolutionData;

  return (
    <ContainerWrapper id="evolutionSection">
      <Container className="flex flex-col gap-8 py-32">
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

        <div className="my-6 flex flex-col items-start justify-center lg:flex-row lg:gap-18">
          {/* Left Side: Text */}
          <div className="flex w-full flex-col gap-2 p-8 lg:w-1/2">
            <ReactMarkdown
              components={{
                ol: ({ children }) => (
                  <ol className="mb-4 list-decimal space-y-2 pl-6">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>
                ),
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Right Side: Text */}
          <div className="shadow-very-dark-blue/80 flex w-full flex-col justify-center rounded-2xl p-8 shadow-lg/40 lg:w-1/2">
            <GiTestTubes className="text-moderate-lime-green mb-2 text-5xl" />
            <ReactMarkdown>{evolutionData.example1}</ReactMarkdown>
            <AiOutlinePartition className="text-moderate-lime-green mt-10 text-5xl" />
            <ReactMarkdown>{evolutionData.example2}</ReactMarkdown>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <h4 className="text-center">Analogies: Biology vs Tech</h4>
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="text-center">{children}</p>,
            }}
          >
            {evolutionData.closing}
          </ReactMarkdown>
        </div>

        <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-12">
          {/* Left Side */}
          <div className="flex w-full flex-col justify-center gap-2 lg:w-1/2">
            {/*map the first three analogies */}
            {evolutionData.analogies
              .slice(0, 3)
              .map((analogy: Analogy, index: number) => (
                <AnalogyItem key={index} {...analogy} />
              ))}
          </div>

          {/* Right Side */}
          <div className="flex w-full flex-col justify-center gap-2 lg:w-1/2">
            {/*map the last three analogies */}
            {evolutionData.analogies
              .slice(3, 6)
              .map((analogy: Analogy, index: number) => (
                <AnalogyItem key={index} {...analogy} />
              ))}
          </div>
        </div>
      </Container>
    </ContainerWrapper>
  );
}
