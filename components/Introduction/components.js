import styled from 'styled-components'
import Device from '../../src/devices'
import SwipeLeft from '../../public/icons/swipe-left-colored.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: inherit;
`

export const Picture = styled.div`
  flex: 1;
  flex-basis: 50%;
  background: url("/images/page_picture.jpg");
  background-position: center;
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:flex-end;

  @media ${Device.MD}{
    align-items:flex-start;
    justify-content:flex-end;
  }
`

export const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
  
  padding:15px;


  @media ${Device.MD}{
    margin-top:25em;
    margin-right:3em;
  }

  @media ${Device.DESKTOP}{
    margin-top:13em;
    margin-right:8em;
  }
  
`

export const Title = styled.h1`
  margin: 0;
  color: white;
  font-size:4em;
  line-height:0.8;
  @media ${Device.MD}{
    font-size:5em;
  }
  @media ${Device.DESKTOP}{
    font-size:7em;
  }
`

export const Name = styled.h1`
  color: #28abb9;
  margin: 0;
  font-size:2.8em;
  line-height:1;
  letter-spacing: 1px;
  @media ${Device.MD}{
    font-size:3.5em;
  }
  @media ${Device.DESKTOP}{
    font-size:5em;
  }
`

export const Position = styled.h1`
  margin:0;
  color: white;
  font-size:1.5em;
  line-height:1.2;
  margin-bottom:0.5em;
  @media ${Device.MD}{
    font-size:1.7em;
  }
  @media ${Device.DESKTOP}{
    font-size:2.5em;
  }
`

export const SwipeLeftIcon = styled(SwipeLeft)`
  margin-top:0.5em;
  margin-bottom:1em;
  align-self: center;
  height:50px;
  width:50px;
  color: white;

  @media ${Device.MD}{
    display:none;
  }
`
