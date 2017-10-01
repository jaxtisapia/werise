/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function OurMissionModal(props){
    return ( <Modal
            title="Our Mission"
            visible={props.visible}
            footer={null}
            onCancel={() => props.disable()}>

            <div>
            <p className="paragraph-simple">It is a Non- governmental organization whose core values is to use the power of philanthropy to change the lives of people. To improve every society we can on our map summarizes our utmost desire, and this we do through charity today and tomorrow. We advocates for the physically Challenged in society.
                The Foundation has three main Branches,</p>
                <ul className="margin-medium list-items">
              <li>  1. Charity Foundation</li>
                    <li>2. Mentoring</li>
                    <li> 3. WeRise Group</li>
                </ul>
                <div >
                    <ul className="margin-medium list-items">
           <li>
            At the Charity foundation we take on a greater responsibility in supporting the physically Challenged persons. We recognized the problem of the challenged who are wrongfully pitied, ignored, and discriminated as useless. Another problem is the sluggish pace at which physically challenged receives formal education. Other bottle necks include some businesses being reluctant to employ them. At the charity foundation we therefore seek to create awareness that DISABILITY IS NOT AN INABILITY and that the physically challenged in their own have possess ample abilities, needs and interest as the rest of the population. We emphasize on the need for our bigger society to make facilities friendly towards them, since until maximum endeavors are registered, their true potential can never be harnessed to the benefit of the benefit of the greater population. Thereby building a positive image for the physically challenged.


            We Rise Foundation is in good relationship with the Ghana Society of Physically Challenged. (GSPD) with their president being MR.  Prince Debrah, Ghana Association of Disability and Rehabilitation Studies Students (GADRESS) and Center of Disability and Rehabilitation Studies (CEDRES) to help mobilize members and offer a number of capacity building programs for them . We focus in educating members on Disabilty ACT, as well as empowering them to standout in everywhere they find themselves.   </li>
                        <li>
            With the Mentoring, our society seek to provide an enabling environment where young people especially physically challenged students learn and practice leadership skills , have the chance to focus on and make ethical decisions, and come up with future developments which will unlock their true potentials. We help to secure internship for tertiary students nationwide to prepare them for the job market.
                        </li>
           <li>
            We Rise Group is a business venture that empowers enterpreneurship among members. The society has been able to invent its first food product, which we believe can be a source of funds to support our charity work when sold market in the near future. We believe it can also be a source of employment for the youth’
           </li>
                    </ul>
                </div>
            </div>

        </Modal>
    )
}