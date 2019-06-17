const name = "Hardev";
const age = 32;

const user = {name, age};
/*const user = {
    name: name,
    age: age
}*/

//console.log(user);

// Object Descructring...
const product = {
    label: "Black Bag",
    price: 'USD 200.00',
    stock: 200,
    code: '215487955',
    rating:3.5
};

//console.log(product.label);
/*onst {label:productLabel, price, rating=5} = product;
console.log(productLabel);
console.log(rating);*/

const transaction = (type, {label, price}) => {
    console.log(type, label, price);
};

transaction('Order', product);