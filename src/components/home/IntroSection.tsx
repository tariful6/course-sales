import Image from 'next/image';
import AnimatedElement from './AnimatedElement';
import CTAButton from './CTAButton';

export default function IntroSection() {
  return (
    <div className="section-introduce">
      <div className="padding-global">
        <div className="container-content">
          <div className="center-headlines">
            <div className="margin-bottom-sm">
              <div className="margin-bottom-xs">
                <AnimatedElement
                  className="content-box wide"
                >
                  <div className=" py-3">
                    Our Upcoming Cources
                  </div>
                </AnimatedElement>
              </div>
              <AnimatedElement
                as="h2"
                delay={0.1}
              >
                Your All-Access Pass to

              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="container-large">
          <AnimatedElement
            className="margin-bottom-lg"
            delay={0.2}
          >
            <div className=' grid grid-cols-3 gap-6'>
              <Image
                src="/images/nodejs-frameworks.png"
                alt="Self Liquidation Image"
                width={1695}
                height={954}
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 93vw"
                className="full-width-image"
                priority={false}
              />
              <Image
                src="/images/web.jpg"
                alt="Self Liquidation Image"
                width={1695}
                height={954}
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 93vw"
                className="full-width-image"
                priority={false}
              />
              <Image
                src="/images/js.png"
                alt="Self Liquidation Image"
                width={1695}
                height={954}
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 93vw"
                className="full-width-image"
                priority={false}
              />
            </div>
          </AnimatedElement>
          <div>
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
}

