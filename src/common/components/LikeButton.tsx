import { SyntheticEvent, useState } from 'react'
import { useUserContext } from '../utils/UserProvider'
import { useMutation } from '@apollo/client'
import { LIKE_POST, UNLIKE_POST } from '../graphql/posts'
import { HeartIcon } from '@heroicons/react/solid'
import Button from './Button'

interface LikeButton {
  postId: string
  likes: string[]
  className?: string
}

const LikeButton = ({ postId, likes, className }: LikeButton) => {
  const user = useUserContext()
  const [liked, setLiked] = useState(likes.includes(user?.id))

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId, userId: user?.id }
  })
  const [unlikePost] = useMutation(UNLIKE_POST, {
    variables: { postId, userId: user?.id }
  })

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    if (liked) {
      unlikePost()
      setLiked(false)
    } else {
      likePost()
      setLiked(true)
    }
  }

  return (
    <Button
      variation="outline"
      className={`hover:bg-white hover:cursor-pointer border-0 ${
        liked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-200 hover:bg-white'
      } ${className}`}
      onClick={(e) => handleClick(e)}
    >
      <HeartIcon className={`w-5 ${liked ? 'text-gray-200' : ''}`} />
    </Button>
  )
}

export default LikeButton
