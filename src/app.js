import renderImage from '../src/render-image.js';
import hornedCreatures from '../data/hornedCreatures.js';
import htmlToDom from './html-to-DOM.js';

// we are referencing the list
const list = document.querySelector('.horned-creatures');

// need to loop the horned creatures
hornedCreatures.forEach(creature => {
    const html = renderImage(creature);
    const dom = htmlToDom(html);
    list.appendChild(dom);
});