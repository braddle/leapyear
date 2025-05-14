import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let featureFlag = false

Given('the leap year calculator feature flag is off', function () {
    featureFlag = false;
});

When('I check the home page', function () {
    cy.visit("/")
});

Then("I see that the Leap Year Calculator is Coming Soon", function () {
    cy.contains('h1', 'Leap Year Calculator');
    cy.contains('h2', 'Coming Soon');;
});
