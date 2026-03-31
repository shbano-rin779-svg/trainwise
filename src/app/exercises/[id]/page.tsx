type ExerciseDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExerciseDetailPage({
  params,
}: ExerciseDetailPageProps) {
  const { id } = await params;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Exercise Detail</h1>
      <p className="mt-2 text-gray-600">種目詳細画面です。</p>
      <p className="mt-4">Exercise ID: {id}</p>
    </main>
  );
}