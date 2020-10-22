import styled from 'styled-components'
import Device from '../../src/devices'
import SwipeBoth from '../../public/icons/swipe-both-colored.svg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  background: url("/images/bg-work.webp");
  background-position: center 15%;
  background-size: cover;
  overflow-y:scroll;
  overflow-x: hidden;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  width:100%;
  background: rgb(45 97 135 / 0.9);
  overflow-y:scroll;
  overflow-x: hidden;
`


export const IconContainer = styled.div`
  padding-bottom: 1.5em;
  align-self:center;
  color: white;
  @media ${Device.MD}{
    display:none;
  }
`

export const SwipeBothIcon = styled(SwipeBoth)`
  height:50px;
  width:50px;
`

export const Title = styled.h1`
  letter-spacing: 5px;
  font-size: 3em;
  margin:0;
  color: rgb(255,255,255);
  padding: 1.5em 30px 0 30px;

  @media ${Device.MD}{
    padding-right: 150px;
    padding-left: 150px;
    font-size:4em;
  }
  @media ${Device.DESKTOP}{
    letter-spacing: 10px;
    padding-right: 20%;
    padding-left: 20%;
  }
 
`

export const Paragraph = styled.p`
  font-size: 0.3em;
  letter-spacing: 2px;
  margin:0;
  color: rgb(255 255 255 / 0.7);
  font-weight:400;
`
export const TimelineContainer = styled.div`
  padding: 2em 30px 1.5em 30px;
  @media ${Device.MD}{
    padding-top: 3em;
    padding-right: 150px;
    padding-left: 150px;
  }
  @media ${Device.DESKTOP}{
    padding-top: 4em;
    padding-right: 20%;
    padding-left: 20%;
  }
`
export const Timeline = styled(VerticalTimeline)`
  width:100%;
`

export const TimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-icon {
    overflow:hidden;
    background:rgb(255, 255,255);
  }

  .vertical-timeline-element-date{
    margin-left:0.5em;
    margin-right:0.5em;
  }
  
`

export const Icon = styled.div`
  width: 100%;
  height: 100%;
`

export const NexplayIcon = styled(Icon)`
  background: url(/images/nexplay_logo.jpeg);
  background-size: cover;
  
`

export const ZynappseIcon = styled(Icon)`
  background: url(https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/zynappse.svg);
  background-size: cover;
`

export const CollegeIcon = styled(Icon)`
  background: url(/images/sti_logo.png);
  background-size: cover;
`

export const Position = styled.h3`
  font-weight:bolder;
`

export const Company = styled.h3`
  font-weight:400;
`

export const Technologies = styled.div`
  width:100%;
  padding:1.5em 0px 0.5em 0;
  display: inline-flex;
  flex-wrap: wrap;
`

export const Chip = styled.span`
  padding: 6px 12px;
  margin:4px;
  border-radius:16px;
  font-size:0.8em;
  background:#e0e0e0;  
  color:rgba(0, 0, 0, 0.87);

`