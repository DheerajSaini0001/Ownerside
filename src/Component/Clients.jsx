function Clients() {
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
  <div className="flex justify-center space-x-4 p-4">
    <div className="bg-card rounded-lg shadow-lg p-4 text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png"
        alt="Freddie J. Plourde"
      />
  
        <span className="text-muted-foreground">Name</span>
        <br />
      <button className="rounded-xl w-48 bg-sky-600 text-slate-100 bg-secondary ">
  View Details
      </button>
    
      <div className="mt-4">
        <p className="text-sm">
        <span className="text-muted-foreground">Panding Money:</span> 
        </p>
      
      </div>
    </div>
    <div className="bg-card rounded-lg shadow-lg p-4 text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png"
        alt="Julie L. Arsenault"
      />
          <span className="text-muted-foreground">Name</span> 
    <br />
      <button className="rounded-xl  bg-sky-600 text-slate-100 w-48 ">
     View Details
      </button>
      <div className="mt-4">
        <p className="text-sm">
          <span className="text-muted-foreground">Panding Money</span> 8471
        </p>
    
      </div>
    </div>
    <div className="bg-card rounded-lg shadow-lg p-4 text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png"
        alt="Christopher Gallardo"
      />
   
        <span className="text-muted-foreground">Name</span>  
        <br />
      <button className="bg-secondary text-secondary-foreground  rounded-xl  bg-sky-600 text-slate-100 w-48">
View Details
      </button>
      
      <div className="mt-4">
        <p className="text-sm">
        <span className="text-muted-foreground">Panding Money:</span>   
        </p>
       
      </div>
    </div>
  </div>
      </>
    )
  }
  
  export default Clients
  