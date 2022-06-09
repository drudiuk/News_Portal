import React, {useState, useEffect} from 'react';
import PageTitle from 'components/PageTitle';
import routeMain from './routes';
import NewsList from 'components/NewsList';
import getNews from 'services/getNews';
import { INewsDetail } from 'types/INewsDetail';
import './styles.scss';

const NewsListPage = () => {

    const [newsList, setNewsList] = useState<INewsDetail[]>([]);
    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])

    return (
        <section className='NewsListPage'>
            <PageTitle
                title={
                    <h2>
                        Быть<br/>в курсе <span>событий</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList}/>}
        </section>
    )
}

export {routeMain};
export default NewsListPage;