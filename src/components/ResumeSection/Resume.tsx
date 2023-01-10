import React, { useState } from 'react'
import Titles from '../Titles/Titles'
import * as C from './style'

const Resume = () => {
  const [showItems, setShowItems] = useState<boolean>(false)

  return (
    <C.ContainerResume>
      <Titles title='RESUMO' subtitle='MINHA' secondSubtitle='Historia' />
      <C.ContainerHistory>
        <C.LeftSide showItems={showItems}>
          <h1 className='titles'>Educação</h1>
          <div className="courses">
            <div className="container-instituition"  onClick={() => setShowItems(prevState => !prevState)}>
              <span className='name-instituition'>UNICV - Centro Universitário Cidade Verde</span>
            </div>

            <div className="itens-courses">
                <div className="category-date-course">
                  <span className='name-course'>Analise e Desenvolvimento de Sistemas</span>
                  <span className='date'>2021 - <span className='date-end'>PRESENT</span></span>
                </div>
                <p className='desc-course'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nisi, odio atque earum in omnis minus commodi temporibus animi eligendi voluptates! Necessitatibus quisquam explicabo quod deserunt? Atque voluptas laudantium molestiae.
                </p>
            </div>
          </div>
        </C.LeftSide>

        <C.RightSide>
          <h1 className='titles'>Experiencia</h1>

        </C.RightSide>
      </C.ContainerHistory>
    </C.ContainerResume>
  )
}

export default Resume