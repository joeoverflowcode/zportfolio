import React from "react"
import styles from './styles'

import {
  Nav,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  New,
  New2,
  HeroWave,
} from "./components"
import Navbar from "./components/Navbar"


const App = () => (
<div className=" w-full overflow-hidden">

  <div className={` ${styles.flexCenter} w-full`}>
    <div className={` w-full`}>
      <Nav />
      {/* <Navbar /> */}
    </div>
  </div>

  <div className={` bg-[#000029] ${styles.flexStart}`}>
    <div className="">
    <Hero />
    {/* <HeroWave /> */}
  <About />
  <Skills />
  {/* <Projects /> */}
  <New />
  {/* <New2 /> */}
  <Contact />
    </div>
  </div>

</div>

)

export default App
