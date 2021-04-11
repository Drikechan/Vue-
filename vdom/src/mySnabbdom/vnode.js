/* 对外暴露一个函数，h函数的节点 */
export default function (sel, data, children, text, elm) {
    return {
        sel, data, children, text, elm
    }
}