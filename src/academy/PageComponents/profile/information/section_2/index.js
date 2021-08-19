import React, { useState, useEffect, createRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import PhoneInput from "react-phone-input-2";
import Button from "../../../../elements/Button";
import Image from "../../../../elements/Image";
import IntlMessages from "../../../../elements/IntlMessages";

import appConfig from "../../../../../app.config.json";

import { setLoading } from "../../../../../appReducers/GlobalAppState";
import { setLocale } from "../../../../reducers/GlobalState";

import "./index.css";

const Section_2 = (props) => {
  const { profileData, setLoading, setLocale } = props;
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

  const navigationItems = [
    {
      icon: "information_icon.svg",
      nav: "need-help",
      content: "Personal Information",
      link: "/help/center",
    },
    {
      icon: "credit_card_icon.svg",
      nav: "billing",
      content: "Payment methods",
      link: "/profile/info",
    },
    {
      icon: "eye_icon.svg",
      nav: "logout",
      content: "Privacy",
      link: "/logout",
    },
    {
      icon: "certificate_icon.svg",
      nav: "group-classes",
      content: "Certificates",
      link: "/group-classes",
    },

    {
      icon: "settings_icon.svg",
      nav: "settings",
      content: "Settings",
      link: "/",
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
    console.log(value);
    setData({
      ...data,

      [e.target.name]: e.target.name === "level" ? Number(value) : value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, ...restData } = data;

    const lan = {
      en: { value: "en", direction: "ltr" },
      ar: { value: "ar", direction: "rtl" },
    };

    setLocale(lan[data.language]);

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
    <div className='fl'>
      <div className='card fl fl-ju-co-ce' style={{ width: "70%" }}>
        <form className='p-26'>
          <div className='form-grid'>
            <div className='fl-co fl-al-it-st'>
              <Label for='name'>
                <IntlMessages id='profile.first-name' />
              </Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='your name here..'
                value={data.name}
                onChange={handleInput}
              />
            </div>
            <div className='fl-co fl-al-it-st'>
              <Label for='surname'>
                <IntlMessages id='profile.last-name' />
              </Label>
              <Input
                type='text'
                name='surname'
                id='surname'
                placeholder='your last name here..'
                value={data.surname}
                onChange={handleInput}
              />
            </div>
            <div className='fl-co fl-al-it-st' style={{ gridColumn: "1 / 3" }}>
              <Label for='email'>
                <IntlMessages id='profile.email' />
              </Label>
              <Input
                name='email'
                disabled
                id='email'
                type='email'
                value={data.email}
              />
            </div>
            <div className='fl-co fl-al-it-st'>
              <Label for='country'>
                <IntlMessages id='profile.country' />
              </Label>
              <Input
                name='country'
                id='country'
                type='text'
                value={data.country}
                onChange={handleInput}
              />
            </div>
            <div className='fl-co fl-al-it-st'>
              <Label for='city'>
                <IntlMessages id='profile.city' />
              </Label>
              <Input
                name='city'
                id='city'
                type='text'
                value={data.city}
                onChange={handleInput}
              />
            </div>
            <div className='fl-co fl-al-it-st' style={{ gridColumn: "1 / 3" }}>
              <Label for='gender'>
                <IntlMessages id='profile.gender' />
              </Label>
              <Input
                name='gender'
                id='gender'
                type='select'
                value={data.gender}
                onChange={handleInput}
              >
                {genders.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>
            </div>

            <div className='fl-co fl-al-it-st'>
              <Label for='phone'>
                <IntlMessages id='profile.phone' />
              </Label>
              <PhoneInput
                className='form-control'
                specialLabel={""}
                country={"al"}
                value={data.phone}
                inputStyle={{
                  borderColor: props.touched && props.error && "red",
                }}
                {...props}
              />
            </div>
            <div className='fl-co fl-al-it-st'>
              <Label for='dateOfBirth'>
                <IntlMessages id='profile.birthday-date' />
              </Label>
              <Input
                name='dateOfBirth'
                id='dateOfBirth'
                type='date'
                value={data.dateOfBirth}
                onChange={handleInput}
              />
            </div>
            <div className='fl-co fl-al-it-st'>
              <Label for='level'>
                <IntlMessages id='profile.level' />
              </Label>
              <Input
                name='level'
                id='level'
                type='select'
                value={data.level}
                onChange={handleInput}
              >
                {levels.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>
            </div>
            <div className='fl-co fl-al-it-st'>
              <Label for='language'>
                <IntlMessages id='profile.language' />
              </Label>
              <Input
                name='language'
                id='language'
                type='select'
                value={data.language}
                onChange={handleInput}
              >
                {locales.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>
            </div>
            <div className='fl'>
              <Button className='m-8 button-primary' onClick={onSave}>
                <IntlMessages id='button.save' />
              </Button>
              <Button
                className='m-8 button-primary'
                onClick={() => history.push("/")}
              >
                <IntlMessages id='button.cancel' />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ width: 32 }}></div>
      <div className='card p-26 fl-ce' style={{ flex: 1 }}>
        <div style={{ width: "70%" }}>
          <div className='fl-ce mb-64'>
            <img
              style={{ borderRadius: "50em" }}
              src={
                require("../../../../assets/images/avatars/avatar4.jpg").default
              }
              alt=''
              width='100%'
            />
          </div>
          <div className='text-align-start'>
            {navigationItems.map((item, index) => {
              return (
                <div key={index}>
                  <a
                    href={item.link}
                    className={classNames(
                      "nav-section fl fl-al-it-ce fl-ju-co-sp-be"
                    )}
                    style={{ padding: "15px 10px 15px 10px" }}
                  >
                    <span>
                      <Image type='icon' image={item.icon} width={23} />
                    </span>
                    <div
                      // className={classNames(link === item.link && "active-link")}
                      style={{ width: "76%", fontSize: 18 }}
                    >
                      {item.content}

                      {/* <IntlMessages id={item.content} /> */}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  profileData: state.Profile.profileData,
});

export default connect(mapState, { setLoading, setLocale })(Section_2);
