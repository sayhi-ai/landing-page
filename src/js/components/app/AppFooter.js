import React from "react"
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from "react-mdl"
import { Link } from 'react-router'

import "../../../css/footer.css"

export default class AppFooter extends React.Component {
    render() {
        return (
            <Footer size="mega" style={{backgroundColor: "#1B2126"}}>
                <FooterSection type="middle">
                    <FooterDropDownSection title="Product">
                        <FooterLinkList className="f-footer-element">
                            <Link to="pricing">Pricing</Link>
                            <Link to="terms">Terms</Link>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Company">
                        <FooterLinkList className="f-footer-element">
                            <Link to="team">Team</Link>
                            <Link to="imprint">Imprint</Link>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Social">
                        <FooterLinkList className="f-footer-element">
                            <Link to="twitter">Twitter</Link>
                            <Link to="facebook">Facebook</Link>
                        </FooterLinkList>
                    </FooterDropDownSection>
                </FooterSection>
            </Footer>
        )
    }
}