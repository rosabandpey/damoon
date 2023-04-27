
import styles from './style/why-atieh-section.module.scss'

export default function WhyAtiehSection(props) {
    const data = props?.data;

    return (
        <section className={styles.why_atieh_section}>
            <div className={styles.container}>
                <h3 className={styles.section_title}>
                    {data?.title}
                </h3>
                <p className={styles.section_desc}>
                    {data?.text}
                </p>
            </div>
        </section>
    );
}
