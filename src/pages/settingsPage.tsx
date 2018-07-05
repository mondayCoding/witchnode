
//libs
import * as React from 'react';

//components
import Checkbox from '../components/checkbox';
import Radiobutton from '../components/radiobutton';
import SliderCheckbox from '../components/checkbox-slider';


//Interfaces

type IThemeString = "default" | "red" | "violet" | "light";

interface Istates {
	checkboxTwo: boolean;
	checkboxOne: boolean;
	checkboxThree: boolean;
	optionFour: boolean;
	selectedTheme: IThemeString;
}

const themes = [
	{ value: "default", label: "Default UI theme (dark)" },
	{ value: "violet", label: "Violet variant" },
	{ value: "red", label: "Red variant" },
	{ value: "light", label: "Light theme" },
];

export default class WitchPage extends React.Component<any, Istates> {

	constructor(props: any) {
		super(props);
		this.state = {
			checkboxTwo: false,
			checkboxOne: true,
			checkboxThree: true,
			optionFour: true,
			selectedTheme: "default"
		};
	}

	public handleThemeChange = (event: any) => {		
		const selectTheme:IThemeString = event.target.value;
		console.log(selectTheme);		
		document.getElementById("body").className = selectTheme;

		this.setState({
			selectedTheme: selectTheme
		});

	}

	public cbHandleChange() {
		console.log("changed");
		this.setState({
			checkboxTwo: (this.state.checkboxTwo) ? false : true
		});
	}

	public render() {
		return (
			<div className="page">

				<h2>this is settings page</h2>
				<p>it has very litle in terms of content</p>

				<div className="config-wrap">

					<div className="content-centered-md">
					<h3>select interface theme</h3>

					<div className="spacing"></div>

					{
						themes.map((theme, index) => 
							<Radiobutton
								key={index} 
								id={"themeselect"+index} 
								label={theme.label} 
								value={theme.value} 
								name="selectedTheme" 
								onChange={this.handleThemeChange} 
							/>
						)
					}								

					<div className="spacing"></div>

						<div className="line-thin"></div>

						<kbd className="shortcut">Ctrl + D</kbd>
						<kbd className="shortcut">Ctrl + S</kbd>
						<kbd className="shortcut">Ctrl + A</kbd>

						<div className="line-thin"></div>



						<Checkbox
							label="test label"
							id="thisID1"
							defaultChecked={this.state.checkboxTwo}
							disabled={true}
							onChange={() => this.cbHandleChange()}
						/>
						<Checkbox label="bdfdf" id="thisID2" defaultChecked={true} />
						<Checkbox label="bdfdf" id="thisID3" defaultChecked={true} />

						<div className="line-thin"></div>

						<SliderCheckbox label="day/night mode" id="thisID5" defaultChecked={true} />
						<SliderCheckbox label="default to no strings" id="thisID6" defaultChecked={false} />
						<SliderCheckbox label="nullcheck all values" id="thisID7" defaultChecked={false} />
						<SliderCheckbox label="null is disabled" id="thisID8" defaultChecked={true} disabled={true} />

						<div className="line-thin"></div>

						<Radiobutton id="radioOne" label="like cats?" name="radioTestb" />
						<Radiobutton id="radioTwo" label="like dogs?" name="radioTestb" />
						<Radiobutton id="radioThree" label="like gerbils?" name="radioTestb" />
					</div>

				</div>
			</div>);
	}
}
