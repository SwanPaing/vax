import { useContext } from "react";
import Card from "./Card";
import CardContext from "./CardContext";


const Songs = () => {

  const { songs } = useContext(CardContext);

  return (
    <div>
      <Card items={songs}/>
    </div>
  )
}

export default Songs;