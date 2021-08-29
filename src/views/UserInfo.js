import React from 'react';
import tw from "twin.macro";
import { Container as ContainerBase } from "../layouts/Layouts.js";
import UserInfoCard from '../components/sections/UserInfoCard.js';

const Container = tw(ContainerBase)`min-h-screen bg-secondary-600 text-black font-medium flex justify-center bg-opacity-0 -m-8 mt-12`;
const UserInfo = () => (

     
        <Container>
        <UserInfoCard/>
        </Container>
    
)

export default UserInfo;