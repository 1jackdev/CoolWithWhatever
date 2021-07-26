require("dotenv").config();

const GOOGLE_API_KEY = "AIzaSyCJodEIfCcN1lU1UhBPf1XLFJNB8cZyhdc";
const YELP_API_KEY =
  "7D7uelNDe6oOA8T3gVEaWdGQpJqewfH_949yeZR1SP6WhF9MPL94_E5mNtsu-TY5FIxm3MlmzkrmdY44G5P3USHKX_0SNNX4_sQvmsDwaMc6uet60hkxGoczUILvYHYx";
// const YELP_CLIENT_ID = "g6FnYuAfZnw1wQjfJxIuCA";
const YELP_SEARCH_API = "https://api.yelp.com/v3/businesses/search";
const PORT = +process.env.PORT || 3001;
const DIRECTIONS_API = "https://maps.googleapis.com/maps/api/directions/json";

module.exports = { YELP_API_KEY, DIRECTIONS_API, GOOGLE_API_KEY, PORT, YELP_SEARCH_API };
