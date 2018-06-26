
import * as React from 'react';

interface Iprops {
	show: boolean;
	heading: string;
	onClose(): void;
}

export default class Modal extends React.Component<Iprops> {

	public listenKeyboard = (event:KeyboardEvent) => {
		if (event.key === 'Escape' || event.keyCode === 27) {
			this.props.onClose();
		}
	}

	public componentDidMount() {
		if (this.props.onClose) {
			window.addEventListener('keydown', this.listenKeyboard, true);
		}
	}

	public componentWillUnmount() {
		if (this.props.onClose) {
			window.removeEventListener('keydown', this.listenKeyboard, true);
		}
	}

	public onOverlayClick() {
		this.props.onClose();
	}
 
	public onDialogClick = (event:any) => {
		event.stopPropagation();
	}

	public render() {

		const onClose = this.props.onClose;
		const onDialogClick = this.onDialogClick;

		// Render nothing if the "show" prop is false
		if(!this.props.show) {
			return null;
		}

		return (
			<div className="modal-fade" onClick={onClose}>

				<div className="modal-box animated-fall" onClick={onDialogClick}>
					<div className="modal-heading">
						<h3 className="heading">{this.props.heading}</h3>
						<button onClick={onClose} type="button" className="close-button light noborder"></button>
					</div>
					<div className="modal-content-wrap">
						{this.props.children}
					</div>
				</div>
				
			</div>
		);
	}

}
