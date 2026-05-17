import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
import { Accordion } from '@heroui/react';
import React from 'react';
import { HiOutlineHandRaised } from 'react-icons/hi2';
import { LuBookOpenCheck } from 'react-icons/lu';
import { SlArrowDown } from 'react-icons/sl';
import { TbYoga } from 'react-icons/tb';
import ReactMarkdown, { type Components } from 'react-markdown';

interface PersonSection {
  title: string;
  description: string;
  actions: string[];
}

interface PersonData {
  title: string;
  intro: string;
  sections: PersonSection[];
}

const ICON_MAP = {
  manual: HiOutlineHandRaised,
  movement: TbYoga,
  connection: LuBookOpenCheck,
};

const getIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  const key = (Object.keys(ICON_MAP) as Array<keyof typeof ICON_MAP>).find(
    (k) => lowerTitle.includes(k),
  );

  if (!key) return null;
  const Icon = ICON_MAP[key];

  return (
    <div className="bg-moderate-lime-green w-fit rounded-full p-4">
      <Icon className="text-very-light-gray text-3xl" />
    </div>
  );
};

const PersonAccordion = ({ actions }: { actions: string[] }) => (
  <Accordion hideSeparator>
    <Accordion.Item className="border-b-moderate-lime-green border-b-2 border-solid">
      <Accordion.Heading>
        <Accordion.Trigger>
          Practices
          <Accordion.Indicator className="text-very-light-gray">
            <SlArrowDown strokeWidth={96} />
          </Accordion.Indicator>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel className={cn('bg-very-light-gray/80 rounded-b-md')}>
        <Accordion.Body>
          <ul className="p-6">
            {actions.map((action, aIndex) => (
              <li key={aIndex} className="list-disc space-y-2 pl-2">
                <ReactMarkdown>{action}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export default function SectionPerson() {
  const { data } = getMarkdownContent<PersonData>('person.md');

  return (
    <ContainerWrapper id="personSection" variant="primary">
      {/* Intro Block */}
      <Container className="flex flex-col gap-8">
        <h2 className="text-center">{data.title}</h2>

        <ReactMarkdown
          components={
            {
              p: ({ children }) => (
                <p className="mx-auto w-full text-center lg:w-2/3">
                  {children}
                </p>
              ),
            } as Components
          }
        >
          {data.intro}
        </ReactMarkdown>
      </Container>

      {/* Visual Block */}
      <div
        id="parallaxPerson"
        className="my-16 h-64 w-full bg-cover bg-fixed bg-center bg-no-repeat lg:h-96"
        style={{
          backgroundImage: `url('${withBasePath('/system_architecture.webp')}')`,
        }}
      />

      {/* Details Block */}
      <Container className="flex flex-col justify-center gap-12 sm:gap-8 lg:flex-row lg:gap-6 lg:px-0">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className="-400 flex flex-col items-center gap-6 px-4 lg:w-1/3"
          >
            {getIcon(section.title)}
            <h5 className="text-very-dark-blue text-center">{section.title}</h5>

            <ReactMarkdown
              components={
                {
                  p: ({ children }) => (
                    <p className="mb-2 text-center italic">{children}</p>
                  ),
                } as Components
              }
            >
              {section.description}
            </ReactMarkdown>

            <PersonAccordion actions={section.actions} />
          </div>
        ))}
      </Container>
    </ContainerWrapper>
  );
}
