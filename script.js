const Concept = domString => new DOMParser().parseFromString(domString, 'text/html').body.firstChild;

const concept = Concept('<section class="concept"><h4 class="title">1) Defina que es Moodle</h4><textarea class="textbox"></textarea><button class="save">Save</button></section>');

