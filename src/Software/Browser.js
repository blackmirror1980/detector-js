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
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='browser']
   *
   * @memberOf Browser
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'browser') {
    super(ua, flags, cssFlagsPrefix);

    this._createTestElements();

    this.setVersion();
  }

  /**
   *
   *
   *
   * @memberOf Browser
   */
  _createTestElements() {
    this._reStrVerNum = '(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?';
    this._reStrVer = '(?:version)' + this._reStrVerNum;
    this._reVer = new RegExp(this._reStrVer, 'i');

    this._ua.match(this._reVer);
  }

  // /**
  //  *
  //  *
  //  *
  //  * @memberOf Browser
  //  */
  // _destroyTestElements() {
  //   this._reStrVerNum = null;
  //   this._reStrVer = null;
  //   this._reVer = null;

  //   delete this._reStrVerNum;
  //   delete this._reStrVer;
  //   delete this._reVer;
  // }

  _reTest(reStr = this._reStrVer) {
    return new RegExp(reStr, 'i').test(this._ua);
  }

  //#region Un-Common/Rare/Mythic Browsers
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Amaya() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest('(?:amaya)' + this._reStrVerNum),
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
      this._reTest('(?:arora)' + this._reStrVerNum),
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
    return this._checkAssertsResult(Asserts.one([
      this._reTest('(?:avant(?:\sbrowser))' + this._reStrVerNum),
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
      this._reTest('(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)' + this._reStrVerNum),
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
      this._reTest('(?:basilisk)' + this._reStrVer),
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
    return this._checkAssertsResult(Asserts.all([
      this._reTest('(?:blackberry|bb.*;.*\\)\\s)' + this._reStrVer),
    ]));
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
      this._reTest('(?:blazer)' + this._reStrVerNum),
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
      this._reTest('(?:bolt)' + this._reStrVerNum),
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
      !!window.navigator.brave || !!window.navigator.Brave,
      this._reTest('(?:brave)' + this._reStrVerNum),
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
      this._reTest('(?:camino)' + this._reStrVerNum),
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
      this._reTest('(?:chimera)' + this._reStrVerNum),
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
      this._reTest('(?:comodo(?:\\_|\\s)dragon)' + this._reStrVerNum),
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
      this._reTest('(?:conkeror)' + this._reStrVerNum),
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
      this._reTest('(?:dillo)' + this._reStrVerNum),
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
      this._reTest('(?:dolfin)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:dorado.+ser)' + this._reStrVerNum),
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
      this._reTest('(?:doris)' + this._reStrVerNum),
    ]));
  }

  _getElectronVersion() {
    try {
      return this._process.versions.electron;
    } catch (e) {
      return 'n/a';
    }
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
      () => this._process.type === 'renderer', // Renderer process
      () => !!this._process.versions.electron, // Main process
      () => !!this._navigator && this._reTest('electron'), // Detect the user agent when the `nodeIntegration` option is set to true
    ], true), false, this._getElectronVersion());
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
      this._reTest('(?:epiphany)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:falkon)' + this._reStrVerNum),
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
      this._reTest('(?:fennec)' + this._reStrVerNum),
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
      this._reTest('(?:firebird)' + this._reStrVerNum),
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
      this._reTest('(?:flock)' + this._reStrVerNum),
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
      this._reTest('(?:gobrowser)' + this._reStrVerNum),
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
      this._reTest('(?:googlebot)' + this._reStrVerNum),
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
      this._reTest('(?:icab)' + this._reStrVerNum),
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
      this._reTest('(?:iceape)' + this._reStrVerNum),
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
      this._reTest('(?:ice\s?browser)' + this._reStrVerNum),
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
      this._reTest('(?:icecat)' + this._reStrVerNum),
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
      this._reTest('(?:icedragon)' + this._reStrVerNum),
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
      this._reTest('(?:iridium)' + this._reStrVerNum),
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
      this._reTest('(?:iron)' + this._reStrVerNum),
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
      this._reTest('(?:jasmine)' + this._reStrVerNum),
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
      this._reTest('(?:konqueror)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:k-meleon)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:links)' + this._reStrVerNum),
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
      this._reTest('(?:lynx)' + this._reStrVerNum),
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
      this._reTest('(?:lunascape)' + this._reStrVerNum),
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
      this._reTest('(?:maemo\sbrowser)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:mxios)' + this._reStrVerNum),
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
    return this._checkAssertsResult(Asserts.all([
      !this.MaxthonMobile,
      this._reTest('(?:maxthon|mxnitro)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:midori)' + this._reStrVerNum),
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
      this._reTest('(?:minimo)' + this._reStrVerNum),
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
      this._reTest('(?:xiaomi\\/miuibrowser)' + this._reStrVerNum),
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
      this._reTest('(?:mosaic)' + this._reStrVerNum),
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
      this._reTest('(?:MZBrowser)' + this._reStrVerNum),
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
      this._reTest('(?:netfront)' + this._reStrVerNum),
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
      this._reTest('(?:navigator|netscape)' + this._reStrVerNum),
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
      this._reTest('(?:netsurf)' + this._reStrVerNum),
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
      this._reTest('(?:nokia\s?browser)' + this._reStrVerNum),
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
      this._reTest('(?:omniweb)' + this._reStrVerNum),
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
      this._reTest('(?:ovibrowser)' + this._reStrVerNum),
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
      this._reTest('(?:palemoon)' + this._reStrVerNum),
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
      this._reTest('(?:phoenix)' + this._reStrVerNum),
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
      this._reTest('(?:phantomjs)' + this._reStrVerNum),
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
      this._reTest('(?:polaris)' + this._reStrVerNum),
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
      this._reTest('(?:puffin)' + this._reStrVerNum),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowserMobile() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest('(?:mqq(?:browser)?)' + this._reStrVerNum),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowser() {
    return this._checkAssertsResult(Asserts.all([
      !this.QQBrowserMobile,
      this._reTest('(?:qq(?:browser)?(?:lite)?)' + this._reStrVerNum),
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
      this._reTest('(?:quark)' + this._reStrVerNum),
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
      this._reTest('(?:qupzilla)' + this._reStrVerNum),
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
      this._reTest('(?:rekonq)' + this._reStrVerNum),
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
      this._reTest('(?:rockmelt)' + this._reStrVerNum),
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
      this._reTest('(?:sailfish(?:\s?browser))' + this._reStrVerNum),
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
      this._reTest('(?:samsungbrowser)' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:seamonkey)' + this._reStrVerNum),
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
      this._reTest('(?:silk)' + this._reStrVerNum),
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
      this._reTest('(?:skyfire)' + this._reStrVerNum),
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
      this._reTest('(?:sleipnir)' + this._reStrVerNum),
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
      this._reTest('(?:slim(?:browser)?)' + this._reStrVerNum),
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
      this._reTest('(?:slimerjs)' + this._reStrVerNum),
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
      this._reTest('(?:swing)' + this._reStrVerNum),
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
      this._reTest('(?:tizen(?:browser)?)' + this._reStrVerNum),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get UCBrowser() { // a.k.a. UCBrowserMobile || UCBrowserMini
    return this._checkAssertsResult(Asserts.all([
      this._reTest('(?:uc(?:mini|browser))' + this._reStrVerNum),
    ]));
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
      this._reTest('(?:vivaldi)' + this._reStrVerNum),
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
      this._reTest('(?:w3m)' + this._reStrVerNum),
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
      this._reTest('(?:waterfox)' + this._reStrVerNum),
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
      this._reTest('(?:w(?:eb)?osbrowser)' + this._reStrVerNum),
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
      this._reTest('(?:micromessenger)' + this._reStrVerNum),
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
      this._reTest('(?:whale)' + this._reStrVerNum),
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
      this._reTest('(?:ya(?:browser|ndex))' + this._reStrVerNum),
    ]);
  }
  //#endregion

  //#region Common Browsers
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get AndroidBrowser() {
    return this._checkAssertsResult(Asserts.all([
      !this._reTest('like android'),
      this._reTest('(?:android.*)' + this._reStrVer),
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
    return this._checkAssertsResult(Asserts.all([
      !this._reTest('like chrome'),
      this._reTest('((?:android.+)crmo|crios)' + this._reStrVerNum),
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
      !this.Brave,
      !this.ChromeMobile,
      !this.AndroidBrowser,
      !this._reTest('like chrome'),
      this._reTest('(?:(?:headless)?chrome)' + this._reStrVerNum),
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
      this._reTest('(?:chromium)' + this._reStrVerNum),
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
    return this._checkAssertsResult(Asserts.one([
      this._reTest('(?:edg(?:ios|a))' + this._reStrVerNum),
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
      this._reTest('(?:^(?:(?!mobile|android|ios).)*)(?:edge)' + this._reStrVerNum),
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
      this._reTest('(?:focus)' + this._reStrVerNum),
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
      this._reTest('(?:fxios)' + this._reStrVerNum),
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
      this._reTest('(?:firefox|iceweasel)' + this._reStrVerNum),
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
    return this._checkAssertsResult(Asserts.one([
      this._reTest('(?:iemobile)' + this._reStrVerNum),
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
      !this.IEMobile,
      /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this._ua),
    ]));
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
      this._reTest('(?:opera\smini)' + this._reStrVerNum),
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
      this._reTest('(?:opt)' + this._reStrVerNum),
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
      this._reTest('(?:coast)' + this._reStrVerNum),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMobile() { // a.k.a. Opera Mobile || Opera Coast || Opera Mini || Opera Touch || Opera iOS
    return this._checkAssertsResult(Asserts.one([
      !!this._root.opera,
      !!this._root.opr,
    ]) && Asserts.one([
      this.OperaMini,
      this.OperaCoast,
      this.OperaTouch,
      this._reTest('(?:op(?:r|ios))' + this._reStrVerNum),
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
      !!this._root.opera,
      !!this._root.opr,
    ]) && Asserts.all([
      !this.OperaMobile,
    ]) && Asserts.one([
      this._reTest('(?:op(?:era|r)|mms)' + this._reStrVerNum),
    ]), true);
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
      /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(this._ua),
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
      /(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this._ua),
    ]));
  }
  //#endregion

  /**
   *
   *
   * @param {boolean} [assertsResult=false]
   * @param {boolean} [inverted=false]
   * @param {any} [version=null]
   * @returns boolean
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
      version = version || this.version || RegExp.$1 || 'n/a';
    } else {
      version = version || RegExp.$1 || this.version || 'n/a';
    }

    this.version = version.replace(/_/ig, '.');
  }
}
