import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import './styles.css';
import {Link, useLocation} from "react-router-dom";
import useStore from "../../utils/use-store";

function ItemBasket({item}) {
  const url = useLocation();
  const store = useStore();

  const callbacks = {
    closeModal: useCallback(() => store.modals.close(), [store]),
  }

  return (
    <div className='ItemBasket'>
      <div className='ItemBasket__number'>{item._key}</div>
      <Link
        onClick={callbacks.closeModal}
        to={url.pathname + "good/" + item._id}
        className='Item__title'
      >{item.title}</Link>
      <div className='ItemBasket__right'>
        <span className="ItemBasket__cell">{numberFormat(item.price || 0)} ₽</span>
        <span className="ItemBasket__cell">{numberFormat(item.amount || 0)} шт</span>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
}

ItemBasket.defaultProps = {

}

export default React.memo(ItemBasket);
