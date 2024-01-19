import styles from '../style/footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="row footer">
            <div className={`${styles.div} col-md-6 text-center text-md-end`}><div className='container'><div className='row'>
                <div className='col'>
                    <Image
                        src='/img/footer/x.png'
                        width={50}
                        height={50}
                        alt='X (formerly known as Twitter) logo' />
                </div>
                <div className='col'>
                     <Image
                        src='/img/footer/insta.png'
                        width={50}
                        height={50}
                        alt='Instagram logo' />
                </div>
                <div className='col'>
                    <Image
                        src='/img/footer/twitch.png'
                        width={50}
                        height={50}
                        alt='Twitch logo' /></div></div></div></div>
            <div className={`${styles.div} col-md-6 text-center text-md-start`}></div>
            
            </footer>
    );
}