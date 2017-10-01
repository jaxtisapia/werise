/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'
import {DonationModal} from "./modals/DonationModal";

export class AboutBlock extends Component{

    constructor(props){
        super(props);

        this.state = {
            donationModalVisible: false,
        };

        this.showDonation = this.showDonation.bind(this);
        this.hideDonation = this.hideDonation.bind(this);
    }

    showDonation() {
        this.setState({donationModalVisible: true})
    }

    hideDonation() {
        this.setState({donationModalVisible: false})
    }


    render(){

        return (
            <div className="split-bio">

                <DonationModal visible={this.state.donationModalVisible} disable={this.hideDonation}/>

                <p>WERISE is an NGO that blah blah blah. WE design the best of principles to the ratio of the soldiers at the cinema. The best prices you can't contest

                    Started from the bottom, now we have branches in United States of America, Japan, Korea and many other countries as well. The text is a test to prove eligibilty of the context of words you might later use</p>

                <p> ac rutrum. Duis semper elit eu mi facilisis eleifend. Donec semper, malesuada congue, ullamcorper massa, sit amet lacinia nibh enim sed massa. </p>

            </div>

        );

    }

}