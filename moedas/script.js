// https://v6.exchangerate-api.com/v6/8a69a51633c80687323b183e/latest/USD


document.querySelector(".button").addEventListener("click", async (event) => {
    event.preventDefault(); //não faça ação padrão

    let taxa = document.querySelector("#tax");
    let resultado = document.querySelector(".result");
    let moedaOrigem = document.getElementById("sel_origem");
    let valorSelOrigem = moedaOrigem.options[moedaOrigem.selectedIndex].value;
    let moedaDestino = document.getElementById("sel_destino");
    let valorSelDestino = moedaDestino.options[moedaDestino.selectedIndex].value;

    let valor = document.querySelector(".valor").value;

    // if (input !== "") {
    let url = `https://v6.exchangerate-api.com/v6/8a69a51633c80687323b183e/pair/${valorSelOrigem}/${valorSelDestino}/${valor}`

    let results = await fetch(url);
    let dados = await results.json();

    if (dados.result === "success") {
        resultado.value = dados.conversion_result
        taxa.value = dados.conversion_rate
    }
})
