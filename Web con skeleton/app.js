function Zapa() {
    var zapa=document.getElementById('zapaCat')
    var zapatilla=document.getElementById('zapa')
    var cami=document.getElementById('cami')
    var cintu=document.getElementById('cintu')
    zapa.addEventListener('click', function(){
        zapatilla.style.backgroundColor='white'
        zapatilla.style.color='black'
        cami.style.backgroundColor='rgb(31, 28, 28)'
        cintu.style.backgroundColor='rgb(31, 28, 28)'
        cami.style.color='white'
        cintu.style.color='white'
    })
}
function Cami() {
    var cami=document.getElementById('camiCat')
    var zapa=document.getElementById('zapa')
    var camiseta=document.getElementById('cami')
    var cintu=document.getElementById('cintu')
    cami.addEventListener('click', function(){
        camiseta.style.backgroundColor='white'
        camiseta.style.color='black'
        zapa.style.backgroundColor='rgb(31, 28, 28)'
        cintu.style.backgroundColor='rgb(31, 28, 28)'
        zapa.style.color='white'
        cintu.style.color='white'
    })
}
function Cintu() {
    var cintu=document.getElementById('cintuCat')
    var zapa=document.getElementById('zapa')
    var cami=document.getElementById('cami')
    var cinturon=document.getElementById('cintu')
    cintu.addEventListener('click', function(){
        cinturon.style.backgroundColor='white'
        cinturon.style.color='black'
        cami.style.backgroundColor='rgb(31, 28, 28)'
        zapa.style.backgroundColor='rgb(31, 28, 28)'
        cami.style.color='white'
        zapa.style.color='white'
    })
}