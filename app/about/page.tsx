import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om Markemigranter | Markemigranter.se',
  description:
    'Information om sidan Markemigranter, vilka som har skapat den och vad som inspirerat för designen.',
};

interface PageProps {}

const page: React.FC<PageProps> = ({}) => {
  return (
    <main className="m-auto bg-schablon bg-repeat bg-small">
      <section
        className="max-w-[1400px] m-auto bg-basic-white py-10 px-8"
        style={{ height: 'calc(100vh - 6.1rem)' }}>
        <h2 className="text-center text-2xl sm:text-3xl pb-10">
          Välkommen till Markemigranterna
        </h2>
        <div className="max-w-[80ch] m-auto">
          <p className="pb-6 ">
            Den här sidan är ett projekt som Nicklas Holmqvist och Charlotta
            Andersson Sandberg startade som även driver bloggen Glömd Värld i
            Marks härad. Det hela började med att Nicklas ville skriva om en
            amerikafarare till bloggen och han började då kika närmare på
            Älekulla socken. Efter några dagars registrerande skapades en lista
            på över 400 rader och personer som emigrerat till och från Amerika.
          </p>
          <p className="pb-6">
            Denna sidan är frukten av den listan. Just nu är det endast personer
            som levt i Älekulla socken som man kan söka på men om intresset
            finns kan vi utöka det med fler socknar i från Marks härad. Nicklas
            kan hjälpa till som stöd för de personer som skulle vilja vara med
            på det här intressanta projektet.
          </p>
          <p className="pb-6">
            Det ni behöver är en mall i Excel som ni sedan fyller på med
            personer. Nicklas har i nuläget endast gått på husförhörslängden men
            Charlotta har använt flera olika källor för att finna personerna i
            passagerarlistor med mera. Efter listan är färdig importerar jag
            allt till min databas och förhoppningsvis funkar.
          </p>
          <p className="">
            Designmässigt är inspirationen tagen från passagerarlistor och andra
            dokument från tiden mellan 1880&#x2010;1930. Nicklas vill förmedla
            en känsla av att man bläddrar i en sådan passagerarlista och då blir
            kontakten med historien mer personlig. En lista rakt upp och ner
            hade aldrig varit lika intressant att använda, det tror inte Nicklas
            i alla fall.
          </p>
        </div>
        <div className="w-full flex justify-center gap-8 m-auto py-10">
          <Link
            className="border p-2 pt-3 hover:bg-green hover:text-basic-white"
            href={'/list?page=1&search='}
            target="_blank">
            Sök i listan
          </Link>
          <Link
            className="border p-2 pt-3 hover:bg-green hover:text-basic-white"
            href={'/map'}
            target="_blank">
            Hitta på kartan
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
