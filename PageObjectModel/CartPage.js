const { expect } = require("@playwright/test")

exports.cartPage = class cartPage
{
constructor(page)
{
 this.page= page   
 this.cartPage = "(//a[normalize-space()='Cart'])[1]"
this.placeOrder = "(//button[normalize-space()='Place Order'])[1]"
this.placeorderName = "[id='name']"
this.placeorderCountry = "[id='country']"
this.placeorderCity = "[id='city']"
this.placeorderCreditcard = "[id='card']"
this.placeorderMonth = "[id='month']"
this.placeorderYear = "[id='year']"
this.placeorderPurchaseButton  = "[onclick='purchaseOrder()']"
this.confirmationMessageText = "//h2[normalize-space()='Thank you for your purchase!']"
this.purchaseConfirmation ="[class='lead text-muted ']"
this.OKPurchaseButton = "[class='confirm btn btn-lg btn-primary']"
}

async gotocartTab(UserName,UserCountry,UserCity,UserCreditCard,Month,Year)

{

    await this.page.locator(this.cartPage).click();
    await this.page.locator(this.placeOrder).click();
    await this.page.locator(this.placeorderName).fill(UserName);
    await this.page.locator(this.placeorderCountry).fill(UserCountry);
    await this.page.locator(this.placeorderCity).fill(UserCity)
    await this.page.locator(this.placeorderCreditcard).fill(UserCreditCard)
    await this.page.locator(this.placeorderMonth).fill(Month);
    await this.page.locator(this.placeorderYear).fill(Year);
    await this.page.locator(this.placeorderPurchaseButton).click();
    const ConformationText = await this.page.locator(this.confirmationMessageText).textContent();
    console.log("Text:", ConformationText );
    await expect(this.page.locator(this.confirmationMessageText)).toHaveText("Thank you for your purchase!");
    await this.page.locator(this.OKPurchaseButton).click();

    

 }
}