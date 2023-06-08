const mongoose = require("mongoose");


const userSchema= mongoose.model('users',new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
}
)
);

const productSchema= mongoose.model('products',new mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
}))
// Exportation des models
module.exports=
            {
                userSchema,productSchema
            };