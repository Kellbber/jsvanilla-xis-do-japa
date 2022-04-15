const baseURL = "http://localhost:3000/xis";


const findAllXis = async () => {
  const response = await fetch(`${baseURL}/todos-xis`);

  const xis = await response.json();

  console.log(xis);

  xis.forEach((xis) => {
    document.querySelector("#xisList").insertAdjacentHTML(
      "beforeend",
      `
    <div class="XisListaItem" id="XisListaItem_${xis.id}">
        <div>
      <div class="XisListaItem__sabor">${xis.sabor}</div>
      <div class="XisListaItem__preco">${xis.preco}</div>
      <div class="XisListaItem__descricao">${xis.descricao}

      <div class="XisListaItem__acoes Acoes">
      <button id="btn__editar" class="acoes__editar btn" onclick="abrirModal(${xis.id})">EDITAR</button>
      <button onclick="deleteXis(${xis.id})" class="acoes__apagar btn">DELETAR</button>
        </div>

      </div>
    </div>
    <img class="XisListaItem__foto" src= ${xis.foto} alt="${xis.sabor}" />

  </div>
    `
    );
  });
};
const findByIdXis = async () =>{
  const id = document.querySelector("#idXis").value

  const response = await fetch(`${baseURL}/o-xis/${id}`)

  const xis = await response.json();
  const XisEscolhidoDiv = document.querySelector("#XisEscolhido");

  XisEscolhidoDiv.innerHTML = 
  `
  <div class="XisCardItem" id="XisListaItem_${xis.id}">
    <div>
      <div class="XisCardItem__sabor">${xis.sabor}</div>
      <div class="XisCardItem__preco">${xis.preco}</div>
      <div class="XisCardItem__descricao">${xis.descricao}</div>
    </div>
    <div class="XisListaItem__acoes Acoes">
      <button id="btn__editar" class="acoes__editar btn" onclick="abrirModal(${xis.id})">EDITAR</button>
      <button onclick="deleteXis(${novoXis.id})" class="acoes__apagar btn">DELETAR</button>
    </div>
  <img class="XisCardItem__foto" src= ${xis.foto} alt="${xis.sabor}" />
</div>
  `
}

findAllXis();

async function abrirModal(id = null){
  if(id != null){

    document.querySelector("#titulo-header-modal").innerText = "ATUALIZAR O XIS";
    document.querySelector("#button-form-modal").innerText = "ATUALIZAR";

    const response = await fetch(`${baseURL}/o-xis/${id}`)

    const xis = await response.json();

    document.querySelector("#id").value = xis.id;

    document.querySelector("#sabor").value = xis.sabor;

    document.querySelector("#preco").value = xis.preco;
  
    document.querySelector("#descricao").value = xis.descricao;
    
     document.querySelector("#foto").value = xis.foto;

      }else{
        document.querySelector("#titulo-header-modal").innerText = "CADASTRAR NOVO XIS";
        document.querySelector("#button-form-modal").innerText = "CADASTRAR";
      }
  document.querySelector(".modal-overlay").style.display = "flex";
}
function fecharModal() {
  document.querySelector(".modal-overlay").style.display = "none";
  document.querySelector("#sabor").value = "";

  document.querySelector("#preco").value = "";

  document.querySelector("#descricao").value = "";
  
   document.querySelector("#foto").value = "";
}

 async function createXis(){
  const id = document.querySelector("#id").value;

  const sabor = document.querySelector("#sabor").value;

  const preco = document.querySelector("#preco").value;

  const descricao= document.querySelector("#descricao").value;
  
  const foto = document.querySelector("#foto").value;

  const xis = {
    id,
    sabor,
    preco,
    descricao,
    foto,
  };

  
  const modoAtivado = id > 0;

  const endpoint = baseURL + (modoAtivado ? `/update/${id}` : `/create`)


  const response = await fetch(endpoint, {
    method: modoAtivado ? "put" : "post",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(xis),
  });


  const novoXis = await response.json();

  console.log(novoXis);

  const html = `
  <div class="XisListaItem" id="XisListaItem_${novoXis.id}">
        <div>
      <div class="XisListaItem__sabor">${novoXis.sabor}</div>
      <div class="XisListaItem__preco">${novoXis.preco}</div>
      <div class="XisListaItem__descricao">${novoXis.descricao}

      <div class="XisListaItem__acoes Acoes">
      <button id="btn__editar" class="acoes__editar btn" onclick="abrirModal(${novoXis.id})">EDITAR</button>
      <button onclick="deleteXis(${novoXis.id})" class="acoes__apagar btn">DELETAR</button>
        </div>

      </div>
    </div>
    <img class="XisListaItem__foto" src= ${novoXis.foto} alt="${novoXis.sabor}" />

  </div>
    `;

  if (modoAtivado) {
    document.querySelector("#XisListaItem_" + novoXis.id).outerHTML = html;
  } else {
    document.querySelector("#xisList").insertAdjacentHTML("beforeend", html);
  }

    fecharModal()
}
  
async function deleteXis(id){
  const response = await fetch(`${baseURL}/delete/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });


  document.querySelector("#xisList").innerHTML = "";
  findAllXis();

}


