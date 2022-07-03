
// Created Dog Button
const button = document.createElement('button');
button.innerText = 'Click me to add a new dog';
document.body.append(button);

// Created Cat Button
const catButton = document.createElement('button');
catButton.innerText = 'Add new cat'
document.body.append(catButton);

// Create Users Button
const userButton = document.createElement('button');
userButton.innerText = 'Add username/email'
document.body.append(userButton);

button.addEventListener('click', (e) => {

    const dogFormData = {
        dogName: "Byron",
        dogBreed: "Poodle",
    };

    const configurationObject = {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(dogFormData),
    };

    fetch ('http://localhost:3000/dogs', configurationObject)
    .then((res) => res.json())
});

catButton.addEventListener('click', (e) => {
    
    const catFormData = {
        catName: "Felix",
        catBreed: "Scottish Fold",
    };

    const configurationObject = {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(catFormData),
    };

    fetch ('http://localhost:3000/cats', configurationObject)
    .then((res) => res.json())
});

userButton.addEventListener('click', (e) => {

    const userForm = {
        userName: "monkiesauce",
        userEmail: "rossonevan7281@gmail.com"
    };

    const configurationObject = {
        method: 'POST',
        headers: {
            "Content-type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(userForm),
    };

    function submitData(obj1, obj2)  {
        fetch('http://localhost:3000/users', configurationObject)
        .then((res) => res.json())
        .then((object) => console.log(object))
        .catch((error) => {
            alert('Bad things happened!');
            console.log(error.message);
        })
        return submitData(obj1, obj2);
    };
})