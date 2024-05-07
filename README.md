


Tool/Framework used:

1.POM 
2. MOCHA
3. Git workflow
4. Parameterized tests
5. Prallel tests
6. mochawesome reports

### Test Scenarios

#### Scenario 1: User Signup and Checkout

1. Navigate to the website.
2. Click on the "Register" link.
3. Fill in valid information for a new user.
4. Verify successful registration and redirection to the homepage.
5. Log in with the newly created user credentials.
6. Add a product to the shopping cart.
7. Proceed to the checkout process.
8. Verify the checkout process steps: Cart, Address, Shipping, Payment.
9. Fill in valid shipping information.
10. Choose a shipping method.
11. Select a payment method.
12. Complete the purchase.
13. Verify successful purchase and user confirmation.

#### Scenario 2: Invalid Signup Attempt

1. Navigate to the website.
2. Click on the "Register" link.
3. Fill in invalid information for a new user.
4. Verify the user is not registered, and an appropriate error message is displayed.

#### Scenario 3: Existing User Login and Checkout

1. Navigate to the website.
2. Log in with valid existing user credentials.
3. Add a product to the shopping cart.
4. Proceed to the checkout process.
5. Verify the checkout process steps: Cart, Address, Shipping, Payment.
6. Fill in valid shipping information.
7. Choose a shipping method.
8. Select a payment method.
9. Complete the purchase.
10. Verify successful purchase and user confirmation.

#### Scenario 4: Verify Cart Functionality

1. Navigate to the website.
2. Add multiple products to the shopping cart.
3. Verify correct products and quantities in the shopping cart.
4. Modify the quantity of a product.
5. Remove a product from the cart.
6. Verify the cart is updated accordingly.

### Continuous Integration

 GitHub Actions

### Test Reports

- Test reports can be found in the `/reports` directory.


Additional features:

  - Implementing parameterized tests.
  - Using environmental configurations.
  - Demonstrating knowledge of parallel test execution.

