// Locale

export const SET_LOCALE = "GLOBAL_STATE/SET_LOCALE";

export const setLocale = (locale) => ({
  type: SET_LOCALE,
  locale,
});

// Level

export const SET_LEVEL = "GLOBAL_STATE/SET_LEVEL";

export const setLevel = (level) => ({
  type: SET_LEVEL,
  level,
});

export default function reducer(
  state = {
    // Locale
    locale: { languageId: "english", locale: "en", name: "English" },

    // Level
    level: 1,
  },
  action
) {
  switch (action.type) {
    // Language
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    // Level
    case SET_LEVEL:
      return {
        ...state,
        level: action.level,
      };

    default:
      break;
  }
  return state;
}
