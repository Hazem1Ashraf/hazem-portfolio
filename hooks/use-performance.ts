"use client"

import { useEffect, useRef } from "react"

/**
 * Hook to measure and log component rendering performance
 * Only runs in development
 */
export function usePerformanceMetrics(componentName: string) {
  const renderTimeRef = useRef(Date.now())

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const renderTime = Date.now() - renderTimeRef.current
      console.log(`[Performance] ${componentName} rendered in ${renderTime}ms`)
    }
  }, [componentName])
}

/**
 * Hook to defer non-critical updates using requestIdleCallback
 * Improves perceived performance by prioritizing critical updates
 */
export function useDeferredUpdate<T>(value: T, callback?: (value: T) => void) {
  const timeoutRef = useRef<number>()

  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      timeoutRef.current = window.requestIdleCallback(() => {
        callback?.(value)
      })
    } else {
      // Fallback for browsers without requestIdleCallback
      timeoutRef.current = window.setTimeout(() => {
        callback?.(value)
      }, 0)
    }

    return () => {
      if (timeoutRef.current) {
        if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(timeoutRef.current)
        } else {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [value, callback])

  return value
}
