document.querySelector('button').addEventListener('click', getData)

async function getData() {
    const rapperName = document.querySelector('input').value

    try {
        const res = await fetch(`https://robertlent-rap-names-api.herokuapp.com/api/${rapperName}`)
        const data = await res.json()

        document.querySelector('#name').innerHTML = `Birth Name:<br>&emsp;&emsp;${data.birthName}`

        const dob = new Date(data.dob)
        const today = new Date()
        const diff = today.getTime() -dob.getTime()
        const age = Math.trunc(diff / 31556952000)
        document.querySelector('#age').innerHTML = `Age:<br>&emsp;&emsp;${age} years old`
        
        document.querySelector('#birthLocation').innerHTML = `Born in:<br>&emsp;&emsp;${data.birthLocation}`
    } catch (error) {
        console.log(error);
    }
}