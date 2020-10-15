import React from 'react'
import { withRouter } from 'react-router-dom'

import { SHOP_DATA } from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shop.styles.scss'

class ShopPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    renderPreview () {
        return this.state.collections.map(({id, ...data}) => <CollectionPreview key={id} {...data} />)
    }

    render () {
        return (
            <div className='shop'>
                <h1>Shop Page</h1>
                {this.renderPreview()}
            </div>
        )
    }
}

export default withRouter(ShopPage)