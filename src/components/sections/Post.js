import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import ReadMore from './ReadMore';
export class Post extends Component {
   state = {
       imgUrl: '', 
       author: '',
       isLoaded: false,
       id:''
   }
   static propTypes = {
       post: PropTypes.object.isRequired
   }

    
   render() {
       const { title, excerpt, id , featured_media_src_url} = this.props.post;
       
       
       return (
           
           <div tw='max-w-contain border-solid border-2 border-primary-500 p-2 rounded mt-4'> 
                        
              <img src={featured_media_src_url} alt={title.rendered} tw='mx-auto object-cover'/>
              <Link to={`/blog/${id}`}  ><div tw='flex justify-center'>
              <h2 tw=''>{title.rendered}</h2></div></Link>
              <p tw='flex justify-center'>{this.state.author}</p><br/>
              <ReadMore post={excerpt.rendered}></ReadMore>
           </div>
       )
   }
}
export default Post;