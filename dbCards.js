import moongose from 'mongoose'

const cardSchema = moongose.Schema({

    name: String,
    imgUrl: String

})

export default moongose.model('Cards', cardSchema);
