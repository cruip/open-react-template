import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import AppLocale from "../assets/i18n";

const LanguageProvider = ({ children, locale }) => {
  const currentAppLocale = AppLocale[locale.value];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      {children}
    </IntlProvider>
  );
};

const mapState = (state) => ({
  locale: state.GlobalState.locale,
});

export default connect(mapState)(LanguageProvider);
