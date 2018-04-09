import React from 'react';
import './index.less';
import HomeHeader from "./HomeHeader";


export default class Home extends React.Component{
    //选择当前是哪门课程
    selectCurrentLesson = (val)=>{//val是当前选择的课程

    };
    render(){
        return <div>
            <HomeHeader selectCurrentLesson={this.selectCurrentLesson}/>
        </div>
    }
}