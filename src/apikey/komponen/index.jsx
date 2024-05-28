import React from 'react';
import Apikey from './apikey';
import Script from './script';



export default class Api extends React.Component {
    render() {
        return(
            <div>
                <Apikey/>
                <Script/>
            </div>
        )
    }
}