import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getFolderContent } from '../../lib/posts-util';
import { Fragment } from 'react';

function PostPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const post = getPostData(slug);
  return {
    props: { post },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const filenames = getFolderContent();
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
