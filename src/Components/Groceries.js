import React from 'react';
import { GroceryItem } from './GroceryItem';
import { connect } from 'react-redux';
import { addItem } from '../Actions/Actions';

 const Groceries = ({groceryList,onClick}) => {
    return (
        <div className="Groceries">

         <h2>Groceries</h2>

         <ul className="grocery-list">
         {groceryList.map(item => (
				<GroceryItem key={item.id} {...item} onClick={() => onClick(item)} />
			  ))}
         </ul>
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    groceryList: state.groceryList
  });

  const DispatchtoProps = (dispatch) =>{

    return{
        onClick:item => {
            dispatch(addItem(item));
        }
    };
};

export default connect(mapStateToProps,DispatchtoProps)(Groceries);