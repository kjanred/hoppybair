import styles from '../style/footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={`${styles.footer} row footer p-3`}>

            <div className='container'><div className='row'>
            <div className='col-1'><br /></div>
            <div className={`${styles.div} col-10 text-center`}>
                <div className='container-fluid'><div className='row'>
                <div className='col-4 col-md my-2'>
                    <Image
                        src='/img/footer/x.png'
                        width={35}
                        height={35}
                        alt='X (formerly known as Twitter) logo' />
                </div>
                <div className='col-4 col-md my-2'>
                     <Image
                        src='/img/footer/insta.png'
                        width={35}
                        height={35}
                        alt='Instagram logo' />
                </div>
                <div className='col-4 col-md my-2'>
                    <Image
                        src='/img/footer/twitch.png'
                        width={35}
                        height={35}
                            alt='Twitch logo' /></div>
                    <div className='col-4 col-md my-2'>
                        <Image
                            src='/img/footer/email.png'
                            width={35}
                            height={35}
                            alt='Email' />
                    </div>
                    <div className='col-4 col-md my-2'>
                        <Image
                            src='/img/footer/star.png'
                            width={35}
                            height={35}
                            alt='Instagram logo' />
                    </div>
                    <div className='col-4 col-md my-2'>
                        <Image
                            src='/img/footer/star.png'
                            width={35}
                            height={35}
                                alt='Twitch logo' /></div></div></div>
            </div>
                <div className='col-1'>< br /></div>
            </div>
                <div className='row'><div className='col'><hr /></div></div>
                <div className='row mx-3'>
                    
                    <div className='col-12 col-md-6'><p className={styles.p}>&copy; &trade; Hoppy Bairs</p></div>
                    <div className='col-12 col-md-6 text-end'><p className={styles.p}> Founded by Rodolfo | Website by Karl</p></div>

                </div></div>
            
            </footer>
    );
}