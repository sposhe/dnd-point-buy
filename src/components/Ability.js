import AbilityButton from './AbilityButton'

export default function Ability(props) {

  const pointsFromDecrease = (props.score >= 14) ? 2 : 1
  const pointsToIncrease = (props.score >= 13) ? 2 : 1

  const stringifyPoints = (n) => `${n} point${(n > 1) ? 's' : ''}`

  const decreaseDetails = {}
  const increaseDetails = {}

  if (props.score === 8) {
    decreaseDetails.description = '(already at minimum)'
    decreaseDetails.disabled = true
  } else {
    decreaseDetails.description = `(refunds ${stringifyPoints(pointsFromDecrease)})`
    decreaseDetails.disabled = false
  }

  if (props.score === 15) {
    increaseDetails.description = '(already at maximum)'
    increaseDetails.disabled = true
  } else {
    if (0 === props.availablePoints) {
      increaseDetails.description = `(costs ${stringifyPoints(pointsToIncrease)}; no points left)`
    } else if (pointsToIncrease > props.availablePoints) {
      increaseDetails.description = `(costs ${stringifyPoints(pointsToIncrease)}; only ${stringifyPoints(props.availablePoints)} left)`
    } else {
      increaseDetails.description = `(costs ${stringifyPoints(pointsToIncrease)})`
    }
    increaseDetails.disabled = pointsToIncrease > props.availablePoints
  }

  return (

    <fieldset className="ability">

      <legend
        id={`${props.ability}-legend`}
        className="ability__legend"
      >
        {props.ability}
      </legend>
      
      <output
        htmlFor={`${props.ability}-decrease ${props.ability}-increase`}
        className="ability-score"
        aria-labelledby={`${props.ability}-legend`}
      >
        {props.score}
      </output>

      <AbilityButton
        type="increase"
        ability={props.ability}
        details={increaseDetails}
        onScoreChangeRequest={() => props.onAbilityScoreChangeRequest(1, pointsToIncrease)}
      />

      <AbilityButton
        type="decrease"
        ability={props.ability}
        details={decreaseDetails}
        onScoreChangeRequest={() => props.onAbilityScoreChangeRequest(-1, pointsFromDecrease * -1)}
      />

    </fieldset>

  )

}