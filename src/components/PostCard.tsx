import Container from '@/components/Container';
import { cn } from '@/utils/cn';
import { PostMetadata } from '@/utils/mdContent';
import { withBasePath } from '@/utils/path';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = withBasePath(post.image || `/blog/${post.slug}.webp`);
  const HeadingTag = post.featured ? 'h4' : 'h5';

  return (
    <Container
      as="article"
      className={cn(
        'group',
        'flex flex-col gap-8 sm:items-start lg:flex-row',
        'px-0 py-6 transition-all duration-300',
        post.featured
          ? 'bg-very-light-gray/5 border-moderate-lime-green/20 rounded-2xl border p-6 lg:p-10'
          : 'border-moderate-lime-green border-b lg:px-8',
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'border-moderate-lime-green/30 relative block shrink-0 overflow-hidden rounded-lg border shadow-md transition-all duration-500',
          post.featured
            ? 'h-56 w-full sm:h-48 lg:h-[300px] lg:w-[450px]' // Featured: Occupies significant space
            : 'h-48 w-full sm:h-40 sm:w-64 lg:h-32 lg:w-48', // Standard: Compact preview
        )}
      >
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-col justify-center gap-4">
        <Link href={`/blog/${post.slug}`} className="block">
          <HeadingTag
            className={cn(
              'text-moderate-lime-green group-hover:text-very-light-gray transition-colors',
              post.featured && 'text-2xl font-bold sm:text-3xl lg:text-4xl',
            )}
          >
            {post.title}
          </HeadingTag>

          <div
            className={cn(
              'text-very-light-gray/60 group-hover:text-very-light-gray/80 flex items-center gap-2 transition-colors',
              'text-xs sm:text-sm lg:text-base',
              post.featured && 'sm:text-base lg:text-lg',
            )}
          >
            <span className="text-moderate-lime-green font-medium capitalize">
              {post.category}
            </span>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <p
            className={cn(
              'text-very-light-gray/80 group-hover:text-very-light-gray mt-4 transition-colors',
              post.featured && 'text-base sm:text-lg lg:text-2xl',
            )}
          >
            {post.excerpt}
          </p>
        </Link>
      </div>
    </Container>
  );
}
