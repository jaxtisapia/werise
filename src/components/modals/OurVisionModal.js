/**
 * Created by user on 2017-10-01.
 */

import React, {Component} from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function OurVisionModal(props) {

        return (
            <Modal
                title="Basic Modal"
                onCancel={() => props.disable()}
                visible={props.visible}
                footer={null}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>        );

}
