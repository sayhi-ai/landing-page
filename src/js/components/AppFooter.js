import React from "react"
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from "react-mdl"


import "../../css/footer.css"

export default class AppFooter extends React.Component {
    render() {
        return (
            <Footer size="mega" style={{backgroundColor: "#1B2126"}}>
                <FooterSection type="middle">
                    <FooterDropDownSection title="Product">
                        <FooterLinkList className="f-footer-element">
                            <a href="#">Pricing</a>
                            <a href="#">Terms</a>
                            <a href="#">Documentation</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Company">
                        <FooterLinkList className="f-footer-element">
                            <a href="#">About</a>
                            <a href="#">Imprint</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Social">
                        <FooterLinkList className="f-footer-element">
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                </FooterSection>
            </Footer>
        )
    }
}