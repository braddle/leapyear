Feature: Leap Year Calculator

    Scenario: The one where the leap year calculator is not ready
        Given the leap year calculator feature flag is off
        When I check the home page
        Then I see that the Leap Year Calculator is Coming Soon
