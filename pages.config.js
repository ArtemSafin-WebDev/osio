import home from "./pages-data/home";
import buy from "./pages-data/buy";
import support from "./pages-data/support";
import supportDetail from "./pages-data/supportDetail";
import drivers from "./pages-data/drivers";
import driversDocuments from "./pages-data/drivers-documents";
import contacts from "./pages-data/contacts";

const pagesConfig = {
  ...home,
  ...buy,
  ...support,
  ...supportDetail,
  ...drivers,
  ...driversDocuments,
  ...contacts,
};

export default pagesConfig;
