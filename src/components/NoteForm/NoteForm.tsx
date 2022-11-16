import styles from "./NoteForm.module.scss";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
const NoteForm = () => {
  return (
    <div className={styles.noteForm}>
      <form className={styles.form}>
        <div className={styles.upper}>
          <div className={styles.searchType}>
            <label htmlFor="">Title</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.searchType}>
            <label htmlFor="">Tags</label>
            <CreatableReactSelect isMulti className={styles.input} />
          </div>
        </div>

        <div className={styles.lower}>
          <textarea name="" id=""></textarea>
          <div className={styles.btnGroup}>
            <button type="submit" className={styles.saveBtn}>
              Save
            </button>
            <Link to="..">
              <button type="button" className={styles.cancelBtn}>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
