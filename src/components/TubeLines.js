import React from 'react'

const TubeLine = ({ id, name, lineStatuses }) => {
  return (
    <div className={id}>
      <h2 className="title has-text-white is-4">{name}</h2>
      <h4 className="title is-6">{lineStatuses[lineStatuses.length - 1].statusSeverityDescription}</h4>
    </div>
  )
}


export default TubeLine