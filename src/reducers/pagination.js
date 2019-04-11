import { NEXT_PAGE, PREV_PAGE, PAGE_CHANGE, TOTAL_PAGE } from '../constants';

const initialState = {
  activePage: 1,
  totalPage: 1,
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_PAGE:
      return {
        ...state,
        totalPage: action.payload,
      };
    case PREV_PAGE:
      return {
        ...state,
        activePage: state.activePage !== 1 ? state.activePage - 1 : state.activePage,
      };
    case NEXT_PAGE:
      return {
        ...state,
        activePage: state.activePage !== state.totalPage ? state.activePage + 1 : state.totalPage,
      };
    case PAGE_CHANGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      break;
  }

  return state;
};

export default pagination;
