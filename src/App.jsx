import Navbar from "./components/Navbar";
import Project from "./components/Project";
import cardForm from "./assets/Card-Form.webp";
import weather from "./assets/weather-app.png";
import todoapp from "./assets/TodoApp.jpeg";
import pricing from "./assets/pricing-plan.png";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <section id="home">
          <h1>Nice to meet you!</h1>
          <h1>
            I'm <span className="title">Yehya</span>
          </h1>

          <p>
            Based in Hungary, I'm an aspiring web developer that enjoys
            designing and creating websites.
          </p>
        </section>
        <section id="about">
          <h1>My Experiences</h1>

          <div className="wrapper-ab">
            <div className="lang">HTMl</div>
            <div className="exp">1 year Experience</div>
          </div>
          <div className="wrapper-ab">
            <div className="lang">CSS</div>
            <div className="exp">1 year Experience</div>
          </div>
          <div className="wrapper-ab">
            <div className="lang">JAVASCRIPT</div>
            <div className="exp"> 6 months Experience</div>
          </div>
          <div className="wrapper-ab">
            <div className="lang">REACT</div>
            <div className="exp">2 months Experience</div>
          </div>
          <div className="wrapper-ab">
            <div className="lang">NODE.JS</div>
            <div className="exp">2 months Experience</div>
          </div>
        </section>
        <section id="projects">
          <Project
            img={cardForm}
            title="Credit Card Form"
            lang="html css javascript"
            code="https://github.com/snoxrow/Credit-Card-Form"
            prev="https://snoxrow.github.io/Credit-Card-Form/"
          />
          <Project
            img={weather}
            title="Weather App"
            lang="html css javascript API"
            code="https://github.com/snoxrow/Weather-App"
            prev="https://snoxrow.github.io/Weather-App"
          />
          <Project
            img={todoapp}
            title="To Do App"
            lang="React CSS javascript"
            code="https://github.com/snoxrow/To-Do-App"
            prev="https://snoxrow.github.io/To-Do-App/"
          />
          <Project
            img={pricing}
            title="Pricing Plans"
            lang="html css"
            code="https://github.com/snoxrow/Pricing-Plans"
            prev="https://snoxrow.github.io/Pricing-Plans/"
          />
        </section>
        <section id="more">
          <h1>About <span>me</span> </h1>
          <p id="p1" >
            After graduating with a degree in biology, I quickly realised it was
            not meant for me. </p>
            <p id="p2" >
            Thats when I decided to give coding a shot, and I fell in love with
            it.</p>
            <p id="p3" >
            Ever since I've been working on learning new languages and growing my experiences.</p>
            
            <p id="p4" >Learning new and
            exciting stuff everyday keeps me motivated towards my goal.
          </p>
        </section>
      </main>
      <footer id="footer">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <p>
            If you have any inquiries about my services or you just want to
            connect, feel free to send a message!
          </p>
        </div>
        <Form />
      </footer>
      <div id="end-text">Copyright @ Yehya 2023</div>
    </div>
  );
}

export default App;
