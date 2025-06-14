declare global {
  namespace YT {
    class Player {
      constructor(elementId: string | HTMLElement, options: any);
      getCurrentTime(): number;
      getDuration(): number;
      seekTo(seconds: number): void;
     getCurrentTime(): number;

    }
    var PlayerState: {
      PLAYING: number;
    };
  }
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}
export {};