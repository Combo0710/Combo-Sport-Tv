import { useRouter } from 'next/router';

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Article: {slug}</h1>
      <p>This is a placeholder for the article content.</p>
    </main>
  );
}
