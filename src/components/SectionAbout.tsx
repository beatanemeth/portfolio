import { EXTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
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

const CertificationCard = ({
  certification,
}: {
  certification: AboutData['certification'];
}) => {
  return (
    <Card className="bg-very-soft-blue flex w-full flex-col items-stretch p-6 lg:w-2/4 lg:flex-row lg:p-14">
      <div className="w-full overflow-hidden lg:w-1/3">
        <Image
          src={withBasePath(certification.image)}
          alt={certification.title}
          width={240}
          height={240}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="text-very-dark-blue">
            {certification.title}
          </Card.Title>
          <Card.Description className="text-very-dark-blue">
            {certification.description}
          </Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto">
          <HeroUILink
            href={EXTERNAL_LINKS[certification.linkKey]}
            target="_blank"
            className={cn(
              'text-hyperlink! flex w-fit items-center gap-2 rounded-full px-4 py-2 font-semibold! no-underline',
              'hover:bg-very-dark-blue/10 transition-all hover:scale-105 active:scale-95',
            )}
          >
            View Badge
            <HeroUILink.Icon />
          </HeroUILink>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default function SectionAbout() {
  const { data } = getMarkdownContent<AboutData>('about.md');

  return (
    <ContainerWrapper id="aboutSection" variant="primary">
      {/* Top Div */}
      <Container className="flex flex-col items-start gap-8">
        <h2>{data.title}</h2>
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-12">
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
          <div className="flex w-full lg:w-1/2">
            <ul className="flex flex-col gap-2 pl-5">
              {data.keyPoints.map((kp, index) => (
                <li key={index} className="list-disc space-y-2 pl-2">
                  <span className="font-semibold">{kp.point}</span>:{' '}
                  {kp.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Parallax Div with Certification Card */}
      <div
        id="parallaxAbout"
        className="my-16 flex min-h-132 w-full items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat px-4 py-16"
        style={{
          backgroundImage: `url('${withBasePath('/system_patterns.png')}')`,
        }}
      >
        <CertificationCard certification={data.certification} />
      </div>

      {/* Bottom Div with Timeline */}
      <Container className="mx-auto w-full lg:w-3/4">
        <Timeline />
      </Container>
    </ContainerWrapper>
  );
}
