import React, { useState } from "react";
import { ImArrowRight } from "react-icons/im";
import "../css/currency.css";
import axios from "axios";
var BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
var API_KEY = "fca_live_7BWcA7VeJeUiujugeUlizbpJoFo6Q0zqO2GxcDq2";
function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState();
  const exchange = async () => {
    const reponse = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (reponse.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };
  return (
    <div className="currency-div">
      <div
        style={{
          textAlign: "center",
          width: "100%",
          fontFamily: "arial",
          backgroundColor: "black",
          color: "#fff",
        }}
      >
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div style={{ marginTop: "25px" }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          value="USD"
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
          id=""
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <ImArrowRight style={{ fontSize: "20px", marginRight: "10px" }} />
        <select
          value="TRY"
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
          id=""
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
