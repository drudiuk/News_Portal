import { INewsDetail } from "./INewsDetail";
export interface INews {
    page: number;
    page_size: number;
    status: string;
    total_hits: number;
    total_pages: number;
    articles: INewsDetail[];
}

/*
"page":1
"page_size":25
"status":"ok"
"total_hits":332
"total_pages":14
*/