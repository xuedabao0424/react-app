import React,{Component} from 'react';
import logo from '../../common/images/logo.jpg';
import Transition from 'react-transition-group/Transition';
const duration=300;//动画时间
const defaultStyle={
    transition: `opacity ${duration}ms ease-in-out`,
    opacity:0,
    display:'none'
};
const transitionStyles={
    entering:{opacity:0},
    entered:{opacity:1}
};
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
                <Transition in={this.state.isShow} timeout={duration} onEnter={(node)=>{node.style.display='block'}}  onExited={(node)=>{node.style.display='none'}}>
                    {(state)=>(
                        <ul className="header-menu" style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                            onClick={(e)=>{
                                this.props.selectCurrentLesson(e.target.dataset.type);
                                this.changeShow();//点完后  隐藏掉列表
                            }}
                        >
                            <li data-type="all">全部</li>
                            <li data-type="react">react课程</li>
                            <li data-type="vue">vue课程</li>
                        </ul>
                    )}
                </Transition>
            </div>
        )
    }
}
