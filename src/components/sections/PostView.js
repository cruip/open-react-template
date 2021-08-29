import React from 'react';

 const HomeView = props => {
   return (
     <>
       <div className="container row mx-auto p-2">
         <div className="col-8">
           MAIN AREA
         </div>
         <div className="col-4 border bg-secondary p-2 sidebar">
   <TrendingPosts posts={posts} />
 </div>
       </div>
     </>
   );
 };

 export default HomeView;