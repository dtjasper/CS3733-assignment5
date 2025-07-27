import express = require('express');
import cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const PORT = 3000;

export interface DataEntry {
    Name: string;
    NumYears: string;
    FavMakeCat: string;
    FavMakeItem: string;
    Comments: string;
}

interface statsArray {
    ClothingVotes: number;
    StuffedAnimalVotes: number;
    HouseItemVotes: number;
    OtherVotes: number;
    NoVotes: number;
}

let allEntries: DataEntry[] = [
    { Name: "Delia", NumYears: "5", FavMakeCat: "Clothing", FavMakeItem: "Eye sweater", Comments: "Support the arts"},
    { Name: "Walter", NumYears: "2", FavMakeCat: "Stuffed Animal/Toy", FavMakeItem: "Stuffed snake", Comments: "Still learning!"},
    { Name: "Samantha", NumYears: "1", FavMakeCat: "Clothing", FavMakeItem: "Patchwork shorts", Comments: "Find me on instagram"},
    { Name: "Joanne", NumYears: "10", FavMakeCat: "Household Item", FavMakeItem: "Blanket", Comments: "I enjoy making things that take a long time"},
    { Name: "Michael", NumYears: "8", FavMakeCat: "Other", FavMakeItem: "Dice bag for DnD", Comments: "I made these for my DnD group"},
    { Name: "Sadie", NumYears: "3", FavMakeCat: "Clothing", FavMakeItem: "Tank top", Comments: "Made for a concert"},
    { Name: "Joe", NumYears: "4", FavMakeCat: "Stuffed Animal/Toy", FavMakeItem: "Stuffed dinosaur", Comments: "Dinosaurs are my favorite animal"},
    { Name: "Jane", NumYears: "0.5", FavMakeCat: "", FavMakeItem: "", Comments: "I am a beginner"}
];

function dataProcessing(allEntries: DataEntry[]) {
    let curStats: statsArray =
        {ClothingVotes: 0, StuffedAnimalVotes: 0, HouseItemVotes: 0, OtherVotes: 0, NoVotes: 0};

    for(let i = 0; i < allEntries.length; i++) {
        let tempVal = allEntries[i].FavMakeCat;
        if(tempVal == "Clothing") {
            curStats.ClothingVotes++;
        }
        else if(tempVal == "Stuffed Animal/Toy") {
            curStats.StuffedAnimalVotes++;
        }
        else if(tempVal == "Household Item") {
            curStats.HouseItemVotes++;
        }
        else if(tempVal == "Other") {
            curStats.OtherVotes++;
        }
        else {
            curStats.NoVotes++;
        }
    }
    return curStats;
}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



// WHEN SUBMIT BUTTON PRESSED
app.post('/submit', (req, res) => {
    // submitted data is logged on the server
    let newEntry: DataEntry = req.body;
    allEntries.push(newEntry);
    // server processing of data
    let processedStat = dataProcessing(allEntries);
    // processed results sent back to client and displayed
    res.json(processedStat);

})

app.get('/logs', (req, res) =>  {
    // list of submitted requests is displayed
    const data = allEntries;
    console.log(data);
    res.json(data);
})
