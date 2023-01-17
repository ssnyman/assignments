let form = document.getElementById('airline-form')
let submit = document.getElementById('submit')

function formAlert(event) {
    event.preventDefault()
    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const destination = form.elements["destination"].value;
    const diet = [];

    if (form.elements["veggie"].checked) {
        diet.push(document.getElementById('veggie').value);
    } if (form.elements["lactose-free"].checked) {
        diet.push(document.getElementById('lactose-free').value);
    } if (form.elements["gluten-free"].checked) {
        diet.push(document.getElementById('gluten-free').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDiet: " + diet + "");
}

submit.addEventListener('click', formAlert);