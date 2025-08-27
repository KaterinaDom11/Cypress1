describe("The test group of the shelf of books website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Positive authorization", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Log out").should("be.visible").and("not.be.disabled");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });
  it("Negative login", () => {
    cy.login(" ", "test");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  it("Adding to favorites from the creation card", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addFavoritesInCard("Harry Potter", "J. K. Rowling");
    cy.contains("Harry Potter").should("be.visible");
  });
  it("Adding to favorites from the shelf", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addFavoritesInBookshelf("Idiot", "F.M. Dostoevsky");
    cy.contains("Idiot").should("be.visible");
  });
  it("Deleting from favorites", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addFavoritesInBookshelf("War and Peace", "L.N. Tolstoy");
    cy.contains("War and Peace").contains("Delete from favorite").click();
    cy.contains("War and Peace").should("not.exist");
  });
});
