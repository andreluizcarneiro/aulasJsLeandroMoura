function triang(a,b,c){
    if(a==b && b==c){
        console.log("Equilatero")
    }
    else if(a==b || b==c || c==a){
        console.log("Isósceles")
    }
    else{
        console.log("Escaleno")
    }
}

triang(1,1,1)

triang(2,2,3)

triang(1,2,3)