import { injectHeader, injectFooter } from '../shared/layout';
import React from "react";
import { createRoot } from "react-dom/client";
import ExperienceGraph from "../components/ExperienceGraph"; // adjust if located elsewhere

// Find the element with class 'page'
const container = document.querySelector(".page");

if (container) {
  const root = createRoot(container);
  root.render(<ExperienceGraph />);
} else {
  console.error("No .page element found to mount React app.");
}


injectHeader();
injectFooter();