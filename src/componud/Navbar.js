import React from 'react';
import Bill from './Bill';
import { Calculation } from './combocal';
import { useDispatch, useSelector } from 'react-redux';
import { AddShoppingItemAction, DecreaseShoppingItemAction } from './action';
import { Icon } from '@iconify/react';
import minusIcon from '@iconify-icons/mdi/minus';
import plusIcon from '@iconify-icons/mdi/plus';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  var bill = {};
  const dispatch = useDispatch();
  const foods = useSelector((state) => state);

  const AddShoppingItem = (id) => dispatch(AddShoppingItemAction(id));

  const DecreaseShoppingItem = (id) => dispatch(DecreaseShoppingItemAction(id));

  const HandleIncrementBtnClick = (event, id) => {
    event.preventDefault();
    AddShoppingItem(id);
  };

  const HandleDecrementBtnClick = (event, id) => {
    event.preventDefault();
    DecreaseShoppingItem(id);
  };

  const Calc = () => {
    bill = Calculation(foods);
  };

  return (
    <Router>
      <Link to="/">
        <div class=" cursor-pointer text-xl md:text-3xl lg:text-5xl  bg-yellow-100 text-center">
          Food Park
        </div>
        <div class=" justify-items-center m-4 md:m-8 lg:text-xl lg:p-4 text-sm  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {foods &&
            foods.map((food) => {
              return (
                <div class="justify-items-center  border-4 border-red-100">
                  <span>{food.name}</span>
                  <br></br>
                  <p>
                    <img
                      src={food.image}
                      alt="image"
                      height="150px"
                      width="150px"
                    ></img>
                  </p>
                  <div>
                    <button
                      disabled={!food.qty}
                      id={food.id}
                      onClick={Calc()}
                      onClick={(e) => HandleDecrementBtnClick(e, food.id)}
                      style={{ background: '#32174d' }}
                      className=" text-white p-1 "
                    >
                      <Icon icon={minusIcon} />
                    </button>

                    <span className="p-1 ">{food.qty}</span>

                    <button
                      id={food.id}
                      onClick={Calc()}
                      onClick={(e) => HandleIncrementBtnClick(e, food.id)}
                      style={{ background: '#32174d' }}
                      className="text-white p-1 "
                    >
                      <Icon icon={plusIcon} />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <Bill value={bill} />
      </Link>
    </Router>
  );
};

export default Navbar;
