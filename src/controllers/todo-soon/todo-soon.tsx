
import * as $ from 'jquery';
import axios from 'axios';
import * as React from 'react';

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import Table from '../todo-soon/Table';
import Row from '../todo-soon/rowHandle';
import Modal from '../../components/modal';
import anno from '../../utils/annoModule';

interface IMissionArr {
  quests: IMission[];
  newQuest: string;
  submitDisabled: boolean;
  modalIsOpen:boolean;
}
interface IMission {
  objective:string;
  complete:boolean;
  createDate:string;
  completeDate:string;
}

interface IIndex {
  indexOld: number;
  indexNew: number;
}

interface IState {
  quests: IMission[];
  newQuest: string;
  submitDisabled: boolean;
  modalIsOpen: boolean;
}

const SortItem = SortableElement(Row);

const SortContainer = SortableContainer((props:any)=> {
  return (
    <div className="flex-table">
      { props.items.map((mission:IMission, index:number) => (
          <SortItem 
            key={`item-${index}`} 
            index={index} 
            mission={mission} 
            onClick={() => props.onClick(mission)} 
            toggle={() => props.toggle(mission)} 
            showDesc={()=>console.log("clicked")} 
          />
      ))}
    </div>
  );
});
  
export default class ToDoSoon extends React.Component {
    
  public state:IState = {
    quests: [],
    newQuest: "",
    submitDisabled: true,
    modalIsOpen: true
  };

  public modal = <Modal heading="(WIP MODAL)" onFadeClick={()=>this.handleFadeClick()}/>;

  public componentDidMount(){
    axios.get('/api/soon')
    .then((response) => {
        this.setState({
          quests:response.data
        });
    })
    .catch((error) => {
      console.log(error.response);
      anno.announce(
        `there was a slight issue with your request. Status: ${error.response.status}`, 
        error.response.data,
        "error"
      );
    });
  }

   public clickHandler(){
      axios.put('/api/soon', {objective: this.state.newQuest})
      .then((response) => {
         this.setState({
            quests:response.data,
            newQuest:"",
            submitDisabled:true
         });
      })
      .catch((error) => {
        console.log(error.response);
        anno.announce(
          `there was a slight issue with your request. Status: ${error.response.status}`, 
          error.response.data,
          "error"
        );
      });
   }

   public onChangeHandler(event:any){
      this.setState({
         newQuest: event.target.value,
         submitDisabled: ((event.target.value).length > 2 ? false : true)
      });
   }

   public removeOnClick(mission:IMission){
      $.ajax({
        type:"delete",
        data: {objective:mission.objective, createDate:mission.createDate},
        url:"/api/soon",
        success:(result) => {
          this.setState({
            quests:result
          });
        },
        error: (xhr, ajaxOptions, thrownError) => {
          console.log("ajax error occurred | code: " +  xhr.status + " | message: " +  thrownError);
        }
      });
   }

   public enterHandler(event:KeyboardEvent){
      if (event.key === "Enter") {this.clickHandler();}
   }

   public toggleHandler(mission:IMission){
      console.log(mission.objective);
      axios.put("/api/soon/toggle", {objective: mission.objective, createDate: mission.createDate})
      .then((response)=>{
        this.setState({
          quests:response.data
        });
      })
      .catch((error)=>{
        anno.announce(
          `there was a slight issue with your request. Status: ${error.response.status}`, 
          error.response.data,
          "error"
        );
      });
  }
   
  public handleFadeClick(){
    this.setState({
      modalIsOpen:false
    });
  }

  public onSortEnd = ({oldIndex, newIndex}:{oldIndex:number, newIndex:number}) => {
    this.setState({
      quests: arrayMove(this.state.quests, oldIndex, newIndex),
    });
    console.log("sorted");
  }


   public render(){
      let modalIsOpen = this.state.modalIsOpen;
      let newQuest = this.state.newQuest;
      let submitDisabled = this.state.submitDisabled;
      let quests = this.state.quests;
      let onKeyUp = (event:any) => this.enterHandler(event);
      let onChange = (event:any) => this.onChangeHandler(event);
      let onBtnClick = () => this.clickHandler();
      let onClick = (obj:IMission)=>this.removeOnClick(obj);
      let toggle = (obj:IMission)=>this.toggleHandler(obj);
      let onSortEnd = "";
      let modal = (modalIsOpen) ? this.modal : null ;

      return(
        <Table 
          value={newQuest} 
          disableState={submitDisabled} 
          onKeyUp={onKeyUp} 
          onChange={onChange} 
          onBtnClick={onBtnClick} 
        >
          {modal}
          <SortContainer 
              lockAxis="y" 
              lockToContainerEdges={true} 
              items={quests} 
              useDragHandle={true} 
              onClick={onClick} 
              toggle={toggle} 
              onSortEnd={this.onSortEnd}  
          />
        </Table>
      );
   }
}
