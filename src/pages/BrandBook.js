import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation'
import MainMenu from '../components/MainMenu'
import LogoComponent from '../components/brand-book/Logo'
import ColorPaletteComponent from '../components/brand-book/ColorPalette'
import TypographyComponent from '../components/brand-book/Typography'
import IllustrationsPatternsComponent from '../components/brand-book/IllustrationsPatterns'
import FooterComponent from '../components/Footer'
import SubBrandComponent from '../components/brand-book/SubBrand'
const BrandBook = () => {
  return (
    <div>
      <Helmet>
        <title>Brand assets | EOS Brand Book</title>
        <meta
          name='description'
          content='In this page you will find the building elements of our brand’s visual identity. We want to make sure that our brand’s mission, image, and core values are presented consistently.'
        />
        <meta
          name='keywords'
          content='brand, brand book, brand guidelines, style guide, brand identity, brand identity design, brand visual identity, brand identity system'
        />
      </Helmet>
      <Navigation />
      <MainMenu />
      <div className='content'>
        <div className='section-container'>
          <div className='section-intro flex-reverse'>
            <div className='description'>
              <h1 className='custom-underline'>EOS Brand book</h1>
              <p className='subheading'>
                Below you will find the building elements of our brand’s visual
                identity. We want to make sure that our brand’s mission, image,
                and core values are presented consistently.
              </p>
            </div>
            <div className='img-wrap'>
              <img
                src={require(`../assets/images/brand_assets/brand-book-design-right.png`)}
                alt='LogoDesign'
              />
            </div>
          </div>
        </div>

        {/* Logo section */}
        <LogoComponent />

        {/* color-palette container */}
        <ColorPaletteComponent />
        {/* Sub brand container */}
        <SubBrandComponent />
        {/* Typography container */}
        <TypographyComponent />
        {/* color-palette container */}
        <IllustrationsPatternsComponent />
        <FooterComponent />
      </div>
    </div>
  )
}

export default BrandBook
