import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
// 'Attrs' is short for attributes 
interface UserAttrs {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
};


export { User, buildUser };