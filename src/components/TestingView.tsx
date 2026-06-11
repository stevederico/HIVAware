import Header from '@stevederico/skateboard-ui/Header';
import { useEffect, useState, useRef } from "react";
import { getBackendURL, getCookie, timestampToString, isSubscriber } from '@stevederico/skateboard-ui/Utilities';
import Sheet from '@stevederico/skateboard-ui/Sheet';

/**
 * Testing sites view embedding the CDC "Get Tested" locator.
 *
 * @component
 * @returns Full-height iframe of nearby testing sites
 */
export default function TestingView() {
  return (
    <>
      <div>
        <Header title={"Testing Sites"}></Header>

        <div className="w-full">
          <iframe title="CDC testing site locator" className="w-full h-screen" src="https://gettested.cdc.gov/search_results?location=94105"></iframe>
        </div>
      </div>
    </>
  );
}
