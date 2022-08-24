// eslint-disable-next-line no-shadow
enum ACTIONS {
  'SET_DRAWER_VISIBILITY' = 'SET_DRAWER_VISIBILITY',
  'SET_LINK_LANG_TEXT' = 'SET_LINK_LANG_TEXT',
}

type TActions = {
  type: keyof typeof ACTIONS;
  payload: void | boolean | 'en' | 'es';
};

type TState = {
  isDrawerVisible: boolean,
  langLinkText: 'en' | 'es',
}

export const initialState:TState = {
  isDrawerVisible: false,
  langLinkText: 'es'
}

const navbarReducer = (state: TState, action: TActions):TState => {
  switch (action.type) {
    case ACTIONS.SET_DRAWER_VISIBILITY:
      return {
        ...state,
        isDrawerVisible: action.payload as boolean || false,
      }

    case ACTIONS.SET_LINK_LANG_TEXT:
      return {
        ...state,
        langLinkText: action.payload as 'en' | 'es' || 'es',
      }

    default:
      return state
  }
}

export default navbarReducer
