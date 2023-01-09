import React from 'react'
import LateralBar from '../LateralBar/LateralBar'
import ProgressBar from '../ProgressBar/ProgressBar'
import Titles from '../Titles/Titles'
import * as C from './style'
import { SkillsJson } from './SkillsJson'

const Skills = () => {
  return (
    <C.ContainerSkills>
      <Titles title='HABILIDADES PROFISSIONAIS' subtitle='MEU' secondSubtitle='TALENTO'/>
      <div className="habilities">
        <div className="bar">
          <LateralBar />
        </div>

        {SkillsJson.map(skills => (
          <div className="card">
            <div className="title-value">
              <p className="title">{skills.tech}</p>
              <p className='value'>{skills.value}<span className='percent'>%</span></p>
            </div>
            <p className='description'>{skills.description}</p>
            <ProgressBar value={skills.value} />
          </div>
        ))}
      </div>
        <h1 className="bg-text">Skills</h1>
    </C.ContainerSkills>
  )
}

export default Skills