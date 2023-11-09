import logo from './sander-palk-logo-color-on-transparent-background.png';
import picture from './about-me-picture.jpg'
import './App.css';
import './Responsive.css';
import {useState} from "react";
import Work from "./views/Work";
import Schools from "./views/Schools";
import file from './folder-svgrepo-com.svg';
import noFile from './no-folder-svgrepo-com.svg';
import link from './link-2-svgrepo-com.svg';
import noLink from './no-link-2-svgrepo-com.svg';
import mail from './mail-svgrepo-com.svg';
import linkedIn from './LinkedIn_icon.svg';
import github from './iconmonstr-github-1.svg';


function App()
{
  const [experienceView, setExperienceView] = useState(2);

  function handleExperienceViewChange(view)
  {
    if (view === 1)
    {
      setExperienceView(1)
    }
    else if (view === 2)
    {
      setExperienceView(2)
    }
  }


  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt="logo"/>
        <nav>
          <a href="#about"><span>(0)</span> About</a>
          <a href="#experience"><span>(1)</span> Experience</a>
          <a href="#work"><span>(2)</span> Work</a>
          <a href="#contact"><span>(3)</span> Contact</a>
        </nav>
      </header>

      <section className="introduction">
        <div>
          <h3>Nice to meet you, I am</h3>
          <h1>Sander Palk.</h1>
          <h2>I'm young, hungry and eager to learn.</h2>
          <p><span>I'm</span> a 23-year-old software developer with a specialization in <span>web development</span>. I also love to be physically active and I'm, <span>always</span> ready to take on new challenges.<br/>
          </p>
          <div className="contact-me-button">
            <a href="#contact">Contact me</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <div className="section-heading-wrapper">
            <h1><span>(0)</span> About me </h1>
            <hr/>
          </div>
        </div>
        <div className="section-body-wrapper">
          <div className="section-body-text">
            <p>
              For nearly a <span>year</span>, I've been an integral part of a professional software development team, where I've contributed to the creation of large-scale projects using technologies
              such as <span>Vue
              Ionic</span>, <span>Codeigniter 4</span>, and <span>Laravel</span>.
              <br/><br/>
              In addition to my team contributions, I've also been involved in a variety of <span>e-commerce</span> solutions, ranging from smaller to more substantial projects, all built on the
              foundation of <span>WordPress WooCommerce</span>.
              <br/><br/>
              My expertise extends to developing <span>full-stack applications</span> from scratch. I've worked with technologies like <span>React</span>, <span>Node.js</span>, <span>MongoDB</span>,
              and <span>Java</span>, giving me a diverse skill set to draw from.
              <br/><br/>
              Furthermore, I've gained valuable experience in larger development projects, working in professional teams. This has allowed me to hone my skills with tools like <span>Bootstrap</span>,
              <span>MariaDB</span>/<span>MySQL</span>, and <span>PHP</span> frameworks.
              <br/>
              I'm dedicated to delivering high-quality software solutions and continuously expanding my knowledge in the dynamic field of web development."
            </p>

            <p>
              My personal preferred technologies
              are <span>React</span>, <span>NodeJS</span>, <span>MongoDB</span> and <span>MySql</span> / <span>MariaDb</span>. <br/><br/>
              Here I have listed my most frequently used technologies:
              <div className="technology-list">
                <ul>
                  <li>JavaScript (React, Vue)</li>
                  <li>Bootstrap</li>
                  <li>Wordpress</li>
                  <li>NodeJS</li>
                </ul>
                <ul>
                  <li>PHP (CI4, Laravel)</li>
                  <li>Java</li>
                  <li>MySql/MariaDb</li>
                  <li>MongoDb</li>
                </ul>
              </div>
            </p>
          </div>
          <div className="section-body-image">
            <img src={picture} alt="picture"/>
          </div>
        </div>
      </section>

      <section id="experience">
        <div>
          <div className="section-heading-wrapper">
            <h1><span>(1)</span> Experience </h1>
            <hr/>
          </div>
        </div>
        <div className="section-experience-body-wrapper">
          <div className="section-experience-menu">
            <button className={experienceView === 1 ? 'active' : ''}
                    onClick={() => handleExperienceViewChange(1)}>Work & internships
            </button>
            <button className={experienceView === 2 ? 'active' : ''}
                    onClick={() => handleExperienceViewChange(2)}>Schools
            </button>
          </div>
          <div className="section-experience-content">
            {experienceView === 1 && (
              <Work/>
            )}
            {experienceView === 2 && (
              <Schools/>
            )}
          </div>
        </div>
      </section>

      <section id="work">
        <div>
          <div className="section-heading-wrapper">
            <h1><span>(2)</span> Work </h1>
            <hr/>
          </div>
        </div>
        <div className="section-work-body-wrapper">
          <div className="work-item">
            <div className="work-item-icon">
              <a href="https://github.com/SanderPalk/todo-app-frontend" target="_blank"><img src={file}
                                                                                             alt="folder"/></a>
              <a href="https://to-do-app-prai.onrender.com/" target="_blank"><img src={link} alt="link"/></a>
            </div>
            <h4>Full stack to-do application</h4>
            <p className="work-item-text">This is full stack to-do application. It features dark and light
              theme, user can create tasks and mark them done, filter and delete tasks by status. You can
              find more info from ReadME file in project repo.</p>
            <p className="work-item-technologies">React CSS NodeJS FS</p>
          </div>
          <div className="work-item">
            <div className="work-item-icon">
              <a href="https://github.com/SanderPalk/multi-step-form"><img src={file} alt="folder"/></a>
              <a href="https://multi-step-form-with-react.onrender.com/"><img src={link} alt="link"/></a>
            </div>
            <h4>Multi step form</h4>
            <p className="work-item-text">In this project I tried to delve deeper into React states and
              different views, this project includes login authentication, selecting different plans and
              modules and calculating the overall total of your choices.</p>
            <p className="work-item-technologies">React CSS</p>
          </div>
          <div className="work-item">
            <div className="work-item-icon">
              <a href="https://github.com/SanderPalk/expenses_chart_component"><img src={file}
                                                                                    alt="folder"/></a>
              <a href="https://dashboard.render.com/static/srv-cghceso2qv23kcpvkbn0"><img src={link}
                                                                                          alt="link"/></a>
            </div>
            <h4>React charts component</h4>
            <p className="work-item-text">Here I created a simple charts component where it takes data from
              JSON file. You can hover over individual components and see their values, also current day
              is always highlighted. This project was to try out different React libraries.</p>
            <p className="work-item-technologies">React Recharts CSS</p>
          </div>
          <div className="work-item">
            <div className="work-item-icon">
              <a><img className="no-link" src={noFile} alt="folder"/></a>
              <a href="https://momu.ee/"><img src={link} alt="link"/></a>
            </div>
            <h4>MOMU homepage</h4>
            <p className="work-item-text">I was one of the main developers for Estonian Motosport Museum
              page. The page is built on Wordpress and ACF plugin for quick and easy page management for
              client.</p>
            <p className="work-item-technologies">Wordpress ACF Bootstrap</p>
          </div>
          <div className="work-item">
            <div className="work-item-icon">
              <a><img className="no-link" src={noFile} alt="folder"/></a>
              <a href="https://enotar.ee/"><img src={link} alt="link"/></a>
            </div>
            <h4>eNotar</h4>
            <p className="work-item-text">I was one of the main developers for law firm homepage eNotar. The
              page is built on Wordpress and ACF plugin for quick and easy page management for client.</p>
            <p className="work-item-technologies">Wordpress ACF Bootstrap</p>
          </div>
          <div className="work-item">
            <div className="work-item-icon">
              <a href="https://github.com/SanderPalk/JavaApi"><img src={file} alt="folder"/></a>
              <a><img className="no-link" src={noLink} alt="link"/></a>
            </div>
            <h4>Java API</h4>
            <p className="work-item-text">This was a school project where we had to build a copy of freely
              chosen API. This is replica API of <a href="https://jsonplaceholder.typicode.com/photos">jsonplaceholder
                Photo API</a>. Project is written in Java with Springboot. Project includes all working
              response codes and statuses, authorization
              and authentication, request limiter, logs and WebSocket implementation.</p>
            <p className="work-item-technologies">Java SpringBoot</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div>
          <div className="section-heading-wrapper">
            <h1><span>(3)</span> Contact me </h1>
          </div>
          <div className="section-contact-wrapper">
            <p>Feel free to contact me.</p>
            <ul>
              <li><img src={mail} alt="github"/>sanderpalk0@gmail.com</li>
              <li><a href="https://www.linkedin.com/in/sander-palk-a45391268/"><img src={linkedIn} alt="linkedin"/>LinkedIn</a></li>
              <li><a href="https://github.com/SanderPalk"><img src={github} alt="github"/>Github</a></li>
              <li><a href="https://www.frontendmentor.io/profile/SanderPalk">Frontend Mentor</a></li>
            </ul>
          </div>
        </div>
      </section>
      <footer><a href="https://github.com/SanderPalk/portfolio-3"> Built and designed by Sander Palk </a></footer>
    </div>
  );
}

export default App;
