import {Document, Schema, models, model} from "mongoose";

interface IProject extends Document{
    name: string;
    imageUrl: string;
    description: string;
    link: string;
    techstack: string[];
}

const Project = new Schema<IProject>({
    name:{
        type: String,
        required: true,
        unique: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    techstack:{
        type: [String],
        required: true
    }
});

export default models.Project || model("Project", Project);