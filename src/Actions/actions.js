// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const THEME_TOGGLE = "THEME_TOGGLE";

export const themeToggle = () => {
  return {
    type: THEME_TOGGLE,
  };
};
// Action Creator
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
