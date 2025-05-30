import { useState, useEffect } from 'react';
import './App.css';
import profilePic from './assets/profile-pic.svg';
import project1Image from './assets/project1.svg';
import project2Image from './assets/project2.svg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id') || '';

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <a
                href='#about'
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setActiveSection('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#education'
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => setActiveSection('education')}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id='about' className='section'>
          <div className='container'>
            <div className='profile-header'>
              <img
                src={profilePic}
                alt='Reemaz Al-Soufe'
                className='profile-picture'
              />
              <div className='profile-info'>
                <h1>Reemaz Al-Soufe</h1>
                <h2>Frontend Developer | CS50 Graduate | React Specialist</h2>
                <p className='location'>Dubai, United Arab Emirates</p>
                <div className='profile-links'>
                  <a
                    href='https://github.com/yourusername'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-github'></i> GitHub
                  </a>
                  <a
                    href='https://linkedin.com/in/reemaz-alsoufe'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-linkedin'></i> LinkedIn
                  </a>
                  <a href='mailto:reemazalsoufe@gmail.com'>
                    <i className='fas fa-envelope'></i> Email
                  </a>
                </div>
              </div>
            </div>
            <div className='summary'>
              <h3>Professional Summary</h3>
              <p>
                Dynamic Frontend Developer with a strong foundation in React.js
                and modern web technologies. Passionate about creating
                responsive, user-friendly interfaces and delivering exceptional
                user experiences. CS50 certified with a background in business
                and accounting, bringing a unique perspective to web
                development.
              </p>
              <div className='key-highlights'>
                <div className='highlight-item'>
                  <i className='fas fa-code'></i>
                  <span>3+ years of frontend development experience</span>
                </div>
                <div className='highlight-item'>
                  <i className='fas fa-mobile-alt'></i>
                  <span>Expert in responsive web design</span>
                </div>
                <div className='highlight-item'>
                  <i className='fas fa-paint-brush'></i>
                  <span>Strong UI/UX design skills</span>
                </div>
                <div className='highlight-item'>
                  <i className='fas fa-language'></i>
                  <span>Bilingual (English & Arabic)</span>
                </div>
              </div>
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
            <h2>Technical Skills</h2>
            <div className='skills-grid'>
              <div className='skill-card'>
                <h3>Frontend Development</h3>
                <div className='skill-progress'>
                  <div className='skill-item'>
                    <span>React.js</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <span>TypeScript</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <span>HTML5/CSS3</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <span>JavaScript</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='skill-card'>
                <h3>Tools & Technologies</h3>
                <div className='skill-progress'>
                  <div className='skill-item'>
                    <span>Git/GitHub</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <span>Figma</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <span>Responsive Design</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <span>UI/UX Design</span>
                    <div className='progress-bar'>
                      <div className='progress' style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='projects' className='section'>
          <div className='container'>
            <h2>Featured Projects</h2>
            <div className='projects-grid'>
              <div className='project-card'>
                <div className='project-image'>
                  <img src={project1Image} alt='E-Commerce Platform' />
                  <div className='project-links'>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                      <i className='fas fa-external-link-alt'></i>
                    </a>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                      <i className='fab fa-github'></i>
                    </a>
                  </div>
                </div>
                <div className='project-info'>
                  <h3>E-Commerce Platform</h3>
                  <p>
                    A full-featured e-commerce platform built with React and
                    TypeScript, featuring real-time inventory management and
                    secure payment processing.
                  </p>
                  <div className='project-tech'>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>

              <div className='project-card'>
                <div className='project-image'>
                  <img src={project2Image} alt='Task Management App' />
                  <div className='project-links'>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                      <i className='fas fa-external-link-alt'></i>
                    </a>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                      <i className='fab fa-github'></i>
                    </a>
                  </div>
                </div>
                <div className='project-info'>
                  <h3>Task Management App</h3>
                  <p>
                    A collaborative task management application with real-time
                    updates, team collaboration features, and intuitive
                    drag-and-drop interface.
                  </p>
                  <div className='project-tech'>
                    <span>React</span>
                    <span>Firebase</span>
                    <span>Material-UI</span>
                    <span>Redux</span>
                  </div>
                </div>
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
