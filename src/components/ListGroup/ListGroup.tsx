import "./ListGroup.module.css";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

function ListGroup() {
  const items = ["Québec", "Montréal", "Drummondville", "Saint-Césaire"];

  return (
    <>
      <h1>Ma Liste</h1>
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
