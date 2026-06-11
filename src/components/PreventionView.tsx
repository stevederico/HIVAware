import Header from '@stevederico/skateboard-ui/Header';
import { useEffect, useState, useRef } from "react";
import { getBackendURL, getCookie, timestampToString, isSubscriber } from '@stevederico/skateboard-ui/Utilities';
import Sheet from '@stevederico/skateboard-ui/Sheet';
import type { SheetHandle } from '@stevederico/skateboard-ui/Sheet';
import stds from '../assets/stds.json'

/** A sexually transmitted disease entry shown in the prevention list. */
interface StdItem {
  /** Display title */
  title: string;
  /** Plain-language description */
  description: string;
  /** Common symptoms */
  symptoms: string;
  /** How the condition is tested for and treated */
  testing: string;
}

/**
 * Prevention view listing STD info cards with a detail bottom sheet.
 *
 * @component
 * @returns Prevention list with detail sheet
 */
export default function PreventionView() {

  const [objects, setObjects] = useState<StdItem[]>([])
  const [currentItem, setCurrentItem] = useState<Partial<StdItem>>({})
  const mySheet = useRef<SheetHandle>(null)

  useEffect(() => {
      getStarted()
  }, [])

  const getStarted = () => {
    setObjects(stds)
  }

  function itemClicked(item: StdItem) {
    setCurrentItem(item)
    return mySheet.current?.show()
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
