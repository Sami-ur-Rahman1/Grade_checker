document.getElementById('gradeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var percentage = parseFloat(document.getElementById('percentage').value);
    var resultElement = document.getElementById('resultDiv');

    if (percentage >= 80) {
        resultElement.textContent = 'Your grade is A+';
    } else if (percentage >= 70) {
        resultElement.textContent = 'Your grade is A';
    } else if (percentage >= 60) {
        resultElement.textContent = 'Your grade is B';
    } else if (percentage >= 50) {
        resultElement.textContent = 'Your grade is C';
    } else {
        resultElement.textContent = 'Your grade is F';
    }
});
