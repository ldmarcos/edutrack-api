import mongoose from 'mongoose';

const connectInDataBase = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        return connection;
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connectInDataBase;
