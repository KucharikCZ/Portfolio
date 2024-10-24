import type {NextApiRequest, NextApiResponse} from "next";
import {connectDatabase} from "@/libraries/Database";
import Project from "@/models/Project";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    await connectDatabase();

    if(req.method === "GET"){
        const projects = await Project.find();

        if(projects.length === 0){
            return res.status(204).json({
                details:{
                    status: "no content",
                    statusCode: 204,
                    message: "Nebyly nalezeny žádné projekty v databázi."
                }
            });
        }else{
            return res.status(200).json({
                details:{
                    status: "success",
                    statusCode: 200
                },
                data: projects
            });
        }
    }else if(req.method === "POST"){
        const {name, imageUrl, image, description, link, techstack} = req.body;

        console.log(image);

        const project = await Project.create({
            name,
            imageUrl,
            description,
            link,
            techstack
        });

        await project.save();

        res.status(201).json({
            details:{
                status: "created",
                statusCode: 201
            }
        });
    }
}