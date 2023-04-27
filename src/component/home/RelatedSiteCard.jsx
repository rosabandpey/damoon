import Image from 'next/image'
import styles from './style/related-site-card..module.scss'

export default function RelatedSiteCard(props) {

    const data = props?.data;

    return (
        <a href={data?.link}>
            <div className={styles.related_site_card}>
                <figure className={styles.site_banner}>
                    <Image src={data?.logoSrc} alt={data?.logoAlt} />
                </figure>
                <h5 className={styles.site_title}>
                    {data?.title}
                </h5>
            </div>
        </a>
    );
}
