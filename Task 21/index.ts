interface Car{
    name:string;
    color:string;
    price:number;
};
function car(name:string , color:string , price:number):Car{
    return{name,color,price};
}
const cars:Car[]=[
    car('Toyota' , 'Black' , 10000),
    car('Honda' , 'White' , 20000),
    car('Mercedes' , 'Red' , 30000)
];
console.log(cars);
