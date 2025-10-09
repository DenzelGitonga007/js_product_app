// inside App.js, you can just pick what to render while learning:

// App.js
import React from "react";
// import ProductApp from "./ProductApp"; 
// Uncomment this if you want to show products

import AuthApp from "./AuthApp"; // For now, show signup/login

function App() {
  return (
    <div>
      <AuthApp />
      {/* <ProductApp /> */}
    </div>
  );
}

export default App;
