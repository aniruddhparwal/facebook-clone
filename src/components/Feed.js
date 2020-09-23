import React, { useState, useEffect } from 'react'
import db from '../firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'



function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                />
            ))}

            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
                username="aniruddh"
                timestamp="sfsfs"
                message="shi"
            />
        </div>
    )
}

export default Feed
