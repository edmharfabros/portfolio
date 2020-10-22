import styled from 'styled-components'
import Device from '../../src/devices'
import SwipeBoth from '../../public/icons/swipe-both-colored.svg'

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  background: url("/images/bg2.jpg");
  background-position: center 15%;
  background-size: cover;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
 
  width:100%;
`


export const SwipeBothIcon = styled(SwipeBoth)`
  padding-bottom: 1.5em;
  align-self:center;
  height:50px;
  width:50px;
  color: white;
  @media ${Device.MD}{
    display:none;
  }
`

export const Title = styled.h1`
  letter-spacing: 4px;
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
  padding: 1.5em 30px 1.5em 30px;
  letter-spacing: 1px;
  line-height:1.6;
  font-size: 1.2em;
  margin:0;
  color: rgb(255,255,255);

  @media ${Device.SM}{
    padding-bottom: 5em;
  }

  @media ${Device.MD}{
    padding-bottom: 15em;
    padding-right: 150px;
    padding-left: 150px;
    font-size:1.5em;
  }

  @media ${Device.DESKTOP}{
    padding-bottom: 60%;
    padding-right: 20%;
    padding-left: 20%;
    font-size:2em;
  }
`
