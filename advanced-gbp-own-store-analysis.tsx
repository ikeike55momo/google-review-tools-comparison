import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { MessageCircle, Clock, HelpCircle, TrendingUp, Star, AlertCircle } from 'lucide-react';

const reviewTrendData = [
  { month: '1月', positive: 70, negative: 30 },
  { month: '2月', positive: 75, negative: 25 },
  { month: '3月', positive: 80, negative: 20 },
  { month: '4月', positive: 85, negative: 15 },
  { month: '5月', positive: 82, negative: 18 },
  { month: '6月', positive: 88, negative: 12 },
];

const popularTimesData = [
  { time: '10:00', popularity: 30 },
  { time: '12:00', popularity: 90 },
  { time: '14:00', popularity: 60 },
  { time: '16:00', popularity: 40 },
  { time: '18:00', popularity: 85 },
  { time: '20:00', popularity: 70 },
];

const keywordData = [
  { keyword: '美味しい', count: 60 },
  { keyword: 'サービスが良い', count: 40 },
  { keyword: '雰囲気が良い', count: 35 },
  { keyword: 'コスパが良い', count: 25 },
  { keyword: '混んでいる', count: 20 },
];

const OwnStoreAnalysis = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <div className="space-y-6 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">自店舗詳細分析（GBPデータ活用）</h1>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          <MessageCircle className="inline mr-2" />
          レビュートレンド
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reviewTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="positive" stroke="#82ca9d" name="ポジティブ" />
            <Line type="monotone" dataKey="negative" stroke="#ff7f0e" name="ネガティブ" />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <h3 className="font-semibold">AI分析結果：</h3>
          <ul className="list-disc list-inside mt-2">
            <li>ポジティブなレビューが継続的に増加しており、特に直近3ヶ月で大きく改善しています。</li>
            <li>ネガティブなレビューは減少傾向にありますが、さらなる改善の余地があります。</li>
            <li>4月から5月にかけて一時的な評価の低下が見られました。この期間の出来事を確認し、再発防止策を講じる必要があります。</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          <Clock className="inline mr-2" />
          人気の時間帯
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={popularTimesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="popularity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <h3 className="font-semibold">AI分析結果と改善提案：</h3>
          <ul className="list-disc list-inside mt-2">
            <li>ピーク時間は12時と18時です。これらの時間帯にスタッフを増員し、サービスの質を維持しましょう。</li>
            <li>14時から16時にかけて比較的空いています。この時間帯に特別なプロモーションを実施し、集客を図りましょう。</li>
            <li>10時の来客数が最も少ないです。朝食メニューの導入や、早朝の営業時間延長を検討しましょう。</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          <HelpCircle className="inline mr-2" />
          よくある質問と回答
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: 予約は必要ですか？</h3>
            <p>A: 週末や祝日は予約をおすすめしています。オンライン予約システムを導入し、簡単に予約ができるようになりました。</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: ベジタリアンメニューはありますか？</h3>
            <p>A: はい、豊富なベジタリアンメニューをご用意しています。アレルギー対応も可能ですので、お気軽にスタッフにお申し付けください。</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: 子供連れでも大丈夫ですか？</h3>
            <p>A: もちろんです。キッズメニューやお子様用の椅子もご用意しています。また、週末にはお子様向けのイベントも開催しています。</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">改善アクション：</h3>
          <ul className="list-disc list-inside mt-2">
            <li>予約システムの利用方法を店頭やSNSで積極的に案内しましょう。</li>
            <li>ベジタリアンメニューのバリエーションをさらに増やし、アレルギー対応メニューの表示を明確にしましょう。</li>
            <li>子供向けイベントの頻度を増やし、家族連れの顧客層を拡大しましょう。</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">頻出キーワード分析</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={keywordData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="count"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {keywordData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`hsl(${index * 70}, 70%, 50%)`} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <h3 className="font-semibold">AI分析結果と強化ポイント：</h3>
          <ul className="list-disc list-inside mt-2">
            <li>「美味しい」という評価が最も多く、料理の質の高さが強みです。定期的なメニュー開発を続けましょう。</li>
            <li>「サービスが良い」という評価も高いです。スタッフ教育を継続し、さらなるサービス向上を目指しましょう。</li>
            <li>「雰囲気が良い」という評価を活かし、インスタ映えするスポットを増やすなど、視覚的な魅力を高めましょう。</li>
            <li>「混んでいる」というキーワードも見られます。予約システムの改善や、待ち時間を活用したサービスを検討しましょう。</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          <AlertCircle className="inline mr-2" />
          最近の重要なレビュー
        </h2>
        <div className="space-y-4">
          {[
            { id: 1, rating: 5, content: "素晴らしい料理とサービス！特に新しく導入されたベジタリアンメニューが素晴らしかったです。" },
            { id: 2, rating: 2, content: "先週土曜日に訪問しましたが、待ち時間が長すぎて不快でした。予約システムの改善が必要だと思います。" },
            { id: 3, rating: 4, content: "料理は美味しかったのですが、席が少し狭いと感じました。もう少しゆったりできると良いですね。" }
          ].map(review => (
            <div key={review.id} className="border p-3 rounded">
              <div className="flex items-center mb-2">
                <Star className={`${review.rating >= 4 ? "text-yellow-500" : "text-gray-400"} mr-1`} />
                <span>{review.rating}/5</span>
              </div>
              <p>{review.content}</p>
              <button 
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => setSelectedReview(review)}
              >
                返信する
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded max-w-lg w-full">
            <h3 className="font-semibold mb-2">レビューへの返信</h3>
            <p className="mb-4">{selectedReview.content}</p>
            <textarea 
              className="w-full h-32 border p-2 mb-4" 
              placeholder="ここに返信を入力してください..."
            ></textarea>
            <div className="flex justify-end">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                onClick={() => setSelectedReview(null)}
              >
                送信
              </button>
              <button 
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setSelectedReview(null)}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">総合分析と改善提案</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>レビュートレンドが上昇傾向にあり、特に直近3ヶ月で大きく改善しています。この好調を維持するため、成功要因を分析し、継続的に実践しましょう。</li>
          <li>ピーク時間帯（12時、18時）のスタッフ配置を強化し、混雑時のサービス品質を維持しましょう。</li>
          <li>14時から16時の比較的空いている時間帯に、特別なプロモーション（例：アフタヌーンティーセット）を実施して集客を図りましょう。</li>
          <li>ベジタリアンメニューが好評なので、さらにバリエーションを増やし、その魅力をSNSなどで積極的にアピールしましょう。</li>
          <li>予約システムの利用を促進し、混雑時の待ち時間問題を軽減しましょう。また、待っている間のサービス（例：ドリンクサービス）も検討しましょう。</li>
          <li>子供連れ家族向けのサービスを強化し、週末のファミリー客の増加を目指しましょう。</li>
          <li>「雰囲気が良い」という評価を活かし、店内装飾やライティングにさらに注力し、より魅力的な空間づくりを行いましょう。</li>
          <li>ネガティブなレビューには迅速かつ丁寧に対応し、問題解決の姿勢を示すとともに、その内容を今後のサービス改善に活かしましょう。</li>
        </ul>
      </div>
    </div>
  );
};

export default OwnStoreAnalysis;
