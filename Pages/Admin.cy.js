export class Admin{

admin_tab=':nth-child(1) > .oxd-main-menu-item'

verifyAdminTab(){

    cy.get(this.admin_tab).click()
        cy.should('contain','Admin')
    

}

}