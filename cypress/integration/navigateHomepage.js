/// <reference types="cypress" />



describe("navigate to Unicat Homepage", () =>
{
	it('Route Check', function()
{
	
	cy.visit('https://unicat.msf.org/')



})

it("Should check Subcatalogue", function ()
	{
		
	cy.get('#top_menu_collapse > #top_menu > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item > span');
			

	});

it("Should click CoronaVirus", function ()
	{
	cy.get('#top_menu_collapse > #top_menu > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item > span').as('subBtn')
	
	cy.get('@subBtn').click({ force: true })
	

	});
	

	it('Should Click on Medical Equipment', () =>
	{
	

		cy.get('[href="/cat/category/e-medical-equipment-20371?subcat=168"]').should('be.visible');

		cy.get('[href="/cat/category/e-medical-equipment-20371?subcat=168"]').click();


		
	
	});
	
	it('Should Select  Article Filter', () =>
	{
		
		cy.get(':nth-child(3) > :nth-child(1) > .form-control').should('be.visible');
		cy.get(':nth-child(3) > :nth-child(1) > .form-control').select('Valid articles only')
		
		
	});

	it('Should Select  Validation by Operational Filter', () =>
	{
		
		cy.get(':nth-child(3) > :nth-child(2) > .form-control').should('be.visible');
		cy.get(':nth-child(3) > :nth-child(2) > .form-control').select('OCA')
		
	});

	it('Should Select Subscription by Supply Centre  ', () =>
	{
		
		cy.get(':nth-child(3) > .form-control').should('be.visible');
		cy.get(':nth-child(3) > .form-control').select('APU');	
	});

	it('Should select Subscription by Operational Centre', () => {
		cy.get(':nth-child(4) > .form-control').should('be.visible');
		cy.get(':nth-child(4) > .form-control').select('OCA')
	});





});

