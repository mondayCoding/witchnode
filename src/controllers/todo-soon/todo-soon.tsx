
//libraries
import axios from 'axios';
import * as React from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

//custom components
import Table from '../todo-soon/Table';
import Modal from '../../components/modal';
import SortableList from './sortableList';

//utils
import anno from '../../utils/annoModule';
import API from '../../api/ToDo_soon';
import confirm from './../../utils/confirmUtilModule';

//interfaces
import { IMissionItem } from '../../interfaces/index';


interface IModalContent {
	title: string;
	content: string;
	remove(): void;
}

interface IState {
	quests: IMissionItem[];
	newQuest: string;
	isSubmitDisabled: boolean;
	modalIsOpen: boolean;
	modalContent: IModalContent;
}

export default class ToDoSoon extends React.Component {

	public state: IState = {
		quests: [],
		newQuest: "",
		isSubmitDisabled: true,
		modalIsOpen: false,
		modalContent: {
			title: "",
			content: "",
			remove: null
		}
	};

	public async componentDidMount() {
		const data: any = await API.getTodoCollection();
		this.setState({ quests: data });
	}

	public async clickHandler() {
		if(await confirm(`Add task called: ${this.state.newQuest}`)){
			const data: any = await API.addNewItemToCollection({ objective: this.state.newQuest });
			this.setState({ quests: data, newQuest: "" });
		}
	}

	public onChangeHandler(event: any) {
		this.setState({
			newQuest: event.target.value,
			isSubmitDisabled: ((event.target.value).length > 2 ? false : true)
		});
	}

	public async removeMission(mission: IMissionItem) {

		// close modal if it is open
		const modalIsOpen = this.state.modalIsOpen;

		if (modalIsOpen){
			this.setState({ modalIsOpen: false });
		}

		// confirm deletion
		if (await confirm(`Really delete item: ${mission.objective}`, null, "heading")) {
			const data: any = await API.removeFromCollection({ objective: mission.objective, createDate: mission.createDate });
			this.setState({ quests: data });
		// deletion canceled
		} else {
			// open modal again if it was open			
			if (modalIsOpen) {
				this.setState({ modalIsOpen: true });
			}
		}	
	}

	public enterHandler(event: KeyboardEvent) {
		if (event.key === "Enter") { this.clickHandler(); }
	}

	public async toggleHandler(mission: IMissionItem) {
		const data: any = await API.toggleHandler({ objective: mission.objective, createDate: mission.completeDate });
		this.setState({ quests: data });
	}

	public handleClose = () => {
		this.setState({ modalIsOpen: false });
	}

	public onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
		this.setState({ quests: arrayMove(this.state.quests, oldIndex, newIndex) });
		console.log("sorted");
	}

	public updateModal = (item: IMissionItem) => {
		this.setState({
			modalContent: {
				content: item.objective,
				title: item.objective,
				remove: () => this.removeMission(item)
			},
			modalIsOpen: true
		});
	}

	public render() {

		//table
		let newQuest = this.state.newQuest;
		let isSubmitDisabled = this.state.isSubmitDisabled;
		let quests = this.state.quests;
		let enterHandler = (event: any) => this.enterHandler(event);
		let onChange = (event: any) => this.onChangeHandler(event);
		let onBtnClick = () => this.clickHandler();
		let removeItem = (obj: IMissionItem) => this.removeMission(obj);
		let toggle = (obj: IMissionItem) => this.toggleHandler(obj);

		//modal
		const handleClose = this.handleClose;
		const modalIsOpen = this.state.modalIsOpen;
		const updateModal = this.updateModal;

		const content = this.state.modalContent.content;
		const title = this.state.modalContent.title;
		const remove = this.state.modalContent.remove;

		return (
			<Table
				value={newQuest}
				disableState={isSubmitDisabled}
				onKeyUp={enterHandler}
				onChange={onChange}
				onBtnClick={onBtnClick}
			>
				<Modal show={modalIsOpen} heading={title} onClose={handleClose} >
					<div className="line-thin"></div>
					<span>modal for testing modals</span><br />
					<span>click button to dismiss</span><br />
					<span>click fade (dark area) to dismiss</span><br />
					<span>press esc (keyboard) to dismiss</span><br />
					<span>{content}</span><br />
					<div className="spacing"></div>
					<button className="themebutton wide" onClick={remove}>Remove this item</button>
				</Modal>

				<SortableList
					//component properties
					lockAxis="y"
					lockToContainerEdges={true}
					useDragHandle={true}
					onSortEnd={this.onSortEnd}

					//passed data
					items={quests}
					updateModal={updateModal}
					removeItem={removeItem}
					toggle={toggle}
				/>
			</Table>
		);
	}
}
