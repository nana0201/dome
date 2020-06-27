import React, { Component } from 'react'
import { List, } from 'antd-mobile';
import { connect } from 'react-redux'
import './history.css'
const Item = List.Item;
const Brief = Item.Brief;
class History extends Component {
    render() {
        return (
            <div className='history'>
                <p style={{ fontSize: '16px', textIndent: '1em', fontWeight: '700', color: '#33A3F4' }}>足迹</p>
                <List className="my-list">
                    {/* <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                                Title <Brief>subtitle</Brief> <Brief>subtitle</Brief>
                            </Item> */}
                    {
                        this.props.list.map((obj, index) => {
                            return <Item key={index} extra={`${obj.price}/平`} align="top" thumb={'http://127.0.0.1:88' + obj.imgs} multipleLine>
                                {obj.name} <Brief>{obj.area} {obj.range}</Brief> <Brief>{obj.type} {obj.point}</Brief>
                            </Item>
                        })

                    }
                </List>

            </div>
        )
    }
}

export default connect((state) => {
    return {
        list: state.list
    }
})(History)