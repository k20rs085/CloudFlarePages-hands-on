import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-orange-400 via-orange-300 to-blue-400 flex items-center justify-center p-4 ${notoSansJP.className}`}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 mb-4">
            Cloudflare Pages
          </h1>
          <p className="text-xl md:text-2xl text-white">高速で簡単にウェブサイトを構築・デプロイ</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FeatureCard
            icon="🚀"
            title="圧倒的なパフォーマンス"
            description="Cloudflareのグローバルネットワークで、比類ない速度と信頼性を実現"
          />
          <FeatureCard
            icon="🛠️"
            title="簡単デプロイ"
            description="Gitにプッシュするだけで、自動ビルドとデプロイを実行"
          />
          <FeatureCard icon="🌐" title="グローバルCDN" description="世界200以上のデータセンターからコンテンツを配信" />
          <FeatureCard
            icon="🔒"
            title="セキュリティ対策済み"
            description="Cloudflareのエンタープライズグレードのセキュリティ機能を標準装備"
          />
        </div>
        <div className="bg-blue-900 bg-opacity-20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">技術的なハイライト</h2>
          <ul className="list-disc list-inside text-blue-100 space-y-2">
            <li>静的サイトとフルスタックアプリケーションの両方をサポート</li>
            <li>Cloudflare Workersによるサーバーレス関数の統合</li>
            <li>ワンクリックでSSLを設定できるカスタムドメイン</li>
            <li>即時ロールバックとプレビューデプロイメント</li>
            <li>チーム向けコラボレーションツール</li>
          </ul>
        </div>
        <div className="text-center">
          <a
            href="https://www.cloudflare.com/ja-jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          >
            Cloudflare Pagesを試す
          </a>
        </div>
      </div>
    </main>
  )
}
type FeatureCardProps = {
  icon: React.ReactNode; // JSXに描画可能な要素
  title: string;         // 文字列
  description: string;   // 文字列
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
      <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
        <div className="text-3xl mb-2">{icon}</div>
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-blue-100">{description}</p>
      </div>
  );
}