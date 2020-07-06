import React,{Component} from 'react';
import {connect} from 'react-redux'; 


 const Video = ({activeModule,activeLesson})=>(
   <div>
     <strong>Modulo{activeModule.title}</strong>
     <span>Aula {activeLesson.title}</span>
   </div>
 );

 export default connect(state => ({ // recebe o estato e pega as active //
   activeLesson: state.course.activeModule,
   activeLesson: state.course.activeLesson
 }))(Video)