import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { Button, Link as HeroUILink, Modal, Surface } from '@heroui/react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import ContainerWrapper from './ContainerWrapper';

interface TechnicalSolution {
  title: string;
  summary: string;
  scenario: string;
  solution: string;
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
        className="border-moderate-lime-green text-very-light-gray hover:text-very-dark-blue border-2 border-solid px-10 py-6 text-lg hover:border-0 sm:text-xl lg:text-2xl"
      >
        View Details
      </Button>
    </Modal.Trigger>
    <Modal.Backdrop isDismissable={true}>
      <Modal.Container placement="center">
        <Modal.Dialog className="bg-very-light-gray w-full lg:max-w-2/4">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Heading className="text-very-dark-blue text-xl leading-[1.4] font-medium tracking-wide sm:text-2xl lg:text-3xl">
              {item.title}
            </Modal.Heading>
          </Modal.Header>
          <Modal.Body>
            <div className="text-very-dark-blue flex flex-col">
              <h6 className="text-moderate-lime-green mb-0">The Scenario</h6>
              <ReactMarkdown>{item.scenario}</ReactMarkdown>
            </div>
            <div className="text-very-dark-blue my-8 flex flex-col">
              <h6 className="text-moderate-lime-green mb-0">The Solution</h6>
              <ReactMarkdown>{item.solution}</ReactMarkdown>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex flex-col items-start">
            <h6 className="text-moderate-lime-green mb-0">Explore the repo</h6>
            <HeroUILink
              href={EXTERNAL_LINKS[item.linkKey]}
              target="_blank"
              className="text-hyperlink font-bold"
            >
              <p>{item.linkText}</p>
              <HeroUILink.Icon />
            </HeroUILink>
          </Modal.Footer>
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

        <div className="mb-18 flex flex-col justify-center gap-8 lg:flex-row">
          {data.solutions.map((item, index) => (
            <Surface
              key={index}
              className={cn(
                'border-very-soft-blue/20 flex w-full flex-col gap-3 rounded-2xl border-2 border-solid px-6 py-10',
                'shadow-very-soft-blue/40 shadow-xl/40',
                'lg:w-1/4 lg:flex-1',
              )}
              variant="transparent"
            >
              <div className="flex flex-col items-center gap-4">
                <h5 className="text-moderate-lime-green text-center font-semibold">
                  {item.title}
                </h5>
                <p className="text-very-light-gray/80 text-center italic">
                  {item.summary}
                </p>
                <SolutionModal item={item} />
              </div>
            </Surface>
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
