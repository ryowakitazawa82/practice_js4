'use strict';

// {
//     const otherProps = {
//       r: 4,
//       color: 'red',
//     };

//     const point = {
//       x: 100,
//       y: 180,
//       ...otherProps,
//     };
//     // console.log(point);

//     const {x, r, ...others} = point;
//     console.log(x);
//     console.log(r);
//     console.log(others);
//   }

// {
//   const point = {
//     x: 100,
//     y: 180,
//   };

  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   console.log(`Key: ${key} Value: ${point[key]}`);
  // });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ];
//   console.log(points[1].y);
// }


// {
//     let x = 1;
//     let y = x;
//     x = 5;
//     console.log(x); // 5
//     console.log(y); // 1
// }

// 最初 x は 1 で 5 に変更されたので、ここでは 5 になる。
// 一方 y は、 x が 1 のときに代入されたので、こちらは 1 になる。

// {
//     let x = [1, 2];
//     let y = x;
//     x[0] = 5;
    // console.log(x); // [5, 2]
    // console.log(y); // [1, 2]にならない！！！
    // なぜ？
    // 次に y = x とすると、 x に割り当てられた値ではなくて、 x の値がどこに格納されているかという情報だけが作られて、そこに y という名前が付くという仕組みになっています。
    // なぜこのような仕組みになっているかについては、複雑なデータ型はデータ量が大きくなることも多いので、丸ごと値をコピーしてシステムに負荷をかけてしまわないため、と理解しておいても良いかと思います。
// }

// それから、そうは言っても配列やオブジェクトの値を丸ごとコピーしたいというときは、、
// スプレッド演算子を使えば良いので、こちらを [...x] としてあげましょう。
// {
//     let x = [1, 2];
//     let y = [...x];
//     x[0]= 5;
//     console.log(x); // [5, 2]
//     console.log(y); // [1, 2]になる
// }

// {
//     const str = 'hello';

//     console.log(str.length);

//    console.log (str.substring(2, 4));

//    console.log(str[1]);

// }

// {
    // const d = [2019, 11, 14];

    // console.log(d.join('/'));

    // const t = '17:08:24';
    // console.log(t.split(':'));

    // const [hour, minute, second] = t.split(':');
    // console.log(hour);
    // console.log(minute);
    // console.log(second);
// }

// {
//     const scores = [10, 3, 9];

//     let sum = 0;

//     scores.forEach(score => {
//         sum += score;
//     })

//     const avg = sum / scores.length;

    // console.log(sum);
    // console.log(avg);

    // console.log(Math.floor(avg));
    // console.log(Math.ceil(avg));
    // console.log(Math.round(avg));
    // console.log(avg.toFixed(3));

//     console.log(Math.random())
// }

// {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// {
//     const d = new Date();
//     console.group(d);

//     console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
// }

// {

//     const d = new Date(2019, 10); // 2019/11/01 00:00:00
//     d.setHours(10, 20, 30);
//     console.log(d);
// }

// {

    // alert('hello');
//     const answer = confirm('削除しますか？');
//     if (answer) {
//         console.log('削除しました');
//     } else {
//         console.log('キャンセルしました');
//     }
// }

// {
//     let i = 0;

//     function showTime() {
//         console.log(new Date());
//         i++;
//         if (i > 2) {
//             clearInterval(intervalId);
//         }
//     }

//     const intervalId = setInterval(showTime, 1000);
// }

// {
//     let i = 0;

//     function showTime() {
//         console.log(new Date());
//         const timeoutId = setTimeout(showTime, 1000);
//         i++;
//         if (i > 2) {
//             clearInterval(timeoutId );
//         }
//     }

//     showTime();
// }
