class Tool {
  constructor(id) {
    this.id = id;
  }
  // Element
  click(cb) {
    document.getElementById(this.id).onclick = cb;
  }
  css(props) {
    Object.entries(props).forEach(([
      selector,
      value
    ]) => document.getElementById(this.id).style[selector] = value);
  }
  disabled(bool) {
    document.getElementById(this.id).disabled = bool;

    return this;
  }
  html(val) {
    document.getElementById(this.id).innerHTML = val;

    return this;
  }
  remove() {
    document.getElementById(this.id).remove();
  }
  insert(place, str) {
    document.getElementById(this.id).insertAdjacentHTML(place, str);
  }
  listen(evt, cb) {
    document.getElementById(this.id).addEventListener(evt, cb);
  }
  src(val) {
    document.getElementById(this.id).src = val;
  }
  value() {
    return document.getElementById(this.id).value;
  }
  setValue(val) {
    document.getElementById(this.id).value = val;
  }
  checked() {
    return document.getElementById(this.id).checked;
  }
  // Query
  all() {
    return document.querySelectorAll(this.id);
  }
}

const _ = (id) => new Tool(id);

// MONGO DB
const balance = {};
const user = {
  xp: 0,
  xp_req: 10,
  lv: 1
}

let { xp, xp_req, lv } = user

const coins = [
  { // Bitcoin
    name: 'Bitcoin',
    token: 'btc',
    color: '247, 147, 26',
    url: 'https://bitcoin.org/',
    source: 'https://github.com/bitcoin/',
    info: 'Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.'
  },
  { // Bitcoin Cash
    name: 'Bitcoin Cash',
    token: 'bch',
    color: '141, 195, 81',
    url: 'https://www.bitcoincash.org/',
    source: 'https://github.com/bitcoincashorg/',
    info: 'Bitcoin Cash brings sound money to the world, fulfilling the original promise of Bitcoin as "Peer-to-Peer Electronic Cash". Merchants and users are empowered with low fees and reliable confirmations. The future shines brightly with unrestricted growth, global adoption, permissionless innovation, and decentralized development.'
  },
  { // Cardano
    name: 'Cardano',
    token: 'ada',
    color: '13, 30, 48',
    url: 'https://www.cardano.org/',
    source: 'https://github.com/input-output-hk/cardano-sl/',
    info: 'Cardano is a decentralised public blockchain and cryptocurrency project and is fully open source. Cardano is developing a smart contract platform which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers'
  },
  { // Dash
    name: 'Dash',
    token: 'dash',
    color: '0, 140, 231',
    url: 'https://www.dash.org/',
    source: 'https://github.com/dashpay/dash',
    info: 'Use Dash to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.'
  },
  { // Dogecoin
    name: 'Dogecoin',
    token: 'doge',
    color: '195, 166, 52',
    url: 'http://dogecoin.com/',
    source: 'https://github.com/dogecoin/dogecoin',
    info: 'Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide.'
  },
  { // EOS
    name: 'EOS',
    token: 'eos',
    color: '0, 0, 0',
    url: 'https://eos.io/',
    source: 'https://github.com/eosio',
    info: 'EOSIO is software that introduces a blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications (the "EOSIO Software"). This is achieved through an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication and the scheduling of applications across multiple CPU cores and/or clusters. The resulting technology is a blockchain architecture that has the potential to scale to millions of transactions per second, eliminates user fees and allows for quick and easy deployment of decentralized applications. '
  },
  { // Etherum
    name: 'Ethereum',
    token: 'eth',
    color: '98, 126, 234',
    url: 'https://www.ethereum.org/',
    source: 'https://github.com/ethereum',
    info: 'Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.'
  },
  { // Ethereum Classic
    name: 'Ethereum Classic',
    token: 'etc',
    color: '50, 131, 50',
    url: 'https://ethereumclassic.org/',
    source: 'https://github.com/ethereumproject',
    info: 'Ethereum Classic (ETC) is a smarter blockchain, it is a network, a community, and a cryptocurrency that takes digital assets further. In addition to allowing people to send value to each other, ETC allows for complex contracts that operate autonomously and cannot be modified or censored.'
  },
  { // Litecoin
    name: 'Litecoin',
    token: 'ltc',
    color: '191, 187, 187',
    url: 'https://litecoin.com/',
    source: 'https://github.com/litecoin-project/litecoin',
    info: 'Litecoin is decentralised money for the internet age, free from censorship and open to anyone. Private, secure, borderless payments for pennies anytime, anywhere. 💯 fully controlled by you.'
  },
  { // Monero
    name: 'Monero',
    token: 'xmr',
    color: '255, 102, 0',
    url: 'http://www.monero.cc/',
    source: 'https://github.com/monero-project/monero',
    info: 'Monero is cash for a connected world. It\'s fast, private, and secure. With Monero, you are your own bank. You can spend safely, knowing that others cannot see your balances or track your activity.'
  },
  { // Ripple
    name: 'Ripple',
    token: 'xrp',
    color: '35, 41, 47',
    url: 'https://ripple.com/xrp/',
    source: 'https://github.com/ripple',
    info: 'Built for enterprise use, XRP offers banks and payment providers a reliable, on-demand option to source liquidity for cross-border payments.'
  },
  { // Stellar
    name: 'Stellar',
    token: 'xlm',
    color: '20, 182, 231',
    url: 'https://www.stellar.org/',
    source: 'https://github.com/stellar',
    info: 'Stellar is a platform that connects banks, payments systems, and people. Integrate to move money quickly, reliably, and at almost no cost.'
  },
  { // TRON
    name: 'TRON',
    token: 'trx',
    color: '0, 0, 0',
    url: 'https://tron.network/',
    source: 'https://github.com/tronprotocol',
    info: 'TRON is an ambitious project dedicated to the establishment of a truly decentralized Internet and its infrastructure.'
  },
  { // Zcash
    name: 'Zcash',
    token: 'zec',
    color: '236, 178, 68',
    url: 'https://z.cash/',
    source: 'https://github.com/zcash/zcash',
    info: 'Like Bitcoin, Zcash transaction data is posted to a public blockchain; but unlike Bitcoin, Zcash ensures your personal and transaction data remain completely confidential. Zero-knowledge proofs allow transactions to be verified without revealing the sender, receiver or transaction amount. Selective disclosure features within Zcash allow a user to share some transaction details, for purposes of compliance or audit.'
  }
];

const engine = {
  state(id) {
    history.pushState({id}, '', `/${id}`);
  },

  render(component, elem, data) {
    if(!component || !elem) {
      console.error('Component and / or elem are required to render')
      return 0
    }
    else {
      if(!data) {
        return new component(elem).init()
      }
      else if(typeof data === 'object' && !Array.isArray(data)) {
        return new component(elem, data).init()
      }
      else if(Array.isArray(data)) {
        data.forEach((props) => new component(elem, props).init())
      }
    }
  }
}

const component_first_load = {}

// _
class Component {
  constructor(elem, props) {
    const { name } = this.constructor

    if(!component_first_load[name]) {
      component_first_load[name] = false
    }

    this.elem = elem
    this.css_style = ''

    if(props) {
      this.props = props

      if(props.name) {
        this.props.id = props.name.split(' ').join('_').toLowerCase()
      }
    }
  }

  raw(literals, ...vars) {  
    let raw = literals.raw
    let result = ''
    let i = 0
    let len = literals.length
    let str
    let variable
  
    while(i < len) {
      str = raw[i]
  
      if(vars[i] !== undefined) {
        variable = vars[i]
      }
      else {
        variable = ''
      }
  
      result += str + variable
  
      i += 1
    }
  
    //result += raw[raw.length - 1]
  
    return result
  }

  html() {
    const { name } = this.constructor

    return this.raw`
      <section>${name} html is not defined</section>
    `
  }

  css() {
    this.css_style = 'css is not defined'
    return ''
  }

  apply_css() {
    if(this.css_style !== 'css is not defined') {
      const style = document.createElement('style')
      style.textContent = this.css()
      document.head.appendChild(style)
    }
  }

  on_first_mount() {}

  on_mount() {}

  init() {
    const { elem } = this
    const { name } = this.constructor

    _(elem).insert('beforeend', this.html())

    if(!component_first_load[name]) {
      this.apply_css()
      this.on_first_mount()

      component_first_load[name] = true
    }

    this.on_mount()
  }
}

class Notify extends Component {
  constructor(elem, props) {
    super(elem, props)

    this.props.id = Math.random()
  }

  html() {
    const { id, msg } = this.props

    return this.raw`
      <section class="notify" id="${id}_notify">
        <p>${msg}</p>
      </section>
    `
  }

  on_mount() {
    const { id } = this.props

    _(`${id}_notify`).click(() => _(`${id}_notify`).remove())
  }
}

class CoinPage extends Component {
  html() {
    const { id, name, token, url, source, info } = this.props
    
    return this.raw`
      <div class="coin-dashboard" id="${id}_dashboard">
        <aside class="coin-dashboard__aside">
          <header>
            <h1>${name}</h1>
          </header>
          <a href="${url}" target="_blank">
            <i class="link fas fa-globe fa-2x fa-fw"></i>
          </a>
          <a href="${source}" target="_blank">
            <i class="link fab fa-github fa-2x fa-fw"></i>
          </a>
          <hr>
          <p>${info}</p>
        </aside>

        <main class="coin-dashboard__main">
          <div class="rewards">
            <h3>+0.00025 ${token}</h3>
            <h3>+1 XP</h3>
          </div>
          <button
            class="claim"
            type="button"
            id="${id}_claim"
          >Collect Now!</button>
        </main>
      </div>
    `;
  }

  on_mount() {
    const { id, token, color } = this.props

    _(`${id}_claim`).click(() => {
      _(`${id}_claim`)
        .disabled(true)
        .html('<i class="spin fas fa-spinner fa-fw"></i>');

      // simulate callback
      const cb = setTimeout(() => {
        balance[token] += 0.00025;
        _(`${id}_balance`).html(balance[token].toFixed(8));

        xp += 1;
        _('user_xp').html(`${xp} / ${xp_req}`);

        _('xp_prog').css({
          width: `${xp * 100 / xp_req}%`
        });

        if(xp >= xp_req) {
          lv += 1;
          _('user_lv').html(lv);

          xp = 0;
          xp_req = (xp_req + xp_req) * lv;
          _('user_xp').html(`${xp} / ${xp_req}`);

          _('xp_prog').css({
            width: `${xp * 100 / xp_req}%`
          });

          new Notify('notifys', {
            msg: `Congratulations, you have reached Lv ${lv}.`
          }).render();
        }

        _(`${id}_claim`)
          .disabled(false)
          .html('Collect Now!');

        engine.render(Notify, 'notifys', {
          msg: `You have successfully collected <span style="color: rgb(${color})">0.00025 ${token}</span>, and received 1 XP`
        })
      }, 2000)

      //cb;
    });
  }
}

class Coin extends Component {
  html() {
    const { id, name, token } = this.props

    return this.raw`
      <x-coin id="${id}_go">
        <div class="coin-bar" id="${id}_bar"></div>
        <img class="coin-img" src="images/coins/${token}.webp">
        <section>
          <p>${name}</p>
          <h3><span id="${id}_balance"></span> ${token.toUpperCase()}</h3>
        </section>
      </x-coin>
    `
  }

  on_mount() {
    const { id, name, token, color, url, source, info } = this.props

    _(`${id}_bar`).css({
      backgroundColor: `rgb(${color})`
    });

    balance[token] = 0;
    _(`${id}_balance`).html(balance[token].toFixed(8));

    _(`${id}_go`).click(() => {
      _('main').html('');

      _('.coin-bar').all().forEach(({id}) => _(id).css({opacity: '0'}));

      _(`${id}_bar`).css({
        opacity: '1'
      })

      //engine.state(id);

      engine.render(CoinPage, 'main', { name, token, color, url, source, info })
    })
  }
}

class App extends Component {
  html() {
    return this.raw`
      <section class="user">
        <section class="user-stats">
          <h3>Level <span class="f--blue" id="user_lv"></span></h3>
          <h3>XP <span class="f--blue" id="user_xp"></span></h3>
        </section>
        <section class="user-bar">
          <div class="user-bar__prog stripes" id="xp_prog"></div>
        </section>
      </section>

      <section class="coin-menu" id="coin_menu"></section>

      <section class="main" id="main">
        <p>best_homepage_ever.jpg</p>
      </section>

      <section class="ad-spot">
        <p>GOOGLE AD</p>
      </section>

      <div class="notifys" id="notifys"></div>
    `
  }

  on_mount() {
    engine.render(Coin, 'coin_menu', coins)

    _('user_lv').html(lv);
    _('user_xp').html(`${xp} / ${xp_req}`);
  }
}

window.onload = () => engine.render(App, 'app')

//window.onpopstate = (state) => {};
