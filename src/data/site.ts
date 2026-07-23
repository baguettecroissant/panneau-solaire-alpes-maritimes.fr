export const site = {
  domain: 'panneau-solaire-alpes-maritimes.fr',
  name: 'Panneau Solaire Alpes-Maritimes',
  department: 'Alpes-Maritimes',
  code: '06',
  city: 'Nice',
  url: 'https://panneau-solaire-alpes-maritimes.fr',
};

export type Commune = { name: string; slug: string; postalCodes: string[]; population: number; profile: string };
export const communes: Commune[] = [
  ['Nice','nice',['06000','06100','06200'],348085,'villa urbaine, toiture-terrasse ou maison sur les collines'],['Antibes','antibes',['06160','06600'],75568,'villa entre pinède et littoral'],['Cannes','cannes',['06150','06400'],74545,'villa contemporaine ou demeure de caractère'],['Cagnes-sur-Mer','cagnes-sur-mer',['06800'],51934,'maison familiale avec piscine'],['Grasse','grasse',['06130','06520'],50409,'mas de l’arrière-pays et grande toiture'],['Le Cannet','le-cannet',['06110'],42624,'résidence sur les hauteurs ou villa de ville'],['Saint-Laurent-du-Var','saint-laurent-du-var',['06700'],30222,'maison proche du littoral'],['Menton','menton',['06500'],30231,'villa lumineuse, exposée mer ou collines'],['Vallauris','vallauris',['06220'],27617,'villa sur les hauteurs de Golfe-Juan'],['Mandelieu-la-Napoule','mandelieu-la-napoule',['06210'],22113,'villa avec piscine et climatisation'],['Vence','vence',['06140'],19074,'villa de colline avec vue dégagée'],['Mougins','mougins',['06250'],19320,'propriété premium au calme'],['Roquebrune-Cap-Martin','roquebrune-cap-martin',['06190'],12835,'villa patrimoniale avec vue mer'],['Valbonne','valbonne',['06560'],13547,'villa familiale et usage numérique soutenu'],['Biot','biot',['06410'],10297,'villa entre Sophia Antipolis et la mer'],['Villeneuve-Loubet','villeneuve-loubet',['06270'],16171,'maison contemporaine avec piscine'],['La Colle-sur-Loup','la-colle-sur-loup',['06480'],7976,'villa arborée de l’arrière-pays'],['Peymeinade','peymeinade',['06530'],8912,'maison individuelle avec grand pan de toiture'],['Villefranche-sur-Mer','villefranche-sur-mer',['06230'],5159,'villa d’exception surplombant la baie'],['Beausoleil','beausoleil',['06240'],14105,'résidence élégante ou maison de ville'],['La Trinité','la-trinite',['06340'],10208,'maison sur les premiers reliefs niçois'],['Contes','contes',['06390'],7338,'villa de vallée avec bonne exposition'],['Carros','carros',['06510'],12798,'maison récente des collines'],['Drap','drap',['06340'],5335,'habitat individuel dans la vallée du Paillon'],['Levens','levens',['06670'],5227,'villa de moyenne altitude'],['Pégomas','pegomas',['06580'],8258,'maison avec terrain et toiture dégagée'],['La Roquette-sur-Siagne','la-roquette-sur-siagne',['06550'],5677,'villa résidentielle proche de Cannes'],['Saint-André-de-la-Roche','saint-andre-de-la-roche',['06730'],5664,'maison sur coteau niçois'],['Gattières','gattieres',['06510'],4387,'villa sur les collines du Var'],['Tourrettes-sur-Loup','tourrettes-sur-loup',['06140'],4117,'maison de pierre et toiture soignée'],['La Gaude','la-gaude',['06610'],6962,'villa résidentielle avec piscine'],['Opio','opio',['06650'],2283,'villa discrète sur terrain arboré'],['Tourrette-Levens','tourrette-levens',['06690'],4899,'maison individuelle des collines'],['Châteauneuf-Grasse','chateauneuf-grasse',['06740'],3692,'villa haut de gamme du pays grassois'],['Saint-Paul-de-Vence','saint-paul-de-vence',['06570'],3433,'propriété de charme soumise à une intégration soignée'],['Èze','eze',['06360'],2340,'villa en pente avec vue Méditerranée'],['Cap-d’Ail','cap-d-ail',['06320'],5039,'villa littorale avec contrainte architecturale'],['La Turbie','la-turbie',['06320'],3316,'maison de caractère sur les hauteurs'],['Sospel','sospel',['06380'],3746,'maison de vallée au fort ensoleillement'],['Breil-sur-Roya','breil-sur-roya',['06540'],2314,'maison de montagne aux toitures dégagées'],['Saint-Étienne-de-Tinée','saint-etienne-de-tinee',['06660'],1466,'maison alpine avec consommation hivernale'],['Saint-Cézaire-sur-Siagne','saint-cezaire-sur-siagne',['06530'],3935,'villa de l’arrière-pays'],['Le Rouret','le-rouret',['06650'],4063,'villa familiale haut de gamme'],['Roquefort-les-Pins','roquefort-les-pins',['06330'],7157,'grande villa arborée'],['Le Bar-sur-Loup','le-bar-sur-loup',['06620'],2891,'maison de village et villa de colline'],['Auribeau-sur-Siagne','auribeau-sur-siagne',['06810'],3267,'villa sur les collines de la Siagne'],['Saint-Vallier-de-Thiey','saint-vallier-de-thiey',['06460'],3764,'maison de l’arrière-pays grassois'],['Tende','tende',['06430'],2230,'maison de vallée à consommation électrique répartie'],['Castagniers','castagniers',['06670'],1696,'villa de colline exposée sud'],['Colomars','colomars',['06670'],3545,'maison à proximité de Nice'],['Falicon','falicon',['06950'],2317,'villa de prestige avec vue sur Nice'],['Aspremont','aspremont',['06790'],2438,'maison de colline avec panorama'],['Châteauneuf-Villevieille','chateauneuf-villevieille',['06390'],955,'villa au calme des collines'],['Saint-Jeannet','saint-jeannet',['06640'],4248,'villa exposée sous le Baou'],['Le Broc','le-broc',['06510'],1459,'maison dans la plaine du Var'],['Saint-Martin-du-Var','saint-martin-du-var',['06670'],3159,'maison récente de vallée'],['Villars-sur-Var','villars-sur-var',['06710'],767,'maison de village sur versant solaire'],['Saint-Blaise','saint-blaise',['06670'],1137,'villa sur les hauteurs niçoises'],['Roubion','roubion',['06420'],101,'chalet de montagne et toiture exposée'],['Bonson','bonson',['06830'],753,'maison de village avec toiture sud'],['Blausasc','blausasc',['06440'],1506,'maison entre mer et montagne'],['Peille','peille',['06440'],2368,'villa de pente avec production solaire élevée'],['L’Escarène','lescarene',['06440'],2540,'maison de vallée bien exposée'],['Lucéram','luceram',['06440'],1288,'maison de village rénovée'],['Coaraze','coaraze',['06390'],859,'résidence secondaire ensoleillée'],['Gorbio','gorbio',['06500'],1451,'villa entre Menton et Roquebrune'],['Castillon','castillon',['06500'],416,'maison de village avec couverture neuve'],['Berre-les-Alpes','berre-les-alpes',['06390'],1247,'villa de l’arrière-pays niçois']
].map(([name, slug, postalCodes, population, profile]) => ({ name, slug, postalCodes, population, profile })) as Commune[];

export const cityBlocks = (commune: Commune, index: number) => {
  const intros = [
    `À ${commune.name}, la ${commune.profile} permet souvent d’installer 6 à 12 kWc. Avec près de 2 800 heures de soleil annuelles, une étude d’ombrage sérieuse permet de transformer cette surface en production durable.`,
    `Le contexte de ${commune.name} favorise une autoconsommation premium : climatisation, piscine, véhicule électrique et équipements connectés absorbent naturellement une grande partie de la production estivale.`,
    `Chaque projet à ${commune.name} mérite une conception sur mesure : modules N-type full black, micro-onduleurs Enphase IQ8+ ou onduleur hybride SMA/Fronius, avec intégration visuelle à la toiture.`,
  ];
  const advice = [
    `Avant de signer, demandez une simulation de production, le détail du raccordement Enedis et les qualifications QualiPV RGE. Une déclaration préalable peut être nécessaire, notamment à proximité d’un périmètre protégé.`,
    `La prime à l’autoconsommation et le contrat EDF OA sont à vérifier dans l’offre. Le bon dimensionnement privilégie votre profil de consommation plutôt que la puissance maximale de toiture.`,
    `Pour une résidence secondaire, le monitoring à distance et une batterie lithium LFP apportent une lecture claire des usages et une réserve utile le soir.`,
  ];
  const heritage = [
    `Entre la lumière de la Baie des Anges et les collines, le solaire s’inscrit dans une logique patrimoniale : produire localement, contenir les dépenses d’énergie et moderniser une villa sans en modifier l’esprit.`,
    `Des jardins de Grasse aux façades de Menton, le climat azuréen impose de considérer le sel marin, le vent et les masques lointains dans l’étude de calepinage.`,
    `La Côte d’Azur associe depuis longtemps architecture, lumière et innovation. Une installation discrète, full black et garantie 30 ans, valorise cette cohérence.`,
  ];
  const market = [
    `Pour une installation premium dans le 06, comptez généralement 14 000 à 18 000 € pour 6 kWc et 18 000 à 24 000 € pour 9 kWc, pose QualiPV comprise.`,
    `Une installation de 9 kWc bien orientée dans les Alpes-Maritimes peut produire autour de 13 000 kWh/an ; l’étude finale doit confirmer ombrages, orientation et contraintes de raccordement.`,
    `Les meilleures offres détaillent matériel, garanties linéaires, rendement, protection contre la corrosion et suivi de production plutôt qu’un prix global sans explication.`,
  ];
  return { intro: intros[index % 3], advice: advice[(index + 1) % 3], heritage: heritage[(index + 2) % 3], market: market[index % 3] };
};

export const localMetrics = (commune: Commune, index: number) => {
  const coastal = /mer|littoral|baie|Menton|Cannes|Antibes|Napoule|Golfe|Cap|Èze/i.test(`${commune.name} ${commune.profile}`);
  const mountain = /montagne|alpine|altitude|Tinée|Tende|Roya|Roubion/i.test(`${commune.name} ${commune.profile}`);
  const yieldPerKwc = mountain ? 1510 + (index % 4) * 12 : coastal ? 1470 + (index % 5) * 11 : 1440 + (index % 6) * 13;
  const sixKwc = Math.round(yieldPerKwc * 6);
  const nineKwc = Math.round(yieldPerKwc * 9);
  const roofType = coastal
    ? 'Les embruns, le vent et la visibilité depuis le littoral imposent des fixations documentées, des composants résistants à la corrosion et un calepinage très propre.'
    : mountain
      ? 'La neige ponctuelle, les amplitudes thermiques et l’accès toiture demandent une étude mécanique et un plan de maintenance adaptés au relief.'
      : 'Les masques végétaux, les différents pans de toiture et les usages de piscine ou de climatisation doivent être intégrés dès le dimensionnement.';
  const localAngle = [
    `À ${commune.name}, le profil « ${commune.profile} » conduit souvent à privilégier une installation de 6 à 9 kWc, avec une production consommée en journée par la climatisation, la piscine ou la recharge d’un véhicule.`,
    `Le tissu résidentiel de ${commune.name} se prête aux projets où l’esthétique compte autant que le rendement : modules full black, passages de câbles discrets et équipements techniques regroupés hors des vues principales.`,
    `Pour une ${commune.profile} à ${commune.name}, le bon projet n’est pas nécessairement le plus puissant. Il équilibre surface utile, consommations réelles, contraintes urbaines et valeur patrimoniale du bâtiment.`,
    `La pré-étude à ${commune.name} doit distinguer production théorique et production réellement valorisée. Une grande toiture n’est rentable que si les usages, le stockage éventuel et la revente du surplus sont correctement arbitrés.`,
    `À ${commune.name}, une résidence principale et une résidence secondaire n’ont pas le même profil solaire. Le monitoring à distance, le pilotage du chauffe-eau et la programmation de la piscine peuvent changer fortement le taux d’autoconsommation.`,
  ][index % 5];
  const planning = [
    `Commencez par vérifier le PLU et la visibilité de la toiture auprès du service urbanisme de ${commune.name}. La déclaration préalable précède la commande définitive du matériel.`,
    `Faites chiffrer séparément les modules, l’onduleur, la pose, les protections, le raccordement Enedis et l’option batterie. Cette lecture évite de comparer deux offres qui ne couvrent pas le même périmètre.`,
    `Demandez une étude d’ombre saisonnière et le productible associé à chaque pan. Les pins, reliefs et constructions voisines peuvent modifier la courbe de production sans être visibles sur une moyenne départementale.`,
    `Pour une propriété peu occupée, exigez un monitoring propriétaire et des alertes de production. Le système doit rester contrôlable à distance sans abonnement opaque.`,
  ][index % 4];
  return { coastal, mountain, yieldPerKwc, sixKwc, nineKwc, roofType, localAngle, planning };
};
