var numero = 1
{
    var numero = 2
    console.log('dentro =',numero)
}
console.log('fora =', numero)

/* não existe escopo de bloco pra variavel Var
só existe de var dentro de função! 
Fora função o var ignora o bloco, e acaba sendo 
ao escopo Maior */