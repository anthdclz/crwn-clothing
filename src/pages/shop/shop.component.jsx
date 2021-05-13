import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../collection/collection.component';

// import Directory from '../../components/directory/directory.component';
// import './homepage.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    }

    unsubscribeFromSnapshott = null;

    componentDidMount() {
        const { updateCollections}  = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshott = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        });
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> }
                />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props} /> }
                />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);