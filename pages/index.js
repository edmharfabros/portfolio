import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import Contact from '../components/Contact'


const Index = () => {
  return (
    <AwesomeSlider animation="cubeAnimation" bullets={false} fillParent={true} infinite={false}>
      <div>
        <Introduction />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Contact />
      </div>
    </AwesomeSlider>
  )
}

export default Index