import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import 'normalize.css'
import fluidType from '../utils/fluid-type';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
      background-color: #F5F4EE;
      color: #525b5f;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
      font-feature-settings: 'kern' 1;
  }

  a {
      color: #2412E3;

      &:visited {
        color: #9700E3
    }
  }
  h1 {
    ${fluidType('font-size', 20, 60, 2, 3, 'rem')}
    ${fluidType('line-height', 20, 60, 2.5, 3.15, 'rem')}
  }
  h2 {
    ${fluidType('font-size', 20, 60, 1.625, 2.25, 'rem')}
    ${fluidType('line-height', 20, 60, 2.5, 2.8125, 'rem')}
  }
  h3 {
    ${fluidType('font-size', 20, 60, 1.375, 1.75, 'rem')}
    ${fluidType('line-height', 20, 60, 1.5625, 2.1875, 'rem')}
  }
  h4 {
    ${fluidType('font-size', 20, 60, 1.125, 0.875, 'rem')}
    ${fluidType('line-height', 20, 60, 1.39, 1.528, 'rem')}
  }
  p {
    ${fluidType('line-height', 20, 60, 1.25, 1.375, 'rem')}
  }
`;

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.5rem;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Cameron Chamberlain - Senior Developer (Front-End)"
      meta={[
        { name: 'description', content: 'Senior Developer in Melbourne, Australia' },
        { name: 'keywords', content: 'developer, melbourne, australia, programming, programmer, reactjs, javascript, ecmascript' },
      ]}
    >
      <html lang="en" />
      <link rel="shortcut icon" href="favicons/favicon.ico" type="image/x-icon"/>
    </Helmet>
    <Header />
    <MainWrapper>
      {children()}
    </MainWrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
