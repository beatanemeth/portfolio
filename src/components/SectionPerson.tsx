import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
import { Accordion } from '@heroui/react';
import { HiOutlineHandRaised } from 'react-icons/hi2';
import { LuBookOpenCheck } from 'react-icons/lu';
import { SlArrowDown } from 'react-icons/sl';
import { TbYoga } from 'react-icons/tb';
import ReactMarkdown from 'react-markdown';

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

const SectionIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="bg-moderate-lime-green w-fit rounded-full p-4">
    <Icon className="text-very-light-gray text-3xl" />
  </div>
);

const getIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('manual'))
    return <SectionIcon icon={HiOutlineHandRaised} />;
  if (lowerTitle.includes('movement')) return <SectionIcon icon={TbYoga} />;
  if (lowerTitle.includes('connection'))
    return <SectionIcon icon={LuBookOpenCheck} />;
  return null;
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
          components={{
            p: ({ children }) => (
              <p className="mx-auto w-full text-center lg:w-2/3">{children}</p>
            ),
          }}
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
      <Container>
        <div className="flex flex-col justify-center gap-8 px-2 sm:px-6 lg:flex-row lg:px-0">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 lg:w-1/3"
            >
              {getIcon(section.title)}
              <h5 className="text-very-dark-blue">{section.title}</h5>

              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-2 text-center italic">{children}</p>
                  ),
                }}
              >
                {section.description}
              </ReactMarkdown>

              <PersonAccordion actions={section.actions} />
            </div>
          ))}
        </div>
      </Container>
    </ContainerWrapper>
  );
}
