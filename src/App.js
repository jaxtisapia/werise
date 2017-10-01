import React, {Component} from 'react';
import 'antd/dist/antd.css'
import './App.css';
import {LeftView} from "./components/LeftView";
import {RightView} from "./components/RightView";

class App extends Component {
    render() {
        return (

            <body id="fullsingle" className="page-template-page-fullsingle-split">

            <div className="fs-split">

                <LeftView/>

                <RightView/>

            </div>

            </body>

        );
    }
}

export default App;
