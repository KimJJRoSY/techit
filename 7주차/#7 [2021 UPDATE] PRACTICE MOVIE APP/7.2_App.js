import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // useEffect(first, second) ==second가 빈 배열[]이면, 이 코드는 한 번만 작동됨
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      // then 을 사용해서 response에 있는 json를 return 해줌=> 그리고 나서 그 json을 setcoin에 부여
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        // loading값 false로 바뀌면서 {}안에 있는 조건문 해당 안되게 됨
      });
  }, []);
  return (
    <div>
      {/* coin.length를 사용하기 때문에 초기에 coins 설정할때 아무것도 설정 안하면 에러남. */}
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {/* loading 이면 Loading... 메세지 보여줌 아니면 loading 끝나면 select창 보여줌*/}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {/* map은 map(value, index)인데 아래의 코드에서 인덱스가 필요없는 이유는 coin에 id가 있어서 그걸 key로 사용하면 되기 때문*/}
          {coins.map((coin) => {
            <option>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.pricc} USD
            </option>;
          })}
        </select>
      )}
    </div>
  );
}

export default App;
