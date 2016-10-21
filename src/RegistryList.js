import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';

export default class extends React.Component {

    constructor() {
        super();
        // this.state = store.getState();
        this.state = {
            registryItems: []
        }
    }

    componentWillMount () {
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        let index = 0;
        return (
            <div>
                <h1>My Registry</h1>
                    {
                        this.state.registryItems.map(item =>
                            <RegistryItem key={item.id} itemDetails={item}/>
                        )
                    }

                
            </div>
        );
    }

}