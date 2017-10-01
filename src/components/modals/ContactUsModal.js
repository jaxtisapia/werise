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
            footer={null}
        >
           <div>

               <ul className="margin-medium list-items">
              <li><span> DR EMMANUEL MARFO</span><br/>
               SENIOR RESEARCH AND POLICY SCIENTIST/CSIR<br/>
               MP..OFORIKURO<br/>
                  0244627274</li>


                   <li> <span>MR KOFI WUSU</span><br/>
               REGISTRAR AND ADMINISTRATOR<br/>
               ASHANTI REGION HOUSE OF CHIEFS<br/>
               MANHYIA PALACE<br/>
               0209652118</li>

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
