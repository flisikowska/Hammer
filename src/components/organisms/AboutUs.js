import React, { useEffect } from "react";
import styled from "styled-components";
// import Box from "../atoms/Box";
import ServicesElement from "../molecules/ServicesElement";
import malowanie from "../../images/ServicesImages/malowanie.jpg";
import montazScianekDzialowych from "../../images/ServicesImages/montazScianekDzialowych.jpg";
import nakladanieGladzi from "../../images/ServicesImages/nakladanieGladzi.jpg";
import plytki from "../../images/ServicesImages/plytki.jpg";
import spoinowanie from "../../images/ServicesImages/spoinowanie.jpg";
import panelePodlogowe from "../../images/ServicesImages/panelePodlogowe.jpg";

const StyledContainer = styled.div`
  position: relative;
  background-color: #222;
  max-width: 100%;
  padding: 50px 0;
  height: 100%;
  /* padding: 120px 170px; */
  /* @media (max-width: 1200px) {
    padding: 100px 30px;
  }
  @media (max-width: 500px) {
    padding: 70px 10px;
  } */
  /* display: flex;
  flex-wrap: nowrap;
  justify-content: center; */
`;

const Title = styled.div`
  color: white;
  text-align: justify;
  text-align-last: center;

  margin: 100px;
  font-size: 2.1vw;
`;

const AboutUs = () => (
  <StyledContainer>
    <Title>
      Powierzone nam zadania wykonujemy zgodnie ze sztuką budowlaną. Dzięki
      sprawdzonym technologiom osiągamy satysfakcjonujący efekt końcowy.
      Pracujemy na produktach wysokiej jakości z zastosowaniem narzędzi i maszyn
      niezbędnych do profesjonalnej realizacji zleceń. Po każdym etapie działań
      przeprowadzamy dokładne prace porządkowe.
    </Title>
    <div className="swiper-container swiper1">
      <div className="swiper-wrapper">
        <ServicesElement
          className="swiper-slide swiper-slide1"
          title="Montaż ścianek działowych"
          subtitle="Bezpiecznie i funkcjonalnie"
          description="Ścianki działowe w suchej zabudowie charakteryzują się wysoką ognioodpornością. Ich zaletą jest lekka konstrukcja oraz prosty demontaż w przypadku przekształceń  planu  pomieszczeń. (Bez trudu dostosujesz podział przestrzeni w domu do zmieniających się z czasem potrzeb). Ścianki działowe wykonujemy na stelażu metalowym (profile UW,  pionowe CW) lub drewnianym; z zastosowaniem izolacji termicznej oraz akustycznej (taśmy akustyczne, wełna mineralna - standardy przeciwpożarowe). Do zabudowy używamy ognioodpornych i wilgocioodpornych płyt kartonowo-gipsowych. Na życzenie klienta stawiamy ścianki murowane. "
          img={montazScianekDzialowych}
        />
        <ServicesElement
          className="swiper-slide swiper-slide1"
          title="Spoinowanie"
          subtitle="Trwale i bez rys"
          description="Właściwie przeprowadzony proces łączenia płyt gipsowych z zastosowaniem  najlepszych materiałów pozwala niezwykle długo cieszyć się dobrym stanem ścian.
          Do łączenia płyt kartonowo-gipsowych stosujemy masę szpachlową oraz taśmy łączeniowe dostępne na rynku (warto rozważyć zastosowanie taśmy amerykańskiej). Narożniki zewnętrzne ścian zabezpieczamy aluminiowymi narożnikami perforowanymi. Nadmiar kleju usuwamy szlifierką żyrafową. Końcowy etap spoinowania to utrwalenie łączeń preparatem gruntującym. "
          img={spoinowanie}
        />
        <ServicesElement
          className="swiper-slide swiper-slide1"
          title="Nakładanie gładzi"
          subtitle="Fachowo, z doświadczeniem"
          description="Milimetrowa warstwa gładzi zapewnia jednolitą, gładką i śnieżnobiałą powierzchnię. Stosowana gładź polimerowa wyróżnia się większą wydajnoscią oraz elastycznością spośród innych, a także mniej pyli podczas szlifowania. Jest w postaci gotowej masy, stanowi ostatnią warstwę wygładzającą. Finisz nakładamy ręcznie, równomiernie rozprowadzając go na płaszczyźnie sufitów i ścian. Wykonujemy dwukrotną aplikację. W pomieszczeniach ustawiamy przemysłowy osuszacz powietrza, który gwarantuje odpowiedni stopień wysuszenia gładzi.  Do szlifowania wstępnego stosujemy szlifierkę żyrafową, zaś szlifowanie zasadnicze przeprowadzamy wyłącznie ręcznie.  Po dokładnym oczyszczeniu powierzchni -  równe i nieskazitelnie białe sufity i ściany są gotowe do malowan"
          img={nakladanieGladzi}
        />
        <ServicesElement
          className="swiper-slide swiper-slide1"
          title="Malowanie"
          subtitle="I wnętrze nabiera koloru"
          description="Czas urządzać dom! Kompozycję kolorystyczną, rodzaj stosowanych farb określa  klient zgodnie z własnym projektem aranżacji wnętrz. My ze swej strony doradzamy w zakresie zastosowania środków wyrównujących chłonność malowanych  powierzchni. Pracujemy stosując dwie metody nanoszenia farby: z użyciem agregatu natryskowego lub za pomocą wałków malarskich. Efekt końcowy to satysfakcjonujący finał naszej współpracy w zakresie wykończenia ścian salonu, pokojów, kuchni i holu."
          img={malowanie}
        />
        <ServicesElement
          className="swiper-slide swiper-slide1"
          title="Montaż paneli podłogowych "
          subtitle="Profesjonalnie i stylowo"
          description="Precyzyjnie wykończona podłoga nadaje pomieszczeniu niezaprzeczalnego uroku i charakteru. 
          Panele podłogowe w zależności od rodzaju podłoża układamy na dedykowanych do niego podkładach. Zakrytą powierzchnię podłogi okalamy listwami przypodłogowymi. (Warto zwrócić uwagę, by listwy korespondowały zarówno z płaszczyzną podłogi jak i futryną drzwi przejściowych). Na życzenie klienta stosujemy różne techniki układania paneli: na zakładkę (z przesunięciem 33%, z przesunięciem 50% - tzw. „cegiełka”) pionowo, poziomo lub pod kątem 45 stopni do płaszczyzny ścian. Często w salonie podłoga wyznacza strefy funkcjonalne np. aneksu kuchennego lub wypoczynkowego, wówczas montujemy niezbędne listwy łączeniowe i progowe."
          img={panelePodlogowe}
        />
        <ServicesElement
          className="swiper-slide swiper-slide1"
          title="Układanie płytek"
          subtitle="Gres, glazura, terakota"
          description="Mozaiki, dekory, faktury, style. Szaleństwo deseni, rozmiarów, możliwości. 
            Wybór określonego rodzaju płytek to jeszcze nie koniec decyzji związanych z położeniem glazury. 
            Dobór fugi, listw wykończeniowych, cokołu a także zaplanowanie koncepcji ułożenia  płytek w pomieszczeniu należy do kompetencji klienta. 
            Pozostaje jeszcze kwestia mocowania kafelek do podłoża – tu doradzamy kleje wysokoelastyczne. 
            Realizację prawie każdego projektu glazury umożliwia nam profesjonalna przecinarka, bezpyłowa,
            dostosowana do cięcia naprawdę dużych formatów płytek. Kafle układamy z wielką dokładnością, kontrolując wielkość fug 
            i zachowując odpowiedni poziom płaszczyzny. Wszelkie otwory (np. do gniazdek elektrycznych, kranów) wykonujemy diamentowymi 
            koronkami, bez problemu przewiercającymi się przez gres a nawet kamień. Wszystko starannie, estetycznie, zgodnie ze sztuką glazurniczą."
          img={plytki}
        />
      </div>
    </div>
  </StyledContainer>
);

export default AboutUs;

// import Letter from "../atoms/Letter";

// const StyledContainer = styled.div`
//   display: flex;
//   height: 100%;
//   width: 100%;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const StyledText = styled.div`
//   display: flex;
//   letter-spacing: 2px;
//   align-items: center;
//   color: #6c737e;
//   color: ${({ theme }) => theme.grey};
//   font-size: 2.5vw;
//   cursor: default;
//   @media (max-width: 900px) {
//     font-size: 4vw;
//   }
// `;

// {
/* <StyledText>
  <Letter className="letter" letter="h" />
  Budowa domków letniskowych
  </StyledText>
  <StyledText>
  <Letter className="letter" letter="a" />
  Ocieplenia wewnątrz domów z drewna
  </StyledText>
  <StyledText>
  <Letter className="letter" letter="m" />
  Montaż płyt kartonowo-gipsowych
  </StyledText>
  <StyledText>
  <Letter className="letter" letter="m" />
  Spoinowanie, płytki, gładzie, malowanie
  </StyledText>
  <StyledText>
  <Letter className="letter" letter="e" />
  Montaż paneli podłogowych
  </StyledText>
  <StyledText>
  <Letter className="letter" letter="r" />
  Montaż drzwi i okien
</StyledText> */
// }
