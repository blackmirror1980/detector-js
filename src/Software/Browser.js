/* eslint-disable prefer-destructuring */
import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class Browser
 * @extends {CssFlagsClass}
 */
export default class Browser extends CssFlagsClass {
  /**
   * Creates an instance of Browser.
   * @param {any} [ua=window.navigator.userAgent]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='browser']
   *
   * @memberOf Browser
   */
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'browser') {
    super(ua, flags, cssFlagsPrefix);

    this._versionDefaultRegEx = /version\/(\d+(\.?_?\d+)+)/i;

    this._ua.match(this._versionDefaultRegEx);

    this.setVersion();
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Amaya() {
    return this._checkAssertsResult(Asserts.all([
      /(amaya)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Arora() {
    return this._checkAssertsResult(Asserts.all([
      /(arora)\/v?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Avant() {
    return this._checkAssertsResult(Asserts.all([
      /(avant\s)(?:browser)?[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get AndroidBrowser() {
    return this._checkAssertsResult(Asserts.all([
      !/like android/i.test(this._ua),
      /android/i.test(this._ua),
    ]) && Asserts.one([
      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Baidu() {
    return this._checkAssertsResult(Asserts.one([
      /(baidu)(?:browser)?[\/\s]?([\w\.]*)/i.test(this._ua),
      /(BIDUBrowser)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Basilisk() {
    return this._checkAssertsResult(Asserts.one([
      /(basilisk)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get BlackBerry() {
    return this._checkAssertsResult(Asserts.one([
      /blackberry|\bbb\d+/i.test(this._ua),
      /rim\stablet/i.test(this._ua),
    ]) && Asserts.all([
      /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Blazer() {
    return this._checkAssertsResult(Asserts.one([
      /(blazer)[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Bolt() {
    return this._checkAssertsResult(Asserts.one([
      /(bolt)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Brave() {
    return this._checkAssertsResult(Asserts.one([
      /(brave)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Camino() {
    return this._checkAssertsResult(Asserts.one([
      /(camino)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chimera() {
    return this._checkAssertsResult(Asserts.one([
      /(chimera)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chrome() {
    return this._checkAssertsResult(Asserts.all([
      !this.AndroidBrowser,
      !this.ChromeMobile,
    ]) && Asserts.one([
      /(chrome)\/v?([\w\.]+)/i.test(this._ua),
      /headlesschrome(?:\/([\w\.]+)|\s)/i.test(this._ua),
    ]) && Asserts.one([
      /(?:chrome)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get ChromeMobile() {
    return this._checkAssertsResult(Asserts.one([
      /((?:android.+)crmo|crios)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chromium() {
    return this._checkAssertsResult(Asserts.one([
      /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }


  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get ComodoDragon() {
    return this._checkAssertsResult(Asserts.one([
      /(comodo_dragon)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Conkeror() {
    return this._checkAssertsResult(Asserts.one([
      /(conkeror)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dillo() {
    return this._checkAssertsResult(Asserts.all([
      /(dillo)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dolphin() {
    return this._checkAssertsResult(Asserts.one([
      /dolfin\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(dolfin)\/([\w\.]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dorado() {
    return this._checkAssertsResult(Asserts.one([
      /Dorado WAP-Browser[/ ](\d+[\.\d]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Doris() {
    return this._checkAssertsResult(Asserts.all([
      /(doris)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Edge() {
    return this._checkAssertsResult(Asserts.all([
      !this.IE,
    ]) && Asserts.one([
      /edg([ea])\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /edg([ea])\/((\d+)?[\w\.]+)/i.test(this._ua),
      /edg([ea])[ /](\d+[\.\d]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get EdgeMobile() {
    return this._checkAssertsResult(Asserts.all([
      !this.Edge,
    ]) && Asserts.one([
      /edgios\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /edgios\/((\d+)?[\w\.]+)/i.test(this._ua),
      /EdgiOS[ /](\d+[\.\d]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Electron() {
    return this._checkAssertsResult(Asserts.one([
      typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer', // Renderer process
      typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron, // Main process
      typeof window.navigator === 'object' && typeof this._ua === 'string' && this._ua.indexOf('Electron') >= 0, // Detect the user agent when the `nodeIntegration` option is set to true
    ]), false, process.versions.electron);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Epiphany() {
    return this._checkAssertsResult(Asserts.one([
      /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(epiphany)\/([\w\.-]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Falkon() {
    return this._checkAssertsResult(Asserts.one([
      /(falkon)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Fennec() {
    return this._checkAssertsResult(Asserts.one([
      /(fennec)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Firebird() {
    return this._checkAssertsResult(Asserts.one([
      /(firebird)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Firefox() {
    return this._checkAssertsResult(Asserts.one([
      /(?:firefox|iceweasel)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(firefox)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get FirefoxFocus() {
    return this._checkAssertsResult(Asserts.one([
      /(?:focus)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
      /(focus)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get FirefoxMobile() {
    return this._checkAssertsResult(Asserts.one([
      this.FirefoxFocus,
      /(?:fxios)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /fxios\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Flock() {
    return this._checkAssertsResult(Asserts.one([
      /(flock)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get GoBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(gobrowser)\/?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get GoogleBot() {
    return this._checkAssertsResult(Asserts.one([
      /googlebot\/(\d+(\.\d+))/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get iCab() {
    return this._checkAssertsResult(Asserts.all([
      /(icab)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceApe() {
    return this._checkAssertsResult(Asserts.one([
      /(iceape)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(ice\s?browser)\/v?([\w\._]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceCat() {
    return this._checkAssertsResult(Asserts.one([
      /(icecat)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceDragon() {
    return this._checkAssertsResult(Asserts.one([
      /(icedragon)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iceweasel() {
    return this._checkAssertsResult(Asserts.one([
      /(iceweasel)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IE() {
    return this._checkAssertsResult(Asserts.all([
      /(msie|trident)/i.test(this._ua),
    ]) && Asserts.one([
      /(?:ms|\()(ie)\s([\w\.]+)/i.test(this._ua),
      /(?:msie |rv:)(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IEMobile() {
    return this._checkAssertsResult(Asserts.all([
      !this.IE,
    ]) && Asserts.one([
      /(iemobile)(?:browser)?[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iridium() {
    return this._checkAssertsResult(Asserts.one([
      /(iridium)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iron() {
    return this._checkAssertsResult(Asserts.one([
      /(iron)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Jasmine() {
    return this._checkAssertsResult(Asserts.one([
      /(jasmine)[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Konqueror() {
    return this._checkAssertsResult(Asserts.one([
      /(konqueror)\/([\w\.]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get KMeleon() {
    return this._checkAssertsResult(Asserts.one([
      /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(k-meleon)\/([\w\.-]+)$/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Links() {
    return this._checkAssertsResult(Asserts.one([
      /(links)\s\(([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Linx() {
    return this._checkAssertsResult(Asserts.one([
      /(lynx)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Lunascape() {
    return this._checkAssertsResult(Asserts.one([
      /(lunascape)[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Maemo() {
    return this._checkAssertsResult(Asserts.one([
      /(maemo\sbrowser)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Maxthon() {
    return this._checkAssertsResult(Asserts.one([
      /(?:Maxthon)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(maxthon)[\/\s]?([\w\.]*)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MaxthonMobile() {
    return this._checkAssertsResult(Asserts.one([
      /(?:mxios)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Midori() {
    return this._checkAssertsResult(Asserts.one([
      /(midori)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Minimo() {
    return this._checkAssertsResult(Asserts.one([
      /(minimo)[\/\s]?([\w\.\+]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MIUIBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /xiaomi\/miuibrowser\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Mosaic() {
    return this._checkAssertsResult(Asserts.one([
      /(mosaic)[\/\s]([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MZBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Netfront() {
    return this._checkAssertsResult(Asserts.one([
      /(netfront)[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Netscape() {
    return this._checkAssertsResult(Asserts.one([
      /(navigator|netscape)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get NetSurf() {
    return this._checkAssertsResult(Asserts.one([
      /NetSurf(?:\/(\d+[\.\d]+))?/i.test(this._ua),
      /(netsurf)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get NokiaBrowser() {
    return this._checkAssertsResult(Asserts.all([
      /(nokia\s?browser)\/v?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OmniWeb() {
    return this._checkAssertsResult(Asserts.all([
      /(omniweb)\/v?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Opera() {
    return this._checkAssertsResult(Asserts.one([
      /(?:opera)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(opera).+version\/([\w\.]+)/i.test(this._ua),
      /(opera)[\/\s]+([\w\.]+)/i.test(this._ua),
      /(?:opr)[\s/](\S+)/i.test(this._ua),
      /\s(opr)\/([\w\.]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMini() {
    return this._checkAssertsResult(Asserts.one([
      /(opera\smini)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaTouch() {
    return this._checkAssertsResult(Asserts.one([
      /(opt)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaCoast() {
    return this._checkAssertsResult(Asserts.one([
      /(?:coast)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(coast)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMobile() { // a.k.a. Opera Mobile || Opera Coast || Opera Mini || Opera Touch
    return this._checkAssertsResult(Asserts.one([
      this.OperaMini,
      this.OperaCoast,
      /(?:opios)[\s/](\S+)/i.test(this._ua),
      /(opios)[\/\s]+([\w\.]+)/i.test(this._ua),
      /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OviBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(ovibrowser)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Palemoon() {
    return this._checkAssertsResult(Asserts.one([
      /(palemoon)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Phoenix() {
    return this._checkAssertsResult(Asserts.one([
      /(phoenix)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get PhantomJS() {
    return this._checkAssertsResult(Asserts.one([
      /phantom/i.test(this._ua),
      /phantomjs\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(phantomjs)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Polaris() {
    return this._checkAssertsResult(Asserts.one([
      /(polaris)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Puffin() {
    return this._checkAssertsResult(Asserts.one([
      /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(puffin)\/([\w\.]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(qqbrowserlite)\/([\w\.]+)/i.test(this._ua),
      /(QQ)\/([\d\.]+)/i.test(this._ua),
      /m?(qqbrowser)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Quark() {
    return this._checkAssertsResult(Asserts.one([
      /(quark)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QupZilla() {
    return this._checkAssertsResult(Asserts.one([
      /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(qupzilla)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Reconq() {
    return this._checkAssertsResult(Asserts.one([
      /(rekonq)\/([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get RockMelt() {
    return this._checkAssertsResult(Asserts.one([
      /(rockmelt)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Safari() {
    return this._checkAssertsResult(Asserts.all([
      /safari|applewebkit/i.test(this._ua),
      !this.AndroidBrowser,
      !this.SafariMobile,
      !this.Chrome,
      !this.PhantomJS,
    ]) && Asserts.one([
      /Version\/(\d+[\.\d]+).*Safari\/|Safari\/\d+/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SafariMobile() {
    return this._checkAssertsResult(Asserts.all([
      /iphone|ipad|ipod/i.test(this._ua),
      !this.AndroidBrowser,
      !this.Chrome,
      !this.PhantomJS,
    ]) && Asserts.one([
      /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this._ua),
      /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this._ua),
      /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Sailfish() {
    return this._checkAssertsResult(Asserts.one([
      /sailfish\s?browser\/(\d+(\.\d+)?)/i.test(this._ua),
      /SailfishBrowser(?:\/(\d+[\.\d]+))?/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SamsungBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SeaMonkey() {
    return this._checkAssertsResult(Asserts.one([
      /seamonkey\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(seamonkey)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Silk() {
    return this._checkAssertsResult(Asserts.one([
      /silk\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(silk)\/([\w\.-]+)/i.test(this._ua),
      /(kindle)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Skyfire() {
    return this._checkAssertsResult(Asserts.one([
      /(skyfire)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Sleipnir() {
    return this._checkAssertsResult(Asserts.one([
      /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(sleipnir)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Slim() {
    return this._checkAssertsResult(Asserts.all([
      /(slim)(?:browser)?[\/\s]?([\w\.]*)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SlimerJS() {
    return this._checkAssertsResult(Asserts.one([
      /slimerjs\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Swing() {
    return this._checkAssertsResult(Asserts.all([
      /(?:swing)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get TizenBrowser() {
    return this._checkAssertsResult(Asserts.all([
      /(tizen\s?browser)\/v?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get UCBrowser() {
    return this._checkAssertsResult(Asserts.all([
      /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Vivaldi() {
    return this._checkAssertsResult(Asserts.all([
      /vivaldi\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(vivaldi)\/([\w\.-]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get w3m() {
    return this._checkAssertsResult(Asserts.all([
      /(w3m)[\/\s]?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Waterfox() {
    return this._checkAssertsResult(Asserts.one([
      /(waterfox)\/([\w\.-]+)$/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get WebOSBrowser() {
    return this._checkAssertsResult(Asserts.one([
      /(web|hpw)[o0]s/i.test(this._ua),
      /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get WeChat() {
    return this._checkAssertsResult(Asserts.one([
      /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(micromessenger)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Whale() {
    return this._checkAssertsResult(Asserts.all([
      /(?:whale)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Yandex() {
    return Asserts.one([
      /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @param {boolean} [assertsResult=false]
   * @param {boolean} [inverted=false]
   * @param {any} [version=null]
   * @returns
   *
   * @memberOf Browser
   */
  _checkAssertsResult(assertsResult = false, inverted = false, version = null) {
    if (assertsResult) {
      this.setVersion(version, inverted);

      return true;
    }

    return false;
  }

  /**
   *
   *
   * @param {any} [version=null]
   * @param {boolean} [inverted=false]
   *
   * @memberOf Browser
   */
  setVersion(version = null, inverted = false) {
    if (inverted) {
      version = version || this.version || RegExp.$1 || 'u/a';
    } else {
      version = version || RegExp.$1 || this.version || 'u/a';
    }

    this.version = version.replace(/_/ig, '.');
  }
}
