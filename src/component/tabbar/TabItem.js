import React, {Component} from 'react'
import style from './TabItem.module.less'

class TabItem extends Component{
 render(){
    console.log(this.props)
    return (
        <div className={`${style['tab-item']} ${this.props.tabClass}`}  onClick={this.props.tabEvent}>
           <div className={`${style['tab-item-icon']}`}><img src={this.props.tabUrl} /></div>
           <div className="tab-item-name">{this.props.tabName}</div>
        </div>
    );
 }
}

export default TabItem
