import ProductDetails from "../components/body/productDetails/ProductDetails";

const initialState = {
    size:null,
    selected: false,
    clicked:false,
    miniCartActivated:false,
    prodList:[],
    amount:0
}
const addToCartHandler = (state,action) => {
    state.clicked = action.addToCart.clicked;
    state.touched = action.addToCart.touched;
    let sameSize, sameSizeIndex
    const prodList = state.prodList;
    if(state.prodList.length === 0){
        state.prodList.push(action.addToCart)
        state.amount++;
    }
    else{
        for(let i in prodList){
            // console.log('dsafew',prodList)
            if(prodList[i].prodSizes ===action.addToCart.prodSizes){
                sameSize = true;
                sameSizeIndex = i;
            }
        }
        if(sameSize){
            prodList[sameSizeIndex].prodQuantity++
            state.amount++;
        }
        else{
            prodList.push(action.addToCart)
            state.amount++;
        }
    }
}

export default (state = initialState,action)=>{
    switch (action.type){
        case 'size_selected':
            state.size = action.sizes.prodSize;
            state.selected = action.sizes.selected;
            return {...state};
        case 'add_cart':
            addToCartHandler(state,action)
            return {...state};
        case 'click_mini_cart':
            state.miniCartClicked = action.miniCart.clicked;

            return {...state};
        default:
            return state
    }
    

}