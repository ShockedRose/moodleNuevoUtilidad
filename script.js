const Concept = domString => new DOMParser().parseFromString(domString, 'text/html').body.firstChild;

const conceptsContainer = document.querySelector('.allConcepts');

const button = document.querySelector('input[type="button"]');

const text = document.querySelector('input[type="text"]');

button.addEventListener('click', () => {
    let newConcept = Concept(`<section class="concept"><h4 class="title">${text.value}</h4><textarea class="textbox"></textarea><button class="save">Save</button></section>`);

    conceptsContainer.insertAdjacentElement('beforeend', newConcept);

});

