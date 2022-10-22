import './cardBlock.css'
import Card from "./card/card";
const CardBlock = ({data, SelectCard}) => {

    const elements = data.map(item=>{
        const {id,...itemProps} = item
        return(
            <Card
            key={id}
            {...itemProps}
            SelectCard={()  => SelectCard(id)}/>
        )
    })

    return (
        <div className="blockCard">
            {elements}
        </div>
    )
}
export default CardBlock;