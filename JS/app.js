function abrirPopupFrete(mensagem) {
    const popup = document.getElementById("popupFrete");
    const mensagemPopup = document.getElementById("mensagemPopup");

    if (!popup || !mensagemPopup) {
        return;
    }

    mensagemPopup.textContent = mensagem;
    popup.classList.add("ativo");
    popup.setAttribute("aria-hidden", "false");
}

function fecharPopupFrete() {
    const popup = document.getElementById("popupFrete");

    if (!popup) {
        return;
    }

    popup.classList.remove("ativo");
    popup.setAttribute("aria-hidden", "true");
}

function calcularFrete() {
    const cepInput = document.getElementById("cep");
    const tipoEntregaSelect = document.getElementById("tipo");
    const resultado = document.getElementById("resultado");

    if (!cepInput || !tipoEntregaSelect || !resultado) {
        return;
    }

    const cepLimpo = cepInput.value.replace(/\D/g, "");
    const tipoEntrega = tipoEntregaSelect.value;

    if (cepLimpo.length !== 8) {
        resultado.innerHTML = "Digite um CEP válido com 8 números.";
        abrirPopupFrete("CEP inválido. Digite 8 números para calcular.");
        return;
    }

    // Cálculo do frete  no CEP e no tipo de entrega.
    const taxaBase = 12;
    const adicionalRegiao = Number(cepLimpo.charAt(0)) * 1.5;
    const multiplicadorTipo = tipoEntrega === "rapida" ? 1.8 : 1;
    const valorFrete = (taxaBase + adicionalRegiao) * multiplicadorTipo;

    resultado.innerHTML = `
        CEP: ${cepInput.value}
        <br>Tipo de entrega: ${tipoEntrega === "rapida" ? "Rápida" : "Normal"}
        <br><strong>Valor do frete: R$ ${valorFrete.toFixed(2)}</strong>
    `;

    abrirPopupFrete("Cálculo concluído! Valor do frete: R$ " + valorFrete.toFixed(2));
}

window.calcularFrete = calcularFrete;
window.fecharPopupFrete = fecharPopupFrete;
