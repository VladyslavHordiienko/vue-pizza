import { createStore } from 'vuex'
import {catalogModule} from "@/store/catalogModule";
import {cartModule} from "@/store/cartModule";

export default createStore({
  modules: {
      catalog: catalogModule,
      cart: cartModule
  }
})
