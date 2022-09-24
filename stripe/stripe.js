require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPEKEY);

exports.createAccount = async (email) => {
  const account = await stripe.accounts.create({
    type: "standard",
    email: email,
  });
  return account.id;
};

exports.createAccountLink = async (account) => {
  const accountLink = await stripe.accountLinks.create({
    account: account,
    refresh_url: "https://localhost:3000/home",
    return_url: "https://localhost:3000/home",
    type: "account_onboarding",
  });
  return accountLink;
};

exports.createService = async (productName,account,interval,count,amount) => {
 console.log(interval)
 console.log(count)
  const plan = await stripe.plans.create({
    amount: amount*100,
    currency: 'usd',
    interval: interval,
    interval_count: count,
    product: {
      name: productName,
    },
    
  }, 
  {stripeAccount: account});

  return plan;
};
