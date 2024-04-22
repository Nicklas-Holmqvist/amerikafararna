import { Metadata } from 'next/types';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Älekullas Amerikafarare',
  description:
    'Hitta alla som emigrerat eller immigrerat från Älekulla socken till Amerika mellan 1862 till 1928',
};

export default async function Home() {
  return (
    <main className="w-100 flex flex-col items-center justify-between py-8">
      <h2 className="text-center text-3xl pt-20 pb-10">
        Välkommen till Markemigranterna
      </h2>
      <p className="w-[80ch] pb-10">
        Den här sidan är ett projekt som Nicklas Holmqvist och Charlotta
        Andersson Sandberg startade som även driver bloggen Glömd Värld i Marks
        härad. Det hela började med att Nicklas ville skriva om en amerikafarare
        till bloggen och han började då kika närmare på Älekulla socken. Efter
        några dagars registrerande skapades en lista på över 400 rader och
        personer som emigrerat till och från Amerika.
      </p>
      <p className="w-[80ch] pb-10">
        Denna sidan är frukten av den listan. Just nu är det endast personer som
        levt i Älekulla socken som man kan söka på men om intresset finns kan vi
        utöka det med fler socknar i från Marks härad.
      </p>

      <p className="w-[80ch] pb-10">
        Designmässigt är inspirationen tagen från passagerarlistor och andra
        dokument från tiden mellan 1880&#x2010;1930. Nicklas vill förmedla en
        känsla av att man bläddrar i en sådan passagerarlista och då blir
        kontakten med historien mer personlig. En lista rakt upp och ner hade
        aldrig varit lika intressant att använda, det tror inte Nicklas i alla
        fall.
      </p>
      <Link
        className="border p-2 pt-3 hover:bg-green hover:text-basic-white"
        href={'/list'}>
        Sök i listan
      </Link>
    </main>
  );
}
