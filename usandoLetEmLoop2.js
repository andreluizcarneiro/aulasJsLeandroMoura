const funcs = []

for (let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//let tem escopo de função, então existe uma memoria
funcs[2]()
//o fato que a funcs 2 aponta pro i = 2 
funcs[8]()
//o fato que a funcs 2 aponta pro i = 8 