// 题目: 分发饼干
/**
 * 题目描述：
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。
 * 但是，每个孩子最多只能给一块饼干。对每个孩子 i ，
 * 都有一个胃口值 gi ，
 * 这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。
 * 如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，
 * 这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

注意：

你可以假设胃口值为正。
一个小朋友最多只能拥有一块饼干。

 */

 // 解题语言: javaScript

 // 解题

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 先将孩子的胃口值与饼干的尺寸值按从大到小排序
    g.sort((a, b) => {return b - a})
    s.sort((a, b) => {return b - a})
    // 声明 胃口值下标，尺寸值小标、结果
    let [gi, sj, res] = [0,0,0]

    // 将两个数组元素在自身长度内进行比较
    while (gi < g.length && sj < s.length) {
        if (s[sj] >= g[gi]) { // 如果尺寸值满足胃口值，则完成一个分配
            gi++  // 下一个孩子
            sj++  // 下一个饼干
            res++ // 分配完成数
        } else {
            gi++  // 不匹配，则将当前尺寸值去匹配下一个孩子
        }
    }
    return res
};