import { Suspense } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Players from "./components/Players/Players";
import type { IplayerType } from "./components/PlayersType";

const PlayerDataPromise = async (): Promise<IplayerType> => {
  const res = await fetch('player.json')
  const data = await res.json()
  return data;
}
function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Suspense fallback={<p>Loading....</p>}>
        <Players PlayerDataPromise={PlayerDataPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
