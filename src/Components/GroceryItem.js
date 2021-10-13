import React from 'react'

export const GroceryItem = ({name,count,onClick}) => {
    return (
           <li className="grocery-item"><i className="far fa-plus-square" onClick={onClick}></i>{name} {count} </li> 
      
    )
}
