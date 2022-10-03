import Image from 'next/image';

// components
import Banner from '../components/banner';

// styles
import styles from '../styles/Home.module.css';

export default function Home() {

  function handleOnClick() {
    console.log('handleOnClick')
  }

  return (
    <>
      <Banner 
        buttonText="View stores nearby" 
        handleOnClick={handleOnClick}
      />

      <div className={styles.heroImage}>
        <Image src="/static/hero-image.png" alt='Hero' width={700} height={400} />
      </div>
    </>
  )
}
