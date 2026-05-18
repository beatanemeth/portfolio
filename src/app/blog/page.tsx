import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import PostCard from '@/components/PostCard';
import { getAllBlogPosts } from '@/utils/mdContent';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <ContainerWrapper
      id="blogListingSection"
      variant="ghost"
      className="pt-10 sm:pt-12 lg:pt-14"
    >
      <Container>
        <h1>Blog</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </ContainerWrapper>
  );
}
