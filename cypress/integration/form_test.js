describe('New User Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsBox = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]')

    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Elements are showing?', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsBox().should('exist');
        submitBtn().should('exist');
    })

    describe('Inputs can be filled in from empty?', () => {
        it('Inputs can be filled in?', () => {
            nameInput()
                .should('have.value', '')
                .type('Bryce')
                .should('have.value', 'Bryce')
            emailInput()
                .should('have.value', '')
                .type('Bryce@gmail.com')
                .should('have.value', 'Bryce@gmail.com')
            passwordInput()
                .should('have.value', '')
                .type('Hello123!')
                .should('have.value', 'Hello123!')
            termsBox()
                .check()
                .uncheck()
        })

        it('Submit button starts out disabled?', () => {
            submitBtn().should('be.disabled');
        })

        it('Submit button enables when all fields are filled?', () => {
            nameInput()
                .type('Mason')
            emailInput()
                .type('Mason@gmail.com')
            passwordInput()
                .type('Hello123!')
            termsBox()
                .check()
            submitBtn().should('not.be.disabled')
        })
    })

    describe('Adding a new user', () => {
        it('Can submit a new user?', () => {
            nameInput()
                .type('Taylar')
            emailInput()
                .type('Taylar@gmail.com')
            passwordInput()
                .type('Hello123!')
            termsBox()
                .check()
            submitBtn()
                .click()
            cy.contains('Taylar')
            cy.contains('Taylar@gmail.com')
            cy.contains('Hello123!')
        })
    })

})