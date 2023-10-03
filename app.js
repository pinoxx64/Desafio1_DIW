function Zapa() {
    var zapa=document.getElementById('zapaCat')
    var zapatilla=document.getElementById('zapa')
    var cami=document.getElementById('cami')
    var cintu=document.getElementById('cintu')
    zapa.addEventListener('click', function(){
        zapatilla.style.backgroundColor='black'
        cami.style.backgroundColor='black'
        cintu.style.backgroundColor='black'
    })
}
function Cami() {
    var cami=document.getElementById('camiCat')
    var zapa=document.getElementById('zapa')
    var camiseta=document.getElementById('cami')
    var cintu=document.getElementById('cintu')
    cami.addEventListener('click', function(){
        camiseta.style.backgroundColor='black'
        zapa.style.backgroundColor='black'
        cintu.style.backgroundColor='black'
    })
}
function Cintu() {
    var cintu=document.getElementById('cintuCat')
    var zapa=document.getElementById('zapa')
    var cami=document.getElementById('cami')
    var cinturon=document.getElementById('cintu')
    cintu.addEventListener('click', function(){
        cinturon.style.backgroundColor='black'
        cami.style.backgroundColor='black'
        zapa.style.backgroundColor='black'
    })
}