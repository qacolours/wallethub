const { browser } = require("protractor")
const obj_filesync = require('fs');

//let json_rawdata = obj_filesync.readFileSync(".\\..\\testdata\\testdata.json")
let json_rawdata = obj_filesync.readFileSync("C:\\protractor\\projects\\wallethub\\testdata\\testdata.json")
let json_parseddata = JSON.parse(json_rawdata)

class login_page {

    constructor() {
        this.login_tab = element(by.xpath("//li[@ng-if='!isPWA']/following-sibling::li[1]"))
        this.emailaddress_textbox = element(by.id("em-ipt"))
        this.password = element(by.id("pw1-ipt"))
        this.login_button = element(by.xpath("//button[@ng-class='{ disabled : noCookies }']"))
    }

    navigateToLoginTab() {
        browser.wait(ExpectedConditions.presenceOf(this.login_tab),30000,"User not navigated to Login page")
        
        this.login_tab.click();

        this.emailaddress_textbox.sendKeys(testjson_parseddataData.loginpage.emailaddress);
        this.password.sendKeys(json_parseddata.loginpage.password);

        browser.manage().timeouts().implicitlyWait(3000)
        this.login_button.click();
    }
}

exports.obj_login_page = login_page