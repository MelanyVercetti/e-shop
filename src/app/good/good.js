import React, {useCallback, useEffect} from 'react';
import '../../components/layout-good/layout-good.css';
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import {useParams} from 'react-router-dom';
import Layout from "../../components/layout";
import Pages from "../../components/pages/pages";
import LayoutGood from "../../components/layout-good/layout-good";

const Good = () => {
  const store = useStore();

  const select = useSelector(state => ({
    goods: state.catalog.items,
    amount: state.basket.amount,
    sum: state.basket.sum,
    good: state.good.selectedGood
  }));

  const callbacks = {
    openModal: useCallback(() => store.modals.open('basket'), [store]),
    selectGood: useCallback(() => store.good.selectGood(id), [store])
  }
  const {id} = useParams();

  useEffect(async () => {
    await store.good.selectGood(id);
  }, []);

  // const selectedGood = select.goods.filter(elem => {
  //   if (elem._id === id) {
  //     return elem
  //   }
  // })

  return (
    <Layout head={<h1>{select.good.name}</h1>}>
      <LayoutGood
        openModal={callbacks.openModal}
        amount={select.amount}
        sum={select.sum}
        good={select.good}
      />
      <Pages changePage={callbacks.changePage}/>
    </Layout>
  )
};

export default Good;
