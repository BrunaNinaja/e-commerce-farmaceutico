const headerInfo = {
    logoText: "DevinHouse Farmácia",
    menuOptions: ["Início", "Todos os remédios", "Sobre nós", "Fale conosco"]
};

const assuntos = ["Comercial", "Dúvidas", "Revenda", "Outro Assunto"];

function criarOpcoesDropdown() {
    const assuntosDropdown = document.querySelector("#assunto");

    if (!assuntosDropdown) {
        return;
    }
    assuntosDropdown.innerHTML = "";
    assuntos.forEach((assunto, index) => {
        const opcaoAssunto = document.createElement("option");
        opcaoAssunto.value = index + 1; 
        opcaoAssunto.textContent = assunto;
        assuntosDropdown.appendChild(opcaoAssunto);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    function adicionarMedicamento(event) {
        const botaoClicado = event.target;
        const cardMedicamento = botaoClicado.closest(".card");
        const nomeMedicamento = cardMedicamento.querySelector(".card-title").textContent;
        console.log(`Medicamento adicionado: ${nomeMedicamento}`);
        alert(`Medicamento adicionado ao carrinho: ${nomeMedicamento}`);
    }

    const adicionarMedicamentoBtns = document.querySelectorAll(".btn.btn-primary");
    adicionarMedicamentoBtns.forEach(button => {
        button.addEventListener("click", adicionarMedicamento);
    });
});

