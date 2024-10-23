const express=require('express');
const cors=require('cors');
const stripe=require('stripe')('use stripe secret key ');
// const uuid=require('uuid/v4');
const { v4: uuid } = require('uuid');

const app=express();
const port=5000;

//middleware
app.use(express.json());
app.use(cors());


//routes
app.get('/', async (req,res)=>{
    res.status(200).send('Hello World');
})
app.post('/payment',async (req,res)=>{
    
    const {product,token}=req.body;
    console.log('product',product);
    console.log('price',product.price);
    const idempotencyKey=uuid();

    return stripe.customers.create({
        email: token.email,
        source: token.id 
    }).then(customer =>{
        stripe.charges.create({
            amount: product.price*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            // shipping:{
            //     name :token.card.name,
            //     address:{
            //         country :token.card.address_country
            //     }
            // }
        },{idempotencyKey})
    })
    .then(result=>res.status(200).json(result))
    .catch(err=>console.log(err))
})


//listen
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})