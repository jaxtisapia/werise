/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function ContactUsModal(props){
    return ( <Modal
            title="Contact Us"
            visible={props.visible}
            onCancel={() => props.disable()}
            footer={null}>

           <div>

               <ul className="margin-medium list-items">
              <li><span> Mr. Albert Osei-Tutu</span><br/>
               PRESIDENT, WERISE FOUNDATION<br/>
               werisefoundation@hotmail.com<br/>
                  0270551916</li>
<li><span> Mr. Hayford Oppong</span><br/>
               GENERAL SECRETARY, WERISE FOUNDATION<br/>
                  0543405394</li>

              <li><span> DR EMMANUEL MARFO</span><br/>
               SENIOR RESEARCH AND POLICY SCIENTIST/CSIR<br/>
               MP..OFORIKUROM<br/>
                  0244627274</li>


                   <li><span>HON PRINCE DEBRAH</span><br/>
               CHAIRMAN OF GHANA SOCIETY OF PHYSICALLY CHALLENGED<br/>
               ASHANTI REGION<br/>
               0264778061</li>

                   <li> <span>HON. IVOR KOBINA GREENSTREET</span><br/>
               CPP FLAG BEARER<br/>
               LAWYER at ENGLISH BAR<br/>
               0208080414</li>
               </ul>


           </div>
        </Modal>
    )
};