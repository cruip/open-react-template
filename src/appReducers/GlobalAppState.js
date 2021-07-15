// Locale

export const SET_LOCALE = "GLOBAL_STATE/SET_LOCALE";

export const setLocale = (locale) => ({
  type: SET_LOCALE,
  locale,
});

// Level

export const SET_USER_AUTH = "GLOBAL_STATE/SET_USER_AUTH";

export const setAuth = (auth) => ({
  type: SET_USER_AUTH,
  auth,
});

// Loading

export const SET_LOADING = "GLOBAL_STATE/SET_LOADING";

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export default function reducer(
  state = {
    // Locale
    locale: { languageId: "english", locale: "en", name: "English" },

    // Level
    auth: false,

    // Loading
    loading: true,
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
    case SET_USER_AUTH:
      return {
        ...state,
        auth: action.auth,
      };

    // Loading
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      break;
  }
  return state;
}
