import { PERSONAL_DATA } from '@/constants/general';
import { getMarkdownContent } from '@/utils/mdContent';
import { Button, Modal } from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = getMarkdownContent('legal.md');
  const dynamicContent = content
    .replaceAll('{{NAME}}', PERSONAL_DATA.NAME)
    .replaceAll('{{EMAIL}}', PERSONAL_DATA.EMAIL);

  return (
    <Container
      as="footer"
      id="footerSection"
      className="flex flex-col items-center justify-between gap-4 py-8 lg:flex-row"
    >
      <p className="text-very-light-gray/80 mb-0 text-sm">
        Copyright © {currentYear} {PERSONAL_DATA.NAME}
      </p>

      <div className="flex gap-6">
        <Modal>
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              className="hover:text-very-dark-blue hover:bg-very-light-gray/60 text-very-light-gray/80 text-sm hover:px-4 hover:py-1"
            >
              Privacy & Terms
            </Button>
          </div>
          <Modal.Backdrop isDismissable={true}>
            <Modal.Container>
              <Modal.Dialog className="bg-very-light-gray max-w-90 lg:max-w-2/3">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-very-dark-blue text-2xl leading-[1.3] font-semibold tracking-wide sm:text-3xl lg:text-4xl">
                    Legal Notice & Privacy Policy
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: () => null, // Hide the H1 since it's in the Header
                      h2: ({ children }) => (
                        <h5 className="text-very-dark-blue mt-6 mb-2">
                          {children}
                        </h5>
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
                    {dynamicContent}
                  </ReactMarkdown>
                </Modal.Body>
                <Modal.Footer className="flex justify-end">
                  <p className="text-very-dark-blue/70 text-sm italic">
                    Built with Next.js & Tailwind CSS
                  </p>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
    </Container>
  );
}
