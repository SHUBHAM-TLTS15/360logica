
import BasePage from "../pageobjects/basePage";
import homePage from "../pageobjects/Home-page";
import slidingbar from "../pageobjects/sliding-bar-page";

describe("Verify sliding bar element and actions", async function(){
    
    

    it("Verify sliding bar is displayed", async => {
        homePage.verifySlidingBar();
        slidingbar.formFieldName('name','demo_name');
        slidingbar.formFieldName('email','abc@email.com');
        slidingbar.formFieldName('phone','1234567890');
        slidingbar.formFieldName('website','www.demowebsite.com');
        slidingbar.formFieldName('message','Your demo text here');
        // browser.pause(5000);
        // slidingbar.buttonByText('Send message',2);
        
    });
    
    // it("Verify welcome page logo and title text", async => {
    //      homePage.verifyHomePage();
    // });
    // it("Verify main menu items displayed", async => {
    //     homePage.mainMenuItems();
    // });
    
});