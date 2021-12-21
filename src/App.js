import 'antd/dist/antd.css';
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer.js";
import MainPageComponent from "./main/index.js";
import { Switch, Route , Link , useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import {Button} from "antd";
import {DiffOutlined} from '@ant-design/icons'

function App() {
  const history = useHistory();
  return (
      <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
          <img src="/images/icons/logo.png" />
          </Link>
          <Button id="buttonName" size="large"
            onClick={function(){
              history.push('/upload')
            }}
            icon={<DiffOutlined />}>
              상품 업로드
          </Button>
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
