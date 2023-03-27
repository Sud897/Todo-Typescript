import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodoHandler: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTodoHandler}>
      {props.text}
    </li>
  );
};
export default TodoItem;
