import React from 'react'
import ContactItem from './ContactItem'
import Location from 'assets/svg/location.svg';
import Mail from 'assets/svg/mail.svg';
import User from 'assets/svg/user.svg';

const ContactCard = () => {
  return (
    <div className="h-40 w-8/12 md:w-6/12 lg:w-5/12 xl:2/12 bg-secondary-grey shadow-lg flex flex-col items-start -mt-24 rounded-md px-8 md:px-14">
      <ContactItem label="Juan José Bernal Villamarin." icon={User}/>
      <ContactItem label="Bogotá, Colombia." icon={Location}/>
      <ContactItem label="juan.jose.bernal.villamarin@gmail.com" icon={Mail}/>
    </div>
  )
}

export default ContactCard
