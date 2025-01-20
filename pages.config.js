import home from "./pages-data/home";
import buy from "./pages-data/buy";
import support from "./pages-data/support";
import supportDetail from "./pages-data/supportDetail";
import drivers from "./pages-data/drivers";
import driversDocuments from "./pages-data/drivers-documents";

const pagesConfig = {
  ...home,
  ...buy,
  ...support,
  ...supportDetail,
  ...drivers,
  ...driversDocuments,
};

export default pagesConfig;
