import React from "react";

export default function Footer() {
  const filterbtns = [
    {
      title: "All",
      isActive: true,
      onclick: () => {},
      link: "",
    },
    {
      title: "Active",
      isActive: false,
      onclick: () => {},
      link: "Active",
    },
    {
      title: "complete",
      isActive: false,
      onclick: () => {},
      link: "Complete",
    },
  ];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>2</strong>
        <span></span>
        <span>items</span>
        <span>left</span>
      </span>
      <ul className="filters">
        {filterbtns.map((btn) => (
          <Filterbtn key={btn.title} {...btn} />
        ))}
      </ul>
      <button className="clear-completed">Clear complete</button>
    </footer>
  );
}
const Filterbtn = (props) => {
  const { title, onClick, link, isActive } = props;
  return (
    <>
      <li>
        <a
          href={`#/${link}`}
          className={`${isActive ? "selected" : ""}`}
          onClick={onClick}
        >
          {title}
        </a>
      </li>
      <span></span>
    </>
  );
};
