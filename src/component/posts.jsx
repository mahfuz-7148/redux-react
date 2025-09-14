import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchPosts} from '../features/posts/postsSlice.js';

export const Posts = () => {
  const {posts, isLoading, isError, error} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  let content
  if (isLoading) {
    content = <h1>Loadinggggg postsssss ........</h1>
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No posts found!</h1>
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    )
  }
  return (
    <div>{content}</div>
  )
}
