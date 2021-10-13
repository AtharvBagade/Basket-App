import { combineReducers } from "redux";

const InitialState = {

    grocery:[
        {id:1, name:'Mango'},
        {id:2, name:'Guava'},
        {id:3, name:'Kiwi'},
        {id:4, name:'Apple'},
        {id:6, name:'Milk'},
        {id:7, name:'Eggs'},
        {id:8, name:'Bread'},
        {id:9, name:'Butter'},
        {id:10, name:'Chicken'},
        {id:11, name:'Fish'},
        {id:12, name:'Mutton'},
        {id:13, name:'Beef'},
        {id:14, name:'Pork'},
        {id:15, name:'Turkey'},
        {id:16, name:'Green Chilli'},
        {id:17, name:'Pepper'},
        {id:18, name:'Salt'},
    ],

    basket:[
        {id:1, name:'Mango',count:1},
        {id:6, name:'Milk',count:1},
        {id:10, name:'Chicken',count:1},
        {id:11, name:'Fish',count:1},
        {id:17, name:'Pepper',count:1},
    ]

};

export const groceryList = (state = InitialState.grocery, action) =>{


          switch(action.type)
          {
              default:
                   return state;
          }

};

export const BasketList = (state=InitialState, action) =>{


          switch(action.type){

              case 'ADD_ITEM_TO_BASKET':

                    let ContainsItem=false; 
               
                  let newList = state.basket.map(item => {


                     if(action.item.id === item.id)
                     {
                        ContainsItem=true; 
                        return{ ...item,count:item.count+1}
                     }
                     else
                     {
                         return item;
                     }

                  });

                  if(ContainsItem)
                  {
                      return{
                        ...state,basket:newList
                      };
                  }

                  else
                  {
                      return{
                           ...state, basket:[...state.basket,{...action.item,count:1}]
                      }
                  }
                
            case 'Delete_Item':
                   
                    return{
                        ...state,basket:state.basket.filter((item) => item.id !== action.payload)
                    }
                 
    
                  
            case 'Clear_Basket':
                    return{
                        ...state,
                        basket:[]
                    }

                default:
                    return state;
                
          }

};

export const basketItems = combineReducers({

    groceryList,BasketList
});
