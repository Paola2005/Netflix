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
              <h4 class="my-0 fw-normal">${res.cuadros.titulo1}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
              ${res.cuadros.contenido.map((value) => `
            ${value.precio} 
            ${value.second}<br>`).join(" ")}
              
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
              ${res.cuadros.contenido.map((value) => `
            ${value.text1}<br>
            ${value.text2}<br>
            ${value.text3} <br>`)}
                
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Standard</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$26.900<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Compatible on 2 devices</li>
                <li>Watch in Full HD</li>
                <li>Download on 2 devices</li>
       
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Premium</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$38.900<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Compatible on 4 devices</li>
                <li>Watch in Ultra HD</li>
                <li>Download on 6 devices</li>

              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      
    `);
}
columnas()