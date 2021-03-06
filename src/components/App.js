import React, { Component } from "react";
import Button from "./Button";
import Header from "./Header";
import {AppContainer} from "./styled";
import { connect } from 'react-redux';
import StyledInput from "./Input";
import MainPage from "./MainPage";

class App extends Component {
    render() {
        return (
            <AppContainer>
                <MainPage/>
            </AppContainer>
        );
    }
}



export default App;