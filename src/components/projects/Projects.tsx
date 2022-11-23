import './projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            link: "https://github.com/3dot14shreyansh/N-Gram-Language-Model",
            // background: "protege.jpg",
            background: "bg1",
            category: "NLTK Project",
            title:"N-Gram Language Model",
            subtitle: "N-Gram Language",
            tech: [
                
            ]
        },
        {
            link: "https://github.com/3dot14shreyansh/message-classifier",
            // background: "medistat.jpg",
            background: "bg2",
            category: "ML Project",
            title: "Message Classifier",
            subtitle: "Classifies type of messages",
            tech:[
               
            ]
        },
        
        {
            link: "https://github.com/3dot14shreyansh/Web-Scraping-Ambition-box-",
            // background: "gtc2.jpeg",
            background: "bg3",
            category: "Python Project",
            title: "Ambition Box",
            subtitle: "A web scrapping project",
            tech:[
                "html.jpg",
                "css.jpg",
                "js.jpeg"
            ]
        },

        {
            link: "https://github.com/3dot14shreyansh/WhatsApp-chat-analyser-app",
                // background: "waste.jpg",
            background: "bg4",
            category: "ML Project",
            title: "WhatsApp chat analyser",
            subtitle: "One stop App to analyze your WhatsApp activity.",
            tech:[
                ]
        },

        {
            link: "https://github.com/3dot14shreyansh/Hey-Coffee",
            // background: "mov.png",
            background: "bg5",
            category: "Machine Learning",
            title: "Hey Coffee!",
            subtitle: "A Voice Assitant App",
            tech:[
               
            ]
        },


        {
            link: "https://github.com/3dot14shreyansh/COVID19-EDA",
            // background: "COVID19.jpg",
            background: "bg6",
            category: "Machine Learning",
            title: "COVID 19 Analysis",
            subtitle: "Used matplotlib and seaborn library for holastic statewise analysis of COVID 19",
            tech:[
                "numpy.png",
                "scikit.png",
                "seaborn.png"
            ]
        },

        {
            link: "https://github.com/3dot14shreyansh/ADAS_Autonomus_vehicle",
            // background: "todo.jpeg",
            background: "bg7",
            category: "AD & ADAS",
            title: "Autonomus vehicle program",
            subtitle: "Currently building!",
            tech:[
               
            ]
        }
    ]

    return (
        <div id="project-sec">
            <div>
                <p className="heading sec">Featured <strong>Projects</strong></p>
            </div>

            
            <div className="card-grid">
                <ProjectCard info={projects} />
            </div>
        </div>
    )
}

export default Projects