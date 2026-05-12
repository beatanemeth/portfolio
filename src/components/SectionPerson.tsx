import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { getMarkdownContent } from '@/utils/mdContent';
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

const ICON_MAP = {
  manual: <HiOutlineHandRaised className="text-moderate-lime-green text-5xl" />,
  movement: <TbYoga className="text-moderate-lime-green text-5xl" />,
  connection: <LuBookOpenCheck className="text-moderate-lime-green text-5xl" />,
};

const getIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('manual')) return ICON_MAP.manual;
  if (lowerTitle.includes('movement')) return ICON_MAP.movement;
  if (lowerTitle.includes('connection')) return ICON_MAP.connection;
  return null;
};

export default function SectionPerson() {
  const { data } = getMarkdownContent<PersonData>('person.md');

  return (
    <ContainerWrapper id="personSection" className="py-16">
      <Container className="flex flex-col gap-8 pt-32 pb-16">
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

      <div
        id="parallaxPerson"
        className="h-96 w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/system_architecture.png')" }}
      />

      <Container className="flex flex-col gap-8 pt-16">
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 lg:w-1/3"
            >
              {getIcon(section.title)}
              <h5 className="text-very-dark-blue font-semibold">
                {section.title}
              </h5>

              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-2 text-center italic">{children}</p>
                  ),
                }}
              >
                {section.description}
              </ReactMarkdown>

              <Accordion hideSeparator>
                <Accordion.Item
                  className={
                    'border-b-moderate-lime-green border-b-2 border-solid'
                  }
                >
                  <Accordion.Heading>
                    <Accordion.Trigger>
                      Practices
                      <Accordion.Indicator className="text-very-light-gray">
                        <SlArrowDown />
                      </Accordion.Indicator>
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel
                    className={'bg-very-light-gray/80 rounded-md'}
                  >
                    <Accordion.Body>
                      <ul className="p-6">
                        {section.actions.map((action, aIndex) => (
                          <li key={aIndex} className="list-disc space-y-2 pl-2">
                            <ReactMarkdown>{action}</ReactMarkdown>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </div>
      </Container>
    </ContainerWrapper>
  );
}
