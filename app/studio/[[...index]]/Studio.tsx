'use client'

import React, { useCallback, useLayoutEffect, useRef } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// Shim useEffectEvent for Sanity compatibility with React 19
if (typeof (React as any).useEffectEvent === 'undefined') {
  const useLayoutEffectImpl = typeof window !== 'undefined' ? useLayoutEffect : () => {}
  // @ts-ignore
  React.useEffectEvent = (fn: any) => {
    const ref = useRef(fn)
    useLayoutEffectImpl(() => {
      ref.current = fn
    })
    return useCallback((...args: any[]) => ref.current(...args), [])
  }
}

export default function Studio() {
  return <NextStudio config={config} />
}
