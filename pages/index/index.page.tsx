import React from "react";
import Nav from "/src/common/components/Nav";
import Footer from "/src/common/components/Footer";

import { useEffect, useState } from "react";


export { Page };

function Page() {

  const [pending, setPending] = useState(false);
  let [count, setCount] = useState(0);

  let centerItem;
  if (pending) {
    // loading spinner defined using tailwindcss:
    centerItem =
      <div role="status">
        <svg aria-hidden="true" className="w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>;
  } else {
    centerItem =
      <button onClick={() => {
        setPending(true);

        let top = 500;
        let bottom = 200;
        let randomMs = Math.round(Math.random() * (top - bottom) + bottom);
        setTimeout(() => {
          setPending(false);
          setCount(count + 1);
        }, randomMs);
      }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-large w-38 h-38 rounded-3xl">
        GO
      </button>;
  }


  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white min-h-screen overflow-y-auto">

      <div className="h-6"></div>
      <Nav />

      <div className="flex flex-col items-center py-2 h-300 space-y-10">

        {/* How fast is nano? */}
        <div className="flex flex-col items-center justify-center py-2 text-center">
          <div className="text-6xl font-bold">
            Just how <i>fast</i> is a nano transaction?
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-2">
          {centerItem}
        </div>

        {
          (count > 0 && !pending) && <div className="flex flex-col items-center justify-center py-2">
            <div className="text-6xl font-bold">
              That fast!
            </div>
            {/* <div className="text-2xl font-bold">
              in addition:
            </div>
            <ul className="list-disc list-inside bg-green-500 px-3 py-3 rounded-lg">
              <li>It's green!</li>
              <li>0 fees!</li>
              <li>It's secure!</li>
            </ul> */}
            {/* <div className="bg-green-500 p-4 mt-8">
              <h2 className="text-2xl font-medium">In addition:</h2>
              <ul className="list-none">
                <li className="text-lg mb-2">No Fees. Ever.</li>
                <li className="text-base mb-2 ml-4">Send $.01 or $1,000,000 worldwide without paying a cent in transaction fees. Keep every cent you earn.</li>
                <li className="text-lg mb-2">It's green</li>
                <li className="text-base mb-2 ml-4">There is no "mining". One transaction takes only ~0.001kWh. That's the equivalent of 1/13,000 the energy it takes to toast a slice of bread. Other currencies consume thousands of times more energy.</li>
                <li className="text-lg mb-2">It'll get even better</li>
                <li className="text-base mb-2 ml-4">The protocol is incredibly lightweight and scales with hardware, it only gets faster with time.</li>
                <li className="text-lg mb-2">It's final.</li>
                <li className="text-base mb-2  ml-4">Payments are finalized in seconds with no rollbacks, giving you financial confidence.</li>
              </ul>
            </div> */}
          </div>
        }

        {(pending) && <div className="h-25"></div>}

        {(count > 0) &&
          <div className="bg-green-500 p-4 mt-8">
            <h2 className="text-4xl font-medium mb-4">In addition:</h2>
            <ul className="list-none space-y-3">
              <li className="text-lg font-medium">No Fees. Ever.</li>
              <li className="ml-6">Send $0.01 or $1,000,000 worldwide without paying a cent in transaction fees. Keep every cent you earn.</li>
              <li className="text-lg font-medium">It's green</li>
              <li className="ml-6">There is no "mining". One transaction takes only ~0.001kWh. That's the equivalent of 1/13,000 the energy it takes to toast a slice of bread. Other currencies consume thousands of times more energy.</li>
              <li className="text-lg font-medium">It'll get even better</li>
              <li className="ml-6">The protocol is incredibly lightweight and scales with hardware, it only gets faster with time.</li>
              <li className="text-lg font-medium">It's final.</li>
              <li className="ml-6">Payments are finalized in seconds with no rollbacks, giving you financial confidence.</li>
            </ul>
          </div>
        }

      </div>

      <Footer />
    </div>
  );
}
