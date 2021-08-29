import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //
import { Container, ContentWithPaddingXl } from "../../layouts/Layouts.js";


const GameCard = () => (



<body className="bg-purple-200">
  <Container className="container w-full max-w-xs mx-auto mt-8 px-4 font-sans">
    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
      <h3 className="title text-xl mb-8 mx-auto text-center font-bold text-purple-700">Stuff & Things</h3>
      <div className="mb-4">
        <label for="something" class="block text-gray-500 font-medium text-sm mb-2">Something</label>
        <input type="text" placeholder="Enter Your Stuff" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        <div class="flex items-center justify-between">
          <button class="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="button">
            Sign Up
          </button>
          <a class="inline-block -mb-4 align-baseline font-bold text-sm text-purple-500 hover:text-purple-600 focus:shadow-outline focus:outline-none" href="#">
            Already a fan?
          </a>
        </div>
      </div>
    </form>
  </Container>
</body>

)

export default GameCard;