import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "store/store";
import { Provider } from "react-redux";

import "./index.scss";
import "animate.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
