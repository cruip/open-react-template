import React from 'react';
import tw from "twin.macro";
import Logo from '../layout/partials/Logo';
const Box = tw.div`flex  bg-transparent w-full items-center justify-center`;
const Div2 = tw.div`grid bg-white rounded-lg shadow-xl w-auto md:w-9/12 lg:w-1/2`;
const Div3 = tw.div`
flex justify-center py-4
`
const Div4 = tw.div`
flex bg-primary-500 rounded-full md:p-4 p-2 border-2 border-purple-300
`
const Div5 = tw.div`
flex justify-center`

const Div6 = tw.div`
flex`

const Div7 = tw.div`
grid grid-cols-1 mt-5 mx-6`

const Div8 = tw.div`
grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-6
`
const Div9 = tw.div`
grid grid-cols-1
`
const Div10 = tw.div`
flex items-center justify-center w-full
`

const Div12 = tw.div`
flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5
`



const H1 = tw.h1`
text-gray-600 font-bold md:text-2xl text-xl
`
const Label = tw.label`
uppercase md:text-sm text-xs text-gray-500 text-black font-semibold
`
const Input = tw.input`
py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
`



const Select = tw.select`
py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
`

const Button = tw.button`
w-auto bg-primary-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2
`


const UserInfoCard = () => (

    


  
<Box className="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
  <Div2 className="grid bg-primary-500 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
    <Div3 className="flex justify-center py-4">
      <Div4 className="flex bg-primary-500 rounded-full md:p-4 p-2 border-2 border-purple-300">
        <Logo/>
      </Div4>
    </Div3>
    <Div5 className="flex justify-center">
      <Div6 className="flex">
        <H1 className="text-gray-600 font-bold md:text-2xl text-xl">Parlay User Form</H1>
      </Div6>
    </Div5>
    <Div7 className="grid grid-cols-1 mt-5 mx-7">
      <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"> First Name</Label>
      <Input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
    </Div7>
    <Div7 className="grid grid-cols-1 mt-5 mx-7">
      <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</Label>
      <Input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
    </Div7>
    <Div7 className="grid grid-cols-1 mt-5 mx-7">
      <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Username</Label>
      <Input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Username" />
    </Div7>
    <Div8 className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <Div9 className="grid grid-cols-1">
        <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 2</Label>
        <Input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 2" />
      </Div9>
      <Div9 className="grid grid-cols-1">
        <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 3</Label>
        <Input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 3" />
      </Div9>
    </Div8>
    <Div7 className="grid grid-cols-1 mt-5 mx-7">
      <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">State</Label>
      <Select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
      <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
      </Select>
    </Div7>
    <Div7 className="grid grid-cols-1 mt-5 mx-7">
      <Label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Another Input</Label>
      <Input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Another Input" />
    </Div7>
    <Div7 className="grid grid-cols-1 mt-5 mx-7">
 
      <Div10 className="flex items-center justify-center w-full">
        <Label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
         
        </Label>
      </Div10>
    </Div7>
    <Div12 className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
      <Button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</Button>
      <Button className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Create</Button>
    </Div12>
  </Div2>
</Box>


    )
    
    export default UserInfoCard;