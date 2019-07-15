import React, { Component } from 'react';
import styles from './App.module.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ContentArea from './ContentArea/ContentArea';
import dummyText from './DummyText';

class App extends Component {
  state = {
    theme: 'dark'
  }

  render() {
    const contents = [
      { title: 'Section 1', id: 'section1', content: dummyText },
      { title: 'Section 2', id: 'section2', content: dummyText },
      { title: 'Section 3', id: 'section3', content: dummyText },
      { title: 'Section 4', id: 'section4', content: dummyText },
      { title: 'Section 5', id: 'section5', content: dummyText },
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
      </div>
    );
  }
}

export default App;
