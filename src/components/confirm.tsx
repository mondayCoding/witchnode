
import * as React from 'react';
import { PlainConfirmModal, ReactConfirmProps } from 'react-confirm';

export class ConfirmationDialog extends React.Component<ReactConfirmProps> {

	public listenKeyboard = (event:KeyboardEvent) => {
		if (event.key === 'Escape' || event.keyCode === 27) {
			this.props.cancel();
		}
	}

	public componentDidMount() {
		if (this.props.cancel) {
			window.addEventListener('keydown', this.listenKeyboard, true);
		}
	}

	public componentWillUnmount() {
		if (this.props.cancel) {
			window.removeEventListener('keydown', this.listenKeyboard, true);
		}
	}

	public onOverlayClick() {
		this.props.cancel();
	}
 
	public onDialogClick = (event:any) => {
		event.stopPropagation();
	}

	public render() {
		const {confirmation, show, proceed, dismiss, cancel, heading } = this.props;

		// Render nothing if the "show" prop is false
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="modal-fade" onClick={() => cancel()}>

				<div className="modal-box" onClick={this.onDialogClick}>
					<div className="modal-heading">
						{heading && <h3 className="heading">{heading}</h3>}
						<button onClick={() => cancel()} type="button" className="close-button light noborder"></button>
					</div>

					<div className="modal-content-wrap">
						{confirmation}
					</div>

					<div className="row-flex spaced">
						<button className="themebutton" onClick={() => cancel()}>Cancel</button>
						<button className="themebutton" autoFocus={true} onClick={() => proceed()}>Ok</button>

						{/* props debug */}
						{/* <button className="themebutton" onClick={() => console.log(this.props)}>log</button> */}
					</div>
				</div>

			</div>
		);
	}
}


export default ConfirmationDialog;