import {
  Container,
  Title,
  Paragraph,
  SwipeBothIcon,
  TextContainer,
  Timeline,
  TimelineElement,
  TimelineContainer,
  NexplayIcon,
  ZynappseIcon,
  CollegeIcon,
  Position,
  Company,
  Technologies,
  IconContainer,
  Chip
} from './components'

import { useSpring, animated, interpolate } from 'react-spring'
import {useCallback} from 'react'

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
        await next({ transform: 'translateX(0px)' ,})
        await next({ transform: 'translateX(-20px)', })
        await next({ transform: 'translateX(0px)' ,})
        await next({ transform: 'translateX(20px)',})
      }
    },[]),
    from: {
      transform: 'translateX(0px)',
    }
  })

  return (
    <Container>
      <TextContainer>
        <Title>
          Work
          <Paragraph>This is what my passion leads me after 4 years.</Paragraph>
        </Title>

        <TimelineContainer>
          <Timeline>
            <TimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(40,171,185)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(40,171,185)' }}
              date="2019 - Present"
              icon={<NexplayIcon />}
            >
              <Position className="vertical-timeline-element-title">Senior Backend Developer</Position>
              <Company className="vertical-timeline-element-subtitle">Nexplay</Company>
              <Technologies>
                <Chip>React.js</Chip>
                <Chip>Redux</Chip>
                <Chip>Node.js</Chip>
                <Chip>MongoDB</Chip>
                <Chip>MySQL</Chip>
                <Chip>Git</Chip>
                <Chip>Cloud Server Management</Chip>
                <Chip>AWS</Chip>
              </Technologies>
            </TimelineElement>
            <TimelineElement
              contentStyle={{ background: 'rgb(255,255,255)', }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
              className="vertical-timeline-element--work"
              date="2016 - 2019"
              icon={<ZynappseIcon />}
            >
              <Position className="vertical-timeline-element-title">Senior Web Developer</Position>
              <Company className="vertical-timeline-element-subtitle">Zynappse Corp.</Company>
              <Technologies>
                <Chip>React.js</Chip>
                <Chip>Redux</Chip>
                <Chip>Node.js</Chip>
                <Chip>MongoDB</Chip>
                <Chip>Git</Chip>
                <Chip>Cloud Server Management</Chip>
                <Chip>Team Lead</Chip>
              </Technologies>
            </TimelineElement>
            <TimelineElement
              contentStyle={{ background: 'rgb(255,255,255)', }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
              className="vertical-timeline-element--work"
              date="2008 - 2012"
              icon={<CollegeIcon />}
            >
              <Position className="vertical-timeline-element-title">Graduated</Position>
              <Company className="vertical-timeline-element-subtitle">STI College (Makati)</Company>
              <Technologies>
                Bachelor of Science in Information Technology
              </Technologies>
            </TimelineElement>
          </Timeline>
        </TimelineContainer>
        <animated.div
          style={{ ...propsHandShow, width: `100%` }}
        >
          <animated.div
            style={{ ...propsHand, width: `100%`, display: `flex`, justifyContent: `center` }}
          >
            <IconContainer>
              <SwipeBothIcon />
            </IconContainer>
          </animated.div>
        </animated.div>
      </TextContainer>

    </Container>
  )
}

export default Index