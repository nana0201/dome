import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { log } from '../api/api'
import './login.css'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            acc: '',
            pwd: '',
            oldacc: '',
            oldpwd: '',
            show: 'none'

        }
    }
    render() {
        return (
            <div className='login'>

                <Flex justify='center'>
                    <img className='logo' src={require('../assets/imgs/logo2.png')}></img>
                </Flex>


                <WingBlank size="lg">
                    <InputItem
                        value={this.state.acc}
                        placeholder="请输入用户名"
                        onChange={(val) => { this.setState({ acc: val }) }}
                        clear
                    >
                        <div style={{ backgroundImage: `url(${require("../assets/imgs/icon-user.png")})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        value={this.state.pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                        type='password'
                        placeholder="请输入密码"
                        clear
                    >
                        <div style={{ backgroundImage: `url(${require("../assets/imgs/icon-pwd.png")})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />

                    </InputItem>
                    <WingBlank style={{ display: this.state.show }}>账号或密码错误</WingBlank>
                    <WhiteSpace size="md" />
                    <WhiteSpace size="lg" />

                    <Button type='primary' onClick={this.loginbtn.bind(this)}>登录</Button>
                    <WhiteSpace size="md" />

                    <Flex justify='between'>
                        <Link style={{ color: '#1296db' }} to='./reg'>手机快速注册</Link>
                        <Link style={{ color: '#1296db' }} to='./reg'>忘记密码</Link>
                    </Flex>
                </WingBlank>

                <div className='btmtext'>登录/注册即代表同意《xxx房产用户协议》</div>
            </div>
        )
    }
    loginbtn() {
        let { acc, pwd, oldacc, oldpwd } = this.state
        if (acc === oldacc && pwd === oldpwd) return;
        this.setState({
            oldacc: acc,
            oldpwd: pwd,
        })

        log(acc, pwd).then((res) => {
            if (res.data === 'ok') {

                this.props.history.push('/')
                localStorage.setItem('user', acc)
            } else {
                this.setState({
                    show: "block"
                })
            }
        })

    }
}
