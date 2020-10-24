import { Container, Title, Paragraph, SwipeBothIcon, TextContainer } from './components'
import { useSpring, animated, interpolate } from 'react-spring'
import { useCallback, useEffect } from 'react'


const Index = () => {

  const propsHandShow = useSpring({
    delay: 1000,
    duration: 1000,
    to: {
      opacity: 1
    },
    from: {
      opacity: 0,
    }
  })

  const propsHand = useSpring({
    delay: 500,
    loop: { reverse: true },
    to: {
      transform: 'translateX(-20px)'
    },
    from: {
      transform: 'translateX(0px)',
    }
  })





  return (
    <Container>
      <TextContainer>
        <Title><span style={{ color: `rgb(40, 171, 185)` }}>{`<Hey />`}</span> there.</Title>
        <Paragraph>I'm a full-stack web developer living in the Philippines. Building websites, securing cloud servers, and Software/Database designs are some of my key roles in this field. From web components and UX/UI to complicated backend integrations, you can always count on me.</Paragraph>
        <animated.div
          style={{ ...propsHandShow, width: `100%` }}
        >
          <animated.div
            style={{ ...propsHand, width: `100%`, display: `flex`, justifyContent: `center` }}
          >
            <SwipeBothIcon />
          </animated.div>
        </animated.div>
      </TextContainer>
    </Container>
  )
}

export default Index