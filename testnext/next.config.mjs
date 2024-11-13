
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Docker環境で動作させるために必要な設定
    output: 'standalone', // スタンドアロンモードでビルドを行い、依存関係を含めた完全な実行環境を生成

    // サブディレクトリでのホスティング設定
    basePath: '/subdirectory', // アプリケーションのベースパスをサブディレクトリに設定
    // 本番環境の場合はサブディレクトリパスを、開発環境では空文字を使用
    assetPrefix: process.env.NODE_ENV === 'production' ? '/subdirectory' : '', 

    // セキュリティとパフォーマンスの設定
    poweredByHeader: false, // 'X-Powered-By' ヘッダーを無効化してセキュリティを向上
    generateEtags: false,   // ETagの生成を無効化（キャッシュ制御をカスタマイズする場合に使用）
    compress: true         // レスポンスの圧縮を有効化してパフォーマンスを改善
}

export default nextConfig
