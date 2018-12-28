import React from 'react'
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

const ShareButtons = () => {
    const shareUrl = window.location.href;
    return (
        <div className="share-buttons">
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon round size={32}/>
            </FacebookShareButton>
            <GooglePlusShareButton url={shareUrl}>
                <TwitterIcon round size={32}/>
            </GooglePlusShareButton>
            <LinkedinShareButton url={shareUrl}>
                <GooglePlusIcon round size={32}/>
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl}>
                <LinkedinIcon round size={32}/>
            </TwitterShareButton>
            <EmailShareButton url={shareUrl}>
                <EmailIcon round size={32}/>
            </EmailShareButton>
        </div>
    )
}


export default ShareButtons

