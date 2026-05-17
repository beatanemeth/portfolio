import Container from '@/components/Container';
import { EXTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { Card, Link as HeroUILink } from '@heroui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiMedium } from 'react-icons/si';
import ReactMarkdown, { type Components } from 'react-markdown';
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
  github: FaGithub,
  medium: SiMedium,
  linkedin: FaLinkedinIn,
  'contact form': MdEmail,
};

const getIcon = (iconName: string) => {
  const key = iconName.toLowerCase() as keyof typeof ICON_MAP;
  const Icon = ICON_MAP[key];
  return Icon ? <Icon className="text-very-dark-blue text-5xl" /> : null;
};

const ContactItem = ({
  platform,
  description,
  linkText,
  linkKey,
}: ContactMethod) => (
  <Card
    className={cn(
      'flex w-full flex-col items-center gap-6 lg:gap-10',
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
        {/* Intro Block */}
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

        {/* Methods Block */}
        <div className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.contactMethods.map((method, index) => (
            <ContactItem key={index} {...method} />
          ))}
        </div>

        {/* Closing Block */}
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
          {data.closing}
        </ReactMarkdown>
      </Container>
    </ContainerWrapper>
  );
}
