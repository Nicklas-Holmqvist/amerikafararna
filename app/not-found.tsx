import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="text-center pt-24">
      <h2 className="text-3xl pb-4">Ett fel har inträffat!</h2>
      <p>Vi kan inte hitta det ni söker</p>
      <Link className="underline" href="/">
        <p>Gå tillbaka till start</p>
      </Link>{' '}
    </main>
  );
}
