import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Tabbar from '@/component/tabbar'

class Main extends Component {
    // navList = [ // 包含所有导航组件的相关信息数据
    //     {
    //       path: '/boss', // 路由路径
    //       component: Boss,
    //       title: '求职者列表',
    //       icon: 'jobseeker',
    //       text: '求职者',
    //     },
    //     {
    //       path: '/jobseeker', // 路由路径
    //       component: JobSeeker,
    //       title: 'Boss列表',
    //       icon: 'boss',
    //       text: 'boss',
    //     },
    //     {
    //       path: '/message', // 路由路径
    //       component: Message,
    //       title: '消息列表',
    //       icon: 'message',
    //       text: '消息',
    //     },
    //     {
    //       path: '/user', // 路由路径
    //       component: User,
    //       title: '用户中心',
    //       icon: 'user',
    //       text: '个人',
    //     }
    // ]
    render () {
        return (<div>
            {/* {currentNav ? <NavBar className='stick-top'>{currentNav.title}</NavBar> : null} */}
            {/* <Switch> */}
                {/* {
                    navList.map((nav) => <Route path={nav.path} key={nav.text} component={nav.component}/>)
                } */}
                {/* <Route path='/bossinfo' component={BossInfo}/>
                <Route path='/jobseekerinfo' component={JobSeekerInfo}/>
                <Route path='/chat/:userid' component={Chat}/> */}
                {/* <Route component={NotFound}/> */}
            {/* </Switch> */}
            {/* {currentNav ? <Tabbar navList={navList} unReadCount={unReadCount}/> : null} */}
            <Tabbar/>
        </div>)
    }
}

export default Main