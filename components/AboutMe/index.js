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
    delay: 1000,
    duration: 800,
    reset: true,
    to: useCallback(async (next) => {
      while (1) {

        await next({ transform: 'translateX(0px)', })
        await next({ transform: 'translateX(-20px)', })
        await next({ transform: 'translateX(0px)', })
        await next({ transform: 'translateX(20px)', })
      }
    }, []),
    from: {
      transform: 'translateX(0px)',
    }
  })





  return (
    <Container>
      <TextContainer>
        <Title><span style={{ color: `#28abb9` }}>Hey</span> There.</Title>
        <Paragraph> I'm a Full Stack Developer living in the Philippines. Building websites, securing cloud servers, and Software/Database designs are some of my key roles in this field. From web components and UX/UI to complicated backend integrations, you can always count on me.</Paragraph>
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