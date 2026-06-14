import { useEffect } from 'react';
import { ambientMusic } from '../utils/ambientMusic';

/**
 * Component that auto-starts ambient music when user first interacts
 * Shows a subtle notification to enable music
 */
export default function AutoMusicStarter() {
  useEffect(() => {
    // Check if music was already started in this session
    const hasInteracted = sessionStorage.getItem('musicPromptShown');
    
    if (!hasInteracted) {
      // Start music on first user interaction
      const handleFirstInteraction = () => {
        if (!ambientMusic.getIsPlaying()) {
          ambientMusic.start();
          sessionStorage.setItem('musicPromptShown', 'true');
        }
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      };

      // Add listener for first interaction
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('touchstart', handleFirstInteraction);

      // Also set a timeout - if user hasn't interacted within 5 seconds, 
      // we assume they're reading and might want music
      const timeoutId = setTimeout(() => {
        if (!ambientMusic.getIsPlaying()) {
          ambientMusic.start();
          sessionStorage.setItem('musicPromptShown', 'true');
        }
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }, 5000);

      return () => {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        clearTimeout(timeoutId);
      };
    } else {
      // Music prompt was already shown, just start the music
      if (!ambientMusic.getIsPlaying()) {
        ambientMusic.start();
      }
    }
  }, []);

  return null;
}
