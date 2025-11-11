class Conversor {
    constructor(cantidad, destino) {
        this.cantidad = cantidad; 
        this.destino = destino; 
        this.tasas = {
            JPY: 0.1189 ,
            USD: 18.32,
            EUR: 21.22,
            GBP: 24.12
        };
        this.simbolos = {
            JPY: "¥" ,
            USD: "$",
            EUR: "€",
            GBP: "£",
            MXN: "$"
        };
    }

    convertir() {
        const tasa = this.tasas[this.destino];
        const resultado = this.cantidad * tasa;
        return resultado.toFixed(2); 
    }
    generarResumen() {

        const convertido = this.convertir();
        const simboloDestino = this.simbolos[this.destino];
        const simboloOrigen = this.simbolos["MXN"];
        return `
            <strong>Cantidad original:</strong> ${simboloOrigen}${this.cantidad.toLocaleString()} MXN <br>
            <strong>Convertido a:</strong> ${simboloDestino} ${convertido.toLocaleString()} ${this.destino}`;

    }
}
document.getElementById("forma").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const destino = document.getElementById("monedaDestino").value;
    const objConversor = new Conversor(cantidad, destino);
    document.getElementById("resumen").innerHTML = objConversor.generarResumen();
});
