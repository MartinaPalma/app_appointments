const medicalprofessions = []

const state = {
    config: {
        endpoint: "https://jsonplaceholder.typicode.com/todos/"
    },
    items: [],
    completed: []
}


async function getUsers() {

    let arrayUsers = [];
    try {
        const response = await fetch(state.config.endpoint);

        arrayUsers = await response.json();
    } catch (e) {
        throw e;
    }

    return arrayUsers;
}


getUsers()
    .then((users) => {

        state.items = users;

        state.completed = users.filter((item) => item.completed);

        // render();
    });



function createAccount(medical) {

    const newAccount = document.createElement("button");
    newAccount.classList.add('account');

    if (medical.completed) {
        newAccount.classList.add('is-completed')
    }


    const professional = document.createElement("h3");
    const newContent = document.createTextNode(medical.id);
    professional.appendChild(newContent);

    newAccount.appendChild(professional);


    const nameMedical = document.createElement("span");
    const NewNameMedical = document.createTextNode(medical.title);

    nameMedical.appendChild(NewNameMedical);

    newAccount.appendChild(nameMedical);

    const myContainer = document.getElementById("container");

    myContainer.appendChild(newAccount);

}


const WaitingBtn = document.getElementById("waitingBtn");
WaitingBtn.addEventListener("click", function() {

    render(false)
});


const AllBtn = document.getElementById('allBtn');
AllBtn.addEventListener("click", function() {

    render()
});


function resetContainer() {
    document.getElementById('container').innerHTML = '';


}


function render(allAppointmens = true) {
    resetContainer();
    let arrayToRender = [];
    console.log(state)
    if (allAppointmens === false) {

        arrayToRender = state.completed;

    } else {

        arrayToRender = state.items;
    }

    for (let i = 0; i < arrayToRender.length; i++) {
        createAccount(arrayToRender[i])
    }
}