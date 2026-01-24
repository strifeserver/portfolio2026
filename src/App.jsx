import React from "react";
import profileData from "./data/profile.json";
import projectsData from "./data/projects.json";
import stackData from "./data/stack.json";
import historyData from "./data/history.json";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import PersonalProjects from "./components/PersonalProjects";
import Stack from "./components/Stack";
import History from "./components/History";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { profile, hero } = profileData;
  const { featured: projects, personal: personalProjects } = projectsData;

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-void-black text-white selection:bg-scourge-purple/30 overflow-hidden">
      <Sidebar profile={profile} email={profile.email} />

      <main className="flex-1 overflow-y-auto scroll-smooth relative">
        <Header email={profile.email} />

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-24 pb-24 md:pb-12">
          <Hero hero={hero} />
          <Projects projects={projects} />
          <PersonalProjects personalProjects={personalProjects} />
          <Stack stack={stackData} />
          <History history={historyData} />
          <Contact />
          <Footer profile={profile} />
        </div>
      </main>
    </div>
  );
}

export default App;
