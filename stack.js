// 堆栈分析

// r:
// start:
[
    [[this], [{}]],
],

    // code: 33, 定义栈长度 length = 3;
    [
        [[this], [{}]], , ,
    ],
    // code: 25, 为变量创建空间 初始化r[n] = []; 此时 n=2
    [
        [[this], [{}]], , [],
    ],
    // code: 16, 空字符串压栈 r.push('');
    [
        [[this], [{}]], , [], '',
    ],
    // code: 68, 写入字符W 
    [
        [[this], [{}]], , [], 'W',
    ],
    // code: 68, 写入字符i
    [
        [[this], [{}]], , [], 'Wi',
    ],
    // code: 68, 写入字符n
    [
        [[this], [{}]], , [], 'Win',
    ],
    // code: 68, 写入字符d
    [
        [[this], [{}]], , [], 'Wind',
    ],
    // code: 68, 写入字符o
    [
        [[this], [{}]], , [], 'Windo',
    ],
    // code: 68, 写入字符w
    [
        [[this], [{}]], , [], 'Window',
    ],
    // code: 45, 设定上下文 r.push([c, r.pop()]);
    // 将本地Window绑定到窗口的Window
    [
        [[this], [{}]], , [], [Window, 'Window'],
    ],
    // code: 16, 空字符串压栈 r.push('');
    [
        [[this], [{}]], , [], [Window, 'Window'], '',
    ],
    // code: 68, 写入字符C 
    [
        [[this], [{}]], , [], [Window, 'Window'], 'C',
    ],
    // code: 68, 写入字符A
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA',
    ],
    // code: 68, 写入字符1
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA1',
    ],
    // code: 68, 写入字符8
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA18',
    ],
    // code: 68, 写入字符0
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA180',
    ],
    // code: 68, 写入字符7
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA1807',
    ],
    // code: 68, 写入字符E
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA1807E',
    ],
    // code: 68, 写入字符B
    [
        [[this], [{}]], , [], [Window, 'Window'], 'CA1807EB',
    ],
    // code: 65, 注册CA1807EB到本地的Window
    // var n = r.pop();
    // var t = r.pop();
    // r.push([t[0][t[1]], n]);
    [
        [[this], [{}]], , [], [Window, 'CA1807EB'],
    ],
    // code: 17, 该变栈指针
    // f = e[f++] = 2426
    [
        [[this], [{}]], , [], [Window, 'CA1807EB'],
    ],
    // code: 3,
    // 取出下一个指令 o = 38
    // var o = e[f++];
    // var u = [];
    // // 取出下一个指令 n = 0
    // var n = e[f++];
    // // 取出下一个指令 t = 1
    // var t = e[f++];
    // var p = [];
    // 2426: 3
    // 2427: 38
    // 2428: 0
    // 2429: 1
    // 2430: 3
    // 2431: 8
    // 2432: 31
    // 2433: 0
    // 2434: 5
    // 2435: 7
    // 2436: 37
    // for (var h = 0; h < n; h++){
    //     // 将堆栈中的值复制一份到本地
    //     u[e[f++]] = r[e[f++]];
    // }
    // for (h = 0; h < t; h++){
    //     p[h] = e[f++];
    // }
    // r.push(
    //     function i() {
    //         var n = u.slice(0);
    //         n[0] = [this],
    //             n[1] = [arguments],
    //             n[2] = [i];
    //         for (var t = 0; t < p.length && t < arguments.length; t++)
    //             0 < p[t] && (n[p[t]] = [arguments[t]]);
    //         return __TENCENT_CHAOS_VM(o, e, c, n, l, g, s, a)
    //     }
    // )

    // p[0] = 3
    [
        [[this], [{}]], , [], [Window, 'CA1807EB'], (function () { }),
    ],
    // code: 8, 复制操作 Window.CA1807EB = (function(){})
    // var n = r[r.length - 2];
    // n = r[3] = [Window, 'CA1807EB']
    // n[0][n[1]] = r[r.length - 1]
    // CA1807EB = (function(){})
    [
        [[this], [{}]], , [], [Window, 'CA1807EB'], (function () { }),
    ],
    // code: 31, 交换位置, 将(function(){})放到它的引用之前
    // var n = e[f++]; n = 0
    // var t = r[r.length - 2 - n]; t=r[3] = [Window, 'CA1807EB']
    // r[r.length - 2 - n] = r.pop();
    // r.push(t);
    [
        [[this], [{}]], , [], (function () { }), [Window, 'CA1807EB'],
    ],
    // code: 5, 准备停机
    [
        [[this], [{}]], , [], (function () { }), [Window, 'CA1807EB'], undefined,
    ],
    // code: 7 停机
    [
        [[this], [{}]], , [], (function () { }), [Window, 'CA1807EB'], undefined,
    ],


    // Window.CA1807EB堆栈 f=38
    // code: 33, 设置栈长度 r.length = 7
    // arguments = [{"c":"CA1807EB","a":[1037027,1281649,5382882,9502615,7143477,3963635,1508435,7953927,7482995,4339296,8244577,8544574],"t":"000013030100000291524EB80D923B0D"}]
    [
        [[this], [arguments], [i], [arguments[0]]], , , ,
    ],
    // code: 25, 创建变量空间 实际上该变量已存在
    // r[2] = r[2] === undefined ? [] : r[2]
    [
        [[this], [arguments], [i], [arguments[0]]], , , ,
    ],
    // code: 25, 创建变量空间 实际上该变量已经存在
    // r[3] = r[3] === undefined ? [] : r[3]
    [
        [[this], [arguments], [i], [arguments[0]]], , , ,
    ],
    // code: 25, 创建变量空间 r[4]
    // r[4] = r[4] === undefined ? [] : r[4]
    [
        [[this], [arguments], [i], [arguments[0]]], [], , ,
    ],
    // code: 25, 创建变量空间 r[5]
    // r[5] = r[5] === undefined ? [] : r[5]
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], ,
    ],
    // code: 25, 创建变量空间 r[5]
    // r[6] = r[6] === undefined ? [] : r[6]
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [],
    ],
    // code: 12, 将下一个数压栈
    // var n = e[f++];
    // r.push([n]);
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4],
    ],
    // code: 16 '' 压栈
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], '',
    ],
    // code: 68, 写入字符B f=53
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], 'B',
    ],
    // code: 68, 写入字符i f=55
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], 'Bi',
    ],
    // code: 68, 写入字符g f=57
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], 'Big',
    ],
    // code: 68, 写入字符I f=59
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], 'BigI',
    ],
    // code: 68, 写入字符n f=61
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], 'BigIn',
    ],
    // code: 68, 写入字符t 
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], 'BigInt',
    ],
    // code: 45 设定变量引用 f=65
    // r.push([c, r.pop()]);
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], [Window, 'BigInt'],
    ],
    // code: 55, 下一个数入栈 0 f=66
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], [Window, 'BigInt'], 0,
    ],
    // code: 52 给 BigInt设置Window的上下文 以及初始0值
    //     var n = e[f++];
    // // n=1 f=70
    // // t=r[-1];
    // var t = n ? r.slice(-n) : [];
    // t=0;
    // r.length -= n;
    // var o = r.pop();
    // o=[Window, 'BigInt'];
    // r.push(o[0][o[1]].apply(o[0], t))
    // BigInt(0)
    [
        [[this], [arguments], [i], [arguments[0]]], [], [], [], [4], [Window, 'BigInt'],
    ],
    // code: 41 f=70
    // r[r[r.length - 2][0]][0] = r[r.length - 1]
    // r[r[7][0]][0] = r[8];
    [
        [[this], [arguments], [i], [arguments[0]]], [[Window, 'BigInt']], [], [], [4], [Window, 'BigInt'],
    ],
    // code: 12, f=71
    [
        [[this], [arguments], [i], [arguments[0]]], [[Window, 'BigInt']], [], [], [4], [Window, 'BigInt'], [5],
    ],
    // code: 55 0入栈 f=73
    [
        [[this], [arguments], [i], [arguments[0]]], [[Window, 'BigInt']], [], [], [4], [Window, 'BigInt'], [5], 0,
    ],
    // code: 41 f=75
    // r[r[r.length - 2][0]][0] = r[r.length - 1]
    // r[r[9][0]][0] = r[10];
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], [5], 0,
    ],
    // code: 31 f=76
    // var n = e[f++];
    // n = 0
    // var t = r[r.length - 2 - n];
    // t = r[9] = [5]
    // r[r.length - 2 - n] = r.pop();
    // r.push(t);
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5],
    ],
    // code: 12 f=78 [6]入栈
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6]
    ],
    // code: 16 ''入栈 f=80
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], '',
    ],
    // code: 68, 写入字符 B
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], 'B',
    ],
    // code: 68, 写入字符 i
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], 'Bi',
    ],
    // code: 68, 写入字符 g
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], 'Big',
    ],
    // code: 68, 写入字符 I
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], 'BigI',
    ],
    // code: 68, 写入字符 n
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], 'BigIn',
    ],
    // code: 68, 写入字符 t
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], 'BigInt',
    ],
    // code: 45 f=93
    // r.push([c, r.pop()]);
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], [Window, 'BigInt'],
    ],
    // code: 55 f=94
    // 1入栈
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], [Window, 'BigInt'], 1,
    ],
    // code: 52 f=96 初始化BigInt = 1
    // var n = e[f++];
    // n = 1
    // var t = n ? r.slice(-n) : [];
    // t = r[-1] = 1
    // r.length -= n;
    // var o = r.pop();
    // o = [Window, 'BigInt'];
    // r.push(o[0][o[1]].apply(o[0], t))
    [
        [[this], [arguments], [i], [arguments[0]]], [[0, 'BigInt']], [], [], [4], [Window, 'BigInt'], 0, [5], [6], [Window, 'BigInt:1'],
    ]
