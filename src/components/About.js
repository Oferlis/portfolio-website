export default function About() {
    return (<div id="about" className="flex flex-row md:mx-20 mx-4 px-6 py-12 shadow-xl bg-[#c9e4eb] space-around rounded-lg md:h-96 items-start mt-4 font-montserrat">
            <div>
            <h1 className="md:text-4xl text-2xl mb-4 w-5/6">Hey, I'm Ofer.  👋 </h1>
            <p className="md:text-lg text-xs w-5/6">
            I am a passionate software developer, currently working at Kyndryl.<br></br>

            I believe in continuous learning and staying up-to-date with the latest industry trends,
            collaboration and effective communication are fundamental to my work.<br></br><br></br>

            In my spare time I contribute to opensource projects and practice towards blablabla 🏃 <br></br><br></br>
            
            I would love to hear from you. 
            </p>
            </div>
            <div className="w-1/6 mr-3">
                <p>find a image</p>
            <img src={process.env.PUBLIC_URL + "/images/ofer_pic.png"} alt="me" />
            </div>
        
    </div>)
}