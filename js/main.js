document.querySelector('button').addEventListener('click', getData)

async function getData() {
    const rapperName = document.querySelector('input').value

    try {
        const res = await fetch(`https://robertlent-rap-names-api.herokuapp.com/api/${rapperName}`)
        const data = await res.json()

        document.querySelector('#name').innerText = `Birth Name: ${data.birthName}`
        document.querySelector('#age').innerText = `Age: ${data.age}`
        document.querySelector('#birthLocation').innerText = `Born in: ${data.birthLocation}`
    } catch (error) {
        console.log(error);
    }
}