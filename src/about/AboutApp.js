import Component from '../Component.js';
import Header from '../shared/Header.js';

class AboutApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'About Us' });
        dom.prepend(header.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main class="about-us-container">
                    <div class="about-container">
                        <p class="name">Danny Hogan</p>        
                        <section class="icons-container">
                            <a href="https://github.com/dannyhogan"><img id="icons" src="/assets/github.svg" alt="github-logo"></a>
                            <a href="https://www.linkedin.com/in/danny-hogan/"><img id="icons" src="/assets/linkedin.svg" alt="linkedin-logo"></a>
                        </section>
                    </div>

                    <div class="about-container">
                        <p class="name">Jack McConnell</p>
                        <section class="icons-container">            
                            <a href="https://github.com/jwmcconnell"><img id="icons" src="/assets/github.svg" alt="github-logo"></a>
                            <a href="https://www.linkedin.com/in/mcconnelljack/"><img id="icons" src="/assets/linkedin.svg" alt="linkedin-logo"></a>
                        </section>
                    </div>
                    
                    <div class="about-container">
                        <p class="name">Pavel Kudlanov</p>
                        <section class="icons-container">            
                            <a href="https://github.com/pkudlanov"><img id="icons" src="/assets/github.svg" alt="github-logo"></a>
                            <a href="https://www.linkedin.com/in/pavelkudlanov/"><img id="icons" src="/assets/linkedin.svg" alt="linkedin-logo"></a>
                        </section>
                    </div>

                    <div class="about-container">
                        <p class="name">Zack Butler</p>
                        <section class="icons-container">
                            <a href="https://github.com/zbutler93"><img id="icons" src="/assets/github.svg" alt="github-logo"></a>
                            <a href="https://www.linkedin.com/in/zach-butler-7536a8185/"><img id="icons" src="/assets/linkedin.svg" alt="linkedin-logo"></a>
                        </section>
                    </div>
                </main>
            </div>
        `;
    }
}

export default AboutApp;