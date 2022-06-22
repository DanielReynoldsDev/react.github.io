import React from 'react'
import PersonItem from './PersonItem'

const PISDetails = ({pis, isLoading}) => {
  return isLoading ? ( <h1>Loading...</h1>) : (

    <section className='cards'>
        <br></br>
    <div className="pis-list"><strong>They are:</strong></div>
    
    {pis.people.map((people) => (
      <PersonItem key={people.name} people={people}></PersonItem>
    ))}
  </section>
  )

}

export default PISDetails
