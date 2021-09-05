import React, { Component } from 'react'
import axios from 'axios';
import Post from '../components/sections/Post'

export class Blog3 extends Component {
   state = {
       post: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://parlaycms.site.strattic.io/wp-json/wp/v2/posts')
       .then(res => {
        console.log("ressy",res)
           this.setState({
           post: res.data,
           isLoaded: true})}
       )
       .catch(err => console.log(err))
   }
   render() {
    const {post, isLoaded} = this.state;
    console.log("post", post)
       return (
           <div tw='max-w-contain mx-auto mt-16 p-2 '>
              {post.map(post =>
               <Post key={post.id} post={post}/>
               )}
           </div>
       )
   }
}
export default Blog3;