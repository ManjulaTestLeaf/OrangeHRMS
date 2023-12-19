

import { LoginPage } from "./Pages/login.cy"
import { Dashboard } from "./Pages/Dashboard.cy"
import { Admin } from "./Pages/Admin.cy"

const login = new LoginPage()
const dashboard=new Dashboard()
const admin=new Admin()

describe('All Login Functions',()=>
{

   
    it.skip('Valid UserName and Password',()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   
    login.enterUserName('Admin')
    login.enterPassword('admin123')
    login.clickLogin()
   //cy.get('.oxd-brand-banner > img').click()
   cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
        .should('contain','Dashboard')
    }
    )
    it.skip('InValid UserName and Password',()=>
    {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login.enterUserName('Admin')
    login.enterPassword('admin1283')
    login.clickLogin()
    cy.get('.oxd-alert-content')
    .should('contain','Invalid credentials')
    })
})

describe('Dashboardfeature',()=>{
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.enterUserName('Admin')
        login.enterPassword('admin123')
        login.clickLogin()
    })
it('Time At Work',()=>{
    
dashboard.verifyDasboardTimeatWork()
})

it ('verifyDashboardMyActions',()=>{
    
    dashboard.verifyDashboardMyActions()
    }
    )
    

    it ('verifyDashboardQuickLaunch',()=>{
    
        dashboard.verifyDashboardQuickLaunch()
        }
        )
    
        it('verifyDashboardBuzzLatestPosts',()=>{
    
            dashboard.verifyDashboardBuzzLatestPosts()
            }
            )    

            it('verifyDashboardEmployeesOnLeaveToday',()=>{
    
                dashboard.verifyDashboardEmployeesOnLeaveToday()
                }
                )  

}


)
describe('Admin',()=>{
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.enterUserName('Admin')
        login.enterPassword('admin123')
        login.clickLogin()
    })

it.only('verifyAdmin',()=>
{

    admin.verifyAdminTab()
    admin.adduser()
}

)

}
)