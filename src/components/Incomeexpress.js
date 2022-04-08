import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import AddTransation from './AddTransation';

const Incomeexpress = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    transactions.map(transation => (
                            <AddTransation transation={transation} key={transation.id}/>
                    ))
                }
            </ul>
            

        </div>
    )
}

export default Incomeexpress