// components
import Banner from '../components/banner';

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

    </>
  )
}
