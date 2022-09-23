import { ChainablePromiseElement } from 'webdriverio';

import Page from './basePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SlidingBar extends Page {
    
    
    //locator


    formFieldLocator(fieldName: string){
        return $("//form[@class='fusion-form fusion-form-355']//input[@id='" +fieldName+ "']");
    }
    
    btnText(buttonName: string, index: number){
        return $("//button/span[text()='" +buttonName+ "']["+index+ "]");
    }
    
    

//actions

/**
    * 
    * @param fieldName
    * @param enterName  
    */
    async formFieldName(fieldName: string, enterName: string){
        await expect(await this.formFieldLocator(fieldName)).toBeDisplayed;
        await expect(await this.formFieldLocator(fieldName)).toBeClickable;
        await this.formFieldLocator(fieldName).clearValue();
        await (await this.formFieldLocator(fieldName)).addValue(enterName);
    }

    /**
    * 
    * @param buttonName
    * @param index  
    */
    async buttonByText(buttonName: string, index?: number){
        await expect(this.btnText(buttonName,index)).toBeDisabled;
        await expect(this.btnText(buttonName,index)).toBeClickable;
        // (await (this.btnText(buttonName,index))).click();
    }
    
    /**
     * define selectors using getter methods
     */
    // public get inputUsername () {
    //     return $('#username');
    // }

    // public get inputPassword () {
    //     return $('#password');
    // }

    // public get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
//     public async login (username: string, password: string) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     public open () {
//         return super.open('login');
//     }
}

export default new SlidingBar();
