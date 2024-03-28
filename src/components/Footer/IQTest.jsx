import React from 'react'

const IQTest = ({ IQTEST, Quiz, Results, Pricing }) => {
    return (
        <div className="iqtest">
            <h4>{IQTEST}</h4>
            <div className="iqtestlinks">
                <ul>
                    <li><a href="#">{Quiz}</a></li>
                    <li><a href="#">{Results}</a></li>
                    <li><a href="#">{Pricing}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default IQTest