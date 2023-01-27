/*
Crystal Ling
Irimina pd 7 - 8 Even
January 26, 2023
*/
/*
1) Programs can communicate with each other from the
   frontend to the backend server with the use of API
   services such as Postman or ThunderClient. For this
   program in particular, a user can get, post, put, and
   delete songs on a playlist.

2) From this project, I learned how to allow communication
   between the backend server and the frontend website with
   the use of API service, ThunderClient. I also learned how
   to use speific http requests such as get, post, put, and 
   delete in depth

3) I could try to learn more https requests and add them in
   where they might fit.
*/
const express = require('express');
const app = express();

app.use(express.json());

let musicList =
[
    {
        id: 1,
        name: "If I Killed Someone For You",
        genre: "Pop",
        month: "November",
        year: "2018"
    },
    {
        id: 2,
        name: "Bohemian Rhapsody",
        genre: "Rock",
        month: "October",
        year: "1975"
    },
    {
        id: 3,
        name: "Castle on a Hill",
        genre: "Pop",
        month: "January",
        year: "2017"
    },
    {
        id: 4,
        name: "If I Can't Have You",
        genre: "Pop",
        month: "April",
        year: "2019"
    },
    {
        id: 5,
        name: "Jenny",
        genre: "Electronic",
        month: "May",
        year: "2013"
    },
    {
        id: 6,
        name: "Lost in Japan",
        genre: "Pop",
        month: "March",
        year: "2018"
    },
    {
        id: 7,
        name: "That's What I Like",
        genre: "Funk",
        month: "January",
        year: "2017"
    },
    {
        id: 8,
        name: "Amnesia Was Her Name",
        genre: "Alternative",
        month: "December",
        year: "2007"
    },
    {
        id: 9,
        name: "Good Things Fall Apart",
        genre: "Electronic",
        month: "May",
        year: "2019"
    },
    {
        id: 10,
        name: "Line Without a Hook",
        genre: "Alternative",
        month: "April",
        year: "2016"
    },
    {
        id: 11,
        name: "Nobody",
        genre: "Alternative",
        month: "June",
        year: "2018"
    },
    {
        id: 12,
        name: "Devil Town",
        genre: "Pop",
        month: "November",
        year: "2015"
    },
    {
        id: 13,
        name: "Oh Ana",
        genre: "Alternative",
        month: "February",
        year: "2007"
    },
    {
        id: 14,
        name: "Heather",
        genre: "Pop",
        month: "September",
        year: "2020"
    }
]

// Filter through postman
app.get('/', (req, res) => {

    res.send("A Music App");

});

app.get('/api/music', (req, res) =>
{//nothing there
    if (req.body.month === undefined && req.body.year === undefined && req.body.genre === undefined)
    {
        res.send(musicList);
        return;
    }

    if ((req.body.month && req.body.year) || (req.body.month && req.body.genre) || (req.body.year && req.body.genre))
    {
        res.status(400).send("Error: Please sort by only one category")
        return
    }
    
    music = [];

    if (req.body.month)
    {
        for (i = 0; i < musicList.length; i++)
        {
            if (musicList[i].month == req.body.month)
            {
                music.push(musicList[i]);
            }
        }
    }
    else if (req.body.year)
    {
        for (i = 0; i < musicList.length; i++)
        {
            if (musicList[i].year == req.body.year)
            {
                music.push(musicList[i]);
            }
        }
    }
    else if (req.body.genre)
    {
        for (i = 0; i < musicList.length; i++)
        {
            if (musicList[i].genre == req.body.genre)
            {
                music.push(musicList[i]);
            }
        }
    }

    if (music.length == 0)
    {
        res.send("No songs found based on filter");
        return;
    }

    res.send(music);

});

app.get('/api/music/:id', (req, res) => 
{
    if (req.params.id < 1 || req.params.id > musicList.length)
    {
        res.status(404).send("Error: Song not found");
        return;
    }
    return res.send(musicList[req.params.id - 1]);
});

app.post('/api/music', (req,res) =>
{
    if (req.body.name === undefined || req.body.genre == undefined)
    {
        res.status(400).send("Error: Name or genre not declared");
        return;
    }

    if (req.body.month === undefined || req.body.year === undefined)
    {
        res.status(400).send("Error: Month or year not declared");
        return;
    }
    
    if (req.body.name.length < 3 || req.body.name.length > 31 || req.body.genre.length < 3 || req.body.genre.length > 31)
    {
        res.status(400).send("Error: The character count of name or genre must be within 3 and 30");
        return;
    }

    musicList[musicList.length] =
    {
        id: musicList.length + 1,
        name: req.body.name,
        genre: req.body.genre,
        month: req.body.month,
        year: req.body.year
    }

    res.status(200).send(musicList);
})

app.put('/api/music/:id', (req, res) => 
{
    if (req.params.id < 1 || req.params.id > musicList.length)
    {
        res.status(404).send("Error: ID not found");
        return;
    }

    if (req.body.name === undefined || req.body.genre == undefined)
    {
        res.status(400).send("Error: Name or genre not declared");
        return;
    }

    if (req.body.month === undefined || req.body.year === undefined)
    {
        res.status(400).send("Error: Month or year not declared");
        return;
    }
    
    if (req.body.name.length < 3 || req.body.name.length > 31 || req.body.genre.length < 3 || req.body.genre.length > 31)
    {
        res.status(400).send("Error: The character count of name or genre must be within 3 and 30");
        return;
    }

    musicList[req.params.id - 1] =
    {
        id: req.params.id,
        name: req.body.name,
        genre: req.body.genre,
        month: req.body.month,
        year: req.body.year
    }
    
    res.status(200).send(musicList);
})

app.delete('/api/music/:id', (req, res)=>
{
    if (req.params.id < 1 || req.params.id > musicList.length)
    {
        res.status(404).send("Error: ID not found");
        return;
    }
    
    musicList.splice(req.params.id - 1, 1);
    
    for (i = req.params.id - 1; i < musicList.length; i++)
    {
        musicList[i].id = i + 1;
    }

    res.status(200).send(musicList);
})

app.listen(3000, () =>
{ 
    console.log('app listening on port 3000'); 
});