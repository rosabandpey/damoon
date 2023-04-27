import RelatedSiteCard from './RelatedSiteCard';
import styles from './style/related-site-section.module.scss'


export default function RelatedSite(props) {

    const data = props?.data;

    return (
        <section className={styles.related_site_section}>
            <div className={styles.container}>
                <h3 className={styles.section_title}>
                    {data?.title}
                </h3>
                <ul className={styles.related_site_list}>
                    {
                        (data?.siteList || []).map((site, i) => (
                            <li key={i} className={styles.related_site_item}>
                                <RelatedSiteCard data={site}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
