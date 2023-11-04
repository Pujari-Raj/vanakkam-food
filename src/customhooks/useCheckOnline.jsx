import React, { useState, useEffect }  from 'react'

const useCheckOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
      const turnOnline = () => {
        setIsOnline(true);
      };
      const turnOffline = () => {
        setIsOnline(false);
      };
  
      window.addEventListener("online", turnOnline);
      window.addEventListener("offline", turnOffline);
  
      return () => {
        window.removeEventListener("online", turnOnline);
        window.removeEventListener("offline", turnOffline);
      };
    }, []);
  
    if (!isOnline) {
      document.getElementById("errorcontainer").classList.add("showerror");
    } else {
      if (
        document
          ?.getElementById("errorcontainer")
          ?.classList.contains("showerror")
      ) {
        document.getElementById("errorcontainer").classList.remove("showerror");
      }
    }
  return (
    <div className="errorcontainer" id="errorcontainer">
      <div className="errorpopupcontainer">
        <div className="errorpopupouter">
          <div className="errorpopupinner">
            <div className="errorType"> Connection Error </div>
            <div className="errorPopupDesc">
              Please check your internet connection and try again.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default useCheckOnline