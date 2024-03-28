import React from 'react';

const Company_Footer = ({ Logo, Description }) => {
    return (
        <div className="company_footer">
            <div className="logo_section">
                <img src={Logo} alt="Logo" />
                <p>{Description}</p>
            </div>
        </div>
    )
}

export default Company_Footer