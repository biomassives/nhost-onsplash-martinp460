import { GetStaticProps, NextPage } from 'next'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ALL_POSTS_QUERY } from '../common/graphql/posts'
import { Post } from '../common/types/index'
import Layout from '../modules/layout/components/Layout'
import Hero from '../modules/home/Hero'
import Gallery from '../modules/home/Gallery'

interface HomeProps {
  posts: Post[]
}

const Index: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <Hero post={posts[0]} />
      <Gallery posts={posts.slice(1)} />
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_NHOST_BACKEND_URL}/v1/graphql` || '',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: ALL_POSTS_QUERY
  })

  return {
    props: {
      posts: data.posts
    }
  }
}
