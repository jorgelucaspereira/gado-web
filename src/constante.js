import { http } from './axios'

export default {

// Animais

    listaAnimais:() => {
        return http.get('/animais')
    },
    listaResumoAnimais:() => {
        return http.get('/animais/resumo')
    },
    listaAnimalUnico:() => {
        return http.get('/animal')
    },
    salvaAnimal:() => {
        return http.post('/animal')
    },
    deletaAnimal:() => {
        return http.delete('/animal')
    },
    atualizaAnimal:() => {
        return http.put('/animal')
    },

// AnimaisTipos

    listaAnimaisTipo:() => {
        return http.get('/animais-tipo')
    },
    listaAnimalTipoUnico:() => {
        return http.get('/animal-tipo')
    },
    salvaAnimalTipo:() => {
        return http.post('/animal-tipo')
    },
    deletaAnimalTipo:() => {
        return http.delete('/animal-tipo')
    },
    atualizaAnimalTipo:() => {
        return http.put('/animal-tipo')
    },

// Entradas

    listaEntradas:() => {
        return http.get('/entradas')
    },
    listaEntradaUnica:() => {
        return http.get('/entrada')
    },
    salvaEntrada:() => {
        return http.post('/entrada')
    },
    deletaEntrada:() => {
        return http.delete('/entrada')
    },
    atualizaEntrada:() => {
        return http.put('/entrada')
    },

// Estoques

    listaEstoques:() => {
        return http.get('/estoques')
    },
    listaEstoqueUnico:() => {
        return http.get('/estoque')
    },
    salvaEstoque:() => {
        return http.post('/estoque')
    },
    deletaEstoque:() => {
        return http.delete('/estoque')
    },
    atualizaEstoque:() => {
        return http.put('/estoque')
    },

// Gastos

    listaGasto:() => {
        return http.get('/gastos')
    },
    listaGastoUnico:() => {
        return http.get('/gasto')
    },
    salvaGasto:(gasto) => {
        return http.post('/gasto', gasto)
    },
    deletaGasto:() => {
        return http.delete('/gasto')
    },
    atualizaGasto:() => {
        return http.put('/gasto')
    },
    listaGastoResumo:() => {
        return http.get('/gastos/resumo')
    },

// Lotes

    listaLotes:() => {
        return http.get('/lotes')
    },
    listaLoteUnico:() => {
        return http.get('/lote')
    },
    salvaLote:() => {
        return http.post('/lote')
    },
    deletaLote:() => {
        return http.delete('/lote')
    },
    atualizaLote:() => {
        return http.put('/lote')
    },

// Medicamentos

    listaMedicamentos:() => {
        return http.get('/medicamentos')
    },
    listaMedicamentoUnico:() => {
        return http.get('/medicamento')
    },
    salvaMedicamento:() => {
        return http.post('/medicamento')
    },
    deletaMedicamento:() => {
        return http.delete('/medicamento')
    },
    atualizaMedicamento:() => {
        return http.put('/medicamento')
    },

// MedicamentosTipos

    listaMedicamentosTipos:() => {
        return http.get('/medicamentos-tipos')
    },
    listaMedicamentoTipoUnico:() => {
        return http.get('/medicamento-tipo')
    },
    salvaMedicamentoTipo:() => {
        return http.post('/medicamento-tipo')
    },
    deletaMedicamentoTipo:() => {
        return http.delete('/medicamento-tipo')
    },
    atualizaMedicamentoTipo:() => {
        return http.put('/medicamento-tipo')
    },

// Produtos

    listaProdutos:() => {
        return http.get('/produtos')
    },
    listaProdutoUnico:() => {
        return http.get('/produto')
    },
    salvaProduto:() => {
        return http.post('/produto')
    },
    deletaProduto:() => {
        return http.delete('/produto')
    },
    atualizaProduto:() => {
        return http.put('/produto')
    },

// Saidas

    listaSaidas:() => {
        return http.get('/saidas')
    },
    listaSaidaUnica:() => {
        return http.get('/saida')
    },
    salvaSaida:() => {
        return http.post('/saida')
    },
    deletaSaida:() => {
        return http.delete('/saida')
    },
    atualizaSaida:() => {
        return http.put('/saida')
    },

// Terrenos

    listaTerrenos:() => {
        return http.get('/terrenos')
    },
    listaTerrenoUnico:() => {
        return http.get('/terreno')
    },
    salvaTerreno:() => {
        return http.post('/terreno')
    },
    deletaTerreno:() => {
        return http.delete('/terreno')
    },
    atualizaTerreno:() => {
        return http.put('/terreno')
    },

// Usuarios

    listaUsuarios:() => {
        return http.get('/usuarios')
    },
    listaUsuarioUnico:() => {
        return http.get('/usuario')
    },
    salvaUsuario:() => {
        return http.post('/usuario')
    },
    deletaUsuario:() => {
        return http.delete('/usuario')
    },
    atualizaUsuario:() => {
        return http.put('/usuario')
    },

// Vendedores

    listaVendedores:() => {
        return http.get('/vendedores')
    },
    listaVendedorUnico:() => {
        return http.get('/vendedor')
    },
    salvaVendedor:() => {
        return http.post('/vendedor')
    },
    deletaVendedor:() => {
        return http.delete('/vendedor')
    },
    atualizaVendedor:() => {
        return http.put('/vendedor')
    },
}
