import {
  GET_ALL_POSTS_SUCCESS,
  GET_POST_BY_ID_SUCCESS,
  ADICIONA_POST_SUCCESS,
  EDIT_POST_BY_ID_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS
} from '../constantes/Post'

const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS: {
      const { posts } = action;
      return [...posts];
    }
    case GET_POST_BY_ID_SUCCESS:
      {
        return { ...action.post };
      }
    case ADICIONA_POST_SUCCESS: {
      return state.concat(action.post)
    }
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
      {
        try {
          const newState = state.map(post => {
            if (post.id === action.post.id) {
              return action.post;
            }
            return post;
          });
          return [...newState];
        } catch (e) {
          return { ...action.post };
        }
      }
    case EDIT_POST_BY_ID_SUCCESS: {
      return { ...state };
    }
    case DELETE_POST_SUCCESS: {
      const newState = state.filter(post => {
        return post.id !== action.post.id // return all the posts not matching the action.post.id
      })
      return [...newState]
    }
    default:
      return state;
  }
}

export default posts
