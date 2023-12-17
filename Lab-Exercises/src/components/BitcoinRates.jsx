import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";


const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

// export default function BitcoinRates() {
//   const [currency, setCurrency] = useState(currencies[0]);
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
//    .then((response) => response.json())
//    .then((result) =>  {
//     console.log("This is the reuslt of the apii", result)
//     setPrice(result.bitcoin[currency.toLowerCase()])
//    })
//   }, [currency])

//   const options = currencies.map((curr) => (
//     <option value={curr} key={curr}>
//       {curr}
//     </option>
//   ));

//   return (
//     <div className="BitcoinRates componentBox">
//       <h3>Bitcoin Exchange Rate</h3>
//       <label>
//         Choose currency:
//         <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//           {options}
//         </select>
//       </label>
//       <p>Bitcoin's price:  {price} {currency} </p>
//     </div>
//   );
// }



export default function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // const [price, setPrice] = useState(0);
  
    // uses custom hook to handle the effect for loading external data
const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);

    // console.log('Before change: ' + data)
    // console.log('Selected Currency: ' + currency)
 
    // console.log('This is the cal: ' + data['currLowerCase'])
     //console.log('This is the data: ' + JSON.stringify(data[currency.toLowerCase()]))

     const val = data ? data[currency.toLowerCase()] : 'not found';
    console.log(val)

    const options = currencies.map((curr) => (
      <option value={curr} key={curr}>
        {curr}
      </option>
    ));
  
    return (
      <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label>
          Choose currency:
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {options}
          </select>
        </label>
        <p>Bitcoin's price:  {val} {currency} </p>
      </div>
    );
  }
  