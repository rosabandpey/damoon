
import Image from 'next/image'
import styles from './style/slide-card.module.scss'

export default function SlideCard(props) {

    const cardData = props.cardData;

    return (
        <div className={styles.slider_card_container}>
           
                <Image
                    src={cardData?.banner?.src}
                    alt={cardData?.banner?.alt}
                />
           
           
                <h3 className={styles.card_title}>
                    {cardData?.title}
                </h3>
                <p className={styles.card_text}>
                    {cardData?.text}
                </p>
                <div className={styles.card_actions}>
                    <p className={[styles.btn , styles.btn_sm , styles.btn_pill , styles.card_text].join(' ')}
                      >
                        قیمت : {cardData?.price}
                    </p>
                    <a className={[styles.btn , styles.btn_sm , styles.btn_pill , styles.btn_danger].join(' ')}
                        href={cardData?.link}>
                        ثبت نام
                    </a>
                </div>
          
        </div>
    );
}
