import { EXTERNAL_LINKS } from '@/constants/links';
import { getMarkdownContent } from '@/utils/mdContent';
import { Card, Link as HeroUILink } from '@heroui/react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Container from './Container';
import ContainerWrapper from './ContainerWrapper';
import Timeline from './Timeline';

interface AboutData {
  title: string;
  bio: string;
  keyPoints: {
    point: string;
    description: string;
  }[];
  certification: {
    image: string;
    title: string;
    description: string;
    linkKey: keyof typeof EXTERNAL_LINKS;
  };
}

export default function SectionAbout() {
  const { data } = getMarkdownContent<AboutData>('about.md');

  return (
    <ContainerWrapper as="section" id="aboutSection" className="py-16">
      <Container className="flex flex-col items-start gap-8 py-10">
        <h2 className="text-center">{data.title}</h2>
        <div className="flex flex-col items-start lg:flex-row lg:gap-12">
          {/* Left Side: Text */}
          <div className="flex w-full flex-col justify-center gap-2 lg:w-1/2">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="w-full">{children}</p>,
              }}
            >
              {data.bio}
            </ReactMarkdown>
          </div>

          {/* Right Side: Key Points */}
          <div className="flex w-full justify-center lg:w-1/2">
            <ul className="flex flex-col gap-2 pl-5">
              {data.keyPoints.map((kp, index) => (
                <li key={index} className="list-disc space-y-2 pl-2">
                  <span className="text-xl font-semibold">{kp.point}</span>:{' '}
                  {kp.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div
        id="parallaxAbout"
        className="w-full bg-cover bg-fixed bg-center bg-no-repeat lg:h-132"
        style={{ backgroundImage: "url('/system_patterns.png')" }}
      >
        <Container className="flex flex-col items-start gap-8 py-10">
          <Card className="shadow-very-dark-blue/80 bg-very-soft-blue mx-auto my-16 flex w-full flex-col items-stretch p-10 shadow-lg/40 lg:w-2/3 lg:flex-row">
            <div className="w-full overflow-hidden lg:w-1/3">
              <Image
                src={data.certification.image}
                alt={data.certification.title}
                width={240}
                height={240}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Card.Header className="gap-1">
                <Card.Title className="text-very-dark-blue">
                  {data.certification.title}
                </Card.Title>
                <Card.Description className="text-very-dark-blue">
                  {data.certification.description}
                </Card.Description>
              </Card.Header>
              <Card.Footer className="mt-auto">
                <HeroUILink
                  href={EXTERNAL_LINKS[data.certification.linkKey]}
                  target="_blank"
                  className="text-hyperlink"
                >
                  View Badge
                  <HeroUILink.Icon />
                </HeroUILink>
              </Card.Footer>
            </div>
          </Card>
        </Container>
      </div>

      <Container className="flex flex-col items-start gap-8 py-10">
        <div className="mx-auto w-full border-t border-white/5 lg:w-3/4">
          <Timeline />
        </div>
      </Container>
    </ContainerWrapper>
  );
}
