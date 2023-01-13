// addition

const addNum1 = document.getElementById('addNum1')
const addNum2 = document.getElementById('addNum2')
const addResult = document.getElementById('addResult')

document.getElementById('add').addEventListener('click', function () {
    addResult.value =
        parseInt(addNum1.value) + parseInt(addNum2.value)
});

// subtraction

const subNum1 = document.getElementById('subNum1')
const subNum2 = document.getElementById('subNum2')
const subResult = document.getElementById('subResult')

document.getElementById('sub').addEventListener('click', function () {
    subResult.value =
        parseInt(subNum1.value) - parseInt(subNum2.value)
});

// multiplaction

const mulNum1 = document.getElementById('mulNum1')
const mulNum2 = document.getElementById('mulNum2')
const mulResult = document.getElementById('mulResult')

document.getElementById('mul').addEventListener('click', function () {
    mulResult.value =
        parseInt(mulNum1.value) * parseInt(mulNum2.value)
});