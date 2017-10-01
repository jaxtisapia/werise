/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function OurVisionModal(props) {

        return (
            <Modal
                title="Our Vision"
                onCancel={() => props.disable()}
                visible={props.visible}
                footer={null}>
                <div>

                    <ul className="margin-medium list-items">
                        <li>To organize Disability programs in every institution in the country.</li>
                        <li>To make the advocacy viral to the youth , because we believe they are our future leaders; and by seeing the relevance of it they will also all join in the advocacy which can yield in good policies making when they grow to occupy high offices which can be in favor of people with Disability.</li>
                        <li>To serve as a medium to motivate them to standout in whatever they do.</li>
                        <li>By educating the masses including the able about DISABILITY ACT and outlining people with disability the benefits they enjoy in society.</li>
                        <li>Securing scholarships for people with Disability.</li>
                        <li>Securing job internships as well as opportunities for people with Disability</li>
                        <li>Serving as bridge between people with Disability in schools and GSPD,</li>
                        <li>Penetrating the market which profits will help push the advocacy</li>
                    </ul>

                    <p className="paragraph-simple"> We Rise foundation started in September 2014, our President and founder MR. Albert Osei- tutu had the support of our honorable vice president and General Secretary MR. Addai Kwarteng Renalto  and MR. Feddrick Oppong Hayford…..on knust Campus..
                        The foundation have spread her wings to seven tertiary schools in GHANA…which include KNUST.. UNIVERSITY OF GH..legon, UCOMS, SPIRITAN UNIVERSITY, KESSBEN UNV..KORLEBU medical school..UG..
                        Of a population of 720 members…which 250 being physically challenged.</p>


                </div>
            </Modal>
        );

}
