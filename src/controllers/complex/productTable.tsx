
//libraries
import * as React from 'react';
import Product from '../../utils/productModule';

interface IProps {
   productTable:Product[];
   onProductClick(params:Product, index:number):void;
}

export default class ProductTable extends React.Component<IProps> {

   public render() {
      const productTable = this.props.productTable || [];   
      const onProductClick = this.props.onProductClick;   

      return(
         <div className="flex-table">
            {
               productTable.map((product, index)=> {
                  const {name, id, description, hasPrice, price} = product;
                  return(
                     <div className="table-row" key={name + index}>
                        <div className="cell-auto" title={description}>
                           <span className="interactable" onClick={() => onProductClick(product, index)}>
                              {name}
                           </span>
                        </div>
                        <div className="cell-60px">{id && id}</div>
                        <div className="cell-60px">{hasPrice && price}</div>
                     </div>
                  );
               })
            }
         </div>
      ); 
   }
}


// const Row:React.StatelessComponent<Product> = (props) => {
//    const {name, description, hasPrice, price} = props;
//    console.log(props);
   
//    return(
//       <div className="table-row">
//          <div className="cell-auto">{name}</div>
//          <div className="cell-auto">{description}</div>
//          <div className="cell-auto">{hasPrice && price}</div>
//       </div>
//    );
// };


// export default class ProductTable extends React.Component<IProps> {

//    public render() {
//       const productTable = this.props.productTable || [];   

//       return(
//          <div className="flex-table">
//             {
//                productTable.map((product, index)=> {
//                   return(
//                      <Row 
//                         key={product.name + product.id}
//                         id={product.id}
//                         name={product.name} 
//                         description={product.description} 
//                         hasPrice={product.hasPrice} 
//                         price={product.price} 
//                      />
//                   );
//                })
//             }
//          </div>
//       ); 
//    }
// }
