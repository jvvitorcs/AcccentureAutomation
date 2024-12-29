/************************
This class contains methods to interact with the Browser Windows section of the demoQA app.
It provides functionality to navigate to the Browser Windows page, open a new browser window, 
and check the text on the new window.
************************/

class BrowserWindowsPage {
    navigateToBrowserWindow() {
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
    }
    openNewWindow() {
        let newWindowUrl;  
        cy.on('window:open', (win) => {
          newWindowUrl = win.location.href
        })
        cy.window().then((win) => {
          cy.stub(win, 'open').callsFake((url) => {
            if (!url.startsWith('http')) {
              url = `${win.location.origin}${url}`
            }
            newWindowUrl = url; 
            win.location.href = url;
          })
        })
        cy.get('#windowButton').click()
        cy.wrap(null).should(() => {
            if (!newWindowUrl) {
                throw new Error('A URL da nova janela não foi capturada')
            }
        }).then(() => {
            cy.visit(newWindowUrl)
        })
    }
    checkTextOnNewWindow(){
        cy.get('#sampleHeading').should('contain.text', 'This is a sample page')    
        cy.screenshotTest()
        cy.go('back')
    }    
}
export default new BrowserWindowsPage()