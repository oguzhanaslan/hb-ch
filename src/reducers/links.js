import faker from 'faker';
import { getLinkListData, setLinkListData } from '../utils/localstorage';
import { apiData } from '../utils/api';
import { SORT_LINKS, SORT_SELECT_CHANGE, VOTE_UP, VOTE_DOWN, ADD_LINK, REMOVE_LINK } from '../constants';

if (!localStorage.hasOwnProperty('links')) {
  setLinkListData(apiData);
}

const initialState = {
  links: getLinkListData(),
  orderBy: 'lastAdded',
};

const createLink = (data) => ({
  id: faker.random.uuid(),
  points: 0,
  lastModified: new Date(),
  ...data,
});

const links = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK: {
      const links = createLink(action.payload);
      const items = [ ...state.links, links ];
      setLinkListData(items);
      return { ...state, items };
    }

    case REMOVE_LINK: {
      const links = state.links.filter((item) => item.id !== action.payload);
      setLinkListData(links);
      return { ...state, links };
    }

    case VOTE_UP: {
      const links = state.links.map((item) => {
        const newObj = { ...item };
        if (newObj.id === action.payload) {
          newObj.points++;
          newObj.lastModified = new Date();
          return {
            ...newObj,
          };
        }
        return item;
      });

      setLinkListData(links);
      return { ...state, links };
    }

    case VOTE_DOWN: {
      const links = state.links.map((item) => {
        const newObj = { ...item };
        if (newObj.id === action.payload) {
          newObj.points--;
          newObj.lastModified = new Date();
          return {
            ...newObj,
          };
        }
        return item;
      });

      setLinkListData(links);
      return { ...state, links };
    }

    case SORT_SELECT_CHANGE: {
      return {
        ...state,
        orderBy: action.payload,
      };
    }

    case SORT_LINKS: {
      const newObj = [ ...state.links ];
      newObj.sort((a, b) => {
        if (state.orderBy === 'lastAdded') {
          return new Date(b.lastModified) - new Date(a.lastModified);
        } else if (state.orderBy === 'lessVoted') {
          return a.points !== b.points ? a.points - b.points : new Date(b.lastModified) - new Date(a.lastModified);
        } else {
          return a.points !== b.points ? b.points - a.points : new Date(b.lastModified) - new Date(a.lastModified);
        }
      });

      if (state.orderBy === 'lessVoted' || state.orderBy === 'mostVoted') {
        newObj.sort((a, b) => {
          if (a.points === b.points) {
            return b.modifiedDate - a.modifiedDate;
          }
          return newObj;
        });
      }

      return {
        ...state,
        links: newObj,
      };
    }

    default: {
      return state;
    }
  }
};

export default links;
