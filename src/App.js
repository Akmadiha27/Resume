import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div class="resume-container">
        <div class="header">
          <h1 class="name">AMTUL KAREEM MADIHA</h1>
          <div class="contact-info">
            Phone: <strong>9440473900</strong> | Email: <a href="mailto:akmadiha0207@gmail.com"><strong>akmadiha0207@gmail.com</strong></a> |  LinkedIn: <a href="https://in.linkedin.com/in/a-k-madiha-460920280"><strong>A.K. Madiha</strong></a> | <strong>Hyderabad, India</strong>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Education</h2>
          <div class="education-item">
            <div class="education-details">
              <div class="degree">Bachelor of Engineering in Computer Science</div>
              <div class="grade"><strong>CGPA: 9.52</strong></div>
            </div>
            <div class="education-dates"><strong>2022-2026</strong></div>
          </div>
          <div class="education-item">
            <div class="education-details">
              <div class="degree">Intermediate Education</div>
              <div class="grade"><strong>Percentage: 98.8%</strong></div>
            </div>
            <div class="education-dates"><strong>2019-2021</strong></div>
          </div>
          <div class="education-item">
            <div class="education-details">
              <div class="degree">Secondary School Education</div>
              <div class="grade"><strong>GPA: 9.8</strong></div>
            </div>
            <div class="education-dates"><strong>2018-2019</strong></div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Technical Skills</h2>
          <ul class="skills-list">
            <li><strong>Programming Languages:</strong> C, Python, Object Oriented Programming in Java</li>
            <li><strong>Database Management:</strong> DBMS, SQL</li>
            <li><strong>Systems:</strong> Operating Systems, Shell Programming</li>
            <li><strong>Core CS:</strong> Data Structures & Algorithms, Design & Analysis Of Algorithms</li>
            <li><strong>Web Development:</strong> Full Stack (HTML, CSS, JavaScript, Node, Express, MongoDB)</li>
          </ul>
        </div>
        
        <div class="section">
          <h2 class="section-title">Experience</h2>
          <div class="item">
            <div class="item-title"><strong>Innovasia - 2023</strong> | College Hackathon</div>
            <div class="item-subtitle">QR based travel ticketing in RTC Buses</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>National Science Day</strong> | AICTE Competition</div>
            <div class="item-subtitle">Rotating Solar Panels</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>Innovasia-2024</strong> | College Hackathon</div>
            <div class="item-subtitle">AI based Call Service Center and ChatBot</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>TechXellerate</strong> | Hackathon - BITS Pilani</div>
            <div class="item-subtitle">Medical Images Annotation for efficient MRI scans</div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Projects</h2>
          <div class="item">
            <div class="item-title"><strong>Visualization Of Data Structures</strong> | Java, Java AWT, Java Swing UI, Util Library</div>
            <div class="item-description">Programmed a visualizer of Data Structures which performs operations and displays them using Graphical User Interface.</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>Medical Management System</strong> | Both in C and Python</div>
            <div class="item-description">Designed a system for storage of patient records and for their easy access.</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>Article Summarizer</strong> | Gen AI</div>
            <div class="item-description">Programmed an article summarizer with emotion detection.</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>Fake News Detection Using AI</strong> | BERT, Python, Flask</div>
            <div class="item-description">Trained a model to predict whether a news is True or Fake with <strong>88% accuracy</strong>.</div>
          </div>
          <div class="item">
            <div class="item-title"><strong>Smart Environment Monitoring System</strong> | IoT</div>
            <div class="item-description">Used various sensors to monitor the Environment and give alerts (Smart City)</div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Certifications</h2>
          <ul class="list-items">
            <li><strong>Programming in C</strong> | NPTEL</li>
            <li><strong>The Joy Of Computing in Python</strong> | NPTEL, Silver+Elite badge</li>
            <li><strong>Fundamentals Of Artificial Intelligence & Machine Learning</strong> | IIIT-Hyderabad</li>
            <li><strong>Data Science For Engineers</strong> | NPTEL</li>
          </ul>
        </div>
        
        <div class="section">
          <h2 class="section-title">Achievements</h2>
          <ul class="list-items">
            <li><strong>VCE Merit Awards</strong> | For being the first topper in B.E.(I/1V) CSE-B</li>
            <li><strong>Honorary Delegate</strong> | Model United Nations - VCE</li>
            <li><strong>Poster Presentation</strong> | Topic: Invest in Women, First Prize</li>
            <li><strong>Telangana's Best Speaker Award Finalist</strong> | By Student Tribe</li>
          </ul>
        </div>
      </div>
    
  );
}

export default App;
