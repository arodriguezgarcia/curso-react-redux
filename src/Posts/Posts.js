import React, { useEffect } from 'react';
import * as postsActions from './posts.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const posts = {
    "results": [
        {
            id: 1,
            username: "zamarrowski",
            picture: "https://picsum.photos/id/231/500/500",
            likes: 25,
            comments: [
                {
                    username: "jacobo",
                    content: "Foton!!!"
                }
            ]
        },
        {
            id: 2,
            username: "pekerod",
            picture: "https://picsum.photos/id/221/500/500",
            likes: 13,
            comments: []
        }
    ]
};

const Posts = props => {
    useEffect(() => {
        console.log(posts.results);
        props.setPosts(posts.results);
    }, []);

    const like = (id) => {
        const posts = props.posts.map(post => {
            if (post.id === id ) {
                post.likes ++
            }
            return post
        })
        
        props.setPosts(posts)
    }

    return <>
        <h1>Posts</h1>
        <Link to="/account">Account</Link>
        <ul>
            { props.posts.map((post, key) => (
                <li key={ key }><img src={ post.picture } width="100" />
                    likes: { post.likes }
                    <button onClick= {()=>like(post.id)}>Me gusta</button>
                    {post.comments.map((comment, key) => (
                        <div key = { key }>
                            <div>{ comment.username }</div>
                            <div>{ comment.content }</div>
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    </>
}

const mapDispatchProps = (dispatch) => {
    return {
        setPosts: posts => dispatch(postsActions.setPosts(posts))
    };
};
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    };
}
export default connect(mapStateToProps, mapDispatchProps)(Posts);