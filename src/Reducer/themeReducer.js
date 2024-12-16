import { THEME_TOGGLE } from "../Actions/actions";

const initialStateTheme = { theme: "light" };
const themeReducer = (state = initialStateTheme, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return {
        theme: state.theme == "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
