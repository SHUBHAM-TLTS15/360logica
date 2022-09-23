import BasePage from "../pageobjects/basePage";
import homePage from "../pageobjects/Home-page";

describe("Verify welcome page elements", async function(){
    
    
    it("Verify welcome page logo and title text", async => {
        homePage.verifyHomePage();
    });
    it("Verify main menu items displayed", async => {
        homePage.mainMenuItems();
    });
    it("Verify sliding bar displayed", async => {
        homePage.verifySlidingBar();
    });
    
});