
//libraries

export enum userType {
   admin,
   user, 
   visitor
}

export type productType = "armor" | "weapon" | "accessory" | "consumable" | "tool" | "trash" | "quest" | "gm_debug";

export default class Product{

   public name: string;
   public id: string;
   public description: string;
   public memoNote: string;
   public isVisibleTo: userType[];
   public productType: productType[];
   public hasPrice: boolean;
   public hasQuantityRules: boolean;
   public hasSetDateValues: boolean;
   public createDate: Date;
   public modifiedDate: Date;
   public endOfServiceDate: Date;
   public availableFrom: Date;
   public availableTo: Date;
   public unit: string;
   public maxAmount: number;
   public minAmount: number;
   public price: number;
   public priceWithVat: number;

   constructor(name:string){
      this.name = name;
      this.id = "";
      this.description = "";
      this.memoNote = "";
      this.isVisibleTo = [userType.admin];
      this.productType = ["gm_debug"];
      this.hasPrice = false;
      this.hasQuantityRules = false;
      this.hasSetDateValues = false;
      this.createDate = new Date();
      this.modifiedDate = new Date();
      this.endOfServiceDate = new Date();
      this.availableFrom = new Date();
      this.availableTo = new Date();
      this.unit = "";
      this.price = 0;
      this.priceWithVat = 0;
      this.maxAmount = 0;
      this.minAmount = 0;
   }

   public addProductType(newType:productType) {
      if (!(newType in this.productType)) {
         this.productType.push();
      }
   }
}

class ProductList {
   public list: Product[];

   constructor(list:Product[]){
      this.list = list;
   }

   public hasProductWithId(id:string){
      return this.list.some( (product) => product.id === id);
   }

   public updateProduct(updateProduct:Product){
      if (this.list.some( (product) => product.id === updateProduct.id)) {
         //update product
      }
   }
}
