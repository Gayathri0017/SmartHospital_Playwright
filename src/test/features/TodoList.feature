Feature: Verify To Do List Functionality in Doctor Login
  Background:
    Given Doctor is logged in to the Smart Hospital system
  Scenario Outline: Add a single task to the To Do List
    When the doctor clicks the calendar
    And clicks the plus icon to add a task
    And fills in the task "<task>" with date "<date>"
    Then the "<expectedResult>" should be visible in the To Do List

    Examples:
      | task                       | date        |expectedResult           |
      | Complete the eye checkup   | 23/08/2025  | Complete the eye checkup|
      | Ready with prescription    | 25/08/2025  | Ready with prescription |
      | Complete the operation     |             | Date field is required  |
      |                            | 25/08/2025  | Title field is required |
