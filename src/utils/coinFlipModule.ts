

export default class CoinFlipper {

   public flipHistory: string[];
   public flipCount: number;
   public lastFlipResult: "heads" | "tails";

   constructor(){
      this.flipHistory = [];
      this.flipCount = 0;
      this.lastFlipResult = null;
   }
   
   public flipCoin(){
      const newFlip = this.flip();
      this.flipCount += 1;
      this.lastFlipResult = newFlip;
      this.flipHistory.push(newFlip);
   }
   
   public resetHistory(){
      this.flipCount = 0;
      this.flipHistory = [];
   }
   
   public getHeads(){
      const heads = this.flipHistory.filter( (x) => x === "heads" ).length;
      return heads;
   }
   
   public getTails(){
      const tails = this.flipHistory.filter( (x) => x === "tails" ).length;
      return tails;
   }
   
   public getTotalFlips(){
      const totalFlips = this.flipHistory.length;
      return totalFlips;
   }

   public getHeadPercentage(){
      if (this.getHeads() === 0) {
         return "0 %";
      }
      const headPercentage =  Math.round((this.getHeads() / this.flipCount)*100*10)/10;
      return headPercentage + " %";
   }

   public getTailPercentage(){
      if (this.getTails() === 0) {
         return "0 %";
      }
      const tailPercentage = Math.round((this.getTails()/this.flipCount)*100*10)/10;
      return tailPercentage + " %";
   }

   private flip(){
      const randomBoolean = Math.random() >= 0.5;

      if (randomBoolean) {
         return "heads";
      }
      else {
         return "tails";
      }
   }

}
