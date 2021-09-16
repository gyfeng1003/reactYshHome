
import React, { Component } from 'react'
import TabItem from './TabItem';
import style from  './index.module.less'

class Tabbar extends Component {
 constructor(){
   super();
   this.state={
     tabs:[
       {tabName:'首页',id:'icon-home'},
       {tabName:'地图',id:'icon-map'},
       {tabName:'预约',id:'icon-appoint'},
       {tabName:'我的',id:'icon-my'},
     ],
     current:0,
   };
 }

 itemNav = (index) => {
   //在这里就可以取到子组件传来的值
   this.setState({
     current: index,
   })
 }

 render() {
  var tabsList= this.state.tabs.map((item,index) =>{
     var tabUrl=index === this.state.current ?(require('./../../assets/tabbar/'+item.id+'-active.png')):(require('./../../assets/tabbar/'+item.id+'.png'));
     var  tabClass=index === this.state.current ?"tab-active":"";
     return (
         <TabItem key={index}  tabClass={tabClass} tabUrl={tabUrl} tabName={item.tabName} tabEvent={ () => { this.itemNav(index)} }></TabItem>
     );
   });
   return (
       <div className={style.tab}>
          <div className={style.wrap}>{tabsList}</div>
       </div>
   );
 }
}

export default Tabbar