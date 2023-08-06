import * as ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.ts";
import { loadInitialUser } from "./reducers/ipActions.ts";
store.dispatch(loadInitialUser());
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
