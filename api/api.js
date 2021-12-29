// Imports
const fs = require('fs');
const cors = require('cors');
const express = require('express');

// Port Configuration
const port = 3001;

// Load in JSON file (normally this would be done with a database query at the time of the request)
const kits = JSON.parse(fs.readFileSync('./api/KITS_SHIPPING_DATA.json').toString());

// Set up the express server
var app = express();

// Setup CORS
app.use(cors());

// Start Listening on Port 3001
var server = app.listen(port, function () {
    console.log(`API listening at http://localhost:${port}`);
});

// Get all data
app.get('/kits', (req, res) => {

    // Return all of the kits
    res.type('json');
    res.end(JSON.stringify(kits));

});

// Search Kits
app.get('/kits/search/:id', (req, res) => {

    // Get the id out of the request
    var id = req.params.id;

    // If search is blank return all data
    if (id == '') {

        // Return all of the kits
        res.type('json');
        res.end(JSON.stringify(kits));

    }
    // Otherwise return the filtered data
    else {

        // Filter the kits by the id
        var filtered_kits = kits.filter( kit => kit.label_id.indexOf(id) != -1 );

        // Return the filtered list of kits
        res.type('json');
        res.end(JSON.stringify(filtered_kits));

    }
});
