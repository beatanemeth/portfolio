import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { Button, Link as HeroUILink, Modal } from '@heroui/react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import ContainerWrapper from './ContainerWrapper';

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
        <Modal.Dialog className="bg-very-light-gray w-full lg:max-w-2/4">
          <Modal.CloseTrigger />
          <Modal.Header className="border-b-solid border-b-very-soft-violet border-b-2">
            <Modal.Heading className="text-very-dark-blue text-2xl leading-[1.3] font-semibold tracking-wide sm:text-3xl lg:text-4xl">
              {item.title}
            </Modal.Heading>
          </Modal.Header>
          <Modal.Body className="my-4 max-w-none overflow-y-auto px-4 lg:px-10">
            <div className="text-very-dark-blue flex flex-col gap-8">
              {/* Scenario Section */}
              <div className="bg-very-dark-blue/5 rounded-xl p-6">
                <h6 className="text-moderate-lime-green mb-2 uppercase">
                  The Scenario
                </h6>
                <div className="leading-relaxed">
                  <ReactMarkdown>{item.scenario}</ReactMarkdown>
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-very-dark-blue/5 rounded-xl p-6">
                <h6 className="text-moderate-lime-green mb-2 uppercase">
                  The Solution
                </h6>
                <div className="leading-relaxed">
                  <ReactMarkdown>{item.solution}</ReactMarkdown>
                </div>
              </div>

              {/* Link Section */}
              <div className="bg-very-dark-blue/5 rounded-xl p-6">
                <h6 className="text-moderate-lime-green mb-2 uppercase">
                  Explore the repo
                </h6>
                <HeroUILink
                  href={EXTERNAL_LINKS[item.linkKey]}
                  target="_blank"
                  className="text-hyperlink font-bold no-underline hover:underline"
                >
                  <p>{item.linkText}</p>
                  <HeroUILink.Icon />
                </HeroUILink>
              </div>
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
        <h2 className="text-center">{data.title}</h2>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="mx-auto w-full text-center whitespace-pre-line lg:w-2/3">
                {children}
              </p>
            ),
          }}
        >
          {data.description1}
        </ReactMarkdown>

        <div className="mb-18 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {data.solutions.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex w-full flex-col items-center gap-3 rounded-2xl px-12 py-16',
                'bg-very-light-gray/10 backdrop-blur-sm',
                'border-very-light-gray/5 rounded-2xl border',
              )}
            >
              <h4 className="text-moderate-lime-green text-center font-semibold">
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

        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="mx-auto text-center text-base leading-loose tracking-wide whitespace-pre-line lg:w-2/3 lg:text-2xl">
                {children}
              </p>
            ),
          }}
        >
          {data.description2}
        </ReactMarkdown>
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
