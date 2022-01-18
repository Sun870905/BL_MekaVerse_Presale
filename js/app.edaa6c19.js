(function(e) {
  function t(t) {
    for (var c, n, i = t[0], r = t[1], d = t[2], b = 0, f = []; b < i.length; b++) n = i[b], Object.prototype.hasOwnProperty.call(s, n) && s[n] && f.push(s[n][0]), s[n] = 0;
    for (c in r) Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
    l && l(t);
    while (f.length) f.shift()();
    return o.push.apply(o, d || []), a()
  }

  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], c = !0, i = 1; i < a.length; i++) {
        var r = a[i];
        0 !== s[r] && (c = !1)
      }
      c && (o.splice(t--, 1), e = n(n.s = a[0]))
    }
    return e
  }
  var c = {},
    s = {
      app: 0
    },
    o = [];

  function n(t) {
    if (c[t]) return c[t].exports;
    var a = c[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
  }
  n.m = e, n.c = c, n.d = function(e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    })
  }, n.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var c in e) n.d(a, c, function(t) {
        return e[t]
      }.bind(null, c));
    return a
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e["default"]
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/";
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
    r = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var d = 0; d < i.length; d++) t(i[d]);
  var l = r;
  o.push([0, "chunk-vendors"]), a()
})({
  0: function(e, t, a) {
    e.exports = a("56d7")
  },
  1: function(e, t) {},
  10: function(e, t) {},
  11: function(e, t) {},
  12: function(e, t) {},
  13: function(e, t) {},
  14: function(e, t) {},
  15: function(e, t) {},
  16: function(e, t) {},
  17: function(e, t) {},
  18: function(e, t) {},
  19: function(e, t) {},
  2: function(e, t) {},
  20: function(e, t) {},
  3: function(e, t) {},
  "39d4": function(e, t, a) {},
  4: function(e, t) {},
  5: function(e, t) {},
  56633: function(e, t, a) {
    "use strict";
    a("39d4")
  },
  "56d7": function(e, t, a) {
    "use strict";
    a.r(t);
    var c = a("7a23");
    const s = {
      id: "project"
    };

    function o(e, t, a, o, n, i) {
      const r = Object(c["G"])("router-view"),
        d = (Object(c["G"])("admin"), Object(c["G"])("notif")),
        l = Object(c["G"])("svg-ico");
      return Object(c["y"])(), Object(c["g"])("div", s, [Object(c["k"])(r, null, {
        default: Object(c["P"])(({
          Component: e,
          route: t
        }) => [Object(c["k"])(c["b"], {
          name: "Home" === t.name ? "" : "route",
          mode: "out-in"
        }, {
          default: Object(c["P"])(() => [(Object(c["y"])(), Object(c["e"])(Object(c["H"])(e)))]),
          _: 2
        }, 1032, ["name"])]),
        _: 1
      }), (e.$store.getters.isOwner, Object(c["f"])("", !0)), Object(c["k"])(d), Object(c["k"])(l)])
    }
    const n = e => {
        const t = window;
        return t.windowEnv && t.windowEnv[e] ? t.windowEnv[e] : Object({
          VUE_APP_NOMBRE_NFT: "10000",
          VUE_APP_OPENSEA_FRONTEND_URI: "https://testnets.opensea.io",
          VUE_APP_ABI_FILE: "Contract",
          VUE_APP_BACKEND_URI: "http://127.0.0.1:5000",
          VUE_APP_BLOCKCHAIN_ADDRESS: "https://rinkeby.infura.io/v3/",
          VUE_APP_METADATAS_DEFAULT_IMAGE: "hidden.gif",
          VUE_APP_REVEAL_DATE: "2021-08-24T20:00:00.000Z",
          VUE_APP_NETWORK_ID: "30",
          VUE_APP_CONTRACT_ADDRESS: "0x57a204aa1042f6e66dd7730813f4024114d74f37",
          VUE_APP_TRACKING: "",
          VUE_APP_NOMBRE_PAR_MINT: "20",
          VUE_APP_SALE_DATE: "2021-08-20T20:00:00.000Z",
          VUE_APP_PRIX: "0.04",
          VUE_APP_DISCORD_BOT_SOLD_URL: "",
          VUE_APP_METADATAS_ROUTE: "element",
          VUE_APP_ETHERSCAN_URI: "https://rinkeby.etherscan.io",
          VUE_APP_METADATAS_NAME: "Mon super projet",
          VUE_APP_OWNER_ADDRESS: "",
          NODE_ENV: "production",
          BASE_URL: "/"
        })[e]
      },
      i = {
        NODE_ENV: n("NODE_ENV"),
        NAME: n("VUE_APP_METADATAS_NAME"),
        SLUG: n("VUE_APP_METADATAS_ROUTE"),
        DEFAULT_IMAGE: n("VUE_APP_METADATAS_DEFAULT_IMAGE"),
        REVEAL_DATE: n("VUE_APP_REVEAL_DATE"),
        SALE_DATE: n("VUE_APP_SALE_DATE"),
        NOMBRE_NFT: parseInt(n("VUE_APP_NOMBRE_NFT")),
        NOMBRE_PAR_MINT: parseInt(n("VUE_APP_NOMBRE_PAR_MINT")),
        PRIX: parseFloat(n("VUE_APP_PRIX")),
        NETWORK_ID: n("VUE_APP_NETWORK_ID"),
        OWNER_ADDRESS: n("VUE_APP_OWNER_ADDRESS"),
        CONTRACT_ADDRESS: n("VUE_APP_CONTRACT_ADDRESS"),
        BACKEND_URI: n("VUE_APP_BACKEND_URI"),
        ABI_FILE: n("VUE_APP_ABI_FILE"),
        OPENSEA_FRONTEND_URI: n("VUE_APP_OPENSEA_FRONTEND_URI"),
        ETHERSCAN_URI: n("VUE_APP_ETHERSCAN_URI"),
        DISCORD_BOT_SOLD_URL: n("VUE_APP_DISCORD_BOT_SOLD_URL")
      };
    var r = {
      name: i.NAME,
      namePlural: i.NAME,
      slug: i.SLUG,
      envs: i,
      mint: {
        price: i.PRIX,
        min: 1,
        max: i.NOMBRE_PAR_MINT,
        total: i.NOMBRE_NFT
      },
      dates: {
        startSales: i.SALE_DATE,
        reveal: i.REVEAL_DATE
      },
      texts: {
        openSalesIn: "Opening sales in",
        revealIn: "Reaveal in",
        revealDate: "Reaveal",
        revealAt: "at",
        description: "",
        mintButton: "Mint yours",
        mintButtonProcessing: "Mint",
        mintSoldOut: "Sold Out!",
        countToken: "You have got %count% %name%",
        noToken: "You have no %name%",
        clickToReveal: "Click to reveal"
      },
      notif: {
        globalBadNetwork: {
          message: "You are not on the %network% network.",
          type: "error"
        },
        globalConnected: {
          message: "You are connected!",
          type: "success"
        },
        mintNotConnected: {
          message: "You need to connect to MetaMask",
          type: "error"
        },
        mintCountInfMin: {
          message: "You need to mint at least %minByMint% %name%",
          type: "error"
        },
        mintCountSupMax: {
          message: "You can't mint more than %maxByMint% %namePlural%",
          type: "error"
        },
        mintNotEnough: {
          message: "You don’t have enough ETH on your wallet.",
          type: "error"
        },
        mintErrorMint: {
          message: "An error occurred during minting.",
          type: "error"
        },
        mintSuccessMint: {
          message: "You bought %count% %name%",
          type: "success"
        },
        mintSaleNotOpen: {
          message: "Be patient, you will able to have your %name% at the end of the countdown",
          type: "info"
        },
        mintSoldOut: {
          message: "Too late! It's sold out!",
          type: "success"
        }
      },
      discordBot: {
        mintSuccessMint: {
          title: "%name% Sold!",
          description: "Someone just bought %count% %name%!",
          totalLeft: "%name% minted"
        }
      },
      links: {
        twitter: "https://twitter.com/MekaVerse",
        collection: "https://opensea.io/collection/mekaverse",
        discord: "https://discord.com/invite/mekaverse"
      },
      notifFactory(e, t) {
        let a = this.notif[e].message;
        return a = this.replaceText(a, t), {
          message: a,
          type: this.notif[e].type
        }
      },
      replaceText(e, t) {
        let a = !1;
        if (t)
          for (const [c, s] of Object.entries(t)) e = e.replace(c, s), "%count%" === c && parseInt(s) > 1 && (a = !0);
        return e.match(/\%name\%/) && (e = e.replace("%name%", a ? this.namePlural : this.name)), e.match(/\%namePlural\%/) && (e = e.replace("%namePlural%", this.namePlural)), e.match(/\%minByMint\%/) && (e = e.replace("%minByMint%", this.mint.min)), e.match(/\%maxByMint\%/) && (e = e.replace("%maxByMint%", this.mint.max)), e.match(/\%network\%/) && (e = e.replace("%network%", d())), e
      }
    };

    function d() {
      let e = "develop";
      return 4 == i.NETWORK_ID && (e = "rinkeby"), 1 == i.NETWORK_ID && (e = "mainnet"), e
    }
    var l = a("5502"),
      b = Object(l["a"])({
        state() {
          return {
            userAccount: null,
            web3: null,
            contract: null,
            hasAbiFiles: !1,
            userTokens: [],
            minted: 0,
            dateSales: "",
            salesStarted: !1,
            mintProcessing: !1,
            isReveal: !1
          }
        },
        getters: {
          isConnected: e => null !== e.userAccount && "" !== e.userAccount && "string" === typeof e.userAccount,
          userAccount: e => e.userAccount,
          web3: e => e.web3,
          contract: e => e.contract,
          isAuth: (e, t) => e.userTokens.length > 0 && t.isConnected,
          userTokens: e => e.userTokens || [],
          userTokensCount: e => e.userTokens.length || 0,
          totalLeft: e => r.mint.total - e.minted,
          totalMinted: e => e.minted,
          isSoldOut: (e, t) => 0 === t.totalLeft,
          mintProcessing: e => e.mintProcessing,
          salesStarted: e => e.salesStarted,
          hasContract: e => e.hasAbiFiles && "0x00" !== i.CONTRACT_ADDRESS,
          dateSales: e => "" === e.dateSales ? r.dates.startSales : e.dateSales,
          isOwner: e => e.userAccount === i.OWNER_ADDRESS,
          isReveal: e => e.isReveal,
          getLocalStorage: e => (t, a = !1) => {
            let c = e.localStorageWallet;
            return "undefined" === typeof c[t] || null === c[t] ? a : c[t]
          },
          setLocalStorage: e => (t, a) => {
            e.localStorageWallet[t] = a, localStorage[e.userAccount] = JSON.stringify(e.localStorageWallet)
          }
        },
        actions: {
          refreshWallet({
            commit: e,
            getters: t
          }) {
            e("REFRESH_WALLET", {
              getters: t
            })
          },
          checkSaleOpens({
            commit: e
          }) {
            e("SALE_OPENS")
          }
        },
        mutations: {
          SALE_OPENS: async e => {
            e.salesStarted = await C.call("salesIsOpen"), console.log("salesIsOpen", e.salesStarted)
          },
          REFRESH_WALLET: async (e, {
            getters: t
          }) => {
            e.minted = await C.call("totalMint");
            let a = await C.call("getStartSales");
            if (a > 0) {
              let t = new Date(1e3 * a);
              e.dateSales = t.toISOString()
            } else e.dateSales = "";
            e.salesStarted = await C.call("salesIsOpen"), "undefined" !== typeof localStorage[e.userAccount] && null !== localStorage[e.userAccount] && (e.localStorageWallet = JSON.parse(localStorage[e.userAccount])), t.isConnected && (e.userTokens = await C.call("walletOfOwner", e.userAccount))
          }
        }
      }),
      f = a("99e5"),
      h = a.n(f),
      u = a("bc3a"),
      A = a.n(u),
      E = {
        number(e, t) {
          "string" === typeof e && (e = parseFloat(e));
          let a = e;
          a = t || 0 === t ? e.toFixed(t) : e < 0 ? e.toFixed(5) : e.toFixed(3);
          let c = a.toString().split(".");
          return c[0] = c[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), (c[0].length > 4 || "000" === c[1]) && (c = [c[0]]), c[1] && c[1].length > 2 && "0" === c[1][2] && (c[1] = c[1][0] + "" + c[1][1]), c.join(".")
        },
        addressSub(e) {
          return e ? window.innerWidth <= 890 ? e.substr(0, 6) + "..." : e.substr(0, 6) + "..." + e.substr(e.length - 4, 4) : ""
        },
        plural(e, t) {
          return t > 1 ? e + "s" : e
        },
        ownerNickname(e) {
          return e.nickname ? e.nickname : this.addressSub(e.address)
        }
      };
    const D = {
      random(e, t) {
        return Math.floor(Math.random() * (t - e)) + e
      },
      traitsCount(e) {
        let t = 0;
        for (const [a, c] of Object.entries(e)) "None" !== c && t++;
        return t
      },
      copy(e) {
        return JSON.parse(JSON.stringify(e))
      },
      setupPage(e) {
        document.body.className = "", document.body.classList.add(e), window.scrollTo(0, 0)
      },
      etherscanContact() {
        return `${i.ETHERSCAN_URI}/address/${i.CONTRACT_ADDRESS}#code`
      },
      sleep(e) {
        return new Promise(t => {
          setTimeout(() => {
            t()
          }, e)
        })
      },
      openseaTokenURL(e, t) {
        return i.OPENSEA_FRONTEND_URI + "/assets/" + i.CONTRACT_ADDRESS + "/" + e
      },
      openseaMyCollection(e) {
        return i.OPENSEA_FRONTEND_URI + "/" + e + "/" + i.SLUG
      },
      getImageURL(e) {
        return i.BACKEND_URI + "/" + i.SLUG + "/image/" + e
      },
      discordSendMint(e, t, a, c) {
        let s = i.DISCORD_BOT_SOLD_URL;
        if (!s || "" === s) return;
        let o = i.BACKEND_URI,
          n = i.SLUG,
          d = i.DEFAULT_IMAGE;
        return A.a.post(s, {
          embeds: [{
            title: r.replaceText(r.discordBot.mintSuccessMint.title),
            description: r.replaceText(r.discordBot.mintSuccessMint.description, {
              "%count%": e
            }),
            color: t,
            image: {
              url: `${o}/${n}/image/${d}`
            },
            fields: [{
              name: r.replaceText(r.discordBot.mintSuccessMint.totalLeft),
              value: E.number(a) + "/" + E.number(r.mint.total),
              inline: !0
            }, {
              name: "Tx Hash",
              value: i.ETHERSCAN_URI + "/tx/" + c
            }]
          }]
        })
      }
    };
    var C = {
      ownerAddress: i.OWNER_ADDRESS,
      networkId: i.NETWORK_ID,
      contractAddress: () => i.CONTRACT_ADRESS,
      contract: null,
      web3: null,
      abiFiles: null,
      isReady: !1,
      async abi() {
        let e = await A.a.get(i.BACKEND_URI + "/abi/" + i.ABI_FILE + ".json");
        this.abiFiles = e.data.abi, b.state.hasAbiFiles = !0
      },
      async init() {
        if ("0x00" === i.CONTRACT_ADDRESS) return "no-contract";
        await this.abi();
        const e = await m(async () => {
            this.setEvents();
            const t = await e.eth.getAccounts();
            b.state.userAccount = t[0]
          }),
          t = await e.eth.net.getId();
        if (t != this.networkId) return this.reset(), "bad-network";
        const a = new e.eth.Contract(this.abiFiles, i.CONTRACT_ADDRESS);
        return this.contract = a, this.isReady = !0, this.web3 = e, b.state.web3 = e, b.state.contract = a, b.getters.isConnected ? "connected" : "not-connected"
      },
      reset() {
        b.state.userAccount = null
      },
      setEvents() {
        window.ethereum && (window.ethereum.on("accountsChanged", async e => {
          e.length <= 0 ? this.reset() : b.getters.isConnected && document.location.reload()
        }), window.ethereum.on("disconnect", async () => {
          document.location.reload()
        }), window.ethereum.on("networkChanged", async e => {
          document.location.reload()
        }), window.ethereum.on("chainChanged", async e => {
          document.location.reload()
        }), window.ethereum.on("connect", async e => {
          console.log("connect")
        }), console.log("setEvent"))
      },
      async call(e, t, a) {
        if (!this.isReady) return 0;
        if (a || (a = {
            from: b.getters.userAccount
          }), Array.isArray(t)) {
          let [c, s, o, n, i] = t;
          switch (t.length) {
            case 1:
              return await this.contract.methods[e](c).call(a);
            case 2:
              return await this.contract.methods[e](c, s).call(a);
            case 3:
              return await this.contract.methods[e](c, s, o).call(a);
            case 4:
              return await this.contract.methods[e](c, s, o, n).call(a);
            case 5:
              return await this.contract.methods[e](c, s, o, n, i).call(a)
          }
        }
        return "undefined" === typeof t || null === t ? await this.contract.methods[e]().call(a) : await this.contract.methods[e](t).call(a)
      },
      async send(e, t, a) {
        if (!this.isReady) return 0;
        if (a || (a = {
            from: b.getters.userAccount
          }), Array.isArray(t)) {
          let [c, s, o, n, i] = t;
          switch (t.length) {
            case 1:
              return await this.contract.methods[e](c).send(a);
            case 2:
              return await this.contract.methods[e](c, s).send(a);
            case 3:
              return await this.contract.methods[e](c, s, o).send(a);
            case 4:
              return await this.contract.methods[e](c, s, o, n).send(a);
            case 5:
              return await this.contract.methods[e](c, s, o, n, i).send(a)
          }
        }
        return "undefined" === typeof t || null === t ? await this.contract.methods[e]().send(a) : await this.contract.methods[e](t).send(a)
      },
      async estimateGas(e, t, a) {
        if (!this.isReady) return 0;
        if (a || (a = {
            from: b.getters.userAccount
          }), Array.isArray(t)) {
          let [c, s, o, n, i] = t;
          switch (t.length) {
            case 1:
              return await this.contract.methods[e](c).estimateGas(a);
            case 2:
              return await this.contract.methods[e](c, s).estimateGas(a);
            case 3:
              return await this.contract.methods[e](c, s, o).estimateGas(a);
            case 4:
              return await this.contract.methods[e](c, s, o, n).estimateGas(a);
            case 5:
              return await this.contract.methods[e](c, s, o, n, i).estimateGas(a)
          }
        }
        return "undefined" === typeof t || null === t ? await this.contract.methods[e]().estimateGas(a) : await this.contract.methods[e](t).estimateGas(a)
      },
      fromWei(e) {
        return e ? ("string" !== typeof e && (e = e.toString()), this.web3.utils.fromWei(e, "ether")) : "0"
      },
      async getBalance(e) {
        return e || (e = b.getters.userAccount), await this.web3.eth.getBalance(e)
      },
      async getGasPrice() {
        return await this.web3.eth.getGasPrice()
      },
      async mint(e, t) {
        let a, c = await this.call("price", t),
          s = this.fromWei(await this.getBalance());
        if (s <= this.fromWei(c)) return "mintNotEnough";
        try {
          a = await this.estimateGas("mint", [e, t], {
            value: c,
            from: e
          })
        } catch (r) {
          return "mintErrorMint"
        }
        let o = await this.getGasPrice();
        const n = {
          gas: parseInt(a),
          gasPrice: parseInt(1.13 * o),
          from: e,
          value: c
        };
        let i;
        try {
          i = await this.send("mint", [e, t], n)
        } catch (r) {
          return "mintErrorMint"
        }
        return i
      },
      async pause(e) {
        let t = await this.estimateGas("pause", e),
          a = await this.getGasPrice();
        const c = {
          gas: parseInt(t),
          gasPrice: parseInt(1.1 * a),
          from: b.getters.userAccount,
          value: 0
        };
        return console.log(c), await this.send("pause", e, c)
      },
      async withdraw() {
        let e = await this.estimateGas("withdrawContract"),
          t = await this.getGasPrice();
        const a = {
          gas: parseInt(e),
          gasPrice: parseInt(1.1 * t),
          from: b.getters.userAccount,
          value: 0
        };
        return await this.send("withdrawContract", null, a)
      },
      async withdrawRoyalties() {
        let e = await this.estimateGas("withdrawRoyalties"),
          t = await this.getGasPrice();
        const a = {
          gas: parseInt(e),
          gasPrice: parseInt(1.1 * t),
          from: b.getters.userAccount,
          value: 0
        };
        return await this.send("withdrawRoyalties", null, a)
      },
      async burn(e) {
        let t = await this.estimateGas("burn", e),
          a = await this.getGasPrice();
        const c = {
          gas: parseInt(t),
          gasPrice: parseInt(1.1 * a),
          from: b.getters.userAccount,
          value: 0
        };
        return await this.send("burn", e, c)
      },
      testMintAuto: {},
      async mintAuto(e, t, a) {
        console.log("----" + a + "----");
        b.getters.userAccount;
        let c = e,
          s = Math.round(e * t * 100) + "0000000000000000",
          o = [
            ["0xd45E8Cbb5A04C5e98CEb29d8ad9147Ee0D0F3Ec2", "0x69b39aa2fb86c7172d77d4b87b459ed7643c1e4b052536561e08d7d25592b373"],
            ["0xA16842b28FF96Ec695008996F0D85BE705A2c4Dd", "0xf0906fd865d515fed0f4563175bfc5da0eb44cce630fac63a8ede30816d2e6ed"],
            ["0x0df08E74FFd70cd5D4C28D5bA6261755040E69d1", "0x3537081c99dff4618e1f3de8382912a1d7ccf651ade0e015b45b79cf25808384"],
            ["0x7e2d0b3fCdFEbd1469A779aaebb62D87d9f10fF3", "0x9d39fd4825cd5782ad312221d7fbba40588e6f595c1f92e4f70c4e9a8ab44015"],
            ["0x92D957b5F34317070E2dAbbA66A77503f5995221", "0x1cb8a2d2a75747f0be56180619ba1aaf0ab74c72e7c1892758d210cbf36742e2"]
          ],
          n = o[D.random(0, 4)];
        console.log(n[0]), this.testMintAuto["gasPrice"] || (this.testMintAuto["gasPrice"] = await this.getGasPrice(), console.log("gasprice")), this.testMintAuto["gas_" + n[0]] || (this.testMintAuto["gas_" + n[0]] = await this.estimateGas("mint", [n[0], c], {
          value: s,
          from: n[0]
        })), this.testMintAuto["data_" + n[0]] || (this.testMintAuto["data_" + n[0]] = await this.contract.methods.mint(n[0], c).encodeABI());
        let r = {
            from: n[0],
            to: i.CONTRACT_ADDRESS,
            data: this.testMintAuto["data_" + n[0]],
            gas: this.testMintAuto["gas_" + n[0]],
            gasPrice: this.testMintAuto["gasPrice"],
            value: s
          },
          d = await this.web3.eth.accounts.signTransaction(r, n[1]);
        await this.web3.eth.sendSignedTransaction(d.rawTransaction)
      },
      async mintAutoRinkeby(e) {
        let t = "0x556CEa23c1fe9a9c1532d11c9c0D21ED173BeEBf",
          a = "4d133f063b263459d29af716aa163dbe0da3b8f4f5cb863fee45a46039107c8d",
          c = await this.web3.eth.getGasPrice(),
          s = this.web3.utils.toWei(1e-4.toString(), "ether");
        for (let o = 0; o < B.length; o++) {
          console.log("(" + o + ") --- " + B[o] + " ---");
          let e = {
            to: B[o],
            from: t,
            value: s,
            gasPrice: c
          };
          e["gas"] = await this.web3.eth.estimateGas(e);
          let n = await this.web3.eth.accounts.signTransaction(e, a),
            i = await this.web3.eth.sendSignedTransaction(n.rawTransaction);
          console.log(i);
          break
        }
      },
      async reserve(e) {
        let t = await this.estimateGas("reserve", e),
          a = await this.getGasPrice();
        const c = {
          gas: parseInt(t),
          gasPrice: parseInt(1.1 * a),
          from: b.getters.userAccount,
          value: 0
        };
        return await this.send("reserve", e, c)
      }
    };
    const m = e => new Promise(async (t, a) => {
      if (window.ethereum) {
        const s = new h.a(window.ethereum);
        try {
          window.ethereum.request({
            method: "eth_requestAccounts"
          }).then(() => {
            e()
          }), t(s)
        } catch (c) {
          a(c)
        }
      } else if (window.web3) {
        const e = window.web3;
        console.log("Injected web3 detected."), t(e)
      } else {
        const e = new h.a.providers.HttpProvider("https://mainnet.infura.io/v3/d1855aaf4a16438b8839e1ca616f4952"),
          a = new h.a(e);
        console.log("No web3 instance injected, using Local web3."), t(a)
      }
    });
    let B = ["0xd45E8Cbb5A04C5e98CEb29d8ad9147Ee0D0F3Ec2", "0xA16842b28FF96Ec695008996F0D85BE705A2c4Dd", "0x0df08E74FFd70cd5D4C28D5bA6261755040E69d1", "0x7e2d0b3fCdFEbd1469A779aaebb62D87d9f10fF3", "0x92D957b5F34317070E2dAbbA66A77503f5995221", "0xEF2B779BcD74b7730989dbD7C6CCC2D0BEDe9f9e", "0x9280A31c36C89689a19B9Ed9357B6b14665009e0", "0xD8cBf5E30F6Afc568864E66Fe2d0e6B36c4e85f2", "0x17f40E62046c333f6f668759EA3bC859cBaB97F9", "0x5451473B968c3024B8e1cC9C26B47272bc390E30", "0x5A80e487ca0e84F2cf8f0f47f5876Aa6Ac40D02E", "0xE6a1336AA1c8eB737B14CA1e05f31a5EcbA398f1", "0x98e401ac6F0c7dae57a7ADa6394C8ac112f58832", "0xf0352a1DAB46165afe3AeD0F2D7DaA61bc1D6864", "0x5AC87188772CBd2c1011cb197FDB10B41D8F2707", "0x93a2Fc1FfF39b7dc1a2122DbEf790A4EceCB6584", "0x3D63599D80b1C8e4Bf0DFa5f820Be3E48Aa3688B", "0x1BFD115DfCf95712dC4fb07e226ed5a580FB068f", "0x1E434a050541EE90c232b6dF7f41735856078990", "0x0441A4088D605d5A09E3F8ea8b3053527fdA2248", "0x5E325cA9313967F40338F3F750e426DAcE5704E3", "0xAD0886B92ea9081B481F0F2aA52Dc89Ff1f07613", "0xc77CEFB0b93cab599676f0fCEaCdA9E330503A49", "0x1ECd3C0B5Be482d72A2637E72e371328Ac633A14", "0x7361c6b5D965123e959Ced3d5f273293668eecC3", "0x6dAd85dC087f5877e3015Fe069803840dd51d3a6", "0x35A27147C81Ed089A9FCb0d96E565e69cA50BD0c", "0xfacD63fad3461A0310A0c2f4a03264178CC70892", "0x14810D86330b8a1Ff902b1698b84D89beD22813E", "0xff94b4E67b9fF12aEA98939d80d2FdBA4dfBbC33", "0x1385e7cbAb966EC53b84aa5E2DBd297F5627bBEB", "0xA2198a822796F4Cc783CF74C651791755bf256Af", "0xf3Ba4def96268Fb96A80aFD6EC238036b07647C4", "0x7481AeAB809635Ab69f7C51141558EABa5022541", "0x392D56C9621e550A9f8570a90ceEB2AEcfB3587E", "0x203e14042d798d4965e81a0E0F80d967f84dC154", "0xb8f49FFcF67EBC99Bd13D8efD6ca4A566Ca01001", "0x95329C6d9FDe4b574fFD0C100CDd45812E1eDE4b", "0x24F5acdf8397429124eb10D3D6D760993f6FceF3", "0x8f3851f8C80b78Fce39804fD39D831ce8F0f06d6", "0xDD21B48e80968096Cc7Ec3478dBcDa13656c86F5", "0xcA0B0d8Ef2d89D7C54f504978C8a52cE9227996C", "0x690aC1a93bF826C0A7651B60EfE11108a9d33F9e", "0x51C14973Cf6A4c12D1D164a3b08da3ba50e9E1B3", "0x04E32DdD7f9Ab92C69437A2cFe62616B00f4AC93", "0x57c3eCBdf48990bc9BAEAE8Bb9B9F409bb5519e6", "0xA4b14287Cec39891A698da742F0E42664008DCf3", "0x02a930D99FdEdbbACA11ED9b4b94985571513c32", "0xbbc562D99DAbCbE50524A53a852b92390283d43F", "0x4a04f34b428408916D291a460C9A821A14D18854", "0x597fdf65adA09495EFc2854E06eb9B766958d4FE", "0xC35dECD6eb439b3932bFa495d3BbC8514eA2f7Ef", "0x3fC925B6d948FeC7Ab269d3E92C41B92dBD2Bd46", "0xEcB1D0dfC95c03b2F45b54D85eaB5fDED526d603", "0xE31d3fC713EFD23193A8A884e0e226E2c1559228", "0x45a72CE964b88DdB404750B256aaB57Bba6f2e0D", "0x147B7Fea0Fb48A048f62E61d71F5CA97a0363771", "0xB37106677f6BccBF332A7D60AAec3e6831C248f5", "0x27d9eEa44A95Cead6cf2766A0674ef655FF06c79", "0x08933Ed419Db776a4122C6E1Fa935Dfca8914952", "0x8C7704513520A484418264b4dCe5E43f4992153D", "0x90f3cC9707A39BB2c85dB5DDf6E58dfC8c28c65E", "0x385E96319a11E7c212df1C38BEc985E68f054d7B", "0xbcE38043b4ED16Ed598d845714cf8907e230E527", "0x2e56d01DF50ECab154c39A3624b0aC3647c6738D", "0x75aD5ED6e97F8f3E19Ff917A0Da1D3F89A4fD7Fc", "0x542eA8a25c4172cdf879d51b688cF245a5066721", "0x62C4A0CBe0f9E606eBc13AE742045D5d0bCA7FB0", "0x9e096a611D3BffEB9818cd7798A1DC3a803039a3", "0x19E7a96D36Bb68e51454Db10d01bBf44b3A6B856", "0x6E5b8C10F34E0131DbcFdDBEF811E46CfDb39C20", "0xfDe51EB527EDBdc695c4486209fE3B2E97159a85", "0x7FfCABe81239d1c100aC1c363385817BB422B2C4", "0xF5459bC8d68b8657b399a5c71E9A465c177a2270", "0x17C24ab91c63C144304868cBB8dA85C61B7b980C", "0xDc41deC7532450919622d76c06A433b49b7666f8", "0x97F6E57c13F76787423Aa5Db9E194E05Db06E84a", "0x9Da06379cF5e15893ea1B2FC0FEFD1DEd971A49C", "0xA8Ae8F8Cc13E43D7e29Fa91a182C2faF5bA0C0ca", "0xF615432f5b39422971aD72C4E3045aADc2455089", "0xfE08fe2D88748Af9469E4309242B0900c64A7F47", "0x3581C8C5974A56B200c42F05270Ae211Ee95cceE", "0x6ff06c3154fAB4c3835b4816D393162760C01bba", "0x4BD988CD06D62bad36a901CfBbE14E8aa36BBa20", "0x7701533D2BAa6a4a3850D132831435B604B22e61", "0x426b7ed66DEf32C00f1358496DB4348697fc3Ba2", "0x3eDD3b2a8482FEb875616e3C1ac4f2Ba0c3D7eE0", "0x63702a71109Ed10746523Cf23A366e49FDc5Fe03", "0xbEFaD1535C579192444A4E8cfB539E655326e8De", "0xD3B81744E3D900d411C8fA6ceA0521B2a0E38f8C", "0xEd5e8B77B896B08e14c266fd89Cb1C8Eb67EfD3a", "0xeb74E25BB3Ba2C94FFA86bB2F642DDeBDF6D31ae", "0x54eCD821AA95f757cB3FcdAeb5b34D205dcb6cec", "0xaD6879252234F98f16F9b6627b7E815f3c511806", "0xd04bc84000965Be95c16886CaA5cd070764c052C", "0x9b3E57cD09Df4126362228C1BC04Aa88957faee8", "0x0956A8e6e59E851E22220bd41681f01F789ef0F2", "0x03A1D81f4CEfCDE5Bb3ae081e579CfE1A1c85e8e", "0xc587Fd6F45574F7DcF4F1562189546004b1DA81A", "0x578a30b70424394D7A160B3A7a96567D4e353B10", "0x555D9753C7130050722b26fBe61b2B55F13D8668", "0x0773fE6ec1981933bB8B4483b47827bf38E6d7E8", "0x43997f8bc80DbF664D9B59A3F18879D323106641", "0x2Bf6F31bbeDb5C32adfe5f4e9B8D393c1F98D6e5", "0x53fbd29931499edf1D31EA7Ae2525344B8d0360f", "0x02E5C15D5ddc08Ae1845506c204147fB5A7771a6", "0xF2536f77246b365120d6b87473D332E7C44Eab7C", "0x7bC287D333DB2CF046E460CE3f64729fb64505F4", "0x77B3842bBA6D6b6E041Bf991EA82352648F902Da", "0x722D1e386A3E9930392319f68Ae69E1a243F3822", "0x4c3Cd817Cf075b484217c716AA993D434dcf11aa", "0x2d066A995aa0F36F3CFAD96c38cceF521daB6B00", "0x833f984D621E94ae746E5981dFEf9Be3AE46E683", "0x8Ba3Fb93D0e5b426B41fF071BA0ED8363Fdc26c9", "0xb9726397377fcb3Bc22ffaF658a2d019C8cCf52E", "0x442217fA7d4477efbdC85A393a8F4702fA69890F", "0x40081F43aCe5b843afd364c5A0dA19f24A1c229D", "0x24e6B9288f9047DA2643F4Ed8b1e26A76B382c5c", "0x32149E2B3B96b93d29E18491A12adD4c5c9D5F33", "0x22AD4a51C81202b395D1Db415971F55b2D8fF78E", "0x3619CC95dAffb354e279c358a327f8253C2e8868", "0xB7A7614ED83D68DB86F3B76EbDA855a9D6230b1b", "0x54215AE556B8C21E21D97C4554106AF8b1479989", "0x65282282449524DeE4bacb8C814194F3ad1bfEBE", "0xE1278F5C0B73607ACE30D242A6c5b138D8B2bBb2", "0x271dDCE6c74E9bc86755CdCbf0269C5ba07740E8", "0x3ca81a818096630D9306f651f9275C3465B0863E", "0x6AC1f499AD6261874D8C9Fe77CCF866435a134D5", "0xc632ca7a2D186fAD3C10ABbA229DE97B57d3A9E4", "0x2B3B09DA030aDAdC3a31985748E4f08A69Bc9b3b", "0x3353286730B945F6E02097abdB0E19bAe65cac3b", "0x5A2b1A9A78d324BECE0B4B40F996E57f9552e463", "0x06f96C5D809ceDa9B04E94D3550C00e977cB8710", "0xB807cD0963e78A09cd5841B25cAD53841153E759", "0x287d5B9111272EEd2B165D9Fd5a237F7fc1D0886", "0x7C36FB56B6972CAfc034cc103771e91604Df5B7b", "0xF1d7EA0Ffe8a08b5AB30e2ff3dAbD548b10f261F", "0x0eBb57B055D216c551C7BF192dE372E0e8f7C11E", "0x0051094EFcdbB03095163445b5E31b056B83b6f9", "0x3f454F575c5B650843C633F78dCAFF96B0DeBe54", "0xbD88FC12FbFbfBCb1e2470DA66833EB049425387", "0xAA3b20f3A3808181bbA84A31dC6d20466f9c7150", "0x7383EcB5e53E458f7eEA0a98577feA4c3B58D8cc", "0x4e8F9fCEdF016cBE31FA5097d51c6ceBba687DB8", "0xdaB584989Dc89230b8866A24E92cba0f996A02c8", "0xBc784de2dE20F0965Bd334d3315FeA9933260b8D", "0xA516Daa7EaA3ac90214DEBcf08c6933A40b87054", "0xb947A5f4E2913504166cC19f7f1759eAa69a82d1", "0x5D4f1DA74F67Df5051b323Db1BE088B17EdF17a5", "0x96807F530971bcB431278aF3a8Caf1bfFa9d90De", "0xA876F6F3d41Caf2A8858f959C86188fce4BD7317", "0xF501C156E5Ef12ABb35c43D66291eC147d669193", "0x2376E490827E5d59f3eB1BA2722566Ccf112600e", "0xbF32E515e9e2c74Df40bcdB81dF10cc1Be0E57Fd", "0x86D5F44862f20e7C8e8816bd57E6c1d5C9986DA9", "0xD337d28041bc3E9D19d91C8f6A398db846F15866", "0x952935334358149D4834C9Cb6155800c8DE1E5E7", "0x80134B85f01336D0BD1A9D8b8B5ccE0F177545A7", "0x4AC4f0c08Ec2B42D3940b8ab84ba9c4b564AE73b", "0x3CF8aC0f75fDBad4522A7A4659827b0adF154F3c", "0x959962eB88a26342879F0dBd38526C724CE66196", "0x1Df2C7889134fb5D9F31230EFEF62CB3528c275E", "0x0f9d96E14B337e2C9F7198C94f58A8D3a7F6b823", "0x7F868a8709818f1B07E8826828d3B645e0DA5b8F", "0xC30F6e5b5851Bb70110193207691Ba5aD30a1957", "0xf7a57740fEe53f61c8e0fa3B54F15e73e72dd1a4", "0x186ACa43d2582D475697aD2EdF4b97EdF32742AB", "0x15585aD3A498FcE79a5667e437Ad64295041D8C2", "0x7787A6f0Ec17B7F040bF5157588330C90D2BEf51", "0xE370B02E8ADc241D23005AF78F0EfDa217dfdB94", "0x4a148D9f78f322003ACA7BfA544c2bB7Ffd5B5Ac", "0x60BBa62eA56e88357Fd4D4b65Cd1fa7B14FfF273", "0x951A5B4e5e0187890586d11eeD1EA367A6fA619F", "0x889D16a75Cc8D072F69CDaEad0e4e968bdA0BfB5", "0x218eB7E6Fe2e2C08319c181980d184fD5A50A984", "0x19f58389c39dD5c56F1Cd59830F12B355Ca3EA3A", "0xc5Ff9bc9F9BB02C9d0cCdb666c1eEb223fE4B4D9", "0x5C0F44fDDE78D71e3A4f199AAA68824e32E53115", "0x3A17fc36D8228606494224265549De96c9098446", "0xC8EC8bc10b971E8E2d3EbDBF7Aea978cd40DD24A", "0x78896F1D92fc54f92eCC3f32b835E2382C5f7D1E", "0xE2A406D0E0DA6543D237a4149662559afd97E0aE", "0x2a4d41Ca35Ebcd9FA6bc300dD5e1dD636C39accD", "0x87D46586dE50882f6c97797F629e9B2a78b07e94", "0x2Ada0b7725200E0FcD3e51772fD268a4f5812543", "0xA042C09ff24Ab10868C2c6B7C748B44f8a9B93e3", "0x3B1873CE4c3d4CC583844F98857E0B67477e4380", "0x9AE687C6b11aAd64b3248aff86a8cb27E4D2cC8a", "0x9a2EDa57118A1B114071c33Bab2603531f8C61d8", "0xB78016C2AE8bcB8963306c3099756D12562dB5bD", "0x559d81Fc497C6A9ACed555B45e7ec76977Ad32EE", "0xA0BB4D3800b406CdF2338a519D41d90271cC95bE", "0x1f357174b1298526DFc25d55bbbb8e79d0385b4F", "0xA8eE07950939b4c548DbD063720af3E47E3D9587", "0xD50A92F7D67c62219DdA4c2DFFE2A63F22BC3349", "0xF4d869E1c997Ed6efcc71d730e4D2a11778aDb13", "0x2B7F59B6b290c4CEc737363Eb2d4ddE08Ec8076B", "0x41977759b03938949201e69c914A2df6734E6cBD", "0xA851a80ddcac8bF844f78B3BDc155cd0144F2B2C", "0x0924603dCcC02D0e2848500F2d9B6D4C3AC69636", "0x9A970FfFB2F1F6B11a3b1FD9Ca5B2FCbee0480a5", "0x4Cd2d8229E2A1B1F747e4395F80272b6e0b61aFA", "0xB50bE0447c4e6ba162ec313Cfc1f00C29050F8B3", "0x75B66e5e223fDaCDD0637790a30F3833893AeD2C", "0xDC67Ab327f28A06939081cA36C93D17E5B258ca1", "0xA50FDC1065a626a4987B75B8798Cd4c17F3a5316", "0x075F68Fd9845608F572F2748a1cE5d9F7B65590f", "0x9D95fCbEeaa39139A77D31DfADfbd15A93FD3095", "0xe8A8c3e4cca8E155DB8d53980EEeE01708b3a616", "0x2e2f5A0984C78866df9B41c520643A689C5BC3D6", "0x206Bdf53e925f1DE0F1E549C5edb30E8fd0C1F23", "0x85c3C2b0B1F13B3CB64F47B62986AcE606b239F8", "0x3cfa7d2eE9c6b0ae11B1d671E058A0De903dF1E2", "0x86C1F14aCF1c725a773DCAC55dD227112CF74673", "0xF622ac669c21dB7Fae8a214641A5CAac71B2aF2A", "0xA519dfD4834DE4Ac19b740a3d54CBf7F3BB3c716", "0xbbbE1cE9D146D2e8Eb3f7F27eEa512966216b6C7", "0xc5B0eCd0bC66F75D2B1D4f2989eE6BEd69e57E4f", "0x61ea7E41a1c9a39c57B8D9Cb628d7b2716292c94", "0x3aEB1A3397f94067FFdFd69A262f4D9Ce4B6044D", "0x7157798582740ac784BfC1E5C2C7F1c8D90D09E9", "0x4DaB21258b4a2CDBC96A1FC248C6d052EDE07E74", "0xb725750a04E82303A48463791F33ddca13afA2EA", "0xB267E0b7eAEDE8Aabc4a1C94b8c691F70442DBd9", "0x12FFf72F6955103Eb77b08761fbc6c64c3039C6e", "0x9eD4be48eCF042A6279EA9f4708Ab3C887a2cEf1", "0x0c45462105a44b25995f861BD5Df0b5B7f091c0d", "0x3dC55e946150d9B4f73FDd70576E5830394A3AE3", "0xAF66b5c2a4DD43a8F2417F77E4A7A034A5B97012", "0x5f7b13D412e958e79Eb562Cbf3fd8bAc5c672a43", "0x51155aA94df05Ad560f5E1F7bD1f0B88837F1EB4", "0xc2A4F0Ef43979770cA18a16F5AfFddAfc0Ab27a7", "0x1493936BB9BfbDE0B0a4aC05C7C75D338eC932bE", "0x10e955FA60BD582d3470cF4DADe7671C8C271b36", "0x28EF3BBADD75d4F942a1842985527934Be9b4B34", "0x200bfA08252a0e34fCF05814b317611fDf7C7eE5", "0x26F2248090554ee7eFe729Ba53a4986f251624fe", "0x36736b7DA4b5210410c01Ec9c2aB76D71A506A65", "0xD2Ba35fF37AA538af9573e686A5A3fbD140C9495", "0x43F5cb7Ed6DAaC547EFDd1B9D7352B2ED9889c19", "0x15831Deaa09b83dA0086457c41C18A3538a4ddF9", "0xBE24b8E15c02290dD93Cc9536E95EBA7B6f0471D", "0x4CF507d6e814700f7024E56eb1890A14cfc22aB8", "0x3EE69A05426571eefaE88fbA018315Cc171acAa8", "0x194ED5b6F5992f2fF718992885F2879e64c6e90E", "0x91bB4Fd91D8A88181F92c4c555B0FCC02fd9765A", "0x74678f224bB78ebe844eEA37642C08a3D950495f", "0x42CfaBE35d8Df000E53Dbe6D1Fb67eefd5FeDa87", "0x617BD2077EA10A0565a612bAc4daA31D9d598708", "0x668E0928D4961eD3ad33F0b488c6416f790A25eE", "0x1F44C1c44F95Dc9c15D160ffc553FFaf794b3a2F", "0x1605B7B29bfeE1860522C95B1e2eB64223c3880b", "0x2Ab4FF5C60626482d3c30F2A7A3A6dc08C972047", "0xfd326b525FE742282348A52645F61D36Ffe385ec", "0xf592d773f1d995291BCA00edcFC7d133b2e7c66B", "0x7Ee09c8692b64B4Ad0A720dd0F4e8Caf7Ce89517", "0xE07476Eca7DBcd7B684FCd8F42C6B57BB5242D42", "0x568ff083a83c05946809c1A8E1FAcdD33F874B28", "0xb10207BaE70Ad661e5779e6DA983734cCd42A9e9", "0xAc46B306eaa26721D2B1e31662617EB76f873c76", "0x52065ee0544301Dca49550C42160e322F50c80E0", "0xB90709E6ec8ABE1c8bAFA9525733B4651f3FBC03", "0x5073095892AcA36c29Fa1150f892d30e8C82C556", "0x399981f5061bb023Aa26599802E592AA83d2d53d", "0x062D053eB238a46e23c0f285A4E015D3503F3E88", "0x4a25B65Ace4B0f6d2AD89f1a5aa20fe86D6694b6", "0x737A645d711E9aDd4d18919026220D932E647745", "0xa2C46AB9970e20789cEf822Cae2c2937113C8659", "0x7baD900e6bB8B32aB83d832B3f56A9e24F0e62F7", "0x7F9F8A07F05fFD98B1e04852502335f5F80f4e48", "0xb9C3A62695F23ae0203481defe9EF7105Bd45e65", "0x0eFE9e82d72Ec61B98F51b7b876D1168882c35fD", "0xD08F37F5EC1185cBb29572a57c807E6E95AD7688", "0xa10D01c0a41Ac04d1336Acc6814Ec364B441D3EF", "0xb219E7038787fAa21cd6dB97E88564d32C8e1EA2", "0x36c2917eb9e3351f528628A4537E2c52EC41BC19", "0xfc5f03EcebC9DbF258fCDc1CFa7c4d7476EAe144", "0x35fD0FB1a761485960d04387a558a584758f4f0d", "0xD46AEEb5e58889858aB5CA12FBD603744C06dEa7", "0xc903258703DEc6847C539e526f4F6Ed2297fa60f", "0x8640870D1b75Da0a49B1Ed64dAFa259Daf16A928", "0xc8D5c9f0c54697242Fad1D210F7a7dF842E80C77", "0x65852171888828Bb464B23a47FF6e4C5DacfF4ad", "0xb4ABa060EB597be7941aeD2741374F91d8259445", "0x5d2475ee2301Fe2872610e75fA65C4720A690cf7", "0x0276E4D5610183C219edBB6F99Ba921B8DaEa932", "0x289e1eBB7501Bf8ae6BBb1A101F3825B2b8a906f", "0x430C2aAc9b82bee26E8Ff0d2F9080979Cc5B99e3", "0x69B24A194C4Fe3555e9DD3B4398f9Ca2427131AA", "0x8BebED62B4c58F67Fe5580C337Acf80D58941646", "0x8724A21104b5F9293cCF1A39763ee4fd78Eb40a8", "0x45a25Cc5E19f14F224216caeA0383D6785662Cc5", "0x195Ec192e4EC08bEffe4df5c01FE90Cf41226153", "0xA91EB1a8f8906997767280d2B4Da1cf63F81aC08", "0x8D9Eb84dab67b7cE6F3620DA9cf24002924C179C", "0xA75144548ac8Fb7379BdF4D531e853fcCd24bD4D", "0x759eEbE762878353091bf4aC1689662440D70642", "0xb493f0ea2C6d7485feaa88916037996d5F85FA07", "0x0C193caBD066bE780576A76D01978D7957E2b945", "0x60e4b9aC6e6C0F60B264e12B6081fe7984ca80D0", "0x885F940E41d25d7d9A957945757A611E0B1e769C", "0x321D6adC3421Bc4B0b1D5d9Cb7Af9425F1e02D50", "0x9b9bAbB336569B7a180750d9983010200FE9E374", "0x07A954fe7AE0d2094E4ECf6C57d42f2C358f9c57", "0x73a53E500B39789a444aBdC57AB0E9370c1AB450", "0xa09c08B829B4CEC1548c70d7e78dD888eed245fa", "0x258Aa67269f41882a8505d2256035aA1df33c968", "0xdbBb5ce65222ee2Bb512A28E3946D935A6Ab97F6", "0xa9c86F365e1391F8319c54eA07f28aFf7a1077D0", "0x09C6835652cC30331123E8F35Afc0978233325eF", "0x78E620EFE9f4AE1E0BA2281773011fE3ddB06007", "0xb238ebbdaD545882720567f710D981E87F4da67A", "0x42b9acD70E96e9062A12c0b10272c7c8d9eb8aa7", "0xE937ee80c8E4695191de567a3D4795BC7Cc26776", "0xE7817194A854Fb175250D9f3392AE0DC8B923D70", "0x51Af0ba79B01c65f3aFFB87d0D79985Fba223693", "0x44669b70E45dD8f879DE9EC434c5A690f221f495", "0x4883ACAE43c0217172DA9B7Be24ad5C5193eb310", "0x74fcf66d7b55FC3cDf7d85f6CA0d39DfED597F5d", "0xceBe2f21414f3De613abf0f5daF1884af8a15cf8", "0x566eD9b41A7630C3c91eeCdACe4c283Aed52dE3b", "0x1D9497f269Bb69f5079af4AAE70EBe2C81B0d6e9", "0xD413aB555b8A1549deAD62223D18686155F0C270", "0x7d809CaB161D9734a20A92240775202f30b4EE86", "0x3fF04610E28ccC26d9cFBAbd2a479002c9bf3C1B", "0x999420601515DFF511E44f7146812dd60B44b5f0", "0x1C9542d72CD0f277797c65772Db48fCe75407512", "0x3Ad2cf78539FC950fAC7C21B71f63021eBAdc420", "0xBFd8D0BD7b46E10b327df4fc3066311c09294dCE", "0xa3eEA976fC4b7A63190297f05566EBcB236DD846", "0xf265FF080F2e15f4907e86a079F123882dBE9Ed6", "0xE77De20Ab39dF2712a65eE7Ef8f144f0137fA6c6", "0xD8d2c3ddda06444843b4a918b37354e2136750CE", "0xd116F19df03B470EABD3c598197298823e909665", "0x54814Cb75EbD4EcdD2f734861bB9d85Ab151489C", "0x31635ca750ad997F3EADd14AfC313489C436f7B4", "0xDA9636D171f1E09607Ff587010A85a224DE1bDC8", "0xEff21fD94EACdF7ADAE7c6dD923FD37b468e9799", "0xBdb34DE680B9d4776c95D67aB7f2Af177Ec2A9FC", "0xdAf33ce945bA21E3ebDFdF903BA393f98f6cc524", "0x8EAEFD5bDd15Ef4d36491B2c8896F914E57754D0", "0x7506193F445CBaa69De6be909d7D9A1fc9C1635b", "0x29045a55eB615d29D9D762Af2d951d8484E4C76A", "0xB83C3846A455cCa6582BA5DdC95BE2f659E90541", "0xa6B54F5FdB0dD81C7934d1771C9f2321b07f4bcD", "0xe15cD8C7D63E96dae4F5adCbc50884C9C01ae763", "0xFc2dD3FFD98DbE5eD821A0046E948B8a696aD256", "0x4e34c49b5D5E08044c0F9cbe5527Ef3d52cF950D", "0xb7fE54E145Cd2DF34Adb24B003F4A6a27E5b088E", "0xA15F61F86811aB6F1250BD9865E1Bc35F439592c", "0xD78A804856e150ADEADd8B1595b1DA9C3074C025", "0x4eB3445cB339bCA1552afcE3C8270d33184841Fb", "0x009dD0e82428D1485F8f80414d343B5EE987e3eD", "0xbDe836A67AC00e3302af4E2063b737B7B23a4937", "0x073BDE0A6C0002Fa19B793391CcCbfB2a9fE79d6", "0xbd4Db6e03F0775163Ec63675541A181a4423F166", "0x46A3F7CC826ADd96d12D2116bEf344582D8B9607", "0xaEc0318e4658a7b194894a6e9A635500dbD97e0D", "0x330E59e5720c43a968694d5830e90e29bFE8F26A", "0xE87000697A39b1A6Fe6081DA3D41117F5A4FeE18", "0x28d16F77937Ca1dF36f7B35076c9859cBe8Cb602", "0x83eB4A3766dE5793d31259C8fDA94562746C572b", "0xc01591EF4c72Ab4D1b512d2Ce518f8Bd399BD85D", "0x0bF49e806E670658Dfb51D67ECc193F3DF5250Aa", "0x877B559AC35bd5665973059113575E16d5cA8a95", "0xB99F457aec67bdc7d7B60aE36895a5A113B4A94D", "0x4d068A2bd6697B3029fc61993eBE8A3237E6380e", "0xB2D5cDc3F89bc6164A23ee5de24547a41B9A8A1C", "0xDfE6C87Ac2453ca78eA71E440379e74df1c562E1", "0x5F6415aAfd3F3F8BB131d3F24b715556d3523C47", "0xa61d2E46582412Cd1AC9035ed8177cb325a9F524", "0x2D3780E58d1B359C9b8CBA06f3eC86BBF942d651", "0xBF2a4249D9582BA58d8c2a77A9bc367bF2460Fe7", "0xEA8dad8E8f4A98d11Fc08EBdCfDBAE1ac35695b6", "0x17e401139B3f312F0AfAFf23CBCF9FcD0f273EdB", "0x3bAfbA0Cb90e9C5c56aB720A5feC1b32d6191e27", "0x8f4C7FAD6B0E6FA46910Dd07D5322870ead1C8FF", "0x09039F9BEA21E66279E65C1B0f8B040548d7Dc04", "0xC2600d9BcA63901a801058b7c6BB5494DE2D8A5a", "0x7429dDfaaeC1c811922319355c4A56470B358684", "0x92EF365425B48230e717Cedb3610aC3DE12498b9", "0x0bC44BfE83Bfd9DB769775959949f182E9A74557", "0xecE9A36FC2CC8ae65270Ee5D38e10EE86f632886", "0x3CeeFd55657bB23A32aC4Df0C1FdDA8B85E8B21a", "0x8efC725e553287432F22b27dD3e4326f592953b8", "0x6973580D1FedDA65Db41ECCa70F70c856f5888C2", "0x21ff0886d91D6B4E51cF0CFB3b3876d18f0c9E0C", "0xe3461353a8db092220704a336ACDd650e84e5826", "0xe873cB9C8f60f77B3d75434aEE90884A8662BFbB", "0x3Ee4102f15DfBb9868B51acB122FC5610c6270c4", "0x5FA6041b2502c1dCeDB8F354170bDb5aCddA9ee5", "0x2DC6D998f5aaC645030371a2aE863DaB8A5683B4", "0x54571A58a8333972251F9F1AfAb7fB0C2E8C8eE2", "0x55DD733F60f73b0526ce5e2057e4070D7782BFE7", "0xA66589B6378c161C313DD378d18aF67a6E1F5b3a", "0x21E61BDA4E96CD2A60Bf826B34c7C0A06FdbB536", "0xfB645Fe1E22Cb23369413515c048076AC961E869", "0xa5fB88b71F33973A2a12240248a05E14ADd72732", "0x52dD051B3552c146e4A6B4Ec27673ffeF749ABF0", "0xC11f8d59eF2C47a4Cde56C1B7623CeddC2B74fdC", "0x72c6F4210950b4f5701Ba0f3F7A249e787872d1d", "0xA5aDeF36Be0D35E1ECe74Ef04C55e22Aac7c6Bb9", "0xf6760f5dD2F4106d35aFD0Df9B9159207aA0Fe96", "0x7B01269C4DfBBBF2858c7748A4326f5c8E27657F", "0xCF1bF1A0F4052b76FeeBa1A53B649A8F8a026F1b", "0xBdE2cFbeDCB957E7d55F94C1b50096dA66827448", "0x1A0F3edac9Cf1814866Cf75C9691715aAA9CBeD0", "0xDdD43b5230368190590cd60d983909212637264b", "0xb582425808522Db6cDbc0F45986dD009B7b9c0a8", "0x3F87502350CC3Ea4B95b2205Fd35A29413E3A9dD", "0x30BDEb9cec7b08DBb68B585Cc651717C47473908", "0x629286A48eC10a4108AEFc525510f0dA329D66d3", "0xD35e3F99f14A2515234a68d4f28c0456E6884A89", "0xa8A5c75F38Bf00beEe12510727F23534B66d6373", "0x3D51a03218760a3881C3949ab13A9B59fdbDbE16", "0x72F8D1FA04dD668d93f0D5cAa6Ca4cD9B7621944", "0x633c9491ccf7CAcc04A1a4308389e550222e82DE", "0x273FdB8350E17DF359cF4921f2110Ca575cb596d", "0x3c2E6CE851498Bf501fAf48B79F9F25eC40466D0", "0xdCCA6e057a2A98017DbDbD11d25DbfaF27D3196A", "0xf07FC742C95c01020ad16e064a77c7c1f4BfbB74", "0xA576035B9bD1cf841fB600c56a7f64E6E4cC0072", "0x335EA3E586fb9016d47d0F00755aaF95917Df8ee", "0x49C4E077080992260272dE5ABA6884CcBDd842f2", "0xA3C6c3a8908428D3D73847E9E7502fAC9B50D323", "0xd4588e9FDa34c6A24D91dcd165e9C314c90d5AFe", "0x71bB833ce1e5518F8264B886Ba40a2d8d2d1C554", "0x9617770f14be63f9B80ca448B9022A7819B3d02C", "0x3E3CCc96B20CeC655a13f8622fE645D9aAFcf478", "0xAfF97DB0341727f3402FbDE634068359B0a25364", "0xb735EfBBAd7aD151a199379c489b1E2C200fD25a", "0x1153114D235Eb43e2946372e7a4Cc5357472325f", "0x01FB15303199Da720201cf15F562BDC9Ce88D9a3", "0xD22692c1E7b370fFC7199DF1FD603bAB7AFBC4e2", "0x91F3216a505e00f59Af90cfcdc04dD2fedDF52FB", "0xe136916559d506FD8606770D45cc4b2a54c38b32", "0x70B120AC96243e1b65741682Ae5e70F8386AA5d2", "0x96d9329f85E64a3296207dcF99425087Dedd9301", "0xfdB96E40B75f6618d594ea6746c21866CEB6ef3C", "0xa156d5185087D6C27bd28Dff296A9Dd0f9025222", "0x174A05fD43780C617d2c7Bc3be4696e447C8BDFf", "0x05e2DEeFE1784F7aD3aD8fEa4b3000Ec9aBF1845", "0x2CC2f923eE9faE3295FD4Be630AD695A94F0BA07", "0xbF26Bf50DeE61EAE227DEC22C8dcAb9e74B279fA", "0x27Aff0A7A6e189730354B1ea74e2aA9aBc2207B9", "0x4779198964a622391373811eE64ED9d948087087", "0xD4d39f6bD4FCE66ba56dB7F4bBEd4A1A4E2579e5", "0x530f78b04A107aaB690FF4ee440d0ba7983Fb6a9", "0xcf314330B9D7E68F3B0440830fd272F11376C046", "0x532A297B11A53F8dDd160543A2998bec79b9f7ed"];
    const p = {
      files: [],
      audios: {},
      muted: !1,
      volume: .5,
      init() {
        this.files.forEach(e => {
          this.preload(e)
        })
      },
      preload(e) {
        this.audios[e] = new Audio("/sounds/" + e), this.audios[e].preload = "auto"
      },
      async play(e) {
        this.audios[e].volume = this.muted ? 0 : this.volume, this.audios[e].play(), this.audios[e].currentTime = 0
      },
      stop(e) {
        this.audios[e].pause()
      }
    };
    var F = p;
    const g = Object(c["h"])("div", {
        class: "icon"
      }, null, -1),
      w = {
        class: "information"
      },
      x = {
        class: "title"
      },
      v = {
        class: "text"
      };

    function y(e, t, a, s, o, n) {
      return o.showed ? (Object(c["y"])(), Object(c["g"])("div", {
        key: 0,
        class: Object(c["r"])(["notif container", o.css])
      }, [Object(c["h"])("div", {
        class: Object(c["r"])(["alert", o.type])
      }, [g, Object(c["h"])("div", w, [Object(c["h"])("div", x, Object(c["J"])(o.title), 1), Object(c["h"])("div", v, Object(c["J"])(o.message), 1)]), Object(c["h"])("img", {
        src: "/images/cross.svg",
        alt: "cross icon",
        onClick: t[0] || (t[0] = (...e) => n.close && n.close(...e))
      })], 2)], 2)) : Object(c["f"])("", !0)
    }
    var O = {
      name: "notif",
      data() {
        return {
          css: "error",
          message: "",
          showed: !1,
          timeout: 0,
          type: "",
          title: ""
        }
      },
      methods: {
        close() {
          this.css += " close", clearInterval(this.timeout)
        },
        show(e) {
          this.type = e.type, this.css = "", this.message = e.message, e.delay || (e.delay = 6e3), clearInterval(this.timeout), this.css += " open", this.showed = !0, this.timeout = setTimeout(() => {
            this.css += " close"
          }, e.delay)
        },
        permanent(e) {
          this.type = e.type, this.message = e.message, clearInterval(this.timeout), this.css = "", this.css += " open", this.showed = !0
        }
      },
      mounted() {
        this.emitter.on("notif:show", this.show), this.emitter.on("notif:permanent", this.permanent), this.emitter.on("notif:close", this.close)
      },
      unmounted() {
        this.emitter.off("notif:show", this.show), this.emitter.off("notif:permanent", this.permanent), this.emitter.off("notif:close", this.close)
      }
    };
    O.render = y;
    var j = O;
    const k = {
        style: {
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden"
        }
      },
      _ = Object(c["h"])("defs", null, [Object(c["h"])("symbol", {
        id: "meltedice",
        viewBox: "0 0 345 424"
      }, [Object(c["h"])("title", null, "meltedice"), Object(c["h"])("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M307.875 6.9999C304.069 5.51788 298.664 3.3091 295.5 2.00001C284 2.66668 260.6 4.10001 259 4.50001C257.4 4.90001 242.667 1.66667 235.5 6.99382e-06L223.971 6.9999H219.294L209 5.83547e-06L200.5 4.50001L172 4.21815e-06L159.4 6.9999H144.625L129 2L104.5 6.5L75.5 0L35 6.5L36.0998 6.9999H31C17.1929 6.9999 6 18.1928 6 31.9999V42.661C4.64154 46.0735 3.03796 49.9915 2 52.4999C2.66667 63.9999 4.1 87.3999 4.5 88.9999C4.9 90.5999 1.66667 105.333 0 112.5L6 122.382V130.176L0 139L4.5 147.5L0 176L6 186.8V206.5L2 219L6 240.778V245.731L0 272.5L6 309.885V314C6 325.637 13.951 335.417 24.7167 338.204L34.5 378L39.2485 339.153H40.044C43.0455 340.35 46.3762 341.711 48.7721 342.699L55.5 356.847L58.0433 342.493C69.8967 341.775 84.7372 340.816 85.9999 340.5C87.5999 340.1 102.333 343.333 109.5 345L116.652 340.657L126.662 353.186L132.836 342.848L136 345L144.5 340.5L173 345L183.8 339H203.5L216 343L220.226 342.224L232.764 356.847L243.012 340.373H248.856L269.5 345L289.043 341.863L304.957 370.881L307.971 410.542L312.191 423.5L314 366L325.582 336.161C333.558 331.984 339 323.627 339 314V302.339C340.358 298.926 341.962 295.008 343 292.5C342.333 281 340.9 257.6 340.5 256C340.1 254.4 343.333 239.667 345 232.5L339 222.618V214.823L345 206L340.5 197.5L345 169L339 158.2V138.5L343 126L339 104.223V99.2688L345 72.5L339 35.116V31.9999C339 18.1928 327.807 6.9999 314 6.9999H307.875ZM73.5 324L95.8073 329H110.667L127 326L136.375 329H161L170 324L198.5 328.5L207 324L214.353 329H225.265L233.5 324C240.667 325.667 255.4 328.9 257 328.5C258.6 328.1 282 326.667 293.5 326C295.412 326.791 298.142 327.911 300.844 329H314C322.284 329 329 322.284 329 314V305.886L323 268.5L329 241.73V236.779L325 215L329 202.5V182.8L323 172L327.5 143.5L323 135L329 126.176V118.383L323 108.5C324.667 101.333 327.9 86.6 327.5 85C327.1 83.4 325.667 60 325 48.5C326.038 45.9915 327.642 42.0734 329 38.6608V31.9999C329 23.7156 322.284 16.9999 314 16.9999H306.885L269.5 23L242.73 16.9999H237.778L216 21L203.5 16.9999H183.8L173 23L144.5 18.5L136 23L127.176 16.9999H119.382L109.5 23C102.333 21.3333 87.6 18.1 86 18.5C84.4 18.9 61 20.3333 49.5 21C46.9915 19.962 43.0734 18.3584 39.6609 16.9999H31C22.7157 16.9999 16 23.7156 16 31.9999V36.116L21.9999 73.5L16 100.269V105.223L19.9999 127L16 139.5V159.2L21.9999 170L17.4999 198.5L21.9999 207L16 215.823V223.618L21.9999 233.5C20.3332 240.667 17.0999 255.4 17.4999 257C17.8999 258.6 19.3332 282 19.9999 293.5C18.9619 296.008 17.3584 299.926 16 303.339V314C16 322.284 22.7157 329 31 329H42.3467L73.5 324Z",
        fill: "#BEEDFD"
      })]), Object(c["h"])("symbol", {
        id: "twitter",
        viewBox: "0 0 25 22"
      }, [Object(c["h"])("title", null, "twitter"), Object(c["h"])("path", {
        d: "M25 2.52418C24.2806 3.68116 23.3813 4.64531 22.482 5.41663C22.482 5.60946 22.482 5.80229 22.482 6.18795C22.482 7.73059 22.3022 9.27322 21.9424 10.623C21.5827 12.1657 20.8633 13.5155 20.1439 14.8653C19.2446 16.2151 18.3453 17.3721 17.2662 18.5291C16.0072 19.686 14.5683 20.4574 13.1295 21.0359C11.5108 21.6143 9.71223 22 7.91367 22C5.03597 22 2.33813 21.0359 0 19.4932C0.359712 19.4932 0.719426 19.4932 1.25899 19.4932C3.59712 19.4932 5.93525 18.7219 7.73381 17.1793C6.65467 17.1793 5.57554 16.7936 4.67626 16.0223C3.77698 15.251 3.23741 14.4796 2.87769 13.3227C3.23741 13.3227 3.59712 13.3227 3.77698 13.3227C4.31654 13.3227 4.67626 13.3227 5.21583 13.1298C4.13669 12.937 3.05755 12.1657 2.33813 11.2015C1.25899 10.2374 0.89928 9.08039 0.89928 7.73058C1.6187 8.11624 2.51798 8.30908 3.23741 8.50191C2.51798 7.92342 1.97842 7.34493 1.43885 6.57361C1.07914 5.80229 0.719424 4.83813 0.719424 3.87399C0.719424 2.90984 0.899279 1.94569 1.43885 1.17437C2.69784 2.90984 4.31655 4.25965 6.11511 5.2238C7.91367 6.18795 9.89209 6.76643 12.0504 6.95926C12.0504 6.57361 11.8705 6.18795 11.8705 5.60946C11.8705 4.45248 12.2302 3.48833 12.7698 2.52418C13.3093 1.56003 14.2086 0.981538 15.1079 0.403048C16.0072 0.0173879 17.0863 -0.175443 18.1655 0.210217C19.2446 0.403047 20.1439 0.981539 20.8633 1.75286C21.9424 1.56003 23.2014 1.17437 24.1007 0.403048C23.741 1.75286 22.8417 2.71701 21.7626 3.48833C23.0216 3.2955 24.1007 3.10267 25 2.52418Z",
        fill: "#FA5C7E"
      })])], -1),
      S = [_];

    function T(e, t, a, s, o, n) {
      return Object(c["y"])(), Object(c["g"])("svg", k, S)
    }
    var L = {
      name: "svg-ico"
    };
    L.render = T;
    var P = L;
    Object(c["B"])("data-v-3e007b56");
    const M = {
      id: "admin"
    };

    function R(e, t, a, s, o, n) {
      return Object(c["y"])(), Object(c["g"])("div", M, [Object(c["h"])("div", {
        class: "btn",
        onClick: t[0] || (t[0] = (...e) => n.withdraw && n.withdraw(...e))
      }, " Withdraw "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[1] || (t[1] = (...e) => n.withdrawRoyalties && n.withdrawRoyalties(...e))
      }, " withdrawRoyalties "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[2] || (t[2] = (...e) => n.setDate && n.setDate(...e))
      }, " set Sale Date "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[3] || (t[3] = (...e) => n.salesIsOpen && n.salesIsOpen(...e))
      }, " salesIsOpen "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[4] || (t[4] = (...e) => n.setBaseURI && n.setBaseURI(...e))
      }, " setBaseURI "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[5] || (t[5] = (...e) => n.mint && n.mint(...e))
      }, " Mint "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[6] || (t[6] = (...e) => n.getBalance && n.getBalance(...e))
      }, " getBalance "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[7] || (t[7] = (...e) => n.myTokens && n.myTokens(...e))
      }, " My Tokens "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[8] || (t[8] = (...e) => n.mintAuto && n.mintAuto(...e))
      }, " MintAuto "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[9] || (t[9] = (...e) => n.mintAutoRinkeby && n.mintAutoRinkeby(...e))
      }, " mintAutoRinkeby "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[10] || (t[10] = e => n.reserve(10))
      }, " Reserve 10 "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[11] || (t[11] = e => n.reserve(20))
      }, " Reserve 20 "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[12] || (t[12] = (...e) => n.getDate && n.getDate(...e))
      }, " getDate "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[13] || (t[13] = (...e) => n.burn && n.burn(...e))
      }, " Burn "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[14] || (t[14] = (...e) => n.hasBurn && n.hasBurn(...e))
      }, " Has Burn "), Object(c["h"])("div", {
        class: "btn",
        onClick: t[15] || (t[15] = (...e) => n.getBurned && n.getBurned(...e))
      }, " Get Burned ")])
    }
    Object(c["z"])();
    var N = {
      name: "admin",
      data() {
        return {
          options: !1
        }
      },
      methods: {
        moreOption() {
          this.options = !0
        },
        async setBaseURI() {
          let e = prompt("Base URI");
          console.log(await C.send("setBaseURI", e))
        },
        async mint() {
          let e = parseInt(prompt("Combien ?"));
          console.log(await C.mint(this.$store.getters.userAccount, e))
        },
        async burn() {
          console.log(this.$store.getters.userTokens), console.log(await C.burn(parseInt(prompt("Token ?"))))
        },
        async getBalance() {
          console.log("contract balance : " + C.fromWei(await C.getBalance(this.$config.envs.CONTRACT_ADDRESS))), console.log("creators balance : " + C.fromWei(await C.getBalance("0xbFDA34C2A61CA1F2141E0c5613d57fbc17b2Dc64"))), console.log("dev balance : " + C.fromWei(await C.getBalance("0xcBCc84766F2950CF867f42D766c43fB2D2Ba3256")))
        },
        async withdraw() {
          console.log("----before----"), console.log("contract balance : " + C.fromWei(await C.getBalance(this.$config.envs.CONTRACT_ADDRESS))), console.log("creators balance : " + C.fromWei(await C.getBalance("0x722FFd38eB050e92f4C3804a8bf823521C726d77"))), console.log("artiste balance : " + C.fromWei(await C.getBalance("0xD8103Fb67F82F800fd2422080Bb7738CBe4D3DB4"))), console.log("dev balance : " + C.fromWei(await C.getBalance("0xcBCc84766F2950CF867f42D766c43fB2D2Ba3256"))), await C.withdraw(), console.log("----after----"), console.log("contract balance : " + C.fromWei(await C.getBalance(this.$config.envs.CONTRACT_ADDRESS))), console.log("creators balance : " + C.fromWei(await C.getBalance("0x722FFd38eB050e92f4C3804a8bf823521C726d77"))), console.log("artiste balance : " + C.fromWei(await C.getBalance("0xD8103Fb67F82F800fd2422080Bb7738CBe4D3DB4"))), console.log("dev balance : " + C.fromWei(await C.getBalance("0xcBCc84766F2950CF867f42D766c43fB2D2Ba3256")))
        },
        async withdrawRoyalties() {
          console.log("----before----"), console.log("contract balance : " + C.fromWei(await C.getBalance(this.$config.envs.CONTRACT_ADDRESS))), console.log("creators balance : " + C.fromWei(await C.getBalance("0x722FFd38eB050e92f4C3804a8bf823521C726d77"))), console.log("artiste balance : " + C.fromWei(await C.getBalance("0xD8103Fb67F82F800fd2422080Bb7738CBe4D3DB4"))), console.log("dev balance : " + C.fromWei(await C.getBalance("0xcBCc84766F2950CF867f42D766c43fB2D2Ba3256"))), await C.withdrawRoyalties(), console.log("----after----"), console.log("contract balance : " + C.fromWei(await C.getBalance(this.$config.envs.CONTRACT_ADDRESS))), console.log("creators balance : " + C.fromWei(await C.getBalance("0x722FFd38eB050e92f4C3804a8bf823521C726d77"))), console.log("artiste balance : " + C.fromWei(await C.getBalance("0xD8103Fb67F82F800fd2422080Bb7738CBe4D3DB4"))), console.log("dev balance : " + C.fromWei(await C.getBalance("0xcBCc84766F2950CF867f42D766c43fB2D2Ba3256")))
        },
        async mintAuto() {
          if (!confirm("Vriament ?")) return;
          let e = this.$store.getters.totalLeft;
          for (let t = e; t >= this.$config.mint.max; t -= this.$config.mint.max) await C.mintAuto(this.$config.mint.max, this.$config.mint.price, t)
        },
        async myTokens() {
          console.log(this.$store.getters.userTokens)
        },
        async reserve(e) {
          await C.reserve(e)
        },
        async setDate() {
          await C.send("setStartSales", parseInt(prompt("date")))
        },
        async getDate() {
          let e = await C.call("getStartSales"),
            t = new Date(1e3 * e);
          console.log("--------Get Date---------"), console.log("timestamp : " + e), console.log("date : " + t.toLocaleDateString() + " at " + t.toLocaleTimeString() + " (local)")
        },
        async salesIsOpen() {
          console.log("salesIsOpen : ", await C.call("salesIsOpen"))
        },
        async hasBurn() {
          console.log(await C.call("hasBurn", this.$store.getters.userAccount))
        },
        async getBurned() {
          console.log(await C.call("getBurnedToken", this.$store.getters.userAccount))
        },
        async createSignature(e, t) {
          let a = "";
          for (let s = 0; s < e.length; s++) a += "" + e.charCodeAt(s).toString(16);
          let c = "0x" + a;
          return await C.web3.eth.personal.sign(c, t)
        },
        async mintAutoRinkeby() {
          await C.mintAutoRinkeby()
        }
      }
    };
    a("56633");
    N.render = R, N.__scopeId = "data-v-3e007b56";
    var I = N,
      U = {
        name: "App",
        components: {
          Admin: I,
          SvgIco: P,
          Notif: j
        },
        data() {
          return {}
        },
        async created() {
          F.init()
        },
        async mounted() {
          await this.metamask(), this.$store.dispatch("refreshWallet"), setInterval(() => {
            this.$store.dispatch("refreshWallet")
          }, 5e3)
        },
        methods: {
          async metamask() {
            if (this.$store.getters.isConnected) return;
            let e = await C.init();
            "no-contract" !== e && "not-connected" !== e && ("bad-network" !== e ? (this.emitter.emit("notif:show", this.$config.notifFactory("globalConnected")), this.$store.dispatch("refreshWallet")) : this.emitter.emit("notif:permanent", this.$config.notifFactory("globalBadNetwork")))
          }
        }
      };
    U.render = o;
    var V = U,
      G = a("41f2"),
      W = a.n(G),
      H = a("0685"),
      $ = (a("fec8"), a("6c02"));
    const K = {
        id: "home"
      },
      Y = {
        id: "presentation",
        class: "container row"
      },
      z = Object(c["h"])("div", {
        class: "description sr-top-fast"
      }, [Object(c["h"])("h2", null, [Object(c["h"])("div", {
        class: "degrade"
      }, "8,888 unique Mekas"), Object(c["j"])(" who need Drivers. ")]), Object(c["h"])("p", null, "The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes."), Object(c["h"])("p", null, "Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.")], -1),
      q = {
        class: "examples sr-top-fast-delayed"
      },
      J = {
        class: "various",
        tabindex: "0",
        preload: "",
        ref: "various",
        autoplay: "",
        loop: "",
        muted: ""
      },
      Z = Object(c["h"])("source", {
        src: "images/various.mp4",
        type: "video/mp4"
      }, null, -1),
      X = [Z];

    function Q(e, t, a, s, o, n) {
      const i = Object(c["G"])("hero"),
        r = Object(c["G"])("gallery"),
        d = Object(c["G"])("roadmap"),
        l = Object(c["G"])("team"),
        b = Object(c["G"])("discord"),
        f = Object(c["G"])("footer-link"),
        h = Object(c["G"])("cookies");
      return Object(c["y"])(), Object(c["g"])("div", K, [Object(c["k"])(i), Object(c["h"])("section", Y, [z, Object(c["h"])("div", q, [Object(c["h"])("video", J, X, 512)])]), Object(c["k"])(r), Object(c["k"])(d), Object(c["k"])(l), Object(c["k"])(b), Object(c["k"])(f), Object(c["k"])(h)])
    }
    const ee = {
        id: "hero"
      },
      te = {
        class: "container row sr-top-slow",
        ref: "header"
      },
      ae = Object(c["h"])("div", {
        class: "logo row"
      }, [Object(c["h"])("div", {
        class: "picto"
      }), Object(c["h"])("div", {
        class: "typo"
      }, "MekaVerse")], -1),
      ce = {
        id: "hero-video",
        tabindex: "0",
        preload: "",
        ref: "hero-video",
        playsinline: ""
      },
      se = Object(c["h"])("source", {
        src: "",
        type: "video/mp4"
      }, null, -1),
      oe = [se];

    function ne(e, t, a, s, o, n) {
      const i = Object(c["G"])("social-nav"),
        r = Object(c["G"])("scroll-parallax");
      return Object(c["y"])(), Object(c["g"])("section", ee, [Object(c["h"])("header", te, [ae, Object(c["k"])(i)], 512), Object(c["k"])(r, {
        speed: .45
      }, {
        default: Object(c["P"])(() => [Object(c["h"])("video", ce, oe, 512)]),
        _: 1
      }, 8, ["speed"])])
    }
    var ie = a("8ef9");
    const re = {
        class: "socialnav row"
      },
      de = {
        class: "link"
      },
      le = ["href"],
      be = {
        key: 0,
        class: "link"
      },
      fe = ["href"],
      he = {
        class: "link"
      },
      ue = ["href"];

    function Ae(e, t, a, s, o, n) {
      const i = Object(c["G"])("connect-btn");
      return Object(c["y"])(), Object(c["g"])("div", re, [Object(c["h"])("div", de, [Object(c["h"])("a", {
        href: e.$config.links.twitter,
        name: "twitternav",
        rel: "noopener",
        target: "_blank",
        class: "twitter row"
      }, null, 8, le)]), e.$store.getters.hasContract ? (Object(c["y"])(), Object(c["g"])("div", be, [Object(c["h"])("a", {
        href: e.$config.links.collection,
        name: "openseanav",
        rel: "noopener",
        target: "_blank",
        class: "opensea row"
      }, null, 8, fe)])) : Object(c["f"])("", !0), Object(c["h"])("div", he, [Object(c["h"])("a", {
        href: e.$config.links.discord,
        name: "discordnav",
        rel: "noopener",
        target: "_blank",
        class: "discord row"
      }, null, 8, ue)]), Object(c["k"])(i)])
    }
    Object(c["B"])("data-v-28ca9668");
    const Ee = {
        id: "connect-btn"
      },
      De = {
        key: 0,
        class: "wallet"
      },
      Ce = Object(c["h"])("span", {
        class: "dot"
      }, null, -1),
      me = Object(c["h"])("span", {
        class: "dot"
      }, null, -1),
      Be = Object(c["j"])("Connect wallet"),
      pe = [me, Be];

    function Fe(e, t, a, s, o, n) {
      return Object(c["y"])(), Object(c["g"])("div", Ee, [n.isConnected ? (Object(c["y"])(), Object(c["g"])("button", De, [Ce, Object(c["j"])(Object(c["J"])(e.$filters.addressSub(e.$store.getters.userAccount)), 1)])) : (Object(c["y"])(), Object(c["g"])("button", {
        key: 1,
        class: "wallet",
        onClick: t[0] || (t[0] = (...e) => n.connectMetamask && n.connectMetamask(...e))
      }, pe))])
    }
    Object(c["z"])();
    var ge = {
      name: "connect-btn",
      computed: {
        isConnected() {
          return this.$store.getters.isConnected
        },
        currentWallet() {
          return this.$store.getters.userTokens
        }
      },
      methods: {
        async connectMetamask() {
          if (!this.$store.getters.hasContract) return void this.emitter.emit("notif:show", {
            message: "it's not yet possible to connect to Metamask",
            type: "error"
          });
          if (this.isConnected) return;
          this.emitter.emit("notif:show", {
            message: "Check your Metamask plugin for connect",
            type: "info"
          });
          let e = await C.init();
          "no-contract" !== e && "not-connected" !== e && ("bad-network" !== e ? (this.emitter.emit("notif:show", this.$config.notifFactory("globalConnected")), this.$store.dispatch("refreshWallet")) : this.emitter.emit("notif:permanent", this.$config.notifFactory("globalBadNetwork")))
        }
      }
    };
    a("c0ef");
    ge.render = Fe, ge.__scopeId = "data-v-28ca9668";
    var we = ge,
      xe = {
        name: "social-nav",
        components: {
          ConnectBtn: we
        }
      };
    xe.render = Ae;
    var ve = xe,
      ye = {
        name: "hero",
        components: {
          SocialNav: ve,
          ScrollParallax: ie["a"]
        },
        data() {
          return {
            timeHero: 0
          }
        },
        methods: {
          handleScroll() {
            this.relativeHeroVideo = window.scrollY
          }
        },
        created() {
          window.addEventListener("scroll", this.handleScroll)
        },
        mounted() {
          this.relativeHeroVideo = 0, this.interval = setInterval(() => {
            this.timeHero += .5 * (this.relativeHeroVideo - this.timeHero), this.$refs["hero-video"].currentTime = this.timeHero / 600
          }, 60)
        },
        unmounted() {
          window.removeEventListener("scroll", this.handleScroll), clearInterval(this.interval)
        }
      };
    ye.render = ne;
    var Oe = ye;
    const je = {
        id: "gallery",
        class: "sr-top-more-delayed"
      },
      ke = {
        class: "carousel__item"
      },
      _e = ["src", "alt"];

    function Se(e, t, a, s, o, n) {
      const i = Object(c["G"])("slide"),
        r = Object(c["G"])("pagination"),
        d = Object(c["G"])("carousel");
      return Object(c["y"])(), Object(c["g"])("section", je, [Object(c["k"])(d, {
        "wrap-around": !0,
        "items-to-show": o.nbSlide,
        autoplay: 8e3,
        modelValue: o.currentSlide,
        "onUpdate:modelValue": t[0] || (t[0] = e => o.currentSlide = e),
        transition: 500
      }, {
        addons: Object(c["P"])(() => [Object(c["k"])(r)]),
        default: Object(c["P"])(() => [(Object(c["y"])(), Object(c["g"])(c["a"], null, Object(c["E"])(9, e => Object(c["k"])(i, {
          key: e,
          onMousedown: n.centerSliderDown,
          onMouseup: t => n.centerSliderUp(e - 1)
        }, {
          default: Object(c["P"])(() => [Object(c["h"])("div", ke, [Object(c["h"])("img", {
            src: "images/meka_0" + e + ".jpg",
            alt: "Meka Example 0" + e
          }, null, 8, _e)])]),
          _: 2
        }, 1032, ["onMousedown", "onMouseup"])), 64))]),
        _: 1
      }, 8, ["items-to-show", "modelValue"])])
    }
    a("4001");
    var Te = a("0b81"),
      Le = {
        name: "gallery",
        components: {
          Carousel: Te["a"],
          Slide: Te["c"],
          Pagination: Te["b"]
        },
        data() {
          return {
            nbSlide: 5,
            currentSlide: 0
          }
        },
        methods: {
          resize() {
            let e = window.innerWidth;
            this.nbSlide = e / 500, this.nbSlide < 2 && (this.nbSlide = 2)
          },
          centerSliderDown() {
            this.down = (new Date).getTime()
          },
          centerSliderUp(e) {
            this.down < (new Date).getTime() - 200 || (this.currentSlide = e)
          }
        },
        mounted() {
          window.addEventListener("resize", this.resize), this.resize()
        },
        unmounted() {
          window.removeEventListener("resize", this.resize)
        }
      };
    Le.render = Se;
    var Pe = Le;
    const Me = {
        id: "roadmap",
        class: "column",
        ref: "roadmap"
      },
      Re = {
        class: "decal container"
      },
      Ne = Object(c["h"])("h2", {
        class: "sr-top-fast"
      }, "Roadmap", -1),
      Ie = Object(c["h"])("p", {
        class: "intro sr-top-fast-delayed"
      }, "This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!", -1),
      Ue = {
        class: "middle row relative"
      },
      Ve = Object(c["i"])('<div class="timeline column"><div class="line"><div class="progression"></div></div><div class="step row done"><div class="dot"><div class="shape"></div></div><div class="details"><div class="title row sr-right-fast"><div class="number degrade">.01</div><h3>Launch Roadmap</h3></div><p class="sr-right-fast-delayed"><span class="bold">Quality comes first. The goal is to make our first drop as cool as possible</span> so we can have freedom to develop the universe. We&#39;re still working on a number of rarity criteria, as well as a lot of new Lore concepts. <span class="bold">The drop release date will be announced as soon as the project&#39;s quality and technical aspects are fully progressed.</span> We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time. </p></div></div><div class="step row"><div class="dot"><div class="shape"></div></div><div class="details"><div class="title row sr-right-fast"><div class="number degrade">.02</div><h3>Physical Part</h3></div><p class="sr-right-fast-delayed"><span class="bold">Mekas have a huge potential as physical creations.</span> We are passionate about 3D printing and want to bring our concept to life with high-quality materials. After several talks with famous art toys makers, we are currently working on some concepts but wait, let’s keep a little mystery for the moment! <span class="bold">We also aim to create clothing and merchandise using high-quality materials and textiles with eco-friendly fabrics.</span> Also, Matt. B would love to explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design principles, we will do everything possible to create something amazing before, during, and after the launch of the first Drop! </p></div></div><div class="step row"><div class="dot"><div class="shape"></div></div><div class="details"><div class="title row sr-right-fast"><div class="number degrade">.03</div><h3>MekaVerse x Artists </h3></div><p class="sr-right-fast-delayed">We know a lot of artists in the NFT community and beyond! <span class="bold">We&#39;d like to develop a series in which each Meka is made in collaboration with artists we like and under their artistic direction.</span> We would create a small collection of 1/1 unique Mekas by artists, with all proceeds going to them! This collection is incredibly important to us, and we are excited to see what we can accomplish together! </p></div></div><div class="step row"><div class="dot"><div class="shape"></div></div><div class="details"><div class="title row sr-right-fast"><div class="number degrade">.04</div><h3>Meka Multiverse</h3></div><p class="sr-right-fast-delayed">After presenting our original Mekas, we want to explore <span class="bold">more abstract subjects in order to present a second, very distinct drop.</span> Our aim is simply to aesthetically enlarge the universe, and each relationship between the Meka Dimensions will be described and explained. We truly want to blend artistic disciplines, as well as move beyond our graphic style and look outside our comfort zone. We also want to see if it would be possible to <span class="bold">collaborate with famous mecha licenses</span> on future releases. That would be incredible! </p></div></div><div class="step row"><div class="dot"><div class="shape"></div></div><div class="details"><div class="title row sr-right-fast"><div class="number degrade">.05</div><h3>Future of Mekas</h3></div><p class="sr-right-fast-delayed">When all of these stages are completed, <span class="bold">we’ll take care of maintaining the Meka Universe</span>. We both come from the design industry, and we are truly passionate about Art, Short films, Physical and Digital Exploration, and we would like to explore even more, with the desire to always make events more impressive and ambitious. We are counting on your support! We look forward to seeing what happens in the future! Love from Mekas <span class="bold">♥</span></p></div></div></div>', 1),
      Ge = {
        class: "box"
      },
      We = Object(c["h"])("source", {
        src: "images/helmet.mp4",
        type: "video/mp4"
      }, null, -1),
      He = [We];

    function $e(e, t, a, s, o, n) {
      return Object(c["y"])(), Object(c["g"])("section", Me, [Object(c["h"])("div", Re, [Ne, Ie, Object(c["h"])("div", Ue, [Ve, Object(c["h"])("div", Ge, [Object(c["h"])("video", {
        id: "helmet",
        tabindex: "0",
        preload: "",
        ref: "helmet-video",
        style: Object(c["s"])("transform:translateY(" + o.topHelmet + "px)"),
        playsinline: ""
      }, He, 4)])])])], 512)
    }
    var Ke = {
      name: "roadmap",
      data() {
        return {
          topHelmet: 0
        }
      },
      methods: {
        handleScroll() {
          let e = this.$refs["helmet-video"].getBoundingClientRect(),
            t = this.$refs["roadmap"].getBoundingClientRect();
          this.topHelmetVideo = e.top + window.scrollY;
          let a = window.scrollY - e.top - e.height;
          this.relativeHelmet = a, e.top <= this.limitTopHelmet && 0 === this.startHelmet && (this.startHelmet = window.scrollY), window.scrollY < this.startHelmet && this.startHelmet > 0 && (this.startHelmet = 0, this.topHelmet = 0), this.startHelmet > 0 && t.height + t.top - e.height > this.limitBotHelmet && (this.topHelmet = window.scrollY - this.startHelmet)
        }
      },
      created() {
        window.addEventListener("scroll", this.handleScroll)
      },
      mounted() {
        this.timeHelmet = 0, this.relativeHelmet = 0, this.startHelmet = 0, this.limitTopHelmet = 100, this.limitBotHelmet = 50, this.interval = setInterval(() => {
          this.timeHelmet += .25 * (this.relativeHelmet - this.timeHelmet), this.$refs["helmet-video"].currentTime = this.timeHelmet / 700
        }, 30)
      },
      unmounted() {
        window.removeEventListener("scroll", this.handleScroll), clearInterval(this.interval)
      }
    };
    Ke.render = $e;
    var Ye = Ke;
    const ze = {
        id: "team",
        class: "container"
      },
      qe = Object(c["i"])('<div class="intro row"><div class="title"><div class="question sr-top-fast">Who are we?</div><div class="answer degrade sr-top-fast-delayed">Creative teams</div></div><div class="presentation sr-right-super-delayed"><p>Hi! Mattey &amp; Matt. B are two friends currently focusing on 3D &amp; Art direction. We have been working hard to establish our own style, and we&#39;re continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!</p></div></div>', 1),
      Je = {
        class: "member row"
      },
      Ze = Object(c["i"])('<div class="who column sr-left-fast"><div class="top row"><h2>Mattey</h2><div class="social row"><div class="link"><a href="https://twitter.com/Matteyy_" name="twitter-matteyy_" rel="noopener" target="_blank" class="network twitter row"></a></div><div class="link"><a href="https://www.instagram.com/matteyyy_/?hl=fr" name="instagram-matteyy_" rel="noopener" target="_blank" class="network instagram row"></a></div></div></div><img src="images/mattey.jpg" alt="Profil Picture Mattey"></div><div class="spacer sr-opacity-delayed"></div>', 2),
      Xe = {
        class: "works column sr-right-fast-delayed"
      },
      Qe = Object(c["h"])("div", {
        class: "top row"
      }, [Object(c["h"])("h4", null, "NFTs Artworks")], -1),
      et = ["href"],
      tt = ["src"],
      at = ["href"],
      ct = ["src"],
      st = {
        class: "member row"
      },
      ot = Object(c["i"])('<div class="who column sr-left-fast"><div class="top row"><h2>Matt.B</h2><div class="social row"><div class="link"><a href="https://twitter.com/MattBraccini" name="twitter-MattBraccini" rel="noopener" target="_blank" class="network twitter"></a></div><div class="link"><a href="https://www.instagram.com/matthieubraccini" name="twitter-MattBraccini" rel="noopener" target="_blank" class="network instagram"></a></div></div></div><img src="images/bracco.jpg" alt="Profil Picture Mattey"></div><div class="spacer sr-opacity-delayed"></div>', 2),
      nt = {
        class: "works column sr-right-fast-delayed"
      },
      it = Object(c["h"])("div", {
        class: "top row"
      }, [Object(c["h"])("h4", null, "NFTs Artworks")], -1),
      rt = ["href"],
      dt = ["src"],
      lt = ["href"],
      bt = ["src"];

    function ft(e, t, a, s, o, n) {
      const i = Object(c["G"])("slide"),
        r = Object(c["G"])("pagination"),
        d = Object(c["G"])("carousel");
      return Object(c["y"])(), Object(c["g"])("section", ze, [qe, Object(c["h"])("div", Je, [Ze, Object(c["h"])("div", Xe, [Qe, Object(c["k"])(d, {
        "items-to-show": 1,
        class: "examples",
        mouseDrag: !1
      }, {
        addons: Object(c["P"])(() => [Object(c["k"])(r)]),
        default: Object(c["P"])(() => [(Object(c["y"])(), Object(c["g"])(c["a"], null, Object(c["E"])([1, 3], e => Object(c["k"])(i, {
          key: e
        }, {
          default: Object(c["P"])(() => [Object(c["h"])("a", {
            href: o.matteyURL[e - 1],
            rel: "noopener",
            target: "_blank",
            class: "ref"
          }, [Object(c["h"])("img", {
            src: "images/mattey_work_0" + e + ".jpg",
            alt: "Mattey Artwork 01"
          }, null, 8, tt)], 8, et), Object(c["h"])("a", {
            href: o.matteyURL[e],
            rel: "noopener",
            target: "_blank",
            class: "ref"
          }, [Object(c["h"])("img", {
            src: "images/mattey_work_0" + (e + 1) + ".jpg",
            alt: "Mattey Artwork 02"
          }, null, 8, ct)], 8, at)]),
          _: 2
        }, 1024)), 64))]),
        _: 1
      })])]), Object(c["h"])("div", st, [ot, Object(c["h"])("div", nt, [it, Object(c["k"])(d, {
        "items-to-show": 1,
        class: "examples",
        mouseDrag: !1
      }, {
        addons: Object(c["P"])(() => [Object(c["k"])(r)]),
        default: Object(c["P"])(() => [(Object(c["y"])(), Object(c["g"])(c["a"], null, Object(c["E"])([1, 3], e => Object(c["k"])(i, {
          key: e
        }, {
          default: Object(c["P"])(() => [Object(c["h"])("a", {
            href: o.braccoURL[e - 1],
            rel: "noopener",
            target: "_blank",
            class: "ref"
          }, [Object(c["h"])("img", {
            src: "images/bracco_work_0" + e + ".jpg",
            alt: "Matt.B Artwork 01"
          }, null, 8, dt)], 8, rt), Object(c["h"])("a", {
            href: o.braccoURL[e],
            rel: "noopener",
            target: "_blank",
            class: "ref"
          }, [Object(c["h"])("img", {
            src: "images/bracco_work_0" + (e + 1) + ".jpg",
            alt: "Matt.B Artwork 02"
          }, null, 8, bt)], 8, lt)]),
          _: 2
        }, 1024)), 64))]),
        _: 1
      })])])])
    }
    var ht = {
      name: "team",
      components: {
        Carousel: Te["a"],
        Slide: Te["c"],
        Pagination: Te["b"]
      },
      data() {
        return {
          matteyURL: ["https://superrare.com/artwork-v2/mushroom-meditation-20525", "https://superrare.com/artwork-v2/medusa-21620", "https://www.instagram.com/p/CSE9BATNSS4/", "https://foundation.app/@mattey/butterfly-eyes-23829"],
          braccoURL: ["https://foundation.app/@matthieubraccini/another-world-ii-reinterpreted-26707", "https://foundation.app/@matthieubraccini/penrose-s-arch-12629", "https://foundation.app/@matthieubraccini/stellar-hiatus-22226", "https://foundation.app/@matthieubraccini/indoor-outdoor-76610"]
        }
      }
    };
    ht.render = ft;
    var ut = ht;
    const At = {
        id: "discord"
      },
      Et = {
        class: "container"
      },
      Dt = Object(c["h"])("h2", {
        class: "sr-top-fast"
      }, "Join the community", -1),
      Ct = Object(c["h"])("p", {
        class: "sr-top-fast-delayed"
      }, "MekaVerse Discord already has over 60,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.", -1),
      mt = {
        class: "sr-top-more-delayed"
      },
      Bt = ["href"],
      pt = Object(c["h"])("div", {
        class: "meka sr-bottom-more-delayed"
      }, null, -1);

    function Ft(e, t, a, s, o, n) {
      return Object(c["y"])(), Object(c["g"])("section", At, [Object(c["h"])("div", Et, [Dt, Ct, Object(c["h"])("div", mt, [Object(c["h"])("a", {
        href: e.$config.links.discord,
        rel: "noopener",
        target: "_blank",
        class: "cta"
      }, "Join our Discord", 8, Bt)]), pt])])
    }
    var gt = {
      name: "discord"
    };
    gt.render = Ft;
    var wt = gt;
    const xt = {
        class: "container row"
      },
      vt = Object(c["i"])('<div class="infos column sr-top-fast"><div class="blockmark column"><div class="logo row"><div class="picto"></div><div class="typo">MekaVerse</div></div><p class="baseline">8,888 unique mekas who need drivers.</p></div><p class="copyright">©2021 MekaVerse. All rights reserved.</p></div>', 1),
      yt = {
        class: "right column sr-top-fast-delayed"
      },
      Ot = {
        class: "nav column"
      },
      jt = Object(c["j"])("Home"),
      kt = Object(c["j"])("Terms & Conditions"),
      _t = ["href"];

    function St(e, t, a, s, o, n) {
      const i = Object(c["G"])("router-link"),
        r = Object(c["G"])("social");
      return Object(c["y"])(), Object(c["g"])("footer", null, [Object(c["h"])("div", xt, [vt, Object(c["h"])("div", yt, [Object(c["h"])("div", Ot, [Object(c["k"])(i, {
        to: "/"
      }, {
        default: Object(c["P"])(() => [jt]),
        _: 1
      }), Object(c["k"])(i, {
        to: "/terms"
      }, {
        default: Object(c["P"])(() => [kt]),
        _: 1
      }), e.$store.getters.hasContract ? (Object(c["y"])(), Object(c["g"])("a", {
        key: 0,
        href: e.$tools.etherscanContact(),
        rel: "noopener",
        target: "_blank"
      }, "Smart Contract", 8, _t)) : Object(c["f"])("", !0)]), Object(c["k"])(r)])])])
    }
    const Tt = {
        class: "social row"
      },
      Lt = {
        class: "link"
      },
      Pt = ["href"],
      Mt = {
        key: 0,
        class: "link"
      },
      Rt = ["href"],
      Nt = {
        class: "link"
      },
      It = ["href"];

    function Ut(e, t, a, s, o, n) {
      return Object(c["y"])(), Object(c["g"])("div", Tt, [Object(c["h"])("div", Lt, [Object(c["h"])("a", {
        href: e.$config.links.twitter,
        name: "twitter",
        rel: "noopener",
        target: "_blank",
        class: "twitter row"
      }, null, 8, Pt)]), e.$store.getters.hasContract ? (Object(c["y"])(), Object(c["g"])("div", Mt, [Object(c["h"])("a", {
        href: e.$config.links.collection,
        name: "opensea",
        rel: "noopener",
        class: "opensea row"
      }, null, 8, Rt)])) : Object(c["f"])("", !0), Object(c["h"])("div", Nt, [Object(c["h"])("a", {
        href: e.$config.links.discord,
        name: "discord",
        rel: "noopener",
        target: "_blank",
        class: "discord row"
      }, null, 8, It)])])
    }
    var Vt = {
      name: "social"
    };
    Vt.render = Ut;
    var Gt = Vt,
      Wt = {
        name: "footer-link",
        components: {
          Social: Gt
        }
      };
    Wt.render = St;
    var Ht = Wt;
    const $t = {
        key: 0,
        id: "cookies"
      },
      Kt = {
        class: "container row"
      },
      Yt = {
        class: "infos column"
      },
      zt = Object(c["h"])("div", {
        class: "privacy"
      }, "Your privacy", -1),
      qt = Object(c["j"])("We use cookies to improve your experience on our website. To find out more, read our "),
      Jt = Object(c["j"])("cookie policy"),
      Zt = Object(c["j"])(".");

    function Xt(e, t, a, s, o, n) {
      const i = Object(c["G"])("router-link");
      return o.accepted ? Object(c["f"])("", !0) : (Object(c["y"])(), Object(c["g"])("section", $t, [Object(c["h"])("div", Kt, [Object(c["h"])("div", Yt, [zt, Object(c["h"])("p", null, [qt, Object(c["k"])(i, {
        to: "/terms",
        alt: "Cookie Policy Link"
      }, {
        default: Object(c["P"])(() => [Jt]),
        _: 1
      }), Zt])]), Object(c["h"])("div", {
        class: "cta",
        onClick: t[0] || (t[0] = (...e) => n.accept && n.accept(...e))
      }, "Ok")])]))
    }
    var Qt = {
      name: "cookies",
      data() {
        return {
          accepted: !1
        }
      },
      methods: {
        accept() {
          this.accepted = !0, localStorage.setItem("cookies", 1)
        }
      },
      mounted() {
        localStorage.getItem("cookies") && (this.accepted = !0)
      }
    };
    Qt.render = Xt;
    var ea = Qt,
      ta = {
        name: "Home",
        components: {
          Cookies: ea,
          Team: ut,
          Roadmap: Ye,
          Gallery: Pe,
          Hero: Oe,
          Discord: wt,
          FooterLink: Ht
        },
        data() {
          return {
            open: !1,
            reveal: !0,
            count: 1,
            slide: 0,
            slideEffect: {
              0: !0,
              1: !1,
              2: !1,
              3: !1,
              4: !1
            },
            checkingSalesIsOpen: !1
          }
        },
        methods: {
          mintedMin(e) {
            return this.$store.getters.totalMinted / this.$config.mint.total * 100 >= e
          },
          async checkingSalesOpen() {
            clearTimeout(this.checkingInterval), this.$store.state.salesStarted ? this.checkingSalesIsOpen = !1 : (this.checkingSalesIsOpen = !0, await this.$store.dispatch("checkSaleOpens"), this.checkingInterval = setTimeout(() => {
              this.checkingSalesOpen()
            }, 2e3))
          }
        },
        computed: {
          hasToken() {
            return this.$store.getters.isConnected && this.$store.getters.userTokensCount > 0
          },
          countTokens() {
            return this.hasToken ? this.$config.replaceText(this.$config.texts.countToken, {
              "%count%": this.$store.getters.userTokensCount
            }) : ""
          },
          tokens() {
            return this.$store.getters.userTokens.slice(0, 3)
          },
          collection() {
            let e = [];
            for (let t = 0; t < 6; t++) e.push(this.$tools.random(0, $config.min.total - 1));
            return e
          },
          mintedPct() {
            return "height:" + this.$store.getters.totalMinted / this.$config.mint.total * 100 + "%"
          },
          datePct() {
            let e = parseInt((new Date).getTime() / 1e3),
              t = parseInt(new Date(this.$config.dates.reveal).getTime() / 1e3),
              a = t + 864e3;
            return e < t ? "height:0" : (console.log(e), console.log(t), console.log(a), "height:" + e / a * 100 + "%")
          }
        },
        mounted() {
          window.scrollTo(0, 0), window.scrollrevealStart()
        }
      };
    ta.render = Q;
    var aa = ta;
    const ca = {
        id: "terms"
      },
      sa = {
        class: "container mentions"
      },
      oa = Object(c["j"])("Back to home"),
      na = Object(c["i"])('<h1 class="mentions-title">Terms &amp; Conditions</h1><p>Last Updated : September 10, 2021</p><p>This website is operated by MEKAVERSE. Throughout the site, the term « Mekaverse », « we », « us » or « our » as the context may require, refer to MEKAVERSE. By visiting our site and/or purchasing something from us, you engage in our Service and agree to be bound by the following terms and conditions.</p><p>We reserve the right to update, change or replace any part of these Terms of services without prior written notice at any time, and it is your responsibility to periodically review these Terms of Uses to stay informed of updates. Any changes to the Terms will be in effect as of the « last updated » referenced on the site.</p><p>Your continued use of this site after the last updated dates will constitute your acceptance of agreement.</p><p>By visiting the website of our products merchants, in particular <a href="https://opensea.io/" target="_blank" alt="OpensSea Link">www.opensea.io</a>, you also engage and agree to be bound by their terms and conditions.</p><p>This website is for informational purposes and serves as a binding contract for purchasers of MEKAVERSE NFTs.</p><p>Mekaverse is a generative collection of digital artwork (NFTs) housed and run on the Ethereum Network. Users and Collector of these NFTs are solely responsible for the safety and the management of their own private assets, which include but are not limited to Ethereum Wallets, validating all transactions and contracts generated by this website prior to and after purchases.</p><p>Users certify through purchase that they understand that, as the Mekaverse smart contract runs on the Ethereum network and is bound by their system and terms, there is no ability to undo, reverse, or restore any transactions.</p><p>Any connected services included this website are provided “as is” and “as available” without any warranty of any kind. Use of this website constitutes your agreement that you are accepting sole responsibility for any and all transactions involving Mekaverse digital collectibles.</p><p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence.</p><p>You may not use our products and/or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p><h2 class="mentions-title">Ownership</h2><p>When you purchase your Mekaverse NFT, You Own the NFT : the ownership is transferred to you on the Ethereum blockchain for that individual piece of Art combination of traits and number. Ownership of the NFT is ruled by the smart contract and the Ethereum Network terms. We, Mekaverse, have no ability to alter, freeze, seize or modify the ownership of any Mekaverse NFT. </p><h2 class="mentions-title">Personal Usage</h2><p>Subject to your continued acceptance with these terms, Mekaverse allows you a worldwide, royalty-free licence to use, copy and display the purchased Art, along with any derivative artwork or extensions that you could create or use, limited by the following purposes : (i) for your own personal, non commercial use; (ii) as part of a marketplace that allows the purchase and sales of you Mekaverse / NFT, as long as the marketplace cryptographically verifies that you are the owner, to ensure that only the actual owner have the right to display the Art; or (iii) as part of a third party website or application that permits the inclusion, involvement or participation of your mekaverse, provided that the website or the application cryptographically verifies each Mekaverse owner’s right to display the Art for their Mekaverse, to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the actual owner of the Mekaverse leave the website or application.</p><h2 class="mentions-title">Commercial Usage</h2><p>Subject to actual owner of Mekaverse NFTs continued compliance with these Terms, MEKAVERSE grant you an unlimited, worldwide licence to use, copy and display the purchased Art for the purpose of creating derivative works based upon the Art (« COMMERCIAL USAGE »). The only exception being not to carry out 3D modeling (sale of figurines) because we reserve it for the physical part of our drop. Examples of specified Commercial Use would be the use of the Art to produce and sell physical merchandise products (T-Shirt, Posters, etc.) displaying copie of the purchased Art. Please be aware that nothing in this section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of Mekaverse generally, provided that the marketplace cryptographically verifies each Mekaverse owner’s right to display the Art of their Mekaverse to ensure that only the actual owner can display the Art; (ii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Mekaverse generally, provided that the third party website or application cryptographically verifies each Mekaverse owner’s rights to display the Art for their mekaverse e to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Mekaverse leaves the website/application; or (iii) earning revenue from any of the foregoing.</p><p>Further, Mekaverse reserves the right to use ANY character, including : print or digital advertising, or any purely creative media (including short film, anime, etc.) in support of the Mekaverse community and message.</p><p>However, you cannot use the artwork in connection with images of hatred, violence or any other inappropriate behavior. The License granted in above only applies to the extent that you continue to own the relevant NFT. If at any time you trade, donate, giveaway, transfer or otherwise dispose of your NFT for any reason, the license granted above will immediately expire, without notice, and you will have no further right in or to the artwork of this NFT.</p><h2 class="mentions-title">MekaVerse IP</h2><p>Other than the rights to the Art, nothing gives you any rights to any other trademarks or other intellectual property rights belonging to Mekaverse including, without limitation Mekaverse, MEKAVERSE and the associated logos. All of these rights are expressly reserved in the name of Mekaverse.</p><h2 class="mentions-title">Feedback</h2><p>You can submit comments, bug reports, ideas about the site or the project. By submitting any feedback, you agree that we are free to use them in any way we choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive worldwide licence to incorporate and use the feedback for any purpose.</p><h2 class="mentions-title">Credits</h2><p>Website designed and developed by <a href="https://twitter.com/MiindedStudio" target="_blank" alt="link twitter">Miinded</a>.</p>', 26);

    function ia(e, t, a, s, o, n) {
      const i = Object(c["G"])("header-light"),
        r = Object(c["G"])("router-link"),
        d = Object(c["G"])("discord"),
        l = Object(c["G"])("footer-link");
      return Object(c["y"])(), Object(c["g"])("div", ca, [Object(c["k"])(i), Object(c["h"])("div", sa, [Object(c["k"])(r, {
        to: "/",
        class: "back"
      }, {
        default: Object(c["P"])(() => [oa]),
        _: 1
      }), na]), Object(c["k"])(d), Object(c["k"])(l)])
    }
    const ra = {
        id: "light-hero"
      },
      da = {
        class: "container row sr-top-slow"
      },
      la = Object(c["h"])("div", {
        class: "logo row"
      }, [Object(c["h"])("div", {
        class: "picto"
      }), Object(c["h"])("div", {
        class: "typo"
      }, "MekaVerse")], -1);

    function ba(e, t, a, s, o, n) {
      const i = Object(c["G"])("social-nav");
      return Object(c["y"])(), Object(c["g"])("section", ra, [Object(c["h"])("header", da, [la, Object(c["k"])(i)])])
    }
    var fa = {
      name: "header-light",
      components: {
        SocialNav: ve
      }
    };
    fa.render = ba;
    var ha = fa,
      ua = {
        name: "mentions",
        components: {
          HeaderLight: ha,
          Discord: wt,
          FooterLink: Ht
        },
        mounted() {
          window.scrollTo(0, 0)
        }
      };
    ua.render = ia;
    var Aa = ua;

    const Ea = {
        id: "notFound-404"
      },
      Da = {
        id: "notfound",
        class: "container"
      },
      Ca = Object(c["h"])("div", {
        class: "number"
      }, "404", -1),
      ma = Object(c["j"])(" Oopsies, this page doesn't exist. "),
      Ba = Object(c["h"])("br", null, null, -1),
      pa = Object(c["j"])("Go back "),
      Fa = Object(c["j"])("home"),
      ga = Object(c["j"])(". ");

    function wa(e, t, a, s, o, n) {
    const i = Object(c["G"])("header-light"),
      r = Object(c["G"])("router-link"),
      d = Object(c["G"])("footer-link");
    return Object(c["y"])(),
      Object(c["g"])("div",
        Ea, [Object(c["k"])(i),
          Object(c["h"])("section",
            Da, [Ca, ma, Ba, pa, Object(c["k"])(r, {
              to: "/"
            }, {
              default: Object(c["P"])(() => [Fa]),
              _: 1
            }), ga]), Object(c["k"])(d)
        ])
  }
    var xa = {
      name: "PageNotFound",
      components: {
        HeaderLight: ha,
        FooterLink: Ht
      },
      mounted() {
        window.scrollTo(0, 0)
      }
    };
    xa.render = wa;
    var va = xa;
    const ya = {
        id: "updating",
        class: "container column"
      },
      Oa = Object(c["h"])("div", {
        class: "logo-inline"
      }, null, -1),
      ja = Object(c["j"])(" We are currently updating the website, please try again in a few minutes. ");

    function ka(e, t, a, s, o, n) {
      const i = Object(c["G"])("social");
      return Object(c["y"])(), Object(c["g"])("section", ya, [Oa, ja, Object(c["k"])(i)])
    }
    var _a = {
      name: "Updating",
      components: {
        Social: Gt
      },
      mounted() {
        window.scrollTo(0, 0)
      }
    };
    _a.render = ka;
    var Sa = _a,
      Ta = [{
        path: "/",
        name: "Home",
        component: aa
      }, {
        path: "/terms",
        name: "Mention",
        component: Aa
      }, {
        path: "/:catchAll(.*)",
        component: aa
      }, {
        path: "/updating",
        name: "Updating",
        component: Sa
      }],
      La = (a("7e7d"), a("1344"));
    const Pa = Object(La["a"])(),
      Ma = {
        install(e) {
          "development" === i.NODE_ENV && window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && (window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = e)
        }
      },
      Ra = Object($["a"])({
        history: Object($["b"])(),
        base: "/",
        fallback: !0,
        routes: Ta
      }),
      Na = Object(c["d"])(V);
    Na.use(Ma), Na.use(Ra), Na.config.globalProperties.emitter = Pa, Na.component("vue-select", H["a"]), Na.use(W.a, {
      duration: 1e3
    }), Na.config.globalProperties.$config = r, Na.config.globalProperties.$filters = E, Na.config.globalProperties.$tools = D, Na.use(b), Na.mount("#app")
  },
  6: function(e, t) {},
  7: function(e, t) {},
  "7e7d": function(e, t, a) {},
  8: function(e, t) {},
  8574: function(e, t, a) {},
  9: function(e, t) {},
  c0ef: function(e, t, a) {
    "use strict";
    a("8574")
  }
});
//# sourceMappingURL=app.edaa6c19.js.map
