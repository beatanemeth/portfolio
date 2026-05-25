import BlogTabs from '@/components/BlogTabs';
import Container from '@/components/Container';
import ContainerWrapper from '@/components/ContainerWrapper';
import PostCard from '@/components/PostCard';
import { getAllBlogPosts, getSignals } from '@/utils/mdContent';

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const signals = getSignals();

  // Find the featured post (or default to the first one)
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  // The tabs will show all posts EXCEPT the featured one
  const otherPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <ContainerWrapper
      id="blogListingSection"
      variant="ghost"
      className="pt-10 sm:pt-12 lg:pt-14"
    >
      <Container>
        <h1 className="mb-12 text-center">Blog</h1>

        {/* Featured Post Section */}
        {featuredPost && (
          <div className="mb-16">
            <h6 className="text-very-light-gray mb-6">Featured Post</h6>
            <PostCard post={featuredPost} />
          </div>
        )}

        {/* Categories / Tabs Section */}
        <div className="w-full">
          <h6 className="text-very-light-gray mb-12">Posts by Category</h6>
          <BlogTabs posts={otherPosts} signals={signals} />
        </div>
      </Container>
    </ContainerWrapper>
  );
}
