import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import PostCard from '@/components/PostCard';
import { BlogCategory, getAllBlogPosts } from '@/utils/mdContent';
import Link from 'next/link';

interface CategoryParams {
  params: Promise<{ category: BlogCategory }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  // Get unique categories from the parsed posts
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  return categories.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: CategoryParams) {
  const { category } = await params;

  const allPosts = getAllBlogPosts();
  const categoryPosts = allPosts.filter((p) => p.category === category);

  return (
    <ContainerWrapper id="categoryListingSection" variant="ghost">
      <Container>
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h1 className="capitalize">{category}</h1>
          <Link
            href="/blog"
            className="text-very-light-gray/60 hover:text-moderate-lime-green text-sm transition-colors sm:text-base"
          >
            ← Back to all posts
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {categoryPosts.map((post) => (
            <div
              key={post.slug}
              className={post.featured ? 'mb-10 lg:mb-16' : ''}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </ContainerWrapper>
  );
}
