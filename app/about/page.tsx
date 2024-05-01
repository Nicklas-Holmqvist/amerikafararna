import React from 'react';
import Link from 'next/link';

interface PageProps {}

const page: React.FC<PageProps> = ({}) => {
  return (
    <section className="flex justify-center max-w-[80ch] m-auto">
      <div className="m-auto sm:pt-20">
        <h2 className="text-center text-2xl sm:text-3xl pb-10">
          Välkommen till Markemigranterna
        </h2>
        <p className="pb-6 ">
          Den här sidan är ett projekt som Nicklas Holmqvist och Charlotta
          Andersson Sandberg startade som även driver bloggen Glömd Värld i
          Marks härad. Det hela började med att Nicklas ville skriva om en
          amerikafarare till bloggen och han började då kika närmare på Älekulla
          socken. Efter några dagars registrerande skapades en lista på över 400
          rader och personer som emigrerat till och från Amerika.
        </p>
        <p className="pb-6">
          Denna sidan är frukten av den listan. Just nu är det endast personer
          som levt i Älekulla socken som man kan söka på men om intresset finns
          kan vi utöka det med fler socknar i från Marks härad. Nicklas kan
          hjälpa till som stöd för de personer som skulle vilja vara med på det
          här intressanta projektet.
        </p>
        <p className="pb-6">
          Det ni behöver är en mall i Excel som ni sedan fyller på med personer.
          Nicklas har i nuläget endast gått på husförhörslängden men Charlotta
          har använt flera olika källor för att finna personerna i
          passagerarlistor med mera. Efter listan är färdig importerar jag allt
          till min databas och förhoppningsvis funkar.
        </p>
        <p className="">
          Designmässigt är inspirationen tagen från passagerarlistor och andra
          dokument från tiden mellan 1880&#x2010;1930. Nicklas vill förmedla en
          känsla av att man bläddrar i en sådan passagerarlista och då blir
          kontakten med historien mer personlig. En lista rakt upp och ner hade
          aldrig varit lika intressant att använda, det tror inte Nicklas i alla
          fall.
        </p>
        <div className="w-full flex justify-center gap-8 m-auto pt-10">
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
      </div>
    </section>
  );
};

export default page;
