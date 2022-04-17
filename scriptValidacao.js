
const inputSabor = document.querySelector("#sabor");
const labelSabor = document.querySelector("#labelSabor")

const inputDescricao = document.querySelector("#descricao");
const labelDescricao = document.querySelector("#labelDescricao")

const inputPreco = document.querySelector("#preco");
const labelPreco = document.querySelector("#labelPreco")

const inputFoto = document.querySelector("#foto");
const labelFoto = document.querySelector("#labelFoto")

const buttonCadastrar = document.querySelector("#button-form-modal")

let campo1 = false;
let campo2 = false;
let campo3 = false;
let campo4 = false;





inputSabor.addEventListener("blur",  ()=>{
    if(inputSabor.value==''){
        labelSabor.innerText = "Sabor: (campo obrigatório)";
        labelSabor.style.color = "red";
        campo1 = false;
        
    }else{
        labelSabor.innerText = "Nome:"
        labelSabor.style.color = "black";
        campo1 = true;
    }
    validarButton();
})

inputDescricao.addEventListener("blur",()=>{
    if(inputDescricao.value == 0){
        labelDescricao.innerText = "Descrição: (campo obrigatório)"
        labelDescricao.style.color = "red";
        campo2= false;
        
    }else{
        labelDescricao.innerText = "Descrição:"
        labelDescricao.style.color = "black";
        campo2 = true;
    }
    validarButton();
});
inputPreco.addEventListener("click",  ()=>{
    if(inputPreco.value==''){
        labelPreco.innerText = "Preço: (campo obrigatório)";
        labelPreco.style.color = "red";
        campo3 = false;
        
    }else{
        labelPreco.innerText = "Preço:"
        labelPreco.style.color = "black";
        campo3 = true;
    }
    validarButton();
})
inputFoto.addEventListener("blur",  ()=>{
    if(inputFoto.value == 0){
        labelFoto.innerText = "Foto: (campo obrigatório)";
        labelFoto.style.color = "red";
        campo4 = false;
    }else{
        labelFoto.innerText = "Foto:"
        labelFoto.style.color = "black";
        campo4 = true;
    }
    validarButton();
})

const validarButton = ()=>{
   
    if((campo1==false)||(campo2==false)||(campo3==false)||(campo4==false)){
       
        buttonCadastrar.setAttribute("disabled", "disabled")
        buttonCadastrar.classList.add("buttonDisable")
    }else{
        
        buttonCadastrar.removeAttribute("disabled", "disabled")
        buttonCadastrar.classList.remove("buttonDisable");
    }   
};

