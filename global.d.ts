declare global {
  namespace YT {
    class Player {
      constructor(elementId: string | HTMLElement, options: any);
      getCurrentTime(): number;
      getDuration(): number;
      seekTo(seconds: number, allowSeekAhead?: boolean): void;
    }
    var PlayerState: {
      PLAYING: number;
    };

    interface OnReadyEvent {
      target: Player;
    }

    interface OnStateChangeEvent {
      data: number;
      target: Player;
    }
  }
  interface Window {
    YT?: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}
export {};