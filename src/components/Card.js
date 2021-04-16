import './Card.scss';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';



const Card = ({ title, thumbnail, click, price, shipping }) => {
    return (
        <div className={ click === 0 ? "hidden" : "Card"}>
            <img src={thumbnail} />
            <h1>{title}</h1>
            {shipping && <h4>Tiene envio gratiuito</h4>}
            <p>$ {price}</p>
            <Button>Ver mas</Button>

        </div>

    )
}

export default Card;