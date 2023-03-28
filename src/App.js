import logo from './sander-palk-low-resolution-logo-color-on-transparent-background.png';
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
                        experience in working with bigger projects in professional development teams, where I have gotten extensive experience
                        with <span>Bootstrap</span>, <span>MariaDB</span> / <span>MySql</span>, <span>MongoDB</span> and <span>PHP</span>.<br/>
                    </p>
                    <a href="#contact">Contact me</a>
                </div>
            </section>
            <section id="about" className="about">
                <div>
                    <div className="about-heading-wrapper">
                        <h1><span>(0)</span> About me </h1>
                        <hr/>
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
