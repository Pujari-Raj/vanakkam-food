const env = import.meta.env.VITE_CORS_PROXY

let PROXY_URL = env+"/api/proxy/swiggy/dapi/";

export const LOGIN_ICON_URL =
  "https://foodsimp.netlify.app/loginDrawerIcon.fe3b839f.png";

export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const CAROUSEL_BANNER_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

export const UNAVAIL_LOC_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png";

export const CATEGORY_ITEMS_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const DATA_CARD_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FOOTER_LOGO_URL =
  "https://foodsimp.netlify.app/logoFooter.b9007afe.png";

export const DEF_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const VEG_ICON_URL =
  "https://foodsimp.netlify.app/vegFoodIcon.47b449ec.png";

export const NONVEG_ICON_URL =
  "https://foodsimp.netlify.app/nonVegFoodIcon.7b3936e7.png";

export const SM_OFFER_ICON_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";

export const TOP_PICKS_ITEM_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/";
  
export const DP_URL = "https://foodsimp.netlify.app/dp.87514181.jpg";

export const SEARCH_SHIMMER_SET = [
  "rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65",
  "rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966",
  "rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f",
  "rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27",
  "rng/md/carousel/production/e76b511935016406e6ebc11dd7593387",
  "rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7",
  "rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f",
  "rng/md/carousel/production/31f03222ea978aef3b10d386729eb076",
  "rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce",
  "rng/md/carousel/production/0b5ffa32a04d99c1f212d2aacefd5f6f",
];

export const FETCH_ADDRESS_URL = `${PROXY_URL}misc/address-recommend?place_id=`;

export const REST_MENU_URL = `${PROXY_URL}menu/pl?page-type=REGULAR_MENU&complete-menu=true`;

export const ADDRESS_SUGG_URL = `${PROXY_URL}misc/place-autocomplete?input=`;

export const SEARCH_REST_URL = `${PROXY_URL}restaurants/search/suggest?`;

export const FETCH_HOME_DATA_URL = `${PROXY_URL}restaurants/list/v5?`;

export const FETCH_MORE_DATA_URL = `${PROXY_URL}restaurants/list/update`;
