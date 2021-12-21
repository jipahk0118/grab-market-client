import 'antd/dist/antd.css';
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer.js";
import MainPageComponent from "./main/index.js";
import { Switch, Route , Link } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
      <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
          <img src="/images/icons/logo.png" />
          </Link>
        </div>
      </div>
      <div id="body">
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
