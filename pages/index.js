import Image from "next/image";

// components
import Banner from "../components/banner";
import Card from "../components/card";

// styles
import styles from "../styles/Home.module.css";

// data
import coffeeStores from '../data/coffee-stores.json';

export async function getStaticProps(context) {
  // const data = fetch(coffeeStores)
  return {
    props: {
      coffeeStores
    }
  }
}

export default function Home({coffeeStores}) {
  console.log({coffeeStores})
  function handleOnClick() {
    console.log("handleOnClick");
  }

  return (
    <>
      <Banner buttonText="View stores nearby" handleOnClick={handleOnClick} />

      <div className={styles.heroImage}>
        <Image
          src="/static/hero-image.png"
          alt="Hero"
          width={700}
          height={400}
        />
      </div>

      <h2 className={styles.heading2}>Toronto Store</h2>

      <div className={styles.cardLayout}>
        {coffeeStores.map(coffee => (
          <Card
            key={coffee.id}
            name={coffee.name}
            imgUrl={coffee.imgUrl}
            href={`/coffee-store/${coffee.id}`}
          />
        ))}
        
      </div>

     
    </>
  );
}
