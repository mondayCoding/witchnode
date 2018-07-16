
import * as React from 'react';

import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import StepFour from './step4';
import Button from '../../components/button';
import anno from '../../utils/annoModule';
import WizardPath from '../../components/wizard_path';

interface IFormState {
	step: number;
	maxStep:number;
	name:string;
	lastname:string;
	pass:string;
	passrepeat: string;
	location: string;
	color: string;
	count: string;
	gender: string;
	email: string;
	opinionCats: string;
   opinionDogs: string;
   opinionHouses: string;
	opinionLangues: string;
	youLikeRadio:string;
	selection: string;
   allowMarketing: boolean;
}


interface ICurrentStep {
	formstate:IFormState;
	onChange(param:any):void;
}

const CurrentStep = (props:ICurrentStep) => {

	const step = props.formstate.step;
	const formstate = props.formstate;
	const onChange = props.onChange;

	switch(step) {
		case 1:
			return(<StepOne {...formstate} onChange={onChange} />);

		case 2:
			return(<StepTwo {...formstate} onChange={onChange} />) ;

		case 3:
			return (<StepThree {...formstate} onChange={onChange} />);

		case 4:
			return (<StepFour {...formstate} onChange={onChange} />);

		default:
			return(<StepOne {...formstate} onChange={onChange} />);
	}

};



export default class UserForm extends React.Component {

	public state: IFormState = {
		step: 1,
		maxStep:4,
		name:"",
		lastname:"",
		pass:"",
		passrepeat: "",
		location: "",
		color: "",
		count: "",
		gender: "",
		email: "",
		opinionCats:"",
		opinionDogs:"",
		opinionHouses:"",
		opinionLangues:"",
		youLikeRadio: "",
		selection:"en",
		allowMarketing: false
	};


	public goToNext = () => {
		const { step } = this.state;
		if (step !== this.state.maxStep) {
			this.setState({ step: step + 1 });
		} else {
			anno.announce("form complete");
		}
	}

	public goToPrevious = () => {
		const { step } = this.state;
		if (step !== 1) {
			this.setState({ step: step - 1 });
		} else {
			anno.announce("returned to start");
		}
	}

	//field
	public onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = (target.type === "checkbox") ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	public onsubmitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      console.log("no submit handling as of now");      
	}

	public render() {
		const {step, maxStep } = this.state;

		return (
			<section className="content-centered-md">
				<form className="userform" onSubmit={this.onsubmitHandler}>

					<div className="spacing"></div>

					<WizardPath step={step} maxStep={maxStep} />

					<div className="spacing"></div>
					<div className="line-thin"></div>					

					<div className="row-flex spaced">
						<Button buttonText="return" 	type="button" onClick={this.goToPrevious} />
						<Button buttonText="next" 		type="button" onClick={this.goToNext} />
					</div>

					<div className="line-thin"></div>
					<div className="spacing"></div>
					

					<CurrentStep formstate={this.state} onChange={this.onChangeHandler}/>

					<div className="spacing"></div>
					<div className="line-thin"></div>


				</form>
			</section>
		);
	}
}
