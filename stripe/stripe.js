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
    refresh_url: "https://example.com/reauth",
    return_url: "https://localhost:3000/home",
    type: "account_onboarding",
  });
  return accountLink;
};
