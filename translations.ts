export type Language = 'NL' | 'ENG';

export const translations = {
    NL: {
        header: {
            home: 'Home',
            about: 'Over Ons',
            menu: 'Menu',
            events: 'Events',
            contact: 'Contact',
        },
        common: {
            discoverMenu: 'Ontdek De Kaart',
            viewMenu: 'Bekijk Menu',
            routeTo: 'Route naar Brut de Mer',
        },
        home: {
            heroTitle: 'BRUT DE MER',
            heroSubtitle: "Amsterdam's place to be voor oesters en bubbels",
            heroDescription: 'Brut de Mer brengt de Cote d’ Azur naar het gezellige Gerard Douplein in Amsterdam. Wij zijn een dynamische Oester – Vis – Wijn – Bar waar altijd een heerlijke bruisende sfeer heerst. Kakelverse oesters die dagelijks en direct vanuit de Zeeuwse oester putten geleverd worden.',
            readMore: 'Lees Meer',
            introTitle: 'Puurheid & Passie',
            introText: '"Wij zijn een dynamische Oester – Vis – Wijn – Bar waar altijd een heerlijke bruisende sfeer heerst."',
            sections: {
                oysters: {
                    title: 'Oesters',
                    text: 'Ga jij voor je favoriet of laat je je inspireren door onze oesterman? Met onze 6 verschillende oesters zit er altijd iets passends bij. Keuzestress? Niet nodig! Take it all met onze proeverij!'
                },
                fish: {
                    title: 'Vis',
                    text: 'Dagelijks serveren wij duurzame vis die rechtstreeks uit de zee gevangen wordt. Laat u verrassen en geniet van de vangst van de dag! Ga voor de Fruits de mer en ontdek op BRUTale wijze wat de zee te bieden heeft.'
                },
                wine: {
                    title: 'Wijn',
                    text: 'Een avond zonder wijn is als oesters zonder parels. Maak uw avond af door te genieten van uw favoriete wijn of laat u adviseren door een van ons!'
                },
                bar: {
                    title: 'Bar',
                    text: 'Start de avond met een bubbel en eindig met een cocktail! Naast de wijn, champagne en cocktails serveren wij zowel non-alcoholisch als alcoholische alternatieven, waardoor iedereen een brute experience beleeft.'
                }
            },
            visualMoments: 'Visual Moments',
            reviews: [
                {
                    text: 'Fantastisch eten en goede bediening. Speciaal teruggekomen voor de fantastische oesters, maar ook de bijgerechten zijn top. Bijzonder vriendelijke en snelle bediening.',
                    author: 'Maarten'
                },
                {
                    text: 'Subliem! Absoluut een van de beste visrestaurants waar ik ooit ben geweest! De oesters zijn geweldig, de king krab zoals je hem altijd al wilde eten en de pulpo zo mals...',
                    author: 'Russell Ramirez'
                },
                {
                    text: 'Heerlijk, gezellig en verrassend. Fruit de mer is heerlijk en veel verschillende oesters. De krab, makreel en picana zijn ook echte aanraders.',
                    author: 'Roger'
                }
            ],
            finalVisual: {
                title: 'Beleef de Zilte Smaak',
                subtitle: 'Gerard Douplein 8H, Amsterdam'
            }
        },
        footer: {
            contact: 'Contact',
            openingHours: 'Openingstijden',
            kitchenClose: 'Onze keuken sluit iedere dag om 22:00',
            instagramText: "Deel uw momenten met #brutdemer en beleef de sfeer van de Cote d'Azur in de Pijp.",
            days: {
                mon: 'Maandag',
                tue: 'Dinsdag',
                wed: 'Woensdag',
                thu: 'Donderdag',
                fri: 'Vrijdag',
                sat: 'Zaterdag',
                sun: 'Zondag'
            },
            reserve: 'Reserveren'
        },
        events: {
            heroTitle: 'Events',
            heroSubtitle: 'Bijzondere momenten bij Brut de Mer',
            introText: '"Bij Brut de Mer creëren we herinneringen die blijven hangen zoals de zilte smaak van een perfecte oester."',
            unforgettable: 'Unforgettable Experiences',
            mothersDay: {
                subtitle: 'Zondag 11 Mei',
                title: 'Moederdag bij Brut de Mer',
                text: 'Verras de belangrijkste vrouw in je leven met een onvergetelijke middag aan het Gerard Douplein. Geniet samen van een speciaal geselecteerd plateau Fruits de Mer, sprankelende bubbels en de meest verfijnde oesters in een ambiance van Franse allure.',
                cta: 'Reserveer voor Moederdag'
            },
            private: {
                subtitle: 'Groepen & Partijen',
                title: 'Private Moments',
                text: 'Onze bar is de perfecte plek voor een BRUTale borrel of een op maat gemaakt event. Van oesterproeverijen voor groepen tot exclusieve diners in het hart van de Pijp. Wij verzorgen uw event tot in de kleinste details.',
                cta: 'Vraag een offerte aan'
            },
            finalVisual: {
                title: 'Vier het leven'
            }
        },
        about: {
            heroTitle: 'Over Ons',
            section1Title: 'BRUT DE MER',
            section1Text1: 'Brut de Mer brengt de Cote d\' Azur naar het gezellige Gerard Douplein in Amsterdam. Wij zijn een dynamische Oester – Vis – Wijn – Bar waar altijd een heerlijke bruisende sfeer heerst.',
            section1Text2: 'Kakelverse oesters die dagelijks en direct vanuit de Zeeuwse oester putten geleverd worden. Brut heeft een groot assortiment oesters uit diverse streken waarbij we rekening houden met de verschillende seizoenen en herkomst. De oesters worden op professionele wijze geopend door onze getrainde oestermannen. Zij kunnen u over iedere oester informeren en hierbij een passende wijn adviseren.',
            section2Title: 'WIE ZIJN WIJ',
            section2Text1: 'In april 2015 opende Brut de Mer aan het Gerard Douplein in de Amsterdamse Pijp. Brut de Mer is van vijf vrienden, wij hebben allen ons eigen specialisme waardoor er een goede/sterke synergie ontstaat binnen Brut.',
            section2Text2: 'Voor de een zijn we een oesterbar, voor de ander een visbar of restaurant. Iedereen beleeft Brut de Mer op zijn manier. Met de wijze hoe wij de klant bedienen, onze robuuste uitstraling en fantastische gerechten heeft Brut de Mer vis opnieuw op de kaart gezet. Wij zijn niet traditioneel en zeker niet stijf, met creatieve gerechten, met de beste ingrediënten en enthousiast personeel hebben we een bijzonder mooi en gezellig concept!'
        },
        menu: {
            heroTitle: 'Menu',
            subtitle: 'Ontdek onze dagverse smaken en geselecteerde wijnen',
            quote: '"Savor the ocean\'s finest offerings, paired with the perfect bubbles."',
            allergyWarning: 'Heeft u een allergie? Laat het ons weten! Wij informeren u graag over onze ingrediënten.'
        },
        contact: {
            heroTitle: 'Contact',
            openingHours: 'Openingstijden'
        }
    },
    ENG: {
        header: {
            home: 'Home',
            about: 'About Us',
            menu: 'Menu',
            events: 'Events',
            contact: 'Contact',
        },
        common: {
            discoverMenu: 'Discover the Menu',
            viewMenu: 'View Menu',
            routeTo: 'Directions to Brut de Mer',
        },
        home: {
            heroTitle: 'BRUT DE MER',
            heroSubtitle: "Amsterdam's place to be for oysters and bubbles",
            heroDescription: 'Brut de Mer brings the Cote d’Azur to the cozy Gerard Douplein in Amsterdam. We are a dynamic Oyster – Fish – Wine – Bar where a wonderful bustling atmosphere always prevails. Fresh oysters delivered daily and directly from the Zeeland oyster pits.',
            readMore: 'Read More',
            introTitle: 'Purity & Passion',
            introText: '"We are a dynamic Oyster – Fish – Wine – Bar where a wonderful bustling atmosphere always prevails."',
            sections: {
                oysters: {
                    title: 'Oysters',
                    text: 'Will you go for your favorite or let our oysterman inspire you? With our 6 different oysters, there is always something fitting. Can’t choose? No need! Take it all with our tasting!'
                },
                fish: {
                    title: 'Fish',
                    text: 'We serve sustainable fish caught straight from the sea daily. Be surprised and enjoy the catch of the day! Go for the Fruits de Mer and discover in a BRUTal way what the sea has to offer.'
                },
                wine: {
                    title: 'Wine',
                    text: ' an evening without wine is like oysters without pearls. Complete your evening by enjoying your favorite wine or let one of us advise you!'
                },
                bar: {
                    title: 'Bar',
                    text: 'Start the evening with bubbles and end with a cocktail! Besides wine, champagne, and cocktails, we serve both non-alcoholic and alcoholic alternatives, ensuring everyone has a brutal experience.'
                }
            },
            visualMoments: 'Visual Moments',
            reviews: [
                {
                    text: 'Fantastic food and great service. Came back especially for the fantastic oysters, but the side dishes are also top-notch. Exceptionally friendly and fast service.',
                    author: 'Maarten'
                },
                {
                    text: 'Sublime! Absolutely one of the best fish restaurants I have ever been to! The oysters are amazing, the king crab as you always wanted to eat it and the pulpo so tender...',
                    author: 'Russell Ramirez'
                },
                {
                    text: 'Delicious, cozy and surprising. Fruit de mer is delicious and many different oysters. The crab, mackerel and picana are also highly recommended.',
                    author: 'Roger'
                }
            ],
            finalVisual: {
                title: 'Experience the Salty Taste',
                subtitle: 'Gerard Douplein 8H, Amsterdam'
            }
        },
        footer: {
            contact: 'Contact',
            openingHours: 'Opening Hours',
            kitchenClose: 'Our kitchen closes every day at 22:00',
            instagramText: "Share your moments with #brutdemer and experience the atmosphere of the Cote d'Azur in de Pijp.",
            days: {
                mon: 'Monday',
                tue: 'Tuesday',
                wed: 'Wednesday',
                thu: 'Thursday',
                fri: 'Friday',
                sat: 'Saturday',
                sun: 'Sunday'
            },
            reserve: 'Book a Table'
        },
        events: {
            heroTitle: 'Events',
            heroSubtitle: 'Special moments at Brut de Mer',
            introText: '"At Brut de Mer, we create memories that linger like the salty taste of a perfect oyster."',
            unforgettable: 'Unforgettable Experiences',
            mothersDay: {
                subtitle: 'Sunday May 11th',
                title: 'Mother\'s Day at Brut de Mer',
                text: 'Surprise the most important woman in your life with an unforgettable afternoon at Gerard Douplein. Enjoy a specially selected Fruits de Mer platter together, sparkling bubbles, and the most refined oysters in an ambiance of French allure.',
                cta: 'Book for Mother\'s Day'
            },
            private: {
                subtitle: 'Groups & Parties',
                title: 'Private Moments',
                text: 'Our bar is the perfect place for a BRUTal drink or a custom-made event. From oyster tastings for groups to exclusive dinners in the heart of de Pijp. We take care of your event down to the smallest details.',
                cta: 'Request a Quote'
            },
            finalVisual: {
                title: 'Celebrate Life'
            }
        },
        about: {
            heroTitle: 'About Us',
            section1Title: 'BRUT DE MER',
            section1Text1: 'Brut de Mer brings the Cote d\'Azur to the cozy Gerard Douplein in Amsterdam. We are a dynamic Oyster – Fish – Wine – Bar where a wonderful bustling atmosphere always prevails.',
            section1Text2: 'Fresh oysters delivered daily and directly from the Zeeland oyster pits. Brut has a large assortment of oysters from various regions, taking into account the different seasons and origins. The oysters are professionally opened by our trained oystermen. They can inform you about each oyster and recommend a suitable wine.',
            section2Title: 'WHO WE ARE',
            section2Text1: 'In April 2015, Brut de Mer opened at Gerard Douplein in Amsterdam\'s Pijp neighborhood. Brut de Mer is owned by five friends, each with our own specialty, creating a strong synergy within Brut.',
            section2Text2: 'For some we are an oyster bar, for others a fish bar or restaurant. Everyone experiences Brut de Mer in their own way. With the way we serve our customers, our robust appearance and fantastic dishes, Brut de Mer has put fish back on the map. We are not traditional and certainly not stiff, with creative dishes, the best ingredients and enthusiastic staff we have a very beautiful and cozy concept!'
        },
        menu: {
            heroTitle: 'Menu',
            subtitle: 'Discover our daily fresh flavors and selected wines',
            quote: '"Savor the ocean\'s finest offerings, paired with the perfect bubbles."',
            allergyWarning: 'Do you have an allergy? Let us know! We are happy to inform you about our ingredients.'
        },
        contact: {
            heroTitle: 'Contact',
            openingHours: 'Opening Hours'
        }
    }
};
