import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Bin2Dec from "./routes/bin2Dec";
import BorderRadiousPreviewer from "./routes/borderRadiousPreviewer";

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="bin2dec" element={<Bin2Dec />} />
        <Route path="borderRadiousPreviewer" element={<BorderRadiousPreviewer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);