import React from "react";
import { navSections } from "../data/navLinks";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {navSections.map((section, si) => (
        <div key={si} className="nav-section">
          <h3 className="sidebar-heading">{section.heading}</h3>
          <ul className="nav-links">
            {section.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="nav-item">
                  <Icon className="nav-icon" size={18} />
                  <span className="nav-text">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
