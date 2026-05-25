'use client';

import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { cn } from '@/utils/cn';
import { withBasePath } from '@/utils/path';
import { Accordion, Tabs } from '@heroui/react';
import Link from 'next/link';
import {
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { SlArrowDown } from 'react-icons/sl';
import ReactMarkdown, { type Components } from 'react-markdown';
import type { BusinessData } from './page';

const ICON_MAP = {
  trending: HiOutlineTrendingUp,
  shield: HiOutlineShieldCheck,
  bulb: HiOutlineLightBulb,
};

const getIcon = (iconName: string) => {
  const key = iconName.toLowerCase() as keyof typeof ICON_MAP;
  const Icon = ICON_MAP[key];
  return Icon ? <Icon className="text-strong-blue text-5xl" /> : null;
};

export default function BusinessImpactContent({
  data,
}: {
  data: BusinessData;
}) {
  return (
    <>
      {/* Hero Section */}
      <ContainerWrapper id="businessHero" variant="primary">
        <Container className="flex flex-col items-center justify-center gap-6 py-6 text-center lg:py-12">
          <h1 className="font-raleway text-very-light-gray">
            {data.hero.title}
          </h1>
          <p className="text-very-light-gray/90 lg:w-2/3">
            {data.hero.paragraph1}
          </p>
          <ReactMarkdown
            components={
              {
                p: ({ children }) => (
                  <p className="mx-auto text-center text-base leading-loose tracking-wide lg:w-2/3 lg:text-2xl">
                    {children}
                  </p>
                ),
              } as Components
            }
          >
            {data.hero.paragraph2}
          </ReactMarkdown>
        </Container>
      </ContainerWrapper>

      {/* Value Proposition Grid */}
      <ContainerWrapper id="valueProposition" variant="ghost">
        <Container>
          <h2 className="mb-12 text-center">{data.values.title}</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {data.values.items.map((item) => (
              <div
                key={item.title}
                className={cn(
                  'flex flex-col items-center gap-3 rounded-2xl border p-8',
                  'border-moderate-lime-green bg-very-light-gray shadow-lg',
                  'transition-all duration-300 hover:scale-[1.02]',
                )}
              >
                <div className="pt-2 pb-0">{getIcon(item.icon)}</div>
                <h4 className="text-very-dark-blue text-center">
                  {item.title}
                </h4>
                <ReactMarkdown
                  components={
                    {
                      p: ({ children }) => (
                        <p className="text-very-dark-blue/80 text-center">
                          {children}
                        </p>
                      ),
                    } as Components
                  }
                >
                  {item.description}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </Container>
      </ContainerWrapper>

      {/* Visual Block */}
      <div
        id="parallaxTop"
        className="relative h-64 w-full overflow-hidden bg-cover bg-fixed bg-top-left bg-no-repeat lg:h-112"
        style={{
          backgroundImage: `url('${withBasePath('/business_impact.webp')}')`,
        }}
      >
        <div className="bg-very-dark-blue/20 absolute inset-0" />
      </div>

      {/* Industry Solutions (Tabs) */}
      <ContainerWrapper id="industrySolutions" variant="primary">
        <Container className="flex flex-col gap-8">
          <h2 className="text-very-light-gray mb-6 text-center">
            {data.industries.title}
          </h2>
          <p className="text-very-soft-blue mx-auto text-center lg:w-2/3">
            {data.industries.description}
          </p>
          <div className="business-tabs flex w-full flex-col items-center lg:mt-8">
            <Tabs variant="secondary" className="w-full">
              <Tabs.ListContainer>
                <Tabs.List aria-label="Industry Solutions">
                  {data.industries.items.map((industry) => (
                    <Tabs.Tab key={industry.id} id={industry.id}>
                      {industry.label}
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs.ListContainer>

              {data.industries.items.map((industry) => (
                <Tabs.Panel
                  key={industry.id}
                  id={industry.id}
                  className="my-4 lg:my-8"
                >
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
                    {/* The Problem: Muted, dashed, and low-contrast */}
                    <div className="border-very-soft-blue/30 bg-very-dark-blue/5 hover:border-very-soft-blue/50 flex-1 rounded-xl border border-dashed p-8 transition-all duration-300">
                      <h5 className="text-very-soft-blue mb-4 tracking-wider uppercase">
                        The Problem
                      </h5>
                      <div className="text-very-light-gray">
                        <ReactMarkdown>{industry.problem}</ReactMarkdown>
                      </div>
                    </div>

                    {/* The Solution: Vibrant, solid border, and depth */}
                    <div className="border-very-soft-violet bg-very-light-gray relative flex-1 rounded-xl border-2 p-8 shadow-xl transition-all duration-300 hover:scale-[1.01]">
                      <h5 className="text-moderate-lime-green mb-4 font-semibold tracking-wider uppercase">
                        The Solution
                      </h5>
                      <div className="text-very-dark-blue leading-relaxed font-medium">
                        <ReactMarkdown>{industry.solution}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>
              ))}
            </Tabs>
          </div>

          {/* CTA Block */}
          <Link
            href="/#contactSection"
            className={cn(
              'bg-very-soft-violet text-very-dark-blue rounded-full px-8 py-2 font-semibold! no-underline',
              'hover:bg-very-soft-violet/90 transition-all duration-300 hover:scale-105 active:scale-95',
              'mx-auto my-8 w-fit text-lg sm:text-xl lg:text-2xl',
            )}
          >
            Contact me
          </Link>
        </Container>
      </ContainerWrapper>

      {/* Visual Block */}
      <div
        id="parallaxPerson"
        className="h-64 w-full bg-cover bg-fixed bg-center bg-no-repeat lg:h-112"
        style={{
          backgroundImage: `url('${withBasePath('/business_impact.webp')}')`,
        }}
      />

      {/* Executive Reads (Accordions) */}
      <ContainerWrapper id="executiveReads" variant="ghost">
        <Container>
          <h2 className="mb-4 text-center">{data.reads.title}</h2>
          <p className="mx-auto mb-12 text-center lg:w-2/3">
            {data.reads.description}
          </p>

          <div className="mx-auto w-full lg:w-3/4">
            <Accordion>
              {data.reads.items.map((read) => (
                <Accordion.Item
                  id={read.id}
                  key={read.id}
                  className="border-very-dark-blue/10 bg-very-light-gray mb-4 rounded-xl border px-6 shadow-md"
                >
                  <Accordion.Heading>
                    <Accordion.Trigger className="flex w-full items-center justify-start! gap-4 py-4">
                      <Accordion.Indicator className="text-strong-blue order-first transition-transform duration-300 data-[open=true]:rotate-180">
                        <SlArrowDown strokeWidth={96} />
                      </Accordion.Indicator>
                      <div className="flex flex-1 flex-col items-start gap-1">
                        <span className="text-very-dark-blue text-left text-lg font-semibold sm:text-xl">
                          {read.title}
                        </span>
                        <span className="text-strong-blue/80 text-left text-sm font-medium">
                          {read.subtitle}
                        </span>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <Accordion.Body>
                      <div className="text-very-dark-blue/80 flex flex-col gap-4 pb-6 leading-relaxed">
                        <ReactMarkdown>{read.p1}</ReactMarkdown>
                        <ReactMarkdown>{read.p2}</ReactMarkdown>

                        {read.id === '1' && (
                          <div className="bg-very-soft-blue/20 rounded-lg p-4 font-mono text-sm">
                            <p className="text-center">
                              [Fragmented Systems] &rarr; (Manual Copy-Paste)
                              &rarr; [High Error Risk & Friction]
                            </p>
                            <p className="text-moderate-lime-green text-center font-bold">
                              [Unified Pipeline] &rarr; (Automated Validation)
                              &rarr; [Single Source of Truth]
                            </p>
                          </div>
                        )}

                        <h6 className="text-strong-blue mt-2">
                          The Architectural Solution
                        </h6>
                        <ReactMarkdown>
                          {read.architecture_solution}
                        </ReactMarkdown>

                        <h6 className="text-strong-blue mt-2">
                          The Business Impact
                        </h6>
                        <ul className="mb-4 list-disc space-y-2 pl-6">
                          {read.impact_points.map((point) => (
                            <li key={point}>
                              <ReactMarkdown>{point}</ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </ContainerWrapper>
    </>
  );
}
