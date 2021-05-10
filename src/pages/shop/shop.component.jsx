import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

// import Directory from '../../components/directory/directory.component';
// import './homepage.styles.scss';

const ShopPage = ({collections}) => (
    <div className='shop-page'>
            <CollectionOverview />
    </div>
);

export default ShopPage;