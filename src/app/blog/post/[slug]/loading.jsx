import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
  return (
    <div>
      <Skeleton height={200} baseColor="purple" />
    </div>
  )
}

export default Loading