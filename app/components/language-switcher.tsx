"use client"

import { useState } from "react"

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN")

  return (
    <div className="language-switcher my-8">
      <span
        className={language === "EN" ? "active" : ""}
        onClick={() => setLanguage("EN")}
      >
        EN
      </span>
      <span>/</span>
      <span
        className={language === "FR" ? "active" : ""}
        onClick={() => setLanguage("FR")}
      >
        FR
      </span>
    </div>
  )
}

