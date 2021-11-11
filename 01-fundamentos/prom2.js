let sumarLento=(numero)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(numero+1),800);
        
        reject("Algo salio mal");

    });



    }

    let sumarRapido=(numero)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(numero+1),300);
    
        });
    }
        



    
    Promise.all([sumarLento(5),sumarRapido(10)])
    .then(respuestas=>{
        console.log(respuestas);
    })
    
    .catch(console.log);
    
      /*  
    sumarLento(5).then(console.log);
    sumarRapido(10).then(console.log);

*/
    