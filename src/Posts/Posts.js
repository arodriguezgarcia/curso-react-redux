import React, { useEffect } from 'react';
import * as postsActions from './posts.actions';
import { connect } from 'react-redux';

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

    return <>
        <h1>Posts</h1>
        <ul>
            {props.posts.map((post, key) => (
                <li><img src={post.picture} width="100" /></li>
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