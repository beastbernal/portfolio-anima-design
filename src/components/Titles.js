import React from 'react'
import TitleDetail from './TitleDetail';

export const Titles = () => {
  const charges = [
    {
      name: 'Senior Front End Developer',
      opacity: 100,
    },
    {
      name: 'Senior JS Developer',
      opacity: 50,
    },
    {
      name: 'Senior Fullstack Developer',
      opacity: 50,
    },
    {
      name: 'Front End Developer Architect',
      opacity: 50,
    },
    {
      name: 'Technical Lead',
      opacity: 50,
    },
  ]
  return (
    <div className="flex flex-wrap justify-center align-middle mx-10">      
        {charges.map((charge) => (
          <TitleDetail {...charge} key={charge.name} />
        ))}
    </div>
  )
}

export default Titles
