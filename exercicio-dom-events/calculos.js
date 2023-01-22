const dados = JSON.parse(localStorage.getItem("planilha")) || []

const valor_base = document.getElementById('valor_base').value = dados.valor_base
const valor_transporte = document.getElementById('valor_transporte').value = dados.valor_transporte
const valor_alimentacao = document.getElementById('valor_alimentacao').value = dados.valor_alimentacao
const valor_automovel = document.getElementById('valor_automovel').value = dados.valor_automovel
const faltas = document.getElementById('faltas').value = dados.faltas

const valor_receita = document.getElementById('valor_receita').value = dados.valor_receita
const valor_descontos = document.getElementById('valor_descontos').value = dados.valor_descontos
const valor_total = document.getElementById('valor_total').value = dados.valor_total

document.getElementById('formulario').addEventListener('change', (evento) => {
    evento.preventDefault()

    const valor_base = Number(document.getElementById('valor_base').value)
    const valor_transporte = Number(document.getElementById('valor_transporte').value)
    const valor_alimentacao = Number(document.getElementById('valor_alimentacao').value)
    const valor_automovel = Number(document.getElementById('valor_automovel').value)
    const faltas = Number(document.getElementById('faltas').value)
 
    const valor_receita = document.getElementById('valor_receita').value = valor_base + valor_transporte + valor_alimentacao
    const valor_descontos = document.getElementById('valor_descontos').value = valor_automovel + faltas
    const valor_total = document.getElementById('valor_total').value = valor_receita - valor_descontos
    
    let total = {
        valor_base: valor_base,
        valor_transporte: valor_transporte,
        valor_alimentacao: valor_alimentacao,
        valor_automovel: valor_automovel,
        faltas: faltas,
        valor_receita: valor_receita,
        valor_descontos: valor_descontos,
        valor_total: valor_total
    }

    localStorage.setItem("planilha", JSON.stringify(total))
})