import styled from 'styled-components'
import Device from '../../src/devices'
import SwipeRight from '../../public/icons/swipe-right-colored.svg'
import LinkedIn from '../../public/icons/linkedin.svg'
import Github from '../../public/icons/github.svg'


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


export const SwipeRightIcon = styled(SwipeRight)`
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
  font-size: 0.3em;
  letter-spacing: 2px;
  margin:0;
  color: rgb(255 255 255 / 0.7);
  font-weight:400;
`


export const Name = styled.p`
  text-align:center;
  padding: 1em 30px 0px 30px;
  letter-spacing: 1px;
  line-height:2.5;
  font-size: 2em;
  margin:0;
  color: rgb(255,255,255);
  font-weight:bold;

  
  @media ${Device.MD}{
    padding-bottom: 15em;
    padding-right: 150px;
    padding-left: 150px;
    font-size: 2.5em;
  }

  @media ${Device.DESKTOP}{
    padding-right: 20%;
    padding-left: 20%;
    font-size:3em;
  }
`

export const Position = styled.p`
  letter-spacing: 1px;
  line-height:1.6;
  font-size: 0.6em;
  margin:0;
  color: rgb(255,255,255);
  font-weight:400;

`
export const Email = styled.a`
  outline:0;
  display:block;
  color:rgb(40,171,185);
  text-decoration: underline;
  letter-spacing: 1px;
  line-height:1.6;
  font-size: 0.4em;
  margin:0;
  font-weight:200;
`

export const LinkedinIcon = styled(LinkedIn)`
  outline:0;
  height:50px;
  width:50px;
  margin: 5px;
`

export const GithubIcon = styled(Github)`
  outline:0;
  height:50px;
  width:50px;
  margin: 5px;
`
