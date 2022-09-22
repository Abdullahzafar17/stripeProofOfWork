// const APIError = require('../utils/APIError')
const catchAsync = require('../utils/catchAsync')


const home = catchAsync(async(req,res,next)=>{
    res.render('home')
})
const createAccount = catchAsync(async(req,res,next)=>{
    res.render('account/createAccount')
})
const createCustomer = catchAsync(async(req,res,next)=>{
    res.render('customer/createCustomer')
})
const createPayment = catchAsync(async(req,res,next)=>{
    res.render('payment/createPayment')
})
const refundPayment = catchAsync(async(req,res,next)=>{
    res.render('payment/refundPayment')
})



module.exports = {
    home,
    createAccount,
    createCustomer,
    createPayment,
    refundPayment



}