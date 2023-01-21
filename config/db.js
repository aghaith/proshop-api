import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = 
            mongoose.set("strictQuery", false);
            await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            })

        console.log('MongoDB Connected')
    } catch (error) {
        console.error('DB CONNECTION ERROR: ', error)
        process.exit(1)
    }
}

export default connectDB