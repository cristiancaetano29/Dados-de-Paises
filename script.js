let buscarPaís = document.querySelector('#buscar-pais')
let campoDeBusca = document.querySelector('#campo-de-busca')
let resultadoBusca = document.querySelector('#resultado')

buscarPaís.addEventListener('click', function () {
    let pais = campoDeBusca.value;
    let URL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(URL)

    fetch(URL)
        .then((retorno) => retorno.json())
        .then((dados) => {
            resultadoBusca.innerHTML = `
                <img src="${dados[0].flags.svg}"
                class="imagem-pais">
                <h2>${dados[0].name.common}</h2>

                <div class='container-result'>
                    <h4>Capital:</h4>
                    <span>${dados[0].capital[0]}</span>
                </div>

                <div class='container-result'>
                    <h4>Continente:</h4>
                    <span>${dados[0].continents[0]}</span>
                </div>

                <div class='container-result'>
                    <h4>Regiâo:</h4>
                    <span>${dados[0].region}</span>
                </div>

                <div class='container-result'>
                    <h4>População:</h4>
                    <span>${dados[0].population.toLocaleString()}</span>
                </div>

                <div class='container-result'>
                    <h4>Idioma Nativo:</h4>
                    <span>${Object.values(dados[0].languages).toString().split(',')}</span>
                </div>

                <div class='container-result'>
                    <h4>Moeda Corrente:</h4>
                    <span>${dados[0].currencies[Object.keys(dados[0].currencies)].name} || (-${Object.keys(dados[0].currencies)[0]}-)</span>
                </div>
            `
            console.clear()
        })
        .catch(() => {
            if(campoDeBusca.length == 0){
                resultadoBusca.innerHTML = `
                    <h3>Digite um país para buscar</h3>
                `
            }
            else{
                resultadoBusca.innerHTML = `
                    <h3>Nome do País Errado Tente Novamnete!</h3>
                `
            }
        })
})