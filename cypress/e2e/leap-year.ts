import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let featureFlag = false

Given('the leap year calculator feature flag is off', function () {
	featureFlag = false;
});

Given("the leap year calculator feature flag is on", function () {
	featureFlag = true;
});

When('I check the home page', function () {
	goToHomepage()
});

Given('I am on the home page', function () {
	goToHomepage();
});

When("I enter the year {int}", function (year: number) {
	cy.get("#year_field").type(String(year));
	cy.get('form.leap-year-form').submit();
});

Then("I see that the Leap Year Calculator is Coming Soon", function () {
	cy.contains('h1', 'Leap Year Calculator');
	cy.contains('h2', 'Coming Soon');
});

Then("the year is not a leap year", function () {
	cy.contains('h2', 'is not a leap year');
});

Then("the year is a leap year", function () {
	cy.contains('h2', 'is a leap year');
});

function goToHomepage() {
	let url = "/";
	if (featureFlag) {
    	url += "?leapYearCalculator=on";
	}

	cy.visit(url);
}
