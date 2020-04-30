"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
var LayoutStateContext = react_1.default.createContext({ isSidebarOpened: true });
var LayoutDispatchContext = react_1.default.createContext({});
function layoutReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return Object.assign(Object.assign({}, state), { isSidebarOpened: !state.isSidebarOpened });
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
function LayoutProvider({ children }) {
    var [state, dispatch] = react_1.default.useReducer(layoutReducer, { isSidebarOpened: true, });
    return (react_1.default.createElement(LayoutStateContext.Provider, { value: state },
        react_1.default.createElement(LayoutDispatchContext.Provider, { value: dispatch }, children)));
}
exports.LayoutProvider = LayoutProvider;
function useLayoutState() {
    var context = react_1.default.useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }
    return context;
}
exports.useLayoutState = useLayoutState;
function useLayoutDispatch() {
    var context = react_1.default.useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}
exports.useLayoutDispatch = useLayoutDispatch;
// ###########################################################
function toggleSidebar(dispatch) {
    dispatch({ type: "TOGGLE_SIDEBAR", });
}
exports.toggleSidebar = toggleSidebar;
//# sourceMappingURL=LayoutContext.js.map