import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-4xl font-bold">TrainWise 💪</h1>
      <p className="text-gray-600">筋トレ記録と成長分析のためのWebアプリ</p>

      <div className="mt-6 flex flex-col gap-3 text-center">
        <Link className="text-blue-600 underline" href="/dashboard">
          ダッシュボード
        </Link>
        <Link className="text-blue-600 underline" href="/records">
          記録一覧
        </Link>
        <Link className="text-blue-600 underline" href="/exercises/1">
          種目詳細
        </Link>
        <Link className="text-blue-600 underline" href="/analysis/muscles">
          部位分析
        </Link>
      </div>
    </main>
  );
}