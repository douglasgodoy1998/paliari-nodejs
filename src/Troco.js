class Troco {

  static getQtdeNotas(reais) { 
    if (parseFloat(reais) === 0){
      return {};
    }

    const notas = [100, 50, 20, 10 ,5 , 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
    var valorRecebido = reais;
    var resultado = {};

    notas.forEach((nota) => {
      const resto = (valorRecebido % nota).toFixed(2);
      const qtNotas = (valorRecebido - resto) / nota;
      
      if (qtNotas > 0) {
        resultado[nota] = Math.round(qtNotas);
        valorRecebido = resto;
      }
    });

    return resultado;
  }
}

module.exports = Troco
