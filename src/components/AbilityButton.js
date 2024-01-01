export default function AbilityButton(props) {

  const buttonClick = () => {
    if (!props.details.disabled) {
      props.onScoreChangeRequest()
    }
  }

  return (
    <div className="ability-button-wrapper">
      <button
        id={`${props.ability}-${props.type}`}
        type="button"
        className="ability-button"
        aria-describedby={`${props.ability}__${props.type}__description`}
        aria-disabled={props.details.disabled}
        onClick={buttonClick}
      >{props.type}</button>
      <span
        id={`${props.ability}__${props.type}__description`}
        className="ability-button-description"
      >{props.details.description}</span>
    </div>
  )

}