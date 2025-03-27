import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams(); // Get the dynamic postId from the URL

    return <div>Displaying content for post ID: {postId}</div>;
};

export default Post;