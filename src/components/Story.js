import { Avatar } from '@material-ui/core'
import React from 'react'

function Story({ image, profileSrc, title }) {
    return (
        <div className="story">
            <img src={image} />
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
