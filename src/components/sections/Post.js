import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
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
   componentDidMount () {
       const {featured_media, author} = this.props.post;
       const getImageUrl = axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
       const getId = axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
       
    
       const getAuthor = axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
      
       Promise.all([getImageUrl, getAuthor,getId]).then(res => {
        console.log('Post', res[2].data.id)
           this.setState({
               imgUrl: res[0].data.featured_media_src_url,
               author: res[1].data.author,
               isLoaded: true,
               id:res[2].data.id
           });
           
       });
    }
    
   render() {
       const { title, excerpt, id } = this.props.post;
       console.log("poooosty", this.props.post)
       const {author, imgUrl} = this.state;
       
       return (
           
           <div tw='max-w-contain border-solid border-2 border-primary-500 p-2 rounded'> 
              {console.log("statatatatatatatatatatae", this.state )}
           
              <img src={imgUrl} alt={title.rendered} tw='mx-auto object-cover'/>
              <Link to={`/blog/${id}`}  ><div tw='flex justify-center'>
              <h2 tw=''>{title.rendered}</h2></div></Link>
              <p tw='flex justify-center'>{this.state.author}</p><br/>
              <ReadMore post={excerpt.rendered}></ReadMore>
           </div>
       )
   }
}
export default Post;