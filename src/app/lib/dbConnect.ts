import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect('process.env.MONGODB_URI');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

export default dbConnect;
