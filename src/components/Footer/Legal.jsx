import React from 'react'

const Legal = ({ Legal, Privacy_Policy, Terms_of_Service, Cookies_Policy }) => {
    return (
        <div className="legal">
            <h4>{Legal}</h4>
            <ul>
                <li><a href="#">{Privacy_Policy}</a></li>
                <li><a href="#">{Terms_of_Service}</a></li>
                <li><a href="#">{Cookies_Policy}</a></li>
            </ul>
        </div>
    )
}

export default Legal