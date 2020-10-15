import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component.jsx'
import './collection-preview.styles.scss'

const renderItems = (items) => {
    return items.slice(0, 4).map(({id, ...data}) => <CollectionItem key={id} {...data} />)
}

const CollectionPreview = ({title, routeName, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {renderItems(items)}
            </div>
    </div>
)

export default withRouter(CollectionPreview)