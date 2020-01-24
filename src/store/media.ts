import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

declare var API_URL: string;

// symbols for state data structures
interface Media {
  name: string,
  url: string,
  timestamp: string;
}

interface MediaState {
  data: Media[];
}

// Constant types for reducers
const FETCH_MEDIA = "FETCH_MEDIA";
const UPLOAD_MEDIA = "UPLOAD_MEDIA";

interface fetchMediaAction {
  type: typeof FETCH_MEDIA;
  payload: Media[];
}

interface uploadMediaAction {
  type: typeof UPLOAD_MEDIA;
  payload: Media;
}

export type MediaActionTypes = fetchMediaAction | uploadMediaAction;

// actions creators that use Action Types
export function updateMedia(mediaList: Array<Media>): MediaActionTypes {
  return {
    type: FETCH_MEDIA,
    payload: mediaList,
  }
}
export function addMedia(media: Media): MediaActionTypes {
  return {
    type: UPLOAD_MEDIA,
    payload: media
  }
}

type MediaObject = {
  name: string,
  url: string,
  created: string,
}

// Async actions using thunks
export const fetchMedia = (): ThunkAction<void, MediaState, null, Action<string>> =>
  async (dispatch: ThunkDispatch<MediaState, null, Action<string>>) => {
    const response = await fetch(`${API_URL}/list`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    const result = data.map((item: MediaObject) => ({
      name: item.name,
      url: item.url,
      timestamp: item.created
    }));
    dispatch(updateMedia(result));
  };

export const uploadMedia = (media: Media): ThunkAction<void, MediaState, null, Action<string>> =>
  async (dispatch: ThunkDispatch<MediaState, null, Action<string>>) => {
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(media),
    });
    const data = await response.json();
    dispatch(addMedia(data));
}

// Reducer logic for media storage, defines initial state and default reducer logic.
const initialState: MediaState = {
 data: [],
}

export default function MediaReducer(state: MediaState = initialState, action: MediaActionTypes): MediaState {
  switch(action.type) {
    case FETCH_MEDIA:
      return {
        data: action.payload
      }
    case UPLOAD_MEDIA:
      return {
        data: [...state.data, action.payload]
      }
    default:
      return state;
  }
}

