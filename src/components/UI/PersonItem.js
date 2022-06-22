import React from 'react'

const PersonItem = ({pis, isLoading, people}) => {
  return (
    <div >
      <div className="person"><strong>{people.name}</strong>, of the {people.craft}</div>
    </div>
  )
}

export default PersonItem
