import Player from '../components/player/Player';
import styles from './style/video-tutorial.module.scss'


export default function VideoTutorial(props) {

    const data = props?.data;

    return (
        <section className={styles.video_tutorial}>
            <div className={styles.container}>
                <h3 className={styles.section_title}>
                    {data?.title}
                </h3>
                <Player src={data?.video} poster={data?.poster}/>
                <a className={[styles.section_subtitle ,styles.text_info].join(' ')} href="#/">
                    {data?.linkTitle}
                </a>
            </div>
        </section>
    );
}
