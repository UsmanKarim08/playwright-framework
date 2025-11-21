

**Author**: UsmanKarim08  
**Repository**: [playwright-framework](https://github.com/UsmanKarim08/playwright-framework)  
**Framework**: Playwright + JavaScript  

A robust end-to-end testing framework for automated web application testing built with Playwright.

## Current Project Structure

```
playwright-automation/
├── tests/                      # Unit & Component Tests
│   └── login.spec.js          # Login functionality tests
├── regression/                 # E2E Regression Test Suite
│   └── login-regression.spec.js # Complete user journey tests
├── screenshots/               # Auto-captured test screenshots
├── playwright-report/         # HTML test reports
├── test-results/             # Test execution results & videos
├── global-setup.js           # Global test utilities & setup
├── playwright.config.js      # Playwright configuration
└── package.json             # Project dependencies & scripts
```

##  Quick Setup

### Install Dependencies
```bash
npm install
npx playwright install
```

### Run Tests
```bash
# Run all tests
npm run tests

# Run unit tests only
npm run test:unit

# Run regression tests only  
npm run test:regression

# Run with browser visible
npm run headless
```

## 🧪 Current Test Coverage

### Unit Tests (`tests/` folder)
- **Login Page Load** - Verifies Swag Labs homepage loads correctly
- **Login Form Display** - Checks all login elements are visible
- **Valid Login** - Tests successful login with standard_user credentials
- **Invalid Login** - Verifies error handling for wrong credentials

### Regression Tests (`regression/` folder)
-  **Complete Login/Logout Flow** - Full authentication cycle
-  **E-commerce Checkout Process** - Add to cart → checkout → purchase completion

##  Target Application
- **Base URL**: https://www.saucedemo.com/
- **Test User**: standard_user / secret_sauce

##  Quick Commands

| Command | Action |
|---------|--------|
| `npm run tests` | Run all tests (unit + regression) |
| `npm run test:unit` | Run only tests in `tests/` folder |
| `npm run test:regression` | Run only tests in `regression/` folder |
| `npm run headless` | Run tests with browser visible |
| `npm run report` | Open HTML test report |

## 🛠️ Global Test Utilities

This project includes global helper functions available in all tests:

```javascript
// Auto-imported via global-setup.js
TestUtils.takeScreenshot(page, 'name');
TestUtils.fillAndVerify(page, selector, value);
TestUtils.navigateAndVerify(page, url);
TestUtils.logTestStep(number, description);
```

##  Test Data Generation

Uses **@faker-js/faker** for realistic test data:
```javascript
const testData = TestUtils.generateTestData();
// Generates: fullName, email, password, address, phone, etc.
```

##  Framework Features

-  **Multi-folder organization** (unit vs regression)
-  **Global setup** with shared utilities
-  **Faker.js integration** for dynamic test data
-  **Screenshot capture** for test verification
-  **HTML & Allure reporting**
-  **Headless/headed mode** support
-  **CI/CD ready** configuration

##  Test Execution Results

Recent test runs:
- **Unit Tests**:  Passing
- **Regression Tests**:  2/2 tests passed (5.3s)
- **Total Coverage**: Login functionality + E2E workflows

## 🐛 Troubleshooting

### Common Issues:
1. **Browser not installed**: Run `npx playwright install`
2. **Tests failing**: Check if https://www.saucedemo.com/ is accessible
3. **Timeout errors**: Increase timeout in playwright.config.js

##  Adding New Tests

### For Unit Tests:
```bash
# Add files to tests/ folder
# Example: tests/new-feature.spec.js
```

### For Regression Tests:
```bash
# Add files to regression/ folder  
# Example: regression/checkout-regression.spec.js
```

## Development Status

**Current Status**:  Framework Setup Complete  
**Next Steps**: 
- [ ] Add more unit test scenarios
- [ ] Expand regression test coverage
- [ ] Add API testing capabilities
- [ ] Implement data-driven testing
