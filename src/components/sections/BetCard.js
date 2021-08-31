import React, { Component } from 'react';
import tw from 'twin.macro'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
;



const FlippyStyle = {
  width: '225px',
  height: '225px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center',
  marginTop: '1rem'
}


const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#460fb3',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
     tw='bg-gradient-to-r from-primary-500'>
      <img
        src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-1604562846.jpg?crop=1.00xw:0.956xh;0,0.0218xh&resize=1200:*"}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      Bet Type
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}><button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
        {children}<br />
        (FRONT SIDE)
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#175852',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      bet description
      
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
        (BACK SIDE)
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
    I flip {flipDirection}ly on hover
    </DefaultCardContents>
  </Flippy>
);

const FlippyOnClick = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip {flipDirection}ly on click
    </DefaultCardContents>
  </Flippy>
);

const ControlledFlippy = ({ isFlipped })  => (
  <Flippy
    flipDirection="vertical"
    isFlipped={isFlipped}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip vertically for every 3sec. I am controlling by a upper scope.
    </DefaultCardContents>
  </Flippy>
);

class BetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App" tw="max-w-contain  mx-auto">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }} tw=' max-w-contain ' >
        <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <FrontSide style={{
        backgroundColor: '#460fb3',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
     tw='bg-gradient-to-r from-primary-500'>
              <img
        src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-1604562846.jpg?crop=1.00xw:0.956xh;0,0.0218xh&resize=1200:*"}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      Bet Type
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}><button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
        <br />
        (FRONT SIDE)
      </span>
              </FrontSide>
              <BackSide style={{
        backgroundColor: '#175852',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
                something elsee
              </BackSide>
            
          </Flippy>
         
         
        </div>
      </div>
    );
  }
}

export default BetCard;