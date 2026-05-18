import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import { getAllBlogPosts, getMarkdownContent } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface PostParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: PostParams) {
  const { slug } = await params;
  const post = getMarkdownContent<{ title: string; date: string }>(
    `blog/${slug}.md`,
  );

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  // Newer post has a lower index (currentIndex - 1)
  const nextPost = allPosts[currentIndex - 1] || null;
  // Older post has a higher index (currentIndex + 1)
  const prevPost = allPosts[currentIndex + 1] || null;

  return (
    <ContainerWrapper
      id="blogItemSection"
      variant="ghost"
      className="pt-10 sm:pt-12 lg:pt-14"
    >
      <Container as="article" className="prose prose-lg max-w-3xl lg:max-w-5xl">
        <header className="mb-8">
          <h1 className="mb-2">{post.data.title}</h1>
          <time className="text-very-light-gray/60">{post.data.date}</time>
        </header>
        <div className="prose-gray">
          <ReactMarkdown
            components={{
              img: ({ node: _node, src, alt, ...props }) => (
                <Image
                  {...props}
                  src={typeof src === 'string' ? withBasePath(src) : ''}
                  alt={alt || ''}
                  width={800}
                  height={450}
                  className="rounded-lg object-cover"
                />
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-very-soft-blue decoration-very-soft-blue/50 hover:text-very-light-gray hover:decoration-very-light-gray underline underline-offset-4 transition-colors"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Pagination */}
        <nav className="border-very-soft-violet mt-12 flex flex-col justify-between gap-6 border-t pt-8 sm:flex-row">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="hover:text-moderate-lime-green group flex flex-col transition-colors"
            >
              <span className="text-very-light-gray/60 block text-sm">
                ← Previous Post
              </span>
              <span className="font-raleway text-very-light-gray/80 hover:text-moderate-lime-green font-medium">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="hover:text-moderate-lime-green group flex flex-col items-end text-right transition-colors"
            >
              <span className="text-very-light-gray/60 block text-sm">
                Next Post →
              </span>
              <span className="font-raleway text-very-light-gray/80 hover:text-moderate-lime-green font-medium">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </Container>
    </ContainerWrapper>
  );
}
