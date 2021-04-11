export default function createElement(vnode) {

    /* 创建一个dom节点 */
    let element = document.createElement(vnode.sel);
    /* 有子节点还是有文本 */
    if (vnode.text != '' && vnode.children == undefined || vnode.children.length == 0) {
        /* 文字 */
        element.innerText = vnode.text;
        /* 补充elm属性 */
        vnode.elm = element;
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {

        for (let i = 0; i < vnode.children.length; i++) {
            let ch = vnode.children[i];
            console.log(ch);
            let newDOM =  createElement(ch);
            element.appendChild(newDOM);
        }

    }
    vnode.elm = element;
    return vnode.elm;
}