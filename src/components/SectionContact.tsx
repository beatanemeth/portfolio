import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
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
  <Card
    className={cn(
      'flex w-full flex-col items-center gap-8 lg:w-1/3',
      'bg-very-light-gray/10 backdrop-blur-sm',
      'border-very-light-gray/5 rounded-2xl border p-10',
    )}
  >
    {/* Contained Icon */}
    <div className="bg-very-light-gray rounded-full p-4 shadow-inner">
      {getIcon(platform)}
    </div>

    <p className="text-very-light-gray text-center">{description}</p>

    <HeroUILink
      href={EXTERNAL_LINKS[linkKey]}
      target="_blank"
      className={cn(
        'bg-very-soft-violet text-very-dark-blue rounded-full px-8 py-2 font-semibold! no-underline',
        'hover:bg-very-soft-violet/90 transition-all duration-300 hover:scale-105 active:scale-95',
        'text-lg! sm:text-xl! lg:text-2xl!',
      )}
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
              <p className="mx-auto text-center text-base leading-loose tracking-wide whitespace-pre-line lg:w-2/3 lg:text-2xl">
                {children}
              </p>
            ),
          }}
        >
          {data.closing}
        </ReactMarkdown>
      </Container>
    </ContainerWrapper>
  );
}
