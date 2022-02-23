import BasketSimple from "../basket-simple";
import {Link} from "react-router-dom";

import React from 'react';

const LayoutGood = ({openModal, sum, amount, good}) => {
  return (
    <div className="layoutGood">
      <div className="goode_header__simple_basket">
        <Link style={{padding: 20}} to={'/'}>Главная</Link>
        <BasketSimple onOpen={openModal} amount={amount} sum={sum}/>
      </div>
      <div className="good_info">
        <p>{good.description}</p>
        <p>Категория: {good.title}</p>
        <p>Страна производиель: {good.title}</p>
        <p>Год: {good.edition}</p>
        <p>Цена: {good.price} &#8381;</p>
        <button>Добавить</button>
      </div>
    </div>
  );
};

export default LayoutGood;
