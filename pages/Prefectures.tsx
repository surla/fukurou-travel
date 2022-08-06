import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Prefecture.module.css";
import tokyo from "/public/images/tokyo.jpg";
import kanagawa from "/public/images/kanagawa.jpg";
import osaka from "/public/images/osaka.jpg";
import kyoto from "/public/images/kyoto.jpg";
import hokkaido from "/public/images/hokkaido.jpg";
import okinawa from "/public/images/okinawa.jpg";

const ByPrefecture: NextPage = () => {
  return (
    <section>
      <h2>By Prefecture</h2>
      <ul className={styles.prefectures}>
        <li>
          <Image src={tokyo} alt="Photo of Tokyo" width={150} height={150} />
          <a href="#">Tokyo</a>
        </li>
        <li>
          <Image
            src={kanagawa}
            alt="Photo of Kanagawa"
            width={150}
            height={150}
          />
          <a href="#">Kanagawa</a>
        </li>
        <li>
          <Image src={osaka} alt="Photo of Osaka" width={150} height={150} />
          <a href="#">Osaka</a>
        </li>
        <li>
          <Image src={kyoto} alt="Photo of Kyoto" width={150} height={150} />
          <a href="#">Kyoto</a>
        </li>
        <li>
          <Image
            src={hokkaido}
            alt="Photo of hokkaido"
            width={150}
            height={150}
          />
          <a href="#">Hokkaido</a>
        </li>
        <li>
          <Image
            src={okinawa}
            alt="Photo of okinawa"
            width={150}
            height={150}
          />
          <a href="#">Okinawa</a>
        </li>
      </ul>
    </section>
  );
};

export default ByPrefecture;
