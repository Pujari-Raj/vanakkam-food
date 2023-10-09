let PROXY_URL = "https://corsproxy.io/?";

export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const FETCH_ADDRESS_URL = `${PROXY_URL}https://www.swiggy.com/dapi/misc/address-recommend?place_id=`;
export const REST_MENU_URL = `${PROXY_URL}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true`;
export const ADDRESS_SUGG_URL = `${PROXY_URL}https://www.swiggy.com/dapi/misc/place-autocomplete?input=`;
export const SEARCH_REST_URL = `${PROXY_URL}https://www.swiggy.com/dapi/restaurants/search/suggest?`;
export const FETCH_HOME_DATA_URL = `${PROXY_URL}https://www.swiggy.com/dapi/restaurants/list/v5?`;
export const FETCH_MORE_DATA_URL = `${PROXY_URL}https://www.swiggy.com/dapi/restaurants/list/update`;
