import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import postService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await postService.getCommentByPostId(id)
        setComments(response.data)
    })
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await postService.getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>
                You have opened post with ID: {params.id}
            </h1>
            {isLoading ?
                <h1>Loading</h1>
                :
                <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading ?
                <h1>Loading</h1>
                :
                <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;