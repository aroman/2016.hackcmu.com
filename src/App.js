import React, { Component } from 'react';
import './App.css';

import Logo from './logo.png'
import Friday from './friday.png'
import Saturday from './saturday.png'

import IMC from './sponsors/imc.svg'
import Google from './sponsors/google.svg'
import GoldmanSachs from './sponsors/goldman-sachs.svg'
import Salesforce from './sponsors/salesforce.svg'
import Microsoft from './sponsors/microsoft.svg'

import IMCColor from './sponsors/imc-color.png'
import GoogleColor from './sponsors/google-color.svg'
import GoldmanSachsColor from './sponsors/goldman-sachs-color.svg'
import SalesforceColor from './sponsors/salesforce-color.svg'
import MicrosoftColor from './sponsors/microsoft-color.svg'

class SponsorLogo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSrc: this.props.bw
    }
  }

  render() {
    return (
      <img
      alt={this.props.alt}
      onMouseEnter={() => this.setState({currentSrc: this.props.color})}
      onMouseLeave={() => this.setState({currentSrc: this.props.bw})}
      src={this.state.currentSrc}
      />
    )
  }
}

class Schedule extends Component {

  render() {
    return (
      <div className="Schedule">
        <div className="Schedule-day">{this.props.day}</div>
        <div className="Schedule-items">
          {
            this.props.events.map(tuple => {
              const time = tuple[0]
              const label = tuple[1]
              return (
                <div className="Schedule-item" key={label}>
                  <div className="Schedule-item-time">{time}</div>
                  <div className="Schedule-item-separator"/>
                  <div className="Schedule-item-label">{label}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Header-title">
            <a href="/">HackCMU 2016</a>
          </div>
          <div className="Header-items">
            <div className="Header-items-item">
              <a href="#schedule">Schedule</a>
            </div>
            <div className="Header-items-item">
              <a href="#sponsors">Sponsors</a>
            </div>
            <div className="Header-items-item">
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className="cta">
          <div className="cta-title">Learn. Build. Hack.</div>
          <div className="cta-logo-container">
            <img className="cta-logo" src={Logo} role="presentation"/>
            <div className="cta-subtitle">September 16–17</div>
          </div>
          <div className="cta-buttons">
            <div className="btn-container">
              <a className="btn" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdyubcIDT4VN__oaFUOCJFCcytlFv818l6Woqpjim__-GwSEA/viewform?c=0&w=1">Mentor sign-up</a>
            </div>
            <div className="btn-container">
              <a className="btn" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScSX5pQFz4iYA5blZAl2L0pJ9H3b2fBbWSs_ucE9pGXw78H6w/viewform?c=0&w=1">Individual sign-up</a>
              <div className="btn-caption">ends 9/13 at 11:59 pm</div>
            </div>
            <div className="btn-container">
              <a className="btn" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSckwe-s6xuh61dJfzSY88GCmGVAqfynsibxy5zE52G96KGEag/viewform?c=0&w=1&usp=send_form">Team sign-up</a>
              <div className="btn-caption">ends 9/13 at 11:59 pm</div>
            </div>
          </div>
        </div>
        <div className="Section">
          <a name="schedule"></a>
          <div className="Section-title">Schedule</div>
          <div className="Schedules">
            <img src={Friday}/>
            <img src={Saturday}/>
            {/* <Schedule day="Friday" events={[
              ['6:00 pm', 'check-in begins'],
              ['7:00 pm', 'opening talks + dinner'],
              ['7:45 pm', 'hacking begins!'],
              ['12:00 am', 'midnight snack'],

            ]}/>
            <Schedule day="Saturday" events={[
              ['9:00 am', 'breakfast'],
              ['12:00 pm', 'lunch'],
              ['6:00 pm', 'hacking ends + dinner'],
              ['9:00 pm', 'everyone presents!'],

            ]}/> */}
          </div>
        </div>
        <div className="Section">
          <a name="sponsors"></a>
          <div className="Section-title">Sponsors</div>
          <div className="Logos">
            <SponsorLogo color={MicrosoftColor} bw={Microsoft} alt='Microsoft'/>
            <SponsorLogo color={SalesforceColor} bw={Salesforce} alt='Salesforce'/>
            <SponsorLogo color={GoldmanSachsColor} bw={GoldmanSachs} alt='Goldman Sachs'/>
            <SponsorLogo color={GoogleColor} bw={Google} alt='Google'/>
            <SponsorLogo color={IMCColor} bw={IMC} alt='IMC'/>
          </div>
        </div>
        <div className="Section">
          <a name="faq"></a>
          <div className="Section-title">F.A.Q.</div>
          <div className="Section-subtitle">What is HackCMU?</div>
          <div className="Section-text">HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.</div>
          <div className="Section-subtitle">Who can attend?</div>
          <div className="Section-text">Any current undergrad at Carnegie Mellon is welcome to apply. HackCMU is a beginner-focused hackathon, and preference will be given to freshmen and female applicants. More experienced hackers are encouraged to sign up as mentors.</div>
          {/* <div className="Section-subtitle">I have another event during the weekend — can I miss part of the event?</div> */}
          <div className="Section-subtitle">How much does this cost?</div>
          <div className="Section-text">$0. The entire event is free for students, including food, energy drinks, and lots of swag. Sponsorship for this event is made possible by the contributions of our corporate sponsors.</div>
          <div className="Section-subtitle">I’m not a “hacker”, can I still participate?</div>
          <div className="Section-text">Students of all skill levels are encouraged to attend, even if you’ve never written a line of code! Creative individuals of all kinds are welcome to apply — such as designers, ECE majors, statistics, etc. The only requirement is your attitude to learn!</div>
          <div className="Section-subtitle">Are there teams? Do I need one to sign up!</div>
          <div className="Section-text">Working as a team is <em>highly</em> encouraged, but not required. You are welcome to form teams ahead of the event, but there will also be team forming day-of the event!</div>
          <div className="Section-subtitle">What are the rules? Can I work on my project ahead of time?</div>
          <div className="Section-text">Specific rules are TBD, but in short: all work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.</div>
          <div className="Section-subtitle">You didn’t answer my question!</div>
          <div className="Section-text">Well, that isn’t a question. But if you have any questions on concerns not covered here, please send an email to alrao[at]andrew.cmu.edu or aromanof[at]andrew.cmu.edu</div>
        </div>
        <div className="Spacer"/>
        <div className="Footer">
          <div className="Footer-1">organized by </div>
          <div className="Footer-2">ACM@CMU </div>
        </div>
      </div>
    );
  }
}

export default App;
