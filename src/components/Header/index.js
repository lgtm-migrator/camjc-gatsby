import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const WrapperOuter = styled.header`
  border-bottom: 2px dashed #515B5E;
  margin-bottom: 1.45rem;
`

const WrapperInner = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const HomeHeader = styled.h1`
  margin: 0;
`

const HomeLink = styled(Link)`
  color: #68CBE3;
  text-decoration: none;
`

const Header = () => (
  <WrapperOuter>
    <WrapperInner>
      <HomeHeader>
        <HomeLink to="/">
          CamJC
        </HomeLink>
      </HomeHeader>
    </WrapperInner>
  </WrapperOuter>
)

export default Header
