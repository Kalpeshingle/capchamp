const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv) {

srv.on('printhello',req =>{

console.log(req.data.input)
return '$(req.data.input)world'
}) 

srv.on('addition',req => {

    console.log(req.data)
    let result = req.data.num1 + req.data.num2;
    return result


})

srv.on('myfunction',req => {
    let result = {}

    if(req.data.category =1) 
    
{

result.product = 'bmw',
result.price = '1200 usd',   
result.location = 'new delhi'
} else {
result.product = 'hy',
result.stock = 121,
result.priceArray = [
    {

    "price": 32456,
    "discount":"20%"    
    }
]




}
return result;
    
})


})
