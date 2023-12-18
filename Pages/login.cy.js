export class LoginPage{

loginPage_textBox_Username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
loginPage_textBox_Password=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
loginPage_buttonClick_loginButton='.oxd-button'
enterUserName(username){

    cy.get(this.loginPage_textBox_Username).type(username)

}

enterPassword(password)
{
    cy.get(this.loginPage_textBox_Password).type(password)

}

clickLogin()
{

    cy.get(this.loginPage_buttonClick_loginButton).click()

}

}