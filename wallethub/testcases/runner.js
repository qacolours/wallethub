const { browser } = require("protractor");
const { obj_home_page } = require("../pages/home_page");
const { obj_review_page } = require("../pages/review_page");
const { obj_login_page } = require("../pages/login_page");

const const_home_page = new obj_home_page()
const const_review_page = new obj_review_page()
const const_login_page = new obj_login_page()

describe("Rate insurance service", ()=> {

    beforeEach(() => {
        browser.get("https://wallethub.com/profile/13732055i");
        browser.manage().window().maximize();
    });

    it("TC001 - user should navigate till rate section", ()=> {
        const_home_page.clickReviewButton()
        const_home_page.navigateToProvideRating()
        const_review_page.selectInsuranceType()
    });

})