//tiempo de espera en la web
//console.log("Hola 1");
//setTimeout(()=>{
//    console.log("Hola 2");
//}1000)
//
//console.log("Hola 3");

//promesas
//let proceso=new promise((resolve,reject)=>{
//    resolve("todo ok")
//    x
//});
//
//proceso.then(res=>{
//    console.log(res);
//}).catch(res=>{
//    console.error(res);
//});


//version pro
//(async()=>{
//    let peticion =await fetch ("config.json");
//    let res=await peticion.json()
//    console.log(res);
//})("config")


//version meh
const path = "config"
let construirelencabezado = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selection = document.querySelector("#myJsonSection")
    selection.insertAdjacentHTML("beforeend",/*html*/ ` 
    <h1 class="display-6 fw-normal text-body-emphasis">
    ${res.section.titulo}
    </h1>
    <p class="fs-5 text-body-secondary"> 
        ${res.section.parrafo.map((value) => `
            ${value.icono} 
            ${value.texto}<br>`).join(" ")}
    </p>
    `);
    
}

construirelencabezado()

let columnas = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selection = document.querySelector("#section2")
    selection.insertAdjacentHTML("beforeend",/*html*/ ` 
    ${res.cuadro.map((value) => /*html*/`
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${value.titulo}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                  ${value.precio} 
                  ${value.second}
              
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                  ${value.text1}<br>
                  ${value.text2}<br>
                  ${value.text3} <br>
                
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-primary">

                    ${value.textboton} 
              </button>
            </div>
          </div>
        </div>
        <br>
        
        `).join(" ")}
        `  )
}
columnas()

let tablas = async () => {
  let peticion = await fetch(`${path}.json`);
  let respuesta = await peticion.json();
  let selection = document.querySelector("#section4")
  selection.insertAdjacentHTML("beforeend",/*html*/ `
  <h2 class="display-6 text-center mb-4">${respuesta.cuadro2.titulo4}</h2>
  <table class="table text-center">
  <thead>
  <tr>
  <th style="width: 34%;"></th>
  ${respuesta.cuadro2.titulos.map((evaluar) => /*html*/`
      <th style="width: 22%;">${evaluar.titulob}</th>
      `).join(" ")}
    </tr>
  </thead>
  <tbody>
  ${respuesta.cuadro2.context.map((evaluar) => /*html*/`
    <tr>
      <th scope="row" class="text-start">
      ${evaluar.titulodere}
      </th>
      <td><p>${evaluar.cosa1}</p></td>
      <td><p>${evaluar.cosa2}</p></td>
      <td><p>${evaluar.cosa3}</p></td>`).join(" ")}
    </tr>
  </tbody>

</table>
        
        
        
        `  )
}

tablas()


let footer = async () => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let selection = document.querySelector("#ultimo")
  selection.insertAdjacentHTML("beforeend",/*html*/ ` 
  <div class="row">
  <div class="col-12 col-md">
    ${res.ultimo.imagen.map((value) => /*html */`
      <img src="${value.ima}" class="mb-2" style="width: 30px; height: 30px;" alt=""><br>
    `)}
    <small class="d-block mb-3 text-body-secondary">${res.ultimo.campus}</small>
  </div>
  
        <div class="col-6 col-md">
          <h5>${res.ultimo.ti} </h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.netflix.com/co-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">${res.ultimo.nose}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://jobs.netflix.com/">${res.ultimo.nose1}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://devices.netflix.com/en/">${res.ultimo.nose2}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${res.ultimo.nose3}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://fast.com/es/">${res.ultimo.nose4}</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>${res.ultimo.ti2}</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/es-es/">${res.ultimo.nose5}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://ir.netflix.net/ir-overview/profile/default.aspx">${res.ultimo.nose6}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.netflix.com/gift-cards">${res.ultimo.nose7}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/legal/privacy">${res.ultimo.nose8}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/es-es/contactus">${res.ultimo.nose9}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.netflix.com/co-en/browse/genre/839338">${res.ultimo.nose10}</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>${res.ultimo.ti2}</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/es-es/node/412">${res.ultimo.nose11}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://media.netflix.com/es_es/">${res.ultimo.nose12}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.netflix.com/co-en/redeem">${res.ultimo.nose13}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/legal/termsofuse">${res.ultimo.nose14}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/legal/corpinfo">${res.ultimo.nose15}</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://help.netflix.com/legal/notices">${res.ultimo.nose16}</a></li>
          </ul>
        </div>
      </div>
      
  `);
}

  footer()