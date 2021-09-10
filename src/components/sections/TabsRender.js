
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from '../../layouts/Layouts';
import 'react-tabs/style/react-tabs.css';
import Val from '../../assets/images/valorant-logo.png';
import Wz from '../../assets/images/COD2.jpg';
import Fn from '../../assets/images/fn3.jpg';
import BetCard from '../sections/BetCard.js';
import tw from 'twin.macro'

const CardContainer = tw.div`
 w-ct   
`

const TabsRender = () => (
  <Container tw=" max-w-contain m-auto ">
  <Tabs tw="justify-center" >
    <TabList tw=" flex justify-between  ">
      <Tab ><img src={Val} alt="Valorant logo"/></Tab>
      <Tab ><img src={Wz} alt="WarZone logo"/></Tab>
      <Tab><img src={Fn} alt="Fortnite logo"/></Tab>
    </TabList>
    <div tw=' flex justify-center max-w-contain'>
    <div className='container'>
    <TabPanel className='container' >
      <CardContainer>
      <p>Valorant</p>
      <BetCard/>
      </CardContainer>
    </TabPanel>
    <TabPanel >
    <CardContainer >
      <p> COD: WarZone</p>
      <BetCard/>
      </CardContainer>
    </TabPanel>
    <TabPanel >
    <CardContainer >
      <p>Fortnite</p>
      <BetCard/>
      </CardContainer>
    </TabPanel>
    </div>
    </div>
  </Tabs>
  </Container>
);
export default TabsRender;