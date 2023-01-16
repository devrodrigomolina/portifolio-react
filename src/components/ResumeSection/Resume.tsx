import React, { useState } from 'react'
import Titles from '../Titles/Titles'
import * as C from './style'
import { JSONEducation } from './JSONEducation'

const Resume = () => {
  const [showItems, setShowItems] = useState<boolean>(false)

  return (
    <C.ContainerResume>
      <Titles title='RESUMO' subtitle='MINHA' secondSubtitle='Historia' />
      <C.ContainerHistory>
        <C.LeftSide showItems={showItems}>
          
          <h1 className='titles'>Educação</h1>
          {JSONEducation.map(elements => (
         
          <div className="courses">
            <div className="container-instituition"  onClick={() => setShowItems(prevState => !prevState)}>
              <span className='name-instituition'>{elements.name}</span>
            </div>

            <div className="itens-courses">
              <div className="category-date-course">
                <span className='name-course'>{elements.course}</span>
                <span className='date'>{elements.initialDate} - <span className='date-end'>{elements.endDate}</span></span>
              </div>
              <p className='desc-course'>{elements.desc}</p>
            </div>
          </div>
          )) }
        </C.LeftSide>

        <C.RightSide>
          <h1 className='titles'>Experiencia</h1>

        </C.RightSide>
      </C.ContainerHistory>
    </C.ContainerResume>
  )
}

export default Resume