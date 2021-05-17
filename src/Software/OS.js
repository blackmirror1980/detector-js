/* eslint-disable quote-props */
/* eslint-disable no-else-return */
/* eslint-disable radix */
/* eslint-disable indent */
import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class OS
 * @extends {CssFlagsClass}
 */
export default class OS extends CssFlagsClass {
  /**
   * Creates an instance of OS.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='os']
   *
   * @memberOf OS
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'os') {
    super(ua, flags, cssFlagsPrefix);

    this.version = 'n/a';
    this.versionName = 'n/a';
  }

  /**
   *
   *
   * @param {any} [versionNames={}]
   * @param {any} [version=null]
   * @returns string
   *
   * @memberOf OS
   */
  _getVersionNames(versionNames = {}, version = null) {
    if (!!version) {
      version = version.replace(/_/ig, '.');

      return Object.getOwnPropertyNames(versionNames).filter((versionName) => {
        return !!versionNames[versionName];
      })[0] || 'n/a';
    }

    return 'n/a';
  }

  //! Desktop OSs
  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getWindowsVersionName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      'CE': /CE/i.test(version),
      '95': /95/i.test(version),
      '98': /98/i.test(version),
      'ME': /ME/i.test(version),
      '2000': /NT(\s)?5\.0/i.test(version),
      'XP': /NT(\s)?5\.1/i.test(version) || /XP/i.test(version),
      '2003': /NT(\s)?5\.2/i.test(version),
      'Vista': /NT(\s)?6\.0/i.test(version),
      '7': /NT(\s)?6\.1/i.test(version),
      '8': /NT(\s)?6\.2/i.test(version),
      '8.1': /NT(\s)?6\.3/i.test(version),
      '10': /NT(\s)?6\.4/i.test(version) || /NT(\s)?10\.0/i.test(version),
      'RT': /ARM/.test(version),
    }, version);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Windows() {
    return this._checkAssertsResult(Asserts.all([
      /Win/i.test(this._ua),
    ]) && Asserts.one([
      /Windows ((NT|XP)( \d\d?.\d)?)/i.test(this._ua),
      //       /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
      // // ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
      // /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i,
      // // ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
    ]), null, this._getWindowsVersionName);
  }

  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getMacOSVersionName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      // source https://en.wikipedia.org/wiki/Mac_OS_8
      'Tempo': /^8\.0(\.+\d)?$/i.test(version),
      'Bride of Buster': /^8\.1(\.+\d)?$/i.test(version),
      'Allegro': /^8\.5(\.+\d)?$/i.test(version),
      'Veronica': /^8\.6(\.+\d)?$/i.test(version),
      // source https://en.wikipedia.org/wiki/Mac_OS_9
      'Sonata': /^9\.0(\.+[012356789])?$/i.test(version),
      'Minuet': /^9\.0\.4$/i.test(version),
      'Fortissimo': /^9\.1(\.+\d)?$/i.test(version),
      'Moonlight': /^9\.2(\.+[023456789])?$/i.test(version),
      'Limelight': /^9\.2\.1$/i.test(version),
      // source https://en.wikipedia.org/wiki/List_of_Apple_operating_systems
      'Cheetah': /^10\.0(\.+\d)?$/i.test(version),
      'Puma': /^10\.1(\.+\d)?$/i.test(version),
      'Jaguar': /^10\.2(\.+\d)?$/i.test(version),
      'Panther': /^10\.3(\.+\d)?$/i.test(version),
      'Tiger': /^10\.4(\.+\d)?$/i.test(version),
      'Leopard': /^10\.5(\.+\d)?$/i.test(version),
      'Snow Leopard': /^10\.6(\.+\d)?$/i.test(version),
      'Lion': /^10\.7(\.+\d)?$/i.test(version),
      'Mountain Lion': /^10\.8(\.+\d)?$/i.test(version),
      'Mavericks': /^10\.9(\.+\d)?$/i.test(version),
      'Yosemite': /^10\.10(\.+\d)?$/i.test(version),
      'El Capitan': /^10\.11(\.+\d)?$/i.test(version),
      'Sierra': /^10\.12(\.+\d)?$/i.test(version),
      'High Sierra': /^10\.13(\.+\d)?$/i.test(version),
      'Mojave': /^10\.14(\.+\d)?$/i.test(version),
      'Catalina': /^10\.15(\.+\d)?$/i.test(version),
      'Big Sur': /^11(\.+\d)?$/i.test(version),
    }, version);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get macOS() {
    return this._checkAssertsResult(Asserts.all([
      !this.iOS,
      !/mobile\//i.test(this._ua),
      /mac/i.test(this._ua),
      !/like mac/i.test(this._ua),
    ]) && Asserts.one([
      /(macintosh|mac(?=_powerpc)\s)/i.test(this._ua),
      /(mac\sos\sx)\s?([\w\s\.]*)/i.test(this._ua),
    ]) && Asserts.one([
      /Mac[ +]OS[ +]X(?:[ /](?:Version )?(\d+(?:[_\.]\d+)+))?/i.test(this._ua),
      /Mac (\d+(?:[_\.]\d+)+)/i.test(this._ua),
      /mac os x (\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), null, this._getMacOSVersionName);
  }

  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getUnixDistroName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      'FreeBSD': /\s(freebsd)\s?([\w\.]*)/i.test(version),
      'NetBSD': /\s(netbsd|dragonfly)\s?([\w\.]*)/i.test(version),
      'OpenBSD': /\s(openbsd|dragonfly)\s?([\w\.]*)/i.test(version),
      'PC-BSD': /\s(pc-bsd|dragonfly)\s?([\w\.]*)/i.test(version),
      'DragonFly': /\s(dragonfly)\s?([\w\.]*)/i.test(version),
    }, version);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Unix() {
    return this._checkAssertsResult(Asserts.all([
      /X11/i.test(this._ua),
    ]) && Asserts.one([
      /(unix)\s?([\w\.]*)/i.test(this._ua),
    ]), null, this._getUnixDistroName);
  }

  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getLinuxDistroName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      'Mint': /(mint)[\/\s\(]?(\w*)/i.test(version),
      'Mageia': /(mageia)[;\s]/i.test(version),
      'VectorLinux': /(vectorlinux)[;\s]/i.test(version),
      'Joli': /(joli)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Ubuntu': /([kxln]?ubuntu)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Debian': /(debian)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'SuSE': /(suse|opensuse)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Gentoo': /(gentoo)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Arch': /((?=\s)arch)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Slackware': /(slackware)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Fedora': /(fedora)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Mandriva': /(mandriva)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'CentOS': /(centos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'PCLinuxOS': /(pclinuxos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'RedHat': /(redhat)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Zenwalk': /(zenwalk)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Linpus': /(linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
    }, version);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Linux() {
    return this._checkAssertsResult(Asserts.all([
      !this.Android,
      /Linux/i.test(this._ua),
    ]), null, this._getLinuxDistroName);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get ChromiumOS() {
    return this._checkAssertsResult(Asserts.one([
      /(cros)\s[\w]+\s([\w\.]+\w)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Solaris() {
    return this._checkAssertsResult(Asserts.one([
      /(sunos)\s?([\w\.\d]*)/i.test(this._ua),
      /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Plan9() {
    return this._checkAssertsResult(Asserts.one([
      /(plan\s9)/i.test(this._ua),
    ]));
  }

  get Minix() {
    return this._checkAssertsResult(Asserts.one([
      /(minix)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get BeOS() {
    return this._checkAssertsResult(Asserts.one([
      /(beos)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get OS2() {
    return this._checkAssertsResult(Asserts.one([
      /(os\/2)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get AmigaOS() {
    return this._checkAssertsResult(Asserts.one([
      /(amigaos)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get MorphOS() {
    return this._checkAssertsResult(Asserts.one([
      /(morphos)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get RISCOS() {
    return this._checkAssertsResult(Asserts.one([
      /(risc\sos)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get OpenVMS() {
    return this._checkAssertsResult(Asserts.one([
      /(openvms)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Fuchsia() {
    return this._checkAssertsResult(Asserts.one([
      /(fuchsia)/i.test(this._ua),
    ]));
  }

  //! Mobile OSs
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get WindowsPhone() { // a.k.a. Windows Mobile
    return this._checkAssertsResult(Asserts.one([
      /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this._ua),
      /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this._ua),
      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this._ua),
    ]));

    // // Detect Windows Phone 7 desktop mode.
    // if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
    //   name += ' Mobile';
    //   os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
    //   description.unshift('desktop mode');
    // }

    // // Detect Windows Phone 8.x desktop mode.
    // if (/\bWPDesktop\b/i.test(ua)) {
    //   name = 'IE Mobile';
    //   os = 'Windows Phone 8.x';
    //   description.unshift('desktop mode');
    //   version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    // }
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get iOS() {
    return this._checkAssertsResult(Asserts.all([
      !window.MSStream,
      /iP(?:ad|hone|od)/.test(this._ua),
    ]) && Asserts.one([
      /os\s((\d+([_\s]\d+)*)|(\d+(?:[_\.]\d+)*)) like mac os x/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getAndroidVersionName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      '1.0': /^1\.[01234]$/i.test(version),
      'Cupcake': /^1\.5(\.+\d)?$/i.test(version),
      'Donut': /^1\.6(\.+\d)?$/i.test(version),
      'Eclair': /^2\.[01](\.+\d)?$/i.test(version),
      'Froyo': /^2\.2(\.+\d)?$/i.test(version),
      'Gingerbread': /^2\.3(\.+\d)?$/i.test(version),
      'Honeycomb': /^3(\.+\d)(\.+\d)?$/i.test(version),
      'Ice Cream Sandwich': /^4\.[01](\.+\d)?$/i.test(version),
      'Jelly Bean': /^4\.[23](\.+\d)?$/i.test(version),
      'KitKat': /^4\.[456789](\.+\d)?$/i.test(version),
      'Lollipop': /^5(\.\d)(\.+\d)?$/i.test(version),
      'Marshmallow': /^6(\.\d)(\.+\d)?$/i.test(version),
      'Nougat': /^7(\.\d)(\.+\d)?$/i.test(version),
      'Oreo': /^8(\.\d)(\.+\d)?$/i.test(version),
      'Pie': /^9(\.\d)(\.+\d)?$/i.test(version),
    }, version);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Android() {
    return this._checkAssertsResult(Asserts.one([
      /android[\s/-](\d+(\.\d+)*)/i.test(this._ua),
    ]), null, this._getAndroidVersionName);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Bada() {
    return this._checkAssertsResult(Asserts.one([
      /(bada)[\/\s-]?([\w\.]*)/i.test(this._ua),
      /bada\/(\d+(\.\d+)*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Blackberry() {
    return this._checkAssertsResult(Asserts.one([
      /blackberry|\bbb\d+/i.test(this._ua),
      /rim\stablet/i.test(this._ua),
    ]) && Asserts.one([
      /rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this._ua),
      /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this._ua),
      /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(blackberry)\w*\/?([\w\.]*)/i.test(this._ua),
      /\bbb(\d+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Contiki() {
    return this._checkAssertsResult(Asserts.one([
      /(contiki)[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get MeeGo() {
    return this._checkAssertsResult(Asserts.one([
      /(meego)[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get RIM() {
    return this._checkAssertsResult(Asserts.one([
      /(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get QNX() {
    return this._checkAssertsResult(Asserts.one([
      /(qnx)[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Palm() {
    return this._checkAssertsResult(Asserts.one([
      /(palm\sos)[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Symbian() {
    return this._checkAssertsResult(Asserts.one([
      /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  //! TV OSs
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get WebOS() {
    return this._checkAssertsResult(Asserts.one([
      /(webos)[\/\s-]?([\w\.]*)/i.test(this._ua),
      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this._ua),
      /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Tizen() {
    return this._checkAssertsResult(Asserts.one([
      /(tizen)[/\s](\d+(\.\d+)*)/i.test(this._ua),
    ]));
  }

  //! Other OSs
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Raspbian() {
    return this._checkAssertsResult(Asserts.one([
      /raspbian[/\s](\d+(\.\d+)*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @param {boolean} [assertsResult=false]
   * @param {any} [version=null]
   * @param {any} [versionNameFn=null]
   * @returns boolean
   *
   * @memberOf OS
   */
  _checkAssertsResult(assertsResult = false, version = null, versionNameFn = null) {
    if (assertsResult) {
      this.setVersion(version);
      this.setVersionName(versionNameFn);

      return true;
    }

    return false;
  }

  /**
   *
   *
   * @param {any} [version=null]
   *
   * @memberOf OS
   */
  setVersion(version = null) {
    this.version = (version || RegExp.$1 || 'n/a').replace(/_/ig, '.');
  }

  /**
   *
   *
   * @param {any} [versionNameFn=null]
   *
   * @memberOf OS
   */
  setVersionName(versionNameFn = null) {
    if (versionNameFn instanceof Function) {
      this.versionName = versionNameFn.call(this, this.version);
    }
  }
}
