/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './my.css'
import '../../assets/font/iconfont.css'
import { WingBlank, Flex, WhiteSpace } from 'antd-mobile'
export default class My extends Component {
    constructor() {
        super();
        this.state = {
            showname: "登录/注册",
            mylist: [
                { icon: "iconfont icon-jifen", text: "我的积分", jian: ">" },
                { icon: "iconfont icon-dingyue", text: "我的订阅", jian: ">" },
                { icon: "iconfont icon-lianxiren", text: "微聊联系人", jian: ">" },

                { icon: "iconfont icon-jisuanjisuanshu", text: "房贷计算器", jian: ">" },
                { icon: "iconfont icon-xingxing", text: "我的房子", jian: ">" },

                { icon: "iconfont icon-jilu", text: "我的看房记录", jian: ">" },
                { icon: "iconfont icon-wode", text: "我的问答", jian: ">" },

                { icon: "iconfont icon-shezhi", text: "设置", jian: ">" },
                { text: "意见反馈", jian: ">" }
            ],
            threeList: [
                { num: 0, icon: "iconfont icon-qianbao", text: "钱包" },
                { num: 0, icon: "iconfont icon-coupon", text: "优惠" },
                { num: 0, icon: "iconfont icon-jifen", text: "积分" }
            ]
        }
    }
    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({
                showname: localStorage.getItem('user')
            })
        }
    }
    render() {
        return (
            <div className='my'>
                {/* top */}
                <div className="person-top">
                    <WingBlank>
                        {/* top-top */}
                        <div className="top-top">
                            <Flex justify="between">
                                <img src={require("../../assets/imgs/avatar.jpg")} className="avatar" />
                                <div className="top-login">
                                    <p onClick={this.gologin.bind(this)} style={{ fontSize: "18px", fontWeight: "bold" }}>{this.state.showname}</p>
                                    <p style={{ marginTop: "-10px" }}>可以与经纪人发起聊天</p>
                                </div>
                                <img src={require("../../assets/imgs/icon-shezhi.png")} className="shezhi-img" />
                            </Flex>
                        </div>
                    </WingBlank>
                    <ul className="person-bottom">
                        {this.state.threeList.map((v, i) => {
                            return <li key={i} className="person-item ">
                                <div style={{ marginBottom: "10px" }}>{v.num}</div>
                                <div ><span style={{ marginRight: "8px" }} className={v.icon}></span>{v.text}</div>
                            </li>
                        })}
                    </ul>

                </div>
                {/* list */}
                <ul className="person-list">
                    {this.state.mylist.map((v, i) => {
                        return <li key={i} className="person-list-item">
                            <div className="person-list-item-left"><span style={{ marginRight: '10px' }} className={v.icon}></span>{v.text}</div>
                            <div className="person-list-item-right"><span>{v.jian}</span></div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
    gologin() {
        if (!localStorage.getItem('user')) {
            this.props.h.push('/login')
        }
    }
}
