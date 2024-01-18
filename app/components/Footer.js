import styles from '../style/footer.module.css'
import { tarrgetFont } from '../font/font';

export default function Footer() {
    return (
        <>
            <div className={`${styles.div} ${tarrgetFont.className} col-md-6 text-center text-md-end`}><p className={styles.p}>Link1 Link2 Link3</p></div>
            <div className={`${styles.div} ${tarrgetFont.className} col-md-6 text-center text-md-start`}><p className={styles.p}>Link4 Link5 Link6</p></div>
            
        </>
    );
}