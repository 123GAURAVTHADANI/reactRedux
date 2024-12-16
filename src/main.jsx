import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";

// state change store will also trigger a function (subscribe)
store.subscribe(() => {
  console.log("state changed:", store.getState());
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
