import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'fr' | 'en';

export interface Translations {
    [key: string]: {
        fr: string;
        en: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLanguage = signal<Language>('fr');
    private languageSubject = new BehaviorSubject<Language>('fr');

    public language$ = this.languageSubject.asObservable();

    // Dictionnaire de traductions
    private translations: Translations = {
        'nav.discover': {
            fr: 'DÉCOUVREZ-NOUS',
            en: 'DISCOVER US'
        },
        'nav.services': {
            fr: 'NOS SERVICES',
            en: 'OUR SERVICES'
        },
        'nav.commitments': {
            fr: 'NOS ENGAGEMENTS',
            en: 'OUR COMMITMENTS'
        },
        'btn.callback': {
            fr: 'Être rappelé',
            en: 'Get a callback'
        },
        'btn.control': {
            fr: 'Demander un contrôle terrain',
            en: 'Request field control'
        },
        'btn.callback.expert': {
            fr: 'Être rappelé par un expert',
            en: 'Get a callback from an expert'
        },
        'btn.control.field': {
            fr: 'Demander un contrôle terrain',
            en: 'Request field control'
        },
        'company.name': {
            fr: 'VERIF-ARRET',
            en: 'VERIF-ARRET'
        },
        'company.description': {
            fr: 'Expert en contrôle médical professionnel, expertise arrêt maladie et contre-expertise médicale',
            en: 'Expert in professional medical control, sick leave expertise and medical counter-expertise'
        },
        'aria.menu': {
            fr: 'Ouvrir le menu de navigation principal VERIF-ARRET',
            en: 'Open VERIF-ARRET main navigation menu'
        },
        'aria.logo': {
            fr: 'Retour à l\'accueil VERIF-ARRET',
            en: 'Return to VERIF-ARRET homepage'
        },
        'language.switch': {
            fr: 'English',
            en: 'Français'
        },

        'home.hero.title': {
            fr: 'Enquêteur privé agréé pour vérification d\'arrêts maladie et accidents du travail',
            en: 'Licensed private investigator for sick leave and work accident verification'
        },
        'home.hero.description1': {
            fr: 'En choisissant',
            en: 'By choosing'
        },
        'home.hero.description2': {
            fr: 'vous bénéficiez d\'un partenaire reconnu et certifié dans le domaine de l\'investigation, afin d\'effectuer des contrôles légaux sur l\'arrêt de travail (arrêt maladie ou accident de travail) sur votre employé(e). Notre procédure respecte totalement la vie privée de votre salarié(e) et nous intervenons dans les délais prescrits par le médecin.',
            en: 'you benefit from a recognized and certified partner in the field of investigation, to carry out legal controls on work leave (sick leave or work accident) on your employee. Our procedure fully respects your employee\'s privacy and we intervene within the deadlines prescribed by the doctor.'
        },
        'home.absenteeism.title': {
            fr: 'Absentéisme abusif : Comment réagir efficacement ?',
            en: 'Abusive absenteeism: How to react effectively?'
        },
        'home.absenteeism.description': {
            fr: 'Face à un doute légitime concernant le respect d\'un arrêt de travail, l\'employeur a le droit de faire appel à un enquêteur professionnel agréé CNAPS. Notre mission consiste à vérifier discrètement et en toute confidentialité si votre salarié(e) en arrêt maladie ou accident de travail respecte bien les prescriptions médicales et les restrictions d\'activité imposées. Cette démarche légale protège votre entreprise contre la fraude aux arrêts de travail.',
            en: 'Faced with legitimate doubt concerning compliance with a work stoppage, the employer has the right to call upon a CNAPS-approved professional investigator. Our mission is to discreetly and confidentially verify whether your employee on sick leave or work accident properly respects the medical prescriptions and activity restrictions imposed. This legal approach protects your company against work stoppage fraud.'
        },
        'home.absenteeism.btn': {
            fr: 'Découvrir nos services',
            en: 'Discover our services'
        },
        'home.prevention.title': {
            fr: 'La prévention par le contrôle sur le terrain',
            en: 'Prevention through field control'
        },
        'home.prevention.description1': {
            fr: 'Vous avez des interrogations ou des doutes sur la veracité d\'un arrêt maladie ou de travail ? Vous souhaitez protéger votre entreprise ? Alors vous avez besoin d\'un enquêteur professionnel agréé C.N.A.P.S pour vos vérifications.',
            en: 'Do you have questions or doubts about the veracity of a sick leave or work stoppage ? Do you want to protect your company ? Then you need a C.N.A.P.S certified professional investigator for your verifications.'
        },
        'home.prevention.description2': {
            fr: 'Nous vous proposons un service d\'investigation professionnel avec des interventions rapides et des rapports détaillés (écrits et photographiques) et circontanciés, utilisables devant les tribunaux et transmissibles auprès de la Sécurité Sociale et l\'U.R.S.S.A.F. Notre réseau d\'enquêteurs expérimentés nous permet d\'opérer sur tout le territoire national avec une extrême rigueur.',
            en: 'We offer you a professional investigation service with rapid interventions and detailed (written and photographic) and circumstantial reports, usable in court and transmissible to Social Security and U.R.S.S.A.F. Our network of experienced investigators allows us to operate throughout the national territory with extreme rigor.'
        },
        'home.intro.title': {
            fr: 'Arrêt maladie ou accident du travail :',
            en: 'Sick leave or work accident:'
        },
        'home.intro.subtitle': {
            fr: 'vérifiez la légitimité avec un enquêteur privé',
            en: 'verify legitimacy with a private investigator'
        },
        'home.intro.objective': {
            fr: 'Notre objectif: lutter contre les arrêts de travail abusifs',
            en: 'Our objective: fight against abusive work stoppages'
        },
        'home.intro.description1': {
            fr: 'A l\'heure où les arrêts de travail explosent en France (plus de 59%), un arrêt de travail injustifié, voir douteux, peut avoir des conséquences sérieuses pour votre entreprise telles que : la désorganisation de vos équipes, la surcharge de tavail pour vos collaborateurs, la perte de productivité, ou les encore coûts supplémentaires liés au remplacement du salarié(e) absent ou à son complément salaire.',
            en: 'At a time when work stoppages are exploding in France (more than 59%), an unjustified or even doubtful work stoppage can have serious consequences for your company such as: disorganization of your teams, work overload for your collaborators, loss of productivity, or additional costs related to replacing the absent employee or their salary supplement.'
        },
        'home.intro.description2': {
            fr: 'Face à ces abus potentiels qui engendrent un stress supplémentaire, le recours à un enquêteur privé agréé permet de vérifier objectivement la situation réelle du salarié(e) sur le terrain, dans le respect du cadre légal.',
            en: 'Faced with these potential abuses that generate additional stress, using a licensed private investigator allows you to objectively verify the real situation of the employee in the field, while respecting the legal framework.'
        },
        'home.suspect.title': {
            fr: 'Quand un arrêt de travail devient suspect',
            en: 'When a work stoppage becomes suspicious'
        },
        'home.suspect.intro': {
            fr: 'Un arrêt de travail - qu\'il s\'agisse d\'un arrêt maladie ou d\'un accident du travail - est un droit, sous réserve qu\'il repose sur des éléments médicaux justifiés.',
            en: 'A work stoppage - whether it is sick leave or a work accident - is a right, provided that it is based on justified medical elements.'
        },
        'home.suspect.doctor.title': {
            fr: 'Le médecin prescripteur peut :',
            en: 'The prescribing doctor can:'
        },
        'home.suspect.doctor.item1': {
            fr: 'autoriser ou restreindre les sorties du salarié,',
            en: 'authorize or restrict the employee\'s outings,'
        },
        'home.suspect.doctor.item2': {
            fr: 'fixer les horaires de présence obligatoire à domicile (souvent 9h-11h et 14h-16h),',
            en: 'set mandatory home presence hours (often 9am-11am and 2pm-4pm),'
        },
        'home.suspect.doctor.item3': {
            fr: 'interdire les déplacements hors département ou à l\'étranger sans accord préalable de la CPAM.',
            en: 'prohibit travel outside the department or abroad without prior agreement from CPAM.'
        },
        'home.suspect.abuse': {
            fr: 'Cependant, certain(e)s salarié(e)s abusent de ce droit en exerçant une autre activité professionnelle qui s\'avère être un travail dissimulé, condanable sur le plan pénal devant les tribunaux,',
            en: 'However, some employees abuse this right by engaging in another professional activity which turns out to be concealed work, punishable criminally in court,'
        },
        'home.suspect.article': {
            fr: 'Article L8221-1 à L8221-5 du Code du travail',
            en: 'Article L8221-1 to L8221-5 of the Labor Code'
        },
        'home.cpam.title': {
            fr: 'Les limites du contrôle par la CPAM',
            en: 'The limits of CPAM control'
        },
        'home.cpam.subtitle': {
            fr: '(Caisse Primaire d\'Assurance Maladie)',
            en: '(Primary Health Insurance Fund)'
        },
        'home.cpam.description1': {
            fr: 'La Caisse Primaire d\'Assurance Maladie (CPAM) peut effectuer un contrôle médical, mais cela reste rare, notamment pour les arrêts de courte durée.',
            en: 'The Primary Health Insurance Fund (CPAM) can carry out a medical check, but this remains rare, especially for short-term stoppages.'
        },
        'home.cpam.description2': {
            fr: 'De plus, lorsque le salarié est prévenu du contrôle à l\'avance, il peut facilement se "mettre en condition" pour paraître conforme, rendant l\'évaluation inefficace.',
            en: 'Moreover, when the employee is warned of the check in advance, they can easily "get into condition" to appear compliant, making the evaluation ineffective.'
        },
        'home.cpam.solution': {
            fr: 'C\'est pourquoi une surveillance discrète par un enquêteur privé agréé s\'impose souvent comme la solution la plus fiable pour identifier un abus réel. Notre objectif prioritaire est de vous apporter des preuves irréfutables.',
            en: 'This is why discreet surveillance by a licensed private investigator is often the most reliable solution to identify real abuse. Our priority objective is to provide you with irrefutable evidence.'
        },
        'home.detective.title': {
            fr: 'Ce que permet un Enquêteur Privé',
            en: 'What a Private Investigator allows'
        },
        'home.detective.intro': {
            fr: 'Un enquêteur privé agréé & certifié est habilité à :',
            en: 'An approved & certified private investigator is authorized to'
        },
        'home.detective.capabilities.item1': {
            fr: 'surveiller discrètement les déplacements du salarié(e) sans porter atteinte à sa vie privée,',
            en: 'discreetly monitor the employee\'s movements without infringing on their privacy,'
        },
        'home.detective.capabilities.item2': {
            fr: 'constater des activités incompatibles (sport intensif, etc) avec son état de santé déclaré à son médecin,',
            en: 'notice activities that are incompatible (intensive sport, etc.) with their state of health declared to their doctor,'
        },
        'home.detective.capabilities.item3': {
            fr: 'documenter par écrit et en images toute situation suspecte ou frauduleuse,',
            en: 'document in writing and in images any suspicious or fraudulent situation,'
        },
        'home.detective.capabilities.item4': {
            fr: 'fournir un rapport détaillé utilisable devant les tribunaux.',
            en: 'provide a detailed report that can be used in court.'
        },
        'home.detective.legal.title': {
            fr: 'Cadre légal de l\'intervention :',
            en: 'Legal framework of the intervention:'
        },
        'home.detective.legal.subtitle': {
            fr: 'Nos enquêteurs sont agréés par le C.N.A.P.S (Conseil National des Activités Privées de Sécurité) et respectent scrupuleusement le cadre légal en vigueur. Toutes nos investigations se déroulent dans l\'espace public, sans intrusion dans la vie privée du salarié.',
            en: 'Our investigators are approved by the C.N.A.P.S (National Council for Private Security Activities) and scrupulously respect the legal framework in force.  All our investigations take place in public spaces, without intrusion into the employee\'s private life.'
        },
        'home.detective.legal.item1': {
            fr: 'Respect de la vie privée et de la dignité humaine',
            en: 'Respect for privacy and human dignity'
        }, 'home.detective.legal.item2': {
            fr: 'Surveillance uniquement dans l\'espace public',
            en: 'Surveillance only in public spaces'
        },
        'home.detective.legal.item3': {
            fr: 'Rapports conformes aux exigences judiciaires',
            en: 'Reports conform to judicial requirements'
        },
        'home.detective.legal.item4': {
            fr: 'Confidentialité absolue garantie',
            en: 'Absolute confidentiality guaranteed'
        },
        'home.detective.article_l8221_1_title': {
            'fr': 'Article L8221-1',
            'en': 'Article L8221-1'
        },
        'home.detective.article_l8221_1_subtitle': {
            'fr': 'Sont interdits :',
            'en': 'The following are prohibited:'
        },
        'home.detective.article_l8221_1_item1': {
            'fr': 'Le travail totalement ou partiellement dissimulé, défini et exercé dans les conditions prévues aux articles L. 8221-3 et L8221-5',
            'en': 'Totally or partially concealed work, defined and exercised under the conditions provided for in articles L. 8221-3 and L8221-5'
        },
        'home.detective.article_l8221_1_item2': {
            'fr': 'La publicité, par quelque moyen que ce soit, tendant à favoriser, en toute connaissance de cause, le travail dissimulé',
            'en': 'Advertising, by any means whatsoever, tending to favor, knowingly, concealed work'
        },
        'home.detective.article_l8221_1_item3': {
            'fr': 'Le fait de recourir sciemment, directement ou par personne interposée, aux services de celui qui exerce un travail dissimulé',
            'en': 'The fact of knowingly resorting, directly or through an intermediary, to the services of one who exercises concealed work'
        },
        'home.detective.article_l8221_2_title': {
            fr: 'Article L8221-2',
            en: 'Article L8221-2'
        },
        'home.detective.article_l8221_2_content': {
            fr: 'Sont exclus des interdictions prévues au présent chapitre, les travaux d\'urgence dont l\'exécution immédiate est nécessaire pour prévenir les accidents imminents ou organiser les mesures de sauvetage.',
            en: 'Excluded from the prohibitions provided for in this chapter are emergency work whose immediate execution is necessary to prevent imminent accidents or organize rescue measures.'
        },
        'home.detective.article_l8221_3_title': {
            fr: 'Article L8221-3',
            en: 'Article L8221-3'
        },
        'home.detective.article_l8221_3_content': {
            fr: 'Est réputé travail dissimulé par dissimulation d\'activité, l\'exercice à but lucratif d\'une activité de production, de transformation, de réparation ou de prestation de services ou l\'accomplissement d\'actes de commerce par toute personne qui, se soustrayant intentionnellement à ses obligations :',
            en: 'Is deemed concealed work by concealment of activity, the exercise for profit of an activity of production, transformation, repair or service provision or the accomplishment of commercial acts by any person who, intentionally evading their obligations:'
        },
        'home.detective.article_l8221_3_item1': {
            fr: '1 - Soit n\'a pas demandé son immatriculation au registre national des entreprises en tant qu\'entreprise du secteur des métiers et de l\'artisanat ou au registre du commerce et des sociétés, lorsque celle-ci est obligatoire, ou a poursuivi son activité après refus d\'immatriculation, ou postérieurement à une radiation ;',
            en: '1 - Either has not requested registration in the national register of companies as a company in the crafts and trades sector or in the trade and companies register, when this is mandatory, or has continued their activity after refusal of registration, or subsequent to a removal;'
        },
        'home.detective.article_l8221_3_item2': {
            fr: '2 - Soit n\'a pas procédé aux déclarations qui doivent être faites aux organismes de protection sociale ou à l\'administration fiscale en vertu des dispositions légales en vigueur. Cette situation peut notamment résulter de la non-déclaration d\'une partie de son chiffre d\'affaires ou de ses revenus ou de la continuation d\'activité après avoir été radié par les organismes de protection sociale en application de l\'article L. 613-4 du code de la sécurité sociale ;',
            en: '2 - Either has not made the declarations that must be made to social protection organizations or to the tax administration under current legal provisions. This situation may notably result from the non-declaration of part of their turnover or income or from continuing activity after being removed by social protection organizations under article L. 613-4 of the social security code;'
        },
        'home.detective.article_l8221_3_item3': {
            fr: '3 - Soit s\'est prévalue des dispositions applicables au détachement de salariés lorsque l\'employeur de ces derniers exerce dans l\'Etat sur le territoire duquel il est établi des activités relevant uniquement de la gestion interne ou administrative, ou lorsque son activité est réalisée sur le territoire national de façon habituelle, stable et continue.',
            en: '3 - Either has taken advantage of provisions applicable to the posting of employees when the employer of the latter exercises in the State on whose territory it is established activities relating solely to internal or administrative management, or when its activity is carried out on national territory in a habitual, stable and continuous manner.'
        },
        'home.detective.article_l8221_4_title': {
            fr: 'Article L8221-4',
            en: 'Article L8221-4'
        },
        'home.detective.article_l8221_4_content': {
            fr: 'Les activités mentionnées à l\'article L. 8221-3 sont présumées, sauf preuve contraire, accomplies à titre lucratif :',
            en: 'The activities mentioned in article L. 8221-3 are presumed, unless proven otherwise, to be carried out for profit:'
        },
        'home.detective.article_l8221_4_item1': {
            fr: '1 - Soit lorsque leur réalisation a lieu avec recours à la publicité sous une forme quelconque en vue de la recherche de la clientèle ;',
            en: '1 - Either when their realization takes place with recourse to advertising in any form with a view to seeking clientele;'
        },
        'home.detective.article_l8221_4_item2': {
            fr: '2 - Soit lorsque leur fréquence ou leur importance est établie ;',
            en: '2 - Either when their frequency or importance is established;'
        },
        'home.detective.article_l8221_4_item3': {
            fr: '3 - Soit lorsque la facturation est absente ou frauduleuse ;',
            en: '3 - Either when billing is absent or fraudulent;'
        },
        'home.detective.article_l8221_4_item4': {
            fr: '4 - Soit lorsque, pour des activités artisanales, elles sont réalisées avec un matériel ou un outillage présentant par sa nature ou son importance un caractère professionnel.',
            en: '4 - Either when, for craft activities, they are carried out with equipment or tools that by their nature or importance have a professional character.'
        },
        'home.detective.article_l8221_5_title': {
            fr: 'Article L8221-5',
            en: 'Article L8221-5'
        },
        'home.detective.article_l8221_5_content': {
            fr: 'Est réputé travail dissimulé par dissimulation d\'emploi salarié le fait pour tout employeur :',
            en: 'Is deemed concealed work by concealment of salaried employment the fact for any employer:'
        },
        'home.detective.article_l8221_5_item1': {
            fr: '1 - Soit de se soustraire intentionnellement à l\'accomplissement de la formalité prévue à l\'article L. 1221-10, relatif à la déclaration préalable à l\'embauche ;',
            en: '1 - Either to intentionally evade the accomplishment of the formality provided for in article L. 1221-10, relating to the prior declaration of hiring;'
        },
        'home.detective.article_l8221_5_item2': {
            fr: '2 - Soit de se soustraire intentionnellement à la délivrance d\'un bulletin de paie ou d\'un document équivalent défini par voie réglementaire, ou de mentionner sur le bulletin de paie ou le document équivalent un nombre d\'heures de travail inférieur à celui réellement accompli, si cette mention ne résulte pas d\'une convention ou d\'un accord collectif d\'aménagement du temps de travail conclu en application du titre II du livre Ier de la troisième partie ;',
            en: '2 - Either to intentionally evade the issuance of a pay slip or equivalent document defined by regulation, or to mention on the pay slip or equivalent document a number of working hours less than that actually performed, if this mention does not result from a convention or collective agreement on working time arrangements concluded under title II of book I of the third part;'
        },
        'home.detective.article_l8221_5_item3': {
            fr: '3 - Soit de se soustraire intentionnellement aux déclarations relatives aux salaires ou aux cotisations sociales assises sur ceux-ci auprès des organismes de recouvrement des contributions et cotisations sociales ou de l\'administration fiscale en vertu des dispositions légales.',
            en: '3 - Either to intentionally evade declarations relating to salaries or social contributions based on them to organizations for the recovery of social contributions and contributions or to the tax administration under legal provisions.'
        },
        'home.detective.article_9_civil_title': {
            fr: 'Article 9 du Code civil',
            en: 'Article 9 of the Civil Code'
        },
        'home.detective.article_9_civil_content': {
            fr: 'Chacun a droit au respect de sa vie privée. Les juges peuvent, sans préjudice de la réparation du dommage subi, prescrire toutes mesures, telles que séquestre, saisie et autres, propres à empêcher ou faire cesser une atteinte à l\'intimité de la vie privée : ces mesures peuvent, s\'il y a urgence, être ordonnées en référé.',
            en: 'Everyone has the right to respect for their private life. Judges may, without prejudice to compensation for damage suffered, prescribe all measures, such as sequestration, seizure and others, suitable for preventing or stopping an attack on the intimacy of private life: these measures may, if there is urgency, be ordered in summary proceedings.'
        },
        'home.detective.article_368_penal_title': {
            fr: 'Article 368 du Code pénal',
            en: 'Article 368 of the Penal Code'
        },
        'home.detective.article_368_penal_content': {
            fr: 'Le fait, au moyen d\'un procédé quelconque, de porter atteinte à l\'intimité de la vie privée d\'autrui en captant, enregistrant ou transmettant, sans le consentement de leur auteur, des paroles prononcées à titre privé ou confidentiel, en fixant, enregistrant ou transmettant, sans le consentement de celle-ci, l\'image d\'une personne se trouvant dans un lieu privé, est puni d\'un an d\'emprisonnement et de 45 000 euros d\'amende.',
            en: 'The act, by any means whatsoever, of violating the intimacy of another person\'s private life by capturing, recording or transmitting, without the consent of their author, words spoken privately or confidentially, by fixing, recording or transmitting, without the consent of that person, the image of a person in a private place, is punishable by one year\'s imprisonment and a fine of 45,000 euros.'
        },
        'home.detective.conjunction': {
            fr: ' et ',
            en: ' and '
        },
        'discover.hero.title': {
            fr: 'GROUPE DE LAGARDE : Enquêteur Privé Agréé CNAPS - Olivier Lagarde',
            en: 'LAGARDE GROUP: CNAPS Licensed Private Investigator - Olivier Lagarde'
        },
        'discover.hero.subtitle': {
            fr: 'Société d\'investigations nationale spécialisée en vérification arrêts maladie et contrôle fraude',
            en: 'National investigation company specialized in sick leave verification and fraud control'
        },
        'discover.hero.description1': {
            fr: ', fondateur et directeur d\'enquête au sein de l\'entreprise',
            en: ', Founder and investigation director within the company'
        },
        'discover.hero.description2': {
            fr: 'met à votre disposition ses',
            en: 'puts at your disposal his'
        },
        'discover.hero.description3': {
            fr: '30 ans d\'expérience',
            en: '30 years of experience'

        },
        'discover.hero.description4': {
            fr: 'en investigation privée pour la résolution de vos missions d\'enquêtes et d\'apport de preuves légales. Expert en vérification d\'arrêts maladie, accidents du travail et surveillance médicale discrète.',
            en: 'in private investigation for solving your investigation missions and providing legal evidence. Expert in sick leave verification, work accidents and discreet medical surveillance.'
        },

        // Section Parcours
        'discover.career.title': {
            fr: 'Parcours professionnel d\'Olivier Lagarde - Expert Investigation Privée CNAPS',
            en: 'Professional career of Olivier Lagarde - CNAPS Private Investigation Expert'
        },
        'discover.career.subtitle': {
            fr: 'Formation Forces Spéciales Marine - École Normill Paris - 30 ans d\'expérience',
            en: 'Special Forces Navy Training - École Normill Paris - 30 years of experience'
        },
        'discover.career.period1': {
            fr: 'Après ses études',
            en: 'After his studies'
        },
        'discover.career.content1_part1': {
            fr: 'Olivier LAGARDE s\'engage au sein de l\'unité des ',
            en: 'Olivier LAGARDE enlisted in the Special Forces unit of the '
        },
        'discover.career.content1_forces_speciales': {
            fr: 'Forces Spéciales de la Marine Nationale',
            en: 'Special Forces of the National Navy'
        },
        'discover.career.content1_part2': {
            fr: ' et intègre le groupement des ',
            en: ' and joined the FUMACO group in '
        },
        'discover.career.content1_fumaco': {
            fr: 'FUMACO à Lorient',
            en: 'FUMACO group in Lorient'
        },
        'discover.career.content1_part3': {
            fr: ' puis le ',
            en: ' then the '
        },
        'discover.career.content1_commando': {
            fr: 'Commando de Penfentenyo',
            en: 'Penfentenyo Commando'
        },
        'discover.career.content1_part4': {
            fr: 'Formation militaire d\'élite en techniques de surveillance, investigation, filature discrète et collecte de renseignements.',
            en: 'Elite military training in surveillance techniques, investigation, discreet tracking and intelligence gathering.'
        },
        'discover.career.content2': {
            fr: 'Fort de cette expérience militaire, il obtient ensuite un ',
            en: 'Building on this military experience, he then obtained a '
        },
        'discover.career.content2_diplome': {
            fr: 'diplôme d\'enquêteur de Droit Privé à l\'École Normill de Paris',
            en: 'Private Law investigator diploma from École Normill in Paris'
        },
        'discover.career.content2_part2': {
            fr: ' et travaille en collaboration avec l\'ancien patron du ',
            en: ' and worked in collaboration with the former head of '
        },
        'discover.career.content2_gign': {
            fr: 'GIGN',
            en: 'GIGN'
        },
        'discover.career.content2_part3': {
            fr: '. Certification professionnelle en investigation privée, surveillance médicale et contrôle fraude.',
            en: '. Professional certification in private investigation, medical surveillance and fraud control.'
        },
        'discover.career.content3_part1': {
            fr: 'Il crée ensuite sa ',
            en: 'He then created his '
        },
        'discover.career.content3_entreprise': {
            fr: 'première entreprise d\'investigation',
            en: 'first investigation company'
        },
        'discover.career.content3_part2': {
            fr: ' et se développe sur l\'ensemble de l\'hexagone en exerçant pour les particuliers, les entreprises, les cabinets d\'avocats ou bien les compagnies d\'assurances via l\'',
            en: ' and developed throughout France by working for individuals, companies, law firms or insurance companies via the '
        },
        'discover.career.content3_agence': {
            fr: 'Agence Européenne d\'Investigation',
            en: 'European Investigation Agency'
        },
        'discover.career.content3_part3': {
            fr: '. Spécialisation en vérification d\'arrêts maladie et accidents du travail.',
            en: '. Specialization in sick leave verification and work accidents.'
        },
        'discover.career.content4_part1': {
            fr: 'L\'',
            en: 'The '
        },
        'discover.career.content4_agence_nationale': {
            fr: 'Agence Nationale d\'Investigation',
            en: 'National Investigation Agency'
        },
        'discover.career.content4_part2': {
            fr: ' s\'établit également en Corse et crée la société ',
            en: ' also established itself in Corsica and created the company '
        },
        'discover.career.content4_infiltra': {
            fr: 'Infiltra-France',
            en: 'Infiltra-France'
        },
        'discover.career.content4_part3': {
            fr: '. Extension géographique des services d\'investigation privée, surveillance médicale et contrôle fraude sociale sur tout le territoire français.',
            en: '. Geographic extension of private investigation services, medical surveillance and social fraud control throughout French territory.'
        },

        // Section Agence
        'discover.agency.title': {
            fr: 'Agence d\'enquête privée agréée CNAPS en France',
            en: 'CNAPS licensed private investigation agency in France'
        },
        'discover.agency.subtitle': {
            fr: 'Spécialiste vérification arrêts maladie et contrôle fraude sociale',
            en: 'Specialist in sick leave verification and social fraud control'
        },
        'discover.agency.content1_part1': {
            fr: 'Aujourd\'hui, fort de',
            en: 'Today, with'
        },
        'discover.agency.content1_implantations': {
            fr: '18 implantations',
            en: '18 locations'
        },
        'discover.agency.content1_part2': {
            fr: 'sur le territoire métropolitain,',
            en: 'throughout metropolitan France,'
        },
        'discover.agency.content1_part3': {
            fr: ', fondateur et directeur d\'enquête au sein de l\'entreprise',
            en: ', founder and investigation director within the company'
        },
        'discover.agency.content1_part4': {
            fr: 'résout des affaires qui le mènent aux quatre coins de l\'hexagone et parfois en dehors de nos frontières pour des clients issus de la sphère privée comme de l\'univers professionnel. Expert en',
            en: 'solves cases that take him to all corners of France and sometimes beyond our borders for clients from both the private sphere and the professional world. Expert in'
        },
        'discover.agency.content1_verification': {
            fr: 'vérification d\'arrêts maladie',
            en: 'sick leave verification'
        },
        'discover.agency.content1_accidents': {
            fr: 'accidents du travail',
            en: 'work accidents'
        },
        'discover.agency.content1_surveillance': {
            fr: 'surveillance médicale',
            en: 'medical surveillance'
        },
        'discover.agency.content1_part6': {
            fr: 'et',
            en: 'and'
        },
        'discover.agency.content1_controle': {
            fr: 'contrôle fraude sociale',
            en: 'social fraud control'
        },

        // Remplacer discover.agency.content2 par :
        'discover.agency.content2_part1': {
            fr: 'Vous souhaitez en apprendre plus sur notre agence de recherches et d\'investigations ?',
            en: 'Do you want to learn more about our research and investigation agency ?'
        },
        'discover.agency.content2_part2': {
            fr: 'représentée par Olivier Lagarde, est une société d\'investigations proposant des services aux professionnels et parfois aux particuliers. Spécialisée dans la',
            en: 'represented by Olivier Lagarde, is an investigation company offering services to professionals and sometimes to individuals. Specialized in'
        },
        'discover.agency.content2_verification': {
            fr: 'vérification d\'arrêts maladie',
            en: 'sick leave verification'
        },
        'discover.agency.content2_accidents': {
            fr: 'accidents du travail',
            en: 'work accidents'
        },
        'discover.agency.content2_surveillance': {
            fr: 'surveillance discrète',
            en: 'discreet surveillance'
        },
        'discover.agency.content2_filature': {
            fr: 'filature médicale',
            en: 'medical tracking'
        },
        'discover.agency.content2_part6': {
            fr: 'et',
            en: 'and'
        },
        'discover.agency.content2_controle': {
            fr: 'contrôle fraude assurance',
            en: 'insurance fraud control'
        },

        // Remplacer discover.agency.content3 par :
        'discover.agency.content3_part1': {
            fr: 'Avec une forte expertise de plus de',
            en: 'With strong expertise of more than'
        },
        'discover.agency.content3_annees': {
            fr: '30 années',
            en: '30 years'
        },
        'discover.agency.content3_part2': {
            fr: 'dans le domaine des enquêtes professionnelles et privées, notre agence intervient en respectant le',
            en: 'in the field of professional and private investigations, our agency operates while respecting the'
        },
        'discover.agency.content3_deontologie': {
            fr: 'code de déontologie',
            en: 'code of ethics'
        },
        'discover.agency.content3_part3': {
            fr: 'relatif à notre métier et assure la',
            en: 'relating to our profession and ensures'
        },
        'discover.agency.content3_confidentialite': {
            fr: 'confidentialité',
            en: 'total confidentiality'
        },
        'discover.agency.content3_part4': {
            fr: 'totale des informations et coordonnées fournies par nos clients. Services d\'',
            en: 'of information and coordinates provided by our clients.'
        },
        'discover.agency.content3_investigation': {
            fr: 'investigation légale',
            en: 'Legal investigation services'
        },
        'discover.agency.content3_expertise': {
            fr: 'expertise judiciaire',
            en: 'judicial expertise'
        },
        'discover.agency.content3_part6': {
            fr: 'et',
            en: 'and'
        },
        'discover.agency.content3_contre_enquete': {
            fr: 'contre-enquête.',
            en: 'counter-investigation.'
        },

        // Remplacer discover.agency.content4 par :
        'discover.agency.content4_part1': {
            fr: 'Nous intervenons aussi dans d\'autres types de missions nécessitant',
            en: 'We also intervene in other types of missions requiring'
        },
        'discover.agency.content4_surveillances': {
            fr: 'des surveillances et des filatures',
            en: 'surveillance and tracking'
        },
        'discover.agency.content4_part2': {
            fr: 'notamment pour toutes enquêtes et',
            en: 'particularly for all investigations and'
        },
        'discover.agency.content4_preuves': {
            fr: 'recherches de preuves',
            en: 'evidence gathering'
        },
        'discover.agency.content4_part3': {
            fr: '(concurrence déloyale, enquêtes financières, affaires prud\'homales, fraude aux arrêts de travail). Spécialistes en',
            en: '(unfair competition, financial investigations, labor court cases, work stoppage fraud). Specialists in'
        },
        'discover.agency.content4_investigation': {
            fr: 'investigation médicale',
            en: 'medical investigation'
        },
        'discover.agency.content4_surveillance': {
            fr: 'surveillance thérapeutique',
            en: 'therapeutic surveillance'
        },
        'discover.agency.content4_controle': {
            fr: 'contrôle pathologie',
            en: 'pathology control'
        },

        // Section Métier
        'discover.profession.title': {
            fr: 'Quel est le rôle d\'un agent de recherches privées et d\'investigations agréé CNAPS ?',
            en: 'What is the role of a CNAPS licensed private research and investigation agent?'
        },
        'discover.profession.subtitle': {
            fr: 'Enquêteur privé spécialisé vérification arrêts maladie et surveillance médicale',
            en: 'Private investigator specialized in sick leave verification and medical surveillance'
        },
        'discover.profession.definition_part1': {
            fr: 'Un',
            en: 'A'
        },
        'discover.profession.definition_agent': {
            fr: 'agent de recherche privé',
            en: 'private research agent'
        },
        'discover.profession.definition_part2': {
            fr: 'est un',
            en: 'is a'
        },
        'discover.profession.definition_enqueteur': {
            fr: 'enquêteur de droit privé agréé CNAPS',
            en: 'CNAPS licensed private law investigator'
        },
        'discover.profession.definition_part3': {
            fr: 'qui a la capacité d\'effectuer des recherches, des investigations et des surveillances pour le compte de particuliers, d\'entreprises ou d\'institutions. Expert en',
            en: 'who has the ability to conduct research, investigations and surveillance on behalf of individuals, companies or institutions. Expert in'
        },
        'discover.profession.definition_verification': {
            fr: 'vérification d\'arrêts maladie',
            en: 'sick leave verification'
        },
        'discover.profession.definition_part4': {
            fr: 'et',
            en: 'and'
        },
        'discover.profession.definition_controle': {
            fr: 'contrôle sur d\'éventuelles fraudes',
            en: 'control of potential fraud'
        },
        'discover.profession.definition_part5': {
            fr: '.',
            en: '.'
        },

        // Remplacer discover.profession.missions par :
        'discover.profession.missions_part1': {
            fr: 'Ses missions incluent la',
            en: 'His missions include'
        },
        'discover.profession.missions_collecte': {
            fr: 'collecte de preuves légales',
            en: 'collecting legal evidence'
        },
        'discover.profession.missions_part2': {
            fr: ', la',
            en: ','
        },
        'discover.profession.missions_filature': {
            fr: 'filature discrète',
            en: 'discreet tracking'
        },
        'discover.profession.missions_part3': {
            fr: ', l\'',
            en: ', '
        },
        'discover.profession.missions_investigation': {
            fr: 'investigation judiciaire',
            en: 'judicial investigation'
        },
        'discover.profession.missions_part4': {
            fr: ', la',
            en: ','
        },
        'discover.profession.missions_surveillance': {
            fr: 'surveillance thérapeutique',
            en: 'therapeutic surveillance'
        },
        'discover.profession.missions_part5': {
            fr: 'et le',
            en: 'and'
        },
        'discover.profession.missions_controle': {
            fr: 'contrôle pathologie',
            en: 'pathology control'
        },
        'discover.profession.missions_part6': {
            fr: '. Il intervient dans le respect strict du code de déontologie et de la législation en vigueur, garantissant la',
            en: '. He operates in strict compliance with the code of ethics and current legislation, guaranteeing the'
        },
        'discover.profession.missions_confidentialite': {
            fr: 'confidentialité',
            en: 'confidentiality'
        },
        'discover.profession.missions_part7': {
            fr: 'et la',
            en: 'and'
        },
        'discover.profession.missions_legalite': {
            fr: 'légalité',
            en: 'legality'
        },
        'discover.profession.missions_part8': {
            fr: 'de ses actions.',
            en: 'of his actions.'
        },

        // Section FAQ
        'discover.faq.title': {
            fr: 'Questions fréquentes sur l\'investigation privée',
            en: 'Frequently asked questions about private investigation'
        },
        'discover.faq.question1': {
            fr: 'Qu\'est-ce que l\'agrément CNAPS ?',
            en: 'What is CNAPS approval?'
        },
        'discover.faq.answer1': {
            fr: 'L\'agrément CNAPS (Conseil National des Activités Privées de Sécurité) est une autorisation obligatoire pour exercer en tant qu\'enquêteur privé en France. Il garantit la formation, l\'expérience et la déontologie du professionnel.',
            en: 'CNAPS approval (National Council for Private Security Activities) is a mandatory authorization to practice as a private investigator in France. It guarantees the training, experience and ethics of the professional.'
        },

        'discover.faq.question2': {
            fr: 'Comment se déroule une vérification d\'arrêt maladie ?',
            en: 'How does a sick leave verification work?'
        },
        'discover.faq.answer2': {
            fr: 'La vérification d\'arrêt maladie s\'effectue par surveillance discrète et légale, dans le respect de la vie privée. L\'enquêteur collecte des preuves objectives sur les activités du salarié en arrêt.',
            en: 'Sick leave verification is carried out through discreet and legal surveillance, respecting privacy. The investigator collects objective evidence on the activities of the employee on leave.'
        },
        'discover.faq.question3': {
            fr: 'Quelles sont les zones d\'intervention de VERIF-ARRÊT ?',
            en: 'What are VERIF-ARRÊT\'s intervention areas?'
        },
        'discover.faq.answer3': {
            fr: 'VERIF-ARRÊT intervient sur tout le territoire français avec 18 implantations : Marseille, Nice, Cannes, Aix-en-Provence, Monaco, Ajaccio, Bastia, Nantes, Rennes, Tours, Le Havre, Biarritz, Reims, Manosque, Saint-Tropez et autres villes.',
            en: 'VERIF-ARRÊT operates throughout French territory with 18 locations: Marseille, Nice, Cannes, Aix-en-Provence, Monaco, Ajaccio, Bastia, Nantes, Rennes, Tours, Le Havre, Biarritz, Reims, Manosque, Saint-Tropez and other cities.'
        },

        // Traductions pour la page Engagement

        'engagement.hero.description_part1': {
            fr: 'Des valeurs fortes de',
            en: 'Strong values of'
        },
        'engagement.hero.description_deontologie': {
            fr: 'déontologie',
            en: 'ethics'
        },
        'engagement.hero.description_part2': {
            fr: ',',
            en: ','
        },
        'engagement.hero.description_confidentialite': {
            fr: 'confidentialité',
            en: 'confidentiality'
        },
        'engagement.hero.description_part3': {
            fr: 'et',
            en: 'and'
        },
        'engagement.hero.description_professionnalisme': {
            fr: 'professionnalisme',
            en: 'professionalism'
        },
        'engagement.hero.description_part4': {
            fr: 'au service de votre confiance avec',
            en: 'serving your trust with'
        },
        'engagement.hero.description_end': {
            fr: ', spécialiste de la vérification d\'arrêts maladie et investigations légales.',
            en: ', specialist in sick leave verification and legal investigations.'
        },

        'engagement.prevention.content1_part1': {
            fr: 'Nos missions d\'enquêtes privées sur les arrêts de travail de vos salarié(e)s constituent un',
            en: 'Our private investigation missions on your employees\' work stoppages constitute a'
        },
        'engagement.prevention.content1_outil_legal': {
            fr: 'outil légal et efficace',
            en: 'legal and effective tool'
        },
        'engagement.prevention.content1_part2': {
            fr: 'pour lutter contre l\'absentéisme au travail, les arrêts abusifs et la',
            en: 'to fight against workplace absenteeism, abusive stoppages and'
        },
        'engagement.prevention.content1_fraude': {
            fr: 'fraude aux prestations sociales',
            en: 'social benefit fraud'
        },
        'engagement.prevention.content1_part3': {
            fr: '. Cette',
            en: '. This'
        },
        'engagement.prevention.content1_investigation': {
            fr: 'investigation professionnelle',
            en: 'professional investigation'
        },
        'engagement.prevention.content1_part4': {
            fr: 'permet de protéger votre entreprise contre les',
            en: 'allows you to protect your company against'
        },
        'engagement.prevention.content1_fraudes_arret': {
            fr: 'fraudes à l\'arrêt maladie',
            en: 'sick leave fraud'
        },
        'engagement.prevention.content1_part5': {
            fr: 'tout en respectant scrupuleusement le',
            en: 'while scrupulously respecting the'
        },
        'engagement.prevention.content1_cadre_legal': {
            fr: 'cadre légal',
            en: 'legal framework'
        },
        'engagement.prevention.content1_part6': {
            fr: ', la',
            en: ', private investigator'
        },
        'engagement.prevention.content1_deontologie': {
            fr: 'déontologie de l\'enquêteur privé',
            en: 'ethics'
        },
        'engagement.prevention.content1_part7': {
            fr: 'et la vie privée du salarié(e) sous',
            en: 'and the privacy of the employee under'
        },
        'engagement.prevention.content1_surveillance': {
            fr: 'surveillance discrète',
            en: 'discreet surveillance'
        },
        'engagement.prevention.content1_part8': {
            fr: '.',
            en: '.'
        },

        'engagement.prevention.content2_part1': {
            fr: 'Nos',
            en: 'Our'
        },
        'engagement.prevention.content2_enqueteurs': {
            fr: 'enquêteurs privés agréés C.N.A.P.S',
            en: 'C.N.A.P.S licensed private investigators'
        },
        'engagement.prevention.content2_part2': {
            fr: ',',
            en: ','
        },
        'engagement.prevention.content2_detectives': {
            fr: 'détectives professionnels',
            en: 'professional detectives'
        },
        'engagement.prevention.content2_part3': {
            fr: 'formés spécialement aux techniques de',
            en: 'specially trained in'
        },
        'engagement.prevention.content2_surveillances': {
            fr: 'surveillances professionnelles',
            en: 'professional surveillance techniques'
        },
        'engagement.prevention.content2_part4': {
            fr: 'et',
            en: 'and'
        },
        'engagement.prevention.content2_filatures': {
            fr: 'filatures discrètes',
            en: 'discreet tailing'
        },
        'engagement.prevention.content2_part5': {
            fr: ', garantissent une',
            en: ', guarantee an'
        },
        'engagement.prevention.content2_approche': {
            fr: 'approche déontologique et respectueuse',
            en: 'ethical and respectful approach'
        },
        'engagement.prevention.content2_part6': {
            fr: 'tout en protégeant les intérêts fondamentaux et légitimes de l\'employeur. Les',
            en: 'while protecting the fundamental and legitimate interests of the employer. Evidence collected through'
        },
        'engagement.prevention.content2_preuves': {
            fr: 'preuves recueillies par investigation légale',
            en: 'legal investigation'
        },
        'engagement.prevention.content2_part7': {
            fr: 'et consignées dans un',
            en: 'and recorded in a'
        },
        'engagement.prevention.content2_rapport': {
            fr: 'rapport d\'enquête circonstancié',
            en: 'detailed investigation report'
        },
        'engagement.prevention.content2_part8': {
            fr: 'sont',
            en: 'is'
        },
        'engagement.prevention.content2_juridique': {
            fr: 'juridiquement exploitables',
            en: 'legally usable'
        },
        'engagement.prevention.content2_part9': {
            fr: 'et reconnues par les',
            en: 'and recognized by'
        },
        'engagement.prevention.content2_tribunaux': {
            fr: 'tribunaux',
            en: 'courts'
        },
        'engagement.prevention.content2_part10': {
            fr: 'pour contentieux prud\'homal.',
            en: 'for labor disputes.'
        },

        'engagement.engagement1_part1': {
            fr: 'Vous apporter des',
            en: 'Provide you with'
        },
        'engagement.engagement1_solutions': {
            fr: 'solutions d\'investigation privée',
            en: 'private investigation solutions'
        },
        'engagement.engagement1_part2': {
            fr: 'dans la lutte contre toutes les formes de',
            en: 'in the fight against all forms of'
        },
        'engagement.engagement1_malveillances': {
            fr: 'malveillances',
            en: 'malice'
        },
        'engagement.engagement1_part3': {
            fr: ',',
            en: ','
        },
        'engagement.engagement1_fraudes': {
            fr: 'fraudes aux arrêts maladie',
            en: 'sick leave fraud'
        },
        'engagement.engagement1_part4': {
            fr: 'et',
            en: 'and'
        },
        'engagement.engagement1_absenteisme': {
            fr: 'absentéisme abusif',
            en: 'abusive absenteeism'
        },
        'engagement.engagement1_part5': {
            fr: '.',
            en: '.'
        },

        'engagement.engagement2_part1': {
            fr: 'Calculer les',
            en: 'Calculate'
        },
        'engagement.engagement2_honoraires': {
            fr: 'honoraires d\'enquêteur privé',
            en: 'private investigator fees'
        },
        'engagement.engagement2_part2': {
            fr: 'au',
            en: 'at'
        },
        'engagement.engagement2_juste_prix': {
            fr: 'juste prix',
            en: 'fair prices'
        },
        'engagement.engagement2_part3': {
            fr: 'en fonction des moyens d\'investigation engagés et de la complexité de la',
            en: 'based on investigation means employed and'
        },
        'engagement.engagement2_surveillance': {
            fr: 'surveillance',
            en: 'surveillance complexity'
        },
        'engagement.engagement2_part4': {
            fr: '.',
            en: '.'
        },

        'engagement.engagement5_part1': {
            fr: 'Effectuer votre mission d\'enquête privée avec',
            en: 'Carry out your private investigation mission with'
        },
        'engagement.engagement5_rigueur': {
            fr: 'rigueur et professionnalisme',
            en: 'rigor and professionalism'
        },
        'engagement.engagement5_part2': {
            fr: ', dans le plus strict respect de la',
            en: ', in strict respect of'
        },
        'engagement.engagement5_confidentialite': {
            fr: 'confidentialité',
            en: 'confidentiality'
        },
        'engagement.engagement5_part3': {
            fr: ', du',
            en: ','
        },
        'engagement.engagement5_secret': {
            fr: 'secret professionnel',
            en: 'professional secrecy'
        },
        'engagement.engagement5_part4': {
            fr: 'et des',
            en: 'and'
        },
        'engagement.engagement5_regles': {
            fr: 'règles déontologiques',
            en: 'ethical rules'
        },
        'engagement.engagement5_part5': {
            fr: 'de l\'investigation.',
            en: 'of investigation.'
        },

        'engagement.engagement11_part1': {
            fr: 'Vous garantir une totale',
            en: 'Guarantee you total'
        },
        'engagement.engagement11_confidentialite': {
            fr: 'confidentialité',
            en: 'confidentiality'
        },
        'engagement.engagement11_part2': {
            fr: '(',
            en: '('
        },
        'engagement.engagement11_secret': {
            fr: 'secret professionnel d\'enquêteur privé',
            en: 'private investigator professional secrecy'
        },
        'engagement.engagement11_part3': {
            fr: ') concernant l\'objet et la finalité de nos',
            en: ') regarding the object and purpose of our'
        },
        'engagement.engagement11_interventions': {
            fr: 'interventions d\'investigation',
            en: 'investigation interventions'
        },
        'engagement.engagement11_part4': {
            fr: '.',
            en: '.'
        },

        'engagement.quote_part1': {
            fr: 'Confidentialité absolue',
            en: 'Absolute confidentiality'
        },
        'engagement.quote_part2': {
            fr: ',',
            en: ','
        },
        'engagement.quote_discretion': {
            fr: 'discrétion professionnelle',
            en: 'professional discretion'
        },
        'engagement.quote_part3': {
            fr: 'et',
            en: 'and'
        },
        'engagement.quote_efficacite': {
            fr: 'efficacité d\'investigation',
            en: 'investigation efficiency'
        },
        'engagement.quote_part4': {
            fr: 'sont nos engagements d\'enquêteur privé agréé',
            en: 'are our commitments as'
        },
        'engagement.quote_cnaps': {
            fr: 'CNAPS',
            en: 'CNAPS licensed private investigator'
        },
        'engagement.quote_part5': {
            fr: '.',
            en: '.'
        },

        'engagement.certification.content_part1': {
            fr: 'Conformément à la législation en vigueur sur les',
            en: 'In accordance with current legislation on'
        },
        'engagement.certification.content_professions': {
            fr: 'professions réglementées',
            en: 'regulated professions'
        },
        'engagement.certification.content_part2': {
            fr: 'd\'enquêteur privé et détective professionnel, tous nos documents commerciaux et officiels comportent les références de nos',
            en: 'of private investigator and professional detective, all our commercial and official documents include references to our'
        },
        'engagement.certification.content_agrements': {
            fr: 'agréments d\'investigation privée',
            en: 'private investigation licenses'
        },
        'engagement.certification.content_part3': {
            fr: 'délivrés par le',
            en: 'issued by the'
        },
        'engagement.certification.cnaps': {
            fr: 'Conseil National des Activités Privées de Sécurité (C.N.A.P.S)',
            en: 'National Council for Private Security Activities (C.N.A.P.S)'
        },
        'engagement.certification.content_part4': {
            fr: ', établissement public administratif placé sous tutelle du',
            en: ', public administrative establishment under the supervision of the'
        },
        'engagement.certification.content_ministere': {
            fr: 'ministère de l\'Intérieur',
            en: 'Ministry of the Interior'
        },
        'engagement.certification.content_part5': {
            fr: 'pour la régulation des',
            en: 'for the regulation of'
        },
        'engagement.certification.content_enqueteurs': {
            fr: 'enquêteurs privés agréés',
            en: 'licensed private investigators'
        },
        'engagement.certification.content_part6': {
            fr: '.',
            en: '.'
        },

        // Métadonnées SEO de la page engagement
        'engagement.meta.description': {
            fr: 'Découvrez les engagements de VERIF-ARRÊT : enquêteur privé agréé CNAPS spécialisé dans la vérification d\'arrêts maladie, surveillance professionnelle, investigations légales contre l\'absentéisme abusif et fraudes aux arrêts de travail.',
            en: 'Discover VERIF-ARRÊT commitments: CNAPS licensed private investigator specialized in sick leave verification, professional surveillance, legal investigations against abusive absenteeism and work stoppage fraud.'
        },
        'engagement.meta.keywords': {
            fr: 'engagements enquêteur privé, VERIF-ARRÊT promesses, agrément CNAPS, vérification arrêt maladie, surveillance professionnelle, investigation légale, absentéisme abusif, fraude arrêt travail, détective privé certifié, enquête employeur, contrôle salarié, rapport juridique, preuve tribunal, confidentialité enquête, déontologie investigation, secret professionnel, tarification juste, contrat mandat, enquêteur qualifié, rigueur professionnalisme, recueil preuves, légalité loyauté, obligation moyens, facturation honoraires, satisfaction client, certification officielle, ministère intérieur, protection entreprise, lutte malveillance, surveillance discrète, investigation éthique',
            en: 'private investigator commitments, VERIF-ARRÊT promises, CNAPS approval, sick leave verification, professional surveillance, legal investigation, abusive absenteeism, work stoppage fraud, certified private detective, employer investigation, employee control, legal report, court evidence, investigation confidentiality, investigation ethics, professional secrecy, fair pricing, mandate contract, qualified investigator, rigor professionalism, evidence collection, legality loyalty, means obligation, fee billing, client satisfaction, official certification, interior ministry, company protection, malice fighting, discreet surveillance, ethical investigation'
        },
        'engagement.meta.geo.keywords': {
            fr: 'enquêteur privé France, détective agréé Paris, investigation Lyon, surveillance Marseille, enquête Toulouse, contrôle arrêt Nice, vérification Nantes, detective Strasbourg, enquêteur Bordeaux, investigation Lille',
            en: 'private investigator France, licensed detective Paris, investigation Lyon, surveillance Marseille, investigation Toulouse, stoppage control Nice, verification Nantes, detective Strasbourg, investigator Bordeaux, investigation Lille'
        },
        'engagement.meta.investigation.keywords': {
            fr: 'enquête arrêt maladie, surveillance salarié, contrôle absentéisme, investigation fraude, détection simulation, vérification incapacité, surveillance domicile, filature professionnelle, constat huissier, rapport circonstancié',
            en: 'sick leave investigation, employee surveillance, absenteeism control, fraud investigation, simulation detection, incapacity verification, home surveillance, professional shadowing, bailiff report, detailed report'
        },

        // Section Hero
        'engagement.hero.title': {
            fr: 'Nos Engagements d\'Enquêteur Privé Agréé CNAPS',
            en: 'Our CNAPS Licensed Private Investigator Commitments'
        },
        'engagement.hero.subtitle1': {
            fr: 'Des valeurs fortes de déontologie, confidentialité et professionnalisme au service de votre confiance avecs',
            en: 'Strong values of ethics, confidentiality and professionalism serving your trust with'

        },
        'engagement.hero.subtitle2': {
            fr: ' spécialiste de la vérification d\'arrêts maladie et investigations légales.',
            en: ' specialist in sick leave verification and legal investigations.'
        },

        // Section Prévention
        'engagement.prevention.title': {
            fr: 'Investigations Légales Anti-Fraude : Protection Juridique de Votre Entreprise Contre l\'Absentéisme Abusif',
            en: 'Legal Anti-Fraud Investigations: Legal Protection of Your Company Against Abusive Absenteeism'
        },
        'engagement.prevention.paragraph1': {
            fr: 'Nos missions d\'enquêtes privées sur les arrêts de travail de vos salarié(e)s constituent un outil légal et efficace pour lutter contre l\'absentéisme au travail, les arrêts abusifs et la fraude aux prestations sociales. Cette investigation professionnelle permet de protéger votre entreprise contre les fraudes à l\'arrêt maladie tout en respectant scrupuleusement le cadre légal, la déontologie de l\'enquêteur privé et la vie privée du salarié(e) sous surveillance discrète.',
            en: 'Our private investigation missions on your employees\' work stoppages constitute a legal and effective tool to fight against workplace absenteeism, abusive stoppages and social benefit fraud. This professional investigation allows you to protect your company against sick leave fraud while scrupulously respecting the legal framework, private investigator ethics and the privacy of the employee under discreet surveillance.'
        },
        'engagement.prevention.paragraph2': {
            fr: 'Nos enquêteurs privés agréés C.N.A.P.S, détectives professionnels formés spécialement aux techniques de surveillances professionnelles et filatures discrètes, garantissent une approche déontologique et respectueuse tout en protégeant les intérêts fondamentaux et légitimes de l\'employeur. Les preuves recueillies par investigation légale et consignées dans un rapport d\'enquête circonstancié sont juridiquement exploitables et reconnues par les tribunaux pour contentieux prud\'homal.',
            en: 'Our C.N.A.P.S licensed private investigators, professional detectives specially trained in professional surveillance techniques and discreet shadowing, guarantee an ethical and respectful approach while protecting the fundamental and legitimate interests of the employer. Evidence collected through legal investigation and recorded in a detailed investigation report is legally usable and recognized by courts for labor disputes.'
        },
        'engagement.prevention.paragraph3': {
            fr: 'L\'enquête privée sur arrêt de travail constitue un outil légal et efficace pour lutter contre l\'absentéisme abusif. Elle permet de protéger votre entreprise contre les fraudes tout en respectant scrupuleusement le cadre légal et la vie privée du salarié(e).',
            en: 'Private investigation on work stoppage constitutes a legal and effective tool to fight against abusive absenteeism. It allows you to protect your company against fraud while scrupulously respecting the legal framework and employee privacy.'
        },
        'engagement.prevention.paragraph4': {
            fr: 'Nos enquêteurs agréés, formés aux spécificités de la surveillance professionnelle, garantissent une approche déontologique et respectueuse tout en protégeant les intérêts légitimes de l\'employeur. Les preuves recueillies sont juridiquement exploitables et reconnues par les tribunaux.',
            en: 'Our licensed investigators, trained in the specifics of professional surveillance, guarantee an ethical and respectful approach while protecting the legitimate interests of the employer. The evidence collected is legally usable and recognized by courts.'
        },

        // Section Engagements
        'engagement.engagements.title': {
            fr: 'Enquêteur Privé Agréé s\'engage avec Déontologie pour :',
            en: 'Licensed Private Investigator commits with Ethics to:'
        },

        // Les 12 engagements
        'engagement.item1': {
            fr: 'Vous apporter des solutions d\'investigation privée dans la lutte contre toutes les formes de malveillances, fraudes aux arrêts maladie et absentéisme abusif.',
            en: 'Provide you with private investigation solutions in the fight against all forms of malice, sick leave fraud and abusive absenteeism.'
        },
        'engagement.item2': {
            fr: 'Calculer les honoraires d\'enquêteur privé au juste prix en fonction des moyens d\'investigation engagés et de la complexité de la surveillance.',
            en: 'Calculate private investigator fees at fair price based on investigation means engaged and surveillance complexity.'
        },
        'engagement.item3': {
            fr: 'Établir un contrat de mandat d\'enquêteur privé (convention d\'honoraires légale) avant chaque début d\'enquête et investigation.',
            en: 'Establish a private investigator mandate contract (legal fee agreement) before each investigation and inquiry begins.'
        },
        'engagement.item4': {
            fr: 'Mettre à votre disposition des enquêteurs privés qualifiés agréés CNAPS, détectives professionnels possédant une expertise confirmée dans l\'investigation et la surveillance discrète.',
            en: 'Provide you with qualified CNAPS licensed private investigators, professional detectives with confirmed expertise in investigation and discreet surveillance.'
        },
        'engagement.item5': {
            fr: 'Effectuer votre mission d\'enquête privée avec rigueur et professionnalisme, dans le plus strict respect de la confidentialité, du secret professionnel et des règles déontologiques de l\'investigation.',
            en: 'Carry out your private investigation mission with rigor and professionalism, in strict respect of confidentiality, professional secrecy and ethical rules of investigation.'
        },
        'engagement.item6': {
            fr: 'Vous aider dans le recueil de preuves juridiques, témoignages et éléments probants par investigation légale et surveillance professionnelle.',
            en: 'Help you in collecting legal evidence, testimonies and probative elements through legal investigation and professional surveillance.'
        },
        'engagement.item7': {
            fr: 'Respecter la légalité des investigations privées et agir avec loyauté déontologique sans conflits d\'intérêts dans nos enquêtes.',
            en: 'Respect the legality of private investigations and act with ethical loyalty without conflicts of interest in our investigations.'
        },
        'engagement.item8': {
            fr: 'Nous sommes tenus à une obligation de moyens d\'investigation mais pas à une obligation de résultats car celui-ci dépendra des événements constatés par l\'enquêteur privé sur le terrain de surveillance.',
            en: 'We are bound by an obligation of investigation means but not by an obligation of results as this will depend on events observed by the private investigator in the surveillance field.'
        },
        'engagement.item9': {
            fr: 'Rédiger un rapport d\'enquête privée écrit de façon détaillée et circonstanciée, document juridique utilisable en justice grâce à notre agrément C.N.A.P.S d\'enquêteur professionnel.',
            en: 'Write a detailed and circumstantial private investigation report, legal document usable in court thanks to our C.N.A.P.S professional investigator license.'
        },
        'engagement.item10': {
            fr: 'Éditer une facture légale et transparente pour le paiement de nos honoraires d\'enquêteur privé agréé.',
            en: 'Issue a legal and transparent invoice for payment of our licensed private investigator fees.'
        },
        'engagement.item11': {
            fr: 'Vous garantir une totale confidentialité (secret professionnel d\'enquêteur privé) concernant l\'objet et la finalité de nos interventions d\'investigation.',
            en: 'Guarantee you total confidentiality (private investigator professional secrecy) regarding the object and purpose of our investigation interventions.'
        },
        'engagement.item12': {
            fr: 'S\'assurer de la satisfaction de nos clients employeurs en fournissant un service d\'enquête privée de haute qualité et une investigation professionnelle irréprochable.',
            en: 'Ensure the satisfaction of our employer clients by providing high-quality private investigation service and irreproachable professional investigation.'
        },

        // Citation
        'engagement.quote': {
            fr: 'Confidentialité absolue, discrétion professionnelle et efficacité d\'investigation sont nos engagements d\'enquêteur privé agréé CNAPS.',
            en: 'Absolute confidentiality, professional discretion and investigation efficiency are our commitments as CNAPS licensed private investigator.'
        },

        // Section Certification
        'engagement.certification.title': {
            fr: 'Certification Officielle et Agrément CNAPS d\'Enquêteur Privé Professionnel',
            en: 'Official Certification and CNAPS License for Professional Private Investigator'
        },
        'engagement.certification.description1': {
            fr: 'Conformément à la législation en vigueur sur les professions réglementées d\'enquêteur privé et détective professionnel, tous nos documents commerciaux et officiels comportent les références de nos agréments d\'investigation privée délivrés par le',
            en: 'In accordance with current legislation on regulated professions of private investigator and professional detective, all our commercial and official documents include references to our private investigation licenses issued by the'
        },
        'engagement.certification.description2': {
            fr: 'Conseil National des Activités Privées de Sécurité (C.N.A.P.S)',
            en: 'National Council for Private Security Activities (C.N.A.P.S)'
        },
        'engagement.certification.description3': {
            fr: 'établissement public administratif placé sous tutelle du ministère de l\'Intérieur pour la régulation des enquêteurs privés agréés.',
            en: 'public administrative establishment under the supervision of the Ministry of Interior for the regulation of licensed private investigators.'
        },
        'engagement.certification.badge.title': {
            fr: 'Agrément C.N.A.P.S Enquêteur Privé',
            en: 'C.N.A.P.S Private Investigator License'
        },
        'engagement.certification.badge.description': {
            fr: 'Certification officielle d\'enquêteur privé professionnel sous tutelle du Ministère de l\'Intérieur',
            en: 'Official professional private investigator certification under Ministry of Interior supervision'
        },

        // Prestations page translations
        'prestations.meta.description': {
            fr: 'Services d\'investigations professionnelles sur arrêts de travail par enquêteurs privés agréés CNAPS. Surveillance discrète, preuves juridiques, rapports détaillés pour employeurs. Intervention 24h partout en France.',
            en: 'Professional investigation services on work stoppages by CNAPS-approved private investigators. Discreet surveillance, legal evidence, detailed reports for employers. 24h intervention throughout France.'
        },
        'prestations.hero.title': {
            fr: 'Nos Services d\'Investigations Professionnelles',
            en: 'Our Professional Investigation Services'
        },
        'prestations.hero.subtitle1': {
            fr: 'Enquêtes professionnelles',
            en: 'Professional investigations'
        },
        'prestations.hero.subtitle2': {
            fr: 'sur les arrêts de travail par des enquêteurs privés',
            en: 'on work stoppages by private investigators'
        },
        'prestations.hero.description1': {
            fr: 'agréés CNAPS et expérimentés',
            en: 'CNAPS approved and experienced'
        },
        'prestations.hero.description2': {
            fr: 'de',
            en: 'from'
        },
        'prestations.hero.description3': {
            fr: 'Surveillance discrète, rapports juridiques, intervention partout en France.',
            en: 'Discreet surveillance, legal reports, intervention throughout France.'
        },
        'prestations.network.title': {
            fr: 'intervient partout en France',
            en: 'operates throughout France'
        },
        'prestations.network.description': {
            fr: 'La société',
            en: 'The company'
        },
        'prestations.network.description2': {
            fr: 'vous garantit une intervention professionnelle et discrète, quel que soit votre secteur d\'activité. Présents dans toutes les régions de France, nos enquêteurs privés agréés CNAPS assurent une surveillance légale et efficace dans le respect total de la vie privée et de la déontologie professionnelle. Nos investigations couvrent tous types d\'arrêts : maladie ordinaire, longue maladie, accident du travail, maladie professionnelle, avec des rapports détaillés utilisables devant les tribunaux.',
            en: 'guarantees you professional and discreet intervention, regardless of your sector of activity. Present in all regions of France, our CNAPS-approved private investigators ensure legal and effective surveillance with total respect for privacy and professional ethics. Our investigations cover all types of stoppages: ordinary illness, long-term illness, work accident, occupational disease, with detailed reports usable in court.'
        },
        'prestations.process.title': {
            fr: 'L\'enquête sur arrêt de travail en 4 étapes',
            en: 'Work stoppage investigation in 4 steps'
        },
        'prestations.step1.title': {
            fr: 'Demande d\'enquête confidentielle',
            en: 'Confidential investigation request'
        },
        'prestations.step1.description': {
            fr: 'Vous nous transmettez votre demande d\'investigation en précisant vos coordonnées et les éléments suspects. L\'employeur peut demander une enquête dès le premier jour d\'arrêt en cas de doute légitime sur la justification médicale.',
            en: 'You send us your investigation request specifying your contact details and suspicious elements. The employer can request an investigation from the first day of stoppage in case of legitimate doubt about medical justification.'
        },
        'prestations.step1.alt': {
            fr: 'Illustration de l\'étape 1: Demande d\'enquête confidentielle',
            en: 'Illustration of step 1: Confidential investigation request'
        },
        'prestations.step2.title': {
            fr: 'Surveillance discrète par enquêteur agréé',
            en: 'Discreet surveillance by approved investigator'
        },
        'prestations.step2.description': {
            fr: 'Un enquêteur privé professionnel de notre réseau effectue une surveillance discrète du salarié(e) en arrêt de travail, dans le respect total de la légalité et de la vie privée, pour constater d\'éventuelles activités incompatibles.',
            en: 'A professional private investigator from our network performs discreet surveillance of the employee on work stoppage, with total respect for legality and privacy, to observe any incompatible activities.'
        },
        'prestations.step2.alt': {
            fr: 'Illustration de l\'étape 2: Surveillance discrète par enquêteur agréé',
            en: 'Illustration of step 2: Discreet surveillance by approved investigator'
        },
        'prestations.step3.title': {
            fr: 'Rapport d\'enquête détaillé',
            en: 'Detailed investigation report'
        },
        'prestations.step3.description': {
            fr: 'L\'enquêteur établit un rapport circonstancié avec preuves photographiques et/ou vidéo si nécessaire, utilisable devant les tribunaux. Ce rapport détaille les observations et constatations effectuées pendant la mission de surveillance et prépare la future intervention d\'un Commissaire de Justice munit d\'une Ordonnance du Tribunal.',
            en: 'The investigator establishes a detailed report with photographic and/or video evidence if necessary, usable in court. This report details the observations and findings made during the surveillance mission and prepares the future intervention of a Commissioner of Justice equipped with a Court Order.'
        },
        'prestations.step3.alt': {
            fr: 'Illustration de l\'étape 3: Rapport d\'enquête détaillé',
            en: 'Illustration of step 3: Detailed investigation report'
        },
        'prestations.step4.title': {
            fr: 'Accompagnement juridique',
            en: 'Legal support'
        },
        'prestations.step4.description': {
            fr: 'Notre équipe vous accompagne dans l\'exploitation des résultats et vous conseille sur les démarches à effectuer en partenariat avec votre cabinet d\'avocat.',
            en: 'Our team accompanies you in exploiting the results and advises you on the steps to take in partnership with your law firm.'
        },
        'prestations.step4.alt': {
            fr: 'Illustration de l\'étape 4: Accompagnement juridique',
            en: 'Illustration of step 4: Legal support'
        },
        'prestations.breadcrumb.home': {
            fr: 'Accueil',
            en: 'Home'
        },
        'prestations.breadcrumb.services': {
            fr: 'Prestations',
            en: 'Services'
        },

        // Policy Modal translations
        'policy.modal.meta.description': {
            fr: 'Politique de confidentialité VERIF-ARRÊT - Protection données personnelles, RGPD, investigation privée, détective privé, enquête confidentielle, vie privée, sécurité données',
            en: 'VERIF-ARRÊT Privacy Policy - Personal data protection, GDPR, private investigation, private detective, confidential inquiry, privacy, data security'
        },
        'policy.modal.meta.keywords': {
            fr: 'politique confidentialité, protection données personnelles, RGPD, CNIL, vie privée, investigation privée, détective privé, enquête discrète, sécurité données, traitement données, consentement, droits utilisateur, confidentialité client, secret professionnel, enquête confidentielle, surveillance discrète, recherche privée, généalogie, droit accès, droit rectification, droit effacement, portabilité données, opposition traitement, retrait consentement, responsable traitement, finalité traitement, base légale, durée conservation, destinataires données, transfert UE, sécurité organisationnelle, mesures techniques, protection accidentelle, accès non autorisé, destruction illicite, altération données, diffusion contrôlée',
            en: 'privacy policy, personal data protection, GDPR, CNIL, privacy, private investigation, private detective, discreet inquiry, data security, data processing, consent, user rights, client confidentiality, professional secrecy, confidential investigation, discreet surveillance, private research, genealogy, right of access, right of rectification, right of erasure, data portability, objection to processing, withdrawal of consent, data controller, processing purpose, legal basis, retention period, data recipients, transfer EU, organizational security, technical measures, accidental protection, unauthorized access, unlawful destruction, data alteration, controlled disclosure'
        },
        'policy.modal.meta.geo_keywords': {
            fr: 'Niort, Deux-Sèvres, Nouvelle-Aquitaine, France, Union Européenne, protection données France, RGPD France, confidentialité Niort',
            en: 'Niort, Deux-Sèvres, Nouvelle-Aquitaine, France, European Union, data protection France, GDPR France, privacy Niort'
        },
        'policy.modal.meta.legal_keywords': {
            fr: 'RGPD, CNIL, Commission Nationale Informatique Libertés, règlement général protection données, droit européen, législation française, conformité légale, obligation légale, réclamation CNIL, violation RGPD, protection juridique, cadre légal, réglementation données',
            en: 'GDPR, CNIL, National Commission on Informatics and Liberty, general data protection regulation, European law, French legislation, legal compliance, legal obligation, CNIL complaint, GDPR violation, legal protection, legal framework, data regulation'
        },
        'policy.modal.meta.privacy_keywords': {
            fr: 'vie privée, confidentialité, secret professionnel, discrétion, anonymat, protection identité, sécurité personnelle, données sensibles, informations privées, respect intimité, confidentialité absolue, secret investigation, discrétion enquête',
            en: 'privacy, confidentiality, professional secrecy, discretion, anonymity, identity protection, personal security, sensitive data, private information, respect for privacy, absolute confidentiality, investigation secrecy, discreet inquiry'
        },
        'policy.modal.meta.service_keywords': {
            fr: 'investigation privée, détective privé, enquête personnelle, recherche personne, surveillance discrète, filature, contre-enquête, vérification information, recherche généalogique, enquête familiale, investigation matrimoniale, recherche héritier, localisation personne, enquête commerciale, vérification antécédents',
            en: 'private investigation, private detective, personal inquiry, person search, discreet surveillance, tailing, counter-investigation, information verification, genealogical research, family inquiry, matrimonial investigation, heir search, person location, commercial investigation, background check'
        },
        'policy.modal.overlay.title': {
            fr: 'Politique de confidentialité VERIF-ARRÊT - Protection des données personnelles',
            en: 'VERIF-ARRÊT Privacy Policy - Personal data protection'
        },
        'policy.modal.overlay.aria': {
            fr: 'Modal politique de confidentialité, détective privé, RGPD, protection de la vie privée',
            en: 'Privacy policy modal, private detective, GDPR, privacy protection'
        },

        'policy.modal.header.title': {
            fr: 'Politique de Confidentialité',
            en: 'Privacy Policy'
        },

        'policy.modal.btn.close.aria': {
            fr: 'Fermer la politique de confidentialité',
            en: 'Close privacy policy'
        },
        'policy.modal.btn.close.title': {
            fr: 'Fermer le modal de confidentialité',
            en: 'Close privacy modal'
        },
        'policy.modal.btn.close.label': {
            fr: 'Fermer',
            en: 'Close'
        },

        'policy.modal.section.policy.title': {
            fr: 'Politique de protection de la vie privée',
            en: 'Privacy Protection Policy'
        },
        'policy.modal.section.intro.site': {
            fr: 'Site internet de Sud Intelligence',
            en: 'Website of Sud Intelligence'
        },
        'policy.modal.section.policy.description': {
            fr: 'Cette politique de protection de la vie privée expose comment et pourquoi nous collectons et utilisons vos données personnelles lorsque vous visitez notre site web ou que vous utilisez nos services. Elle vous informe également sur vos droits en matière de protection des données et sur la façon dont la loi vous protège.',
            en: 'This privacy protection policy explains how and why we collect and use your personal data when you visit our website or use our services. It also informs you of your data protection rights and how the law protects you.'
        },

        'policy.modal.section.controller.title': {
            fr: 'Identité du responsable du traitement',
            en: 'Identity of the data controller'
        },
        'policy.modal.section.controller.responsible': {
            fr: 'Le responsable du traitement des données est :',
            en: 'The data controller is:'
        },

        'policy.modal.controller.address.label': {
            fr: 'Adresse :',
            en: 'Address:'
        },
        'policy.modal.controller.phone.label': {
            fr: 'Téléphone :',
            en: 'Phone:'
        },
        'policy.modal.controller.email.label': {
            fr: 'Email :',
            en: 'Email:'
        },

        'policy.modal.section.processing.title': {
            fr: 'Les traitements relatifs à vos données personnelles',
            en: 'Processing related to your personal data'
        },
        'policy.modal.section.identity_coords.title': {
            fr: 'Identité, coordonnées :',
            en: 'Identity, contact details:'
        },
        'policy.modal.table.title': {
            fr: 'Tableau de traitement des données personnelles',
            en: 'Personal data processing table'
        },
        'policy.modal.table.headers.purpose': {
            fr: 'Finalité du traitement',
            en: 'Processing purpose'
        },
        'policy.modal.table.headers.legal_basis': {
            fr: 'Base légale',
            en: 'Legal basis'
        },
        'policy.modal.table.headers.categories': {
            fr: 'Catégories de données',
            en: 'Data categories'
        },
        'policy.modal.table.headers.retention': {
            fr: 'Durée de conservation',
            en: 'Retention period'
        },
        'policy.modal.table.row1.purpose': {
            fr: 'Gestion de la relation client et des demandes de contact',
            en: 'Customer relationship management and contact requests'
        },
        'policy.modal.table.row1.legal_basis': {
            fr: 'Intérêt légitime',
            en: 'Legitimate interest'
        },
        'policy.modal.table.row1.categories': {
            fr: 'Nom, prénom, adresse email, téléphone, message',
            en: 'Name, first name, email address, phone, message'
        },
        'policy.modal.table.row1.retention': {
            fr: '3 ans à compter du dernier contact',
            en: '3 years from last contact'
        },
        'policy.modal.table.row2.purpose': {
            fr: 'Prestations de généalogie et recherche',
            en: 'Genealogy and search services'
        },
        'policy.modal.table.row2.legal_basis': {
            fr: 'Exécution d\'un contrat',
            en: 'Performance of a contract'
        },
        'policy.modal.table.row2.categories': {
            fr: 'Données d\'identité, informations familiales, documents fournis',
            en: 'Identity data, family information, documents provided'
        },
        'policy.modal.table.row2.retention': {
            fr: 'Durée nécessaire à l\'exécution de la prestation + 5 ans',
            en: 'Duration necessary to perform the service + 5 years'
        },
        'policy.modal.table.row3.purpose': {
            fr: 'Amélioration de nos services et analyse statistique',
            en: 'Improvement of our services and statistical analysis'
        },
        'policy.modal.table.row3.legal_basis': {
            fr: 'Consentement',
            en: 'Consent'
        },
        'policy.modal.table.row3.categories': {
            fr: 'Données de navigation, cookies analytiques',
            en: 'Browsing data, analytical cookies'
        },
        'policy.modal.table.row3.retention': {
            fr: '13 mois maximum',
            en: 'Up to 13 months'
        },

        'policy.modal.recipients': {
            fr: '<strong>Destinataires des données :</strong> Les données collectées sont destinées aux services internes de <strong>VERIF-ARRÊT<span class="copyright-text">®</span></strong>. Elles ne sont jamais transmises à des tiers sans votre consentement explicite, sauf obligation légale.',
            en: '<strong>Data recipients:</strong> The data collected is intended for the internal services of <strong>VERIF-ARRÊT<span class="copyright-text">®</span></strong>. They are never transmitted to third parties without your explicit consent, except where required by law.'
        },
        'policy.modal.transfer': {
            fr: '<strong>Transferts hors UE :</strong> Aucun transfert de données personnelles n\'est effectué en dehors de l\'Union Européenne.',
            en: '<strong>Transfers outside the EU:</strong> No transfer of personal data is carried out outside the European Union.'
        },
        'policy.modal.security': {
            fr: '<strong>Sécurité des données :</strong> Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre la destruction accidentelle ou illicite, la perte accidentelle, l\'altération, la diffusion ou l\'accès non autorisés.',
            en: '<strong>Data security:</strong> We implement appropriate technical and organizational measures to protect your data against accidental or unlawful destruction, accidental loss, alteration, unauthorized disclosure or access.'
        },

        'policy.modal.rights.title': {
            fr: 'Quels sont vos droits ?',
            en: 'What are your rights?'
        },
        'policy.modal.rights.description': {
            fr: 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :',
            en: 'In accordance with the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:'
        },
        'policy.modal.rights.list.access': {
            fr: '<strong>Droit d\'accès :</strong> Vous pouvez demander l\'accès aux données personnelles que nous détenons à votre sujet',
            en: '<strong>Right of access:</strong> You can request access to the personal data we hold about you'
        },
        'policy.modal.rights.list.rectification': {
            fr: '<strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes ou incomplètes',
            en: '<strong>Right of rectification:</strong> You can request the correction of inaccurate or incomplete data'
        },
        'policy.modal.rights.list.erasure': {
            fr: '<strong>Droit à l\'effacement :</strong> Vous pouvez demander la suppression de vos données dans certaines circonstances',
            en: '<strong>Right to erasure:</strong> You can request the deletion of your data in certain circumstances'
        },
        'policy.modal.rights.list.restriction': {
            fr: '<strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement de vos données',
            en: '<strong>Right to restriction:</strong> You can request restriction of the processing of your data'
        },
        'policy.modal.rights.list.portability': {
            fr: '<strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos données dans un format structuré',
            en: '<strong>Right to data portability:</strong> You can request to receive your data in a structured format'
        },
        'policy.modal.rights.list.objection': {
            fr: '<strong>Droit d\'opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière',
            en: '<strong>Right to object:</strong> You can object to the processing of your data for reasons relating to your particular situation'
        },
        'policy.modal.rights.list.withdrawal': {
            fr: '<strong>Droit de retrait du consentement :</strong> Lorsque le traitement est basé sur votre consentement, vous pouvez le retirer à tout moment',
            en: '<strong>Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw it at any time'
        },
        'policy.modal.rights.contact': {
            fr: 'Pour exercer ces droits, vous pouvez nous contacter à l\'adresse :',
            en: 'To exercise these rights, you can contact us at:'
        },
        'policy.modal.cnil': {
            fr: 'Vous disposez également du droit d\'introduire une réclamation auprès de la Commission Nationale de l\'Informatique et des Libertés (CNIL) si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.',
            en: 'You also have the right to lodge a complaint with the National Commission on Informatics and Liberty (CNIL) if you believe that the processing of your personal data constitutes a violation of the GDPR.'
        },

        // Footer translations
        'footer.map.alt': {
            fr: 'Carte de France des implantations VERIF-ARRÊT - Enquêteur privé agréé CNAPS - Couverture nationale investigation arrêts maladie',
            en: 'Map of France VERIF-ARRÊT locations - CNAPS approved private investigator - National coverage sick leave investigation'
        },
        'footer.map.title': {
            fr: 'Réseau national d\'enquêteurs privés VERIF-ARRÊT - Interventions sur tout le territoire français',
            en: 'VERIF-ARRÊT national network of private investigators - Interventions throughout French territory'
        },
        'footer.point.title': {
            fr: 'Bureau enquêteur privé',
            en: 'Private investigator office'
        },
        'footer.point.investigation': {
            fr: 'Investigation arrêt maladie - Contact local VERIF-ARRÊT',
            en: 'Sick leave investigation - Local VERIF-ARRÊT contact'
        },
        'footer.point.aria': {
            fr: 'Implantation enquêteur privé agréé à',
            en: 'Approved private investigator location in'
        },
        'footer.point.tooltip': {
            fr: 'Enquêteur Privé',
            en: 'Private Investigator'
        },
        'footer.locations.title': {
            fr: 'Nos Implantations VERIF-ARRÊT',
            en: 'Our VERIF-ARRÊT Locations'
        },
        'footer.office.aria': {
            fr: 'Bureau enquêteur privé agréé CNAPS de',
            en: 'CNAPS approved private investigator office in'
        },
        'footer.office.investigation': {
            fr: 'Investigation arrêt maladie',
            en: 'Sick leave investigation'
        },
        'footer.headquarters': {
            fr: 'Siège Social',
            en: 'Headquarters'
        },
        'footer.contact.phone': {
            fr: 'Contacter enquêteur privé',
            en: 'Contact private investigator'
        },
        'footer.contact.phone.aria': {
            fr: 'Téléphoner au bureau enquêteur privé de',
            en: 'Call the private investigator office in'
        },
        'footer.services.description': {
            fr: 'Enquêtes arrêts maladie • Surveillance discrète • Rapport juridique',
            en: 'Sick leave investigations • Discreet surveillance • Legal report'
        },
        'footer.toggle.show.map': {
            fr: 'Afficher la carte des implantations enquêteur privé',
            en: 'Show private investigator locations map'
        },
        'footer.toggle.show.contact': {
            fr: 'Afficher les informations de contact VERIF-ARRÊT',
            en: 'Show VERIF-ARRÊT contact information'
        },
        'footer.toggle.title': {
            fr: 'Basculer entre carte et informations - Réseau national enquêteurs privés VERIF-ARRÊT',
            en: 'Switch between map and information - VERIF-ARRÊT national private investigators network'
        },
        'footer.toggle.alt': {
            fr: 'Icône emplacement - Réseau national enquêteurs privés VERIF-ARRÊT',
            en: 'Location icon - VERIF-ARRÊT national private investigators network'
        },
        'footer.logo.alt': {
            fr: 'VERIF-ARRÊT Logo - Enquêteur privé agréé CNAPS spécialisé vérification arrêts maladie',
            en: 'VERIF-ARRÊT Logo - CNAPS approved private investigator specialized in sick leave verification'
        },
        'footer.logo.title': {
            fr: 'VERIF-ARRÊT - Cabinet d\'enquêteur privé professionnel agréé',
            en: 'VERIF-ARRÊT - Professional approved private investigator firm'
        },
        'footer.tagline': {
            fr: 'Expertise Investigation & Discrétion Professionnelle',
            en: 'Investigation Expertise & Professional Discretion'
        },
        'footer.reviews.title': {
            fr: 'Avis Clients',
            en: 'Client Reviews'
        },
        'footer.reviews.button': {
            fr: 'Voir tous les avis →',
            en: 'See all reviews →'
        },
        'footer.reviews.button.title': {
            fr: 'Consulter tous les avis clients VERIF-ARRÊT - Enquêteur privé',
            en: 'View all VERIF-ARRÊT client reviews - Private investigator'
        },
        'footer.reviews.button.aria': {
            fr: 'Voir tous les témoignages clients investigation arrêt maladie',
            en: 'See all client testimonials sick leave investigation'
        },
        'footer.star.aria': {
            fr: 'Étoile',
            en: 'Star'
        },
        'footer.star.rating': {
            fr: 'Note enquêteur privé VERIF-ARRÊT',
            en: 'VERIF-ARRÊT private investigator rating'
        },
        'footer.description': {
            fr: 'Votre partenaire de confiance pour la vérification d\'arrêts de travail et maladie. Enquêtes professionnelles et discrètes d\'enquêteur privé agréé CNAPS sur tout le territoire français. Investigation légale contre l\'absentéisme abusif, surveillance professionnelle et rapport juridique exploitable.',
            en: 'Your trusted partner for work stoppage and sick leave verification. Professional and discreet investigations by CNAPS approved private investigator throughout French territory. Legal investigation against abusive absenteeism, professional surveillance and exploitable legal report.'
        },
        'footer.contact.title': {
            fr: 'Contact Enquêteur Privé',
            en: 'Contact Private Investigator'
        },
        'footer.contact.call.title': {
            fr: 'Appeler VERIF-ARRÊT - Enquêteur privé agréé CNAPS - Investigation arrêt maladie',
            en: 'Call VERIF-ARRÊT - CNAPS approved private investigator - Sick leave investigation'
        },
        'footer.contact.call.aria': {
            fr: 'Téléphoner à VERIF-ARRÊT pour une enquête privée',
            en: 'Call VERIF-ARRÊT for a private investigation'
        },
        'footer.contact.hours': {
            fr: 'Lundi au Samedi : 9h-21h',
            en: 'Monday to Saturday: 9am-9pm'
        },
        'footer.copyright': {
            fr: 'Tous droits réservés.',
            en: 'All rights reserved.'
        },
        'footer.subtitle': {
            fr: 'Enquêteur privé agréé CNAPS - Respect de la vie privée - Interventions légales d\'investigation - Spécialiste vérification arrêt maladie - Surveillance professionnelle discrète',
            en: 'CNAPS approved private investigator - Privacy respect - Legal investigation interventions - Sick leave verification specialist - Discreet professional surveillance'
        },
        'footer.legal.mentions': {
            fr: 'Mentions Légales',
            en: 'Legal Notice'
        },
        'footer.legal.mentions.title': {
            fr: 'Mentions Légales VERIF-ARRÊT - Enquêteur privé agréé CNAPS investigation arrêt maladie',
            en: 'VERIF-ARRÊT Legal Notice - CNAPS approved private investigator sick leave investigation'
        },
        'footer.legal.mentions.aria': {
            fr: 'Mentions Légales cabinet enquêteur privé VERIF-ARRÊT',
            en: 'VERIF-ARRÊT private investigator firm Legal Notice'
        },
        'footer.legal.privacy': {
            fr: 'Politique de Confidentialité',
            en: 'Privacy Policy'
        },
        'footer.legal.privacy.title': {
            fr: 'Politique de Confidentialité VERIF-ARRÊT - Protection données enquête privée',
            en: 'VERIF-ARRÊT Privacy Policy - Private investigation data protection'
        },
        'footer.legal.privacy.aria': {
            fr: 'Politique de Confidentialité enquêteur privé professionnel',
            en: 'Professional private investigator Privacy Policy'
        },
        'footer.legal.cookies': {
            fr: 'Politique de Cookies',
            en: 'Cookie Policy'
        },
        'footer.legal.cookies.title': {
            fr: 'Politique de Cookies VERIF-ARRÊT - Site enquêteur privé agréé',
            en: 'VERIF-ARRÊT Cookie Policy - Approved private investigator website'
        },
        'footer.legal.cookies.aria': {
            fr: 'Politique de Cookies cabinet investigation privée',
            en: 'Private investigation firm Cookie Policy'
        },
        'footer.certification.cnaps.france': {
            fr: 'Agrément C.N.A.P.S (France Métropolitaine)',
            en: 'C.N.A.P.S Approval (Metropolitan France)'
        },
        'footer.certification.cnaps.corsica': {
            fr: 'Agrément C.N.A.P.S (Corse)',
            en: 'C.N.A.P.S Approval (Corsica)'
        },

        // Modal - en-tête et actions
        'callback.modal.aria.overlay': {
            fr: 'Modal de demande de rappel confidentiel pour enquête privée',
            en: 'Confidential callback request modal for private investigation'
        },
        'callback.modal.container.title': {
            fr: 'Formulaire de contact confidentiel - Enquêteur privé agréé CNAPS',
            en: 'Confidential contact form - CNAPS licensed private investigator'
        },
        'callback.modal.title': {
            fr: 'Demande de rappel',
            en: 'Callback request'
        },
        'callback.modal.close.aria': {
            fr: 'Fermer la modal de demande de rappel confidentiel',
            en: 'Close the confidential callback request modal'
        },
        'callback.modal.close.title': {
            fr: 'Fermer le formulaire de contact enquêteur privé',
            en: 'Close the private investigator contact form'
        },

        // Formulaire - description et accessibilité
        'callback.form.aria': {
            fr: 'Formulaire de demande de rappel pour enquête privée',
            en: 'Callback request form for private investigation'
        },
        'callback.form.description': {
            fr: 'Remplissez ce formulaire et nous vous rappellerons dans les plus brefs délais',
            en: 'Fill out this form and we will call you back as soon as possible'
        },

        // Champs - Nom
        'callback.form.nom': {
            fr: 'Nom',
            en: 'Last name'
        },
        'callback.form.nom.aria': {
            fr: 'Nom du demandeur pour enquête privée confidentielle',
            en: 'Applicant\'s last name for confidential private investigation'
        },
        'callback.form.nom.title': {
            fr: 'Saisir votre nom pour contact avec détective privé agréé',
            en: 'Enter your last name to contact a licensed private detective'
        },

        // Champs - Prénom
        'callback.form.prenom': {
            fr: 'Prénom',
            en: 'First name'
        },
        'callback.form.prenom.aria': {
            fr: 'Prénom du demandeur pour enquête confidentielle',
            en: 'Applicant\'s first name for confidential investigation'
        },
        'callback.form.prenom.title': {
            fr: 'Saisir votre prénom pour contact enquêteur privé',
            en: 'Enter your first name to contact a private investigator'
        },

        // Champs - Téléphone
        'callback.form.telephone': {
            fr: 'Téléphone',
            en: 'Phone'
        },
        'callback.form.telephone.aria': {
            fr: 'Téléphone pour rappel confidentiel investigation privée',
            en: 'Phone for confidential callback private investigation'
        },
        'callback.form.telephone.title': {
            fr: 'Numéro de téléphone pour contact discret avec enquêteur privé',
            en: 'Phone number for discreet contact with a private investigator'
        },
        'callback.form.telephone.placeholder': {
            fr: '01 23 45 67 89',
            en: '01 23 45 67 89'
        },

        // Champs - Email
        'callback.form.email': {
            fr: 'Email',
            en: 'Email'
        },
        'callback.form.email.aria': {
            fr: 'Email pour contact confidentiel avec détective privé',
            en: 'Email for confidential contact with private detective'
        },
        'callback.form.email.title': {
            fr: 'Adresse email pour échanges sécurisés enquête privée',
            en: 'Email address for secure exchanges in private investigation'
        },
        'callback.form.email.placeholder': {
            fr: 'votre@email.com',
            en: 'your@email.com'
        },

        // Champs - Entreprise
        'callback.form.entreprise': {
            fr: 'Entreprise',
            en: 'Company'
        },
        'callback.form.entreprise.aria': {
            fr: 'Entreprise demandant une enquête privée professionnelle',
            en: 'Company requesting a professional private investigation'
        },
        'callback.form.entreprise.title': {
            fr: 'Nom de l\'entreprise pour investigation confidentielle',
            en: 'Company name for confidential investigation'
        },
        'callback.form.entreprise.placeholder': {
            fr: 'Nom de votre entreprise',
            en: 'Your company name'
        },

        // Champs - Créneau horaire
        'callback.form.creneau.label': {
            fr: 'À quelle heure souhaitez-vous être rappelé en toute confidentialité ?',
            en: 'At what time would you like to be called back confidentially?'
        },
        'callback.form.creneau.aria': {
            fr: 'Sélection créneau horaire pour rappel confidentiel investigation',
            en: 'Select time slot for confidential investigation callback'
        },
        'callback.form.creneau.title': {
            fr: 'Choisir l\'heure pour contact discret avec enquêteur privé',
            en: 'Choose the time for discreet contact with a private investigator'
        },
        'callback.form.creneau.matin': {
            fr: 'Matin (9h-12h)',
            en: 'Morning (9am-12pm)'
        },
        'callback.form.creneau.apres_midi': {
            fr: 'Après-midi (14h-17h)',
            en: 'Afternoon (2pm-5pm)'
        },
        'callback.form.creneau.soir': {
            fr: 'Fin de journée (17h-19h)',
            en: 'End of day (5pm-7pm)'
        },
        'callback.form.creneau.indifferent': {
            fr: 'Indifférent',
            en: 'No preference'
        },

        // Libellés traduisibles pour les créneaux horaires de la modal de rappel


        // Champs - Message
        'callback.form.message': {
            fr: 'Message (optionnel)',
            en: 'Message (optional)'
        },
        'callback.form.message.placeholder': {
            fr: 'Décrivez brièvement votre demande...',
            en: 'Briefly describe your request...'
        },

        // Boutons
        'callback.form.cancel': {
            fr: 'Annuler',
            en: 'Cancel'
        },
        'callback.form.submit': {
            fr: 'Demander un rappel',
            en: 'Request callback'
        },
        'callback.form.submitting': {
            fr: 'Envoi en cours...',
            en: 'Sending...'
        },

        // Erreur globale de soumission
        'callback.form.error.global': {
            fr: 'Erreur lors de l\'envoi de la demande. Veuillez réessayer.',
            en: 'Error sending the request. Please try again.'
        },

        // Succès
        'callback.success.aria.page': {
            fr: 'Confirmation envoi demande rappel enquête privée',
            en: 'Confirmation of sending private investigation callback request'
        },
        'callback.success.icon.aria': {
            fr: 'Succès envoi demande contact enquêteur privé',
            en: 'Successful sending of contact request to private investigator'
        },
        'callback.success.icon.title': {
            fr: 'Demande de rappel confidentiel envoyée avec succès',
            en: 'Confidential callback request sent successfully'
        },
        'callback.success.title': {
            fr: 'Demande envoyée !',
            en: 'Request sent!'
        },
        'callback.success.message': {
            fr: 'Nous vous rappellerons dans les plus brefs délais.',
            en: 'We will call you back as soon as possible.'
        },

        // Messages d'erreur pour la modal de rappel (callback)
        'callback.errors.nom.required': {
            fr: 'Le nom est requis.',
            en: 'Last name is required.'
        },
        'callback.errors.nom.minlength': {
            fr: 'Le nom doit contenir au moins 2 caractères.',
            en: 'Last name must be at least 2 characters.'
        },

        'callback.errors.prenom.required': {
            fr: 'Le prénom est requis.',
            en: 'First name is required.'
        },
        'callback.errors.prenom.minlength': {
            fr: 'Le prénom doit contenir au moins 2 caractères.',
            en: 'First name must be at least 2 characters.'
        },

        'callback.errors.telephone.required': {
            fr: 'Le numéro de téléphone est requis.',
            en: 'Phone number is required.'
        },
        'callback.errors.telephone.invalid': {
            fr: 'Le numéro de téléphone doit contenir exactement 10 chiffres.',
            en: 'Phone number must contain exactly 10 digits.'
        },

        'callback.errors.email.required': {
            fr: 'L\'adresse email est requise.',
            en: 'Email address is required.'
        },
        'callback.errors.email.format': {
            fr: 'Format de l\'email invalide.',
            en: 'Invalid email format.'
        },

        'callback.errors.entreprise.required': {
            fr: 'Le nom de l\'entreprise est requis.',
            en: 'Company name is required.'
        },
        'callback.errors.entreprise.minlength': {
            fr: 'Le nom de l\'entreprise doit contenir au moins 2 caractères.',
            en: 'Company name must be at least 2 characters.'
        },

        // Messages d'erreur pour la modal de contrôle terrain (control)
        'control.errors.nom.required': {
            fr: 'Le nom est requis',
            en: 'Name is required'
        },
        'control.errors.prenom.required': {
            fr: 'Le prénom est requis',
            en: 'First name is required'
        },
        'control.errors.telephone.required': {
            fr: 'Le téléphone est requis',
            en: 'Phone number is required'
        },
        'control.errors.email.required': {
            fr: 'L\'email est requis',
            en: 'Email is required'
        },
        'control.errors.entreprise.required': {
            fr: 'Le nom de l\'entreprise est requis',
            en: 'Company name is required'
        },
        'control.errors.dateDebutArret.required': {
            fr: 'La date de début d\'arrêt est requise',
            en: 'Start date of leave is required'
        },
        'control.errors.villeSalarie.required': {
            fr: 'La ville est requise',
            en: 'City is required'
        },
        'control.errors.codePostalSalarie.required': {
            fr: 'Le code postal est requis',
            en: 'Postal code is required'
        },
        'control.errors.email.format': {
            fr: 'Format d\'email invalide',
            en: 'Invalid email format'
        },
        'control.errors.telephone.minlength': {
            fr: 'Le numéro doit contenir au moins 10 chiffres',
            en: 'The number must contain at least 10 digits'
        },
        'control.errors.codePostalSalarie.pattern': {
            fr: 'Le code postal doit contenir 5 chiffres',
            en: 'Postal code must contain 5 digits'
        },



        // En-tête de la modal
        'control.modal.title': {
            fr: 'Demande de contrôle terrain',
            en: 'Field control request'
        },
        'control.modal.close.aria': {
            fr: 'Fermer la modal de contrôle terrain arrêt maladie',
            en: 'Close the field control modal for sick leave'
        },
        'control.modal.close.title': {
            fr: 'Fermer le formulaire de demande d\'investigation',
            en: 'Close the investigation request form'
        },

        // Intro du formulaire
        'control.form.intro': {
            fr: 'Remplissez ce formulaire pour demander une vérification d\'arrêt de travail',
            en: 'Fill out this form to request a verification of work stoppage'
        },

        // Sections / légendes
        'control.form.section.requester': {
            fr: 'Vos informations',
            en: 'Your information'
        },
        'control.form.section.employee': {
            fr: 'Informations du salarié concerné',
            en: 'Information about the concerned employee'
        },
        'control.form.section.arret': {
            fr: 'Informations sur l\'arrêt de travail',
            en: 'Information on the work stoppage'
        },
        'control.form.section.additional': {
            fr: 'Informations complémentaires',
            en: 'Additional information'
        },

        // Labels des champs (demandeur)
        'control.form.labels.nom': {
            fr: 'Nom',
            en: 'Last name'
        },
        'control.form.labels.prenom': {
            fr: 'Prénom',
            en: 'First name'
        },
        'control.form.labels.telephone': {
            fr: 'Téléphone',
            en: 'Phone'
        },
        'control.form.labels.email': {
            fr: 'Email',
            en: 'Email'
        },
        'control.form.labels.entreprise': {
            fr: 'Entreprise',
            en: 'Company'
        },
        'control.form.labels.posteEntreprise': {
            fr: 'Ville et administration',
            en: 'City and administration'
        },

        // Labels des champs (salarié)
        'control.form.labels.posteSalarie': {
            fr: 'Poste du salarié',
            en: 'Employee position'
        },
        'control.form.labels.codePostalSalarie': {
            fr: 'Code postal',
            en: 'Postal code'
        },
        'control.form.labels.villeSalarie': {
            fr: 'Ville',
            en: 'City'
        },

        // Labels — informations d'arrêt
        'control.form.labels.typeArret': {
            fr: 'Type d\'arrêt',
            en: 'Type of work stoppage'
        },
        'control.form.labels.dateDebutArret': {
            fr: 'Date de début d\'arrêt',
            en: 'Start date of work stoppage'
        },
        'control.form.labels.dateFinArret': {
            fr: 'Date de fin d\'arrêt',
            en: 'End date of work stoppage'
        },
        'control.form.labels.restrictionsSorties': {
            fr: 'Restrictions de sorties',
            en: 'Outing restrictions'
        },

        // Options — type d'arrêt
        'control.form.type.options.maladie': {
            fr: 'Maladie',
            en: 'Sickness'
        },
        'control.form.type.options.accident_travail': {
            fr: 'Accident du travail',
            en: 'Work accident'
        },
        'control.form.type.options.accident_trajet': {
            fr: 'Accident de trajet',
            en: 'Commuting accident'
        },
        'control.form.type.options.maladie_professionnelle': {
            fr: 'Maladie professionnelle',
            en: 'Occupational disease'
        },
        'control.form.type.options.maternite': {
            fr: 'Maternité',
            en: 'Maternity'
        },
        'control.form.type.options.paternite': {
            fr: 'Paternité',
            en: 'Paternity'
        },

        // Options — restrictions de sorties
        'control.form.restrictions.options.non_precise': {
            fr: 'Non précisé',
            en: 'Not specified'
        },
        'control.form.restrictions.options.autorisees': {
            fr: 'Sorties autorisées',
            en: 'Authorized outings'
        },
        'control.form.restrictions.options.interdites': {
            fr: 'Sorties interdites',
            en: 'Forbidden outings'
        },
        'control.form.restrictions.options.limitees': {
            fr: 'Sorties limitées',
            en: 'Limited outings'
        },

        // Informations complémentaires — labels & placeholders
        'control.form.labels.suspicions': {
            fr: 'Suspicions particulières',
            en: 'Specific suspicions'
        },
        'control.form.labels.message': {
            fr: 'Message complémentaire',
            en: 'Additional message'
        },

        // Boutons (attributs visibles dans l'extrait)
        'control.form.buttons.cancel_aria': {
            fr: 'Annuler demande contrôle terrain arrêt maladie',
            en: 'Cancel field control request for sick leave'
        },
        'control.form.buttons.cancel_title': {
            fr: 'Fermer sans envoyer la demande d\'investigation',
            en: 'Close without sending the investigation request'
        },
        'control.form.buttons.cancel': {
            fr: 'Annuler',
            en: 'Cancel'
        },
        'control.form.buttons.submit': {
            fr: 'Demander un contrôle terrain',
            en: 'Request field control'
        },
        'control.form.buttons.submitting': {
            fr: 'Envoi en cours...',
            en: 'Sending...'
        },

        // Succès de la modal de contrôle terrain
        'control.success.title': {
            fr: 'Demande envoyée !',
            en: 'Request sent!'
        },
        'control.success.message': {
            fr: 'Nous traiterons votre demande dans les plus brefs délais.',
            en: 'We will process your request as soon as possible.'
        },

        // Erreur globale de soumission
        'control.form.error.global': {
            fr: 'Erreur lors de l\'envoi de la demande. Veuillez réessayer.',
            en: 'Error sending the request. Please try again.'
        },

        // Placeholders: control modal
        'control.form.placeholders.telephone': {
            fr: 'Téléphone (ex : 01 23 45 67 89)',
            en: 'Phone (e.g., 01 23 45 67 89)'
        },
        'control.form.placeholders.email': {
            fr: '@email.com',
            en: '@email.com'
        },
        'control.form.placeholders.entreprise': {
            fr: 'Nom de votre entreprise',
            en: 'Your company name'
        },
        'control.form.placeholders.posteSalarie': {
            fr: 'Fonction occupée dans l\'entreprise',
            en: 'Position held in the company'
        },
        'control.form.placeholders.codePostalSalarie': {
            fr: '75001',
            en: '75001'
        },
        'control.form.placeholders.villeSalarie': {
            fr: 'Paris',
            en: 'Paris'
        },
        'control.form.placeholders.suspicions': {
            fr: 'Décrivez vos suspicions ou observations particulières…',
            en: 'Describe your suspicions or specific observations…'
        },
        'control.form.placeholders.message': {
            fr: 'Informations complémentaires…',
            en: 'Additional information…'
        },

        // Modal Cookies - Conteneur & en-tête
        'cookies.modal.overlay.aria': {
            fr: 'Modal politique de cookies Sud Intelligence',
            en: 'Sud Intelligence cookie policy modal'
        },
        'cookies.modal.container.title': {
            fr: 'Politique de gestion des cookies - Enquêteur privé confidentiel',
            en: 'Cookie management policy - Confidential private investigator'
        },
        'cookies.modal.header.h3.title': {
            fr: 'Politique cookies Sud Intelligence - Protection données enquête privée',
            en: 'Sud Intelligence cookie policy - Private investigation data protection'
        },
        'cookies.modal.header.h3.text': {
            fr: 'Politique de Cookies',
            en: 'Cookie Policy'
        },
        'cookies.modal.header.close.aria': {
            fr: 'Fermer politique cookies enquêteur privé',
            en: 'Close private investigator cookie policy'
        },
        'cookies.modal.header.close.title': {
            fr: 'Fermer informations cookies Sud Intelligence',
            en: 'Close Sud Intelligence cookie information'
        },

        // Modal Cookies - Corps
        'cookies.modal.content.aria': {
            fr: 'Contenu politique cookies investigation privée',
            en: 'Cookie policy content for private investigation'
        },
        'cookies.modal.main.h2.title': {
            fr: 'Politique gestion cookies Sud Intelligence enquêteur privé',
            en: 'Sud Intelligence cookie management policy - private investigator'
        },
        'cookies.modal.main.h2.text': {
            fr: 'Politique de gestion des cookies de Sud Intelligence',
            en: 'Sud Intelligence Cookie Management Policy'
        },
        'cookies.modal.section.what.title': {
            fr: 'Utilité cookies site enquêteur privé agréé',
            en: 'Usefulness of cookies on licensed private investigator site'
        },
        'cookies.modal.section.what.text': {
            fr: 'À quoi servent les cookies ?',
            en: 'What are cookies used for?'
        },

        // Modal Cookies - Paragraphes
        'cookies.modal.paragraph.intro': {
            fr: 'éditeur de ce site, utilise différentes technologies (cookie et assimilables) pour recueillir des informations sur votre navigation (pouvant ou non contenir des données personnelles) ou pour assurer le bon fonctionnement du site. Nos partenaires sont listés sur notre CMP (consent management plateform) que vous pouvez retrouver sur Gérer les cookies.',
            en: 'the publisher of this site, uses different technologies (cookies and similar) to collect information about your browsing (which may or may not contain personal data) or to ensure the proper functioning of the site. Our partners are listed on our CMP (consent management platform), which you can find under Manage cookies.'
        },
        'cookies.modal.paragraph.essential1': {
            fr: 'Certains cookies sont',
            en: 'Some cookies are'
        },
        'cookies.modal.paragraph.essential2': {
            fr: 'essentiels',
            en: 'essential'
        },
        'cookies.modal.paragraph.essential3': {
            fr: 'au fonctionnement de nos services et ne sont pas soumis à votre consentement. Ils permettent l\'utilisation des principales fonctionnalités du site, comme le contenu de votre chariot ou la mémorisation des préférences d\'affichage de votre terminal (langue, paramètres d\'affichage) et d\'en tenir compte lors de vos visites, selon la charte graphique et les logiciels de visualisation ou de lecture de votre terminal.',
            en: 'to the operation of our services and are not subject to your consent. They enable the use of the site\'s main features, such as the content of your cart or remembering your device\'s display preferences (language, display settings), and taking them into account during your visits, according to your device\'s graphic charter and viewing or reading software.'
        },
        'cookies.modal.paragraph.audience': {
            fr: 'Les cookies utilisés pour la mesure d\'audience sont soumis à votre consentement. Ils permettent d\'établir des statistiques, comptages de fréquentation et d\'utilisation du contenu (mesure du nombre de visites, de pages vues ou encore de l\'activité des visiteurs sur le site et de leur fréquence de retour).',
            en: 'Cookies used for audience measurement are subject to your consent. They make it possible to establish statistics, counts of visits and content usage (measuring the number of visits, pages viewed, as well as visitor activity on the site and their return frequency).'
        },
        'cookies.modal.paragraph.ads': {
            fr: 'Les derniers cookies, présents sur notre site, concernent la publicité et sont donc soumis à votre consentement.',
            en: 'The last cookies present on our site concern advertising and are therefore subject to your consent.'
        },
        'cookies.modal.paragraph.cnil1': {
            fr: 'Pour terminer ce tour d\'horizon des cookies et assimilés utilisés sur notre site, nous vous informons qu\'il existe des paramétrages sur vos navigateurs pour limiter votre suivi en ligne. La CNIL met à votre disposition',
            en: 'To finish this overview of cookies and similar used on our site, we inform you that there are settings on your browsers to limit your online tracking.  The CNIL provides you with'
        },

        'cookies.modal.paragraph.cnil2': {
            fr: 'sur son site',
            en: 'on his website'
        },
        'cookies.modal.paragraph.cnil3': {
            fr: 'des informations sur ces sujets',
            en: 'information on these topics'
        },

        // Modal Cookies - Lien CNIL
        'cookies.modal.link.cnil.title': {
            fr: 'Guide CNIL protection cookies navigation privée',
            en: 'CNIL guide for cookie protection in private browsing'
        },
        'cookies.modal.link.cnil.aria': {
            fr: 'Lien CNIL maîtrise navigateur cookies',
            en: 'CNIL link to control your browser\'s cookies'
        },
        'cookies.modal.link.cnil.text': {
            fr: 'sur son site',
            en: 'on its website'
        },

        // Modal Cookies - Pied de modal
        'cookies.modal.footer.close.text': {
            fr: 'Fermer',
            en: 'Close'
        },
        'cookies.modal.footer.close.aria': {
            fr: 'Fermer politique cookies Sud Intelligence',
            en: 'Close Sud Intelligence cookie policy'
        },
        'cookies.modal.footer.close.title': {
            fr: 'Fermer informations cookies enquêteur privé',
            en: 'Close private investigator cookie information'
        },



        // Legal modal translations
        'legal.modal.seo.description': {
            fr: 'Mentions légales VERIF-ARRÊT - Enquêteur privé agréé CNAPS Niort - SIREN 991192519 - Investigation professionnelle - Hébergement IONOS',
            en: 'VERIF-ARRÊT Legal Notice - CNAPS-licensed private investigator in Niort - SIREN 991192519 - Professional investigation - Hosted by IONOS'
        },
        'legal.modal.seo.keywords': {
            fr: 'mentions légales enquêteur privé, VERIF-ARRÊT Niort, SIREN 991192519, detective privé agréé, investigation légale, enquête privée professionnelle, Sud Intelligence mentions, hébergement IONOS',
            en: 'legal notice private investigator, VERIF-ARRÊT Niort, SIREN 991192519, licensed private detective, legal investigation, professional private investigation, Sud Intelligence legal, IONOS hosting'
        },
        'legal.modal.seo.legalKeywords': {
            fr: 'éditeur site enquêteur, SIRET investigation, propriété intellectuelle detective, hébergement professionnel, mentions légales CNAPS',
            en: 'site publisher investigator, SIRET investigation, intellectual property detective, professional hosting, CNAPS legal notice'
        },
        'legal.modal.seo.geoKeywords': {
            fr: 'enquêteur privé Niort, detective Deux-Sèvres, investigation 79000, Sud Intelligence Niort',
            en: 'private investigator Niort, detective Deux-Sèvres, investigation 79000, Sud Intelligence Niort'
        },

        'legal.modal.open.ariaLabel': {
            fr: 'Modal mentions légales VERIF-ARRÊT',
            en: 'VERIF-ARRÊT legal notice modal'
        },
        'legal.modal.container.title': {
            fr: 'Mentions légales VERIF-ARRÊT - Enquêteur privé agréé CNAPS',
            en: 'VERIF-ARRÊT Legal Notice - CNAPS-licensed private investigator'
        },
        'legal.modal.header.titleAttr': {
            fr: 'Mentions légales VERIF-ARRÊT enquêteur privé Niort',
            en: 'VERIF-ARRÊT legal notice private investigator Niort'
        },
        'legal.modal.header.title': {
            fr: 'Mentions Légales',
            en: 'Legal Notice'
        },
        'legal.modal.close.ariaLabel': {
            fr: 'Fermer mentions légales enquêteur privé',
            en: 'Close legal notice private investigator'
        },
        'legal.modal.close.title': {
            fr: 'Fermer informations légales VERIF-ARRÊT',
            en: 'Close VERIF-ARRÊT legal information'
        },

        'legal.modal.content.ariaLabel': {
            fr: 'Informations légales VERIF-ARRÊT enquêteur privé',
            en: 'VERIF-ARRÊT legal information private investigator'
        },

        'legal.modal.publisher.title': {
            fr: 'Éditeur du site',
            en: 'Site publisher'
        },
        'legal.modal.publisher.titleAttr': {
            fr: 'Éditeur site VERIF-ARRÊT enquêteur privé agréé',
            en: 'VERIF-ARRÊT site publisher licensed private investigator'
        },
        'legal.modal.publisher.legalNameTitle': {
            fr: 'Raison sociale VERIF-ARRÊT detective privé Niort',
            en: 'VERIF-ARRÊT corporate name private detective Niort'
        },
        'legal.modal.publisher.brandHtml': {
            fr: '<strong>VERIF-ARRÊT<span class="copyright-text">®</span></strong>',
            en: '<strong>VERIF-ARRÊT<span class="copyright-text">®</span></strong>'
        },
        'legal.modal.publisher.address.title': {
            fr: 'Adresse enquêteur privé VERIF-ARRÊT Niort',
            en: 'VERIF-ARRÊT private investigator address Niort'
        },

        'legal.modal.publisher.telephone.title': {
            fr: 'Téléphone contact enquêteur privé VERIF-ARRÊT',
            en: 'Phone contact VERIF-ARRÊT private investigator'
        },
        'legal.modal.publisher.telephone.label': {
            fr: 'Téléphone :',
            en: 'Phone:'
        },

        'legal.modal.publisher.email.title': {
            fr: 'Email contact detective privé VERIF-ARRÊT',
            en: 'Email contact VERIF-ARRÊT private detective'
        },
        'legal.modal.publisher.email.label': {
            fr: 'Email :',
            en: 'Email:'
        },

        'legal.modal.publisher.siren.title': {
            fr: 'SIREN enquêteur privé VERIF-ARRÊT',
            en: 'VERIF-ARRÊT private investigator SIREN'
        },
        'legal.modal.publisher.siren.label': {
            fr: 'SIREN :',
            en: 'SIREN:'
        },

        'legal.modal.publisher.siret.title': {
            fr: 'SIRET detective privé VERIF-ARRÊT Niort',
            en: 'VERIF-ARRÊT private detective SIRET Niort'
        },
        'legal.modal.publisher.siret.label': {
            fr: 'SIRET :',
            en: 'SIRET:'
        },

        'legal.modal.publisher.codeApe.title': {
            fr: 'CODE APE enquêteur privé VERIF-ARRÊT',
            en: 'VERIF-ARRÊT private investigator APE code'
        },
        'legal.modal.publisher.codeApe.label': {
            fr: 'CODE APE :',
            en: 'APE code:'
        },

        'legal.modal.hosting.title': {
            fr: 'Hébergement',
            en: 'Hosting'
        },
        'legal.modal.hosting.orgTitle': {
            fr: 'Hébergeur IONOS site detective privé',
            en: 'IONOS host private detective site'
        },
        'legal.modal.hosting.provider.label': {
            fr: 'Hébergeur :',
            en: 'Host:'
        },

        'legal.modal.hosting.address.title': {
            fr: 'Adresse hébergeur IONOS',
            en: 'IONOS host address'
        },
        'legal.modal.hosting.address.label': {
            fr: 'Adresse :',
            en: 'Address:'
        },

        'legal.modal.hosting.phone.title': {
            fr: 'Téléphone hébergeur IONOS',
            en: 'IONOS host phone'
        },
        'legal.modal.hosting.phone.label': {
            fr: 'Téléphone :',
            en: 'Phone:'
        },
        'legal.modal.hosting.phone.note': {
            fr: '(appel non surtaxé)',
            en: '(non-premium call)'
        },

        'legal.modal.hosting.email.title': {
            fr: 'Email hébergeur IONOS',
            en: 'IONOS host email'
        },
        'legal.modal.hosting.email.label': {
            fr: 'Email :',
            en: 'Email:'
        },

        'legal.modal.ip.title': {
            fr: 'Propriété intellectuelle',
            en: 'Intellectual property'
        },
        'legal.modal.ip.titleAttr': {
            fr: 'Propriété intellectuelle site enquêteur privé',
            en: 'Private investigator site intellectual property'
        },
        'legal.modal.ip.text': {
            fr: 'L\'ensemble de ce site relève de la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle.',
            en: 'This entire site is subject to French and international legislation on copyright and intellectual property.'
        },

        'legal.modal.footer.close.ariaLabel': {
            fr: 'Fermer mentions légales VERIF-ARRÊT',
            en: 'Close VERIF-ARRÊT legal notice'
        },
        'legal.modal.footer.close.title': {
            fr: 'Fermer informations légales enquêteur privé',
            en: 'Close legal information private investigator'
        },
        'legal.modal.footer.close.label': {
            fr: 'Fermer',
            en: 'Close'
        }

    };

    constructor() {
        // Récupérer la langue sauvegardée ou utiliser français par défaut
        const savedLanguage = this.getSavedLanguage();
        this.setLanguage(savedLanguage);
    }

    getCurrentLanguage(): Language {
        return this.currentLanguage();
    }

    setLanguage(language: Language): void {
        this.currentLanguage.set(language);
        this.languageSubject.next(language);
        this.saveLanguage(language);

        // Mettre à jour la balise html lang
        if (typeof document !== 'undefined') {
            document.documentElement.lang = language;
        }
    }

    toggleLanguage(): void {
        const newLanguage: Language = this.currentLanguage() === 'fr' ? 'en' : 'fr';
        this.setLanguage(newLanguage);
    }

    translate(key: string): string {
        const translation = this.translations[key];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translation[this.currentLanguage()] || key;
    }

    // Méthode pour ajouter des traductions dynamiquement
    addTranslations(newTranslations: Translations): void {
        this.translations = { ...this.translations, ...newTranslations };
    }

    private getSavedLanguage(): Language {
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('verif-arret-language') as Language;
            return saved && ['fr', 'en'].includes(saved) ? saved : 'fr';
        }
        return 'fr';
    }

    private saveLanguage(language: Language): void {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('verif-arret-language', language);
        }
    }
}
