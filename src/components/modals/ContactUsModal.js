/**
 * Created by user on 2017-10-01.
 */

import React, {Component} from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function ContactUsModal(props){
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
