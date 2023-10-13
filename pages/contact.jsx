import React from 'react'
import  { ContactGrid } from '../components/Contact'
import HeroContact from '../components/HeroConTact'

const contact = () => {
  return (
<div style={{ textAlign: 'center' }}>
    <HeroContact heading='Pour des conseils, informations, ou simplement pour discuter, composez le 3919, un numéro national d aide pour les femmes victimes de violence, accessible depuis les téléphones fixes et mobiles.' message='' />
    <ContactGrid />
</div>
  )
}

export default contact