import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import tw from 'twin.macro'

const Container = tw.div`
mt-16 max-w-contain mx-auto
`
function CarouselComp() {
 const data = [
   
   
    {
      image: "https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      caption: "Thing one"
    },
    {
      image: "https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      caption: "Something dank"
    },
    {
      image: "https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      caption: " $₱€₦₯ ₥o₦€¥ "
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <Container >
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={5000}
            width="1200px"
            height="500px"
            captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default CarouselComp;