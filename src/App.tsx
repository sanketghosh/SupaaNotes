import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import NewNote from "./Pages/NewNote/NewNote";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
