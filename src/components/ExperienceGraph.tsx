// CategoryGraph.tsx
import React, { useState } from "react";

const categories = [
  "Research",
  "Projects",
  "Courses",
  "Self-Study (Book)",
  "Skills",
  "Non Academics",
];

const categoryColorMap: Record<string, string> = {
  Research: "#fecdd3",        
  Projects: "#fde68a",         
  Courses: "#fef9c3",          
  "Self-Study (Book)": "#e0f2fe", 
  Skills: "#bfdbfe",           
  "Non Academics": "#ddd6fe",  
};

type NodeType = {
  id: string;
  label: string;
  category?: string;
  type?: string;
  x: number;
  y: number;
};

const nodes: NodeType[] = [
  { id: "csds", label: "CS/DS", type: "hub", x: 100, y: 100 },
  { id: "lx", label: "LX", type: "hub", x: 300, y: 100 },
  { id: "ph", label: "PH", type: "hub", x: 500, y: 100 },
  { id: "ps", label: "PS", type: "hub", x: 100, y: 300 },
  { id: "ns", label: "NS", type: "hub", x: 300, y: 300 },
  { id: "slalab", label: "SLA Lab", category: "Research", x: 200, y: 200 },
  { id: "urod", label: "O’dam UROP", category: "Research", x: 400, y: 200 },
  { id: "ra", label: "Resident Assistant", category: "Non Academics", x: 500, y: 300 },
  { id: "ml", label: "Principles of Machine Learning", category: "Courses", x: 600, y: 100 },
  { id: "db", label: "Introduction to Database System", category: "Courses", x: 600, y: 200 },
  { id: "toc", label: "Theory of Computation", category: "Courses", x: 600, y: 300 },
  { id: "cpl", label: "Concepts of Programming Language", category: "Courses", x: 600, y: 400 },
  { id: "cl", label: "Computational Linguistics", category: "Projects", x: 400, y: 300 },
  { id: "csl", label: "Cognitive Science and Language", category: "Courses", x: 400, y: 400 },
  { id: "psych", label: "General Psychology", category: "Courses", x: 300, y: 500 },
  { id: "mbs", label: "Mind, Brain, and Self", category: "Courses", x: 200, y: 500 },
  { id: "neuro", label: "Neuroscience exploring the brain", category: "Self-Study (Book)", x: 100, y: 500 },
];

const links: [string, string][] = [
  ["slalab", "csds"],
  ["urod", "csds"],
  ["urod", "lx"],
  ["slalab", "lx"],
  ["cl", "lx"],
  ["cl", "csds"],
  ["ml", "csds"],
  ["db", "csds"],
  ["toc", "csds"],
  ["cpl", "csds"],
  ["csl", "lx"],
  ["psych", "ps"],
  ["mbs", "ph"],
  ["neuro", "ns"],
];

export default function CategoryGraph() {
  const [visibleCategories, setVisibleCategories] = useState<string[]>([...categories]);

  const toggleCategory = (cat: string) => {
    setVisibleCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredNodes = nodes.filter(
    (n) => !n.category || visibleCategories.includes(n.category)
  );

  const filteredLinks = links.filter(
    ([src, tgt]) =>
      filteredNodes.some((n) => n.id === src) &&
      filteredNodes.some((n) => n.id === tgt)
  );

  return (
    <div className="layout">
      <div className="button-panel">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className="category-button"
            style={{
              backgroundColor: visibleCategories.includes(cat)
                ? categoryColorMap[cat]
                : "#ddd",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

    <svg width="900" height="600" className="graph-canvas">
        {filteredLinks.map(([from, to], i) => {
          const src = nodes.find((n) => n.id === from);
          const tgt = nodes.find((n) => n.id === to);
          if (!src || !tgt) return null;

          return (
            <line
              key={i}
              x1={src.x}
              y1={src.y}
              x2={tgt.x}
              y2={tgt.y}
              stroke="gray"
              strokeWidth={1.5}
            />
          );
        })}

        {filteredNodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.type === "hub" ? 30 : 15}
              fill={n.category ? categoryColorMap[n.category] : "#d1d5db"}
              stroke="black"
            />
            <text
              x={n.x}
              y={n.y + 5}
              textAnchor="middle"
              fontSize="10"
              fill="black"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
