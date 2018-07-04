
//libraries
import * as React from 'react';
import Select, { Option } from 'react-select';
import Product from '../../utils/productModule';
import {userType, productType} from '../../utils/productModule';
import Input from '../../components/input_responsive';
import Select2 from '../../components/select_responsive';
import Button from '../../components/button';
import SliderCheckbox from '../../components/checkbox-slider';
import Tabs from '../../components/tabs';
import Tab from '../../components/tab';
import TextArea from '../../components/textArea';

// REMINDER: not best practice but there is no proper definition file for this as of 16.6.2018 
// tslint:disable:no-var-requires
const DayPickerInput = require("react-day-picker/DayPickerInput").default;

interface IProps {
   product:Product;
   onSave(param:Product):void;
   onCancel():void;
}

interface IState {
   product:Product;
}


export default class ProductForm extends React.Component<IProps> {

   public state:IState = {
      product:this.props.product,
   };

   public handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
      const targetName = e.target.name;
      let product:any = Object.assign({}, this.state.product);
      product[targetName] = targetValue;
      this.setState({product});
   }

   public handleSelectOnChange = (selectionString:Option<string>) => {
      const selectionArray = selectionString.split(",") as productType[];
      let product = Object.assign({}, this.state.product);      
      product.productType = selectionArray;      
      this.setState({product});
   }
      
   public handleFromChange = (from:Date) => {
      console.log(from);      
      let endOf = this.state.product.endOfServiceDate;
   }

   public handleSave = () => {      
      this.props.onSave(this.state.product);    
   }

   public handleCancel = () => {      
      this.props.onCancel();    
   }

   public render() {
      const productTypeOptions = [
         {value: "armor",        label: "Armor"       },
         {value: "weapon",       label: "Weapon"      },
         {value: "accessory",    label: "Accessory"   },
         {value: "consumable",   label: "Consumable"  },
         {value: "tool",         label: "Tool"        },
         {value: "trash",        label: "Trash"       },
         {value: "quest",        label: "Quest"       },
         {value: "gm_debug",     label: "Gm_debug"    }
      ];

      const {
         name, id, price, hasPrice, description, memoNote, hasQuantityRules, minAmount, maxAmount, productType, 
         hasSetDateValues, priceWithVat, endOfServiceDate,availableFrom, availableTo, createDate, modifiedDate, hasImage
      } = this.state.product; 

      return(
         <div className="product--modal">

            <Tabs>
               {/* general settings tab */}
               <Tab title="General">
                  <h3 className="heading underlined">Base Properties</h3>
                  <Input
                     label="Name"
                     name="name"
                     id="name"
                     value={name}
                     onChange={this.handleOnChange}
                  />
                  <Input
                     label="Item ID"
                     name="id"
                     id="id"
                     value={id}
                     onChange={this.handleOnChange}
                  />
                  <Input
                     label="Product summary"
                     name="description"
                     id="description"
                     value={description}
                     onChange={this.handleOnChange}
                  />

                  <div className="themeinput-responsive">
                     <label htmlFor="selectID">Product types</label>
                     <Select 
                        id="selectID" 
                        multi={true}
                        simpleValue={true}
                        name="lang-field-name"
                        value={productType}
                        onChange={this.handleSelectOnChange}
                        options={productTypeOptions}
                     />
                  </div>

                  {/* <Select2
                     label="Product types"
                     multi={true}
                     simpleValue={true}
                     name="lang-field-name"
                     value={productType}
                     onChange={this.handleSelectOnChange}
                     options={productTypeOptions}
                  /> */}

                  <h3 className="heading underlined">Addidional properties</h3>
                  <SliderCheckbox 
                     label="Has Product images" 
                     id="imagePropertiesInUse"
                     name="hasImage" 
                     checked={hasImage} 
                     onChange={this.handleOnChange} 
                  />
                  <SliderCheckbox 
                     label="Has price table" 
                     id="priceSettingsInUse"
                     name="hasPrice" 
                     checked={hasPrice} 
                     onChange={this.handleOnChange} 
                  />
                  <SliderCheckbox 
                     label="Has avaibility settings" 
                     id="hasSetDateValues"
                     name="hasSetDateValues" 
                     checked={hasSetDateValues} 
                     onChange={this.handleOnChange} 
                  />
                  <SliderCheckbox 
                     label="Has limited supply" 
                     id="quantitySettingsInUse"
                     name="hasQuantityRules" 
                     checked={hasQuantityRules} 
                     onChange={this.handleOnChange} 
                  />
               </Tab>

               {/* Note tab */}
               <Tab title="Note"> 
                  <h3 className="heading underlined">Summary</h3>                
                  <TextArea
                     label="Product summary"
                     name="memoNote"
                     id="memoNote"
                     value={memoNote}
                     onChange={this.handleOnChange}
                  />                    
               </Tab>

               {/* image Tab */}
               {
                  hasImage && 
                  <Tab title="Avatar">

                     <h3 className="heading underlined">Product image</h3>  

                     <span>image will go here</span>
                  </Tab>
               }
               {/* price tab */}
               {
                  hasPrice && 
                  <Tab title="Price">

                     <h3 className="heading underlined">Product associated price</h3>  

                     <Input
                        isSmall={true}
                        label="Base cost"
                        name="price"
                        value={price.toString()}
                        onChange={this.handleOnChange}
                     />
                     <Input
                        isSmall={true}
                        label="Taxless cost"
                        name="priceWithVat"
                        value={priceWithVat.toString()}
                        onChange={this.handleOnChange}
                     />
                  </Tab>
               }

               {/* price tab */}
               {
                  hasSetDateValues && 
                  <Tab title="Avaibility"> 

                     <h3 className="heading underlined">Avaibility settings</h3>
                     <DayPickerInput value={endOfServiceDate} onDayChange={this.handleFromChange} />   
                     <DayPickerInput value={endOfServiceDate} onDayChange={this.handleFromChange} />   

                     <h3 className="heading underlined">Remove from catalog</h3> 
                     <DayPickerInput  value={endOfServiceDate} onDayChange={this.handleFromChange} />               

                     <h3 className="heading underlined">Internal dates</h3>
                     <DayPickerInput value={endOfServiceDate} onDayChange={this.handleFromChange} />               

                  </Tab>
               }

               {/* quantity tab */}
               {
                  hasQuantityRules && 
                  <Tab title="Quantity"> 
                     <Input
                        label="Minimum required amount"
                        name="minAmount"
                        value={minAmount.toString()}
                        onChange={this.handleOnChange}
                     />
                     <Input
                        label="Maximum allowed amount"
                        name="maxAmount"
                        value={maxAmount.toString()}
                        onChange={this.handleOnChange}
                     />
                  </Tab>
               }
            </Tabs>

            <div className="line-thin"></div>

            <div className="row-flex spaced">
               <Button buttonText="Cancel" onClick={this.handleCancel} />
               <Button buttonText="Save" onClick={this.handleSave} />
            </div>
            
         </div>
      ); 
   }
}
