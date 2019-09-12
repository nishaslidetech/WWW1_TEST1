$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/CO_checkout.feature");
formatter.feature({
  "line": 2,
  "name": "2CO Checkout",
  "description": "",
  "id": "2co-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@2CO_checkout"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test 2CO checkout",
  "description": "",
  "id": "2co-checkout;test-2co-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Website Home Page 2CO",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to sign up page 2CO",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user create a new ac count 2CO",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is redirected to pricing page and choose a plan to pay 2CO",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is redirected to checkout page 2CO",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user proceed to pay with 2CO 2CO",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "paypal popup appears and user navigates back to my account 2CO",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user deleted the account 2CO",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "co_checkout.user_is_already_on_Website_Home_Page_CO(int)"
});
formatter.result({
  "duration": 4629404000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "co_checkout.user_navigates_to_sign_up_page_CO(int)"
});
formatter.result({
  "duration": 14889319600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "co_checkout.user_create_a_new_ac_count_CO(int)"
});
formatter.result({
  "duration": 35052885100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 60
    }
  ],
  "location": "co_checkout.user_is_redirected_to_pricing_page_and_choose_a_plan_to_pay_CO(int)"
});
formatter.result({
  "duration": 9774654200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "co_checkout.user_is_redirected_to_checkout_page_CO(int)"
});
formatter.result({
  "duration": 1999946300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "co_checkout.user_proceed_to_pay_with_CO_CO(int,int)"
});
formatter.result({
  "duration": 12204029300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 59
    }
  ],
  "location": "co_checkout.paypal_popup_appears_and_user_navigates_back_to_my_account_CO(int)"
});
formatter.result({
  "duration": 10627721100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "co_checkout.user_deleted_the_account_CO(int)"
});
formatter.result({
  "duration": 23697252500,
  "status": "passed"
});
formatter.uri("src/test/java/Features/Sign_in_existing_free_user.feature");
formatter.feature({
  "line": 2,
  "name": "Sign in with existing free user",
  "description": "",
  "id": "sign-in-with-existing-free-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sign_In_Existing_Free_User"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test Sign in existing free user",
  "description": "",
  "id": "sign-in-with-existing-free-user;test-sign-in-existing-free-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on sign in page efu",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter email and password efu",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login button efu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user go to free ppts page efu",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user download a free ppt",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Logout from Website efu",
  "keyword": "Then "
});
formatter.match({
  "location": "Sign_in_existing_free_user.user_is_already_on_sign_in_page_efu()"
});
formatter.result({
  "duration": 5775904700,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_free_user.user_enter_email_and_password_efu()"
});
formatter.result({
  "duration": 267000800,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_free_user.user_click_on_login_button_efu()"
});
formatter.result({
  "duration": 2148730300,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_free_user.user_go_to_free_ppts_page_efu()"
});
formatter.result({
  "duration": 4027541800,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_free_user.user_download_a_free_ppt()"
});
formatter.result({
  "duration": 10258423600,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_paid_user.user_Logout_from_Website_efu()"
});
formatter.result({
  "duration": 12973227800,
  "status": "passed"
});
formatter.uri("src/test/java/Features/Sign_in_existing_paid_user.feature");
formatter.feature({
  "line": 2,
  "name": "Sign in with existing paid user",
  "description": "",
  "id": "sign-in-with-existing-paid-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sign_In_Exicting_Paid_user"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test Sign in existing paid user",
  "description": "",
  "id": "sign-in-with-existing-paid-user;test-sign-in-existing-paid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on sign in page epu",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter email and password epu",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login button epu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user navigate to complete deck from account dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user download any product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Logout from Website epu",
  "keyword": "Then "
});
formatter.match({
  "location": "Sign_in_existing_paid_user.user_is_already_on_sign_in_page_epu()"
});
formatter.result({
  "duration": 14967135200,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_paid_user.user_enter_email_and_password_epu()"
});
formatter.result({
  "duration": 264028800,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_paid_user.user_click_on_login_button_epu()"
});
formatter.result({
  "duration": 3494118600,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_paid_user.user_navigate_to_complete_deck_from_account_dashboard_page()"
});
formatter.result({
  "duration": 17094255500,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_paid_user.user_download_any_product()"
});
formatter.result({
  "duration": 4084202100,
  "status": "passed"
});
formatter.match({
  "location": "Sign_in_existing_free_user.user_Logout_from_Website_epu()"
});
formatter.result({
  "duration": 14505852400,
  "status": "passed"
});
formatter.uri("src/test/java/Features/Sign_up_incorrect_data.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up with incorrect data",
  "description": "",
  "id": "sign-up-with-incorrect-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sign_up_Incorrect_data"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test Sign up with Incorrect Data",
  "description": "",
  "id": "sign-up-with-incorrect-data;test-sign-up-with-incorrect-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter incorrect data in the sign sig up form",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "form is error message is displayed and form is not submitted",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter new email to sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter firstname and lastname to sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter password and confirm password to sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter captcha to sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "check checkbox to sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on sign up button to sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user is on pricing page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user go to free ppts page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user download a free product",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user delete the new account created",
  "keyword": "Then "
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_is_already_on_sign_up_page()"
});
formatter.result({
  "duration": 16313832600,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_enter_incorrect_data_in_the_sign_sig_up_form()"
});
formatter.result({
  "duration": 28742503600,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.form_is_error_message_is_displayed_and_form_is_not_submitted()"
});
formatter.result({
  "duration": 22312784500,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.enter_new_email_to_sign_up()"
});
formatter.result({
  "duration": 6211437300,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_enter_firstname_and_lastname_to_sign_up()"
});
formatter.result({
  "duration": 8227731100,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_enter_password_and_confirm_password_to_sign_up()"
});
formatter.result({
  "duration": 8249265700,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_enter_captcha_to_sign_up()"
});
formatter.result({
  "duration": 4082273000,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.check_checkbox_to_sign_up()"
});
formatter.result({
  "duration": 2009730800,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_click_on_sign_up_button_to_sign_up()"
});
formatter.result({
  "duration": 5617430400,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_is_on_pricing_page()"
});
formatter.result({
  "duration": 3000735100,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_go_to_free_ppts_page()"
});
formatter.result({
  "duration": 4635092000,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_download_a_free_product()"
});
formatter.result({
  "duration": 11726314100,
  "status": "passed"
});
formatter.match({
  "location": "Sign_up_incorrect_data.user_delete_the_new_account_created()"
});
formatter.result({
  "duration": 21232488600,
  "status": "passed"
});
formatter.uri("src/test/java/Features/paypal_checkout.feature");
formatter.feature({
  "line": 2,
  "name": "Paypal Checkout",
  "description": "",
  "id": "paypal-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@paypal_checkout"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test paypal checkout",
  "description": "",
  "id": "paypal-checkout;test-paypal-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Website Home Page pp",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to sign up page pp",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user create a new ac count pp",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is redirected to pricing page and choose a plan to pay pp",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is redirected to checkout page pp",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user proceed to pay with paypal pp",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "paypal popup appears and user navigates back to my account pp",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user deleted the account pp",
  "keyword": "Then "
});
formatter.match({
  "location": "paypal_checkout.user_is_already_on_Website_Home_Page_pp()"
});
formatter.result({
  "duration": 14713353300,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.user_navigates_to_sign_up_page_pp()"
});
formatter.result({
  "duration": 6721969800,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.user_create_a_new_ac_count_pp()"
});
formatter.result({
  "duration": 34442964900,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.user_is_redirected_to_pricing_page_and_choose_a_plan_to_pay_pp()"
});
formatter.result({
  "duration": 9548768800,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.user_is_redirected_to_checkout_page_pp()"
});
formatter.result({
  "duration": 1999940600,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.user_proceed_to_pay_with_paypal_pp()"
});
formatter.result({
  "duration": 7219312900,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.paypal_popup_appears_and_user_navigates_back_to_my_account_pp()"
});
formatter.result({
  "duration": 14489185200,
  "status": "passed"
});
formatter.match({
  "location": "paypal_checkout.user_deleted_the_account_pp()"
});
formatter.result({
  "duration": 15430191900,
  "status": "passed"
});
formatter.uri("src/test/java/Features/sign_up_correct_data.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up with correct data",
  "description": "",
  "id": "sign-up-with-correct-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sign_Up_Correct_Data"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Test Sign up with correct Data",
  "description": "",
  "id": "sign-up-with-correct-data;test-sign-up-with-correct-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on sign up page cd",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter new email to sign up cd",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter firstname and lastname to sign up cd",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter password and confirm password to sign up cd",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter captcha to sign up cd",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check checkbox to sign up cd",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on sign up button to sign up cd",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user lands on pricing page and then user go to free ppts page cd",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user download a free product cd",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user delete the new account created cd",
  "keyword": "Then "
});
formatter.match({
  "location": "sign_up_correct_data.user_is_already_on_sign_up_page_cd()"
});
formatter.result({
  "duration": 20517416800,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.enter_new_email_to_sign_up_cd()"
});
formatter.result({
  "duration": 6205267700,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_enter_firstname_and_lastname_to_sign_up_cd()"
});
formatter.result({
  "duration": 8174993400,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_enter_password_and_confirm_password_to_sign_up_cd()"
});
formatter.result({
  "duration": 8246750600,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_enter_captcha_to_sign_up_cd()"
});
formatter.result({
  "duration": 2076267800,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.check_checkbox_to_sign_up_cd()"
});
formatter.result({
  "duration": 1999509000,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_click_on_sign_up_button_to_sign_up_cd()"
});
formatter.result({
  "duration": 7999298300,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_lands_on_pricing_page_and_then_user_go_to_free_ppts_page_cd()"
});
formatter.result({
  "duration": 5638250100,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_download_a_free_product_cd()"
});
formatter.result({
  "duration": 12878313500,
  "status": "passed"
});
formatter.match({
  "location": "sign_up_correct_data.user_delete_the_new_account_created_cd()"
});
formatter.result({
  "duration": 13396894800,
  "status": "passed"
});
});