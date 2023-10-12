import React from 'react'
import  { ContactGrid } from '../components/Contact'
import HeroContact from '../components/HeroConTact'

const contact = () => {
  return (
    <div>
        <HeroContact heading='Numéros Utiles' message='' />
        <ContactGrid />
    </div>
  )
}

export default contact