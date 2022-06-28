import { Dispatch } from "redux";
import { AnyAction } from "redux";
import getNews from "services/getNews"

import { IStore } from "./types";

export const setNewsAction = (list: IStore['list']) => {
    return {
        type: 'news/setNews',
        payload: list,
    }
}

export const loadNews:any = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await getNews();

        dispatch(setNewsAction(response.data.articles))
    } catch(e) {
        console.log(e, 'get error')
    }
}