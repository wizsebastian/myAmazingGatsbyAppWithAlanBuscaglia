import React, {Component} from 'react';
import Header from "../components/Header";
import AboutUsImage from '../components/AboutUsImages';

class AboutUs extends Component{

    render(){
        return(
            <div>
                <Header/>
                <AboutUsImage img="background"/>
            </div>
        )
    }
}

export default AboutUs;