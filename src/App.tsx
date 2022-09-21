import './App.css'
import axios from 'axios'
import { useState } from 'react'
import Card from "./components/card"

function App() {
  const url = "https://api.scryfall.com/cards/named?fuzzy="
  const [card, setCard] = useState({name: "", oracle_text: "", img: ""})
  const [cardName, setCardName] = useState("")

  const random = async () => {
    try {
      const card = await axios(`${url}${cardName}`)
      setCard({name: card.data.name, oracle_text: card.data.oracle_text, img:card.data.image_uris.normal})
    } catch(e) {
      setCard({name: "Carta não encontrada"})
    }
  }

  const searchCard = () => {
    random()
  }


  return (
    <div className="App">
      <div className="container">
        <input type="text" placeholder='Card Name' onChange={e => setCardName(e.target.value)} />
        <button onClick={searchCard}>Search</button>
        <div className="content">
          <Card name={card.name} text={card.oracle_text} img={card.img} />
        </div>
      </div>
    </div>
  )
}

export default App
