const { element, protractor, browser } = require("protractor");
const obj_filesync = require('fs');

let json_rawdata = obj_filesync.readFileSync("../testdata/testdata.json")
let json_parseddata = JSON.parse(json_rawdata)

class review_page {

    constructor() {
        this.insuranceType_dropdown = element(by.xpath("//div[@class='dropdown second']//span[1]"));
        this.healthInsurance_text = element(by.cssContainingText('li','Health Insurance'));
        this.writeYourReview_textarea = element(by.xpath("//textarea[@placeholder='Write your review...']"))
        this.submit_button = element(by.xpath("//div[text()=' Submit ']"))

        this.EC = protractor.ExpectedConditions;
    }

    selectInsuranceType() {
        browser.wait(this.EC.presenceOf(this.insuranceType_dropdown),5000,"User not navigated to Review Page")
        this.insuranceType_dropdown.click();
        browser.manage().timeouts().implicitlyWait(3000);
        this.healthInsurance_text.click();
        this.writeYourReview_textarea.sendKeys(json_parseddata.reviewpage.reviewcomment);
        this.submit_button.click()
    }

}

exports.obj_review_page = review_page
