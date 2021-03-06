/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'
import {OurMissionModal} from "./modals/OurMissionModal";
import {OurVisionModal} from "./modals/OurVisionModal";
import {ContactUsModal} from "./modals/ContactUsModal";
import {OurAchievementsModal} from "./modals/OurAchievementsModal";
import {GalleryModal} from "./modals/GalleryModal";

export class FooterBlock extends Component {

    constructor(props){
        super(props);

        this.state = {
            missionModalVisible: false,
            visionModalVisible: false,
            contactUsModalVisible: false,
            achievementsModalVisible: false,
            galleryModalVisible: false
        };

        this.showOurMission = this.showOurMission.bind(this);
        this.hideOurMission = this.hideOurMission.bind(this);
        this.showOurVision = this.showOurVision.bind(this);
        this.hideOurVision = this.hideOurVision.bind(this);
        this.showOurAchievement= this.showOurAchievement.bind(this);
        this.hideOurAchievement = this.hideOurAchievement.bind(this);
        this.showContactUs = this.showContactUs.bind(this);
        this.hideContactUs = this.hideContactUs.bind(this);
        this.showGallery = this.showGallery.bind(this);
        this.hideGallery = this.hideGallery.bind(this);

    }

    showOurMission() {
        console.log("done");
        this.setState({missionModalVisible: true})
    }

    hideOurMission() {
        this.setState({missionModalVisible: false})
    }
    showOurAchievement() {
        console.log("done");
        this.setState({achievementsModalVisible: true})
    }

    hideOurAchievement() {
        this.setState({achievementsModalVisible: false})
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

    showGallery(){
        this.setState({galleryModalVisible: true})
    }

    hideGallery(){
        this.setState({galleryModalVisible: false})
    }

    render() {

        return (

            <div className="split-lists">

                {/*<OurMissionModal visible={this.state.missionModalVisible}/>*/}
                <OurMissionModal visible={this.state.missionModalVisible} disable={this.hideOurMission}/>
                <OurVisionModal visible={this.state.visionModalVisible} disable={this.hideOurVision}/>
                <ContactUsModal visible={this.state.contactUsModalVisible} disable={this.hideContactUs}/>
                <OurAchievementsModal visible={this.state.achievementsModalVisible} disable={this.hideOurAchievement}/>

                <GalleryModal visible={this.state.galleryModalVisible} disable={this.hideGallery}/>

                <div className="split-list">

                    <h3>GET TO KNOW US</h3>

                    <ul>
                        <li><a onClick={this.showOurMission}>Our Mission</a></li>
                        <li><a onClick={this.showOurVision}>Our Vision</a></li>
                        <li><a onClick={this.showOurAchievement}>Our Achievements</a></li>
                        <li><a onClick={this.showContactUs}>Contact Us</a></li>
                    </ul>

                </div>

                <div className="split-list">
                </div>

                <div className="split-list">

                    <h3>Social</h3>

                    <ul>
                        {/*<li><a target="_blank" href="#">Twitter</a></li>*/}
                        <li><a target="_blank"  href="https://www.facebook.com/werisefoundationtech/">Facebook</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/werisefoundation_gh/">Instagram</a></li>
                        <li><a onClick={this.showGallery}>Events and Programmes</a></li>
                    </ul>

                </div>

                <div className="split-list">

                </div>

            </div>

        );

    }}
