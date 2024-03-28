import React from 'react'

const Social_Icons = ({ Instagram, Facebook, Twitter, LinkedIn }) => {
    return (
        <div className='social-icons'>
            <img src={Instagram} alt="Instagram" className='Instagram' />
            <img src={Facebook} alt="Facebook" className='Facebook' />
            <img src={Twitter} alt="Twitter" className='Twitter' />
            <img src={LinkedIn} alt="LinkedIn" className='LinkedIn' />
        </div>
    )
}

export default Social_Icons