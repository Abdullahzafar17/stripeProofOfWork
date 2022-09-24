const catchAsync = require("../utils/catchAsync");
const { createAccountSchema } = require("../utils/schema/provider");
const APIError = require("../utils/APIError");
const status = require("http-status");
const dbUtils = require("../utils/db");
const { MODELS } = require("../utils/constants");
const stripe = require("../stripe/stripe");

const createAccount = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  console.log(req.body);
  const validate = await createAccountSchema.validateAsync(req.body);
  if (validate.error) {
    return next(
      new APIError(validate.error.details[0].message, status.BAD_REQUEST)
    );
  }
  const isExist = await dbUtils.find(MODELS.PROVIDER, {
    where: {
      email: email,
    },
  });
  if (isExist) {
    return next(new APIError("Email Already Exists", status.BAD_REQUEST));
  }

  const StripeUserId = await stripe.createAccount(email);

  const createLink = await stripe.createAccountLink(StripeUserId);

  const save = await dbUtils.create(MODELS.PROVIDER, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    stripeId: StripeUserId,
  });
  res.redirect(createLink.url);
});

const addProduct = catchAsync(async (req, res, next) => {
  const { productName, userId ,account,interval,count,amount } = req.body;
  console.log(req.body);
  const provider = await dbUtils.find(MODELS.PROVIDER, {
    where: {
      id: userId,
    },
  });
  const service = await stripe.createService(productName, provider.stripeId,interval,count,amount); //productName,account,interval,count,amount
  console.log("--->", service);
  const saveService = await dbUtils.create(MODELS.SERVICE_PLAN, {
    name: productName,
    serviceId: service.id,
  });
  saveService.save();
  res.send("Service Added Successfully");
});

module.exports = {
  createAccount,
  addProduct,
};
