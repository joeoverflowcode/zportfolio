import React from "react"
import styles from './styles'

import {
  Nav,
} from "./components"


const App = () => (
<div className="bg-primary w-full overflow-hidden">

  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Nav />
    </div>
  </div>


</div>

)

export default App
