// eslint-disable-next-line no-shadow
enum ACTIONS {
  'SET_DRAWER_VISIBILITY' = 'SET_DRAWER_VISIBILITY',
  'SET_LINK_LANG_TEXT' = 'SET_LINK_LANG_TEXT',
}

type TLanguage = 'en' | 'es';

type TActions = {
  type: keyof typeof ACTIONS;
  payload: boolean | TLanguage;
};

type TState = {
  isDrawerVisible: boolean;
  langLinkText: TLanguage;
};

export const initialState: TState = {
  isDrawerVisible: false,
  langLinkText: (localStorage.getItem('lang') as TLanguage) || 'es',
}

const navbarReducer = (state: TState, action: TActions): TState => {
  switch (action.type) {
    case ACTIONS.SET_DRAWER_VISIBILITY:
      return {
        ...state,
        isDrawerVisible: action.payload as boolean,
      }

    case ACTIONS.SET_LINK_LANG_TEXT:
      return {
        ...state,
        langLinkText: action.payload as TLanguage,
      }

    default:
      return state
  }
}

export default navbarReducer
