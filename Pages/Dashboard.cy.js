export class Dashboard{

    dasboard_TimeatWork=':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
    dashboard_MyActions=':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
    dashboard_QuickLaunch=':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
    dashboard_BuzzLatestPosts=':nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
    dashboard_EmployeesOnLeaveToday=':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'

    verifyDasboardTimeatWork()
    {
       cy.get(this.dasboard_TimeatWork)
       .should('contain','Time at Work')
        
    }

    verifyDashboardMyActions()
{
    cy.get(this.dashboard_MyActions)
    .should('contain','My Actions')
}

    verifyDashboardQuickLaunch()
{
cy.get(this.dashboard_QuickLaunch)
.should('contain','Quick Launch')
}

    verifyDashboardBuzzLatestPosts()
{
cy.get(this.dashboard_BuzzLatestPosts)
.should('contain','Buzz Latest Posts')
}

    verifyDashboardEmployeesOnLeaveToday()
{
cy.get(this.dashboard_EmployeesOnLeaveToday)
.should('have.class','oxd-text oxd-text--p')
}

}