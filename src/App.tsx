import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Players from "./components/Players/Players";
import type { IplayerType } from "./components/PlayersType";

const PlayerDataPromise = async (): Promise<IplayerType> => {
  const res = await fetch('player.json')
  const data = await res.json();
  return data;
}
function App() {
  const [total, setTotal] = useState(5000);

  return (
    <>
      <Header total={total}></Header>
      <Banner></Banner>
      <Suspense fallback={<p>Loading....</p>}>
        <Players
          total={total}
          setTotal={setTotal}
          PlayerDataPromise={PlayerDataPromise()


          }></Players>
      </Suspense>
    </>
  )
}

export default App
