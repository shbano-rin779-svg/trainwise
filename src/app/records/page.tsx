import RecordForm from "@/components/forms/RecordForm";

export default function RecordsPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Records</h1>
      <p className="mt-2 text-gray-600">トレーニング記録を入力します。</p>

      <RecordForm />
    </main>
  );
}