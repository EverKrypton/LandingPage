// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AboutSection } from './components/AboutSection';
import { TokenomicsSection } from './components/TokenomicsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { SocialsSection } from './components/SocialsSection';
import { Section } from './components/Section';

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <div>
          <AboutSection />
          <TokenomicsSection />
          <RoadmapSection />
          <SocialsSection />
          <Section title="Section 5">
            // Add content for Section 5 here
          </Section>
          <Section title="Section 6">
            // Add content for Section 6 here
          </Section>
        </div>
      </ChakraProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
      
