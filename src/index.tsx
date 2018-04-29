
//libs
import * as React from "react";
import * as ReactDOM from "react-dom";

//components
import Layout = require('./layout/layout');

//document ready trigger application
document.addEventListener("DOMContentLoaded", () => { 

  ReactDOM.render(
    <Layout />, 
    document.getElementById("root")
  );

});

