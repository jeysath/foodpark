import React from 'react';

export default function Bill(props) {
  return Math.ceil(props.value.selling_price) && 1 ? (
    <div>
      {' '}
      <div className=" text-xs lg:text-2xl mx-4 md:mx-32 lg:mx-38 text-blue-900 border-dashed border-2 border-light-blue-900  ">
        {parseInt(props.value.br_totel) && 1 ? (
          <div className="flex justify-between px-3 py-2">
            <div>Bread price:</div>
            <div className="flex text-justify">
              ({Math.ceil(props.value.br_totel / 1.1)}* €1.1)
            </div>
            <div>€{props.value.br_totel}</div>
          </div>
        ) : null}
        {props.value.nbe && 1 ? (
          <div className="text-red-500 flex justify-between px-3 py-2">
            <div>Discount</div>
            <div>Buy a Soup get half price Bread</div>
            <div>(-€{props.value.nbe.toFixed(2)})</div>
          </div>
        ) : null}
        {parseInt(Math.ceil(props.value.ml_totel)) && 1 ? (
          <div className="flex justify-between px-3 py-2">
            <div>Milk price:</div>
            <div>({Math.ceil(props.value.ml_totel / 0.5)}* €0.50)</div>
            <div class="text-right">€{props.value.ml_totel}</div>
          </div>
        ) : null}

        {parseInt(Math.ceil(props.value.ch_totel)) && 1 ? (
          <div className="flex justify-between px-3 py-2 ">
            <div> Chesses price:</div>
            <div>({Math.ceil(props.value.ch_totel / 0.9)}* €0.90)</div>
            <div class="text-right">€{props.value.ch_totel}</div>
          </div>
        ) : null}

        {props.value.nc && 1 ? (
          <div className="text-red-500 flex justify-between  py-2">
            <div>Discount:</div>
            <div className="justify-evenly">Buy one Cheese get one offer </div>
            <div class="text-right">(-€{props.value.nc})</div>
          </div>
        ) : null}

        {parseInt(Math.ceil(props.value.so_totel)) && 1 ? (
          <div className="flex justify-between px-3 py-2">
            <div>Soup price:</div>
            <div>({Math.ceil(props.value.so_totel / 0.6)}* €0.60)</div>
            <div class="text-right">€{props.value.so_totel}</div>
          </div>
        ) : null}

        {parseInt(Math.ceil(props.value.bu_totel)) && 1 ? (
          <div className="flex justify-between px-3 py-2">
            <div>Butter price:</div>
            <div>({Math.ceil(props.value.bu_totel / 1.2)}* €1.2)</div>
            <div class="text-right">€{props.value.bu_totel}</div>
          </div>
        ) : null}

        {props.value.fbu && 1 ? (
          <div className="text-red-500 flex justify-between px-3 py-2 ">
            <div> Discount</div>
            <div>Get a third off Butter!</div>
            <div class="text-right">(-€{props.value.fbu})</div>
          </div>
        ) : null}

        <div className="divide-y divide-yellow-500 border-t-2 border-yellow-500">
          {props.value.savings != 0 ? (
            <div className="flex justify-between px-3 py-2 ">
              <div>Totel price:</div>
              <div class="text-right">€{props.value.selling_price}</div>
            </div>
          ) : null}

          {props.value.savings != 0 ? (
            <div className=" text-red-500 flex justify-between px-3 py-2">
              <div class="text-right">Totel Discount:</div>
              <div>(-€{props.value.savings})</div>
            </div>
          ) : null}

          <div className=" flex justify-between px-3 py-2">
            <div class="text-right">Totel:</div>
            <div>€{props.value.offer_price}</div>
          </div>
        </div>
        {props.value.savings != 0 ? (
          <div className=" text-green-500 flex justify-between px-3 py-2">
            <div class="text-right">
              Your will save €{props.value.savings} no this order
            </div>
          </div>
        ) : null}
      </div>
      <div className="text-right">
        <button
          className="bg-red-400 p-1 rounded-md mr-6 text-sm lg:text-xl lg:mr-24"
          onClick={(e) => alert('Your Order is Placde')}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  ) : null;
}
