/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'
import logo from '../img/logo.jpg'


export class HeaderBlock extends Component{

    render (){

        return (
            <div className="split-intro" >

                <img style={{maxWidth: '200px', maxHeight: '200px'}} src={logo} />

                <h1>We Rise by Lifting Others</h1>

                <span className="tagline">RISE. HELP THEM RISE. WE RISE.</span>

            </div>
        );

    }

}