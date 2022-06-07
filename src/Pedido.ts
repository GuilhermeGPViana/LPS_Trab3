class Pedido {
    total: Number;

    constructor(total: Number) {
        this.total = total;
    }

    getTotal() {
        return this.total;
    }
}

export default Pedido;