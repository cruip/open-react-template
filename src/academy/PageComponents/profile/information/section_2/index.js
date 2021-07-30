import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "../../../../elements/Button";

import appConfig from "../../../../../app.config.json";

import { setLoading } from "../../../../../appReducers/GlobalAppState";

const Section_2 = ({ profileData, setLoading }) => {
  const genders = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  const locales = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "ar",
      label: "Arabic",
    },
  ];

  const levels = [
    {
      value: 1,
      label: "Beginner",
    },
    {
      value: 2,
      label: "Lower Intermediate",
    },
    {
      value: 3,
      label: "Intermediate",
    },
    {
      value: 4,
      label: "Upper Intermediate",
    },
    {
      value: 5,
      label: "Advanced",
    },
    {
      value: 6,
      label: "Business",
    },
  ];

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    city: "",
    phone: "",
    level: "",
    language: "",
  });

  const history = useHistory();

  useEffect(() => {
    profileData && setData(profileData);
  }, [profileData]);

  const handleInput = (e) => {
    const value = e.target.value;

    setData({
      ...data,

      [e.target.name]: e.target.name === "level" ? Number(value) : value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, ...restData } = data;

    axios
      .post(appConfig.api_url + "actions/update/profile", restData, {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className='card-full fl fl-ju-co-ce'>
      <form className='p-32'>
        <div className='form-grid'>
          <TextField
            name='name'
            id='outlined-basic'
            label='First Name'
            value={data.name}
            onChange={handleInput}
            variant='outlined'
          />
          <TextField
            name='surname'
            id='outlined-basic'
            label='Last Name'
            value={data.surname}
            onChange={handleInput}
            variant='outlined'
          />
          <TextField
            name='email'
            style={{ gridColumn: "1 / 3" }}
            disabled
            id='outlined-basic'
            label='Email'
            type='email'
            value={data.email}
            variant='outlined'
          />
          <TextField
            name='country'
            id='outlined-basic'
            label='Country'
            value={data.country}
            onChange={handleInput}
            variant='outlined'
          />
          <TextField
            name='city'
            id='outlined-basic'
            label='City'
            value={data.city}
            onChange={handleInput}
            variant='outlined'
          />{" "}
          <TextField
            name='gender'
            style={{ gridColumn: "1 / 3" }}
            id='outlined-select-currency-native'
            select
            label='Gender'
            value={data.gender}
            onChange={handleInput}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          >
            {genders.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            name='phone'
            id='outlined-basic'
            label='Phone Number'
            value={data.phone}
            onChange={handleInput}
            variant='outlined'
          />
          <TextField
            name='dateOfBirth'
            id='outlined-basic'
            label='Birthday Date'
            value={data.dateOfBirth}
            onChange={handleInput}
            variant='outlined'
          />
          <TextField
            name='level'
            id='outlined-select-currency-native'
            type='number'
            select
            label='Level'
            value={data.level}
            onChange={handleInput}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          >
            {levels.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            name='language'
            id='outlined-select-currency-native'
            select
            label='Language'
            value={data.language}
            onChange={handleInput}
            SelectProps={{
              native: true,
            }}
            variant='outlined'
          >
            {locales.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <div>
            <Button className='m-8 button-primary' onClick={onSave}>
              Save
            </Button>
            <Button
              className='m-8 button-primary'
              onClick={() => history.push("/")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapState = (state) => ({
  profileData: state.Profile.profileData,
});

export default connect(mapState, { setLoading })(Section_2);
