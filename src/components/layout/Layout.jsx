import React from 'react'
import { ContentContainer, BaseLayoutContainer, ContentSection } from './Layout.styles'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
export default function Layout(props) {
    const { children, ...rest } = props
    return (
        <BaseLayoutContainer>
            <Header />
            <ContentContainer>
                <ContentSection {...rest}>
                    {children}
                </ContentSection>
            </ContentContainer>
            <Footer />
        </BaseLayoutContainer>
    )
}