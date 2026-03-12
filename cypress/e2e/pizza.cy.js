describe("Pizza sipariş Formu", () => {
    beforeEach(() => {cy.visit("http://localhost:5173/order")});

    it("İsim inputuna metin girilebiliyor mu?",() => {
    cy.get("#isim",{timeout:1000}).type("wit");
    cy.get("#isim").should("have.value","wit")
    });

    it("Birden fazla malzeme seçebiliyor mu?",() => {
        cy.contains("label","Sosis").find("input[type='checkbox']").check();
        cy.contains("label","Soğan").find("input[type='checkbox']").check();
        cy.contains("label","Sucuk").find("input[type='checkbox']").check();
        cy.contains("label","Biber").find("input[type='checkbox']").check();

        cy.contains("label","Sosis").find("input[type='checkbox']").should("be.checked");
        cy.contains("label","Soğan").find("input[type='checkbox']").should("be.checked");
        cy.contains("label","Sucuk").find("input[type='checkbox']").should("be.checked");
        cy.contains("label","Biber").find("input[type='checkbox']").should("be.checked");

    });

    it("Formu eksiksiz gönderebiliyor mu?", () => {
        cy.get("#isim").type("wit");
        cy.get("#orta").check();
        cy.get("select").select("İnce");

        cy.contains("label","Sosis").find("input[type='checkbox']").check();
        cy.contains("label","Soğan").find("input[type='checkbox']").check();
        cy.contains("label","Sucuk").find("input[type='checkbox']").check();
        cy.contains("label","Biber").find("input[type='checkbox']").check();

        cy.get(".order-btn").should("not.be.disabled").eq(1).click();
        cy.url().should("include","/success")
    });
});

