import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['posts'], // Cache key
        queryFn: fetchData,
        // Set stale time to determine how long data is fresh
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch}>Refetch Posts</button>
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsComponent;