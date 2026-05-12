import Container from '@/components/Container';
import { getMarkdownContent } from '@/utils/mdContent';
import { Link as HeroUILink, Tooltip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface HeroData {
  availability: string;
  title: string;
  name: string;
  bio: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
    attributionUrl: string;
    attributionText: string;
  };
  coreStackTitle: string;
  coreStackItems: string[];
}

const CoreStackItem = ({ title }: { title: string }) => (
  <div className="shadow-very-soft-blue/40 w-60 rounded-xl pb-2 text-center leading-0 shadow-lg/40">
    <p className="mb-0 text-center font-medium">{title}</p>
  </div>
);

export default function SectionHero() {
  const { data } = getMarkdownContent<HeroData>('hero.md');

  return (
    <Container
      as="section"
      id="heroSection"
      className="flex min-h-screen flex-col items-start gap-14 py-10"
    >
      <div className="flex items-center gap-2">
        <FaCircle className="text-moderate-lime-green" />
        <p className="text-very-light-gray/80 mb-0">{data.availability}</p>
      </div>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
        {/* Left Side: Text */}
        <div className="flex w-full flex-col justify-center gap-2 lg:w-2/3">
          <h1 className="mb-8 whitespace-pre-line">{data.title}</h1>
          <h4>{data.name}</h4>
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-4 w-full text-base sm:text-xl lg:w-3/4 lg:text-2xl">
                  {children}
                </p>
              ),
            }}
          >
            {data.bio}
          </ReactMarkdown>

          <Link
            href="#technicalSection"
            className={
              'bg-very-soft-violet text-very-dark-blue w-fit rounded-4xl px-8 py-4 text-center text-2xl font-semibold transition-transform duration-300 hover:scale-105 active:scale-95'
            }
          >
            {data.buttonText}
          </Link>
        </div>

        {/* Right Side: Image Container */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* Wrap image in a div to define the bounds for the absolute tooltip */}
          <div className="relative h-fit w-fit">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={380}
              height={380}
              priority
              className="object-contain"
            />

            {/* Tooltip anchored to the bottom right of the image */}
            <div className="absolute right-12 bottom-0">
              <Tooltip delay={600} closeDelay={0}>
                <HeroUILink
                  href={data.image.attributionUrl}
                  target="_blank"
                  className="text-very-light-gray/50 hover:text-very-light-gray no-underline transition-opacity"
                >
                  <small className="text-sm">Flaticon</small>
                </HeroUILink>
                <Tooltip.Content
                  className="bg-slate-600 p-2 text-xs text-white italic"
                  placement="top"
                >
                  {data.image.attributionText}
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h5 className="text-center">{data.coreStackTitle}</h5>
        <div className="mx-auto flex w-full flex-wrap justify-center gap-4 lg:w-3/4 lg:gap-8">
          {data.coreStackItems.map((item, index) => (
            <CoreStackItem key={index} title={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
