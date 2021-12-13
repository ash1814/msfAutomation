/// <reference types="cypress" />



describe("navigate to Unicat Homepage", () =>
{
	it('Route Check', function()
{
	
	cy.visit('https://unicat.msf.org/')



})

it("Should check Subcatalogue", function ()
	{
		
		cy.get('#top_menu_collapse > #top_menu > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item > span').select(cy.get('#top_menu_collapse > #top_menu > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item > span'))
			.should('exist');

	});


	




});

