import React from 'react'

function Results({activities}) {
    return (
        <div>
            <ul>
                <li>{activities.map((activity) => JSON.stringify(activity))}</li>
            </ul>
        </div>
    )
}

export default Results
