import Image from "next/image";

// components
import Banner from "../components/banner";
import Card from "../components/card";

// styles
import styles from "../styles/Home.module.css";

// data
import coffeeStores from '../data/coffee-stores.json';

export default function Home() {
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
