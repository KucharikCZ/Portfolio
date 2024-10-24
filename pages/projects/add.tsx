import {useState} from "react";
import AlertMsg from "@/components/Alert";
import axios from "axios";
import RootLayout from "@/components/layouts/RootLayout";

export default function ProjectAdd(){
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [techstack, setTechStack] = useState("");

  async function createProject(e:React.FormEvent){
    e.preventDefault();

    if(name.trim() === "" || imageUrl.trim() === "" || description.trim() === "" || link.trim() === "" || techstack.trim() === ""){
      AlertMsg("error", "Musíte vyplnit všechna pole!");
      return;
    }

    try{
      const res = await axios.post("/api/projects", {name,imageUrl,image,description,link,techstack},{
        headers:{
          "Content-Type": "application/json"
        }
      });

      if(res.status === 201){
        setName("");
        setImageUrl("");
        setDescription("");
        setTechStack("");
        setLink("");
        AlertMsg("success", "Projekt byl úspěšně vytvořen!");
      }else{
        AlertMsg("error", res.data.details.message);
      }
    }catch(e){
      console.error(e);
    }
  }

  return(
    <RootLayout>
      <h1 className="text-center text-3xl mt-9">Přidání projektu</h1>

      <div className="mx-auto my-9 bg-secondary shadow-standard max-w-[400px]">
        <div className="bg-theme w-[70%] h-[5px] rounded-b-lg block mx-auto"/>

        <form onSubmit={createProject} className="py-2 px-6">
          <div className="block mx-auto my-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jméno projektu" className="text-slate-800 py-2 px-4 bg-slate-100 shadow-standard rounded-standard block mx-auto w-full my-2  transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme"/>
          </div>

          <div className="block my-4">
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Odkaz na obrázek" className="text-slate-800 py-2 px-4 bg-slate-100 shadow-standard rounded-standard block mx-auto w-full  transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme"/>
          </div>
          
          <div className="block my-4">
            <input type="file" accept=".png" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Odkaz na obrázek" className="text-slate-800 py-2 px-4 bg-slate-100 shadow-standard rounded-standard block mx-auto w-full  transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme"/>
          </div>
          
          <div className="block my-4">
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Odkaz na projekt" className="text-slate-800 py-2 px-4 bg-slate-100 shadow-standard rounded-standard block mx-auto w-full  transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme"/>
          </div>
          <div className="block my-4">
            <input type="text" value={techstack} onChange={(e) => setTechStack(e.target.value)} placeholder="Techstack projektu" className="text-slate-800 py-2 px-4 bg-slate-100 shadow-standard rounded-standard block mx-auto w-full  transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme"/>
          </div>
          
          <div className="block my-auto">
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols={16} placeholder="Popis projektu" className="text-slate-800 py-2 px-4 bg-slate-100 shadow-standard rounded-standard block mx-auto w-full  transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme"/>
          </div>
          
          <button className="block select-none my-4 bg-theme block mx-auto w-full py-2 px-6 rounded-standard text-white transition ease-in-out duration-[.35s] focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-theme">Vytvořit projekt</button>
        </form>
      </div>
    </RootLayout>
  );
}