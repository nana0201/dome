import React, { Component } from 'react'
// import { WingBlank, Button, WhiteSpace } from 'antd-mobile'
import { WhiteSpace, InputItem, WingBlank, Button, Radio } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './reg.css'
import { valitecode, register } from '../api/api'
export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            acc: '',
            pwd: '',

            yan: '',
            msg: ""
        }
    }
    render() {
        return (
            <div className='reg'>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WingBlank size="lg">
                    <InputItem
                        type='phone'
                        value={this.state.acc}
                        onChange={(val) => { this.setState({ acc: val }) }}
                        placeholder="请输入手机号"
                        clear
                    ></InputItem>
                    <InputItem
                        type='password'
                        value={this.state.pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                        placeholder="请输入密码"

                        // data-seed="logId"
                        clear
                    ></InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        extra='获取验证码'
                        value={this.state.yan}
                        onChange={(val) => { this.setState({ yan: val }) }}
                        onExtraClick={this.extranum.bind(this)}
                        // data-seed="logId"
                        clear
                    ></InputItem>
                    <WingBlank >{this.state.msg}</WingBlank>
                    <WhiteSpace size='lg' />

                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>  我已同意<span style={{ color: '#1296db' }}>《用户服务协议》及《隐私权政策》</span></Radio>


                    <WhiteSpace size='lg' />
                    <Button type='primary' onClick={this.regbtn.bind(this)}>注册</Button>
                    <WhiteSpace size='lg' />
                    <Link to='./login' style={{ color: '#1296db' }}>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    extranum() {

        if (this.state.yan !== '') {
            return
        } else {
            valitecode().then((res) => {
                console.log(res);
                this.setState({
                    yan: res.data
                })
            })
        }





    }
    regbtn() {
        let { yan, acc, pwd } = this.state
        if (acc !== '' || pwd !== '' || yan !== '') {

            register(acc, pwd).then((res) => {
                console.log(this.props);
                console.log(res.data);

                if (res.data === 'ok') {
                    alert('注册成功')
                    this.props.history.push('/login')
                } else {
                    alert('注册失败')
                }
            })

        } else {
            this.setState({
                msg: '请填写手机号密码验证码'
            })

        }
    }
}
