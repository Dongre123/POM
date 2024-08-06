const { log } = require("console");
const { link } = require("fs");

exports.Homepage = class Homepage
{
constructor(page)
{
    this.page = page
    this.homepageTab = "//li[@class='nav-item active']//a[@class='nav-link']";
    this.contactTab = "[data-target='#exampleModal']";
    this.contactEmail ="#recipient-email";
    this.contactname ="#recipient-name";
    this.messageText ="#message-text";
    this.sendMessage ="button[onclick='send()']";
    ////this.aboutUs = "[data-target='#videoModal']";
    //this.playVideo ="[class='vjs-big-play-button']";
    this.closeButton = "div[id='videoModal'] div[class='modal-footer'] button"
    this.homeProduct = ".card-title"
    //this.ClickonProduct = "[class=hrefch]"
    //this.addToCartButton = "[onclick='addToCart(1)'']"
   this.AddCategory = "//div[@id='contcont']//a[2]"
   this.AddProductOnCart = "(//a[@href='prod.html?idp_=2']) [1]"
   this. AddCartPorduct = "[class='btn btn-success btn-lg']"
}


//===================================================================== Home tab
async gotoHomePage()
       
        {

            await this.page.locator( this.homepageTab).click();

    
        }
        //================================================================== Add Product in Cart

         async AddToCategory()
        {
          await this.page.locator(this.AddCategory).click();
       

        }
        //================================================================== Add product using loop


        
        async AddToProductTocart(ProductElement)

        
        {

        this.ProductTitle = await this.page.locator(this.homeProduct).allTextContents();
        console.log("Title:", this.ProductTitle);

          //const productTitle = await this.page.locator(this.homeProduct).allTextContents();
          //console.log("Title",productTitle)
         // const HomePageProductCount = await this.page.locator(this.homeProduct).count();


          for(let i=0;  i<this.ProductTitle ;i++ )
         {

            if(await this.ProductTitle.nth(i).textContent() === await ProductElement) 
            {

              await this.ProductTitle.nth(i).click();
              console.log(this.ProductTitle.nth(i));
            }
        
          }

        }
        //================================================================== Click on the mobile to cart

        async PutProductonCart()
        {

          await this.page.locator(this.AddProductOnCart).click();
        }

       //================================================================== Product in the cart successfully
        async AddCart()
        {

          await this.page.locator(this. AddCartPorduct).click();
          await this.page.locator(this.homepageTab).click();
        }

        //==================================================================





          async gotoContactTab(ContactEmail, ContactName, MessageText) 
    
       {
            await this.page.locator(this.contactTab).click();
            await this.page.locator(this.contactEmail).fill(ContactEmail);
            await this.page.locator(this.contactname).fill(ContactName);
            await this.page.locator(this.messageText).fill(MessageText);
            await this.page.locator(this.sendMessage).click();
            
            
            


        }
        //==================================================================


           //// async gotoAboutUsTab()
       /////{

            ////await this.page.locator(this.aboutUs).click();
           //await this.page.locator(this.playVideo).click();
           ///await this.page.locator(this.closeButton).click();
        //await this.page.getByRole('alert', {link: 'Delete'}).click();
            
          
       //// }

          
        

}






