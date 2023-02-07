import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import ClipBoard from 'clipboard';
import EmojiResultRow from './EmojiResultRow';



export default class EnojiResults extends PureComponent {
    static propTypes = {
        emojiData: PropTypes.array
    };

    componentDidMount() {
        this.clipboard = new ClipBoard('.copy-to-clipboard');

        this.clipboard.on('Exitoso', e => {
            e.clearSelection();
            console.log('Exitoso', e);
        });

        this.clipboard.on('error', e => {
            console.log('Error', e);
        });
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        return (
            <div className="component-emoji-results">
                {this.props.emojiData.map(emojiData => (
                    <EmojiResultRow
                        key={emojiData.title}
                        symbol={emojiData.symbol}
                        title={emojiData.title}
                    />
                ))}
            </div>
        );
    }

}
