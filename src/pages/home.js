import React from 'react';
import { OptForm, Feature} from '../components';
import { FaqContaniner } from '../containers/faq';
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron'

export default function Home() {
  return <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Enjoy unlimited</Feature.Title>
        <Feature.Title>entertainment.</Feature.Title>
        <Feature.Title>Or your money back</Feature.Title>
        <Feature.SubTitle>You'll love Netflix! If you don't, cancel within 21 days for a refund.</Feature.SubTitle>
        <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Buttom>Try It Now</OptForm.Buttom>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
        <OptForm.Break />
      </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqContaniner />
    <FooterContainer />
  </>
}