import { generateStrongPassword } from '../support/utils';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../Pages/RegisterPage';

const registerPage = new RegisterPage();
const viewports = ["macbook-15", "iphone-xr", "ipad-2", "samsung-s10"];
const password = generateStrongPassword();

viewports.forEach((viewport) => {
    describe(`Create Account - Viewport: ${viewport}`, () => {
        beforeEach(() => {
            cy.viewport(viewport);
            cy.clearCookies();
            cy.clearLocalStorage();
            registerPage.registerLink();
        });

        it('should successfully create an account', () => {
            registerPage.registerFields(
            faker.company.name(), 
            faker.person.firstName(), 
            faker.person.lastName(), 
            faker.internet.email(), 
            password, 
            password, 
            '527708-5526',
            'English (United States)');
            registerPage.submitRegister('Account successfully created. Please check your email to activate your account.');
        });

        it('should fail to create an account with invalid email', () => {
            registerPage.registerFields(
                faker.company.name(), 
                faker.person.firstName(), 
                faker.person.lastName(), 
                'invalid-email@gmailcom',
                password, 
                password, 
                '527708-5526',
                'English (United States)');
            registerPage.getErrorText('Invalid email address');
        })

        it('should fail to create an account with invalid password', () => {
            registerPage.registerFields(
                faker.company.name(), 
                faker.person.firstName(), 
                faker.person.lastName(), 
                faker.internet.email(), 
                '123456',
                '123456',
                '527708-5526',
                'English (United States)');
            registerPage.getErrorText('Password must be between (8) and (72) characters and meet 3 of the following criteria: lower case letter, upper case letter, special character, number.');
        })

        it('should fail to create an account with the password does not match', () => {
            registerPage.registerFields(
                faker.company.name(), 
                faker.person.firstName(), 
                faker.person.lastName(), 
                faker.internet.email(), 
                password, 
                'invalid-password', 
                '527708-5526',
                'English (United States)');
            registerPage.getErrorText('Passwords do not match');
        })

        it('should fail to create an account with the phone number is not valid (10 digits)', () => {
            registerPage.registerFields(
                faker.company.name(), 
                faker.person.firstName(), 
                faker.person.lastName(), 
                faker.internet.email(), 
                password, 
                password, 
                '1234567890',
                'English (United States)');
            registerPage.getErrorText('Invalid phone number');
        })
        
        
    });
});