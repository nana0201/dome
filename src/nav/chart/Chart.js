import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import './chart.css'
export default class Chart extends Component {

    render() {
        return (
            <div className='chartbox'>
                <div className='chart'>
                    <div> <img className='avatar' src={require('../../assets/imgs/avatar.jpg')}></img></div>
                    <p>置业顾问：<span style={{ color: 'blue', fontWeight: '700' }}>张小帅</span></p>
                    <p>专业服务诚信做人诚心做事！</p>
                    <div style={{ marginTop: '15px' }}> <Button size='small' type="primary" inline style={{ width: '50%' }}>我要聊天</Button></div>
                </div>
            </div>
        )
    }
}
