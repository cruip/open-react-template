import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const BetSlip = (props) => {
  return (
    <div>
      <Card className='container'>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Bet Image" />
        <CardBody>
          <CardTitle tag="h5">Bet Slip</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> Bet Name</CardSubtitle>
          <CardText><p>text input token amount</p> <p>prize amount</p></CardText>
          <Button>Place Bet</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BetSlip;