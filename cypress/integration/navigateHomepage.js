/// <reference types="cypress" />



describe("navigate to Unicat Homepage", () =>
{
	it('Route Check', function()
{
	
	cy.visit('https://unicat.msf.org/')



})

it("Should check Subcatalogue", function ()
	{
		
		cy.get('.nav-link dropdown-toggle')
			.invoke('text')
			.should('exist');

	});


	




});

