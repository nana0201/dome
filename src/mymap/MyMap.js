import React, { Component } from 'react'
import './mymap.css'
export default class MyMap extends Component {
    constructor() {
        super()
        this.state = {
            cityname: "定位中",

        }
    }
    // componentDidUpdate() {
    //     var mymap = new window.AMap.Map('container', {
    //         zoom: 13,//级别
    //         center: [116.397428, 39.90923],//中心点坐标
    //         resizeEnable: true,  // 放大或者缩小地图 默认值false
    //     });
    //     var _this = this
    //     var citysearch = new window.AMap.CitySearch();
    //     citysearch.getLocalCity(function (status, result) {
    //         if (status === "complete" && result.info === "OK") {
    //             if (result && result.city && result.bounds) {
    //                 var cityinfo = result.city;
    //                 var citybounds = result.bounds;
    //                 // console.log(cityinfo);

    //                 _this.setState({
    //                     cityname: cityinfo
    //                 })
    //                 // console.log(citybounds)
    //                 //地图显示当前城市
    //                 mymap.setBounds(citybounds);
    //                 mymap.setZoom(13)
    //             }
    //         } else {
    //             console.log(result.info);
    //         }
    //     });
    // }

    componentDidMount() {
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
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
                        map.setBounds(citybounds);
                    }
                } else {
                    console.log(result.info);
                }
            });
        }
        showCityInfo();

    }

    render() {
        return (
            <div className='mymap'>

                {/* <div >{this.state.cityname} ▼</div> */}
                <div id="container" style={{ width: '100%', height: '400px' }}></div>
            </div>
        )
    }
}
