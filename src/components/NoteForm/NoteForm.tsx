//importing styles
import styles from "./NoteForm.module.scss";

//importing react packages
import { FormEvent, useRef } from "react";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
// import { NoteData } from "../../App";
export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};
//declaring types
type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

//jsx
const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  }

  //jsx to return
  return (
    <div className={styles.noteForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.upper}>
          <div className={styles.searchType}>
            <label htmlFor="">Title</label>
            <input type="text" className={styles.input} ref={titleRef} />
          </div>
          <div className={styles.searchType}>
            <label htmlFor="">Tags</label>
            <CreatableReactSelect isMulti className={styles.input} />
          </div>
        </div>

        <div className={styles.lower}>
          <textarea name="" id="" ref={markdownRef}></textarea>
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
