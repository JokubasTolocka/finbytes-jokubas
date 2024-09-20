let testingConstants;

describe("Optimal flow", () => {
  beforeEach(() => {
    cy.fixture("testingConstants").then((data) => {
      testingConstants = data;
    });

    const baseUrl = Cypress.config("baseUrl");

    cy.visit(baseUrl || "");
  });

  it("should get security, set amount and order type and make the trade", () => {
    cy.get(`[id=${testingConstants.tradeInformation}]`).should(
      "not.be.visible"
    );
    cy.get(`[id=${testingConstants.confirmTradeButton}]`).should("be.disabled");

    cy.get(`[id=${testingConstants.securityInput}]`).type(
      testingConstants.testTrade.securityName
    );

    cy.get(`[id=${testingConstants.tradeInformation}]`).should("be.visible");

    cy.get(`[id=${testingConstants.amountInput}]`).type(`{backspace}`);

    cy.get(`[id=${testingConstants.amountInput}]`).should("have.value", "0");

    cy.get(`[id=${testingConstants.amountInput}]`)
      .type("{moveToEnd}")
      .type(testingConstants.testTrade.amount);

    cy.get(`[id=${testingConstants.amountInput}]`).should(
      "have.value",
      testingConstants.testTrade.amount
    );
    cy.get(`[id=${testingConstants.orderTypeButton}]`).click();

    cy.get(`[id=${testingConstants.confirmTradeButton}]`)
      .should("be.enabled")
      .click();

    cy.get(`[id=${testingConstants.closeModalButton}]`).click();

    cy.get(`[id=${testingConstants.securityInput}]`).should("have.value", "");
    cy.get(`[id=${testingConstants.amountInput}]`).should("have.value", "1");
    cy.get(`[id=${testingConstants.orderTypeButton}]`).should(
      "have.class",
      "MuiButton-inverse"
    );
    cy.get(`[id=${testingConstants.tradeInformation}]`).should(
      "not.be.visible"
    );
  });
});
