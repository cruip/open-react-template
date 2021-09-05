import React, { Component } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';
import tw from 'twin.macro';

export class Post extends Component {
   state = {
       imgUrl: [],
       author: '',
       isLoaded: false,
       id:'',
       content:[],
       title: ''
   }
   static propTypes = {
       post: PropTypes.object.isRequired
   }
   componentDidMount () {
      
         this.state.id  = this.props.match.params;
        
       const getId = axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
      
       const getImageUrl = axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
      
       const getContent= axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
       
       const getAuthor = axios.get(`https://parlaycms.site.strattic.io/wp-json/wp/v2/posts`);
      
       Promise.all([getImageUrl, getAuthor,getId, getContent]).then(res => {
            console.log('ressszdsa', res[0].data._embedded['wp:featuredmedia'])
           this.setState({
            imgUrl: res[0].data.featured_media_src_url,
            author: res[1].data.author,
            isLoaded: true,
            id:res[2].data.id,
            content:res[3].data.content.rendered,
            title: res[3].data.title.rendered

           } , () => {
               console.log("state again",this.state)
           });
           
       });
    }
    
   render() {
       const  title = this.state.title;
       const {author, imgUrl} = this.state;
       return (
           
           <div tw='max-w-contain border-solid border-2 border-primary-500 p-2 rounded mt-16 mx-auto'> 
              {console.log("loggy", this.state)}
              <img src={imgUrl} alt={title} tw='mx-auto object-cover'/>
              
              <h2 tw='flex justify-center'>{title}</h2>
              <strong tw='flex justify-center'>{author}</strong><br/>
              <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
              
           </div>
       )
   }
}
export default Post;