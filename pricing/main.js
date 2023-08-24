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
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${res.cuadro1.titulo1}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                ${res.cuadro1.contenido.map((value) => `
                  ${value.precio} 
                  ${value.second}<br>`).join(" ")}
              
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                ${res.cuadro1.contenido.map((value) => `
                  ${value.text1}<br>
                  ${value.text2}<br>
                  ${value.text3} <br>`)}
                
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-primary">
                  ${res.cuadro1.contenido.map((value) => `
                    ${value.textboton} <br>`).join(" ")}
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${res.cuadro2.titulo2}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
               ${res.cuadro2.contenido2.map((value) => `
                  ${value.precio2} 
                  ${value.second}<br>`).join(" ")}
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                ${res.cuadro2.contenido2.map((value) => `
                  ${value.text1b}<br>
                  ${value.text2b}<br>
                  ${value.text3b} <br>`)}
       
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">
                ${res.cuadro2.contenido2.map((value) => `
                  ${value.textboton2} <br>`).join(" ")}
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">${res.cuadro3.titulo3}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                ${res.cuadro3.contenido3.map((value) => `
                  ${value.precio3} 
                  ${value.second}<br>`).join(" ")}

              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                ${res.cuadro3.contenido3.map((value) => `
                  ${value.text1c}<br>
                  ${value.text2c}<br>
                  ${value.text3c} <br>`)}

              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">
                ${res.cuadro3.contenido3.map((value) => `
                  ${value.textboton3} <br>`).join(" ")}
              </button>
            </div>
          </div>
        </div>
      
    `);
}
columnas()

let tablas = async () => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let selection = document.querySelector("#section4")
  selection.insertAdjacentHTML("beforeend",/*html*/ ` 
  <h2 class="display-6 text-center mb-4">
  ${res.section4.titulo4}
  </h2>
        <table class="table text-center">
          <thead>
            <tr>
              <th style="width: 34%;"></th>
              <th style="width: 22%;">
              ${res.section4.contenido4.map((value) => `
                  ${value.title1} <br>`).join(" ")}
              </th>
              <th style="width: 22%;">
              ${res.section4.contenido4.map((value) => `
                  ${value.title2} <br>`).join(" ")}
              </th><th style="width: 22%;">
              ${res.section4.contenido4.map((value) => `
                  ${value.title3} <br>`).join(" ")}
              </th>             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start">
              ${res.section4.derecha.map((value) => `
                  ${value.titulodere} <br>`).join(" ")}
              </th>
              <td><p>${res.section4.contenidos.map((value) => `
              ${value.precios1} <br>`).join(" ")}</p></td>
              <td><p>${res.section4.contenidos.map((value) => `
              ${value.precios2} <br>`).join(" ")}</p></td>
              <td><p>${res.section4.contenidos.map((value) => `
              ${value.precios2} <br>`).join(" ")}</p></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
              ${res.section4.derecha.map((value) => `
              ${value.titulodere2} <br>`).join(" ")}</th>
              <td><p>${res.section4.contenidos.map((value) => `
              ${value.textos1} <br>`).join(" ")}</p></td>
              <td><p>${res.section4.contenidos.map((value) => `
              ${value.textos2} <br>`).join(" ")}</p></td>
              <td><p>${res.section4.contenidos.map((value) => `
              ${value.textos3} <br>`).join(" ")}</p></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" class="text-start">
              ${res.section4.derecha.map((value) => `
              ${value.titulodere3} <br>`).join(" ")}</th>
              <td>${res.section4.iconosabajo.map((value) => `
              ${value.icono1}<br>`).join(" ")}</td>
              <td>${res.section4.iconosabajo.map((value) => `
              ${value.icono1}<br>`).join(" ")}</td>
              <td>${res.section4.iconosabajo.map((value) => `
              ${value.icono1}<br>`).join(" ")}</td>
              
          </tbody>
        </table>
      
  `);
  
}
tablas()