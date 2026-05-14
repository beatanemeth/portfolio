import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { getMarkdownContent } from '@/utils/mdContent';
import { Button, Link as HeroUILink, Modal, Surface } from '@heroui/react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface TechnicalSolution {
  title: string;
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

export default function SectionTechnical() {
  const { data } = getMarkdownContent<TechnicalData>('technical.md');

  return (
    <Container
      as="section"
      id="technicalSection"
      className="flex flex-col gap-8 py-32"
    >
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
            className="shadow-very-soft-blue/40 border-very-soft-blue/20 mx-auto flex w-full flex-col gap-3 rounded-2xl border-2 border-solid px-6 py-10 shadow-xl/40 lg:w-1/4"
            variant="transparent"
          >
            <Modal>
              <div className="flex flex-col items-center gap-2">
                <h5 className="text-moderate-lime-green text-center font-semibold">
                  {item.title}
                </h5>
                <Button
                  variant="ghost"
                  className="border-moderate-lime-green text-very-light-gray hover:text-very-dark-blue border-2 border-solid px-10 py-6 text-lg hover:border-0 sm:text-xl lg:text-2xl"
                >
                  View Details
                </Button>
              </div>
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
                        <h6 className="text-moderate-lime-green mb-0">
                          The Scenario
                        </h6>
                        <ReactMarkdown>{item.scenario}</ReactMarkdown>
                      </div>
                      <div className="text-very-dark-blue my-8 flex flex-col">
                        <h6 className="text-moderate-lime-green mb-0">
                          The Solution
                        </h6>
                        <ReactMarkdown>{item.solution}</ReactMarkdown>
                      </div>
                    </Modal.Body>
                    <Modal.Footer className="flex flex-col items-start">
                      <h6 className="text-moderate-lime-green mb-0">
                        Explore the repo
                      </h6>
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
          </Surface>
        ))}
      </div>

      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="mx-auto w-full text-center text-base sm:text-xl lg:w-2/3 lg:text-2xl">
              {children}
            </p>
          ),
        }}
      >
        {data.description2}
      </ReactMarkdown>
      <Link
        href="#contactSection"
        className={
          'bg-very-soft-violet text-very-dark-blue mx-auto w-fit rounded-4xl px-8 py-4 text-center text-2xl font-semibold transition-transform duration-300 hover:scale-105 active:scale-95'
        }
      >
        Contact me
      </Link>
    </Container>
  );
}
