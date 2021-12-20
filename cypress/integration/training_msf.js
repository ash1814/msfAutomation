/// <reference types="cypress" />



describe("navigate to Training Homepage", () =>
{
	it('Route Check', function ()
	{
	
		cy.visit('https://training.unidata.msf.org/');



	});


	it("Should login First", function ()
	{
		
		cy.get(':nth-child(4) > a').should.exist;
		cy.get(':nth-child(4) > a').click();

		cy.get('#login').type('CANDIDATE');

		cy.get('#password').type('quality');

		cy.get('#edit-submit').should.exist;
			
		cy.get('#edit-submit').click();

	});

	it("Should Navigate to feedBack", function ()
	{
		

		cy.visit('https://training.unidata.msf.org/ebx-ui/ui/custom/ebx-perspective-P68/action/891');
		
		

	});

	


	

});