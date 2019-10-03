$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Email Login",
  "description": "",
  "id": "email-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@www1_login"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test Email Login",
  "description": "",
  "id": "email-login;test-email-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open the Website URL i.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on Sign In i.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter email and password i.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on login button i.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "donwload a product from complete deck i.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Logout from Website i.",
  "keyword": "Then "
});
formatter.match({
  "location": "login_i.open_the_Website_URL_i()"
});
formatter.result({
  "duration": 16159920700,
  "status": "passed"
});
formatter.match({
  "location": "login_i.click_on_Sign_In_i()"
});
formatter.result({
  "duration": 22155609200,
  "status": "passed"
});
formatter.match({
  "location": "login_i.enter_email_and_password_i()"
});
formatter.result({
  "duration": 4249677500,
  "status": "passed"
});
formatter.match({
  "location": "login_i.click_on_login_button_i()"
});
formatter.result({
  "duration": 25952648800,
  "status": "passed"
});
formatter.match({
  "location": "login_i.donwload_a_product_from_complete_deck_i()"
});
formatter.result({
  "duration": 121112093800,
  "status": "passed"
});
formatter.match({
  "location": "login_i.logout_from_Website_i()"
});
formatter.result({
  "duration": 10541435900,
  "status": "passed"
});
formatter.uri("src/test/java/Features/sign_up.feature");
formatter.feature({
  "line": 2,
  "name": "Email Sign Up",
  "description": "",
  "id": "email-sign-up",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sign_Up"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test Email Sign Up",
  "description": "",
  "id": "email-sign-up;test-email-sign-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open the Website URL su.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter new email su.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter firstname and lastname su.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter password and confirm password su.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter captcha su.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on sign up button su.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "download a free product su.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "delete the new account created su.",
  "keyword": "Then "
});
formatter.match({
  "location": "sign_up.open_the_Website_URL_su()"
});
formatter.result({
  "duration": 39462677900,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.enter_new_email_su()"
});
formatter.result({
  "duration": 12207931100,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.enter_firstname_and_lastname_su()"
});
formatter.result({
  "duration": 16193966600,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.enter_password_and_confirm_password_su()"
});
formatter.result({
  "duration": 16269361600,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.enter_captcha_su()"
});
formatter.result({
  "duration": 4089604800,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.click_on_sign_up_button_su()"
});
formatter.result({
  "duration": 58905113500,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.download_a_free_product_su()"
});
formatter.result({
  "duration": 231985843400,
  "status": "passed"
});
formatter.match({
  "location": "sign_up.delete_the_new_account_created_su()"
});
formatter.result({
  "duration": 93765969900,
  "status": "passed"
});
});