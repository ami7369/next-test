# ビルドステージ
FROM node:20-alpine AS builder
# 作業ディレクトリを設定
WORKDIR /app
# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./
# 依存関係をインストール
RUN npm install
# ソースコードをコピー
COPY . .
# Next.jsアプリケーションをビルド
RUN npm run build

# 実行ステージ
FROM node:20-alpine AS runner
# 作業ディレクトリを設定
WORKDIR /app

# 環境変数を設定
# プロダクションモードを有効化
ENV NODE_ENV production  
# すべてのネットワークインターフェースでリッスン
ENV HOSTNAME "0.0.0.0"  
# アプリケーションのポート番号
ENV PORT 3000           

# ビルドステージから必要なファイルのみをコピー
# standaloneモードでビルドされたアプリケーションをコピー
COPY --from=builder /app/.next/standalone ./
# 静的ファイルをコピー
COPY --from=builder /app/.next/static ./.next/static

# コンテナがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["node", "server.js"]