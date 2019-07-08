const Troco = require('../../src/Troco')


//            TESTES COM MOEDAS DE 0 A 1 REAL            //

it('valor 0 não deve retornar nenhuma nota', () => {
  const expected = {}

  expect(Troco.getQtdeNotas(0)).toEqual(expected)
}); 

it('valor 0,01 deve retornar uma moeda de 1', () => {
  const expected = {
    '0.01': 1
  }

  expect(Troco.getQtdeNotas(0.01)).toEqual(expected)
}); 

it('valor 0,05 deve retornar uma moeda de 5', () => {
  const expected = {
    '0.05': 1
  }

  expect(Troco.getQtdeNotas(0.05)).toEqual(expected)
}); 

it('valor 0,10 deve retornar uma moeda de 10', () => {
  const expected = {
    '0.1': 1
  }

  expect(Troco.getQtdeNotas(0.10)).toEqual(expected)
}); 

it('valor 0,25 deve retornar uma moeda de 25', () => {
  const expected = {
    '0.25': 1
  }

  expect(Troco.getQtdeNotas(0.25)).toEqual(expected)
}); 
 
it('valor 0,50 deve retornar uma moeda de 50 centavos', () => {
  const expected = {
    '0.5': 1
  }

  expect(Troco.getQtdeNotas(0.50)).toEqual(expected)
}); 

it('valor 1 deve retornar uma moeda de 1 real', () => {
  const expected = {
    '1': 1
  }
  
  expect(Troco.getQtdeNotas(1)).toEqual(expected)
}); 

//            TESTES COM NOTAS DE 2 A 100 REAIS            //

it('valor 2 deve retornar uma nota de 2 reais', () => {
 const expected = {
   '2': 1
 }

 expect(Troco.getQtdeNotas(2)).toEqual(expected)
}); 
 
it('valor 5 deve retornar uma nota de 5 reais', () => {
  const expected = {
    '5': 1
  }

  expect(Troco.getQtdeNotas(5)).toEqual(expected)
}); 
 
it('valor 10 deve retornar uma nota de 10', () => {
  const expected = {
    '10': 1
  }

  expect(Troco.getQtdeNotas(10)).toEqual(expected)
}); 
 
it('valor 20 deve retornar uma nota de 20', () => {
  const expected = {
    '20': 1
  }

  expect(Troco.getQtdeNotas(20)).toEqual(expected)
}); 
 
it('valor 50 deve retornar uma nota de 50', () => {
  const expected = {
    '50': 1
  }

  expect(Troco.getQtdeNotas(50)).toEqual(expected)
}); 
 
it('valor 100 deve retornar uma nota de 100', () => {
  const expected = {
    '100': 1
  }

  expect(Troco.getQtdeNotas(100)).toEqual(expected)
}); 


//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA MOEDA DE 1 CENTAVO       //
 
it('valor 100,01 deve retornar uma nota de 100 e uma moeda de 1 centavo', () => {
  const expected = {
    '100': 1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(100.01)).toEqual(expected)
}); 

it('valor 50,01 deve retornar uma nota de 50 e uma moeda de 1 centavo', () => {
  const expected = {
    '50': 1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(50.01)).toEqual(expected)
}); 
 
it('valor 20,01 deve retornar uma nota de 20 e uma moeda de 1 centavo', () => {
  const expected = {
    '20': 1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(20.01)).toEqual(expected)
}); 
 

 
it('valor 10,01 deve retornar uma nota de 10 e uma moeda de 1 centavo', () => {
  const expected = {
    '10': 1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(10.01)).toEqual(expected)
}); 
 
it('valor 5,01 deve retornar uma nota de 5 e uma moeda de 1 centavo', () => {
  const expected = {
    '5': 1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(5.01)).toEqual(expected)
}); 

it('valor 2,01 deve retornar uma nota de 2 e uma moeda de 1 centavo', () => {
  const expected = {
    '2': 1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(2.01)).toEqual(expected)
}); 
 
//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA MOEDA DE 5 CENTAVOS       //

it('valor 100,05 deve retornar uma nota de 100 e uma moeda de 5 centavos', () => {
  const expected = {
    '100': 1,
    '0.05':1
  }

  expect(Troco.getQtdeNotas(100.05)).toEqual(expected)
}); 

it('valor 50,05 deve retornar uma nota de 50 e uma moeda de 5 centavos', () => {
  const expected = {
    '50': 1,
    '0.05':1
  }

  expect(Troco.getQtdeNotas(50.05)).toEqual(expected)
}); 
 
it('valor 20,05 deve retornar uma nota de 20 e uma moeda de 5 centavos', () => {
  const expected = {
    '20': 1,
    '0.05':1
  }

  expect(Troco.getQtdeNotas(20.05)).toEqual(expected)
}); 
 

 
it('valor 10,05 deve retornar uma nota de 10 e uma moeda de 5 centavos', () => {
  const expected = {
    '10': 1,
    '0.05':1
  }

  expect(Troco.getQtdeNotas(10.05)).toEqual(expected)
}); 
 
it('valor 5,05 deve retornar uma nota de 5 e uma moeda de 5 centavos', () => {
  const expected = {
    '5': 1,
    '0.05':1
  }

  expect(Troco.getQtdeNotas(5.05)).toEqual(expected)
}); 

it('valor 2,05 deve retornar uma nota de 2 e uma moeda de 5 centavo', () => {
  const expected = {
    '2': 1,
    '0.05':1
  }

  expect(Troco.getQtdeNotas(2.05)).toEqual(expected)
}); 
 

//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA MOEDA DE 10 CENTAVOS       //

it('valor 100,10 deve retornar uma nota de 100 e uma moeda de 10 centavos', () => {
  const expected = {
    '100': 1,
    '0.1':1
  }

  expect(Troco.getQtdeNotas(100.1)).toEqual(expected)
}); 

it('valor 50,10 deve retornar uma nota de 50 e uma moeda de 10 centavos', () => {
  const expected = {
    '50': 1,
    '0.1':1
  }

  expect(Troco.getQtdeNotas(50.1)).toEqual(expected)
}); 
 
it('valor 20,10 deve retornar uma nota de 20 e uma moeda de 10 centavos', () => {
  const expected = {
    '20': 1,
    '0.1':1
  }

  expect(Troco.getQtdeNotas(20.1)).toEqual(expected)
}); 
 

 
it('valor 10,10 deve retornar uma nota de 10 e uma moeda de 10 centavos', () => {
  const expected = {
    '10': 1,
    '0.1':1
  }

  expect(Troco.getQtdeNotas(10.1)).toEqual(expected)
}); 
 
it('valor 5,10 deve retornar uma nota de 5 e uma moeda de 10 centavos', () => {
  const expected = {
    '5': 1,
    '0.1':1
  }

  expect(Troco.getQtdeNotas(5.1)).toEqual(expected)
}); 

it('valor 2,10 deve retornar uma nota de 2 e uma moeda de 10 centavos', () => {
  const expected = {
    '2': 1,
    '0.1':1
  }

  expect(Troco.getQtdeNotas(2.1)).toEqual(expected)
}); 
 
//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA MOEDA DE 25 CENTAVOS       //

it('valor 100,25 deve retornar uma nota de 100 e uma moeda de 25 centavos', () => {
  const expected = {
    '100': 1,
    '0.25':1
  }

  expect(Troco.getQtdeNotas(100.25)).toEqual(expected)
}); 

it('valor 50,25 deve retornar uma nota de 50 e uma moeda de 25 centavos', () => {
  const expected = {
    '50': 1,
    '0.25':1
  }

  expect(Troco.getQtdeNotas(50.25)).toEqual(expected)
}); 
 
it('valor 20,25 deve retornar uma nota de 20 e uma moeda de 25 centavos', () => {
  const expected = {
    '20': 1,
    '0.25':1
  }

  expect(Troco.getQtdeNotas(20.25)).toEqual(expected)
}); 
 

 
it('valor 10,25 deve retornar uma nota de 10 e uma moeda de 25 centavos', () => {
  const expected = {
    '10': 1,
    '0.25':1
  }

  expect(Troco.getQtdeNotas(10.25)).toEqual(expected)
}); 
 
it('valor 5,25 deve retornar uma nota de 5 e uma moeda de 25 centavos', () => {
  const expected = {
    '5': 1,
    '0.25':1
  }

  expect(Troco.getQtdeNotas(5.25)).toEqual(expected)
}); 

it('valor 2,25 deve retornar uma nota de 2 e uma moeda de 25 centavos', () => {
  const expected = {
    '2': 1,
    '0.25':1
  }

  expect(Troco.getQtdeNotas(2.25)).toEqual(expected)
}); 

//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA MOEDA DE 50 CENTAVOS       //

it('valor 100,50 deve retornar uma nota de 100 e uma moeda de 50 centavos', () => {
  const expected = {
    '100': 1,
    '0.5':1
  }

  expect(Troco.getQtdeNotas(100.5)).toEqual(expected)
}); 

it('valor 50,50 deve retornar uma nota de 50 e uma moeda de 50 centavos', () => {
  const expected = {
    '50': 1,
    '0.5':1
  }

  expect(Troco.getQtdeNotas(50.5)).toEqual(expected)
}); 
 
it('valor 20,50 deve retornar uma nota de 20 e uma moeda de 50 centavos', () => {
  const expected = {
    '20': 1,
    '0.5':1
  }

  expect(Troco.getQtdeNotas(20.5)).toEqual(expected)
}); 
 

 
it('valor 10,50 deve retornar uma nota de 10 e uma moeda de 50 centavos', () => {
  const expected = {
    '10': 1,
    '0.5':1
  }

  expect(Troco.getQtdeNotas(10.5)).toEqual(expected)
}); 
 
it('valor 5,50 deve retornar uma nota de 5 e uma moeda de 50 centavos', () => {
  const expected = {
    '5': 1,
    '0.5':1
  }

  expect(Troco.getQtdeNotas(5.5)).toEqual(expected)
}); 

it('valor 2,50 deve retornar uma nota de 2 e uma moeda de 50 centavos', () => {
  const expected = {
    '2': 1,
    '0.5':1
  }

  expect(Troco.getQtdeNotas(2.5)).toEqual(expected)
}); 
 
//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA MOEDA DE 1 REAL       //

it('valor 101 deve retornar uma nota de 100 e uma moeda de 1 real', () => {
  const expected = {
    '100': 1,
    '1':1
  }

  expect(Troco.getQtdeNotas(101)).toEqual(expected)
}); 

it('valor 51 deve retornar uma nota de 50 e uma moeda de 1 real', () => {
  const expected = {
    '50': 1,
    '1':1
  }

  expect(Troco.getQtdeNotas(51)).toEqual(expected)
}); 
 
it('valor 21 deve retornar uma nota de 20 e uma moeda de 1 real', () => {
  const expected = {
    '20': 1,
    '1':1
  }

  expect(Troco.getQtdeNotas(21)).toEqual(expected)
}); 
 

 
it('valor 11 deve retornar uma nota de 10 e uma moeda de 1 real', () => {
  const expected = {
    '10': 1,
    '1':1
  }

  expect(Troco.getQtdeNotas(11)).toEqual(expected)
}); 
 
it('valor 6 deve retornar uma nota de 5 e uma moeda de 1 real', () => {
  const expected = {
    '5': 1,
    '1':1
  }

  expect(Troco.getQtdeNotas(6)).toEqual(expected)
}); 

it('valor 3 deve retornar uma nota de 2 e uma moeda de 1 real', () => {
  const expected = {
    '2': 1,
    '1':1
  }

  expect(Troco.getQtdeNotas(3)).toEqual(expected)
}); 
 
//    TESTES COM NOTAS DE 5 A 100 REAIS COM UMA NOTA DE 2 REAIS       //

it('valor 102 deve retornar uma nota de 100 e uma nota de 2 reais', () => {
  const expected = {
    '100': 1,
    '2':1
  }

  expect(Troco.getQtdeNotas(102)).toEqual(expected)
}); 

it('valor 52 deve retornar uma nota de 50 e uma nota de 2 reais', () => {
  const expected = {
    '50': 1,
    '2':1
  }

  expect(Troco.getQtdeNotas(52)).toEqual(expected)
}); 
 
it('valor 22 deve retornar uma nota de 20 e uma nota de 2 reais', () => {
  const expected = {
    '20': 1,
    '2':1
  }

  expect(Troco.getQtdeNotas(22)).toEqual(expected)
}); 
 

 
it('valor 12 deve retornar uma nota de 10 e uma nota de 2 reais', () => {
  const expected = {
    '10': 1,
    '2':1
  }

  expect(Troco.getQtdeNotas(12)).toEqual(expected)
}); 
 
it('valor 7 deve retornar uma nota de 5 e uma nota de 2 reais', () => {
  const expected = {
    '5': 1,
    '2':1
  }

  expect(Troco.getQtdeNotas(7)).toEqual(expected)
}); 

//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA NOTA DE 5 REAIS       //

it('valor 105 deve retornar uma nota de 100 e uma nota de 5 reais', () => {
  const expected = {
    '100': 1,
    '5':1
  }

  expect(Troco.getQtdeNotas(105)).toEqual(expected)
}); 

it('valor 55 deve retornar uma nota de 50 e uma nota de 5 reais', () => {
  const expected = {
    '50': 1,
    '5':1
  }

  expect(Troco.getQtdeNotas(55)).toEqual(expected)
}); 
 
it('valor 25 deve retornar uma nota de 20 e uma nota de 5 reais', () => {
  const expected = {
    '20': 1,
    '5':1
  }

  expect(Troco.getQtdeNotas(25)).toEqual(expected)
}); 
 
it('valor 15 deve retornar uma nota de 10 e uma nota de 5 reais', () => {
  const expected = {
    '10': 1,
    '5':1
  }

  expect(Troco.getQtdeNotas(15)).toEqual(expected)
}); 
 
it('valor 5 deve retornar uma nota de 5', () => {
  const expected = {
    '5':1
  }

  expect(Troco.getQtdeNotas(5)).toEqual(expected)
}); 

//    TESTES COM NOTAS DE 2 A 100 REAIS COM UMA NOTA DE 10 REAIS       //

it('valor 110 deve retornar uma nota de 100 e uma nota de 10 reais', () => {
  const expected = {
    '100': 1,
    '10':1
  }

  expect(Troco.getQtdeNotas(110)).toEqual(expected)
}); 

it('valor 60 deve retornar uma nota de 50 e uma nota de 10 reais', () => {
  const expected = {
    '50': 1,
    '10':1
  }

  expect(Troco.getQtdeNotas(60)).toEqual(expected)
}); 
 
it('valor 30 deve retornar uma nota de 20 e uma nota de 10 reais', () => {
  const expected = {
    '20': 1,
    '10':1
  }

  expect(Troco.getQtdeNotas(30)).toEqual(expected)
}); 

it('valor 12 deve retornar uma nota de 10 e uma nota de 2', () => {
  const expected = {
    '10':1,
    '2':1
  }

  expect(Troco.getQtdeNotas(12)).toEqual(expected)
}); 


//    TESTES COM NOTA DE 20 REAIS       //

it('valor 120 deve retornar uma nota de 100 e uma nota de 20 reais', () => {
  const expected = {
    '100': 1,
    '20':1
  }

  expect(Troco.getQtdeNotas(120)).toEqual(expected)
}); 

it('valor 70 deve retornar uma nota de 50 e uma nota de 20 reais', () => {
  const expected = {
    '50': 1,
    '20':1
  }

  expect(Troco.getQtdeNotas(70)).toEqual(expected)
}); 
 
it('valor 40 deve retornar duas notas de 20 reais', () => {
  const expected = {
    '20':2
  }

  expect(Troco.getQtdeNotas(40)).toEqual(expected)
}); 

//    TESTE COM NOTA DE 50 REAIS       //

it('valor 150 deve retornar uma nota de 100 e uma nota de 50 reais', () => {
  const expected = {
    '100': 1,
    '50':1
  }

  expect(Troco.getQtdeNotas(150)).toEqual(expected)
}); 

//    TESTE COM NOTA DE 100 REAIS       //

it('valor 200 deve retornar duas notas de 100 reais', () => {
  const expected = {
    '100': 2
  }

  expect(Troco.getQtdeNotas(200)).toEqual(expected)
}); 


// OUTROS TESTES COM VALORES ALEATÓRIOS // 

it('valor 360 deve retornar tres notas de 100, uma de 50 e uma nota de 10', () => {
  const expected = {
    '100': 3,
    '50':1,
    '10':1
  }

  expect(Troco.getQtdeNotas(360)).toEqual(expected)
});

it('valor 968,36 deve retornar nove notas de 100, uma de 50, uma de 10, uma de 5, uma nota de 2, uma moeda de 1 real, uma moeda de 25, uma moeda de 10 e uma moeda de 1 centavo', () => {
  const expected = {
    '100':9,
    '50':1,
    '10':1,
    '5':1,
    '2':1,
    '1':1,
    '0.25':1,
    '0.1':1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(968.36)).toEqual(expected)
});

it('valor 340,11 deve retornar tres notas de 100, duas de 20, uma moeda de 10, e uma moeda de 1 centavo', () => {
  const expected = {
    '100': 3,
    '20': 2,
    '0.1':1,
    '0.01':1
  }

  expect(Troco.getQtdeNotas(340.11)).toEqual(expected)
});
