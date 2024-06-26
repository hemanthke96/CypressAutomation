describe('Alert', ()=> {
    it('AlertTestMsg', ()=> {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert', (t)=>{
        expect(t).to.contains('I am a JS Alert')
    })
    cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    it('AlertConfirm', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
    
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })        
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })

    it('AlertPrompt', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('Welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
    
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Prompt')
        })        
        cy.get("#result").should('have.text', 'You clicked: Welcome')
    })
})