export default function Projects() {
    return (
        <>
            <div className="flex flex-row md:mx-20 mx-4 px-4 py-4 shadow-xl bg-[#c9e4eb] rounded-lg md:h-96 mt-4 font-montserrat items-center">
                <div className="mx-4 mb-4 w-1/4 ">
                    <h1 className="text-2xl md:text-4xl">My projects</h1>
                    <p className="text-xl md:text-2xl">Bla bla bla</p>
                </div>
                <div className="gallery w-3/4">
                    <div className="card">
                        Card 1
                    </div>
                    <div className="card">
                        Card 2
                    </div>
                    <div className="card">
                        Card 3
                    </div>
                    <div className="card">
                        Card 4
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`

.gallery {
    display: flex;
    left: calc(50% - 330px);
}

.card {
    position: relative;
    left: 0px;
    width: 220px;
    height: 300px;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
    transition: 1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px;
}

@media only screen and (max-width: 768px) {
    .card {
        position: relative;
        left: 0px;
        width: 110px;
        height: 150px;
        padding: 8px;
        background-color: white;
        border-radius: 8px;
        transition: 1s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px;
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
    margin-left: -55px;
}

.card:hover {
    transform: translateY(-16px);
    font-weight: bold;
    cursor: pointer;
}

.card:hover ~ .card {
    left: 55px;
}
                `}
            </style>
        </>
   ) 

}