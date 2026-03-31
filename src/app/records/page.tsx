export default function RecordsPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Records</h1>
      <p className="mt-2 text-gray-600">トレーニング記録を入力します。</p>

      <form className="mt-8 space-y-6 rounded-xl border p-6 shadow-sm">
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium">
            日付
          </label>
          <input
            id="date"
            type="date"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="exercise" className="block text-sm font-medium">
            種目
          </label>
          <select
            id="exercise"
            className="w-full rounded-md border px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              種目を選択してください
            </option>
            <option value="bench-press">ベンチプレス</option>
            <option value="squat">スクワット</option>
            <option value="deadlift">デッドリフト</option>
            <option value="lat-pulldown">ラットプルダウン</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="weight" className="block text-sm font-medium">
              重量 (kg)
            </label>
            <input
              id="weight"
              type="number"
              min="0"
              step="0.5"
              className="w-full rounded-md border px-3 py-2"
              placeholder="50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="reps" className="block text-sm font-medium">
              回数
            </label>
            <input
              id="reps"
              type="number"
              min="1"
              className="w-full rounded-md border px-3 py-2"
              placeholder="8"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="sets" className="block text-sm font-medium">
              セット数
            </label>
            <input
              id="sets"
              type="number"
              min="1"
              className="w-full rounded-md border px-3 py-2"
              placeholder="3"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="rpe" className="block text-sm font-medium">
            RPE
          </label>
          <input
            id="rpe"
            type="number"
            min="1"
            max="10"
            className="w-full rounded-md border px-3 py-2"
            placeholder="8"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="note" className="block text-sm font-medium">
            メモ
          </label>
          <textarea
            id="note"
            rows={4}
            className="w-full rounded-md border px-3 py-2"
            placeholder="最後のセットがきつかった"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-black px-4 py-2 text-white transition hover:opacity-90"
        >
          記録する
        </button>
      </form>
    </main>
  );
}