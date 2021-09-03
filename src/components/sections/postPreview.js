import React from 'react';
import ReadMore from './ReadMore.js'

const PostPreview = ({post, noImage}) => {
    
    return (
        <div className="post-preview">
            {
                (() => {
                    if (noImage !== true) {
                        return (
                            <div className="cover-image-wrapper">
                                <img className="cover-image" src={ post.coverImage !== null ? post.coverImage.url : "hahah"} />
                            </div>
                        )
                    } else {
                        return null;
                    }
                })()
            }
            
            <div>
                <h1 className="title">{ post.title }</h1>
                <div className="text-center">
                    <span className="tag">Author</span> <span className="author">{ Array.isArray(post.author) ? post.author.join(", ") : post.author }</span>
                </div>
            </div>
            <div className="body">

                {<ReadMore post={post.body}>  </ReadMore>}
            </div>
        </div>
    );
};
export default PostPreview;