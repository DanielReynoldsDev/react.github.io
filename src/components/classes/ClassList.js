import React from 'react'

const ClassList = ({cl, isLoading}) => {
  return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {cl.map(cl => (
            <h1>{cl.name}</h1>
        )
            
            )}
  </section>)
}

export default ClassList
