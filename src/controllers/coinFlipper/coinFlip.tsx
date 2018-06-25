
//libraries
import * as React from 'react';

//utils
import confirm from './../../utils/confirmUtilModule';
import coinFlipper from '../../utils/coinFlipModule';
import Button from '../../components/button';
import Tabs from '../../components/tabs';
import Tab from '../../components/tab';

interface IState {
   coinFlipHistory: string[];
   coinFlipCount: number;
}

export default class Flipper extends React.Component {

   
   public state: IState = {
      coinFlipHistory: [],
      coinFlipCount: 0
   };
   
   private coinFlipper: coinFlipper;
   
   public componentWillMount(){
      this.coinFlipper = new coinFlipper();
   }

   public updateFlipState(){
      this.setState({
         coinFlipHistory: this.coinFlipper.flipHistory,
         coinFlipCount: this.coinFlipper.flipCount
      });
   }

	public flipCoin = () => {
      this.coinFlipper.flipCoin();
      this.updateFlipState();
   }
   
   public resetCoinFlips = () => {
      if (confirm("Are you sure you want to reset flips?, this action cannot be undone", null, "Reset")){
         this.coinFlipper.resetHistory();
         this.updateFlipState();
      }
	}

	public render() {
      const total = this.state.coinFlipCount;
      const headCount = this.coinFlipper.getHeads();
      const tailCount = this.coinFlipper.getTails();
      const history = this.state.coinFlipHistory;
      const latest = this.coinFlipper.lastFlipResult;
      let count = 0;

      return (
         <div className="content-centered-md">

            {/* total counter */}
            <div className="coinHeading">
               <h3 className="heading">
                  {
                     "flipped " + total + " times"
                  }
               </h3>
            </div>

            {/* coin animation */}
            <div className="coinFlipWrap">
               <div className={"coin " + latest} onClick={this.flipCoin}>
                  {latest}
               </div>
            </div>

            {/* buttons */}
            <div className="row-flex spaced">
               <Button buttonText="Flip Coin?" onClick={this.flipCoin} />
               <Button buttonText="Reset" onClick={this.resetCoinFlips} />
            </div>

            <div className="spacing"></div>

            {/* percentage counter */}
            <div className="row-flex spaced">
               <div className="countHeading">
                  <div>Heads:</div>
                  <div>{this.coinFlipper.getHeadPercentage()}</div>
               </div>
               <div className="countHeading">
                  <div>Tails:</div>
                  <div>{this.coinFlipper.getTailPercentage()}</div>
               </div>
            </div>

            {/* result table */}
            <div className="spacing"></div>
            <div className="line-thin"></div>
            <div className="flex-table">
               {                  
                  history.reverse().map((item, index)=> {
                     return (
                        <div key={index} className="table-row">
                           <div className="cell-60px centered">
                              <b>{"#" + (history.length - index)}</b>
                           </div>
                           <div className="cell-auto">
                              {item}
                           </div>
                        </div>
                     );
                  })
               }
            </div>
            <div className="line-thin"></div>

            <Tabs>
               <Tab title="First">             
                  <span>
                    Counter chronological flipping history:
                  </span>  
               </Tab>
               <Tab title="Second">            
                  <span>
                     Have you ever implemented something similar?
                           Did you do something differently? Leave a comment 
                           below a let’s learn from each other :).
                  </span>        
               </Tab>
               <Tab title="Third">              
                  <span>
                     With very little code and yet a lot of flexibility we 
                        have managed to implement a simple React
                  </span>       
               </Tab>
               <Tab title="Fourth">              
                  <span>
                     Have you ever implemented something similar?
                           Did you do something differently? Leave a comment 
                           below a let’s learn from each other :).
                  </span>   
               </Tab>
            </Tabs>

         </div>
      );
	}
}

