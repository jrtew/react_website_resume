import React, { Component } from 'react';
import styles from './App.module.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ContentArea from './ContentArea/ContentArea';
import Footer from './Footer/Footer';
import about from './Content/About';
import resume from './Content/Resume';
import work from './Content/Work';

class App extends Component {
  state = {
    theme: 'dark'
  }

  render() {
    const contents = [
      { title: 'About Me', id: 'about1', content: about },
      { title: 'Resume', id: 'resume1', content: resume },
      { title: 'My Work', id: 'work1', content: work }
    ]

    const allContent = (
      <div>
        {contents.map((content, index) => {
          return <ContentArea
            title={content.title}
            content={content.content}
            theme={this.state.theme}
            key={content.id}
            id={content.id} />
        })}
      </div>
    );

    return (
      <div className={styles.App}>
        <Navbar theme={this.state.theme} contents={contents} />
        <Hero />
        {allContent}
        <Footer />
      </div>
    );
  }
}

export default App;
