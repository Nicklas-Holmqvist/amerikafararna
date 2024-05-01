import React from 'react';
import Image from 'next/image';

import FamilyPhoto from '../../public/images/anders-matilda-1891.jpg';

const LandingPageStory = () => {
  return (
    <section className="max-w-[95ch] py-10 pb-8 px-4 md:py20">
      <h3 className="text-3xl pb-8 md:pb4 md:text-4xl text-center md:text-left">
        Anders och Matildas liv
      </h3>
      <Image
        className="float-none mb-8 md:float-left md:mb-0 md:pr-5 md:mr-1 md:pt-2 m-auto"
        src={FamilyPhoto}
        alt="Fotografi tagits i Amerika med Johanna Matilda, Anna Josefina och Anders Andersson"
        width={400}
      />
      <p className="pb-2">
        Det här fotografiet är taget 1891 i Amerika. Vi ser från vänster den
        vackra hustrun Johanna Matilda Josefsdotter, i mitten deras Amerikafödda
        dotter Anna Josefina och maken Anders Andersson.
      </p>
      <p className="pb-2">
        Anders och Matilda var bara en i mängden som reste över till Amerika
        under 1800-talets slut och in på 1900-talet. Det fanns många orsaker
        till att en person eller familj tog det här stora steget. Det kunde vara
        för att få ett bättre uppehälle, söka lyckan i gruvbommen eller fly den
        hårda svenska tillvaron.
      </p>
      <p className="pb-2">
        Anders var född en mörk januaridag 1867 i Bostebygd, Älekulla till
        hemmansägaren Anders Andreasson och Amanda Josefina Andreasdotter. I
        Bostebygd levde de dock inte länge innan de flyttade ner till Kinnared
        1874 där fadern köpt sig hemmanet. Här kom även familjen växa och Anders
        hade 1889 sju yngre syskon. Men då levde inte Anders här på gården utan
        han hade redan sommaren 1885 rest över till Amerika och landade i New
        Britain Connecticut.
      </p>
      <p className="pb-2">
        Johanna Matilda var född i Övre Bälshult, Gunnarp i Halland vintern 1865
        till hemmansägaren Josef Andersson och Katrina Johansdotter. Hon var ett
        mellanbarn i en skara av sex barn och när hon blev 18 år flyttade hon
        till gården Esered för att arbeta som piga. Efter tre år flyttade hon
        tillbaka till sitt barndomshem där hennes äldre bror August Bernhard
        blivit hemmansägare vid och föräldrarna levde på undantag. Johanna
        Matilda arbeta som piga här i ett halvår då hon tog klivet och köpte sig
        en biljett över till andra sidan Atlanten.
      </p>
      <p className="pb-2">
        I Amerika möttes Anders och Johanna Matildas öden och ett kommande
        giftermål stundade. Hösten 1889 gifte sig det unga paret i New Haven,
        Connecticut och i vigseln höll pastorn L. H. Beek. De kommande tre åren
        föddes här döttrarna Anna Josefina och Klara Alfrida. Hemma i Sverige
        gick Anders mor bort hösten 1893 och till våren 1894 gick flyttlasset
        för den lilla familjen hem till Sverige igen och Anders blev nu ägare
        över sin faders gård på Kinnared.
      </p>
      <p className="pb-2">
        Anders två yngre syskon Anna Kristina och Johan Alfred flyttade även de
        över till Amerika när de var runt 20 år gamla och fadern Anders var två
        gånger åren 1895-96. På Kinnared växte Anders och Johanna Matildas
        familj med Johan August, Hilda Maria och Amanda Linnea. Åren gick och
        1912 gifte sig den äldsta dottern Anna Josefina med hemmansägaren Karl
        Edvard Persson på Björnås. Fem år senare gifte sig den andra
        Amerikafödda dottern Anna Josefina med hemmansägaren Alfred Persson,
        Karl Edvards äldre bror på Björnås. På Björnås växte deras familjen men
        1919 gick Anna Josefina bort endast 29 år gammal. De sista åren levde
        Anders, Johanna Matilda och den yngste dottern Amanda Linnéa kvar på
        gården. Amanda Linnéa gifte sig i mars 1931 med hemmanssonen Hilding
        Artur Larsson på Bostebygd och flyttade dit upp. Anders gick bort tre år
        senare, 67 år gammal och Johanna Matilda, nu änka gick, bort nio år
        senare hela 78 år gammal.
      </p>
      <p>
        Så här kunde ett liv av en Amerikafarare se ut men många återkom aldrig.
        Vissa dog tidigt i till exempel gruvolyckor eller andra olyckor och
        vissa lyckades skapa sig ett nytt liv. Över 100 år sedan har familjer
        och släkt åter kunna knyta gamla kontakter med de digitala plattformar
        som finns idag. Och med den här sidan vill jag gärna hjälpa till, på ett
        gratis sätt, få släkterna finna varandra.{' '}
      </p>
    </section>
  );
};

export default LandingPageStory;
