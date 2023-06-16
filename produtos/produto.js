export default class Produto {
    #nome;
    #valor;
    #codigo;
    #tipo;

    constructor(nome, valor, codigo, tipo) {
        this.#nome = nome;
        this.#valor = valor;
        this.#codigo = codigo;
        this.#tipo =  tipo;
    }

    aplicarDesconto() {
        return this.#valor - this.#valor * 0.1;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get valor() {
        return this.#valor;
    }

    set valor(novoValor) {
        this.#valor = novoValor;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(novoTipo) {
        this.#tipo = novoTipo;
    }

}