import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// 12-column grid layout: [col, row, colSpan, rowSpan] — 21 kart (JavaScript, React primary; son: Diğer)
const GRID_LAYOUT = [
  [0, 0, 4, 2],   [4, 0, 4, 2],                                           // 0-1 primary
  [8, 0, 2, 1],   [10, 0, 2, 1],   [8, 1, 2, 1],   [10, 1, 2, 1],         // 2-5 secondary
  [0, 2, 2, 1],   [2, 2, 2, 1],   [4, 2, 2, 1],   [6, 2, 2, 1],   [8, 2, 2, 1],   [10, 2, 2, 1], // 6-11
  [0, 3, 2, 1],   [2, 3, 2, 1],   [4, 3, 2, 1],   [6, 3, 2, 1],   [8, 3, 2, 1],   [10, 3, 2, 1], // 12-17
  [0, 4, 4, 1],   [4, 4, 4, 1],   [8, 4, 4, 1],                            // 18-20 (Mantine, State Mgmt, Diğer)
]

const GRADIENTS_DARK = {
  primary: {
    default: "linear-gradient(145deg, #2d2d35 0%, #1f1f26 100%)",
    hover: "linear-gradient(145deg, #3a3a45 0%, #2a2a34 100%)",
  },
  secondary: {
    default: "linear-gradient(145deg, #28282f 0%, #1c1c22 100%)",
    hover: "linear-gradient(145deg, #34343e 0%, #25252e 100%)",
  },
  supporting: {
    default: "linear-gradient(145deg, #24242b 0%, #1a1a20 100%)",
    hover: "linear-gradient(145deg, #2e2e36 0%, #212128 100%)",
  },
}

const GRADIENTS_LIGHT = {
  primary: {
    default: "linear-gradient(145deg, #e5e5e5 0%, #d4d4d4 100%)",
    hover: "linear-gradient(145deg, #f0f0f0 0%, #e5e5e5 100%)",
  },
  secondary: {
    default: "linear-gradient(145deg, #e0e0e0 0%, #d0d0d0 100%)",
    hover: "linear-gradient(145deg, #ebebeb 0%, #e0e0e0 100%)",
  },
  supporting: {
    default: "linear-gradient(145deg, #d9d9d9 0%, #cfcfcf 100%)",
    hover: "linear-gradient(145deg, #e8e8e8 0%, #dcdcdc 100%)",
  },
}

const spring = { type: "spring", stiffness: 300, damping: 30 }
const springFast = { type: "spring", stiffness: 400, damping: 28 }

function SkillCard({
  skill,
  index,
  layout,
  isHovered,
  hasAnyHover,
  onHover,
  onBlur,
  isTouch,
  t,
  dark,
}) {
  const [col, row, colSpan, rowSpan] = layout
  const tier = skill.tier || "supporting"
  const gradients = (dark ? GRADIENTS_DARK : GRADIENTS_LIGHT)[tier]
  const [delay] = useState(() => 0.06 + index * 0.03)
  const detail = skill.detail
  const isRightSide = col >= 6

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: hasAnyHover && !isHovered ? 0.98 : 1,
        filter: hasAnyHover && !isHovered ? "brightness(0.7)" : "brightness(1)",
      }}
      transition={{
        opacity: { duration: 0.35, delay },
        y: spring,
        scale: spring,
        filter: { duration: 0.25 },
      }}
      style={{
        gridColumn: `${col + 1} / span ${colSpan}`,
        gridRow: `${row + 1} / span ${rowSpan}`,
        zIndex: isHovered ? 20 : 0,
      }}
      className="relative min-h-0 overflow-visible"
    >
      {/* Kart — hover'da büyüyor */}
      <motion.div
        className="absolute inset-0 rounded-xl flex items-center justify-center p-2 sm:p-4 cursor-pointer select-none overflow-hidden min-w-0"
          style={{
            background: isHovered && !isTouch ? gradients.hover : gradients.default,
            boxShadow: isHovered && !isTouch
              ? dark
                ? "0 20px 40px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 24px -4px rgba(120,120,140,0.25)"
                : "0 20px 40px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06) inset"
              : dark
                ? "0 4px 16px -4px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset"
                : "0 4px 16px -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06) inset",
          }}
          onMouseEnter={() => !isTouch && onHover?.(skill)}
          onMouseLeave={() => !isTouch && onBlur?.()}
          onFocus={() => onHover?.(skill)}
          onClick={() => onHover?.(skill)}
          tabIndex={0}
          animate={{
            scale: isHovered && !isTouch ? 1.05 : 1,
            transition: springFast,
          }}
          whileTap={isTouch ? { scale: 1.02 } : undefined}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.06) 0%, transparent 70%)",
            }}
          />
          <span
            className={`core-skill-label relative z-10 font-medium text-center leading-tight block w-full min-w-0 overflow-hidden line-clamp-2 break-words px-1 sm:px-0 ${dark ? "text-white" : "text-neutral-800"}`}
            style={{
              fontSize: tier === "primary" ? "clamp(0.7rem, 2.5vw, 1.1rem)" : tier === "secondary" ? "clamp(0.65rem, 2.2vw, 0.95rem)" : "clamp(0.6rem, 2vw, 0.85rem)",
              textShadow: dark ? "0 1px 2px rgba(0,0,0,0.4)" : "0 1px 2px rgba(255,255,255,0.5)",
              animationDelay: `${(index % 4) * 0.6}s`,
            }}
          >
            {skill.name}
          </span>
      </motion.div>

      {/* Detay — kartın altında; sol kartlar sağa, sağ kartlar sola açılır, ekranı taşmaz */}
      <AnimatePresence>
        {isHovered && detail && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 z-10 w-[calc(100vw-2rem)] max-w-full sm:w-auto sm:max-w-[min(520px,calc(100vw-2rem))] left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 ${isRightSide ? "sm:right-0 sm:left-auto" : ""}`}
          >
            <div
              className={`rounded-xl border shadow-xl p-4 min-w-0 w-full sm:w-max max-w-full sm:max-w-[520px] break-words ${dark ? "border-neutral-700 bg-neutral-900/95" : "border-neutral-200 bg-white/95"} ${isRightSide ? "sm:ml-auto" : ""}`}
              style={{
                minWidth: "min(280px, calc(100vw - 2rem))",
              }}
              onMouseEnter={() => !isTouch && onHover?.(skill)}
              onMouseLeave={() => !isTouch && onBlur?.()}
            >
              {detail.what && detail.what.length > 0 && (
                <div className="mb-3">
                  <h3 className={`text-xs font-medium mb-1.5 ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
                    {t?.home?.skillWhat}
                  </h3>
                  <ul className={`list-disc list-inside space-y-0.5 text-xs leading-relaxed ${dark ? "text-neutral-300" : "text-neutral-600"}`}>
                    {detail.what.map((item, i) => (
                      <li key={`${skill.name}-what-${i}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {detail.experience && (
                <div>
                    <h3 className={`text-xs font-medium mb-1.5 ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
                      {t?.home?.skillExperience}
                    </h3>
                    <p className={`text-xs leading-relaxed ${dark ? "text-neutral-300" : "text-neutral-600"}`}>
                    {detail.experience}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function CoreSkillsSection({ t, dark = false, className = "", data }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isTouch, setIsTouch] = useState(false)
  const skills = data?.coreSkillsShowcase || []
  const layout = GRID_LAYOUT

  return (
    <section
      id="core-skills"
      className={`py-12 sm:py-16 border-b ${dark ? "bg-neutral-950 border-neutral-800" : "bg-white border-neutral-200"} ${className}`}
      aria-labelledby="core-skills-heading"
      onTouchStart={() => setIsTouch(true)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h1
          id="core-skills-heading"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`text-2xl sm:text-3xl font-semibold mb-1 ${dark ? "text-white" : "text-neutral-900"}`}
        >
          {data?.person?.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className={`text-sm mb-6 ${dark ? "text-neutral-400" : "text-neutral-500"}`}
        >
          {data?.person?.title}
        </motion.p>

        <div className="relative overflow-visible">
          <AnimatePresence>
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 pointer-events-none z-[1] rounded-2xl"
                style={{
                  background: dark ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.04)",
                }}
                aria-hidden
              />
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.08 }}
            className="relative z-0 grid gap-1.5 sm:gap-3 overflow-visible"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridAutoRows: "minmax(64px, 1fr)",
            }}
          >
            {skills.slice(0, layout.length).map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                layout={layout[index]}
                isHovered={hoveredSkill?.name === skill.name}
                hasAnyHover={hoveredSkill !== null}
                onHover={setHoveredSkill}
                onBlur={() => setHoveredSkill(null)}
                isTouch={isTouch}
                t={t}
                dark={dark}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CoreSkillsSection
