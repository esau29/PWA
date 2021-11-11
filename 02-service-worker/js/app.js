
if(navigator.serviceWorker){
   
   navigator.serviceWorker.register('/sw.js')
  .then(reg=>{
      

   // setTimeout(()=>{
   //   reg.sync.register('posteo de pics');
   //    console.log('Se subieron las fotos al server');
   //     },5000);
      
   
      



      
      
      Notification.requestPermission().then(result=>{
         console.log(result);
         reg.showNotification('Soy una Notificacioon');
      });
      });
   

}

// fetch(`https://reqres.in/api/users`)
// .then(resp=>resp.text())
// .then(console.log);



