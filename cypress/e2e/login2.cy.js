describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("login succesfully", () => {
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Log out").should("be.visible");
    cy.viewport(1920, 1080);
  });

  it("Added book", () => {
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("Лабиринт отражений");
    cy.get("#description").type("Киберпанк");
    cy.get("#authors").type("Сергей Лукьяненко");
    cy.get("#favorite").click();
    cy.contains("Submit").click();
    cy.viewport("iphone-6");
  });

  it("Add to favorite", () => {
    cy.contains("Add to favorite").click();
    cy.viewport(414, 846);
  });

  it("Delete book from favorite", () => {
    cy.contains("Delete from favorite").click();
  });
});
