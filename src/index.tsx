
//libs
import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";

//components
import Layout = require('./layout/layout');


//document ready trigger application
$(document).ready(()=>{

  console.log("<document ready>");

  ReactDOM.render(
    <Layout />, 
    document.getElementById("root")
  );

});
