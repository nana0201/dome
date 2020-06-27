import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './nav.css'
// import { route } from 'react-router-dom'
import Main from './main/Main'
import My from './my/My'
import Chart from './chart/Chart'
import History from './history/History'
export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "main",
            tablist: [
                {
                    key: "main",
                    title: "首页",
                    icon: "icon-main.png",
                    selectIocn: "icon-main2.png",
                },
                {
                    key: "chart",
                    title: "微聊",
                    icon: "icon-chart.png",
                    selectIocn: "icon-chart2.png",
                },
                {
                    key: "history",
                    title: "足迹",
                    icon: "icon-history.png",
                    selectIocn: "icon-history2.png",
                },
                {
                    key: "my",
                    title: "我的",
                    icon: "icon-my.png",
                    selectIocn: "icon-my2.png",
                },
            ],
        };
    }
    renderContent() {

        console.log(this.state.selectedTab);
        switch (this.state.selectedTab) {
            // case "main": return <Main />
            case "main": return <Main h={this.props.history} />
            case "chart": return <Chart />
            case "history": return <History />
            case "my": return <My h={this.props.history} />
        }


    }
    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    render() {
        return (
            <TabBar

                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#fff"
            >
                {this.state.tablist.map((obj) => (
                    <TabBar.Item
                        title={obj.title}
                        key={obj.key}
                        icon={<img className='icon' src={require('../assets/imgs/' + obj.icon)} />}
                        selectedIcon={<img className='icon' src={require('../assets/imgs/' + obj.selectIocn)} />}
                        selected={this.state.selectedTab === obj.key}
                        onPress={() => this.onChangeTab(obj.key)}
                    >
                        {this.renderContent(obj.key)}
                    </TabBar.Item>
                ))}

            </TabBar>

            /*   <TabBar
  
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="#fff"
              >
                  <TabBar.Item
                      title="首页"
                      icon={<img className='icon' src={require('../assets/imgs/icon-main.png')} />}
                      selectedIcon={<img className='icon' src={require('../assets/imgs/icon-main2.png')} />}
                      selected={this.state.selectedTab === 'blueTab'}
                      onPress={() => this.onChangeTab('blueTab')}
                  >
                      {this.renderContent(<Main></Main>)}
                  </TabBar.Item>
                  <TabBar.Item
                      icon={<img className='icon' src={require('../assets/imgs/icon-chart.png')} />}
                      selectedIcon={<img className='icon' src={require('../assets/imgs/icon-chart2.png')} />}
                      title="群聊"
                      // badge={2}
                      selected={this.state.selectedTab === 'redTab'}
                      onPress={() => this.onChangeTab('redTab')}
                  >
                      {this.renderContent(<Chart></Chart>)}
                  </TabBar.Item>
                  <TabBar.Item
                      icon={<img className='icon' src={require('../assets/imgs/icon-history.png')} />}
                      selectedIcon={<img className='icon' src={require('../assets/imgs/icon-history2.png')} />}
                      title="足迹"
                      selected={this.state.selectedTab === 'greenTab'}
                      onPress={() => this.onChangeTab('greenTab')}
                  >
                      {this.renderContent(<History></History>)}
                  </TabBar.Item>
                  <TabBar.Item
                      icon={<img className='icon' src={require('../assets/imgs/icon-my.png')} />}
                      selectedIcon={<img className='icon' src={require('../assets/imgs/icon-my2.png')} />}
                      title="我的"
                      selected={this.state.selectedTab === 'yellowTab'}
                      onPress={() => this.onChangeTab('yellowTab')}
                  >
                      {this.renderContent(<My></My>)}
                  </TabBar.Item>
              </TabBar> */
        );
    }
}
