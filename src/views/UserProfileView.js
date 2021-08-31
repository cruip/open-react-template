import React from 'react';
import tw from "twin.macro";
import BetSlip from '../components/sections/BetSlip.js';

import CarouselComp from '../components/sections/CarouselComp.js';
import TabsRender from '../components/sections/TabsRender.js';


const UserProfileView = () => (

       <>
        <CarouselComp/>
        <TabsRender/>
        <BetSlip/>
      </>
)

export default UserProfileView;