import { Dock, Navbar, Welcome } from "#components";
import React from "react";
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { Contact, Finder, ImageWindowContent, Resume, Safari, Terminal, Text } from "#windows";



gsap.registerPlugin(Draggable)
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <ImageWindowContent/>
      <Contact/>
    </main>
  );
};

export default App;
