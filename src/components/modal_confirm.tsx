
import * as React from 'react';
import { confirmable, PlainConfirmModal, ReactConfirmProps } from 'react-confirm';
import Modal from './modal';


class Confirmation extends React.Component<ReactConfirmProps> {

	public render() {
	  const {
		 confirmation,
		 show,
		 proceed,
		 dismiss,
		 cancel,
	  } = this.props;
 
	  return (
			<Modal
			  show={show}
			  heading="sdasdasd"
			  onClose={cancel}
			>
			  {confirmation}
			  <div className="row-flex spaced">
					<button className="themebutton" onClick={() => cancel('arguments will be passed to the callback')}>CANCEL</button>
		    		<button className="themebutton" onClick={() => proceed('same as cancel')}>OK</button>
		    		<button className="themebutton" onClick={() => console.log(this.props)}>log</button>
				</div>
			</Modal>
	  );
	}
 }
 
export default confirmable(Confirmation);