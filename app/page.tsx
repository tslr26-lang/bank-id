"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const steps = [
  {
    n: "01",
    title: 'כנסו לחשבון הבנק וחפשו "תעודת זהות בנקאית"',
    text: (
      <>
        נכנסים לחשבון הבנק — דרך המחשב או האפליקציה — ומחפשים אייקון שנקרא{" "}
        <mark>תעודת זהות בנקאית</mark>.
      </>
    ),
  },
  {
    n: "02",
    title: 'בחרו את השנה האחרונה ולחצו על "דו"ח מקוצר"',
    text: (
      <>
        תיפתח רשימה של כל השנים שהחשבון היה פעיל. בוחרים את השנה האחרונה
        ולוחצים על <mark>דו״ח מקוצר</mark>.
      </>
    ),
  },
  {
    n: "03",
    title: 'גללו לסעיף "עמלות" — ודרשו לבטל',
    text: (
      <>
        בדו״ח שייפתח, גללו לסעיף <mark>עמלות</mark>. אם מופיעות שם עמלות —
        פנו לבנק ודרשו לבטל אותן.{" "}
        <strong>אל תשלמו לבנק אף עמלה.</strong>
      </>
    ),
  },
];

export default function BankIdPage() {
  return (
    <main
      style={{
        fontFamily: "'Heebo', -apple-system, sans-serif",
        background: "#FDFAF5",
        minHeight: "100vh",
        color: "#2D2D3A",
        direction: "rtl" as const,
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap');
        mark {
          background: linear-gradient(to left, #F5A623, #F5C842);
          color: #1A1A2E;
          border-radius: 4px;
          padding: 1px 6px;
          font-weight: 700;
          font-style: normal;
        }
      `}</style>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* ── Header ── */}
        <header style={{ padding: "28px 0 0", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E", letterSpacing: "-0.2px" }}>
            פשוט להשקיע
          </p>
          <p style={{ fontSize: 11, color: "#6B7280", marginTop: 2, fontWeight: 500 }}>
            מדריכים פיננסיים חינמיים
          </p>
        </header>

        {/* ── Hero card ── */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: "28px 24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            marginTop: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* top accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0, right: 0, left: 0,
              height: 4,
              background: "linear-gradient(to left, #F5A623, #F5C842)",
              borderRadius: "18px 18px 0 0",
            }}
          />

          {/* badge */}
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #F5A623, #F5C842)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              padding: "4px 14px",
              borderRadius: 20,
              marginBottom: 14,
            }}
          >
            מדריך מהיר · 3 דקות
          </span>

          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 1.9rem)",
              fontWeight: 900,
              color: "#1A1A2E",
              lineHeight: 1.3,
              marginBottom: 14,
            }}
          >
            תעודת זהות{" "}
            <span
              style={{
                background: "linear-gradient(to left, #F5A623, #F5C842)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              בנקאית
            </span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "#6B7280",
              lineHeight: 1.75,
              fontWeight: 500,
            }}
          >
            באמצעות מסמך אחד תוכלו לבדוק האם הבנק גובה מכם עמלות —
            ועל מה בדיוק הן נגבות.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              custom={i + 1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "24px 22px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              {/* left accent border */}
              <div
                style={{
                  position: "absolute",
                  top: 0, bottom: 0, right: 0,
                  width: 4,
                  background: "linear-gradient(to bottom, #F5A623, #F5C842)",
                  borderRadius: "0 18px 18px 0",
                }}
              />

              {/* step number */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F5A623, #F5C842)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 900, color: "#fff" }}>
                  {step.n}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 3.5vw, 1.1rem)",
                    fontWeight: 800,
                    color: "#1A1A2E",
                    lineHeight: 1.35,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    color: "#6B7280",
                    lineHeight: 1.8,
                    fontWeight: 500,
                  }}
                >
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Closing callout ── */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            marginTop: 16,
            background: "#FFF3DC",
            borderRadius: 18,
            padding: "22px 22px",
            border: "1.5px solid #F5C842",
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: "#2D2D3A",
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
            💡{" "}
            <strong style={{ color: "#1A1A2E" }}>
              הבנק לא ישלח לכם תזכורת לבדוק מה הוא גובה מכם.
            </strong>
            <br />
            תעודת הזהות הבנקאית היא הכלי שלכם לגלות — ולדרוש בחזרה.
          </p>
        </motion.div>

        {/* ── Footer ── */}
        <footer style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.8 }}>
            כל הזכויות שמורות לתומר אליהו · פשוט להשקיע
            <br />
            the_investing.doctor
          </p>
        </footer>
      </div>
    </main>
  );
}
