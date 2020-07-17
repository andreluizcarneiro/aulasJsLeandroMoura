const obj = {a:1, b:2, c:3, soma(){return a + b + c }}
console.log(JSON.stringify(obj))

/*nao eh um formato valido
 console.log(JSON.parse("{ a: 1, b:2, c:3}")) */

 /*deve ser utilizadas aspas duplas
  console.log(JSON.parse("{ 'a': 1, 'b':2, 'c':3}"))*/
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c":true,"d":{}, "e":[]}'))
