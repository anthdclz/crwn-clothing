import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import CategoryPage from '../collection/collection.component';

// import Directory from '../../components/directory/directory.component';
// import './homepage.styles.scss';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
);

export default ShopPage;