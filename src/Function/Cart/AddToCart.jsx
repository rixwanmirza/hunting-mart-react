async function addToCartStore(data){

    let array={
            "id":data.id,
            "thumbnail":data.image,
            "price":data.price,
            "name":data.name,
    ];
    array.push(JSON.parse(localStorage.getItem('addToCart')));

    localStorage.setItem('addToCart', JSON.stringify(array));array
}
async function addToCartGet(){
    localStorage.getItem('addToCart');
}
const AddToCart = {addToCartStore}

export default AddToCart;
