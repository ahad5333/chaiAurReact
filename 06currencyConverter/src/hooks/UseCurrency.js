import { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [currency]);

    return data.rates || {}; // Return rates object
}

export default UseCurrencyInfo;
