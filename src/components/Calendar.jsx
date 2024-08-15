import React from 'react'
import GitHubCalendar from 'react-github-calendar';


export default function Calendar(props) {
    return (
        <p>
            <GitHubCalendar username={props.username} />
        </p>
    )


}
