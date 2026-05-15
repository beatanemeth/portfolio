import { EXTERNAL_LINKS } from '@/constants/links';
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
    <Card className="shadow-very-dark-blue/80 bg-very-soft-blue flex w-full flex-col items-stretch p-10 shadow-lg/40 lg:w-2/3 lg:flex-row">
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
            className="text-hyperlink"
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
        <h2 className="text-center">{data.title}</h2>
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

      {/* Parallax Div with Certification Card */}
      <div
        id="parallaxAbout"
        className="my-16 w-full bg-cover bg-fixed bg-center bg-no-repeat lg:h-132"
        style={{
          backgroundImage: `url('${withBasePath('/system_patterns.png')}')`,
        }}
      >
        <Container className="flex items-center justify-center py-20">
          <CertificationCard certification={data.certification} />
        </Container>
      </div>

      {/* Bottom Div with Timeline */}
      <Container className="mx-auto w-full lg:w-3/4">
        <Timeline />
      </Container>
    </ContainerWrapper>
  );
}
