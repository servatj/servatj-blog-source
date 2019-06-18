describe("app", () => {
  it("works", () => {
    cy.visit("/")
      .getByText(/hello/i)
      .click()
      .getByText(/this is a post/i);
  });
});
