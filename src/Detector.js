/*jshint expr: true */
import FlagsClass from './Core/FlagsClass';

//! Features
import Feature from './Feature/Feature';
import VideoFeature from './Feature/VideoFeature';
import AudioFeature from './Feature/AudioFeature';

//! Hardware
import Platform from './Hardware/Platform';
import Device from './Hardware/Device';
import CPU from './Hardware/CPU';
import GPU from './Hardware/GPU';

//! Software
import OS from './Software/OS';
import Browser from './Software/Browser';
import Engine from './Software/Engine';

/**
 *
 *
 * @export
 * @class Detector
 * @extends {FlagsClass}
 */
export default class Detector extends FlagsClass {
  /**
   * Creates an instance of Detector.
   * @param {boolean} [cssFlags=false]
   * @param {string} [cssFlagsPrefix='djs']
   * @param {any} [ua=null]
   *
   * @memberOf Detector
   */
  constructor(ua = null, values = true, cssFlags = true, cssFlagsPrefix = 'djs') {
    super(ua);

    this._values = values;
    this._cssFlags = !!cssFlags ? [] : null;
    this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');

    //! Features
    this.checkFeature();

    //! Software
    this.checkEngine();
    this.checkBrowser();
    this.checkOS();

    //! Hardware
    // this.checkDevice();
    this.checkCPU();
    this.checkGPU();
    this.checkPlatform();

    this.setCssFlags();

    // remove unnecessary memory usage
    delete this._booleanFlagsValuePropertyName;
    delete this._values;
    delete this._cssFlags;
    delete this._cssFlagsPrefix;
    delete this._root;
    delete this._process;
    delete this._navigator;
    delete this._document;
    delete this._ua;
  }

  //! Feature
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkFeature() {
    const feature = new Feature(this._ua);
    const audio = new AudioFeature(this._ua);
    const video = new VideoFeature(this._ua);

    this.feature = feature.toFlags().merge({
      audio: audio.toFlags(),
      video: video.toFlags(),
    });

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
    }
  }

  //! Software
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkEngine() {
    const engine = new Engine(this._ua, this.toFlags());

    if (this._values) {
      this.engine = engine.toValues();
    } else {
      this.engine = engine.toFlags();
    }

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(engine.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkBrowser() {
    const browser = new Browser(this._ua, this.toFlags());

    if (this._values) {
      this.browser = browser.toValues();
    } else {
      this.browser = browser.toFlags();
    }

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(browser.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkOS() {
    const os = new OS(this._ua, this.toFlags());

    if (this._values) {
      this.os = os.toValues();
    } else {
      this.os = os.toFlags();
    }

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(os.toCssFlags());
    }
  }

  //! Hardware
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkDevice() {
    const device = new Device(this._ua, this.toFlags());

    this.device = device.toFlags();

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(device.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkCPU() {
    const cpu = new CPU(this._ua, this.toFlags());

    if (this._values) {
      this.cpu = cpu.toValues();
    } else {
      this.cpu = cpu.toFlags();
    }

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(cpu.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkGPU() {
    const gpu = new GPU(this._ua, this.toFlags());

    this.gpu = gpu.toFlags();

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(gpu.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkPlatform() {
    const platform = new Platform(this._ua, this.toFlags());

    if (this._values) {
      this.platform = platform.toValues();
    } else {
      this.platform = platform.toFlags();
    }

    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(platform.toCssFlags());
    }
  }

  //! CSS Flags
  /**
   *
   *
   *
   * @memberOf Detector
   */
  setCssFlags() {
    if (!!this._cssFlags) {
      const cssFlagsPrefixed = this._cssFlags.map((cssFlag) => {
        return this._cssFlagsPrefix + cssFlag;
      });

      const htmlElement = document.documentElement || document.querySelector('html');

      cssFlagsPrefixed.forEach((cssFlag) => {
        return htmlElement.className.replace(cssFlag, '');
      });

      htmlElement.className += cssFlagsPrefixed.join(' ').trim();
    }
  }
}
