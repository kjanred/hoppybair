import styles from '../style/footer.module.css'
export default function Footer() {
    return (
        <>
            <div className={`${styles.div} col-md-6`}><p className={styles.p}>Link 1</p></div>
            <div className={`${styles.div} col-md-6`}><p className={styles.p}>Link 2</p></div>
            
        </>
    );
}