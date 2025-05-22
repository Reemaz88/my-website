import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='app'>
      <header>
        <nav>
          <button
            className='hamburger'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <span
              className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            ></span>
            <span
              className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            ></span>
            <span
              className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
            ></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#education'>Education</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id='about' className='section'>
          <div className='container'>
            <h1>Reemaz Al-Soufe</h1>
            <h2>Frontend Developer | CS50 Graduate | React Specialist</h2>
            <p className='location'>Dubai, United Arab Emirates</p>
            <div className='summary'>
              <p>
                • Crafting beautiful web interfaces with #ReactJS, #HTML5, and
                #CSS3
              </p>
              <p>
                • Freelance Frontend Developer | CS50 Certified - Computer
                Science Program from Harvard University
              </p>
              <p>• Mastering #JavaScript, #ReactJS, #Figma</p>
              <p>• Passionate about #UXUI and pixel-perfect design</p>
              <p>• Skills: #ReactJS #HTML5 #CSS5 #APIs #JavaScript</p>
              <p>• Let's collaborate on innovative web projects!</p>
            </div>
          </div>
        </section>

        <section id='experience' className='section'>
          <div className='container'>
            <h2>Experience</h2>
            <div className='experience-grid'>
              <div className='experience-card'>
                <h3>Freelance Frontend Web Developer</h3>
                <p className='company'>Self-employed</p>
                <p className='duration'>
                  August 2023 - Present (1 year 10 months)
                </p>
                <p className='location'>Dubai, United Arab Emirates</p>
              </div>

              <div className='experience-card'>
                <h3>Financial Accountant</h3>
                <p className='company'>Al-Ryadiah for ads & marketing</p>
                <p className='duration'>
                  April 2016 - April 2017 (1 year 1 month)
                </p>
                <p className='location'>Syria</p>
                <ul>
                  <li>Payroll management</li>
                  <li>
                    Creating regularly Reports for all payment transactions
                  </li>
                  <li>
                    Carried out monthly closings and prepares monthly financial
                    statements
                  </li>
                  <li>Reviewed and processed expense reports</li>
                </ul>
              </div>

              <div className='experience-card'>
                <h3>Financial Accountant</h3>
                <p className='company'>
                  Al - Ameen Accounting & Warehouse Office
                </p>
                <p className='duration'>
                  April 2015 - August 2016 (1 year 5 months)
                </p>
                <p className='location'>Syria</p>
                <ul>
                  <li>
                    Create a database for Al Ameen Accounting & warehouses
                  </li>
                </ul>
              </div>

              <div className='experience-card'>
                <h3>Financial Accountant</h3>
                <p className='company'>Global surveys</p>
                <p className='duration'>June 2014 - May 2015 (1 year)</p>
                <p className='location'>Syria</p>
                <ul>
                  <li>Assist with budget and analyze financial information</li>
                  <li>
                    Prepare Excel and PowerPoint reports and presentations
                  </li>
                  <li>
                    Prepare and record accounting and financial transactions
                  </li>
                  <li>
                    Prepare detailed monthly account analysis and journal
                    entries
                  </li>
                  <li>
                    Assist in monthly/annually financial statement closings
                  </li>
                  <li>Perform account reconciliations</li>
                  <li>Conduct audit work</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='section'>
          <div className='container'>
            <h2>Skills</h2>
            <div className='skills-grid'>
              <div className='skill-card'>
                <h3>Top Skills</h3>
                <ul>
                  <li>Responsive Web Design</li>
                  <li>Node.js</li>
                  <li>User Interface Design</li>
                </ul>
              </div>
              <div className='skill-card'>
                <h3>Languages</h3>
                <ul>
                  <li>English (Professional Working)</li>
                  <li>Arabic (Native or Bilingual)</li>
                </ul>
              </div>
              <div className='skill-card'>
                <h3>Certifications</h3>
                <ul>
                  <li>Learning Git and GitHub</li>
                  <li>Figma: From Design to CSS</li>
                  <li>The Complete 2023 Web Development Bootcamp</li>
                  <li>Explore a Career in Front-End Web Development</li>
                  <li>Understanding HTML and CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id='education' className='section'>
          <div className='container'>
            <h2>Education</h2>
            <div className='education-card'>
              <h3>Tishreen University</h3>
              <p>Bachelor's degree, Business/Accounting Economics</p>
              <p className='duration'>2010 - 2015</p>
            </div>
          </div>
        </section>

        <section id='contact' className='section'>
          <div className='container'>
            <h2>Contact</h2>
            <div className='contact-info'>
              <p>Dubai, UAE</p>
              <p>Email: reemazalsoufe@gmail.com</p>
              <p>
                LinkedIn:{' '}
                <a
                  href='https://www.linkedin.com/in/reemaz-alsoufe'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  www.linkedin.com/in/reemaz-alsoufe
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Reemaz Al-Soufe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
