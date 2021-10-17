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

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const targetNode = document.getElementById('target');

//     //    targetNode.className = 'my-color my-border';
//     //    targetNode.classList.add('my-color');
//     // if (targetNode.classList.contains('my-color') === true) {
//     //     targetNode.classList.remove('my-color');
//     // } else {
//     //     targetNode.classList.add('my-color');
//     // }
//     targetNode.classList.toggle('my-color');
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const targetNode = document.getElementById('target');

//     // targetNode.textContent = 'Dotinstall';
//     targetNode.textContent = targetNode.dataset.transition;
//     });
// }

{
    document.querySelector('button').addEventListener('click', () => {
        const item2 = document.createElement('li');
        item2.textContent = 'item 2';

        // const ulNode = document.querySelector('ul');
        const ul = document.querySelector('ul');
        ul.appendChild(item2);
        });

}

