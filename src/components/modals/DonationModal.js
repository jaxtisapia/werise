/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function DonationModal(props){
   return ( <Modal
        title="Donate to us"
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
