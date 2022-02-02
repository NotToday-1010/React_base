import React from 'react';
import Counter from "./Counter";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate()

    return (
        <div className='post'>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
            <div>
                <Counter/>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => props.remove(props.post)} >Delete</MyButton>
                <MyButton onClick={() => router(`/posts/${props.post.id}`)} >Open</MyButton>
            </div>
        </div>
    );
}

export default PostItem;