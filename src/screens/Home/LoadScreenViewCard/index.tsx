import React from 'react'

import { Container } from './styles'
import { SkeletonCard } from '@components'
const LoadScreenViewCard: React.FC = () => {
  return (
    <Container className='fade-in'>
      <ul>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </ul>
    </Container>
  )
}

export default LoadScreenViewCard
