import { PureComponent } from "react";

export default class Header extends PureComponent {
    render() {
        return (
        <header className="app-header">
             <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/emoji-one_1f1f5-1f1f1.png"
                alt="emoji"
                className="app-logo"
                width='32'
                height='32'
             />

               <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/emoji-one_1f1f5-1f1f1.png"
                alt="emoji"
                className="app-logo"
                width='32'
                height='32'
             />
           
        </header>
           
        );
    }
    }

