import React from 'react'

export const BasketItem = ({name ,count, click}) => {
    return (
        <li className="basket-item"><i class="fas fa-minus" onClick={() =>{click()}}></i> {name} {count}</li>
    )
}
