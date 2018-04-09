import React,{Component} from 'react';
import logo from '../../common/images/logo.jpg';
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state={isShow:false}
    }
    changeShow=()=>{
        this.setState({isShow:!this.state.isShow})
    }
    render(){
        return (
            <div className="home-header">
                <div className="logo">
                    <img src={logo} alt="" />
                    <div onClick={this.changeShow}>
                        {this.state.isShow ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-liebiao"></i>}
                    </div>
                </div>
                <ul className="header-menu">
                    <li>全部</li>
                    <li>react</li>
                    <li>vue</li>
                </ul>
            </div>
        )
    }
}
