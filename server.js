import express from 'express'
import moongose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

// app config
const app = express();

const port = process.env.PORT || 8001
 const connection_url= 'mongodb+srv://admin:admin@cluster0.3ulpk.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors());


// DB config

moongose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})

// API endpoints
app.get('/',(req,res)=>{

    res.status(200).send("HELLO WORLD")

});

app.post('/tinder/cards', (req, res) => {

    const dbCards= req.body;

    Cards.create(dbCards, (err, data) =>{

        if (err){
            res.status(500).send(err)
        }else {

            res.status(201).send(data)
        }

    });
});

app.post('/tinder', async (req, res) => {
	const cards = new Cards({
		name: req.body.name,
		imgUrl: req.body.imgUrl,
	})
	await cards.save()
	res.send(cards)
})


app.get('/tinder/cards', (req,res)=>{

    Cards.find((err, data) =>{

        if (err){
            res.status(500).send(err)
        }else {

            res.status(200).send(data)
        }

    });
});

// Listeners

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })