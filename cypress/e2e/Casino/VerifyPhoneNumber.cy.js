describe('Verify Phone', () => {

  it("input phone number", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/button').click()
    cy.contains("Profile").click()
    cy.get('[placeholder="+381"]').type("381")
    cy.get('[placeholder="Enter your phone number"]').type("691197933")
    //cy.contains("Verify Now").click()
  })
   
})