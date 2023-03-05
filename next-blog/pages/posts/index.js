import Posts from '../../components/posts/posts';
import Head from 'next/head';
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from 'react';

function PostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Posts</title>
      </Head>
      <Posts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default PostsPage;
