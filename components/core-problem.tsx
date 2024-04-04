import React from 'react';

const CoreProblem = () => {
    return (
        <div className="mx-auto w-96 px-10 mt-10 md:mt-2 py-12 rounded-lg bg-white my-4 shadow-md shadow-black">
        <h3 className="my-2 mb-6 text-3xl font-semibold text-white">
          <span className="text-red-400 font-bold">How many expenses</span> are involved in Real Estate Investing?
        </h3>
        <div className="">
          <ul className="list-inside  font-semibold">
            <li className="my-1 text-xl text-red-400">Property Taxes</li>
            <li className="my-1 text-xl text-red-400">
              Property Management
            </li>
            <li className="my-1 text-xl text-red-400">Property Insurance</li>
            <li className="my-1 text-xl text-red-400">Legal Fees</li>
            <li className="my-1 text-xl text-red-400">Maintenance</li>
            <li className="my-1 text-xl text-red-400">Comissions</li>
          </ul>
        </div>

        <h3 className="mt-10 text-2xl font-bold mx-auto text-center text-emerald-500 tracking-wider">
          ... this is where we help.
        </h3>
      </div>
    );
};

export default CoreProblem;