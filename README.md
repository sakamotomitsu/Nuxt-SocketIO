#Nuxt-SocketIO

## commands
​
​

| command | attachment |
|:---|:---|
|dev |ローカル開発環境を提供 |
|build |本番環境向けに構 |
|start |本番環境の開始 |

​
## directory structure
​
​
```
├── README.md
├── bin
├── nuxt.config.ts
├── package.json
├── src
│   ├── api
│   │   └── main.ts # Socketのサーバーを起動する場所
│   ├── assets # 気にしなくていい 静的ファイル置き場
│   │   └── css 
│   │       ├── entry.sass
│   │       └── resouces
│   │           ├── mixins.sass
│   │           └── variables.sass
│   ├── components # 各種コンポーネント軍
│   │   ├── atoms
│   │   ├── molecules
│   │   └── organisms
│   ├── fetch
│   ├── lib
│   │   └── logger.ts
│   └── pages
│       └── index.vue # ルーティング情報
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```