Feature: Leap Year Calculator

    Scenario: The one where the leap year calculator is not ready
        Given the leap year calculator feature flag is off
        When I check the home page
        Then I see that the Leap Year Calculator is Coming Soon

    Scenario: The one where the year is a Typical Usual Year
        Given the leap year calculator feature flag is on
        And I am on the home page
        When I enter the year 2003
        Then the year is not a leap year 

    Scenario: The one where the year is a Typical Usual Year
        Given the leap year calculator feature flag is on
        And I am on the home page
        When I enter the year 2004
        Then the year is a leap year 
