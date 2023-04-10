const inputValue = document.getElementById('myInput');

inputValue.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();

        document.getElementById('myBtn').click();

        console.log();
    }
}) 