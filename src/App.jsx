
import { motion } from "framer-motion";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #fecdd3, #ffe4e6, #fecaca)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "24px",
        fontFamily: "Arial"
      }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            color: "#ec4899",
            fontSize: `${20 + Math.random() * 20}px`
          }}
          initial={{ y: "100vh", x: Math.random() * 1000, opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          💖
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "700px",
          textAlign: "center",
          position: "relative",
          zIndex: 10
        }}
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "48px",
            color: "#db2777",
            marginBottom: "24px"
          }}
        >
          Happy Birthday Pratik ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            fontSize: "20px",
            color: "#374151",
            lineHeight: "1.8",
            marginBottom: "32px"
          }}
        >
          You are my happiness, my safe place, and my biggest blessing.
          <br />
          You make my life beautiful every single day.
          <br />
          May your day be filled with endless smiles, love, laughter, and everything your heart wishes for.
          <br />
          I’m so lucky to have you ❤️
        </motion.p>

        <div style={{ fontSize: "60px", marginBottom: "30px" }}>
          🎂🎉💖
        </div>

        <div style={{ marginBottom: "30px" }}>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#db2777",
              marginBottom: "12px"
            }}
          >
            A Special Voice Message For You 🎧
          </p>

          <audio controls style={{ width: "100%" }}>
            <source src="/voice-message.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "#ec4899",
            color: "white",
            border: "none",
            padding: "16px 32px",
            borderRadius: "999px",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
          }}
          onClick={() => alert("I love you forever ❤️")}
        >
         Surprise 💌
        </motion.button>

        <div
          style={{
            marginTop: "30px",
            color: "#6b7280",
            fontStyle: "italic",
            fontSize: "14px"
          }}
        >
          Made with endless love 💕
        </div>
      </motion.div>
    </div>
  );
}
