import PromoHeading from "./PromoHeading";
// single source of truth in React apps
// edit multiple items from a single point
const data ={
  heading : "80% off all items!",
  callToAction : "Everything must go"
}

function Promo (){
  return (
    <div>
      <PromoHeading heading={data.heading} callToAction={data.callToAction}/>
    </div>
  )
}

export default Promo;