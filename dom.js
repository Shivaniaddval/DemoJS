// Document object model

// console.log(window);
// alert(1);

//single element
// const form = document.getElementById('my-form');
// console.log(form);

// const form = document.querySelector('.container');
// console.log(form);





//multiple element



// const btn = document.querySelector('.btn');
// // btn.style.background = 'black';
// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log(e.target.id);
//     console.log('click')

//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark');
    
// });

// const myForm = document.getElementById("my-form");
// const nameInput = document.getElementById('#name');
// const emailInput = document.getElementById('#email');
// const msg = document.getElementById('msg');
// const userslsit = document.getElementById('#users');

// myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    // e.preventDefault();

    if(nameInput.value == '' || emailInput.value == ''){
        console.log('error')
        alert('Please enter fields');

    }else{
        console.log('success')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userslist.appendChild(li);
        nameInput.value = ''
        emailInput.value = '';
    }

}

   