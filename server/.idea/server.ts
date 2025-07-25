

const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.json());

const PORT = 3000;

export interface DataEntry {
    Name: string;
    NumYears: number;
    FavMakeCat: string;
    FavMakeItem: string;
    Comments: string;
}

let allEntries: DataEntry[] = [{ Name: "Test", NumYears: 1, FavMakeCat: "Test", FavMakeItem: "Test", Comments: "Test"}];

function dataProcessing(allEntries: DataEntry[]) {
    // DATA PROCESSING FUNCTION
    return 5;
}

app.listen('/', PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// WHEN SUBMIT BUTTON PRESSED
app.post('/submit', (request, response) => {
    // submitted data is logged on the server
    let newEntry: DataEntry = request.body;
    allEntries.push(newEntry);
    // server processing of data
    let processedStat = dataProcessing(allEntries);
    // processed results sent back to client and displayed
    console.log(processedStat);
    response.json(processedStat);
})

app.get('/logs', (request, response) => {
    // list of submitted requests is displayed
    const data = allEntries;
    console.log(data);
    response.json(data);
})