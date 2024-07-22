import { useState } from "react";


function Additem() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  let [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: name === "dishimage" ? files[0] : value,
    }));
  };
  //   const handleFile = (e)=>{
  //     const {name,files} = e.target;
  //     setFormData((previousData)=>({
  //         ...previousData,[name]:files[0]
  //     }))
  //   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    //api
    const formD = new FormData();
    formD.append("dishname", formData.dishname);
    formD.append("dishingredients", formData.dishingredients);
    formD.append("dishprice", formData.dishprice);
    formD.append("dishimage", formData.dishimage);
    const response = await fetch("http://localhost:8000/detail", {
      method: "post",
      body: formD,
    });
    const jsonData = await response.json();
    console.log(jsonData);
    alert("form submitted successfully");
  }; 
    return (
      <>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    type="text/tailwindcss"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t@layer base {\n\t\t\t\t:root {\n\t\t\t\t\t--background: 0 0% 100%;\n--foreground: 240 10% 3.9%;\n--card: 0 0% 100%;\n--card-foreground: 240 10% 3.9%;\n--popover: 0 0% 100%;\n--popover-foreground: 240 10% 3.9%;\n--primary: 240 5.9% 10%;\n--primary-foreground: 0 0% 98%;\n--secondary: 240 4.8% 95.9%;\n--secondary-foreground: 240 5.9% 10%;\n--muted: 240 4.8% 95.9%;\n--muted-foreground: 240 3.8% 46.1%;\n--accent: 240 4.8% 95.9%;\n--accent-foreground: 240 5.9% 10%;\n--destructive: 0 84.2% 60.2%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 5.9% 90%;\n--input: 240 5.9% 90%;\n--ring: 240 5.9% 10%;\n--radius: 0.5rem;\n\t\t\t\t}\n\t\t\t\t.dark {\n\t\t\t\t\t--background: 240 10% 3.9%;\n--foreground: 0 0% 98%;\n--card: 240 10% 3.9%;\n--card-foreground: 0 0% 98%;\n--popover: 240 10% 3.9%;\n--popover-foreground: 0 0% 98%;\n--primary: 0 0% 98%;\n--primary-foreground: 240 5.9% 10%;\n--secondary: 240 3.7% 15.9%;\n--secondary-foreground: 0 0% 98%;\n--muted: 240 3.7% 15.9%;\n--muted-foreground: 240 5% 64.9%;\n--accent: 240 3.7% 15.9%;\n--accent-foreground: 0 0% 98%;\n--destructive: 0 62.8% 30.6%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 3.7% 15.9%;\n--input: 240 3.7% 15.9%;\n--ring: 240 4.9% 83.9%;\n\t\t\t\t}\n\t\t\t}\n\t\t"
    }}
  />
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Registration Form</h2>
      </div>
      <form className="space-y-4" method="POST" onSubmit={handleSubmit} action="#">
        <div>
          <label className="block text-sm font-medium text-zinc-700">
        Dish Name
          </label>
          <input
            id="dishname"
            name="dishname"
            type="text"
            autoComplete="dishname"
            required=""
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Dish"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
          Ingredients
          </label>
          <input
            id="dishingredients"
            name="dishingredients"
            type="text"
            required=""
            autoComplete="dishingredients"
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Ingredients"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Price
          </label>
          <input
            id="dishprice"
            name="dishprice"
            type="number"
            required=""
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Price"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
           Image of Dish:
          </label>
          <input
            name="dishimage"
            type="file"
            onChange={handleChange}
            required=""
            className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
         
          />
        </div>
     
       
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md shadow-sm hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
        Done
          </button>
        </div>
      </form>
     
    </div>
  </div>
</>


    )
  }
  
  export default Additem;
  