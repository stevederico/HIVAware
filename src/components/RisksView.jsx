import Header from '@stevederico/skateboard-ui/Header';
import { useEffect, useState, useRef } from "react";
import { getBackendURL, getCookie, timestampToString, isSubscriber } from '@stevederico/skateboard-ui/Utilities';
import Sheet from '@stevederico/skateboard-ui/Sheet';


export default function RisksView() {

  const [activity, setActivity] = useState("-1");
  const [condom, setCondom] = useState(false);
  const [hiv, setHiv] = useState(false);
  const [message, setMessage] = useState('');

  const mySheet = useRef()

  function showAlert(level) {
    if (level == "high") {
      setMessage(`High Risk \n\nHIV can be easily transmitted through this activity. \n\nHIV and STD testing is recomended as soon as possible.  \n\nYou can protect yourself from HIV and STD by using a barrier or condom when having sex or practicing abstinence. You should know you and your partner's HIV and STD status. Regular HIV & STD testing is important.`)

    } else if (level == "moderate") {
      setMessage(`Moderate Risk \n\nHIV can be transmitted through this activity. \n\nHIV and STD testing is recomended.  \n\nYou can protect yourself from HIV and STD by using a barrier or condom when having sex or practicing abstinence. You should know you and your partner's HIV and STD status. Regular HIV & STD testing is important.`)

    } else if (level == "low") {
      setMessage(`Low Risk \n\nHIV can be, but is typically not transmitted through this activity. \n\nHIV and STD testing is recomended.  \n\nYou can protect yourself from HIV and STD by using a barrier or condom when having sex or practicing abstinence. You should know you and your partner's HIV and STD status. Regular HIV & STD testing is important.`)

    } else if (level == "none") {
      setMessage(`Zero Risk \n\nHIV cannot be transmitted through this activity. \n\nNo HIV testing is necessary. \n\nYou can protect yourself from HIV and STD by using a barrier or condom when having sex or practicing abstinence. You should know you and your partner's HIV and STD status. Regular HIV & STD testing is important.`)
    }

    mySheet.current.show()
  }

  function submitClicked() {

    if (activity == 0) {
      if (condom && hiv) {
        showAlert("none") //Herpes
      } else if (condom) {
        showAlert("none") //Herpes
      } else if (hiv) {
        showAlert("none") //Herpes
      } else {
        showAlert("none") //Herpes
      }
    } else if (activity == 1) {

      if (condom && hiv) {
        showAlert("none") //Herpes, HPV, Syphilis
      } else if (condom) {
        showAlert("none") //Herpes, HPV, Syphilis
      } else if (hiv) {
        showAlert("none") //Herpes, HPV, Syphilis
      } else {
        showAlert("none") //Herpes, HPV, Syphilis
      }

    } else if (activity == 2) { //Hand Job / Masturbation

      if (condom && hiv) {
        showAlert("none") //Herpes, HPV, Syphilis
      } else if (condom) {
        showAlert("none") //Herpes, HPV, Syphilis
      } else if (hiv) {
        showAlert("none") //Herpes, HPV, Syphilis
      } else {
        showAlert("none") //Herpes, HPV, Syphilis
      }

    } else if (activity == 3) { //Oral Sex

      if (condom && hiv) {
        showAlert("low")
      } else if (condom) {
        showAlert("low")
      } else if (hiv) {
        showAlert("low")
      } else {
        showAlert("low")
      }

    } else if (activity == 4) { //Vaginal

      if (condom && hiv) {
        showAlert("moderate") //Herpes, Hepatitis, Chlamydia, Gonorrhea, HPV, Syphilis, Trich
      } else if (condom) {
        showAlert("low")
      } else if (hiv) {
        showAlert("high") //Herpes, Hepatitis, Chlamydia, Gonorrhea, HPV, Syphilis, Trich
      } else {
        showAlert("low")
      }


    } else if (activity == 5) { //Anal

      if (condom && hiv) {
        showAlert("moderate") //Herpes, Hepatitis, Chlamydia, Gonorrhea, HPV, Syphilis, Trich
      } else if (condom) {
        showAlert("low") //Herpes, Hepatitis, Chlamydia, Gonorrhea, HPV, Syphilis, Trich
      } else if (hiv) {
        showAlert("high") //Herpes, Hepatitis, Chlamydia, Gonorrhea, HPV, Syphilis, Trich
      } else {
        showAlert("low") //Herpes, Hepatitis, Chlamydia, Gonorrhea, HPV, Syphilis, Trich
      }

    } else if (activity == 6) { //needles

      if (condom && hiv) {
        showAlert("high")
      } else if (condom) {
        showAlert("high")
      } else if (hiv) {
        showAlert("high")
      } else {
        showAlert("high")
      }
    }

  }

  return (
    <>
      <div>
        <Header title={"Risk Calculator"}></Header>

        <div className="mx-auto">
          <div className="py-3 my-5 bg-background border rounded p-5 m-3">
            <div className="mb-3">
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="border border-2 rounded p-3 mt-3 mr-3 w-full "
              >
                <option >Select a sexual activity</option>
                <option value="0">Kissing</option>
                <option value="1">Naked Body Contact / Rubbing</option>
                <option value="2">Hand Job / Masturbation</option>
                <option value="3">Oral Sex</option>
                <option value="4">Vaginal Sex</option>
                <option value="5">Anal Sex</option>
                <option value="6">Needle Sharing</option>
              </select>
            </div>
            <div className="flex">
              <div className="mb-3">
                <label htmlFor="switchCondom" className="text-sm ">Condom</label>
                <input value={condom}
                  onChange={(e) =>{ setCondom(e.target.checked)}} className="mx-3" type="checkbox" id="switchCondom" />
              </div>
              <div className="mb-5">
                <label htmlFor="switchHIV" className="text-sm ">Partner is HIV Positive</label>
                <input value={hiv}
                  onChange={(e) => setHiv(e.target.checked)} className="ml-3" type="checkbox" id="switchHIV" />
              </div>
            </div>
            <div className="flex">
              <button onClick={() => submitClicked()} className="rounded flex-grow p-3 font-semibold bg-app text-white  dark:text-white">Calculate Risk</button>
            </div>

          </div>
        </div>

        <Sheet ref={mySheet} >
          <div className="px-4 mx-0">
            <div className="text-xl "> {message}</div>
          </div>
        </Sheet>
      </div >
    </>
  );
}
