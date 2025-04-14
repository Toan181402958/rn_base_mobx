import CreateStore from "../store/create"
import UIStore from "../store/ui"
import UserStore from "../store/user"

export type PropsStore = {
    uiStore: UIStore,
    userStore: UserStore,
    createStore: CreateStore
}