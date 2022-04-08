import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const AddTransation = ({transation}) => {
  const {deleteTransaction} = useContext(GlobalContext);
  const  sign= transation.amount < 0 ? "-" : "+";


  return (
    <li className={transation.amount < 0 ? "minus" : "plus"}>
        {transation.text} <span>{sign}${Math.abs(transation.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transation.id)}>x</button>
    </li>
  )
}

export default AddTransation