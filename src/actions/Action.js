export function selectSize (size,selected){
    return{
        type:'size_selected',
        sizes:{
            prodSize:size,
            selected:selected
        }
    }
}
export const addToCart = (clicked,size) =>{
    if(size){
        return{
            type:'add_cart',
            addToCart:{
                clicked:clicked,
                prodName: "Classic Tee",
                prodPrice: "$75.00",
                prodSizes:size,
                prodQuantity:1
            }
            
        }
    }else{
        return{
            type:'add_cart',
            addToCart:{
                clicked:clicked,
            }
            
        }
    }
}

export const miniCart = (activated)=>{
    return{
        type:'click_mini_cart',
        miniCart:{
        miniCarActivated:activated
        }
    }
}