function showState(state){

document.getElementById("idleState").classList.add("hidden")
document.getElementById("loadingState").classList.add("hidden")
document.getElementById("emptyState").classList.add("hidden")
document.getElementById("errorState").classList.add("hidden")

if(state==="idle"){
document.getElementById("idleState").classList.remove("hidden")
}

if(state==="loading"){
document.getElementById("loadingState").classList.remove("hidden")
}

if(state==="empty"){
document.getElementById("emptyState").classList.remove("hidden")
}

if(state==="error"){
document.getElementById("errorState").classList.remove("hidden")
}

}
