import Image from "next/image";
import WeddingText from "../../../public/svgs/weddingText.svg";
import style from "./Main.module.scss";

export default function Main() {
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div className={style.weddingText}>
          <Image src={WeddingText} alt="Wedding Text" />
        </div>
        <div className={style.imgWrap}>
          <Image
            src="/images/main1.jpg"
            alt="메인이미지"
            fill
            className={style.mainImg}
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}
