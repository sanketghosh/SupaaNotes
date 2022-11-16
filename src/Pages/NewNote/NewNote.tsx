import { Link } from "react-router-dom";
import NoteForm from "../../components/NoteForm/NoteForm";
import styles from "./NewNote.module.scss";

const NewNote = () => {
  return (
    <div>
      <nav className={styles.newNoteNav}>
        <Link
          to=".."
          style={{ textDecoration: "none", color: "var(--darkGray)" }}
        >
          <h1>New Note</h1>
        </Link>
      </nav>
      <NoteForm />
    </div>
  );
};

export default NewNote;
