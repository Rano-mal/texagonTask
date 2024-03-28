import React from 'react'

const Support = ({ Support, Help, FAQ, Contact }) => {
    return (
        <div className="support">
            <h4>{Support}</h4>
            <ul>
                <li><a href="#">{Help}</a></li>
                <li><a href="#">{FAQ}</a></li>
                <li><a href="#">{Contact}</a></li>
            </ul>
        </div>
    )
}

export default Support