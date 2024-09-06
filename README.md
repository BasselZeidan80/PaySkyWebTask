# Cypress User Registration and Shopping Test Suite

## Project Overview
This project automates the testing of user registration, login, product selection, and checkout flow for an e-commerce site using Cypress. The suite integrates Allure for detailed reporting and uses dynamic data for user information.

## Tools and Frameworks Used
- **Cypress**: For automating the end-to-end testing of the web application.
- **Allure**: Integrated with Cypress for reporting test steps and results.
- **Node.js**: The underlying JavaScript runtime.
- **Git**: Version control for code management.
- **Mocha**: Test framework built into Cypress for structuring tests.

## Installation and Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/BasselZeidan80/PaySkyWebTask.git
   cd PaySkyWebTask



Install Dependencies: Navigate to the project directory and run the following command to install the necessary Node.js dependencies:
npm install

Running Tests: To execute the Cypress tests:
npm test

Generating Allure Report: To generate a test report after executing the tests:
npm run allure:report


Opening Allure Report: To open and view the generated Allure report in the browser:
npm run allure:open



Test Execution Process
The test suite runs registration and shopping tests for multiple users. Each iteration runs independently, clearing cookies and local storage between tests.

Key Scripts in package.json
The project’s package.json contains useful commands for running tests and generating reports:

"test": Runs Cypress tests in headed mode.
"allure:report": Generates an Allure report from the test results.
"allure:open": Opens the Allure report in a browser.
Project Dependencies
Cypress: Version ^13.14.2
Allure Commandline: Version ^2.30.0
Cypress Allure Plugin: Version ^2.40.2
These dependencies are installed automatically when you run npm install.

GitHub Repository Link
GitHub Repo
Conclusion
This project automates the testing of a shopping workflow on an e-commerce site and provides detailed reporting with Allure.
