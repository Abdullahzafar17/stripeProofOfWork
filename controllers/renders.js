
const catchAsync = require('../utils/catchAsync')
const dbUtils = require('../utils/db')
const {MODELS} = require('../utils/constants')


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
const servicePlan = catchAsync(async(req,res,next)=>{
    var providers = await dbUtils.findAll(MODELS.PROVIDER)
    res.render('services/service',{providers: providers})
    
   
})


module.exports = {
    home,
    createAccount,
    createCustomer,
    createPayment,
    refundPayment,
    servicePlan
}