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

// Level

// export const SET_DIRECTION = "GLOBAL_STATE/SET_DIRECTION";

// export const setDirection = (direction) => ({
//   type: SET_DIRECTION,
//   direction,
// });

export default function reducer(
  state = {
    // Locale
    locale: { value: "en", direction: "ltr" },

    // Level
    level: 1,

    //Direction
    // direction: "ltr",
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
    // Level
    // case SET_DIRECTION:
    //   return {
    //     ...state,
    //     direction: action.direction,
    //   };

    default:
      break;
  }
  return state;
}
