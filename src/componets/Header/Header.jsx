import Boxicon from "./Boxicon/Boxicon";
import { dataBoxIcon } from "./constant";
import { dataMenu } from "./constant";
import Menu from "./Menu/Menu";
import Logo from "../../assets/images/logo.png";
import RE from "../../assets/icons/svgs/reicon.svg";
import HER from "../../assets/icons/svgs/hearticon.svg";
import CAR from "../../assets/icons/svgs/carticon.svg";
import styles from "./styles.module.scss";
function Myheader() {
  const {
    containeBoxIcon,
    containeMenu,
    containerHeader,
    containeBox,
    container,
  } = styles;
  return (
    <main className={container}>
      <div className={containerHeader}>
        <div className={containeBox}>
          <div className={containeBoxIcon}>
            {dataBoxIcon.map((item) => {
              return <Boxicon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containeMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img src={Logo} alt="" style={{ width: "153px", height: "53px" }} />
        </div>
        <div>
          <div className={containeMenu}>
            {dataMenu.slice(3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div className={containeBox}>
          <img src={RE} alt="" style={{ width: "15px", height: "15px" }} />
          <img src={HER} alt="" style={{ width: "15px", height: "15px" }} />
          <img src={CAR} alt="" style={{ width: "15px", height: "15px" }} />
        </div>
      </div>
    </main>
  );
}

export default Myheader;
