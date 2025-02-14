import styles from "./styles.module.scss";

function Mainlayout({ children }) {
  const { wraplayout, container } = styles;
  return (
    <main className={wraplayout}>
      <div className={container}>{children}</div>
    </main>
  );
}

export default Mainlayout;
