// import express from 'express';
const express = require('express');
const cartRouter = require('./routes/cart.routes');
const productRouter = require('./routes/product.routes');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/cart', cartRouter);
app.use('/api/product', productRouter);	

app.listen(PORT, console.log(`Server is running on port ${PORT}`));