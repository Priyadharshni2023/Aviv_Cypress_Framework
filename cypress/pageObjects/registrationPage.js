class registrationPage{

    elements = { 
         
         registrationLink : ()=>cy.get('.ico-register'),  
         genderMaleRadioButton : () => cy.get('#gender-male'),
         genderFemaleRadioButton : () => cy.get('#gender-female'),
         firstNameTextField : () => cy.get('#FirstName'),
         lastNameTextField : () => cy.get('#LastName'),
         dateOfDOBDropDown :()=> cy.get('[name="DateOfBirthDay"]'),
         monthOfDOBDropDown :()=> cy.get('[name="DateOfBirthMonth"]'),
         yearOfDOBDropDown : ()=> cy.get('[name="DateOfBirthYear"]'),
         emailTextButton : () => cy.get('#Email'),
         companyNameTextField : () => cy.get('#Company'),
         newsLetterCheckBox : ()=> cy.get('#Newsletter'),
         passwordField : () => cy.get('#Password'),
         confirmpasswordField : () => cy.get('#ConfirmPassword'),
         registerButton : () => cy.get('#register-button')
     }

     enterPersonalDetails(gender, fName, lName, dayInDOB, monthInDOB, yearInDOB, email, companyName, newsLetter , password){

     }


  }
  
  export default registrationPage;