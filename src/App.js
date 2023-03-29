import logo from './sander-palk-low-resolution-logo-color-on-transparent-background.png';
import picture from './IMG_20230304_115046.jpg'
import './App.css';


function App() {
    return (
        <div className="App">
            <header>
                <img className="logo" src={logo} alt="logo"/>
                <nav>
                    <a href="#about"><span>(0)</span> About</a>
                    <a href="#experience"><span>(1)</span> Experience</a>
                    <a href="#work"><span>(2)</span> Work</a>
                    <a href="#$contact"><span>(3)</span> Contact</a>
                </nav>
            </header>
            <section className="introduction">
                <div>
                    <h3>Nice to meet you, I am</h3>
                    <h1>Sander Palk.</h1>
                    <h2>I'm young, hungry and ready to learn.</h2>
                    <p>I'm 22 year old software developer, specialized more on web development but I'm eager for
                        challenges. I have experience with building small full-stack applications from scratch with
                        knowledge mostly in <span>React</span>, <span>NodeJS</span> and <span>Java</span>. I also have
                        experience in working with bigger projects in professional development teams, where I have
                        gotten extensive experience
                        with <span>Bootstrap</span>, <span>MariaDb</span> / <span>MySql</span>, <span>MongoDb</span> and <span>PHP</span>.<br/>
                    </p>
                    <a href="#contact">Contact me</a>
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
                            <span>Welcome!</span> I'm young web developer. Right now I am studying in Tartu Vocational
                            Collage, it is my second and last year there before I get my degree
                            in <span>web development</span>. I have done my two internships
                            at <span>Codelive OÜ</span> located in Tartu Raekoja Plats. Also have experience doing
                            freelancing, creating webpages for smaller businesses. My free time hobbies include
                            working out in the gym, running and kick-box.
                        </p>
                        <p>
                            My personal preferred technologies
                            are <span>React</span>, <span>NodeJS</span>, <span>MongoDB</span> and <span>MySql</span> / <span>MariaDb</span>. <br/><br/>
                            Here I have listed my most frequently used technologies:
                            <div className="technology-list">
                                <ul>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>Wordpress</li>
                                    <li>NodeJS</li>
                                </ul>
                                <ul>
                                    <li>PHP</li>
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

            </section>
            <section id="work">

            </section>
            <section id="contact">

            </section>
        </div>
    );
}

export default App;
