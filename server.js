const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static(__dirname + '/public'))

const rappers = {
    '21 savage': {
        'dob': '10/22/1992',
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'Plaistow, London, England'
    },
    'chance the rapper': {
        'dob': '4/16/1993',
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'snoop dogg': {
        'dob': '10/20/1971',
        'birthName': 'Calvin Cordozar Broadus Jr',
        'birthLocation': 'Long Beach, California'
    },
    'ice cube': {
        'dob': '6/15/1969',
        'birthName': 'O\'Shea Jackson',
        'birthLocation': 'Los Angeles, California'
    },
    'eminem': {
        'dob': '10/17/1972',
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri'
    },
    'jay-z': {
        'dob': '12/4/1969',
        'birthName': 'Shawn Corey Carter',
        'birthLocation': 'New York, New York'
    },
    '50 cent': {
        'dob': '7/6/1975',
        'birthName': 'Curtis James Jackson III',
        'birthLocation': 'Queens, New York'
    },
    'lil wayne': {
        'dob': '9/27/1982',
        'birthName': 'Dwayne Michael Carter Jr',
        'birthLocation': 'New Orleans, Louisiana'
    },
    'drake': {
        'dob': '10/24/1986',
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronta, Ontario, Canada'
    },
    'unknown': {
        'dob': '1/1/1970',
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase()

    if (rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running is running on port ${PORT}`);
})