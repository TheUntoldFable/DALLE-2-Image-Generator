import { useRef } from 'react'
import Container from '../components/Container'
import HeadingSection from '../components/HeadingSection'
import BodySection from '../components/BodySection'

function Home() {
  const bodyRef = useRef<HTMLTableSectionElement>()

  const onScroll = () => bodyRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Container>
      <HeadingSection onPress={onScroll} />
      <BodySection forwardedRef={bodyRef} />
    </Container>
  )
}

export default Home
