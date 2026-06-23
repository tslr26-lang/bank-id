"use client";

import { useEffect } from "react";

export default function BankIdPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="ani-1">
            כך מוציאים<br />
            <em>תעודת זהות בנקאית</em>
          </h1>
          <p className="hero-sub ani-2">
            בדקו אם הבנק גובה מכם עמלות — ועל מה בדיוק.<br />
            תהליך פשוט של 3 שלבים שלוקח פחות מ-5 דקות.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ STEPS ═══ */}
      <section className="steps-section">
        <div className="container">
          <div className="steps-grid reveal visible">
            <div className="step-card">
              <div className="step-card-text">
                <div className="step-num">צעד 1</div>
                <div className="step-title">כנסו לחשבון הבנק</div>
                <div className="step-desc">דרך המחשב או האפליקציה</div>
              </div>
            </div>
            <div className="step-arrow">←</div>
            <div className="step-card">
              <div className="step-card-text">
                <div className="step-num">צעד 2</div>
                <div className="step-title">פתחו דו&quot;ח מקוצר</div>
                <div className="step-desc">בחרו את השנה האחרונה</div>
              </div>
            </div>
            <div className="step-arrow">←</div>
            <div className="step-card">
              <div className="step-card-text">
                <div className="step-num">צעד 3</div>
                <div className="step-title">בדקו את העמלות</div>
                <div className="step-desc">ודרשו לבטל כל עמלה שמופיעה</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ CONTENT SECTIONS ═══ */}
      <section className="content-section">
        <div className="container">

          {/* Step 1 */}
          <div className="content-block reveal">
            <div className="content-eyebrow">צעד 1</div>
            <h2 className="content-title">כנסו לחשבון הבנק וחפשו את התעודה</h2>
            <p className="content-subtitle">
              ניתן להיכנס דרך אתר הבנק במחשב או דרך האפליקציה בנייד.
            </p>
            <div className="info-card">
              <div className="info-text">
                לאחר שנכנסתם לחשבון, חפשו אייקון או תפריט בשם{" "}
                <span className="highlight">תעודת זהות בנקאית</span>.
                <br /><br />
                בבנקים שונים הוא יכול להופיע תחת &quot;מידע על החשבון&quot;, &quot;ניהול חשבון&quot; או ישירות בדף הבית.
                <br /><br />
                אם אינכם מוצאים — נסו לחפש &quot;תעודת זהות בנקאית&quot; בשורת החיפוש של אתר הבנק.
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="content-block reveal reveal-delay">
            <div className="content-eyebrow">צעד 2</div>
            <h2 className="content-title">בחרו שנה אחרונה ופתחו דו&quot;ח מקוצר</h2>
            <p className="content-subtitle">
              הדו&quot;ח מציג את כל הפעילות הפיננסית שלכם מול הבנק — כולל כל העמלות.
            </p>
            <div className="info-card">
              <div className="info-text">
                לאחר שנכנסתם לתעודת הזהות הבנקאית, תופיע רשימה של כל השנים שהחשבון היה פעיל.
                <br /><br />
                בחרו את <span className="highlight">השנה האחרונה</span> ולחצו על{" "}
                <span className="highlight">דו&quot;ח מקוצר</span>.
                <br /><br />
                הדו&quot;ח ייפתח כמסמך שניתן לקרוא ולשמור.
              </div>
            </div>
          </div>

          {/* Hint between steps */}
          <div className="hint-banner reveal">
            <div className="hint-icon">💡</div>
            <div className="hint-text">
              את הדו&quot;ח ניתן גם להוריד כ-PDF ולשמור לשימוש עתידי —{" "}
              <span>שימושי כשמתמקחים מול הבנק.</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="content-block reveal">
            <div className="content-eyebrow">צעד 3</div>
            <h2 className="content-title">גללו לסעיף &quot;עמלות&quot; — ודרשו לבטל</h2>
            <p className="content-subtitle">
              כל עמלה שמופיעה שם — אפשר (וצריך) לנסות לבטל.
            </p>
            <div className="info-card">
              <div className="info-text">
                בדו&quot;ח שנפתח, גללו עד לסעיף <span className="highlight">עמלות</span>.
                <br /><br />
                אם מופיעות שם עמלות שאתם משלמים — פנו לבנק (בסניף, בצ&apos;אט או בטלפון) ודרשו לבטל אותן.
                <br /><br />
                <strong>התעקשו. הבנקים ברוב המקרים מוותרים — בתנאי שמבקשים.</strong>
                <br /><br />
                אל תסכימו לפטור לשנה בלבד — בקשו פטור <span className="highlight">קבוע</span>.
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="divider" />

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">פשוט להשקיע</div>
          <div className="footer-sub">© תומר אליהו | כל הזכויות שמורות</div>
        </div>
      </footer>
    </>
  );
}
