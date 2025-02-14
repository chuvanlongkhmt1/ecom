import styles from "../styles.module.scss";
import fbIcon from "../../../assets/icons/svgs/fbicon.svg";
import inIcon from "../../../assets/icons/svgs/inicon.svg";
import yIcon from "../../../assets/icons/svgs/yicon.svg";
function Boxicon({ type, href }) {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return inIcon;
      case "y":
        return yIcon;
    }
  };
  return (
    <a href={href}>
      <div className={boxIcon}>
        <img src={handleRenderIcon(type)} alt="{type}" />
      </div>
    </a>
  );
}

export default Boxicon;
