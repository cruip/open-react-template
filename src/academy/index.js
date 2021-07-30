import React, { useRef, useEffect, useContext, useState } from "react";
import { useParams, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppRoute from "../globalUtils/AppRoute";

import LanguageProvider from "./LanguageProvider";

// Layouts
import UnitLayout from "./LayoutComponents/AppLayout/Unit";
import AppLayout from "./LayoutComponents/AppLayout";
import PracticeLayout from "./LayoutComponents/AppLayout/Practice/PracticeLayout";

// Views
import Home from "./PageComponents/main";
import Unit from "./PageComponents/unit";
import FilmComponent from "./PageComponents/practice/film";
import SpeakComponent from "./PageComponents/practice/speak";
import WriteComponent from "./PageComponents/practice/write";
import InterpretComponent from "./PageComponents/practice/interpret";
import MemorizeComponent from "./PageComponents/practice/memorize";
import VideoClassComponent from "./PageComponents/practice/videoClass";
import VocabularyComponent from "./PageComponents/practice/vocabulary";
import InterrogativeFormComponent from "./PageComponents/practice/interrogativeForm";
import PronounsComponent from "./PageComponents/practice/pronouns";
import AssessmentComponent from "./PageComponents/practice/assesment";

import Profile from "./PageComponents/profile/information";
import Logout from "./PageComponents/logout";

import { fetchUserData } from "./reducers/UserData";

import refreshToken from "./globals/RefreshToken";
import SignupPopup from "./globals/SignupPopup";

const Academy = ({ fetchUserData }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    refreshToken();
    fetchUserData();
    setReady(true);
  }, []);

  return (
    ready && (
      <LanguageProvider>
        <div className='fl'>
          <Switch>
            <AppRoute exact path='/' component={Home} layout={AppLayout} />

            <AppRoute
              exact
              path='/unit/:id'
              component={Unit}
              layout={UnitLayout}
            />

            <AppRoute
              exact
              path='/unit/:id/practice/film'
              component={FilmComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/speak'
              component={SpeakComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/write'
              component={WriteComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/interpret'
              component={InterpretComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/memorize'
              component={MemorizeComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/practice/video-class'
              component={VideoClassComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/vocabulary'
              component={VocabularyComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/interrogative-form'
              component={InterrogativeFormComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/:type/pronouns'
              component={PronounsComponent}
              layout={PracticeLayout}
            />
            <AppRoute
              exact
              path='/unit/:id/practice/assessment'
              component={AssessmentComponent}
              layout={PracticeLayout}
            />

            <AppRoute
              exact
              path='/profile/info'
              component={Profile}
              layout={AppLayout}
            />

            <AppRoute exact path='/logout' component={Logout} />

            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </LanguageProvider>
    )
  );
};

export default connect(null, { fetchUserData })(Academy);
