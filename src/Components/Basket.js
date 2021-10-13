import React from 'react';
import { connect } from 'react-redux';
import { clearBasket, deleteItem } from '../Actions/Actions';
import { BasketItem } from './BasketItem';

const Basket = ({BasketList,deleteitem,ontodoClick}) => {
    return (
        <div className="Basket">

        <h2>Basket</h2>
        

         <ul className="basket-list">
            {BasketList.map((item,index) =>(
                <BasketItem key={item.id} {...item} click={() => deleteitem(item.id)} />
            ))}
         </ul>

         <button className="Clear" onClick={ontodoClick}>Clear List</button>
          
        </div>
    )
};

const mapStateToProps = (state) => ({
    BasketList: state.BasketList.basket
  });

  const DispatchtoProps = (dispatch) =>{

    return{

        deleteitem:id =>{            
            dispatch(deleteItem(id))
        },

        ontodoClick:() =>{
            dispatch(clearBasket())
        },
        
    };
};



  export default connect(mapStateToProps,DispatchtoProps)(Basket);