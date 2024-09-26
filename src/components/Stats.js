function Stats({user}) {
  const {pfp, name, runningTime, swimmingTime, bikingTime} = user
  return (
    <div className="d-flex">
      <img src={pfp} alt={`Profile picture of ${name}`} className="rounded-circle" style={{width: 50, height: 50}}/>
      <h2>{name}</h2>
      <p><span></span>{runningTime}</p>
      <p><span></span>{swimmingTime}</p>
      <p><span></span>{bikingTime}</p>
    </div>
  )
}

export default Stats