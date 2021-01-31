import React from 'react';
import Pic0 from '../../assets/img/projects/0.png';
import Pic1 from '../../assets/img/projects/1.png';
import Pic2 from '../../assets/img/projects/2.png';
import Pic3 from '../../assets/img/projects/3.png';
import Pic4 from '../../assets/img/projects/4.png';
import Pic5 from '../../assets/img/projects/5.png';
import Pic6 from '../../assets/img/projects/6.png';
import Pic7 from '../../assets/img/projects/7.png';
import Pic8 from '../../assets/img/projects/8.png';
import Pic9 from '../../assets/img/projects/9.png';
import Pic11 from '../../assets/img/projects/11.png';
import Pic12 from '../../assets/img/projects/12.png';
import Pic13 from '../../assets/img/projects/13.png';
import Pic14 from '../../assets/img/projects/14.png';
import Pic15 from '../../assets/img/projects/15.png';

const myProjects = [

    {
        id: 1,
        image: Pic5,
        projectName: "World Weather App",
        website: "http://muneeb-weather-app.surge.sh/",
        github: "https://github.com/Muneeb926595/weather-app"
    },
    {
        id: 2,
        image: Pic14,
        projectName: "Netflix Clone",
        website: "http://muneeb-netflix-clone.surge.sh/",
        github: "https://github.com/Muneeb926595/netflix-clone"
    },
    {
        id: 3,
        image: Pic13,
        projectName: "Instagram Clone",
        website: "http://muneeb-instagram.surge.sh/",
        github: "https://github.com/Muneeb926595/instagram-clone"
    },
    {
        id: 4,
        image: Pic12,
        projectName: "Facebook Messenger Clone",
        website: "https://facebook-messanger-clone-e19b4.web.app/",
        github: "https://github.com/Muneeb926595/facebook-messanger-clone"
    },
    {
        id: 5,
        image: Pic11,
        projectName: "SpaceX App",
        website: "http://space-world-app.surge.sh/",
        github: "https://github.com/Muneeb926595/space-x-app"
    },
    {
        id: 6,
        image: Pic3,
        projectName: "Responsive Website",
        website: "http://muneeb-portfolio.surge.sh/",
        github: "https://github.com/Muneeb926595/my-portfolio"
    },
    {
        id: 7,
        image: Pic7,
        projectName: "Covid 19 Teacker",
        website: "http://muneeb-covid19-tracker.surge.sh/",
        github: "https://github.com/Muneeb926595/covid-19-tracker"
    },
    {
        id: 8,
        image: Pic2,
        projectName: "Quiz Application",
        website: "http://muneeb-quiz-app.surge.sh/",
        github: "https://github.com/Muneeb926595/my-quizapp"
    },
    {
        id: 9,
        image: Pic9,
        projectName: "Expence Tracker App",
        website: "http://muneeb-expence-tracker-app.surge.sh/",
        github: "https://github.com/Muneeb926595/react-expence-tracker-app"
    },
    {
        id: 10,
        image: Pic15,
        projectName: "Music-UI Application",
        website: "http://music-ui.surge.sh/",
        github: "https://github.com/Muneeb926595/music-app-ui"
    },
    {
        id: 11,
        image: Pic4,
        projectName: "Todo Application",
        website: "http://muneeb-todo-app.surge.sh/",
        github: "https://github.com/Muneeb926595/todo-app"
    },
    {
        id: 12,
        image: Pic8,
        projectName: "Nike Shoes Store",
        website: "http://muneeb-nike-shoes.surge.sh/",
        github: "https://github.com/Muneeb926595/simple-commerce-app"
    },
    {
        id: 13,
        image: Pic1,
        projectName: "Timer App",
        website: "http://muneeb-timer-app.surge.sh",
        github: "https://github.com/Muneeb926595/timer-app-tdd"
    },
    {
        id: 14,
        image: Pic6,
        projectName: "Cortex Website Clone",
        website: "http://muneeb-cotex-clone.surge.sh/",
        github: "https://github.com/Muneeb926595/cortex-website-clone"
    },
    {
        id: 15,
        image: Pic0,
        projectName: "Iphone Calculator",
        website: "http://muneeb-calculator.surge.sh/",
        github: "https://github.com/Muneeb926595/ios-calculator"
    }
]

function Portfolio() {
    return (
        <React.Fragment>
            {myProjects.map((project) => {
                return (
                    < div key={project.id} className="card" style={{ marginRight: '8%', marginTop: '2%' }
                    }>
                        <div className="card-image">
                            <img className="img-fluid" src={project.image} alt={project.projectName}
                                style={{ zIndex: '2',width:"100%" }} />
                        </div>
                        <div className="card-content">
                            <span className="card-title" style={{ color: 'rgb(0,0,0)' }}>{project.projectName}</span>
                        </div>
                        <div className="card-action">
                            <a rel="noopener noreferrer" href={project.website} target="_blank">Live Preview</a>
                            <a rel="noopener noreferrer" href={project.github} target="_blank">Github</a>
                        </div>
                    </div >
                )
            })}
        </React.Fragment>
    )
}

export default Portfolio;