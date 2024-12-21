import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.contactItem}>
      <ul className={s.contactText}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className={s.btnDlt} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
