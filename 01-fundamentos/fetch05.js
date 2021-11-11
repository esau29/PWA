fetch('prueba.html')
.then(resp=>resp.text())
.then(html=>{
  //  console.log(html);

  let body=document.querySelector('body');
  body.innerHTML=html;
})