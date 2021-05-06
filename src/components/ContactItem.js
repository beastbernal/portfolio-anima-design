import React from 'react'

const ContactItem = ({label, icon, alt}) => {
    return (
        <div className="flex flex-row pt-5">
            <img src={icon} alt={alt} className="w-4 pt-1"/>
            <p className="text-white pl-3">{label}</p>
        </div>
    )
}

export default ContactItem
