import Image from 'next/image';
import AnimatedElement from './AnimatedElement';
import WistiaEmbed from './WistiaEmbed';

export default function HeroSection() {
  return (
    <div className="section-hero-banner">
      <div className="padding-global">
        <div className="container-content">
          <div className="logo-wrapper">
            {/* <AnimatedElement
              as="a"
              href="/"
              aria-current="page"
              className="logo inline-block current"
              threshold={0.1}
            >
              <Image
                src="/images/logo.png"
                alt="Contrarian Thinking logo"
                width={200}
                height={50}
                priority={true}
              />
            </AnimatedElement> */}
          </div>
          <div className="center-headlines py-36">
            <div className="margin-bottom-xxs">
              <AnimatedElement
                as="h1"
                delay={0.1}
                threshold={0.1}
              >
                Welcome,
                <span className="text-color-primary"> To Our LMS Website </span>
              
              </AnimatedElement>
            </div>
            <div className="margin-bottom-xxs">
              <AnimatedElement
                className="text-size-md"
                delay={0.2}
                threshold={0.1}
              >
                Learn How to Buy Your First<em> (Or Next)</em> Business 
                <span className="text-style-underline"> Today</span> in Less Time
                &amp; Less Money Out-Of-Pocket.
              </AnimatedElement>
            </div>
          </div>
          {/* <AnimatedElement
            className="video-holder"
            animation="fadeInUpLarge"
            delay={0.3}
            threshold={0.1}
            suppressHydrationWarning
          >
            <WistiaEmbed />
          </AnimatedElement> */}
        </div>
      </div>
    </div>
  );
}

