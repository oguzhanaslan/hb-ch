import {
  SORT_LINKS,
  SORT_SELECT_CHANGE,
  VOTE_UP,
  VOTE_DOWN,
  ADD_LINK,
  REMOVE_LINK,
  NEXT_PAGE,
  PREV_PAGE,
  PAGE_CHANGE,
  TOTAL_PAGE,
} from '../constants';

export const sortLinks = () => ({
  type: SORT_LINKS,
});

export const sortSelectChange = (value) => ({
  type: SORT_SELECT_CHANGE,
  payload: value,
});

export const voteUp = (id) => ({
  type: VOTE_UP,
  payload: id,
});

export const voteDown = (id) => ({
  type: VOTE_DOWN,
  payload: id,
});

export const addLink = (link) => ({
  type: ADD_LINK,
  payload: link,
});

export const removeLink = (id) => ({
  type: REMOVE_LINK,
  payload: id,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

export const pageChange = (page) => ({
  type: PAGE_CHANGE,
  payload: page,
});

export const totalPage = (totalPage) => ({
  type: TOTAL_PAGE,
  payload: totalPage,
});
