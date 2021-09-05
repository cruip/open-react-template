import React, { useState } from "react";

import "../../App.css";
  
const ReadMore = ({ children }) => {
  console.log("children",children)
 

  const text = children[0].props.children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
  

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : children}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
const Content = (props) => {
  let paragraphs =  props.post.split("++").map( para => {
      return(
      <p>{para}</p>)
  });

  console.log("PARA",paragraphs)
  return (
    <div className="">
      <h2>
        <ReadMore className='read'>
       {paragraphs} 
        </ReadMore>
      </h2>
    </div>
  );
};
  
export default Content;