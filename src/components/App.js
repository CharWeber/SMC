import React from "react";
import Header from './Header';
import Body from './Body';

function App() {


return (
    <React.Fragment>
      <div class="container">
        <div class="card">
          <Header />
        </div>
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
