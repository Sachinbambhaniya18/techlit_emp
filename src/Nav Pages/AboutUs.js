import React from 'react'
const AboutUs = (props)=> {
  
  return (
    <div className={`AbtUs ${props.isDarkMode ? 'Dark-AbtUs' : 'Light-AbtUs'}`}>
      <h1>Welcome to <span className='Heading'>TechLit Emporium</span><span>!</span></h1>
      <p className="Header-Info">
      At TechLit Emporium,  we are driven by our unwavering commitment to provide an exceptional online shopping experience. Our story began in 2023, when a group of like-minded individuals came together with a shared vision: to redefine e-commerce by offering high-quality products and unparalleled customer service to shoppers across the globe.
      </p>
      <div className="About-Info">
        <h1>Your One-Stop Shop</h1>
        <p className='Description'>We understand that each individual has unique tastes and preferences, and that's why we've made it our goal to curate an extensive selection of products that cater to everyone. From trendy fashion to cutting-edge gadgets, from home essentials to outdoor gear, we have it all under one virtual roof.</p>
        <h1>Uncompromising Quality</h1>
        <p className="Description">Your satisfaction is our top priority. That's why we go the extra mile to ensure that every product featured on our platform meets the highest quality standards. We collaborate with trusted suppliers and conduct thorough quality checks to guarantee your purchase exceeds expectations.</p>
        <h1>Discover New Possibilities</h1>
        <p className="Description">Our diverse range of products opens up a world of possibilities. Whether you're looking for a special gift, upgrading your wardrobe, or enhancing your living space, our collections are carefully curated to inspire and ignite your imagination.</p>
        <h1>Passionate About Service</h1>
        <p className="Description">Our passion for exceptional service goes hand in hand with our dedication to providing top-notch products. Our customer support team is always here to assist you, making sure your shopping experience is smooth, convenient, and enjoyable.</p>
        <h1>Join Our Global Community</h1>
        <p className="Description">We take pride in serving a vibrant and diverse community of shoppers from all corners of the world. By choosing TechLit Emporium, you become part of this global family, united by a shared love for discovering the best products and enjoying a seamless shopping journey.</p>
        <h1>Your Trust, Our Motivation</h1>
        <p className="Description">We understand that trust is the foundation of any successful relationship. We are humbled by the trust our customers place in us and strive every day to earn and maintain that trust through transparency, reliability, and integrity.</p>
        <h1>Thank You for Choosing <span className='Heading'>TechLit Emporium</span><span>!</span></h1>
        <p className="Description">From the entire team at TechLit Emporium, we extend our heartfelt gratitude for choosing us as your preferred online shopping destination. As we continue to grow and evolve, we remain committed to delighting you with an ever-expanding product range and unmatched customer service. Explore, shop, and experience the joy of finding everything you need in one place. Start your shopping adventure with TechLit Emporium today!</p>
      </div>
    </div>
  )
}

export default AboutUs;