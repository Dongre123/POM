const { log } = require("console");
const { link } = require("fs");

exports.Homepagecopy = class Homepagecopy
{
constructor(page)
{
    //this.page = page
    //this.homepageTab = "//li[@class='nav-item active']//a[@class='nav-link']";
    //this.contactTab = "[data-target='#exampleModal']";
    //this.contactEmail ="#recipient-email";
    //this.contactname ="#recipient-name";
    //this.messageText ="#message-text";
    //this.sendMessage ="button[onclick='send()']";
    ////this.aboutUs = "[data-target='#videoModal']";
    //this.playVideo ="[class='vjs-big-play-button']";
   // this.closeButton = "div[id='videoModal'] div[class='modal-footer'] button"
    //this.homeProduct = ".card-title"
    //this.ClickonProduct = "[class=hrefch]"
    //this.addToCartButton = "[onclick='addToCart(1)'']"
   //this.AddCategory = "//div[@id='contcont']//a[2]"
   //this.AddProductOnCart = "(//a[@href='prod.html?idp_=2']) [1]"
   //this. AddCartPorduct = "[class='btn btn-success btn-lg']"
//========================================================================================================================
this.page = page
this.homepageTab = "//li[@class='nav-item active']//a[@class='nav-link']";
this.AddCategory = "//div[@id='contcont']//a[2]"
this.AddProductOnCart = "(//a[@href='prod.html?idp_=2']) [1]"
this. AddCartPorduct = "[class='btn btn-success btn-lg']"





}
// Click on the Home tab
async gotoHomePage()
{
await this.page.locator(this.homepageTab).click();

}



}


