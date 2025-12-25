import AnimatedElement from './AnimatedElement';
import Accordion from './Accordion';

export default function FAQSection() {
  return (
    <div className="section-faq">
      <div className="padding-global">
        <AnimatedElement
          className="container-content"
          threshold={0.15}
        >
          <div className="margin-bottom-xs">
            <h2>Frequently Questions</h2>
          </div>
          <div className="grid-layout faq-list">
            <Accordion 
              title="What will I learn in this course?"
            >
              <p className="text-size-base">
                Strategies for buying businesses without going into
                debt: how to structure deals, negotiate terms, and
                secure favorable financing from the seller.
              </p>
            </Accordion>

            <Accordion 
              title="What are the benefits of using seller financing to purchase a business?"
            >
              <ul role="list" className="list-unstyled">
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">Easier to qualify than traditional loans.</p>
                </li>
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">Greater repayment flexibility.</p>
                </li>
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">Have more confidence in your acquisitions.</p>
                </li>
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">May get approval where traditional financing falls short.</p>
                </li>
              </ul>
            </Accordion>

            <Accordion 
              title="How much time will it take to complete the course?"
            >
              <p className="text-size-base">
                Complete at your pace: With 4.5 hours of on-demand video and extra content, you can finish it in a day or a month. It&apos;s your call.
              </p>
            </Accordion>
            
            <Accordion 
              title="Who is Codie and why is she the best person to teach this?"
            >
              <p className="text-size-base">
                Codie Sanchez is a renowned expert in seller financing, with a track record of over 26 successful business acquisitions using this innovative strategy. As CEO of Contrarian Thinking Capital, she has mastered the art of structuring deals using seller financing, making her uniquely qualified to teach this course. Codie&apos;s expertise in seller financing, combined with her dynamic teaching style and commitment to empowering entrepreneurs, sets her apart as the ultimate instructor for this course.
              </p>
            </Accordion>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}

