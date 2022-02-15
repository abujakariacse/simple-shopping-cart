// get product quentity
// Increase and decrease product quentity
function setPhoneQuentity(id,isIncrease,product){
    const getProductQuentity = document.getElementById(id);
    const productQuentityText= getProductQuentity.value;
    let productQuentity = parseInt(productQuentityText);
    
    if(isIncrease){
        productQuentity = productQuentity + 1;   
    }

    else if(productQuentity > 0){
        productQuentity = productQuentity - 1;
    }
    getProductQuentity.value = productQuentity;

    // Product wise price. price multiply by product's price
    const getProductPrice = document.getElementById(product+'-price');
    if(product == 'phone'){
        getProductPrice.innerText = productQuentity * 1219;
    }
    else{
        getProductPrice.innerText = productQuentity * 59;
    }
    getSubTotal();

}

// Get Product Quentity
function getProductQuentity(productId){
    const productQuentityText = document.getElementById(productId +'-quentity').value;
    const productQuentity = parseInt(productQuentityText);
    return productQuentity;
}

// Sub-Total calculation
function getSubTotal(){
    // Phone Price
    const phoneQuentity = getProductQuentity('phone');
    const phonePrice = phoneQuentity * 1219;

    // Case Price
    const caseQuentity = getProductQuentity('case');
    const casePrice = caseQuentity * 59;

    // Sub Total
    const subTotal = phonePrice + casePrice;
    const getsubTotalText = document.getElementById('sub-total');
    getsubTotalText.innerText = subTotal;

    // Tax calculation
    const tax = subTotal / 10;
    document.getElementById('tax-amount').innerText = tax;
    
    // Total calculation
    document.getElementById('total-price').innerText = Math.round(tax + subTotal);
}

document.getElementById('phone-plus').addEventListener('click',function(){
    setPhoneQuentity('phone-quentity',true,'phone');
    
})

document.getElementById('phone-minus').addEventListener('click',function(){
    setPhoneQuentity('phone-quentity',false,'phone');
})
document.getElementById('case-plus').addEventListener('click',function(){
    setPhoneQuentity('case-quentity',true,'case');
    
})

document.getElementById('case-minus').addEventListener('click',function(){
    setPhoneQuentity('case-quentity',false,'case');
    
})






