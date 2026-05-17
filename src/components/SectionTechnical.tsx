import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { Button, Link as HeroUILink, Modal } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import ContainerWrapper from './ContainerWrapper';
import Languages from './Languages';

interface TechnicalSolution {
  title: string;
  summary: string;
  scenario: string;
  solution: string;
  keyStack: string;
  linkKey: keyof typeof EXTERNAL_LINKS;
  linkText: string;
}

interface TechnicalData {
  title: string;
  description1: string;
  description2: string;
  explore: string;
  solutions: TechnicalSolution[];
}

const ModalBodySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-very-soft-violet/15 rounded-xl p-6">
    <h6 className="text-moderate-lime-green font-semibold uppercase">
      {title}
    </h6>
    <div className="leading-relaxed">{children}</div>
  </div>
);

const SolutionModal = ({ item }: { item: TechnicalSolution }) => (
  <Modal>
    <Modal.Trigger>
      <Button
        variant="ghost"
        className={cn(
          'hover:bg-moderate-lime-green/90 hover:text-very-light-gray transition-all duration-300 hover:scale-105 active:scale-95',
          'text-lg sm:text-xl lg:text-2xl',
          'border-moderate-lime-green text-very-light-gray border-2 border-solid px-8 py-5',
        )}
      >
        View Details
      </Button>
    </Modal.Trigger>
    <Modal.Backdrop isDismissable={true}>
      <Modal.Container placement="center">
        <Modal.Dialog className="bg-very-light-gray max-w-full sm:max-w-7/8 lg:max-w-2/3">
          <Modal.CloseTrigger />
          <Modal.Header className="border-b-solid border-b-very-soft-violet border-b-2">
            <Modal.Heading className="text-very-dark-blue text-2xl leading-[1.3] font-semibold tracking-wide sm:text-3xl lg:text-4xl">
              {item.title}
            </Modal.Heading>
          </Modal.Header>
          <Modal.Body className="my-4 max-w-none overflow-y-auto px-2 sm:px-6 lg:px-10">
            <div className="text-very-dark-blue flex flex-col gap-8">
              <ModalBodySection title="The Scenario">
                <ReactMarkdown
                  components={
                    { p: ({ children }) => <p>{children}</p> } as Components
                  }
                >
                  {item.scenario}
                </ReactMarkdown>
              </ModalBodySection>

              <ModalBodySection title="The Solution">
                <ReactMarkdown
                  components={
                    { p: ({ children }) => <p>{children}</p> } as Components
                  }
                >
                  {item.solution}
                </ReactMarkdown>
              </ModalBodySection>

              <ModalBodySection title="Explore the repo">
                <HeroUILink
                  href={EXTERNAL_LINKS[item.linkKey]}
                  target="_blank"
                  className="text-hyperlink font-bold no-underline hover:underline"
                >
                  <p>{item.linkText}</p>
                  <HeroUILink.Icon />
                </HeroUILink>
              </ModalBodySection>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
);

export default function SectionTechnical() {
  const { data } = getMarkdownContent<TechnicalData>('technical.md');

  return (
    <ContainerWrapper id="technicalSection" variant="ghost">
      <Container className="flex flex-col gap-8">
        {/* Intro Block */}
        <h2 className="text-center">{data.title}</h2>
        <ReactMarkdown
          components={
            {
              p: ({ children }) => (
                <p className="mx-auto w-full text-center whitespace-pre-line lg:w-2/3">
                  {children}
                </p>
              ),
            } as Components
          }
        >
          {data.description1}
        </ReactMarkdown>

        {/* Solutions Block */}
        <div className="my-4 grid w-full grid-cols-1 gap-8 lg:my-8 lg:grid-cols-2">
          {data.solutions.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex w-full flex-col items-center gap-3',
                'p-10 sm:p-16 lg:px-16 lg:py-12',
                'bg-very-light-gray/10 backdrop-blur-sm',
                'border-very-light-gray/5 rounded-2xl border',
              )}
            >
              <h4 className="text-moderate-lime-green text-center">
                {item.title}
              </h4>
              <p className="text-very-light-gray/80 text-center italic">
                {item.summary}
              </p>
              <hr className="border-very-soft-violet mt-8 mb-4 w-2/4" />

              <p className="text-very-light-gray/80 mb-8 text-center font-semibold">
                {item.keyStack}
              </p>
              <SolutionModal item={item} />
            </div>
          ))}
        </div>

        {/* Summary Block */}
        <ReactMarkdown
          components={
            {
              p: ({ children }) => (
                <p className="mx-auto text-center text-base leading-loose tracking-wide whitespace-pre-line lg:w-2/3 lg:text-2xl">
                  {children}
                </p>
              ),
            } as Components
          }
        >
          {data.description2}
        </ReactMarkdown>

        <div className="mx-auto w-full lg:w-2/3">
          <Languages />
        </div>

        {/* CTA Block */}
        <Link
          href="#contactSection"
          className={cn(
            'bg-very-soft-violet text-very-dark-blue rounded-full px-8 py-2 font-semibold! no-underline',
            'hover:bg-very-soft-violet/90 transition-all duration-300 hover:scale-105 active:scale-95',
            'mx-auto w-fit text-lg sm:text-xl lg:text-2xl',
          )}
        >
          Contact me
        </Link>
      </Container>
    </ContainerWrapper>
  );
}
