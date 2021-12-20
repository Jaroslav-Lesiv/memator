import { Platform } from 'react-native';
import Sound from 'react-native-sound';

class Player {
  timer: null | NodeJS.Timeout = null;
  isPlaying: boolean = false;

  play = async (sound: Sound) => {
    try {
      console.log({sound})
      // if (!timeout) {
      //   this.stop();
      //   return;
      // }

      // if (this.isPlaying) return;
      // if (this.timer) clearTimeout(this.timer);

      sound.play(() => console.log('SUCCESS'));
      // this.isPlaying = true;
      // if (timeout) {
      //   this.timer = setTimeout(this.stop, timeout);
      // }
    } catch (error) {
      console.warn({ error });
    }
  };

  stop = () => {
    // if (!this.isPlaying) return;
    // if (this.timer) clearTimeout(this.timer);
    // this.audio.stop();
    // this.isPlaying = false;
  };
}

const player = new Player();

export default player;
