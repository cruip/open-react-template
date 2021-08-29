import React from 'react';
import { Query } from 'react-apollo';
import PostsPreview from '../components/sections/postPreview.js';
import GraphCMSContent from '../utils/graphcms';
import '../App.css';

const Blog = props => {
    const [posts, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();

    const LoadingPostsJsx = () => (
        <div>
            Loading...
        </div>
    );

    const ErrorLoadingPostsJsx = () => (
        <div className="mx-auto alert-danger">
            Error!
        </div>
    );

    return (
        <div id="home_view" className="illustration-section-01">
            <div className="container p-2 mx-auto row">
                <div className="col-8 ">
                    <h3 className='recent '>Recent Articles</h3>
                    <div className="border p-3">
                        <Query query={Client.fetchPosts()}>
                            {
                                ({loading, error, data}) => {
                                    if (loading) return LoadingPostsJsx();
                                    if (error) {
                                        console.log(error);
                                        return ErrorLoadingPostsJsx();
                                    }

                                    const POSTS = data.posts;
                                    setPosts(POSTS);

                                    return POSTS.map(post => (
                                        <PostsPreview post={post} />
                                    )).reverse();
                                }
                            }
                        </Query>
                    </div>
                </div>
                
            </div>
            <div className='illustration-section-03'></div>
        </div>
    );
};

export default Blog;