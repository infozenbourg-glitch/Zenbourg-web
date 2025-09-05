"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useTheme } from "next-themes"

export default function CursorFollower() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return
        const cursor = cursorRef.current
        if (!cursor) return

        // Initial GSAP setup
        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9999,
            willChange: "transform",
            backgroundColor: resolvedTheme === "dark" ? "#ffffff" : "#000000",
            borderColor: resolvedTheme === "dark" ? "#ccc" : "#111",
            opacity: 1,
        })

        const setX = gsap.quickSetter(cursor, "x", "px")
        const setY = gsap.quickSetter(cursor, "y", "px")

        const moveCursor = (e: MouseEvent) => {
            setX(e.clientX)
            setY(e.clientY)
        }

        window.addEventListener("mousemove", moveCursor)

        // Handle hover on images
        const images = document.querySelectorAll("img")
        const handleMouseEnter = () => {
            gsap.to(cursor, { scale: 2, opacity: 0.4, duration: 0.3, ease: "power3.out" })
        }
        const handleMouseLeave = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" })
        }

        images.forEach(img => {
            img.addEventListener("mouseenter", handleMouseEnter)
            img.addEventListener("mouseleave", handleMouseLeave)
        })

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            images.forEach(img => {
                img.removeEventListener("mouseenter", handleMouseEnter)
                img.removeEventListener("mouseleave", handleMouseLeave)
            })
        }
    }, [mounted, resolvedTheme])

    return <div ref={cursorRef} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 shadow-xl"></div>
}
