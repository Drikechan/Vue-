import VNode from './vnode.js';
import createElement from './createElement.js';
export default function (oldVal, newVal) {
    /* 判断传入的 oldVal是dom节点还是虚拟节点，如果是dom节点需要包装成虚拟节点 */
    if (oldVal.sel == '' || oldVal.sel == undefined) {
        oldVal = VNode(oldVal.tagName.toLowerCase(), {}, [], undefined, oldVal);
    }

    /* 判断传入的key和标签是否相同，相同则做精细化比较，否则就删除重建 */
    /* 因为vdom如果进行递归查询的话，复杂度太高，O(n^3),vue就采用，同级比较，标签或者key不相同
    就删除节点
    */
    if (oldVal.key === newVal.key && oldVal.sel === newVal.sel) {
        console.log('做精细化比较');
    } else {
        let newElement =  createElement(newVal);
        if (oldVal.elm.parentNode && newElement) {
            oldVal.elm.parentNode.insertBefore(newElement, oldVal.elm);
            console.log(oldVal.elm.parentNode);
        }
        oldVal.elm.parentNode.removeChild(oldVal.elm);
      console.log('暴力删除重建');
    }
}