//ciclo de vida de un service worker
self.addEventListener('install',event=>{
    console.log('Instalando el SW!!!');
   // self.skipWaiting(); 

   const instalacion = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('La instalacion del SW ha terminado');
        self.skipWaiting();
    resolve();
    },1);
    
    
   });
   
   event.waitUntil(instalacion);
  
});

//Cuando el sw toma el control de la aplicacion

self.addEventListener('activate',event=>{
    console.log('SW:Activo y listo para controlar la aplicacioon');
});





self.addEventListener('fetch',event=>{
//console.log('SW-',event.request.url);

//      if(event.request.url.includes(`https://reqres.in`)){
//          const resp = new Response(`{ok:false, mensaje:'Interceptando'}`);
//          event.respondWith(resp);
//  }



    
});



//SYNC: recuperamos la conexion a internet

self.addEventListener('sync', event=>{
console.log('Ya tenemos conexion');
console.log(event);
console.log(event.tag);
});



//PUSH: Manejar las push notifications
self.addEventListener('push', event=>{
  console.log('Notificacion recibida');

});