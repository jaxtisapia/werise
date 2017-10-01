/**
 * Created by user on 2017-10-01.
 */

import React, {Component} from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function DonationModal(props){
   return ( <Modal
        title="Basic Modal"
        visible={props.visible}
        onCancel={() => props.disable()}
        footer={null}
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
   )
};

// export class DonationModal extends Component{
//
//     constructor(props){
//         super(props);
//
//         this.state= {
//             visible : this.props.visible
//         }
//     }
//
//
//     render(){
//
//         return (
//             <Modal
//                 title="Basic Modal"
//                 visible={this.state.visible}
//                 footer={null}
//             >
//                 <p>Some contents...</p>
//                 <p>Some contents...</p>
//                 <p>Some contents...</p>
//             </Modal>        );
//
//     }
//
// }