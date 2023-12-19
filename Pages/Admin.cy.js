export class Admin{

admin_tab=':nth-child(1) > .oxd-main-menu-item'
addUser='.orangehrm-header-container > .oxd-button'

verifyAdminTab(){

    cy.get(this.admin_tab).click()
        cy.should('contain','Admin')
    

}

adduser()
{

cy.get(this.addUser).click()
cy.should('contain','Add')
}
}