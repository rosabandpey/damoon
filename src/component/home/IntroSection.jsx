import { Fragment } from 'react';
import curveLine from '../../assets/img/curve-line.svg';
import Image from 'next/image'
import styles from './style/intro-section.module.scss'

export default function IntroSection(props) {

    const data = props?.data;

    const performHighlight = item => {
        const title = item?.text || '';
        const highlight = item?.highlight;
        const textList = title.split(highlight);
        const lastText = textList.pop();

        return (
            <>
                {textList.map((t, i) => (
                    <Fragment key={i}>
                        {t}
                        <span className={styles.text_info}>{highlight}</span>
                    </Fragment>
                ))}
                {lastText}
            </>
        );
    }

    return (
        <section className={styles.intro_section}>
            <div className={styles.container}>
                <div className={styles.section_wrapper}>
                    <figure className={styles.section_banner}>
                        <Image
                            src={data?.banner?.src}
                            alt={data?.banner?.alt}
                        />
                    </figure>
                    <div className={styles.section_content}>
                        <h3 className={styles.section_title}>
                            {performHighlight(data?.title)}
                        </h3>
                        <p className={styles.section_desc}>
                            {data?.text}
                        </p>
                        {/* <ul>
                            {
                                (data?.linkList || []).map((link, i) => (
                                    <li key={i}>
                                        <a className="section_desc text_info" href="#/">
                                            {link.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul> */}
                    </div>
                </div>
            </div>
            <Image className={styles.curve_line} src={curveLine} alt=""/>
        </section>
    );
}
