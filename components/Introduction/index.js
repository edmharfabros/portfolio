import { Container, Picture, TextContainer, Title, Name, Position, SwipeLeftIcon } from './components'
import { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Index = () => {
  const props = useSpring({
    delay: 800,
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    }
  })
  const propsName = useSpring({
    delay: 1500,
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    }
  })

  const propsHandShow = useSpring({
    delay: 3000,
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

  const startAnimation = () => {
    setTimeout(() => {
      var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    }, 2500)
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (
    <Container>
      <Picture>
        <TextContainer>
          <animated.div
            style={props}
          >
            <Title>I am</Title>
          </animated.div>
          <animated.div
            style={propsName}
          >
            <Name>Edmhar Fabros</Name>
          </animated.div>
          <Position className="typewrite" data-period="1000" data-type='[ "Backend Developer", "Frontend Developer", "Full Stack Developer :)"]'>
            <span className="wrap"></span>
          </Position>
          <animated.div
            style={{ ...propsHandShow, width: `100%` }}
          >
            <animated.div
              style={{ ...propsHand, width: `100%`, display: `flex`, justifyContent: `center` }}
            >
              <SwipeLeftIcon />
            </animated.div>
          </animated.div>
        </TextContainer>
      </Picture>
    </Container>
  )
}

export default Index