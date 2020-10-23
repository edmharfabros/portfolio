import { Container, Title, Paragraph, SwipeRightIcon, TextContainer, Name, Position, Email, LinkedinIcon, GithubIcon } from './components'
import { useSpring, animated, interpolate } from 'react-spring'
import { useCallback } from 'react'

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
        <Title>Let's <span style={{ color: `#28abb9` }}>Connect</span>
          <Paragraph>Got questions ? You can always message me using these platforms.</Paragraph>
        </Title>
        <Name>
          Edmhar Fabros
          <Position>Full Stack Developer</Position>
          <Email href="mailto:edmhrfbros@gmail.com">edmhrfbros@gmail.com</Email>
          <a href="https://www.linkedin.com/in/edmharfabros" target="_blank"><LinkedinIcon /></a>
          <a href="https://github.com/edmharfabros" target="_blank"><GithubIcon /></a>
        </Name>
        <animated.div
          style={{ ...propsHandShow, width: `100%` }}
        >
          <animated.div
            style={{ ...propsHand, width: `100%`, display: `flex`, justifyContent: `center` }}
          >
            <SwipeRightIcon />
          </animated.div>
        </animated.div>
      </TextContainer>
    </Container>
  )
}

export default Index