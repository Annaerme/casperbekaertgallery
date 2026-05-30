/* ═══════════════════════════════════════════
   CASPER BEKAERT GALLERY — i18n.js
   Talen: EN | NL | FR
   ═══════════════════════════════════════════ */

const I18N = {

  en: {
    /* ── Nav ── */
    'nav.home':        'Home',
    'nav.exhibitions': 'Exhibitions',
    'nav.artists':     'Artists',
    'nav.press':       'Press',
    'nav.contact':     'About',

    /* ── Press page ── */
    'press.title':     'Press',
    'press.readmore':  'Read more →',

    /* ── Footer ── */
    'footer.tagline':  'A space where contemporary art meets unique places — immersive experiences beyond traditional white walls.',
    'footer.nav':      'Navigation',
    'footer.social':   'Social media',
    'footer.copy':     '© 2025 Casper Bekaert Gallery — All rights reserved',

    /* ── Homepage ── */
    'home.eyebrow':    'Ertvelde, Belgium — Est. 2025',
    'home.desc':       'A space where contemporary art meets unique places. We collaborate with artists to create projects that transform familiar environments into sites of imagination, dialogue, and discovery.',
    'home.btn.exh':    'Explore Exhibitions',
    'home.btn.art':    'Explore Artists',
    'home.exh.label':  'Exhibitions',
    'home.exh.title':  'Where art <em>belongs</em>',
    'home.no.upcoming':'No upcoming projects yet',
    'home.btn.all':    'All Exhibitions',
    'home.statement':  '"By bringing art beyond traditional white walls, we offer both artists and audiences a new way to experience creativity: <em>immersive, surprising, and unforgettable.</em>"',
    'home.art.label':  'Guest Artists',
    'home.art.title':  'The <em>voices</em> behind the work',

    /* ── Info strip ── */
    'strip.location':  'Location',
    'strip.contact':   'Contact',
    'strip.phone':     'Phone',

    /* ── Newsletter ── */
    'nl.label':        'Updates',
    'nl.title':        'Don\'t miss any <em>gallery</em> news',
    'nl.sub':          'New exhibitions, artists and gallery news direct in your inbox.',
    'nl.firstname':    'First name',
    'nl.lastname':     'Last name',
    'nl.email':        'Email address',
    'nl.submit':       'Subscribe',
    'nl.privacy':      'We respect your privacy — no spam, unsubscribe anytime.',
    'nl.success':      'Thank you — welcome to the gallery.',

    /* ── Exhibitions page ── */
    'exh.page.label':  'Exhibitions',
    'exh.page.title':  'Exhibitions',
    'exh.page.sub':    'Contemporary art in unique, unexpected places — transforming familiar environments into sites of imagination, dialogue, and discovery.',
    'exh.upcoming':    'Upcoming Exhibitions',
    'exh.no.upcoming': 'No upcoming projects yet',
    'exh.past':        'Past Exhibitions',
    'exh.status.dist': 'Past · Group exhibition · 1,200 visitors',
    'exh.status.bak':  'Past · Group exhibition · 750 visitors',

    /* ── Exhibition detail ── */
    'exh.back':         '← Exhibitions',
    'exh.meta.dates':   'Dates',
    'exh.meta.loc':     'Location',
    'exh.meta.vis':     'Visitors',
    'exh.meta.cur':     'Curators',
    'exh.meta.photo':   'Photography',
    'exh.gallery.label':'Photography',
    'exh.gallery.title':'Images from the <em>exhibition</em>',
    'exh.art.label':    'Participating artists',
    'exh.art.title':    'The <em>voices</em> behind the work',
    'exh.type.dist':    'Group exhibition · Past',
    'exh.type.bak':     'Group exhibition · Past',

    /* ── Artists page ── */
    'art.page.label':  'Guest Artists',
    'art.page.title':  'Artists',
    'art.page.sub':    'A growing community of contemporary artists whose practice pushes beyond convention — each bringing a distinct voice to our immersive exhibitions.',

    /* ── Artist detail ── */
    'art.back':        '← Artists',
    'art.works':       'Selected Works',

    /* ── Contact ── */
    'ct.label':        'Get in touch',
    'ct.title':        'Contact',
    'ct.sub':          'Questions about exhibitions, artist collaborations, or press inquiries — we\'d love to hear from you.',
    'ct.addr':         'Address',
    'ct.email':        'Email',
    'ct.phone':        'Phone',
    'ct.curators':     'Curators',
    'ct.nl.title':     'Don\'t miss any <em>gallery</em> news',
    'ct.nl.sub':       'New exhibitions, artists and gallery news direct in your inbox.',

    /* ── Artist mediums ── */
    'med.painting':    'Painting',
    'med.sculpture':   'Sculpture',
    'med.install':     'Sculpture & Installation',
    'med.photo':       'Photography & Conceptual',
    'med.multi':       'Multidisciplinary',
    'med.visual':      'Visual Arts',

    /* ── Exhibition navigation ── */
    'exh.nav.overview':    'Overview',
    'exh.nav.photos':      'Photos',
    'exh.nav.artists':     'Artists',
    'exh.nav.press':       'Press',
    'exh.nav.publication': 'Publication',
    'exh.type.label':      'Group exhibition',
    'exh.artists.with':    'With',
    'exh.view.cta':        'View exhibition →',
    'exh.section.photos':  'Photos',
    'exh.section.press':   'Press',
    'exh.section.pub':     'Publication',
    'exh.pdf.prev':        '← Previous',
    'exh.pdf.next':        'Next →',
    'exh.lb.close':        '✕ close',

    /* ── Distillery ── */
    'exh.dist.visitors':        '1.200 visitors',
    'exh.dist.copy':            'Art met craft. Contemporary works sparked curiosity, celebrated the space and offered inspiring experiences, transforming the Filliers Distillery into a site of imagination and discovery. 1.200 visitors over two weekends.',
    'exh.dist.body.p1':         'Art met craft. Contemporary works sparked curiosity, celebrated the space, and offered inspiring experiences, transforming the Filliers Distillery into a site of imagination and discovery.',
    'exh.dist.body.p2':         'By bringing art beyond traditional white walls, the exhibition offered both artists and audiences a new way to experience creativity: immersive, surprising, and unforgettable. Over two weekends, 1.200 visitors discovered the intersection of contemporary art and craft heritage.',
    'exh.dist.body.p3':         'Ten artists responded to the industrial grandeur of the distillery with works ranging from painting and sculpture to installation and conceptual practice, each bringing a distinct voice to a space defined by copper kettles, oak barrels, and the scent of grain.',
    'exh.dist.photo.credit':    'Photography by Steven Vercruysse',
    'exh.dist.section.artists': 'Participating artists',
    'exh.dist.bio.alex':   'Works with fragments sourced from films, documentaries, found images, and television broadcasts. His paintings carry a subtle, restless atmosphere and open up spaces for interpretation.',
    'exh.dist.bio.arno':   'Antwerp-based multidisciplinary artist whose work constructs a counter-reality questioning authority, social control, and imposed norms.',
    'exh.dist.bio.jand':   'Creates modest, grand work shaped by persistent memories. Works from images that have lodged themselves in his perception and refuse to be forgotten.',
    'exh.dist.bio.janv':   'Belgian painter engaging with classical traditions, unfolding meaning through time and slow, attentive viewing.',
    'exh.dist.bio.jeroen': 'Reflects on unfamiliar spaces as strange, almost magical worlds where not understanding becomes an invitation to look, remember, and imagine.',
    'exh.dist.bio.manon':  'Paints intimate figures from memory within quiet landscapes. Her work invites slow looking — not to explain, but to feel.',
    'exh.dist.bio.martha': 'Explores the human body through sculpture, painting, and drawing. Blends abstraction with realism, emphasising strength and elegance.',
    'exh.dist.bio.randoald':'Explores language, history, and identity through shifting layers of meaning. Balancing between visibility and concealment.',
    'exh.dist.bio.stief':  'Multidisciplinary practice exploring the ambiguous relationship between nature and culture. Works with subtle irony and conceptual precision.',
    'exh.dist.bio.william':'Belgian painter blending dreamlike imagery exploring ego and media influence. International exhibitions spanning Europe and beyond since 2017.',

    /* ── Bakery ── */
    'exh.bak.visitors':        '750 visitors',
    'exh.bak.copy':            'Art and a unique space came together in an accessible, one-of-a-kind experience. The bakery\'s architecture became the conceptual foundation. 750 visitors over three days.',
    'exh.bak.body.p1':         'Art and a unique space came together in an accessible, one-of-a-kind experience. The bakery\'s architecture, with its cold storage, ovens, and flour-dusted walls, became the conceptual foundation of the exhibition.',
    'exh.bak.body.p2':         'Seven artists responded to the space with works ranging from painting to sculpture, exploring themes of memory, materiality, and the everyday. Where the rhythm of labour once produced the smell of fresh bread, a different kind of alchemy took place: a merging of images, materials, and ideas. Each work carried its own voice, but together they searched for harmony, a resonance reaching beyond style or medium.',
    'exh.bak.body.p3':         'As Marcel Duchamp brought art into the domain of the everyday, and Guillaume Bijl smuggled the everyday into the art world, Gallery in the Bakery moved between those two poles. Not a reconstruction, not a conventional gallery, but a search for balance between form and content, between intuition and concept. Over three days, 750 visitors discovered contemporary art in a setting that transformed the familiar into something surprising and unforgettable.',
    'exh.bak.photo.credit':    'Photography by Naya Vandevenne',
    'exh.bak.section.artists': 'Discover the Artists',
    'exh.bak.bio.alex':    'Works with images from films, documentaries, and found materials, exploring the intangible and the underlying in his paintings. His work invites an ongoing dialogue between image, past, and viewer.',
    'exh.bak.bio.cas':     'Rooted in authentic craftsmanship and the use of local materials. His designs are pure, timeless creations that bridge tradition and contemporary design, with a deep appreciation for cultural heritage.',
    'exh.bak.bio.edo':     'Turned from cycling to art in 2021. From his Antwerp studio, he creates sculptures that capture raw human emotion in a personal yet universal language.',
    'exh.bak.bio.jean':    'Often called the "painter of silence." He isolates simple, everyday objects from their context and distills them to their essence, evoking a meditative atmosphere in his still lifes.',
    'exh.bak.bio.orlando': 'Explores the boundaries between language, image, and concept. His work is a continuous search for new forms of expression that connect thought and feeling.',
    'exh.bak.bio.randoald':'Intertwines history, language, and symbolism in his art, exploring the ambiguity and layered nature of meaning. His works invite reflection and a deeper dialogue between past and present.',
    'exh.bak.bio.emile':   'Creates collage-like paintings that merge abstraction and figuration into evocative memories, playfully visualising heavy themes such as mourning, pain and acceptance, while enveloping the viewer in a melancholic and ominous atmosphere.',

    /* ── About/Contact page ── */
    'ct.page.title':      'About',
    'ct.about.para1':     'What happens when a space, devoted to the kneading, rising and baking of bread, empties itself of all its objects and remains as an apparently hollow shell? And what if that very place becomes where art makes its entrance, not as an addition to a white, sterile gallery space, but as a new form of encounter between the everyday and the extraordinary?',
    'ct.about.para2':     'Gallery in the Bakery departs from a personal conviction: that art should come closer to people. Accessible, tangible, and made with whatever is at hand. The bakery and workshop of Casper\'s parents became the place where a passion for art and a desire to build something real first took concrete shape. Later, the aged cellars and functional interiors of the Filliers distillery offered a second chapter, different in character, equally unintended, and equally alive.',
    'ct.about.para3':     'Both spaces carry their own particular symbolism. Where the rhythm of labour and repetition once produced the smell of fresh bread, and where industry shaped rooms around function and time, a different kind of alchemy now takes place: a merging of images, materials and ideas. Each work carries its own voice, but together they search for harmony and unity, for a resonance that reaches beyond style or medium.',
    'ct.about.para4':     'The bakery and the distillery become laboratories of consonance, places where contrasts do not collide but complement, where individual works find meaning within the whole, and where the weight of a space\'s history quietly enters into conversation with what is shown inside it.',
    'ct.about.para5':     'As Marcel Duchamp brought art into the domain of the everyday, and Guillaume Bijl smuggled the everyday into the art world, Gallery in the Bakery moves between those two poles. There is no reconstruction of a shop here, nor a conventional gallery. Instead, a search for balance, between form and content, between intuition and concept, between distance and proximity.',
    'ct.about.para6':     'These spaces, never designed for art and never asking anything of you before you walk through the door, invite the viewer to look with an open eye. To experience the dialogue between works. To discover how, in unexpected rooms, new connections can form.',
    'ct.team.title':      'Team',
    'ct.team.role.cur':   'Co-founder & Curator',
    'ct.team.role.dir':   'Co-founder & Managing Director',
    'ct.socials.label':   'Socials',
    'ct.form.intro':      'Do you have a question, an interest in collaborating, or need more information? We are happy to help. Feel free to get in touch with us.',
    'ct.form.name':       'Name',
    'ct.form.message':    'Message',
    'ct.form.submit':     'Send message',
    'ct.ml.title':        'Mailing list',
    'ct.ml.intro':        'Stay informed about new exhibitions, artists and gallery news. We believe in sharing art as a way of connecting.',

    /* ── Homepage extra ── */
    'home.recent.exh':   'Recent exhibition',
    'home.recent.cta':   'Explore our past exhibitions →',

    /* ── Artist detail pages ── */
    'alex.label':   'Painting · b. 2000',
    'alex.bio.p1':  'Alex Brassart (born 2000) is a contemporary artist who works with fragments sourced from films, documentaries, found images, and television broadcasts.',
    'alex.bio.p2':  'His paintings carry a subtle, restless atmosphere and open up spaces for interpretation. They create an interplay between the image, the past, and the viewer, with the elusive and intangible at the core.',
    'alex.quote':   '"His paintings carry a subtle, restless atmosphere and open up spaces for interpretation — an interplay between the image, the past, and the viewer."',

    'arno.label':   'Sculpture · b. 1999',
    'arno.bio.p1':  'Arno Camps (1999) is a Belgian artist based in Antwerp who studied Fashion and Sculpture at the Royal Academy of Fine Arts in Ghent (KASK), earning a Master\'s degree in Sculpture in 2024. His multidisciplinary practice spans sculpture, fashion, poetry, performance, sound, photography, and video.',
    'arno.bio.p2':  'His work constructs a counter-reality that questions authority, social control, and imposed norms. Starting from poetic reflections, he transforms personal experiences into layered visual compositions balancing humor, surrealism, and raw materiality. He embraces imperfection and hybrid forms existing between figuration and abstraction, creating tension between familiarity and alienation.',
    'arno.bio.p3':  'Through installations, manipulated objects, and 2D works, he builds interconnected narratives addressing beauty, freedom, masculinity, and societal structures. By positioning himself as a persona within his practice, Camps converts his artistic process into a theatrical act of resistance, using ritual and symbolism to question the world around him.',

    'jand.label':   'Painting · b. 1978',
    'jand.bio.p1':  'Jan De Lauré was born in 1978. His artistic practice is characterized by restraint and deliberation. He produces a limited number of works, allowing each piece extensive development time.',
    'jand.bio.p2':  'Rather than claiming specific subject matter or thematic representation, De Lauré works from images that have lodged themselves in his perception and refuse to be forgotten. His approach is non-explanatory and non-appropriative. He does not seek to understand the images that compel him; instead, he respects their grip on him and serves as their medium.',
    'jand.bio.p3':  'Through sustained attention, he allows these images, described as strange and sometimes like lost photographs, to emerge fully realized.',
    'jand.quote':   '"His images arise from his personal inability to forget them. They passed through his perception and remained lodged there."',

    'janv.label':   'Painting · b. 1978',
    'janv.bio.p1':  'Jan Vindevogel (born 1978) is a painter whose practice centers on exploring new relationships. While contemporary in approach, he draws continuous inspiration from classical painting traditions, not to replicate them, but to engage in ongoing dialogue with evolving artistic heritage.',
    'janv.bio.p2':  'His work functions as a structural arrangement that guides viewing rather than as narrative illustration. The paintings operate through time, unfolding via duration, delay, and delayed impact rather than immediate comprehension. Experience develops over time rather than through instant meaning-making.',

    'jeroen.label':  'Painting · b. 1981',
    'jeroen.bio.p1': 'Jeroen Frateur explores the unknown through visual art. He describes being confronted with unfamiliar structures, like car engines or grain distilleries, that possess "magical powers" yet remain incomprehensible.',
    'jeroen.bio.p2': 'His practice centers on examining things that intrigue us despite our lack of understanding, allowing viewers to relate unfamiliar elements to personal memories and experiences, similar to an astronaut discovering an unknown planet.',
    'jeroen.quote':  '"My artworks refer to the unknown. What we do not know, we cannot place. We can look at it, however, and experience a possible magic..."',

    'manon.label':   'Painting · b. 1998',
    'manon.bio.p1':  'Manon Soetens investigates connections between humans and the natural world. Her subjects are real people encountered in daily life or recalled from childhood memories. She captures them in moments of deep focus, absorbed in nature, music, art, or play.',
    'manon.bio.p2':  'She then repositions these figures within distinctive landscapes inspired by her extensive walks through Scotland and England. This approach creates contemplative spaces that offer respite from our overstimulated world.',
    'manon.quote':   '"Her work invites slow looking. Not to explain, but to feel: what lingers when words disappear?"',

    'martha.label':  'Sculpture · b. 1971',
    'martha.bio.p1': 'Martha Onderwater draws inspiration from the human form across multiple mediums including sculptures, paintings, and drawings. Her artistic goal centers on blending abstraction with realism, emphasizing strength and elegance in lines and boldness in shape.',
    'martha.bio.p2': 'Onderwater employs diverse materials that complement each other. She alternates between rapid drawing and painting, which provide creative freedom, and stone carving, which offers contemplative space. This interplay between spontaneity and deliberate craftsmanship fundamentally shapes her artistic output. She believes finished work should communicate independently without explanation.',
    'martha.quote':  '"My art is a conversation; the material is my partner."',

    'randoald.label':  'Painting · b. 1979',
    'randoald.bio.p1': 'Randoald Sabbe (1979) explores the complexity of language, history, and identity. Through the use of symbols and imagery, he uncovers and challenges multiple layers of meaning.',
    'randoald.bio.p2': 'His art invites reflection on how we construct meaning about the world and ourselves, delicately balancing between visibility and concealment. Sabbe\'s work engages viewers in a thoughtful dialogue about memory, culture, and the fluid nature of interpretation, encouraging a deeper awareness of the narratives that shape our collective and personal identities.',

    'stief.label':   'Multidisciplinary · b. 1973',
    'stief.bio.p1':  'Stief DeSmet (b. 1973) lives and works in Bachte-Maria-Leerne, Belgium and Minot, France. His artistic practice explores the ambiguous relationship between nature and culture, examining human manipulation of the natural world.',
    'stief.bio.p2':  'He navigates the tension between modern consumer society and a yearning for an idealized natural state, employing irony to critique nostalgic fantasies. DeSmet works across multiple mediums, painting, sculpture, video, performance, and installation, manipulating iconic imagery to disrupt conventional meaning.',
    'stief.bio.p3':  'His work appears in private collections across Belgium, the Netherlands, France, the USA, and Switzerland, with pieces in public spaces throughout Belgium, the Netherlands, and France.',
    'stief.quote':   '"By manipulating iconic images he counters possible significations, adds a stratum of significance or deludes the spectator."',

    'william.label':  'Painting · b. 1993',
    'william.bio.p1': 'William Ludwig Lutgens is a Belgian painter whose work blends dreamlike imagery exploring the relationship between ego and media influence. His practice examines how self-image is shaped, and distorted, by cultural representation, advertising, and the saturated visual landscape of contemporary life.',
    'william.bio.p2': 'With international exhibitions spanning Europe and beyond since 2017, Lutgens has developed a distinctive visual language that sits between the familiar and the uncanny. His canvases draw viewers into spaces where identity becomes fluid and the boundaries between the personal and the collective dissolve.',

    'emile.label':   'Painting · b. 2001',
    'emile.bio.p1':  'Emile Desweemer (2001) brings a representation of how painting can playfully visualise heavy themes. Desweemer\'s paintings provide a broader view of how the artist deals with themes such as mourning, pain and acceptance. The works are not only individualistic, but also evoke a sense of recognition. The viewer is taken on an emotional journey, focusing on the contrast between abstract and figurative art.',
    'emile.bio.p2':  'Emile Desweemer\'s work exudes a beautiful semblance of melancholy, in which darkness is often present as an undertone. The images are often constructed from a collage form — composed of various fragments from different scenarios. The artist views his work as a representation of a memory. Desweemer\'s work often has an ominous atmosphere, like a disaster waiting to happen.',

    'orlando.label':  'Painting · Drawing · b. 1994',
    'orlando.bio.p1': 'Orlando Gruwez (1994) is a painter and occasionally a maker of furniture and sculptures. Using old books, encyclopedias, postcards, collected prints, and self-made photographs, he searches for his own visual language. Transience is an important theme throughout his work. He primarily works with oil paint, and in recent years he has increasingly focused on drawing.',
    'orlando.bio.p2': 'During secondary school, he followed a program in visual arts, which sparked his interest in art. He completed a full-time wood and furniture program at Goca Gent, then studied interior design at LUCA School of Arts Gent, graduating in 2017. Since then, he has continued painting and has participated in various exhibitions, both in group shows and in collaboration with galleries or museums.',

    'cas.label':   'Design · Craftsmanship · b. 2000',
    'cas.bio.p1':  'Cas Reynders (2000) is a designer dedicated to authentic craftsmanship and the use of local materials. Drawing inspiration from ancient archetypes and timeless forms, he translates these influences into simple, pure designs that speak to both heritage and modernity. His work reflects a profound appreciation for the material world and the rich narratives embedded in traditional craftsmanship.',
    'cas.bio.p2':  'Each piece he creates by hand in Belgium bridges the gap between tradition and contemporary design, emphasizing sustainability, tactile quality, and cultural continuity. Cas\'s process involves deconstructing archetypes and a deep respect for the natural characteristics of his chosen materials, resulting in objects that are both functional and poetic.',

    'edo.label':   'Sculpture · b. 2000',
    'edo.bio.p1':  'After an abrupt stop to his cycling career, Edo Maas (2000) began searching for new goals. In 2021, he enrolled at the Willem de Kooning Academy in Rotterdam. What started as an interest in art soon grew into a profound artistic pursuit. Now working from his studio in Antwerp, Maas creates sculptures that explore the human condition.',
    'edo.bio.p2':  'His works capture moments of raw emotion, conveyed through the visual interplay of the human figure in compelling compositions. In this way, he tells his own story. Over time Maas has developed a distinctive artistic language that is both deeply personal and universally resonant.',

    'jean.label':   'Painting · b. 1955',
    'jean.bio.p1':  'Jean De Groote (1955) is primarily a painting philosopher, or perhaps it\'s the other way around: a philosophizing painter? His large canvases are translations of a way of thinking, a visual quest to see, look at, and understand the world around us. In his oeuvre, "things come into being," as philosopher Eric Bolle puts it. Their most banal form of existence is transformed by Jean into objects with a sacred meaning, rendered in oil on canvas.',
    'jean.bio.p2':  'He searches for the small, for "even the least still proves to be something; nothing is insignificant." For forty years, he has been quietly and steadily building a coherent, contemplative body of work from his monastic cell in Nazareth.',
  },

  nl: {
    /* ── Nav ── */
    'nav.home':        'Home',
    'nav.exhibitions': 'Tentoonstellingen',
    'nav.artists':     'Artiesten',
    'nav.press':       'Pers',
    'nav.contact':     'Over ons',

    /* ── Press page ── */
    'press.title':     'Pers',
    'press.readmore':  'Lees meer →',

    /* ── Footer ── */
    'footer.tagline':  'Een ruimte waar hedendaagse kunst bijzondere plaatsen ontmoet — meeslepende ervaringen voorbij de traditionele witte muren.',
    'footer.nav':      'Navigatie',
    'footer.social':   'Sociale media',
    'footer.copy':     '© 2025 Casper Bekaert Gallery — Alle rechten voorbehouden',

    /* ── Homepage ── */
    'home.eyebrow':    'Ertvelde, België — Est. 2025',
    'home.desc':       'Een ruimte waar hedendaagse kunst bijzondere plaatsen ontmoet. Wij werken samen met artiesten aan projecten die vertrouwde omgevingen omvormen tot plaatsen van verbeelding, dialoog en ontdekking.',
    'home.btn.exh':    'Tentoonstellingen verkennen',
    'home.btn.art':    'Artiesten verkennen',
    'home.exh.label':  'Tentoonstellingen',
    'home.exh.title':  'Waar kunst <em>thuishoort</em>',
    'home.no.upcoming':'Geen aankomende projecten momenteel gepland',
    'home.btn.all':    'Alle Tentoonstellingen',
    'home.statement':  '"Door kunst voorbij de traditionele witte muren te brengen, bieden we artiesten en publiek een nieuwe manier om creativiteit te ervaren: <em>meeslepend, verrassend en onvergetelijk.</em>"',
    'home.art.label':  'Gastkunstenaars',
    'home.art.title':  'De <em>stemmen</em> achter het werk',

    /* ── Info strip ── */
    'strip.location':  'Locatie',
    'strip.contact':   'Contact',
    'strip.phone':     'Telefoon',

    /* ── Newsletter ── */
    'nl.label':        'Updates',
    'nl.title':        'Mis niets van de <em>galerie</em>',
    'nl.sub':          'Nieuwe tentoonstellingen, artiesten en galerie-nieuws direct in je inbox.',
    'nl.firstname':    'Voornaam',
    'nl.lastname':     'Achternaam',
    'nl.email':        'E-mailadres',
    'nl.submit':       'Inschrijven',
    'nl.privacy':      'We respecteren je privacy — geen spam, altijd uitschrijven mogelijk.',
    'nl.success':      'Dank je — welkom in de galerie.',

    /* ── Exhibitions page ── */
    'exh.page.label':  'Tentoonstellingen',
    'exh.page.title':  'Tentoonstellingen',
    'exh.page.sub':    'Hedendaagse kunst op unieke, onverwachte plaatsen — vertrouwde omgevingen omgevormd tot plaatsen van verbeelding, dialoog en ontdekking.',
    'exh.upcoming':    'Aankomende tentoonstellingen',
    'exh.no.upcoming': 'Geen aankomende projecten',
    'exh.past':        'Voorbije tentoonstellingen',
    'exh.status.dist': 'Afgelopen · Groepstentoonstelling · 1.200 bezoekers',
    'exh.status.bak':  'Afgelopen · Groepstentoonstelling · 750 bezoekers',

    /* ── Exhibition detail ── */
    'exh.back':         '← Tentoonstellingen',
    'exh.meta.dates':   'Data',
    'exh.meta.loc':     'Locatie',
    'exh.meta.vis':     'Bezoekers',
    'exh.meta.cur':     'Curatoren',
    'exh.meta.photo':   'Fotografie',
    'exh.gallery.label':'Fotografie',
    'exh.gallery.title':'Beelden van de <em>tentoonstelling</em>',
    'exh.art.label':    'Deelnemende kunstenaars',
    'exh.art.title':    'De <em>stemmen</em> achter het werk',
    'exh.type.dist':    'Groepstentoonstelling · Afgelopen',
    'exh.type.bak':     'Groepstentoonstelling · Afgelopen',

    /* ── Artists page ── */
    'art.page.label':  'Gastkunstenaars',
    'art.page.title':  'Artiesten',
    'art.page.sub':    'Een groeiende gemeenschap van hedendaagse artiesten wiens praktijk verder gaat dan de conventie — elk met een eigen stem in onze meeslepende tentoonstellingen.',

    /* ── Artist detail ── */
    'art.back':        '← Artiesten',
    'art.works':       'Geselecteerde werken',

    /* ── Contact ── */
    'ct.label':        'Neem contact op',
    'ct.title':        'Contact',
    'ct.sub':          'Vragen over tentoonstellingen, samenwerking met artiesten of pers — we horen graag van je.',
    'ct.addr':         'Adres',
    'ct.email':        'E-mail',
    'ct.phone':        'Telefoon',
    'ct.curators':     'Curatoren',
    'ct.nl.title':     'Mis niets van de <em>galerie</em>',
    'ct.nl.sub':       'Nieuwe tentoonstellingen, artiesten en galerie-nieuws direct in je inbox.',

    /* ── Artist mediums ── */
    'med.painting':    'Schilderkunst',
    'med.sculpture':   'Sculptuur',
    'med.install':     'Sculptuur & Installatie',
    'med.photo':       'Fotografie & Conceptueel',
    'med.multi':       'Multidisciplinair',
    'med.visual':      'Beeldende Kunst',

    /* ── Exhibition navigation ── */
    'exh.nav.overview':    'Overzicht',
    'exh.nav.photos':      "Foto's",
    'exh.nav.artists':     'Kunstenaars',
    'exh.nav.press':       'Pers',
    'exh.nav.publication': 'Publicatie',
    'exh.type.label':      'Groepstentoonstelling',
    'exh.artists.with':    'Met',
    'exh.view.cta':        'Bekijk tentoonstelling →',
    'exh.section.photos':  "Foto's",
    'exh.section.press':   'Pers',
    'exh.section.pub':     'Publicatie',
    'exh.pdf.prev':        '← Vorige',
    'exh.pdf.next':        'Volgende →',
    'exh.lb.close':        '✕ sluiten',

    /* ── Distillery ── */
    'exh.dist.visitors':        '1.200 bezoekers',
    'exh.dist.copy':            'Kunst ontmoette ambacht. Hedendaagse werken wekten nieuwsgierigheid, vierden de ruimte en boden inspirerende ervaringen. 1.200 bezoekers over twee weekends.',
    'exh.dist.body.p1':         'Kunst ontmoette ambacht. Hedendaagse werken wekten nieuwsgierigheid, vierden de ruimte en boden inspirerende ervaringen, waarmee de Filliers-distilleerderij werd omgevormd tot een plek van verbeelding en ontdekking.',
    'exh.dist.body.p2':         'Door kunst voorbij de traditionele witte muren te brengen, bood de tentoonstelling zowel kunstenaars als publiek een nieuwe manier om creativiteit te ervaren: meeslepend, verrassend en onvergetelijk. Over twee weekends ontdekten 1.200 bezoekers het snijpunt van hedendaagse kunst en ambachtelijk erfgoed.',
    'exh.dist.body.p3':         'Tien kunstenaars reageerden op de industriële grandeur van de distilleerderij met werken variërend van schilderkunst en sculptuur tot installatie en conceptuele praktijk, elk met een eigen stem in een ruimte gedefinieerd door koperen ketels, eiken vaten en de geur van graan.',
    'exh.dist.photo.credit':    'Fotografie door Steven Vercruysse',
    'exh.dist.section.artists': 'Deelnemende kunstenaars',
    'exh.dist.bio.alex':   'Werkt met fragmenten uit films, documentaires, gevonden beelden en televisie-uitzendingen. Zijn schilderijen dragen een subtiele, rusteloze sfeer en openen ruimtes voor interpretatie.',
    'exh.dist.bio.arno':   'In Antwerpen gebaseerde multidisciplinaire kunstenaar wiens werk een tegenrealiteit construeert die gezag, sociale controle en opgelegde normen in vraag stelt.',
    'exh.dist.bio.jand':   'Creëert bescheiden, groots werk gevormd door hardnekkige herinneringen. Werkt vanuit beelden die zich hebben vastgezet in zijn waarneming en niet vergeten willen worden.',
    'exh.dist.bio.janv':   'Belgische schilder die zich inschrijft in klassieke tradities en betekenis ontvouwt doorheen tijd en aandachtig kijken.',
    'exh.dist.bio.jeroen': 'Reflecteert over onbekende ruimtes als vreemde, bijna magische werelden waar niet-begrijpen een uitnodiging wordt om te kijken, herinneren en verbeelden.',
    'exh.dist.bio.manon':  'Schildert intieme figuren uit het geheugen in stille landschappen. Haar werk nodigt uit tot traag kijken, niet om te verklaren, maar om te voelen.',
    'exh.dist.bio.martha': 'Verkent het menselijk lichaam via sculptuur, schilderkunst en tekening. Vermengt abstractie met realisme, met nadruk op kracht en elegantie.',
    'exh.dist.bio.randoald':'Verkent taal, geschiedenis en identiteit via verschuivende betekenislagen. Balanceert tussen zichtbaarheid en verborgenheid.',
    'exh.dist.bio.stief':  'Multidisciplinaire praktijk die de ambigue relatie tussen natuur en cultuur onderzoekt. Werkt met subtiele ironie en conceptuele precisie.',
    'exh.dist.bio.william':'Belgische schilder die droomachtige beelden vermengt om de relatie tussen ego en media-invloed te verkennen. Internationale tentoonstellingen in Europa en daarbuiten sinds 2017.',

    /* ── Bakery ── */
    'exh.bak.visitors':        '750 bezoekers',
    'exh.bak.copy':            'Kunst en een unieke ruimte kwamen samen in een toegankelijke, unieke ervaring. De architectuur van de bakkerij werd de conceptuele basis. 750 bezoekers over drie dagen.',
    'exh.bak.body.p1':         'Kunst en een unieke ruimte kwamen samen in een toegankelijke, unieke ervaring. De architectuur van de bakkerij, met haar koelruimtes, ovens en meelbedekte muren, werd de conceptuele basis van de tentoonstelling.',
    'exh.bak.body.p2':         'Zeven kunstenaars reageerden op de ruimte met werken variërend van schilderkunst tot sculptuur, waarbij ze thema\'s als geheugen, materialiteit en het alledaagse verkenden. Waar het ritme van arbeid ooit de geur van vers brood voortbracht, vond een andere soort alchemie plaats: een samensmelting van beelden, materialen en ideeën. Elk werk droeg een eigen stem, maar samen zochten ze naar harmonie, een resonantie die verder reikte dan stijl of medium.',
    'exh.bak.body.p3':         'Zoals Marcel Duchamp de kunst het domein van het alledaagse binnenbracht, en Guillaume Bijl het alledaagse de kunstwereld binnensmokkelde, bewoog Gallery in the Bakery zich tussen die twee polen. Geen reconstructie, geen klassieke galerie, maar een zoektocht naar evenwicht tussen vorm en inhoud, tussen intuïtie en concept. Over drie dagen ontdekten 750 bezoekers hedendaagse kunst in een setting die het vertrouwde transformeerde tot iets verrassends en onvergetelijks.',
    'exh.bak.photo.credit':    'Fotografie door Naya Vandevenne',
    'exh.bak.section.artists': 'Ontdek de kunstenaars',
    'exh.bak.bio.alex':    'Werkt met beelden uit films, documentaires en gevonden materialen, en verkent het ontastbare en het onderliggende in zijn schilderijen. Zijn werk nodigt uit tot een voortdurende dialoog tussen beeld, verleden en toeschouwer.',
    'exh.bak.bio.cas':     'Geworteld in authentiek vakmanschap en het gebruik van lokale materialen. Zijn ontwerpen zijn pure, tijdloze creaties die traditie en hedendaags design verbinden, met een diepe waardering voor cultureel erfgoed.',
    'exh.bak.bio.edo':     'Ruilde het wielrennen in 2021 in voor de kunst. Vanuit zijn atelier in Antwerpen creëert hij sculpturen die rauwe menselijke emotie vastleggen in een persoonlijke maar universele taal.',
    'exh.bak.bio.jean':    'Vaak de "schilder van de stilte" genoemd. Hij isoleert eenvoudige, alledaagse objecten uit hun context en distilleert ze tot hun essentie, waardoor hij een meditatieve sfeer oproept in zijn stillevens.',
    'exh.bak.bio.orlando': 'Verkent de grenzen tussen taal, beeld en concept. Zijn werk is een voortdurende zoektocht naar nieuwe uitdrukkingsvormen die denken en voelen verbinden.',
    'exh.bak.bio.randoald':'Verweven geschiedenis, taal en symboliek in zijn kunst, waarbij hij de ambiguïteit en gelaagdheid van betekenis onderzoekt. Zijn werken nodigen uit tot reflectie en een diepere dialoog tussen verleden en heden.',
    'exh.bak.bio.emile':   'Creëert collageachtige schilderijen die abstractie en figuratie samenvoegen tot evocatieve herinneringen, waarbij hij op speelse wijze zware thema\'s als rouw, pijn en aanvaarding visualiseert.',

    /* ── About/Contact page ── */
    'ct.page.title':      'Over ons',
    'ct.about.para1':     'Wat gebeurt er wanneer een ruimte, gewijd aan het kneden, rijzen en bakken van brood, leegstroomt van al haar gebruiksvoorwerpen en achterblijft als schijnbaar lege doos? En wat als precies dát de plek wordt waar kunst haar intrede doet, niet als toevoeging aan een witte, steriele galerieruimte, maar als een nieuwe vorm van ontmoeting tussen het alledaagse en het uitzonderlijke?',
    'ct.about.para2':     'Gallery in the Bakery vertrekt vanuit een persoonlijke overtuiging: dat kunst dichter bij de mensen moet komen. Toegankelijk, tastbaar en gemaakt met wat voorhanden is. De bakkerij en werkplaats van Caspers ouders werd de plek waar een passie voor kunst en een verlangen om iets echts op te bouwen voor het eerst concrete vorm aannam. Later boden de oude kelders en functionele interieurs van de Filliers-distilleerderij een tweede hoofdstuk, anders van karakter, even onbedoeld en even levend.',
    'ct.about.para3':     'Beide ruimtes dragen hun eigen bijzondere symboliek. Waar het ritme van arbeid en herhaling ooit de geur van vers brood voortbracht, en waar de industrie ruimtes vormde rond functie en tijd, vindt nu een andere soort alchemie plaats: een samensmelting van beelden, materialen en ideeën. Elk werk draagt een eigen stem, maar samen zoeken ze naar harmonie en eenheid, naar een resonantie die verder reikt dan stijl of medium.',
    'ct.about.para4':     'De bakkerij en de distilleerderij worden laboratoria van samenklank, plekken waar contrasten niet botsen maar elkaar aanvullen, waar individuele werken betekenis vinden in het geheel, en waar de last van de geschiedenis van een ruimte stilletjes in gesprek treedt met wat erin wordt getoond.',
    'ct.about.para5':     'Zoals Marcel Duchamp de kunst het domein van het alledaagse binnenbracht, en Guillaume Bijl het alledaagse de kunstwereld binnensmokkelde, beweegt Gallery in the Bakery zich tussen die twee polen. Hier is geen reconstructie van een winkel, noch een klassieke galerie. In plaats daarvan een zoektocht naar evenwicht, tussen vorm en inhoud, tussen intuïtie en concept, tussen afstand en nabijheid.',
    'ct.about.para6':     'Deze ruimtes, nooit ontworpen voor kunst en nooit iets van je vragende voordat je binnenstapt, nodigen de kijker uit om met een open blik te kijken. Om de dialoog tussen de werken te ervaren. Om te ontdekken hoe, in onverwachte kamers, nieuwe verbindingen kunnen ontstaan.',
    'ct.team.title':      'Team',
    'ct.team.role.cur':   'Mede-oprichter & Curator',
    'ct.team.role.dir':   'Mede-oprichter & Algemeen Directeur',
    'ct.socials.label':   'Sociale media',
    'ct.form.intro':      'Heb je een vraag, interesse in samenwerking, of heb je meer informatie nodig? We helpen je graag. Neem gerust contact met ons op.',
    'ct.form.name':       'Naam',
    'ct.form.message':    'Bericht',
    'ct.form.submit':     'Bericht versturen',
    'ct.ml.title':        'Nieuwsbrief',
    'ct.ml.intro':        'Blijf op de hoogte van nieuwe tentoonstellingen, kunstenaars en galerie-nieuws. We geloven in het delen van kunst als een manier om verbinding te maken.',

    /* ── Homepage extra ── */
    'home.recent.exh':   'Recente tentoonstelling',
    'home.recent.cta':   'Verken onze voorbije tentoonstellingen →',

    /* ── Artist detail pages ── */
    'alex.label':   'Schilderkunst · geb. 2000',
    'alex.bio.p1':  'Alex Brassart (geboren 2000) is een hedendaagse kunstenaar die werkt met fragmenten uit films, documentaires, gevonden beelden en televisie-uitzendingen.',
    'alex.bio.p2':  'Zijn schilderijen dragen een subtiele, rusteloze sfeer en openen ruimtes voor interpretatie. Ze creëren een wisselwerking tussen het beeld, het verleden en de toeschouwer, met het ongrijpbare en ontastbare als kern.',
    'alex.quote':   '"Zijn schilderijen dragen een subtiele, rusteloze sfeer en openen ruimtes voor interpretatie — een wisselwerking tussen het beeld, het verleden en de toeschouwer."',

    'arno.label':   'Sculptuur · geb. 1999',
    'arno.bio.p1':  'Arno Camps (1999) is een Belgische kunstenaar gebaseerd in Antwerpen die Mode en Sculptuur studeerde aan de Koninklijke Academie voor Schone Kunsten in Gent (KASK), en in 2024 een Master Beeldhouwkunst behaalde. Zijn multidisciplinaire praktijk omvat sculptuur, mode, poëzie, performance, geluid, fotografie en video.',
    'arno.bio.p2':  'Zijn werk construeert een tegenrealiteit die gezag, sociale controle en opgelegde normen in vraag stelt. Vertrekkend vanuit poëtische reflecties transformeert hij persoonlijke ervaringen tot gelaagde visuele composities die humor, surrealisme en rauwe materialiteit in evenwicht brengen.',
    'arno.bio.p3':  'Via installaties, gemanipuleerde objecten en 2D-werken bouwt hij onderling verbonden narratieven over schoonheid, vrijheid, mannelijkheid en maatschappelijke structuren. Door zichzelf als persona in zijn praktijk te positioneren, maakt Camps zijn artistiek proces tot een theatrale daad van verzet.',

    'jand.label':   'Schilderkunst · geb. 1978',
    'jand.bio.p1':  'Jan De Lauré werd geboren in 1978. Zijn artistieke praktijk wordt gekenmerkt door terughoudendheid en bedachtzaamheid. Hij produceert een beperkt aantal werken en laat elk stuk uitgebreid ontwikkelen.',
    'jand.bio.p2':  'In plaats van specifieke onderwerpen of thematische representatie te claimen, werkt De Lauré vanuit beelden die zich hebben vastgezet in zijn waarneming en niet vergeten willen worden. Zijn benadering is niet verklarend en niet toe-eigenend.',
    'jand.bio.p3':  'Door aanhoudende aandacht laat hij deze beelden, omschreven als vreemd en soms als verloren foto\'s, volledig tot wasdom komen.',
    'jand.quote':   '"Zijn beelden ontstaan uit zijn persoonlijk onvermogen om ze te vergeten. Ze passeerden zijn waarneming en bleven er ingeankerd."',

    'janv.label':   'Schilderkunst · geb. 1978',
    'janv.bio.p1':  'Jan Vindevogel (geboren 1978) is een schilder wiens praktijk gericht is op het verkennen van nieuwe relaties. Hoewel hedendaags van aanpak, put hij voortdurend inspiratie uit klassieke schildertradities, niet om ze te herhalen, maar om een voortdurende dialoog aan te gaan met een evoluerend artistiek erfgoed.',
    'janv.bio.p2':  'Zijn werk functioneert als een structurele ordening die het kijken begeleidt eerder dan als narratieve illustratie. De schilderijen werken doorheen tijd, ontvouwen zich via duur, vertraging en vertraagde impact eerder dan door onmiddellijk begrip.',

    'jeroen.label':  'Schilderkunst · geb. 1981',
    'jeroen.bio.p1': 'Jeroen Frateur verkent het onbekende via beeldende kunst. Hij beschrijft hoe hij geconfronteerd wordt met onbekende structuren, zoals automotoren of graandistilleerderijen, die "magische krachten" bezitten maar onbegrijpelijk blijven.',
    'jeroen.bio.p2': 'Zijn praktijk focust op het onderzoeken van dingen die ons intrigeren ondanks ons gebrek aan begrip, waardoor kijkers onbekende elementen kunnen relateren aan persoonlijke herinneringen en ervaringen.',
    'jeroen.quote':  '"Mijn werken verwijzen naar het onbekende. Wat we niet kennen, kunnen we niet plaatsen. We kunnen er echter naar kijken en een mogelijke magie ervaren..."',

    'manon.label':   'Schilderkunst · geb. 1998',
    'manon.bio.p1':  'Manon Soetens onderzoekt verbindingen tussen mensen en de natuurlijke wereld. Haar onderwerpen zijn echte mensen die ze in het dagelijks leven ontmoet of terughaalt uit kindherinneringen. Ze legt hen vast in momenten van diepe concentratie, verdiept in natuur, muziek, kunst of spel.',
    'manon.bio.p2':  'Vervolgens herpositioneert ze deze figuren in onderscheidende landschappen geïnspireerd door haar uitgebreide wandelingen door Schotland en Engeland. Deze aanpak creëert contemplatieve ruimtes die verlichting bieden van onze overgestimuleerde wereld.',
    'manon.quote':   '"Haar werk nodigt uit tot traag kijken. Niet om te verklaren, maar om te voelen: wat blijft hangen wanneer woorden verdwijnen?"',

    'martha.label':  'Sculptuur · geb. 1971',
    'martha.bio.p1': 'Martha Onderwater put inspiratie uit de menselijke vorm via diverse media waaronder sculpturen, schilderijen en tekeningen. Haar artistiek doel is het vermengen van abstractie met realisme, met nadruk op kracht en elegantie in lijnen en stoutmoedigheid in vorm.',
    'martha.bio.p2': 'Onderwater gebruikt diverse materialen die elkaar aanvullen. Ze wisselt af tussen snel tekenen en schilderen, wat creatieve vrijheid geeft, en steenhouwen, wat contemplatieve ruimte biedt. Dit samenspel tussen spontaniteit en bewust vakmanschap bepaalt fundamenteel haar artistieke output.',
    'martha.quote':  '"Mijn kunst is een gesprek; het materiaal is mijn partner."',

    'randoald.label':  'Schilderkunst · geb. 1979',
    'randoald.bio.p1': 'Randoald Sabbe (1979) verkent de complexiteit van taal, geschiedenis en identiteit. Via het gebruik van symbolen en beeldtaal legt hij meerdere betekenislagen bloot en daagt hij ze uit.',
    'randoald.bio.p2': 'Zijn kunst nodigt uit tot reflectie over hoe we betekenis construeren over de wereld en onszelf, en balanceert subtiel tussen zichtbaarheid en verborgenheid. Sabbes werk betrekt kijkers in een doordachte dialoog over geheugen, cultuur en de fluïde aard van interpretatie.',

    'stief.label':   'Multidisciplinair · geb. 1973',
    'stief.bio.p1':  'Stief DeSmet (geb. 1973) woont en werkt in Bachte-Maria-Leerne, België en Minot, Frankrijk. Zijn artistieke praktijk verkent de ambigue relatie tussen natuur en cultuur, waarbij hij de menselijke manipulatie van de natuurlijke wereld onderzoekt.',
    'stief.bio.p2':  'Hij navigeert de spanning tussen de moderne consumptiemaatschappij en een verlangen naar een geïdealiseerde natuurtoestand, en gebruikt ironie om nostalgische fantasieën te bekritiseren. DeSmet werkt in meerdere media, schilderkunst, sculptuur, video, performance en installatie.',
    'stief.bio.p3':  'Zijn werk is opgenomen in privécollecties in België, Nederland, Frankrijk, de VS en Zwitserland, met stukken in openbare ruimtes in België, Nederland en Frankrijk.',
    'stief.quote':   '"Door iconische beelden te manipuleren, weerlegt hij mogelijke betekenissen, voegt hij een betekenislaag toe of misleidt hij de toeschouwer."',

    'william.label':  'Schilderkunst · geb. 1993',
    'william.bio.p1': 'William Ludwig Lutgens is een Belgische schilder wiens werk droomachtige beelden vermengt om de relatie tussen ego en media-invloed te verkennen. Zijn praktijk onderzoekt hoe het zelfbeeld wordt gevormd, en vervormd, door culturele representatie, reclame en het verzadigde visuele landschap van het hedendaagse leven.',
    'william.bio.p2': 'Met internationale tentoonstellingen in Europa en daarbuiten sinds 2017 heeft Lutgens een onderscheidende visuele taal ontwikkeld die zich bevindt tussen het vertrouwde en het onheilspellende. Zijn doeken trekken kijkers in ruimtes waar identiteit vloeibaar wordt.',

    'emile.label':   'Schilderkunst · geb. 2001',
    'emile.bio.p1':  'Emile Desweemer (2001) brengt een voorstelling van hoe schilderkunst zware thema\'s op speelse wijze kan visualiseren. Desweemers schilderijen bieden een bredere blik op hoe de kunstenaar omgaat met thema\'s als rouw, pijn en aanvaarding. De werken zijn niet alleen individualistisch, maar wekken ook een gevoel van herkenning op. De toeschouwer wordt meegenomen op een emotionele reis, met aandacht voor het contrast tussen abstracte en figuratieve kunst.',
    'emile.bio.p2':  'Het werk van Emile Desweemer straalt een mooie schijn van melancholie uit, waarbij duisternis vaak aanwezig is als ondertoon. De beelden zijn vaak opgebouwd vanuit een collage-vorm, samengesteld uit verschillende fragmenten uit uiteenlopende scenario\'s. De kunstenaar beschouwt zijn werk als een representatie van een herinnering. Desweemers werk heeft vaak een onheilspellende sfeer, als een ramp die staat te wachten.',

    'orlando.label':  'Schilderkunst · Tekening · geb. 1994',
    'orlando.bio.p1': 'Orlando Gruwez (1994) is een schilder en af en toe maker van meubels en sculpturen. Met oude boeken, encyclopedieën, postkaarten, verzamelde prenten en zelfgemaakte foto\'s zoekt hij naar een eigen beeldtaal. Vergankelijkheid is een belangrijk thema doorheen zijn werk. Hij werkt voornamelijk met olieverf, en de laatste jaren richt hij zich steeds meer op tekenen.',
    'orlando.bio.p2': 'Tijdens het middelbaar volgde hij een richting beeldende kunsten, wat zijn interesse in kunst aanwakkerde. Daarna voltooide hij een opleiding hout en meubelmakerij aan Goca Gent, waarna hij interieurinrichting studeerde aan LUCA School of Arts Gent, afstuderend in 2017. Sindsdien schildert hij onverminderd verder en nam hij deel aan diverse tentoonstellingen.',

    'cas.label':   'Design · Vakmanschap · geb. 2000',
    'cas.bio.p1':  'Cas Reynders (2000) is een ontwerper die zich toelegt op authentiek vakmanschap en het gebruik van lokale materialen. Geïnspireerd door oude archetypen en tijdloze vormen vertaalt hij deze invloeden in eenvoudige, pure ontwerpen die zowel erfgoed als moderniteit aanspreken. Zijn werk getuigt van een diepe waardering voor de materiële wereld en de rijke verhalen die vervat zijn in traditioneel vakmanschap.',
    'cas.bio.p2':  'Elk stuk dat hij met de hand maakt in België overbrugt de kloof tussen traditie en hedendaags design, met nadruk op duurzaamheid, tactiele kwaliteit en culturele continuïteit. Het proces van Cas omvat het deconstrueren van archetypen en een diep respect voor de natuurlijke kenmerken van zijn gekozen materialen, wat resulteert in objecten die zowel functioneel als poëtisch zijn.',

    'edo.label':   'Sculptuur · geb. 2000',
    'edo.bio.p1':  'Na een abrupt einde aan zijn wielercarrière begon Edo Maas (2000) op zoek te gaan naar nieuwe doelen. In 2021 schreef hij zich in aan de Willem de Kooning Academie in Rotterdam. Wat begon als een interesse in kunst groeide al snel uit tot een diepgaand artistiek streven. Vanuit zijn atelier in Antwerpen creëert Maas sculpturen die de menselijke conditie verkennen.',
    'edo.bio.p2':  'Zijn werken vangen momenten van rauwe emotie, overgebracht door het visueel samenspel van de menselijke figuur in boeiende composities. Op die manier vertelt hij zijn eigen verhaal. In de loop der tijd heeft Maas een onderscheidende artistieke taal ontwikkeld die zowel diep persoonlijk als universeel resonerend is.',

    'jean.label':   'Schilderkunst · geb. 1955',
    'jean.bio.p1':  'Jean De Groote (1955) is in de eerste plaats een schilderfilosoof, of misschien is het andersom: een filosoferende schilder? Zijn grote doeken zijn vertalingen van een manier van denken, een visuele zoektocht om de wereld rondom ons te zien, te bekijken en te begrijpen. In zijn oeuvre "komen dingen tot stand", zoals filosoof Eric Bolle het verwoordt. Hun meest banale bestaansvorm wordt door Jean omgetoverd tot objecten met een heilige betekenis, uitgevoerd in olie op doek.',
    'jean.bio.p2':  'Hij zoekt het kleine, want "zelfs het minste bewijst nog iets te zijn; niets is onbeduidend." Al veertig jaar bouwt hij stil en gestaag aan een coherent, contemplatief oeuvre vanuit zijn kloostercel in Nazareth.',
  },

  fr: {
    /* ── Nav ── */
    'nav.home':        'Accueil',
    'nav.exhibitions': 'Expositions',
    'nav.artists':     'Artistes',
    'nav.press':       'Presse',
    'nav.contact':     'À propos',

    /* ── Press page ── */
    'press.title':     'Presse',
    'press.readmore':  'En savoir plus →',

    /* ── Footer ── */
    'footer.tagline':  'Un espace où l\'art contemporain rencontre des lieux uniques — des expériences immersives au-delà des murs blancs traditionnels.',
    'footer.nav':      'Navigation',
    'footer.social':   'Réseaux sociaux',
    'footer.copy':     '© 2025 Casper Bekaert Gallery — Tous droits réservés',

    /* ── Homepage ── */
    'home.eyebrow':    'Ertvelde, Belgique — Est. 2025',
    'home.desc':       'Un espace où l\'art contemporain rencontre des lieux uniques. Nous collaborons avec des artistes pour créer des projets qui transforment des environnements familiers en sites d\'imagination, de dialogue et de découverte.',
    'home.btn.exh':    'Explorer les expositions',
    'home.btn.art':    'Explorer les artistes',
    'home.exh.label':  'Expositions',
    'home.exh.title':  'Là où l\'art <em>appartient</em>',
    'home.no.upcoming':'Aucun projet à venir pour le moment',
    'home.btn.all':    'Toutes les expositions',
    'home.statement':  '"En apportant l\'art au-delà des murs blancs traditionnels, nous offrons aux artistes et au public une nouvelle façon de vivre la créativité : <em>immersive, surprenante et inoubliable.</em>"',
    'home.art.label':  'Artistes invités',
    'home.art.title':  'Les <em>voix</em> derrière l\'œuvre',

    /* ── Info strip ── */
    'strip.location':  'Localisation',
    'strip.contact':   'Contact',
    'strip.phone':     'Téléphone',

    /* ── Newsletter ── */
    'nl.label':        'Actualités',
    'nl.title':        'Ne manquez rien de la <em>galerie</em>',
    'nl.sub':          'Nouvelles expositions, artistes et actualités de la galerie directement dans votre boîte mail.',
    'nl.firstname':    'Prénom',
    'nl.lastname':     'Nom de famille',
    'nl.email':        'Adresse e-mail',
    'nl.submit':       'S\'inscrire',
    'nl.privacy':      'Nous respectons votre vie privée — pas de spam, désinscription possible à tout moment.',
    'nl.success':      'Merci — bienvenue à la galerie.',

    /* ── Exhibitions page ── */
    'exh.page.label':  'Expositions',
    'exh.page.title':  'Expositions',
    'exh.page.sub':    'L\'art contemporain dans des lieux uniques et inattendus — transformant des environnements familiers en sites d\'imagination, de dialogue et de découverte.',
    'exh.upcoming':    'Expositions à venir',
    'exh.no.upcoming': 'Aucun projet à venir',
    'exh.past':        'Expositions passées',
    'exh.status.dist': 'Passée · Exposition collective · 1 200 visiteurs',
    'exh.status.bak':  'Passée · Exposition collective · 750 visiteurs',

    /* ── Exhibition detail ── */
    'exh.back':         '← Expositions',
    'exh.meta.dates':   'Dates',
    'exh.meta.loc':     'Lieu',
    'exh.meta.vis':     'Visiteurs',
    'exh.meta.cur':     'Commissaires',
    'exh.meta.photo':   'Photographie',
    'exh.gallery.label':'Photographie',
    'exh.gallery.title':'Images de l\'<em>exposition</em>',
    'exh.art.label':    'Artistes participants',
    'exh.art.title':    'Les <em>voix</em> derrière l\'œuvre',
    'exh.type.dist':    'Exposition collective · Passée',
    'exh.type.bak':     'Exposition collective · Passée',

    /* ── Artists page ── */
    'art.page.label':  'Artistes invités',
    'art.page.title':  'Artistes',
    'art.page.sub':    'Une communauté grandissante d\'artistes contemporains dont la pratique dépasse les conventions — chacun apportant une voix distincte à nos expositions immersives.',

    /* ── Artist detail ── */
    'art.back':        '← Artistes',
    'art.works':       'Œuvres sélectionnées',

    /* ── Contact ── */
    'ct.label':        'Prendre contact',
    'ct.title':        'Contact',
    'ct.sub':          'Questions sur les expositions, les collaborations ou la presse — nous serons ravis de vous entendre.',
    'ct.addr':         'Adresse',
    'ct.email':        'E-mail',
    'ct.phone':        'Téléphone',
    'ct.curators':     'Commissaires',
    'ct.nl.title':     'Ne manquez rien de la <em>galerie</em>',
    'ct.nl.sub':       'Nouvelles expositions, artistes et actualités de la galerie directement dans votre boîte mail.',

    /* ── Artist mediums ── */
    'med.painting':    'Peinture',
    'med.sculpture':   'Sculpture',
    'med.install':     'Sculpture & Installation',
    'med.photo':       'Photographie & Conceptuel',
    'med.multi':       'Multidisciplinaire',
    'med.visual':      'Arts visuels',

    /* ── Exhibition navigation ── */
    'exh.nav.overview':    'Aperçu',
    'exh.nav.photos':      'Photos',
    'exh.nav.artists':     'Artistes',
    'exh.nav.press':       'Presse',
    'exh.nav.publication': 'Publication',
    'exh.type.label':      'Exposition collective',
    'exh.artists.with':    'Avec',
    'exh.view.cta':        "Voir l'exposition →",
    'exh.section.photos':  'Photos',
    'exh.section.press':   'Presse',
    'exh.section.pub':     'Publication',
    'exh.pdf.prev':        '← Précédent',
    'exh.pdf.next':        'Suivant →',
    'exh.lb.close':        '✕ fermer',

    /* ── Distillery ── */
    'exh.dist.visitors':        '1.200 visiteurs',
    'exh.dist.copy':            "L'art a rencontré l'artisanat. Des œuvres contemporaines ont éveillé la curiosité, célébré l'espace et offert des expériences inspirantes. 1.200 visiteurs sur deux week-ends.",
    'exh.dist.body.p1':         "L'art a rencontré l'artisanat. Des œuvres contemporaines ont éveillé la curiosité, célébré l'espace et offert des expériences inspirantes, transformant la distillerie Filliers en un lieu d'imagination et de découverte.",
    'exh.dist.body.p2':         "En portant l'art au-delà des murs blancs traditionnels, l'exposition a offert aux artistes comme au public une nouvelle façon de vivre la créativité: immersive, surprenante et inoubliable. En deux week-ends, 1.200 visiteurs ont découvert l'intersection de l'art contemporain et du patrimoine artisanal.",
    'exh.dist.body.p3':         "Dix artistes ont répondu à la grandeur industrielle de la distillerie avec des œuvres allant de la peinture et de la sculpture à l'installation et à la pratique conceptuelle, chacun apportant une voix distincte à un espace défini par des alambics en cuivre, des fûts de chêne et l'odeur des céréales.",
    'exh.dist.photo.credit':    'Photographie de Steven Vercruysse',
    'exh.dist.section.artists': 'Artistes participants',
    'exh.dist.bio.alex':   "Travaille avec des fragments issus de films, documentaires, images trouvées et émissions de télévision. Ses peintures portent une atmosphère subtile et agitée, ouvrant des espaces d'interprétation.",
    'exh.dist.bio.arno':   "Artiste multidisciplinaire basé à Anvers dont l'œuvre construit une contre-réalité questionnant l'autorité, le contrôle social et les normes imposées.",
    'exh.dist.bio.jand':   "Crée une œuvre modeste et grandiose façonnée par des souvenirs persistants. Travaille à partir d'images qui se sont logées dans sa perception et refusent d'être oubliées.",
    'exh.dist.bio.janv':   "Peintre belge engagé dans les traditions classiques, déployant le sens à travers le temps et un regard lent et attentif.",
    'exh.dist.bio.jeroen': "Réfléchit aux espaces inconnus comme à des mondes étranges et presque magiques où ne pas comprendre devient une invitation à regarder, se souvenir et imaginer.",
    'exh.dist.bio.manon':  "Peint des figures intimes de mémoire dans des paysages silencieux. Son œuvre invite à un regard lent, non pour expliquer, mais pour ressentir.",
    'exh.dist.bio.martha': "Explore le corps humain à travers la sculpture, la peinture et le dessin. Mélange abstraction et réalisme, en soulignant la force et l'élégance.",
    'exh.dist.bio.randoald':"Explore le langage, l'histoire et l'identité à travers des couches de sens mouvantes. Balance entre visibilité et dissimulation.",
    'exh.dist.bio.stief':  "Pratique multidisciplinaire explorant la relation ambiguë entre nature et culture. Travaille avec une ironie subtile et une précision conceptuelle.",
    'exh.dist.bio.william':"Peintre belge mêlant des images oniriques explorant l'ego et l'influence des médias. Expositions internationales en Europe et au-delà depuis 2017.",

    /* ── Bakery ── */
    'exh.bak.visitors':        '750 visiteurs',
    'exh.bak.copy':            "L'art et un espace unique se sont réunis dans une expérience accessible. L'architecture de la boulangerie est devenue le fondement conceptuel. 750 visiteurs en trois jours.",
    'exh.bak.body.p1':         "L'art et un espace unique se sont réunis dans une expérience accessible et singulière. L'architecture de la boulangerie, avec ses chambres froides, ses fours et ses murs poudrés de farine, est devenue le fondement conceptuel de l'exposition.",
    'exh.bak.body.p2':         "Sept artistes ont répondu à l'espace avec des œuvres allant de la peinture à la sculpture, explorant les thèmes de la mémoire, de la matérialité et du quotidien. Là où le rythme du travail produisait autrefois l'odeur du pain frais, une autre forme d'alchimie a eu lieu: une fusion d'images, de matériaux et d'idées. Chaque œuvre portait sa propre voix, mais ensemble elles cherchaient l'harmonie, une résonance allant au-delà du style ou du médium.",
    'exh.bak.body.p3':         "Comme Marcel Duchamp a introduit l'art dans le domaine du quotidien, et que Guillaume Bijl a fait entrer le quotidien en contrebande dans le monde de l'art, Gallery in the Bakery s'est déplacée entre ces deux pôles. Pas une reconstruction, pas une galerie conventionnelle, mais une recherche d'équilibre entre forme et contenu, entre intuition et concept. En trois jours, 750 visiteurs ont découvert l'art contemporain dans un cadre qui a transformé le familier en quelque chose de surprenant et d'inoubliable.",
    'exh.bak.photo.credit':    'Photographie de Naya Vandevenne',
    'exh.bak.section.artists': 'Découvrir les artistes',
    'exh.bak.bio.alex':    "Travaille avec des images de films, documentaires et matériaux trouvés, explorant l'intangible dans ses peintures. Son œuvre invite à un dialogue continu entre image, passé et spectateur.",
    'exh.bak.bio.cas':     "Ancré dans l'artisanat authentique et l'utilisation de matériaux locaux. Ses créations sont pures et intemporelles, alliant tradition et design contemporain.",
    'exh.bak.bio.edo':     "A troqué le cyclisme contre l'art en 2021. Depuis son atelier à Anvers, il crée des sculptures capturant l'émotion humaine brute dans un langage personnel et universel.",
    'exh.bak.bio.jean':    'Souvent appelé le "peintre du silence." Il isole de simples objets du quotidien de leur contexte et les distille à leur essence, évoquant une atmosphère méditative dans ses natures mortes.',
    'exh.bak.bio.orlando': "Explore les frontières entre langage, image et concept. Son œuvre est une recherche continue de nouvelles formes d'expression reliant pensée et sentiment.",
    'exh.bak.bio.randoald': "Entremêle histoire, langage et symbolisme dans son art, explorant l'ambiguïté et la nature stratifiée du sens. Ses œuvres invitent à la réflexion et à un dialogue profond entre passé et présent.",
    'exh.bak.bio.emile':   "Crée des peintures-collages fusionnant abstraction et figuration en souvenirs évocateurs, visualisant de manière ludique des thèmes lourds comme le deuil, la douleur et l'acceptation.",

    /* ── About/Contact page ── */
    'ct.page.title':      'À propos',
    'ct.about.para1':     "Que se passe-t-il lorsqu'un espace, dédié au pétrissage, à la levée et à la cuisson du pain, se vide de tous ses objets et ne reste plus qu'une coquille apparemment creuse? Et si c'est précisément ce lieu qui devient le point d'entrée de l'art, non pas comme un ajout à une galerie blanche et stérile, mais comme une nouvelle forme de rencontre entre le quotidien et l'extraordinaire?",
    'ct.about.para2':     "Gallery in the Bakery part d'une conviction personnelle: que l'art doit se rapprocher des gens. Accessible, tangible, et réalisé avec les moyens du bord. La boulangerie et l'atelier des parents de Casper sont devenus l'endroit où une passion pour l'art et le désir de construire quelque chose de concret ont pris forme pour la première fois. Plus tard, les caves vieillies et les intérieurs fonctionnels de la distillerie Filliers ont offert un second chapitre, différent dans son caractère, tout aussi fortuit, et tout aussi vivant.",
    'ct.about.para3':     "Les deux espaces portent leur propre symbolisme particulier. Là où le rythme du travail et de la répétition produisait autrefois l'odeur du pain frais, et là où l'industrie façonnait des pièces autour de la fonction et du temps, une autre forme d'alchimie se déroule maintenant: une fusion d'images, de matériaux et d'idées. Chaque œuvre porte sa propre voix, mais ensemble elles cherchent l'harmonie et l'unité, une résonance qui dépasse le style ou le médium.",
    'ct.about.para4':     "La boulangerie et la distillerie deviennent des laboratoires de consonance, des lieux où les contrastes ne s'affrontent pas mais se complètent, où les œuvres individuelles trouvent un sens dans l'ensemble, et où le poids de l'histoire d'un espace entre silencieusement en conversation avec ce qui y est présenté.",
    'ct.about.para5':     "Comme Marcel Duchamp a introduit l'art dans le domaine du quotidien, et que Guillaume Bijl a fait entrer le quotidien en contrebande dans le monde de l'art, Gallery in the Bakery se déplace entre ces deux pôles. Il n'y a pas ici de reconstruction d'une boutique, ni de galerie conventionnelle. Mais plutôt une recherche d'équilibre, entre forme et contenu, entre intuition et concept, entre distance et proximité.",
    'ct.about.para6':     "Ces espaces, jamais conçus pour l'art et ne demandant rien avant que vous franchiez la porte, invitent le spectateur à regarder avec un œil ouvert. À vivre le dialogue entre les œuvres. À découvrir comment, dans des salles inattendues, de nouvelles connexions peuvent se former.",
    'ct.team.title':      'Équipe',
    'ct.team.role.cur':   'Co-fondateur & Curateur',
    'ct.team.role.dir':   'Co-fondatrice & Directrice Générale',
    'ct.socials.label':   'Réseaux sociaux',
    'ct.form.intro':      "Vous avez une question, un intérêt pour une collaboration, ou besoin de plus d'informations? Nous sommes heureux de vous aider. N'hésitez pas à nous contacter.",
    'ct.form.name':       'Nom',
    'ct.form.message':    'Message',
    'ct.form.submit':     'Envoyer le message',
    'ct.ml.title':        'Liste de diffusion',
    'ct.ml.intro':        "Restez informé des nouvelles expositions, des artistes et des actualités de la galerie. Nous croyons au partage de l'art comme moyen de créer des liens.",

    /* ── Homepage extra ── */
    'home.recent.exh':   'Exposition récente',
    'home.recent.cta':   'Explorer nos expositions passées →',

    /* ── Artist detail pages ── */
    'alex.label':   'Peinture · né 2000',
    'alex.bio.p1':  "Alex Brassart (né en 2000) est un artiste contemporain qui travaille avec des fragments issus de films, documentaires, images trouvées et émissions de télévision.",
    'alex.bio.p2':  "Ses peintures portent une atmosphère subtile et agitée, ouvrant des espaces d'interprétation. Elles créent une interaction entre l'image, le passé et le spectateur, avec l'insaisissable et l'intangible au cœur.",
    'alex.quote':   '"Ses peintures portent une atmosphère subtile et agitée, ouvrant des espaces d\'interprétation — une interaction entre l\'image, le passé et le spectateur."',

    'arno.label':   'Sculpture · né 1999',
    'arno.bio.p1':  "Arno Camps (1999) est un artiste belge basé à Anvers qui a étudié la Mode et la Sculpture à l'Académie Royale des Beaux-Arts de Gand (KASK), obtenant un Master en Sculpture en 2024. Sa pratique multidisciplinaire couvre la sculpture, la mode, la poésie, la performance, le son, la photographie et la vidéo.",
    'arno.bio.p2':  "Son œuvre construit une contre-réalité qui remet en question l'autorité, le contrôle social et les normes imposées. Partant de réflexions poétiques, il transforme des expériences personnelles en compositions visuelles stratifiées équilibrant humour, surréalisme et matérialité brute.",
    'arno.bio.p3':  "À travers installations, objets manipulés et œuvres 2D, il construit des récits interconnectés abordant la beauté, la liberté, la masculinité et les structures sociétales.",

    'jand.label':   'Peinture · né 1978',
    'jand.bio.p1':  "Jan De Lauré est né en 1978. Sa pratique artistique est caractérisée par la retenue et la délibération. Il produit un nombre limité d'œuvres, accordant à chaque pièce un temps de développement approfondi.",
    'jand.bio.p2':  "Plutôt que de revendiquer un sujet spécifique, De Lauré travaille à partir d'images qui se sont logées dans sa perception et refusent d'être oubliées. Son approche est non-explicative et non-appropriative.",
    'jand.bio.p3':  "Par une attention soutenue, il laisse ces images, décrites comme étranges et parfois comme des photographies perdues, émerger pleinement réalisées.",
    'jand.quote':   '"Ses images naissent de son incapacité personnelle à les oublier. Elles ont traversé sa perception et y sont restées ancrées."',

    'janv.label':   'Peinture · né 1978',
    'janv.bio.p1':  "Jan Vindevogel (né en 1978) est un peintre dont la pratique se concentre sur l'exploration de nouvelles relations. Bien que contemporain dans son approche, il puise une inspiration continue dans les traditions picturales classiques, non pour les reproduire, mais pour s'engager dans un dialogue continu avec un héritage artistique en évolution.",
    'janv.bio.p2':  "Son œuvre fonctionne comme un arrangement structurel qui guide le regard plutôt que comme une illustration narrative. Les peintures opèrent à travers le temps, se déployant par la durée, le délai et l'impact différé plutôt que par une compréhension immédiate.",

    'jeroen.label':  'Peinture · né 1981',
    'jeroen.bio.p1': "Jeroen Frateur explore l'inconnu à travers les arts visuels. Il décrit être confronté à des structures inconnues, comme des moteurs de voiture ou des distilleries de grains, qui possèdent des \"pouvoirs magiques\" mais restent incompréhensibles.",
    'jeroen.bio.p2': "Sa pratique se concentre sur l'examen de choses qui nous intriguent malgré notre manque de compréhension, permettant aux spectateurs de relier des éléments inconnus à des souvenirs et expériences personnels.",
    'jeroen.quote':  '"Mes œuvres se réfèrent à l\'inconnu. Ce que nous ne connaissons pas, nous ne pouvons pas le situer. Nous pouvons cependant le regarder et en vivre une possible magie..."',

    'manon.label':   'Peinture · née 1998',
    'manon.bio.p1':  "Manon Soetens explore les liens entre les humains et le monde naturel. Ses sujets sont de vraies personnes rencontrées dans la vie quotidienne ou rappelées de souvenirs d'enfance. Elle les capture dans des moments de profonde concentration, absorbés dans la nature, la musique, l'art ou le jeu.",
    'manon.bio.p2':  "Elle repositionne ensuite ces figures dans des paysages distinctifs inspirés par ses nombreuses randonnées en Écosse et en Angleterre. Cette approche crée des espaces contemplatifs offrant un répit à notre monde surstimulé.",
    'manon.quote':   '"Son œuvre invite à un regard lent. Non pour expliquer, mais pour ressentir: ce qui reste quand les mots disparaissent?"',

    'martha.label':  'Sculpture · née 1971',
    'martha.bio.p1': "Martha Onderwater puise son inspiration dans la forme humaine à travers plusieurs médiums dont sculptures, peintures et dessins. Son objectif artistique consiste à mêler abstraction et réalisme, en soulignant la force et l'élégance des lignes et l'audace des formes.",
    'martha.bio.p2': "Onderwater emploie des matériaux divers qui se complètent. Elle alterne entre dessin rapide et peinture, qui offrent une liberté créative, et la taille de la pierre, qui offre un espace contemplatif. Cette interaction entre spontanéité et artisanat délibéré façonne fondamentalement sa production artistique.",
    'martha.quote':  '"Mon art est une conversation; le matériau est mon partenaire."',

    'randoald.label':  'Peinture · né 1979',
    'randoald.bio.p1': "Randoald Sabbe (1979) explore la complexité du langage, de l'histoire et de l'identité. À travers l'utilisation de symboles et d'images, il met à jour et remet en question de multiples couches de sens.",
    'randoald.bio.p2': "Son art invite à réfléchir sur la façon dont nous construisons le sens du monde et de nous-mêmes, équilibrant délicatement entre visibilité et dissimulation. L'œuvre de Sabbe engage les spectateurs dans un dialogue réfléchi sur la mémoire, la culture et la nature fluide de l'interprétation.",

    'stief.label':   'Multidisciplinaire · né 1973',
    'stief.bio.p1':  "Stief DeSmet (né en 1973) vit et travaille à Bachte-Maria-Leerne, Belgique et Minot, France. Sa pratique artistique explore la relation ambiguë entre nature et culture, examinant la manipulation humaine du monde naturel.",
    'stief.bio.p2':  "Il navigue la tension entre la société de consommation moderne et un désir d'état naturel idéalisé, employant l'ironie pour critiquer les fantasmes nostalgiques. DeSmet travaille dans plusieurs médiums, peinture, sculpture, vidéo, performance et installation.",
    'stief.bio.p3':  "Son œuvre figure dans des collections privées en Belgique, aux Pays-Bas, en France, aux États-Unis et en Suisse, avec des pièces dans des espaces publics en Belgique, aux Pays-Bas et en France.",
    'stief.quote':   '"En manipulant des images iconiques, il contrecarre les significations possibles, ajoute une couche de signification ou induit le spectateur en erreur."',

    'william.label':  'Peinture · né 1993',
    'william.bio.p1': "William Ludwig Lutgens est un peintre belge dont l'œuvre mêle des images oniriques explorant la relation entre l'ego et l'influence des médias. Sa pratique examine comment l'image de soi est façonnée, et déformée, par la représentation culturelle, la publicité et le paysage visuel saturé de la vie contemporaine.",
    'william.bio.p2': "Avec des expositions internationales en Europe et au-delà depuis 2017, Lutgens a développé un langage visuel distinctif qui se situe entre le familier et l'inquiétant. Ses toiles attirent les spectateurs dans des espaces où l'identité devient fluide.",

    'emile.label':   'Peinture · né 2001',
    'emile.bio.p1':  "Emile Desweemer (2001) propose une représentation de la façon dont la peinture peut visualiser de manière ludique des thèmes lourds. Les peintures de Desweemer offrent une vision plus large de la manière dont l'artiste traite des thèmes tels que le deuil, la douleur et l'acceptation. Les œuvres évoquent également un sentiment de reconnaissance, emmenant le spectateur dans un voyage émotionnel centré sur le contraste entre art abstrait et figuratif.",
    'emile.bio.p2':  "L'œuvre d'Emile Desweemer dégage une belle apparence de mélancolie, dans laquelle l'obscurité est souvent présente comme sous-entendu. Les images sont souvent construites sous forme de collage, composé de divers fragments de différents scénarios. L'artiste considère son travail comme une représentation d'un souvenir. L'œuvre de Desweemer dégage souvent une atmosphère inquiétante, comme une catastrophe sur le point de se produire.",

    'orlando.label':  'Peinture · Dessin · né 1994',
    'orlando.bio.p1': "Orlando Gruwez (1994) est un peintre et parfois créateur de meubles et sculptures. Utilisant de vieux livres, encyclopédies, cartes postales, gravures collectées et photographies personnelles, il recherche son propre langage visuel. La transience est un thème important dans son œuvre. Il travaille principalement à l'huile et se concentre de plus en plus sur le dessin.",
    'orlando.bio.p2': "Au lycée, il a suivi un cursus en arts visuels, qui a éveillé son intérêt pour l'art. Il a ensuite suivi une formation en bois et menuiserie à Goca Gent, avant d'étudier le design d'intérieur à la LUCA School of Arts de Gand, diplôme obtenu en 2017. Depuis, il continue de peindre et a participé à de nombreuses expositions collectives et en galerie.",

    'cas.label':   'Design · Artisanat · né 2000',
    'cas.bio.p1':  "Cas Reynders (2000) est un designer dédié à l'artisanat authentique et à l'utilisation de matériaux locaux. S'inspirant d'archétypes anciens et de formes intemporelles, il traduit ces influences en designs simples et purs qui parlent à la fois du patrimoine et de la modernité. Son travail reflète une profonde appréciation du monde matériel et des riches récits intégrés dans l'artisanat traditionnel.",
    'cas.bio.p2':  "Chaque pièce qu'il crée à la main en Belgique comble le fossé entre la tradition et le design contemporain, mettant l'accent sur la durabilité, la qualité tactile et la continuité culturelle. Le processus de Cas consiste à déconstruire des archétypes avec un profond respect pour les caractéristiques naturelles de ses matériaux, donnant des objets à la fois fonctionnels et poétiques.",

    'edo.label':   'Sculpture · né 2000',
    'edo.bio.p1':  "Après un arrêt abrupt de sa carrière cycliste, Edo Maas (2000) a commencé à chercher de nouveaux objectifs. En 2021, il s'est inscrit à la Willem de Kooning Academy de Rotterdam. Ce qui a commencé comme un intérêt pour l'art est rapidement devenu une quête artistique profonde. Travaillant depuis son atelier à Anvers, Maas crée des sculptures qui explorent la condition humaine.",
    'edo.bio.p2':  "Ses œuvres capturent des moments d'émotion brute, transmis à travers l'interaction visuelle de la figure humaine dans des compositions saisissantes. Ainsi, il raconte sa propre histoire. Au fil du temps, Maas a développé un langage artistique distinctif qui est à la fois profondément personnel et universellement résonnant.",

    'jean.label':   'Peinture · né 1955',
    'jean.bio.p1':  "Jean De Groote (1955) est avant tout un philosophe de la peinture, ou peut-être est-ce l'inverse: un peintre philosophant? Ses grandes toiles sont des traductions d'une façon de penser, une quête visuelle pour voir, regarder et comprendre le monde qui nous entoure. Dans son œuvre, \"les choses prennent forme\", comme le dit le philosophe Eric Bolle. Leur forme d'existence la plus banale est transformée par Jean en objets à signification sacrée, rendus à l'huile sur toile.",
    'jean.bio.p2':  "Il cherche le petit, car \"même le moindre prouve encore être quelque chose; rien n'est insignifiant.\" Depuis quarante ans, il construit silencieusement un corpus d'œuvres cohérent et contemplatif depuis sa cellule monastique à Nazareth.",
  }
};

/* ─────────────────────────────────────────────
   Core functions
───────────────────────────────────────────── */

function getLang() {
  return localStorage.getItem('cbg-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('cbg-lang', lang);
  applyLang(lang);
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.en[key]) || key;
}

function applyLang(lang) {
  const translations = I18N[lang] || I18N.en;

  /* data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key] !== undefined) el.innerHTML = translations[key];
  });

  /* data-i18n-ph (placeholder) */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (translations[key] !== undefined) el.placeholder = translations[key];
  });

  /* Nav links by href */
  const navMap = {
    'index.html':      translations['nav.home'],
    'exhibitions.html':translations['nav.exhibitions'],
    'artists.html':    translations['nav.artists'],
    'press.html':      translations['nav.press'],
    'contact.html':    translations['nav.contact'],
    '#':               translations['nav.home'],
  };
  document.querySelectorAll('.nav-links a, .mobile-nav .mobile-nav-link').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().split('?')[0];
    if (navMap[href]) a.textContent = navMap[href];
  });

  /* Footer elements */
  const footerHeadings = document.querySelectorAll('.footer-heading');
  footerHeadings.forEach(el => {
    const raw = el.textContent.trim().toLowerCase();
    if (raw === 'navigatie' || raw === 'navigation') el.textContent = translations['footer.nav'];
    else if (raw === 'sociale media' || raw === 'social media' || raw === 'réseaux sociaux') el.textContent = translations['footer.social'];
  });
  document.querySelectorAll('.footer-tagline').forEach(el => {
    el.innerHTML = translations['footer.tagline'];
  });
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.textContent = translations['footer.copy'];
  });

  /* Lang button active state */
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* html lang attribute */
  document.documentElement.lang = lang;
}

/* ─────────────────────────────────────────────
   Inject lang switcher into nav
───────────────────────────────────────────── */
function injectLangSwitcher() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const current = getLang().toUpperCase();
  const sw = document.createElement('div');
  sw.className = 'lang-switcher';
  sw.innerHTML =
    '<button class="lang-current" id="lang-current-btn">' + current + '</button>' +
    '<div class="lang-dropdown">' +
      '<button class="lang-btn" data-lang="en">EN</button>' +
      '<button class="lang-btn" data-lang="nl">NL</button>' +
      '<button class="lang-btn" data-lang="fr">FR</button>' +
    '</div>';

  const toggle = nav.querySelector('.nav-toggle');
  nav.insertBefore(sw, toggle || null);

  const currentBtn = sw.querySelector('.lang-current');
  currentBtn.addEventListener('click', e => {
    e.stopPropagation();
    sw.classList.toggle('open');
  });

  document.addEventListener('click', () => sw.classList.remove('open'));

  sw.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      setLang(btn.dataset.lang);
      currentBtn.textContent = btn.dataset.lang.toUpperCase();
      sw.classList.remove('open');
    });
  });

  // Mobiel menu taalknopjes (in HTML, event listeners hier)
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      currentBtn.textContent = btn.dataset.lang.toUpperCase();
    });
  });
}

/* ─────────────────────────────────────────────
   Init
───────────────────────────────────────────── */
window.setLang = setLang;

document.addEventListener('DOMContentLoaded', () => {
  injectLangSwitcher();
  applyLang(getLang());
});
