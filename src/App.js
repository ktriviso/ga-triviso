import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import {Header} from './Components/Partials/Header.js';
import {Footer} from './Components/Partials/Footer.js';
import {Home} from './Components/Home.js';
import {About} from './Components/About.js';
import {Contact} from './Components/Contact.js';
import {Splash} from './Components/Splash.js'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            active_component: 'home'
        }
    }

    setActiveComponent(component){
        this.setState({
            active_component: component
        })
    }

    removeSplash(){
        const Splash = document.getElementById('splash')
        Splash.style.display = 'none'
    }

    componentDidMount(){
        function changeBackgroundColor(){
            const invertButton = document.getElementById("invert")
            invertButton.addEventListener('click', function(e){
                document.body.classList.toggle('invert-active')
            })
        }

        window.addEventListener('load', function(){
            changeBackgroundColor()
        })
    }

    render() {
        let activeComponent
        if(this.state.active_component === 'About'){
            activeComponent = <About/>
        } else if(this.state.active_component === 'Contact'){
            activeComponent = <Contact/>
        } else {
            activeComponent = <Home/>
        }

        return (
            <div>
                
                <Header setActiveComponent={this.setActiveComponent.bind(this)}/>
                {activeComponent}
                <Footer/>
            </div>
        );
    }
}

export default App;
