import React, {useState, useEffect} from 'react';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import NewsList from 'components/NewsList';
import getNews from 'services/getNews';
import './styles.scss';

import { INewsDetail } from 'types/INewsDetail';

const MainPage = () => {
    const [newsList, setNewsList] = useState<INewsDetail[]>([]);
    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])
    return (
        <section>
            <PageTitle
                title={
                    <h2>
                        Всегда<br/>свежие <span>новости</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0,6)}/>}
        </section>
    )
}

export {routeMain};
export default MainPage;