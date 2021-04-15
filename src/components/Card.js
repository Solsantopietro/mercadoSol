import './Card.scss';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';



const Card = ({ title, thumbnail, click, price }) => {
    return (
        <div className={ click === 0 ? "hidden" : "Card"}>
            <h1>{title}</h1>
            <img src={thumbnail} />
            <p>$ {price}</p>
            <Button>Ver mas</Button>
        </div>

    )
}

export default Card;