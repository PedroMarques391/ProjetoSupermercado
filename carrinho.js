export default class Carrinho {
    #listaDeProdutos;
    #valorTotal;

    constructor() {
        this.#listaDeProdutos = [];
        this.#valorTotal = 0;
    }

    adicionarProduto(produto) {
        this.#listaDeProdutos.push(produto);
        this.#valorTotal += produto.valor;
    }

    removerProduto(){
        const produtoRemovido = this.#listaDeProdutos.pop();
        this.#valorTotal -= produtoRemovido.valor;
    }

    calcularValorFinal() {
        let valorDescoto = 0;
        this.#listaDeProdutos.forEach((produto) => {
            valorDescoto += produto.aplicarDesconto();
        })
        return valorDescoto;
    }

    get valor () {
        return this.#valorTotal;
    }

    get listaDeProdutos() {
        return this.#listaDeProdutos;
    }
}