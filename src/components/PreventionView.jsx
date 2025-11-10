import Header from '@stevederico/skateboard-ui/Header';
import { useEffect, useState, useRef } from "react";
import { getBackendURL, getCookie, timestampToString, isSubscriber } from '@stevederico/skateboard-ui/Utilities';
import Sheet from '@stevederico/skateboard-ui/Sheet';
import stds from '../assets/stds.json'
export default function PreventionView(props) {

  const [objects, setObjects] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  const mySheet = useRef()

  useEffect(() => {
      getStarted()
  }, [])

  const getStarted = () => {
    setObjects(stds)
  }

  function itemClicked(item) {
    setCurrentItem(item)
    return mySheet.current.show()
  }

  return (
    <>
      <div className="h-screen  flex-grow lg:overflow-y-auto bg-background ">
        <Header title={"Prevention"}></Header>
        <span className="overflow-y-auto">
          {objects.map((object, index) => (
            <div
              onClick={() => { itemClicked(object) }}
              className="p-4 shadow rounded border bg-accent m-3 "
              key={index}
            >
              <div className="text-xl font-semibold">{object.title}</div>
            </div>
          ))}
        </span>

        <Sheet ref={mySheet} >
          <div className="m-4 ">
            <div className="text-3xl font-semibold">{ currentItem.title }</div>
            <div>
              <div className="my-2 text-xl font-semibold">Description</div>
              <p>{ currentItem.description }</p>
              <div className="my-2 text-xl font-semibold">Symptoms</div>
              <p>{ currentItem.symptoms }</p>
              <div className="my-2 text-xl font-semibold">Testing</div>
              <p>{ currentItem.testing }</p>
            </div>
          </div>
        </Sheet>
      </div>
    </>
  );
}
