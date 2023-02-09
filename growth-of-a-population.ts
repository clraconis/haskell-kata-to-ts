/*
 * https://www.codewars.com/kata/563b662a59afc2b5120000c6/haskell
 */
 
 function* autoIncrease(start: number = 0) {
    let n = start;
    while (true) {
        yield n++;
    }
}

const take = (n: number) => function* <T>(arr: Iterable<T>) {
    for (const i of arr) {
        if (--n < 0) {
            return;
        }

        yield i;
    }
}

const takeWhile = <T>(pred: (arg: T) => boolean) => function* (arr: Iterable<T>) {
    for (const item of arr) {
        if (!pred(item)) {
            return;
        }

        yield item;
    }
}

const iterate = <T>(fn: (arg: T) => T) => function* (init: T) {
    let result = init;
    while (true) {
        yield result;
        result = fn(result);
    }
}

function takeAll<T>(iter: Iterable<T>) {
    const arr: T[] = [];
    for (const i of iter) {
        arr.push(i);
    }
    return arr;
}

const nextYear = (percent: number, aug: number) => (p0: number) => aug + Math.floor(p0 * (1 + percent / 100));

const nbYear = (p0: number, percent: number, aug: number, p: number) => {
    const it = iterate(nextYear(percent, aug))(p0);
    const t = takeWhile((n: number) => n < p)(it);
    return takeAll(t).length
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
