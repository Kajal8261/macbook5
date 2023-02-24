import "./App.css";

import Header from "./pages/header";
import Sidebar from "./pages/sidebar";
import Content from "./pages/content";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-1">
          <Sidebar />
        </div>
        <div className="col-sm-11">
          <div className="row"><Header/></div>
          <div className="row"><Content/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
