import Container from '@/components/Container';
import { PERSONAL_DATA } from '@/constants/general';
import { getMarkdownContent } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
import { cn } from '@heroui/styles';
import Image from 'next/image';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import ContainerWrapper from './ContainerWrapper';

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
  <div className="border-b-solid border-b-moderate-lime-green/40 w-60 border-b-2 pb-2 text-center leading-0">
    <p className="mb-0 text-center font-medium">{title}</p>
  </div>
);

export default function SectionHero() {
  const { data } = getMarkdownContent<HeroData>('hero.md');

  return (
    <ContainerWrapper id="heroSection" variant="ghost" className="pt-0">
      <Container className="flex min-h-svh flex-col items-start gap-8 pt-14">
        <div className="flex items-center gap-2">
          <FaCircle className="text-moderate-lime-green" />
          <p className="text-very-light-gray/80 mb-0 text-sm sm:text-base lg:text-lg">
            {data.availability}
          </p>
        </div>

        {/* Center Div */}
        <div className="mb-12 flex flex-col items-center gap-16 lg:flex-row">
          {/* Left Side: Text */}
          <div className="flex w-full flex-col justify-center gap-2 lg:w-2/3">
            <h1 className="mb-8 whitespace-pre-line">{data.title}</h1>
            <h4>{PERSONAL_DATA.NAME}</h4>
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
              className={cn(
                'bg-very-soft-violet text-very-dark-blue rounded-full px-8 py-2 font-semibold! no-underline',
                'hover:bg-very-soft-violet/90 transition-all duration-300 hover:scale-105 active:scale-95',
                'w-fit text-lg sm:text-xl lg:text-2xl',
              )}
            >
              {data.buttonText}
            </Link>
          </div>

          {/* Right Side: Image Container */}
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src={withBasePath(data.image.src)}
              alt={data.image.alt}
              width={560}
              height={560}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Stack Div */}
        <div className="flex flex-col gap-6">
          <h4 className="text-center">{data.coreStackTitle}</h4>
          <div className="mx-auto flex w-full flex-wrap justify-center gap-6 lg:gap-8">
            {data.coreStackItems.map((item, index) => (
              <CoreStackItem key={index} title={item} />
            ))}
          </div>
        </div>
      </Container>
    </ContainerWrapper>
  );
}
