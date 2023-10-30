import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    // const { expenses } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += item.cost);
    // }, 0);
    return (
        <div className='dropdown'>
            {/* <span>Spent so far: £{totalExpenses}</span> */}
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    );
};
export default Currency;
