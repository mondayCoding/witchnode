
import * as React from 'react';
import axios from 'axios';

import Input from '../../components/input';
import StepOne from '../../controllers/createCharForm/step1';
import StepTwo from '../../controllers/createCharForm/step2';
import StepThree from '../../controllers/createCharForm/step3';
import StepFour from '../../controllers/createCharForm/step4';
import Button from '../../components/button';
import anno from '../../utils/annoModule';
import FormValidator from '../../utils/validationModule';


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

let validator = new FormValidator({});

// validator = new FormValidator([
//   ...
//   {
//     field: 'age',
//     method: validator.isInt,
//     args: [{min: 21, max: 65}],  // an array of additional arguments
//     validWhen: true,
//     message: 'Your age must be an integer between 21 and 65'
//   }
// ]

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

const WizardPath = (props:any) => {
	
	const {step, maxStep} = props;
	let steps = [];

	for(let i = 1; i < maxStep+1; i++ ){
		if (i === step) {
			steps.push(<li className="current" key={i}><div className="bullet"></div></li>);
		} else {
			steps.push(<li key={i}><div className="bullet"></div></li>);
		}		
	}

	return (
		<ol className="wizard-path">
			{steps.map((item, index) => item)}
		</ol>
	);
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


	public goToNext() {
		const { step } = this.state;
		if (step !== this.state.maxStep) {
			this.setState({ step: step + 1 });
		} else {
			anno.announce("form complete");
		}
	}

	public goToPrevious() {
		const { step } = this.state;
		if (step !== 1) {
			this.setState({ step: step - 1 });
		} else {
			anno.announce("returned to start");
		}
	}

	//field
	public onChangeHandler = (event: any) => {
		const target = event.target;
		const value = (target.type === "checkbox") ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	public onsubmitHandler(event: any) {
		event.preventDefault();
		const validation = validator.validate(this.state);

		return (validation.isValid) ? true : false;
	}

	public render() {
		const onSubmit = (event: any) => this.onsubmitHandler(event);
		const step = this.state.step;
		const maxStep = this.state.maxStep;

		return (
			<section className="content-centered-md">
				<form className="userform spacing" onSubmit={onSubmit}>

					<div className="spacing"></div>

					<WizardPath step={step} maxStep={maxStep} />

					<div className="spacing"></div>
					<div className="line-thin"></div>					

					<div className="row-flex spaced">
						<Button buttonText="return" 	type="button" onClick={() => this.goToPrevious()} />
						<Button buttonText="next" 		type="button" onClick={() => this.goToNext()} />
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
