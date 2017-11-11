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

                <p>WERISE Foundation is a Non-Governmental Organisation that advocates for persons with disabilities, kids with special needs and orphans, by assisting them with the necessary resources, to create an all inclusive environment.</p><br/>
                <p>No matter the circumstances or situation you find yourself, with the right push, you can do whatever you want to be in life!</p>

            </div>

        );

    }

}