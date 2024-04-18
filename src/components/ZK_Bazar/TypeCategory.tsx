import styles from "./Styles/Category.module.css";

interface Props {
  id: string;
  value: string;
  label: string;
  name: string;
  onFilter: (value: string) => void;
}

const TypeCategory = ({ id, value, label, name, onFilter }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onFilter(event.currentTarget.value);
  };

  return (
    <label className={styles.Clabel} htmlFor={id}>
      <span></span>
      <input
        className={styles.Cinput}
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={handleClick}
      />
      <span>{label}</span>
    </label>
  );
};

export default TypeCategory;
