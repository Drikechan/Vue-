// import {
//     init,
//     classModule,
//     propsModule,
//     styleModule,
//     eventListenersModule,
//     h,
//   } from "snabbdom";
import h from './mySnabbdom/h.js';
import patch from './mySnabbdom/patch.js';

let myNode = h('ul', {}, [
    h('li', {}, '1'),
    h('li', {}, '2'),
    h('li', {}, '3'),
    h('li', {}, '4'),
]);
let container = document.getElementById('container');
patch(container, myNode);
  
