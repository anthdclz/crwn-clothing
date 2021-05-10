import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CategoryPage = ({ collection }) => (
    <div className='category-page' name={collection.id}>
        <h2>CATEGORY PAGE</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect (mapStateToProps)(CategoryPage);