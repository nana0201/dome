import React, { Component } from 'react'
import { Carousel, WingBlank, Grid, List, } from 'antd-mobile';
import './mian.css'
import { gethouselist, log } from '../../api/api'
import { connect } from 'react-redux'
const Item = List.Item;
const Brief = Item.Brief;
class Main extends Component {

    constructor() {
        super()
        this.state = {
            value: ' ',
            data: ['c01', 'c02', 'c03'],
            imgHeight: 176,
            getlist: [],
            navlist: [
                { icon: require("../../assets/imgs/newhouse.png"), text: "新房" },
                { icon: require("../../assets/imgs/twohands.png"), text: "二手房" },
                { icon: require("../../assets/imgs/renthouse.png"), text: "租房" },
                { icon: require("../../assets/imgs/xiezilou.png"), text: "商铺写字楼" },
                { icon: require("../../assets/imgs/sellhouse.png"), text: "卖房" },
                { icon: require("../../assets/imgs/haiwai.png"), text: "海外" },
                { icon: require("../../assets/imgs/xiaoqu.png"), text: "小区" },
                { icon: require("../../assets/imgs/questions.png"), text: "问答" }
            ],
            navlist2: [
                { icon: require("../../assets/imgs/nav-daikuan.png"), text: "贷款" },
                { icon: require("../../assets/imgs/nav-jishaun.png"), text: "房贷计算" },
                { icon: require("../../assets/imgs/nav-zhishi.png"), text: "知识" },
                { icon: require("../../assets/imgs/nav-sao.png"), text: "扫一扫" },
            ],
            disabled: false,
            IP: "http://127.0.0.1:88",
            cityname: "定位中",

        };
    }

    async componentDidMount() {
        var _this = this
        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        _this.setState({
                            cityname: cityinfo
                        })
                        //地图显示当前城市
                        // map.setBounds(citybounds);
                    }
                } else {
                    console.log(result.info);
                }
            });
        }
        showCityInfo();

        // //获取房产列表信息
        let { data } = await gethouselist();
        // console.log(data);
        this.setState({
            getlist: [...data]
        })
        // console.log(...this.state.getlist);



    }

    changePage(hash) {
        this.props.h.push(hash);
    }
    render() {

        return (


            <div className='main'>
                {/* 顶部导航 */}
                <div className='topbox'>
                    <div onClick={this.changePage.bind(this, "/citylist")} className="left">{this.state.cityname} ▼</div>
                    <div onClick={this.changePage.bind(this, "/search")} className="center">
                        <img className="icon" src={require("../../assets/imgs/search.png")} />
                        挑好房,上源码APP
                    </div>
                    <div onClick={this.changePage.bind(this, "/mymap")} className="right">
                        <img className="icon" src={require("../../assets/imgs/map.png")} />
                    </div>
                </div>
                <div className='content'>
                    {/* 顶部轮播 */}
                    <Carousel
                        autoplay={true}
                        infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: '200px' }}
                            >
                                <img
                                    src={require(`../../assets/imgs/${val}.jpg`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                    {/* 宫格导航 */}
                    <div>
                        <Grid data={this.state.navlist} hasLine={false} square={false} className="not-square-grid" />
                    </div>
                    {/* <WhiteSpace size="sm" /> */}
                    <div className='main-nav2'>
                        <WingBlank className='nav2'>
                            <p><span style={{ color: '#33A3F4', fontWeight: '700', lineHeight: '1em', fontSize: '16px' }}>房产全百科</span>  专业的买房攻略</p>

                        </WingBlank>
                        <Grid data={this.state.navlist2} hasLine={false} square={false} className="not-square-grid" />
                    </div>
                    {/* 猜你喜欢 */}
                    <div className='main-like'>
                        <p style={{ fontSize: '16px', textIndent: '1em' }}>猜你喜欢</p>
                        <List className="my-list">
                            {/* <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                                Title <Brief>subtitle</Brief> <Brief>subtitle</Brief>
                            </Item> */}
                            {
                                this.state.getlist.map((obj, index) => {
                                    return <Item onClick={this.addcity.bind(this, obj)} key={index} extra={`${obj.price}/平`} align="top" thumb={this.state.IP + obj.imgs} multipleLine>
                                        {obj.name} <Brief>{obj.area} {obj.range}</Brief> <Brief>{obj.type} {obj.point}</Brief>
                                    </Item>
                                })

                            }
                        </List>

                    </div>
                </div>

            </div>

        )

    }
    addcity(obj) {

        this.props.dispatch({
            type: 'add',
            city: obj
        })
        console.log(this.props);
    }

}
export default connect((state) => {
    return {
        list: state.list
    }
})(Main);
