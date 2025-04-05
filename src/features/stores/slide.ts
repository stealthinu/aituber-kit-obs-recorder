import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SlideState {
  isPlaying: boolean
  currentSlide: number
  selectedSlideDocs: string
  isAutoplay: boolean
}

const slideStore = create<SlideState>()(
  persist(
    (set: any, get: any) => ({
      isPlaying: false,
      currentSlide: 0,
      selectedSlideDocs: '',
      isAutoplay: false,
    }),
    {
      name: 'aitube-kit-slide',
      partialize: (state: SlideState) => ({ selectedSlideDocs: state.selectedSlideDocs }),
    }
  )
)

export default slideStore
