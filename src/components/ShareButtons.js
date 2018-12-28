import React, { PureComponent } from 'react'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';

class ShareButtons extends PureComponent {

    constructor() {
        super();
        this.state = {
            shareUrl: ''
        }
    }

    componentDidMount() {
        this.setState({shareUrl: window.location.href})
    }

    render() {
        const {
            shareUrl
        } = this.state;
        return (
            <div className="share-buttons">
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon round size={32}/>
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon round size={32}/>
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon round size={32}/>
                </TwitterShareButton>
                <EmailShareButton url={shareUrl}>
                    <EmailIcon round size={32}/>
                </EmailShareButton>
                <GooglePlusShareButton url={shareUrl}>
                    <GooglePlusIcon round size={32}/>
                </GooglePlusShareButton>
            </div>
        )
    }
}


export default ShareButtons

