import { Fade } from "react-awesome-reveal";

export default function Projects() {
    return (
        <Fade delay={300} cascade >
            <div id="projects" className="flex flex-row md:mx-20 mx-4 pr-4 py-4 bg-[#c9e4eb] rounded-lg md:h-96 mt-4 font-montserrat items-center">
                <div className="mx-4 mb-4 w-1/4 ">
                    <h1 className="text-xl md:text-4xl">My projects</h1>
                    <p className="text-lg md:text-2xl">Bla bla bla</p>
                </div>
                <div className="gallery w-3/4">
                    <div className="card">
                        To be published...
                    </div>
                    <div className="card">
                        To be published...
                    </div>
                    <div className="card">
                        To be published...
                    </div>
                    <div className="card">
                        To be published...
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`

.gallery {
    display: flex;   
}

.card {
    left: 0px;
    width: 220px;
    height: 300px;
    padding: 8px;
    margin-right: 2px;
    background-color: white;
    border-radius: 8px;
    transition: 1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px;
    filter: blur(3px);
}

@media only screen and (max-width: 768px) {
    .card {
        left: 0px;
        width: 110px;
        height: 150px;
        padding: 8px;
        background-color: white;
        border-radius: 8px;
        transition: 1s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px;
        filter: blur(3px);
    }  
    
    
}

.card:nth-child(1) {
    background-color: #B881FF;
}

.card:nth-child(2) {
    background-color: #FF9950;
}

.card:nth-child(3) {
    background-color: #AAEC8A;
}

.card:nth-child(4) {
    background-color: #ED6A5E;
}

.card:not(:first-child) {
    
}

.card:hover {
    transform: translateY(-16px);
    font-weight: bold;
    cursor: pointer;
    filter: blur(0px)
}

.card:hover ~ .card {
   
}
                `}
            </style>
        </Fade>
   ) 

}