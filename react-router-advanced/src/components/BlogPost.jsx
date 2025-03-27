import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams(); // Get the dynamic postId from the URL

    return <div>Displaying content for post ID: {id}</div>;
};

export default BlogPost;