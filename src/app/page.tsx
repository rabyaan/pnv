import { getPosts } from '../app/actions/get'
import PostList from '@/components/custom/PostList' // adjust path as needed
import PostForm from '@/components/custom/PostForm'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      <PostList posts={posts} />
      
      <div>
        <h3>Create Post</h3>
        <PostForm />
      </div>
    </div>
  )
}
