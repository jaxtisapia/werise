/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'
import {OurMissionModal} from "./modals/OurMissionModal";
import {OurVisionModal} from "./modals/OurVisionModal";
import {ContactUsModal} from "./modals/ContactUsModal";
import {DonationModal} from "./modals/DonationModal";

export class FooterBlock extends Component {

    constructor(props){
        super(props);

        this.state = {
            missionModalVisible: false,
            visionModalVisible: false,
            contactUsModalVisible: false,
            donationModalVisible: false,
        };

        this.showOurMission = this.showOurMission.bind(this);
        this.hideOurMission = this.hideOurMission.bind(this);
        this.showOurVision = this.showOurVision.bind(this);
        this.hideOurVision = this.hideOurVision.bind(this);
        this.showDonation = this.showDonation.bind(this);
        this.hideDonation = this.hideDonation.bind(this);
        this.showContactUs = this.showContactUs.bind(this);
        this.hideContactUs = this.hideContactUs.bind(this);

    }

    showOurMission() {
        console.log("done");
        this.setState({missionModalVisible: true})
    }

    hideOurMission() {
        this.setState({missionModalVisible: false})
    }

    showOurVision() {
        this.setState({visionModalVisible: true})
    }

    hideOurVision() {
        this.setState({visionModalVisible: false})
    }

   showContactUs() {
        this.setState({contactUsModalVisible: true})
    }

    hideContactUs() {
        this.setState({contactUsModalVisible: false})
    }

    showDonation() {
        this.setState({donationModalVisible: true})
    }

    hideDonation() {
        this.setState({donationModalVisible: false})
    }

    consoleTest(){
        console.log(this.state.missionModalVisible);
    };

    render() {

        return (

            <div className="split-lists">

                {this.consoleTest}


                {/*<OurMissionModal visible={this.state.missionModalVisible}/>*/}
                <OurMissionModal visible={this.state.missionModalVisible} disable={this.hideOurMission}/>
                <OurVisionModal visible={this.state.visionModalVisible} disable={this.hideOurVision}/>
                <ContactUsModal visible={this.state.contactUsModalVisible} disable={this.hideContactUs}/>
               <DonationModal visible={this.state.donationModalVisible} disable={this.hideDonation}/>

                <div className="split-list">

                    <h3>GET TO KNOW US</h3>

                    <ul>
                        <li><a onClick={this.showOurMission}>Our Mission</a></li>
                        <li><a onClick={this.showOurVision}>Our Vision</a></li>
                        <li><a onClick={this.showContactUs}>Contact Us</a></li>
                    </ul>

                </div>

                <div className="split-list">

                    <h3>Social</h3>

                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>

                </div>

                <div className="split-list">

                    {/*<h3>AFFILIATIONS</h3>*/}

                    {/*<ul>*/}
                        {/*<li><a href="#">Link One</a></li>*/}
                        {/*<li><a href="#">Link Two</a></li>*/}
                        {/*<li><a href="#">Link Three</a></li>*/}
                    {/*</ul>*/}

                </div>

            </div>

        );

    }

}