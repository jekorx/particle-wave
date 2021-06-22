declare module 'particle-wave'

export default class ParticleWave {
  constructor(el: HTMLElement | null, options: {
    antialias?: boolean,
    depthTest?: boolean,
    mousemove?: boolean,
    autosize?: boolean,
    side?: string,
    vertex?: string,
    fragment?: string,
    uniforms?: {
      time?: {
        type: string,
        value: number
      },
      hasTexture?: {
        type: string,
        value: number
      },
      speed?: {
        type: string,
        value: number
      },
      resolution?: {
        type: string,
        value: number[]
      },
      mousemove?: {
        type: string,
        value: number[]
      },
      projection?: {
        type: string,
        value: number[]
      },
      field?: {
        type: string,
        value: number[]
      } | number[],
      size?: {
        type: string,
        value: number
      } | number
    },
    buffers?: {
      position: number[],
      color: number[]
    },
    texture?: string,
    onUpdate?: (delta: number) => void,
    onResize?: (width: number, height: number, dpi: number) => void
  })

  clear: () => void
}
