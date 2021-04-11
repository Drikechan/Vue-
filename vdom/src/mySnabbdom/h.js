import VNode from './vnode.js';

/* 这边函数我们做的是三种情况判断，因为是实现简易版的vdom，所以只作三种 */
export default function(sel, data, c) {
    /* sel为标签， data是里面的一些属性参数， c是一个变量 */
    if (arguments.length != 3) {
        throw new Error('你传的参数数量不正确');
    }

    /* 第一种情况，只作为文本输出，正常返回vnode */
    if (typeof c == "string" || typeof c == "number") {
        return VNode(sel, data, undefined, c, undefined);
    } 
    /* 当c为数组，里面很可能嵌套h函数 */
    else if (Array.isArray(c)) {
        let children = [];
        for (let i = 0; i < c.length; i++) {
            /* 如果c里面的每一项包含sel属性且返回类型是object对其进行取反 */
            if (!(typeof c[i] == "object" && c[i].hasOwnProperty('sel'))) {
                throw new Error('你传的参数其中有项不对');
            }
            /* 满足上面的条件就放入children */
            children.push(c[i]); 
        }
        return VNode(sel, data, children, undefined, undefined);

    } else if (typeof c == "object" && c.hasOwnProperty('sel')) {
        let children = [c];
        return VNode(sel, data, children, undefined, undefined);  
    } else {
        throw new Error("传入的数据不对");
    }
}

