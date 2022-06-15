const init = () => {
    //Add event listener to form element
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (e) => {
        //Prevent auto refresh on submit
        e.preventDefault();

        //Access input value from an event object
        console.log(e.target.children[1].value);

        //Access input value directly
        const input = document.querySelector('input#searchByID');
        console.log(input.value);

        //Fetch data
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p')

            title.textContent = data.title
            summary.textContent = data.summary
        });
    });
}

document.addEventListener('DOMContentLoaded', init);