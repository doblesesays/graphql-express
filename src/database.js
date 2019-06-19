import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/graphql-express',
            {
                useNewUrlParser: true,
                useFindAndModify: false,
            }
        )
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}