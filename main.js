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


{
    let x = 1;
    let y = x;
    x = 5;
    console.log(x); // 5
    console.log(y); // 1
}

// 最初 x は 1 で 5 に変更されたので、ここでは 5 になる。
// 一方 y は、 x が 1 のときに代入されたので、こちらは 1 になる。

{
    let x = [1, 2];
    let y = x;
    x = 5;
    console.log(x); // [5, 2]
    console.log(y); // [1, 2]にならない！！！
}
