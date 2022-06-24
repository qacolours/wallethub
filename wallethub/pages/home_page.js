const { element, by, browser, ExpectedConditions, protractor } = require("protractor");

class home_page {

    constructor() {
        this.review_button = element(by.xpath("//a[@class='nav-link semi-bold-font-weight'][@href='https://wallethub.com/profile/test-insurance-company-13732055i#reviews']"));
        this.first_star_button = element(by.xpath("//review-star[@class='rvs-svg']//div[@class='rating-box-wrapper']//*[name()='svg'][1]"));
        this.second_star_button = element(by.xpath("//review-star[@class='rvs-svg']//div[@class='rating-box-wrapper']//*[name()='svg'][2]"));
        this.third_star_button = element(by.xpath("//review-star[@class='rvs-svg']//div[@class='rating-box-wrapper']//*[name()='svg'][3]"));
        this.fourth_star_button = element(by.xpath("//review-star[@class='rvs-svg']//div[@class='rating-box-wrapper']//*[name()='svg'][4]"));

        this.EC = protractor.ExpectedConditions;
    }

    clickReviewButton() {
        expect(this.review_button.isDisplayed()).toBe(true);
        if (expect(this.review_button.isDisplayed())) {
            console.log("Button is displayed properly");
        } else {
            console.log("Button is not displayed properly");
        }
        
        browser.wait(this.EC.elementToBeClickable(this.review_button),5000,"Review button is not clickable");
        this.review_button.click()
    }

    navigateToProvideRating() {
        browser.actions().mouseMove(this.first_star_button.getWebElement()).perform();
        browser.actions().mouseMove(this.second_star_button.getWebElement()).perform();
        browser.actions().mouseMove(this.third_star_button.getWebElement()).perform();
        browser.actions().mouseMove(this.fourth_star_button.getWebElement()).perform();

        this.fourth_star_button.click();
        browser.sleep(5000)
    }

}

exports.obj_home_page = home_page