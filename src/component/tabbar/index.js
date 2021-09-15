
import { React } from 'react'
import TabItem from './TabItem';

class Tabbar extends React.Component {
 constructor(){
   super();
   this.state={
     tabs:[
       {tabName:'首页',id:'index'},
       {tabName:'排行榜',id:'ranking'},
       {tabName:'今日打卡',id:'task'},
       {tabName:'我的',id:'mine'},
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
     var tabUrl=index === this.state.current ?(require('../../../assets/images/'+item.id+'_active.png')):(require('../../../assets/images/'+item.id+'.png'));
     var  tabClass=index === this.state.current ?"tab-active":"";
     return (
         <TabItem key={index}  tabClass={tabClass} tabUrl={tabUrl} tabName={item.tabName} tabEvent={ () => { this.itemNav(index)} }></TabItem>
     );
   });
   return (
       <div className="tab">
         {tabsList}
       </div>
   );
 }
}

export default Tabbar