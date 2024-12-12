var gastos = document.getElementById("gastos")
var selection = document.getElementById("selecao")
var resultados = document.getElementById("resultados")
var divTotal = document.getElementById("total")
var btn = document.getElementById("adicionar")

var totalSoma = 0
var limite = 30

  btn.addEventListener("click", () => {
    var selecao = selection.value // Seleciona o valor da opção MRV
    var gasto = parseFloat(gastos.value) // Converte o valor para float
    if (selecao == "Selecionar") {
        selection.style.color = "red"
        selection.style.border = "solid 1px red"
        return
    } else {
        selection.style.color = "white"
        selection.style.border = "none"
    }
    if (gasto <= 0) {
        gastos.style.color = "red"
        gastos.style.border = "solid 1px red"
        return
    }

    resultados.innerHTML += `<p id="textoSelecao">${selecao}</p> <p>R$${gasto.toFixed(2)} </p>` // Adiciona a seleção e o valor ao HTML
    totalSoma += gasto // Adiciona o valor ao total
    divTotal.innerHTML = `<p>Total</p><p>R$${totalSoma.toFixed(1)}</p>` // Adiciona o total ao HTML
}) 

btn.addEventListener("click", () => {
  const totalElementos = resultados.childElementCount;
  if (totalElementos >= limite) {
    alert("Limite de 30 elementos atingido!");
    btn.disabled = true;
    btn.style.background = "white";
    return
  }
})