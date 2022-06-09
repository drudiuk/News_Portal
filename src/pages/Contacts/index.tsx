import React from 'react';
import routeMain from './routes';
import MyPhoto from 'assets/img/my-photo.jpg';
import './styles.scss';

const Contacts = () => {
    return (
        <section className='contacts-wrapper'>
            <div className='contacts-info'>
                <a className='phone' href='tel:+79991234576'>+7 (999) 123 45 76</a>
                <p className='name'>Дмитрий<br/>Рудюк</p>
                <a className='mail' href='mailto:drudyuk@mail.ru'>mail@domain.com</a>
                <p className='profi'>Front-end developer</p>
                <p>HTML CSS JavaScript <span>React</span></p>
            </div>
            <div className='wrapper-img'>
                <img src={MyPhoto}/>
            </div>
        </section>
    )
}

export {routeMain};
export default Contacts;