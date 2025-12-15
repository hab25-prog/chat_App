import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem, getCurrentQuantity } from './cartSlice';
import DeletButton from './DeletButton';
import UpdateItem from './UpdateItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  
  const dispatch=useDispatch();
  const currentQuantity =useSelector(getCurrentQuantity(pizzaId))

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeletButton pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
