
import React from "react";
import "../cartItem/cartItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, quantity, removeItem }) => {
  return (
    <div className=" m-4">
      <table className="table1 table table-responsive ">
        <thead>
          <tr className="table-dark"> 
            <th></th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cantidad</th>
            <th>Quitar</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={item.carImg}
                style={{ width: "120px" }}
                alt={item.carModel}
              />
            </td>
            <td>{item.carMake}</td>
            <td>{item.carModel}</td>
            <td>{quantity}</td>
            <td>
            
              <FontAwesomeIcon className='cartRemove' icon={faTrashCan} onClick={() => removeItem(item.id)} />
            </td>
            <td>USD: ${Number(item.price).toFixed(3)}</td>
          </tr>
        </tbody>
         

      </table>
    </div>
  );
};

export default CartItem;