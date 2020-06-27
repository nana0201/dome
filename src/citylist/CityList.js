import React, { Component } from 'react'
import './citylist.css'
import { city } from '../assets/json/citylist.json'
import BScroll from 'better-scroll'
import { log } from '../api/api'
export default class CityList extends Component {
    componentDidMount() {
        const wrapper = document.querySelector('.wrapper')
        //选中DOM中定义的 .wrapper 进行初始化
        this.scroll = new BScroll(wrapper, {
            // scrollX: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: true, //关闭竖向滚动
        })
    }

    render() {
        return (
            <div className='citylist wrapper' style={{ height: '100%' }}>
                <ul className='content' style={{ listStyle: 'none' }}>
                    <h2 style={{ textAlign: 'center' }}>城市列表</h2>
                    {
                        city.map(obj =>
                            <div className='city' id={obj.title}>
                                <h4 className='city-title'>{obj.title}</h4>
                                {
                                    obj.lists.map(list =>
                                        <p className='city-list'>{list}</p>
                                    )
                                }
                            </div>
                        )
                    }
                </ul>
                <div className='rightbox'>
                    {
                        city.map(obj =>
                            <div onClick={this.go.bind(this, obj.title)} className='navitem'>{obj.title}</div>)
                    }
                </div>
            </div>
        )
    }
    go(id) {
        this.scroll.scrollToElement('#' + id, 500)
    }
}
