import playerData from './playerData.js'
import { useState } from 'react'


function BaseballCard(props) {
  
const [showPicture, setShowPicture] = useState(true)

const toggleCard = () => {
  setShowPicture(!showPicture)
}


  if (showPicture) {

    return (
      <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <img src={props.imgURL} alt={props.name} />
    </div>
    )

  } else {

    const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
      <p key={statName}>
        {statName}: {statValue}
      </p>
    ))



  return (
      <div className='card' onClick={toggleCard}>
        <h2> { props.name } </h2>
        <p> { props.team } </p>
        <p> { props.position }</p>
        {statsDisplay}
      </div>

  )
}
}



function App() {

  const cards = playerData.map((player) => (
    
    <BaseballCard
    name = { player.name }
    team = {player.team}
    position = {player.position} 
    stats = {player.stats}
    imgURL = {player.imgUrl}
    key = {player.cardId }
    />
  ))

  return <>{cards}</>;
}

export default App;
