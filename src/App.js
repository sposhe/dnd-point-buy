import { useState } from 'react'

import './App.css'

import Points from './components/Points'
import Ability from './components/Ability'

export default function App() {

  const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

  const [availablePoints, setAvailablePoints] = useState(27)
  const [abilityScores, setAbilityScores] = useState(abilities.map(() => 8))

  const handleAbilityScoreChangeRequest = (i, change, cost) => {
    setAvailablePoints(availablePoints - cost)
    setAbilityScores(abilityScores.map((ability, j) => (i === j) ? ability + change : ability))
  }

  return (
    <main>
      <Points available={availablePoints} />
      {abilities.map((ability, i) => (
        <Ability
          key={ability}
          ability={ability}
          availablePoints={availablePoints}
          score={abilityScores[i]}
          onAbilityScoreChangeRequest={(change, cost) => handleAbilityScoreChangeRequest(i, change, cost)}
        />
      ))}
    </main>
  )
}
