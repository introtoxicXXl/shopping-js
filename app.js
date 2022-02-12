//add phone input number
document.getElementById('iphone-plus').addEventListener('click',function(){
  updateProductNum('iphone',1219,true);
})
document.getElementById('iphone-minus').addEventListener('click',function(){
  updateProductNum('iphone',1219,false);
})
//add case input number
document.getElementById('case-plus').addEventListener('click',function(){
  updateProductNum('case',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){
  updateProductNum('case',59,false);
})
//common function for ipnone and case button
function updateProductNum(product,price,isIncreasing){
  const productInput = document.getElementById(product + '-input');
  let productNumber = productInput.value;
  if(isIncreasing == true){
    productNumber = parseInt(productNumber) + 1;
  }else if(productNumber > 0){
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;
  calculatetotal();
}
function getInputValue(product){
  const productInput = document.getElementById(product + '-input').value;
  const productNumber = parseInt(productInput);
  return productNumber;
}
function calculatetotal(){
  const phoneTotal = getInputValue('iphone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subtotal = phoneTotal + caseTotal;
  const tax = subtotal / 10;
  const totalPrice = subtotal + tax;
  document.getElementById('sub-total').innerText = subtotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-amount').innerText = totalPrice;
}