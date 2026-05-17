import Container from '@/components/Container';
import { PostMetadata } from '@/utils/mdContent';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = post.image || `/blog/${post.slug}.webp`;

  return (
    <Container
      as="article"
      className="group border-moderate-lime-green flex flex-col gap-8 border-b px-0 py-6 sm:items-start lg:flex-row lg:px-8"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="border-moderate-lime-green/30 relative block h-48 w-full shrink-0 overflow-hidden rounded-lg border shadow-md sm:h-40 sm:w-64 lg:h-32 lg:w-48"
      >
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/blog/${post.slug}`} className="block">
          <h5 className="text-moderate-lime-green group-hover:text-very-light-gray transition-colors">
            {post.title}
          </h5>
          <time className="text-very-light-gray/60 group-hover:text-very-light-gray/80 block text-xs transition-colors sm:text-sm lg:text-base">
            {post.date}
          </time>
          <p className="text-very-light-gray/80 group-hover:text-very-light-gray mt-2 transition-colors">
            {post.excerpt}
          </p>
        </Link>
      </div>
    </Container>
  );
}
