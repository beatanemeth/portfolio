import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { getMarkdownContent } from '@/utils/mdContent';
import { Card, Link as HeroUILink } from '@heroui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import ReactMarkdown from 'react-markdown';
import ContainerWrapper from './ContainerWrapper';

interface ContactMethod {
  platform: string;
  description: string;
  linkText: string;
  linkKey: keyof typeof EXTERNAL_LINKS;
}

interface ContactData {
  title: string;
  intro: string;
  closing: string;
  contactMethods: ContactMethod[];
}

const ICON_MAP = {
  github: <FaGithub className="text-very-dark-blue text-5xl" />,
  linkedin: <FaLinkedinIn className="text-very-dark-blue text-5xl" />,
  medium: <SiMedium className="text-very-dark-blue text-5xl" />,
};

const getIcon = (iconName: string) => {
  const key = iconName.toLowerCase() as keyof typeof ICON_MAP;
  return ICON_MAP[key] || null;
};

const ContactItem = ({
  platform,
  description,
  linkText,
  linkKey,
}: ContactMethod) => (
  <Card className="bg-very-light-gray flex w-full flex-col items-center gap-2 rounded-2xl p-8 lg:w-1/3">
    {getIcon(platform)}
    <p className="text-very-dark-blue text-center">{description}</p>

    <HeroUILink
      href={EXTERNAL_LINKS[linkKey]}
      target="_blank"
      className="text-hyperlink font-bold"
    >
      {linkText}
      <HeroUILink.Icon />
    </HeroUILink>
  </Card>
);

export default function SectionContact() {
  const { data } = getMarkdownContent<ContactData>('contact.md');

  return (
    <ContainerWrapper id="contactSection" variant="ghost">
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

        <div className="my-8 flex flex-col justify-center gap-8 lg:flex-row">
          {data.contactMethods.map((method, index) => (
            <ContactItem key={index} {...method} />
          ))}
        </div>

        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="text-center whitespace-pre-line">{children}</p>
            ),
          }}
        >
          {data.closing}
        </ReactMarkdown>
      </Container>
    </ContainerWrapper>
  );
}
