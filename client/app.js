var myApplication = {                                    // (1)
    controller: function () {},                          // (2)
    view: function () {                        // (3)
        return m("div",[
          //タイトル
          m("img", {src:"img/title.png",style:"margin-left:45%"}),
          //うどんの絵
          m("img", {src:"img/udon.jpg",style:"margin-left:13%"}),
          //あいさつ
          m("div",[
            m("div", {style:"line-height:1.5;font-size:20px;text-align:center"},
            "新宿御苑前に2015年5月オープンしたうどん店です。"),
            m("div",{style:"line-height:1.5;font-size:20px;text-align:center"},
            "厳選素材を使用した無添加の出汁、自家製のうどん、こだわりの日本酒を提供しています。")
          ]),
          //こだわり
          m("div",{style:"border-left:3px solid #000;padding:2px 0px 2px 12px;margin-bottom:10px;lone-height:1"},[
            m("div",{style:"font-size:20px;text-align:left"},"切麦や 甚六のこだわり"),
            m("div",{style:"font-size:14px;text-align:left"},"厳選素材を使用した無添加の出汁、切り置きなしにこだわったうどん")
          ]),
          //お知らせ
          m("img", {src:"img/kodawari.jpg"}),
          m("div",{style:"border-left:3px solid #000;padding:2px 0px 2px 12px;margin-bottom:10px;lone-height:1"},[
            m("div",{style:"font-size:20px;text-align:left"},"最新のお知らせ"),
            m("div",{style:"font-size:14px;text-align:left"},"おすすめのメニューや営業時間などの最新情報")
          ]),
          m("ul",[
            m("li",[
              m("span",{style:"margin-right:10px;display:inline-block;background:#fff;padding:12px;border-radius:5px"},
                "2017-03-25"),
              m("span",{style:"text-decoration:underline"},"<日本酒入荷のお知らせ>")
            ]),
            m("li",[
              m("span",{style:"margin-right:10px;display:inline-block;background:#fff;padding:12px;border-radius:5px"},
                "2017-03-09"),
              m("span",{style:"text-decoration:underline"},"＜雑誌掲載のお知らせ＞")
            ]),
            m("li",[
              m("span",{style:"margin-right:10px;display:inline-block;background:#fff;padding:12px;border-radius:5px"},
                "2017-02-25"),
              m("span",{style:"text-decoration:underline"},"本日、早仕舞い")
            ]),
            m("li",[
              m("span",{style:"margin-right:10px;display:inline-block;background:#fff;padding:12px;border-radius:5px"},
                "2017-02-12"),
              m("span",{style:"text-decoration:underline"},"＜日本酒入荷のお知らせ＞")
            ]),
            m("li",[
              m("span",{style:"margin-right:10px;display:inline-block;background:#fff;padding:12px;border-radius:5px"},
                "2017-02-08"),
              m("span",{style:"text-decoration:underline"},"＜日本酒入荷のお知らせ＞")
            ])
          ]),
          //おしながき
          m("div",{style:"border-left:3px solid #000;padding:2px 0px 2px 12px;margin-bottom:10px;lone-height:1"},[
            m("div",{style:"font-size:20px;text-align:left"},"おしながき"),
            m("span",{style:"font-size:14px;text-align:left"},"切麦や 甚六のこだわりの一品"),
            m("div",{style:"font-size:14px;text-align:right;margin-top:-15px"},"すべて見る")
          ]),
          //個別
          m("ul",[
            m("li",[
              m("img", {src:"img/cold.png"}),
              m("img", {src:"img/hot.png"})
            ]),
            m("li",[
              m("img", {src:"img/tenpura.png"}),
              m("img", {src:"img/tumami.png"})
            ]),
          ]),
          //甚六について
          m("div",{style:"border-left:3px solid #000;padding:2px 0px 2px 12px;margin-bottom:10px;lone-height:1"},[
            m("div",{style:"font-size:20px;text-align:left"},"甚六について"),
            m("span",{style:"font-size:14px;text-align:left"},"アクセスや営業時間など"),
            m("div",{style:"font-size:14px;text-align:right;margin-top:-15px"},"詳しく見る")
          ]),
          m("img",{src:"img/about.jpg"})
        ]);
    }
};
m.mount(document.getElementById("root"), myApplication); // (5)
