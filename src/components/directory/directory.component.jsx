import React, { Component } from 'react'
import './directory.styles.scss'
import { MenuItem } from '../menu-item-component/menu-item.component'

class Directory extends Component {
    constructor () {
        super()
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  size: 'med',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  size: 'med',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  size: 'med',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }
    }

    render () {
        return (
            <div className='directory'>
                {this.state.sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} /> )}
            </div>
        )
    }
} 

export default Directory