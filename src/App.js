import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {connect} from "react-redux";

class App extends Component {
    render() {
        const {fetching, image, onRequestImage, error} = this.props;

        return (
            <div className="App">
                <header className="header">
                    <img src={image || logo} className="image-size" alt="logo"/>
                </header>

                {image ? (
                    <p className="intro">Нажмите чтобы получить изображение!</p>
                ) : (
                    <p className="intro">Нажмите чтобы заменить иконку Реакта на изображение GIF!</p>
                )}

                {fetching ? (
                    <button className="button" disabled>Получение данных...</button>
                ) : (
                    <button className="button" onClick={onRequestImage}>Запрос изображения</button>
                )}

                {error && <p style={{color: "red"}}>Эх что то пошло не так!</p>}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        image: state.image,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestImage: () => dispatch({type: "REQUEST_IMAGE"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);