import { useRef } from 'react'
import { BodySection } from '../components/BodySection'
import Container from '../components/Container'
import HeadingSection from '../components/HeadingSection'

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
