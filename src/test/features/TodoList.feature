Feature:Gayathri_10JUL2025_Verify the To Do List Functionality in Doctor Login
  Background:
    Given Doctor is logged in to the Smart Hospital system
  Scenario: Verify the doctor can add task in to do lists
    When the doctor clicks the calendar
    And clicks the plus icon to add a task
    And fills in the task details
      | task                           | date      |
      | Complete the eye checkup       | 23/08/25  |
    Then the task should be visible in the To Do List
