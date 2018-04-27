
import * as React from 'react';
import * as $ from 'jquery';
import {SortableHandle} from 'react-sortable-hoc';


interface Iprops {
   mission : {
      objective:string,
      complete:boolean,
      createDate:string,
      completeDate:string,
   };
   toggle():any;
   showDesc():any;
   onClick():any;
}

const SortHandle = SortableHandle(()=><i className="fa fa-bars"></i>);

export default class RowHandle extends React.Component<Iprops> {
   public render(){
    const {mission, toggle, showDesc} = this.props;
    let createDate = new Date(mission.createDate).toDateString();
    let iconClass = (mission.complete) ? "fa fa-calendar-check-o" : "fa fa-calendar-o";
    let rowClass = (mission.complete) ? "complete table-row" : "table-row";
    return (
         <div className={rowClass}>
            <div className="cell-status" onClick={showDesc}><SortHandle /></div>
            <div className="cell-status" onClick={toggle}><i className={iconClass}></i></div>
            <div className="cell-auto">{mission.objective}</div>
            <div className="cell-auto">{createDate}</div>
            <div className="cell-60px" onClick={this.props.onClick} >
               <div className="close-button"></div>
            </div>
         </div>
      );
   }

}
