import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "App";
import reportWebVitals from "./reportWebVitals";
import {store} from "modulredux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
