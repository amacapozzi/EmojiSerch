import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends PureComponent {
    
    static propTypes = {
        textChange: PropTypes.func.isRequired
    };

    handleChange = event => {
        this.props.textChange(event.target.value);
    };
    

    render() {
        return (
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={this.props.textChange}
                />
            </div>
        );
    }
}