/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'
import {HeaderBlock} from "./HeaderBlock";
import {AboutBlock} from "./AboutBlock";
import {FooterBlock} from "./FooterBlock";
import {CopyrightBlock} from "./CopyrightBlock";

export class RightView extends Component{

    render (){

        return (
            <div className="split-content" style={{background:'white'}}>

                <div className="split-content-vertically-center">

                    <HeaderBlock/>
                    <AboutBlock/>
                    <FooterBlock />
                    <CopyrightBlock/>

                </div>

            </div>

        );

    }

}