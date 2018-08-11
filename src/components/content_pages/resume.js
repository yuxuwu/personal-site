import React from 'react';

const Resume = () => {
	return (
		<div className="content">
			<section>
				<p>Download my résumé as a PDF <a href="wu_resume.pdf" target="_blank">here</a>, or scroll down to view part of it online instead!</p>
			</section>
			<hr className="u-margin-bottom-md"/>

			<section className="resume-section">
				<h3>Education</h3> 
				<p className="resume-section_label"><span className="bold">Binghamton University (2016-2019)</span> | BS in Computer Science</p>
				<p className="u-margin-left-md">Dean's List Spring 2018</p>
				<p className="resume-section_label"><span className="bold">SUNY Polytechnic University (2015-2016)</span> | BS in Computer Science</p>
				<p className="u-margin-left-md">President's Excellence List Fall 2015 - Spring 2016</p>
			</section>
			<section className="resume-section">
				<h3>Work Experience</h3>
				<p className="resume-section_label"><span className="bold">Global Health Impact (Summer 2018)</span> | Web Development Intern</p>
				<ul className="resume-section_list">
					<li><p>Led development of a Flask application to display modifiable data models based in Google Sheets.</p></li>
					<li><p>Promoted code maintainability by introducing BEM & 7-1 architecturing to HTML/CSS, and modularizing routes into individual files.</p></li>
				</ul>
				<p className="resume-section_label"><span className="bold">Medical Logistics Inc. (Summer 2017)</span> | Software Engineering Intern</p>
				<ul className="resume-section_list">
					<li><p>Introduced Python to customer filing workflow. Saved 2 weeks of preprocessing time for current and future customers.</p></li>
					<li><p>Developed Flask application doc2ocr - a conversion tool from PDFs to machine-readable files.</p></li>
					<li><p>Learned and used Python requests and Mechanize libraries to upload patient files.</p></li>
				</ul>
			</section>
			<section className="resume-section">
				<h3>Extracurriculars</h3>
				<p className="resume-section_label"><span className="bold">C.o.R.E. Student Living Community</span> | Systems Administrator & Website Manager</p>
				<ul className="resume-section_list">
					<li><p>Developing new CoRE website and online platforms to host internal web-based projects and technical diaries. Part of rebranding effort to raise awareness of CoRE's role in the campus community.</p></li>
					<li><p>Deployed websites for other student communities using nginx proxies.</p></li>
					<li><p>Managed security of server using firewalls, service audits, and weekly backups.</p></li>
				</ul>
				<p className="resume-section_label"><span className="bold">Binghamton Mars Rover Team</span> | Core Automation Engineer</p>
				<ul className="resume-section_list">
					<li><p>Developed modular applications in C++ for the ROS robotics framework and OpenCV visual processing library.</p></li>
					<li><p>Led development of image recognition and serial port communication components of the Rover Team's robot.</p></li>
				</ul>
			</section>
			<section className="resume-section">
				<h3>Awards</h3>
				<p><span className="bold">HackBU Hackathon 2018</span></p>
				<p>Best Fintech Hack and Best Open-Source & Humanitarian Hack</p>
				<p>Collaborated with an accounting student to develop Kibbutz in 24 hours, an online platform for <span className="bold">local-crowdfunding</span>. Gave presentation about features and use cases of the app to judges. Full-stack development using <span className="bold">MEAN stack</span>, <span className="bold">RESTful routing</span>, and <span className="bold">MVC architecturing</span>.</p>
			</section>
		</div>
	);
}

export default Resume;
