import * as authSagas from "./auth/sagas";
import * as galleriesSagas from "./galleries/sagas";

const sagas = {
  ...authSagas,
  ...galleriesSagas,
};

export default sagas;