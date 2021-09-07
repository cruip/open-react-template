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
        
       const getContent= axios.get(`https://benber28.dreamhosters.com/wp-json/wp/v2/posts/${this.props.match.params.id}`);
       
      
      
       Promise.all([getContent]).then(res => {
            
           this.setState({
            imgUrl: res[0].data.featured_media_src_url,
            author: res[0].data.author,
            isLoaded: true,
            id:res[0].data.id,
            content:res[0].data.content.rendered,
            title: res[0].data.title.rendered

           } , () => {
               
           });
           
       });
    }
    
   render() {
       const  title = this.state.title;
       const {author, imgUrl} = this.state;
       return (
           
           <div tw='max-w-contain border-solid border-2 border-primary-500 rounded mt-16 mx-auto '> 
              {console.log("loggy", this.state)}
              <img src={imgUrl} alt={title} tw='mx-auto object-cover mt-2'/>
              
              <h2 tw='flex justify-center'>{title}</h2>
              <strong tw='flex justify-center'>{author}</strong><br/>
              <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
              
           </div>
       )
   }
}
export default Post;