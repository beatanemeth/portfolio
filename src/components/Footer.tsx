import { PERSONAL_DATA } from '@/constants/general';
import { cn } from '@/utils/cn';
import { getMarkdownContent } from '@/utils/mdContent';
import { Button, Modal } from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import Container from './Container';
import ContainerWrapper from './ContainerWrapper';

const LegalModal = ({ legalContent }: { legalContent: string }) => (
  <Modal>
    <Modal.Trigger>
      <Button
        variant="ghost"
        className={cn(
          'text-very-light-gray/80 border-none px-4 py-1.5 text-xs transition-colors duration-200',
          'hover:bg-very-light-gray/20 hover:text-very-light-gray',
          'sm:text-sm lg:text-base',
        )}
      >
        Privacy & Terms
      </Button>
    </Modal.Trigger>
    <Modal.Backdrop isDismissable={true}>
      <Modal.Container>
        <Modal.Dialog className="bg-very-light-gray max-w-90 lg:max-w-2/3">
          <Modal.CloseTrigger />
          <Modal.Header className="border-b-solid border-b-moderate-lime-green border-b-2">
            <Modal.Heading className="text-very-dark-blue text-2xl leading-[1.3] font-semibold tracking-wide sm:text-3xl lg:text-4xl">
              Legal Notice & Privacy Policy
            </Modal.Heading>
          </Modal.Header>
          <Modal.Body className="my-4 max-w-none overflow-y-auto px-2 lg:px-10">
            <ReactMarkdown
              components={{
                h1: () => null, // Hide the H1 since it's in the Header
                h2: ({ children }) => (
                  <h5 className="text-very-dark-blue mt-6 mb-2">{children}</h5>
                ),
                p: ({ children }) => (
                  <p className="text-very-dark-blue">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="text-very-dark-blue mb-4 list-disc space-y-2 pl-6">
                    {children}
                  </ul>
                ),
                li: ({ children }) => <li>{children}</li>,
                hr: () => <hr className="my-6 border-white/10" />,
              }}
            >
              {legalContent}
            </ReactMarkdown>
          </Modal.Body>
          <Modal.Footer className="border-t-solid border-t-very-dark-blue/20 flex justify-end border-t-2 pt-4">
            <p className="text-very-dark-blue/70 text-sm italic">
              Built with Next.js, HeroUI & Tailwind CSS
            </p>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = getMarkdownContent('legal.md');
  const dynamicContent = content
    .replaceAll('{{NAME}}', PERSONAL_DATA.NAME)
    .replaceAll('{{EMAIL}}', PERSONAL_DATA.EMAIL);

  return (
    <ContainerWrapper
      as="footer"
      id="footerSection"
      variant="primary"
      className="border-t-solid border-t-very-dark-blue/20 border-t-2 py-0"
    >
      <Container className="flex flex-col items-center justify-between gap-4 py-8 lg:flex-row">
        <p className="text-very-light-gray/80 mb-0 text-xs sm:text-sm lg:text-base">
          Copyright © {currentYear} {PERSONAL_DATA.NAME}
        </p>

        {/* Privacy & Terms Modal */}
        <LegalModal legalContent={dynamicContent} />
      </Container>
    </ContainerWrapper>
  );
}
