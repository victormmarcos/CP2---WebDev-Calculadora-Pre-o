// Seleciona todos os inputs de quantidade de produtos
const inputsQuantidade = document.querySelectorAll('input[type="number"]');

// Adiciona um listener de evento para cada input de quantidade
inputsQuantidade.forEach(input => {
    input.addEventListener('input', () => {
        calcularTotal();
    });
});

// Função para calcular e atualizar o total da compra
function calcularTotal() {
    let total = 0;
    inputsQuantidade.forEach(input => {
        let precoUnitario = parseFloat(input.nextElementSibling.textContent.match(/\d+\.?\d*/)[0]);
        total += parseFloat(input.value) * precoUnitario;
    });
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}
