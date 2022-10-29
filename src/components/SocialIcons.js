import React from 'react';
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa"
import {SocialIconsStyled} from "./styled/SocialIcons.styled";

const SocialIcons = (props) => {

    return (
        <SocialIconsStyled>
            <li>
                <a href="https:/twitter.com">
                    <FaTwitter/>
                </a>
            </li>
            <li>
                <a href="https:/facebook.com">
                    <FaFacebook/>
                </a>
            </li>
            <li>
                <a href="https:/linkedin.com">
                    <FaLinkedin/>
                </a>
            </li>
        </SocialIconsStyled>
    )
}

export default SocialIcons;