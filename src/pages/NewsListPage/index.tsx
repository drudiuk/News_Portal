import React, {useState, useEffect} from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from 'store/news/actions';
import { selectList } from 'store/news/selectors';

import PageTitle from 'components/PageTitle';
import routeMain from './routes';
import NewsList from 'components/NewsList';
import './styles.scss';

const NewsListPage = () => {

    const dispatch = useDispatch();
    const newsList = useSelector(selectList);

    useEffect(() => {
       dispatch(loadNews());
    },[dispatch])

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