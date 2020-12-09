import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'
//import "images"


/*
1) All Black - Bracelet
2) Black & White Valk* - Bracelet
3) Gray & Yellow -Bracelet
4) Army Green - Bracelet
5) Black & Pink - Bracelet
6) Love Elephant - Bracelet
7) Valkerie Yellow & White - Bracelet
8) Valkerie Gold & Brown - Bracelet
9) Kids Cotton Candy/Rainbow combo - Bracelet
10) Unicorn poop - Bracelet
11) Yellow and Red - Bracelet
12) Red on Black - Bracelet
13) White - Bracelet
*/
const initState = {
    items: [
        {id:1,title:'Bracelet', desc: "All Black ", price:10},//,  img: img: Item1},
        {id:2,title:'Bracelet', desc: "Black & White Valkerie Weave", price:12},//img: Item2},
        {id:3,title:'Bracelet', desc: "Gray, Yellow and Black",price:10},//,img: Item3},
        {id:4,title:'Bracelet', desc: "Army Green With Gold Flakes", price:10},//,img:Item4},
        {id:5,title:'Bracelet', desc: "Black & Pink", price:10},//, price:160,img: Item5},
        {id:6,title:'Bracelet', desc: "Love Elephants",price:20},//,img: Item6}
        {id:7,title:'Bracelet', desc: "Yellow, White, & Gray Valkerie Weave", price:10},
        {id:8,title:'Bracelet', desc: "Black, White, & Brown / Gold Flakes Valkerie Weave", price:10},
        {id:9,title:'Bracelet', desc: "Kids Cotton Candy/Rainbow combo pair", price:10},
        {id:10,title:'Bracelet', desc: "Unicorn Poop", price:10},
        {id:11,title:'Bracelet', desc: "Yellow, Red, & Black(Thick)", price:10},
        {id:12,title:'Bracelet', desc: "Red, Black, & White", price:10},
        {id:13,title:'Bracelet', desc: "White Mix", price:10},

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer