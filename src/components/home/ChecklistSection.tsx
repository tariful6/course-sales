import AnimatedElement from './AnimatedElement';
import CTAButton from './CTAButton';

export default function ChecklistSection() {
  return (
    <div className="section-checklist">
      <div className="padding-global wide">
        <div className="container-content-wide">
          <AnimatedElement
            className="info-component"
            threshold={0.15}
          >
            <div className="center-headlines">
              <div className="margin-bottom-md">
                <h2 className="heading-lg">
                  Here&apos;s You Can Purcess our All Courses...
                </h2>
              </div>
            </div>
            <div className="margin-bottom-lg">
              <ul
                role="list"
                className="checklist-wrapper gap-lg list-unstyled"
              >


                <li className="checklist is-justify-top">
                  <div className="bullet-check"></div>
                  <div className="gap-sm">
                    <h3>
                      negotiate from a position of strength and confidence.
                    </h3>
                    <div className="text-size-md">
                      While others are at the mercy of lenders and
                      potentially unfavorable interest rates... You&apos;re
                      engaging in win-win partnerships with motivated
                      sellers, structuring deals that benefit both parties.
                    </div>
                  </div>
                </li>

                <li className="checklist is-justify-top">
                  <div className="bullet-check"></div>
                  <div className="gap-sm">
                    <h3>Reach Your Financial Goals, Faster.</h3>
                    <div className="text-size-md">
                      Ditch the slow and uncertain path. While others are
                      stuck in a cycle of saving and hoping, you&apos;ll be
                      actively acquiring income-generating assets that build
                      wealth for generations to come.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <CTAButton />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}

