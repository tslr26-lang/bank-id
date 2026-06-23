"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Colors ────────────────────────────────────────────────
const BLACK = "#000000";
const DARK = "#0a0a0a";
const CARD_BG = "#0d0d0d";
const WHITE = "#ffffff";
const GRAY = "#b0b0b0";
const GOLD = "#c9a84c";
const GOLD_BG = "rgba(201,168,76,0.12)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ─── Animation variants ────────────────────────────────────
const fadeInBlur = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const viewport = { once: true, margin: "-60px" };

// ─── DividerLine ───────────────────────────────────────────
function DividerLine() {
  return (
    <div
      style={{
        height: "1px",
        background:
          "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 50%, transparent 100%)",
      }}
    />
  );
}

// ─── Step number badge ─────────────────────────────────────
function StepBadge({ n }: { n: string }) {
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: `2px solid ${GOLD}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: GOLD_BG,
      }}
    >
      <span
        style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          color: GOLD,
        }}
      >
        {n}
      </span>
    </div>
  );
}

// ─── Inline highlight ──────────────────────────────────────
function Hl({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: GOLD_BG,
        border: `1px solid ${GOLD_BORDER}`,
        borderRadius: 4,
        padding: "1px 7px",
        color: GOLD,
        fontWeight: 700,
        whiteSpace: "nowrap",
        fontSize: "0.95em",
      }}
    >
      {children}
    </span>
  );
}

// ─── Step card ─────────────────────────────────────────────
function StepCard({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeChild}
      style={{
        background: CARD_BG,
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #c9a84c, transparent)",
        }}
      />
      <StepBadge n={n} />
      <h3
        style={{
          fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
          fontWeight: 800,
          color: WHITE,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
          color: GRAY,
          lineHeight: 1.9,
        }}
      >
        {children}
      </p>
    </motion.div>
  );
}

// ─── Scroll indicator ──────────────────────────────────────
function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () =>
      setOpacity(Math.max(0, 1 - window.scrollY / 200));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ delay: 1.2, duration: 0.6 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <span
        style={{
          fontSize: "0.68rem",
          color: GOLD,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        גללו למטה
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 1,
          height: 28,
          background: GOLD,
          borderRadius: 1,
        }}
      />
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────
export default function BankIdPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const narrow = { maxWidth: 760, margin: "0 auto", padding: "0 24px" };
  const sectionPad = "clamp(80px, 10vw, 120px)";

  return (
    <main style={{ background: BLACK, minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: BLACK,
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* radial gold glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 900px 600px at 50% 35%, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <motion.div
          style={{
            y: heroY,
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            maxWidth: 680,
          }}
        >
          {/* label */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              מדריך חינמי · פשוט להשקיע
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInBlur}
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: WHITE,
            }}
          >
            תעודת זהות{" "}
            <span style={{ color: GOLD }}>בנקאית</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: GRAY,
              lineHeight: 1.85,
              maxWidth: 520,
            }}
          >
            באמצעות מסמך אחד תוכלו לבדוק האם הבנק גובה מכם עמלות —
            ועל מה בדיוק הן נגבות.
          </motion.p>

          {/* time badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: 100,
              padding: "8px 22px",
            }}
          >
            <span style={{ fontSize: "0.85rem", color: GOLD, fontWeight: 600 }}>
              ⏱ 3 דקות בלבד
            </span>
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </section>

      <DividerLine />

      {/* ── Steps ────────────────────────────────────── */}
      <section
        style={{
          background: DARK,
          paddingTop: sectionPad,
          paddingBottom: sectionPad,
        }}
      >
        <div style={narrow}>
          {/* heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <div style={{ marginBottom: 12 }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: GOLD,
                }}
              >
                3 שלבים פשוטים
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: WHITE,
                lineHeight: 1.25,
              }}
            >
              כך מוציאים תעודת זהות בנקאית
            </h2>
          </motion.div>

          {/* cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <StepCard n="01" title='כנסו לחשבון הבנק וחפשו "תעודת זהות בנקאית"'>
              נכנסים לחשבון הבנק — דרך המחשב או האפליקציה — ומחפשים
              אייקון שנקרא <Hl>תעודת זהות בנקאית</Hl>.
            </StepCard>

            <StepCard n="02" title='בחרו את השנה האחרונה ולחצו על "דוח מקוצר"'>
              תיפתח רשימה של כל השנים בהן החשבון היה פעיל. בוחרים את
              השנה האחרונה ולוחצים על <Hl>דו״ח מקוצר</Hl>.
            </StepCard>

            <StepCard n="03" title='גללו לסעיף "עמלות" — ודרשו לבטל'>
              בדו״ח שייפתח, גללו עד לסעיף <Hl>עמלות</Hl>. אם מופיעות שם
              עמלות שאתם משלמים — פנו לבנק ודרשו לבטל אותן.{" "}
              <strong style={{ color: WHITE }}>
                אל תשלמו לבנק אף עמלה.
              </strong>
            </StepCard>
          </motion.div>
        </div>
      </section>

      <DividerLine />

      {/* ── Closing callout ───────────────────────────── */}
      <section
        style={{
          background: BLACK,
          paddingTop: sectionPad,
          paddingBottom: sectionPad,
        }}
      >
        <div style={narrow}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            style={{
              background: CARD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: 20,
              padding: "40px 36px",
              textAlign: "center",
              boxShadow:
                "0 0 60px rgba(201,168,76,0.06), 0 0 120px rgba(201,168,76,0.03)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, #c9a84c, transparent)",
              }}
            />
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: GRAY,
                lineHeight: 1.9,
              }}
            >
              הבנק לא ישלח לכם תזכורת לבדוק מה הוא גובה מכם.
              <br />
              <strong style={{ color: WHITE }}>
                תעודת הזהות הבנקאית היא הכלי שלכם לגלות — ולדרוש בחזרה.
              </strong>
            </p>
          </motion.div>
        </div>
      </section>

      <DividerLine />

      {/* ── Footer ───────────────────────────────────── */}
      <footer
        style={{
          background: DARK,
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.8 }}>
          כל הזכויות שמורות לתומר אליהו · פשוט להשקיע
          <br />
          <span style={{ color: "#3a3a3a" }}>the_investing.doctor</span>
        </p>
      </footer>
    </main>
  );
}
