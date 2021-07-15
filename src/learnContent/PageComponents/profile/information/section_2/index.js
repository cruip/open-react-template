import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../../../../elements/Button";

const Section_2 = () => {
  const currencies = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className='card-full fl fl-ju-co-ce'>
      <form>
        <div className='form-grid'>
          <TextField
            id='outlined-basic'
            label='First Name'
            defaultValue='Robert'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Last Name'
            defaultValue='Johson'
            variant='outlined'
          />
          <TextField
            style={{ gridColumn: "1 / 3" }}
            disabled
            id='outlined-basic'
            label='Email'
            defaultValue='robert@johson.com'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Country'
            defaultValue='Albania'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='City'
            defaultValue='Tirana'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Phone Number'
            defaultValue='+355 65 234 3465'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Birthday Date'
            defaultValue='02/04/2021'
            variant='outlined'
          />
          <TextField
            style={{ gridColumn: "1 / 3" }}
            id='outlined-select-currency-native'
            select
            label='Gender'
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <div>
            <Button className='m-8 button-primary'>Save</Button>
            <Button className='m-8 button-primary'>Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Section_2;
