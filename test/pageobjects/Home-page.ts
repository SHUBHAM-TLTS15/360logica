import basePage from "./basePage";


class HomePage extends basePage {
    welcomeText = "Enhancing Customer Experience ";
    baseUrl = "https://www.360logica.com/";

    get ribbonTabs() {
        return ['Solutions', 'Frameworks', 'Resources', 'About Us', 'Contact', 'Saksoft Group'];
    };

    //locators


    get companyLogo() {
        return $("a > img.fusion-sticky-logo");
    }

    get homePageText() {
        return $("h1.title-anim");
    };

    ribbonItems(menuName: string) {
        return $$("//ul[@id='menu-main-menu']/li//span[text()='" + menuName + "']");
    };


    get slideBar(){
        return $("a.fusion-icon-sliding-bar");
    }
    get xCloseBtn() {
        return $("a.fusion-sb-close");
    }


    //Actions
    
    async verifyHomePage() {
        await expect(this.companyLogo).toBeDisplayed();
        await expect(this.homePageText).toBeDisplayed();
        await expect(this.homePageText).toHaveTextContaining(this.welcomeText);
        await expect(browser.getUrl).toHaveUrl(this.baseUrl);

    };
    async mainMenuItems() {
        for (let i = 0; i < this.ribbonTabs.length; i++) {
            await expect(this.ribbonItems(this.ribbonTabs[i])).toBeDisplayed();
        }
    };

    async subMenuItems(){
        
    }

    async verifySlidingBar() {
        await expect(this.xCloseBtn).toBeDisplayed();
        await expect(this.xCloseBtn).toBeClickable();
        await (await this.xCloseBtn).click();
    }

}
export default new HomePage();