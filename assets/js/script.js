// video area data
let videoFrame = document.querySelector('.video-frame');
let moduloNumber = 0;
let aulaNumber = 0;

//modulo area data
let moduloArea = document.querySelector('.modulo-area');
let moduloItem = document.querySelectorAll('.modulo-item');


// Events
showVideo(0, 0);
montarAulas();
changeActiveButton(moduloNumber, aulaNumber);

// Functions
function showVideo(mNumber, aNumber) {
    let url = videoList[mNumber].aulas[aNumber][1];
    videoFrame.innerHTML = `<iframe controls="0" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    moduloNumber = mNumber;
    aulaNumber = aNumber;
    montarAulas();
}

function montarAulas() {
    let html = '';
    let modulo = 0;
    let aula = 0;

    videoList.forEach((moduloElement, moduloIndex) => {
        html += `<div class="modulo-container"><div class="modulo-title">${moduloElement.modulo}</div>`;
        moduloElement.aulas.forEach((aulaElement, aulaIndex) => {
            html += `<div onclick="showVideo(${moduloIndex},${aulaIndex})" class="modulo-item" modulo="${moduloIndex}" aula="${aulaIndex}"><span class="sm-ball">&#10004</span>${aulaElement[0]}</div>`;
        })
        html += `</div>`;
    });
    moduloArea.innerHTML = html;

    //colocar active no botão
    document.querySelectorAll('.modulo-item').forEach((aulaElement, aulaIndex) => {
        aulaElement.querySelector('span').classList.remove('active');
        modulo = aulaElement.getAttribute('modulo');
        aula = aulaElement.getAttribute('aula');
        if((moduloNumber == +modulo) && (aulaNumber == +aula)) {
            aulaElement.querySelector('span').classList.add('active');
        }
    });
}