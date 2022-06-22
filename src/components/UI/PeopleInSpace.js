import React from 'react'
import PISDetails from './PISDetails'
import IssImage from '../img/iss.jpeg'

const PeopleInSpace = ( {pis, isLoading} ) => {
  return (
    <div className="crew-container">
      <div className="crew-info">
      <div>
      <p className="ci-p">
        Up to six spaceshuttles can dock at the station at any one time. There are 
        six sleeping quarters which at least one person has been residing in since 2006.
        Over 230 people have been onboard the ISS throught the years, coming from 18 different countries.
      </p>
      <p className="ci-p">
      The current Record for time spent on the ISS is 665 days set by astronaut Peggy Whitson in september 2017.
      After the moon, the ISS is the second brightest object in our night sky and you often don't even need a 
      telescope to see it.
      </p>
      </div>
      <img src={IssImage} className="iss-image" alt="ISS orbiting the earth"/>
      </div>
      <div className="pis">
      <span className="pis-current">There are currently {pis.number} people in space right now!</span>
      <PISDetails isLoading={isLoading} pis={pis}/>
    </div>
    </div>
  )
}

export default PeopleInSpace
