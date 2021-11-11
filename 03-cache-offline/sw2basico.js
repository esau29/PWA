self.addEventListener('fetch',event=>{
    /*const offlineResp = new Response(`
     Bienvenido a mi sitio web 
     Disculpa pero no puedes usarla sin conexion a internet
     `)*/
 
     /*const offlineResp = new Response(`
   <!DOCTYPE html>
 <html lang="es">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Mi PWA</title>
 </head>
 </body>
 <h1>Modo  offline</h1>
 </body>
 </html>
   `,{
    headers:{
      'Content-Type':'text/html'
       
   
      
        }
    });*/
     
 const resp= fetch(Event.request)
 .catch (()=>{
     return offlineResp;
 });
 event.respondWith(resp);
 
 })
