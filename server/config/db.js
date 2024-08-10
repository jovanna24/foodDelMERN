import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://jovannajimenez1124:08241100@cluster0.1ij9ivl.mongodb.net/food-del").then(()=>console.log("DB Connected!"));
}