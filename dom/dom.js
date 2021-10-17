'use strict';

// {
//     function update() {
//         document.getElementById('target').textContent = 'Changed!!';
//     }

//     setTimeout(update, 1000);
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         document.getElementById('target').textContent = 'Changed!!';
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const targetNode = document.getElementById('target');

//         targetNode.textContent = 'Changed!!';
//         targetNode.title = 'Changed!!';
//         targetNode.style.color = 'red';
//         targetNode.style.backgroundColor = 'skyblue';
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const targetNode = document.getElementById('target');

//        targetNode.className = 'my-color my-border';
//     });
// }

{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

       targetNode.className = 'my-color my-border';
    });
}

