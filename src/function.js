function addToCart(productName="elma", quantity) {
    console.log("Sepete eklendi. " + productName + "adet "+ quantity);

}

// addToCart()
// addToCart("yumurta", 15)
// addToCart("elma")
// addToCart("elma")
// addToCart(15)

let sayHello = () => {
    console.log("hello word")
}

// sayHello()

let sayHello2 = function () {
    console.log("hello word 2")
}
// sayHello2()


function addToCart2(productName, quantity, unitPrice) {
    
}



function addToCart3(product) {
    console.log(product)
}

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

addToCart3(product1.unitPrice)

let product2 = {productName:"Elma", quantity:12, unitPrice:10}
let product3 = {productName:"Elma", quantity:12, unitPrice:10}

product2 = product3

product2.productName = "Karpuz"

console.log(product3.productName)

function addToCart4(x){
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:10},
    {productName:"Kivi", unitPrice:10, quantity:15}
]

addToCart4(products)


function add(bisey, ...numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
       total = total + numbers[i];
    }
    console.log(total)
}


add(20,30)
add(20,30,40)
add(20,30,50)

let numbers = [30,10,500,25,487,987]
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstsnbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
     
      ]
console.log(icAnadolu)
console.log(icAnadoluSehirleri)

let productName, unitPrice, quantity
(
    {productName:productName, unitPrices:unitPrice, quantity:quantity} = {productName:"Elma", unitPrices:10, quantity:5}
 )
console.log(unitPrice)