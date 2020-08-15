var copas = [1958, 1962, 1970, 1994, 2002];

var titulos = copas.map((ano,indice) => `${indice + 1} : ${ano}`);

document.write(titulos.join("<br>"));