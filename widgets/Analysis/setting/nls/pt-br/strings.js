﻿define(
   ({
    selectAnalysisTools:"Seleciona as ferramentas de análise a serem listadas no widget.",
    selected: "selecionado",
    name: "Nome",
    graphicalDisplay:"Visualização gráfica",
    usage: "Uso",
    toolNotAvailable: "Esta ferramenta não está disponível, pois o mapa não contém as camadas de feição exigidas.",
    aggregatePoints:"Agregar Pontos",
    aggregatePointsUsage:"Agrega os pontos em polígonos onde os pontos são localizados.",
    aggregatePointsInputTip: "Especifica a camada de feição de ponto que será agregada em polígonos na camada de feição do polígono.",
    calculateDensity:"Calcular Densidade",
    calculateDensityUsage:"Cria um mapa de densidade a partir das feições de ponto ou linha ao espalhar quantidades conhecidas de algum fenômeno (representados como atributos de pontos ou linhas) ao longo do mapa.",
    calculateDensityInputTip:"Especifica as feições de linha ou ponto a partir do cálculo de densidade.",
    connectOriginsToDestinations: "Conectar Origens aos Destinos",
    connectOriginsToDestinationsUsage: "Mede a distância ou tempo de percurso entre os pares de pontos.",
    connectOriginsToDestinationsInputTip: "Especifica os pontos ou ponto de partida de rotas a serem geradas.",
    createBuffers:"Criar Buffers",
    createBuffersUsage:"Cria polígonos de buffer a partir das feições de entrada.",
    createBuffersInputTip:"Especifica a camada de feição de ponto, linha ou de polígono a ser gerado o buffer.",
    createDriveTimeAreas:"Criar Áreas de Tempo do Percurso",
    createDriveTimeAreasUsage:"Cria polígonos de tempo do percurso (ou distância do percurso) ao redor dos pontos de entrada para os valores de tempo do percurso fornecidos.",
    createDriveTimeAreasInputTip:"Especifica os pontos onde as áreas de tempo do percurso serão desenhadas.",
    createViewshed:"Criar Panorama",
    createViewshedUsage:"Cria áreas que são visíveis baseadas em locais que você especifica.",
    createViewshedInputTip:"Especifica os locais do observador para identificar as áreas visíveis.",
    createWatersheds:"Criar Vertentes",
    createWatershedsUsage:"Cria áreas de captação baseadas em locais que você especifica.",
    createWatershedsInputTip:"Especifica as feições de ponto utilizadas para calcular as vertentes.",
    deriveNewLocations:"Derivar Novos Locais",
    deriveNewLocationsUsage:"Deriva novas feições a partir das camadas de entrada que atenderem uma consulta que você especificar",
    deriveNewLocationsInputTip:"Especifica a camada de análise para utilizar como entrada.",
    dissolveBoundaries:"Dissolver Limites",
    dissolveBoundariesUsage:"Dissolve polígonos que sobrepõem ou compartilham um limite em comum.",
    dissolveBoundariesInputTip:"Especifica a camada contendo feições de polígono que serão dissolvidas.",
    enrichLayer:"Enriquecer Camada",
    enrichLayerUsage:"Enriquece feições de entrada com pessoas, lugares e fatos de negócios sobre áreas de proximidade.",
    enrichLayerInputTip:"Especifica as feições para enriquecer com os novos dados.",
    extractData:"Extrair Dados",
    extractDataDesc:"Extrai dados de uma ou mais camadas dentro de uma extensão fornecida",
    extractDataInputTip:"Especifica a camada de feição de entrada para extrair.",
    findExistingLocations:"Encontrar Locais Existentes",
    findExistingLocationsUsage:"Seleciona feições na camada de entrada que atendem uma consulta de atributo e/ou espacial que você especificou",
    findExistingLocationsInputTip:"Especifica as camadas de análise para utilizar como entrada.",
    findHotSpots:"Localizar Valor Alto de Incidência",
    findHotSpotsUsage:"Localiza agrupamentos da feição de entrada estatísticamente significativos ou valores altos/baixos.",
    findHotSpotsInputTip:"Especifica a camada de feição de ponto ou polígono para a qual o valor alto de incidência será calculado.",
    findNearest:"Localizar Mais Próximo",
    findNearestUsage:"Para cada feição em uma camada de entrada, localize sua feição mais próxima em outra camada",
    findNearestInputTip:"Especifique as feições de ponto, linha ou polígono das quais os locais mais próximos serão encontrados.",
    findSimilarLocations:"Encontrar Locais Semelhantes",
    findSimilarLocationsUsage:"Mede a semelhança de locais de candidatos para um ou mais locais de referência.",
    findSimilarLocationsInputTip:"Especifica uma camada de feição que contém um ou mais locais de referência em relação às feições na camada de pesquisa que serão avaliadas por semelhança.",
    interpolatePoints:"Interpolar Pontos",
    interpolatePointsUsage:"Prevê valores em novos locais baseado em medidas de uma coleta de pontos.",
    interpolatePointsInputTip:"Especifica as feições de ponto que serão interpoladas.",
    mergeLayers:"Juntar Camadas",
    mergeLayersUsage:"Junta as feições de múltiplas camadas em uma nova camada",
    mergeLayersInputTip:"Especifica a camada de feição a ser juntada com a camada de junção.",
    overlayLayers:"Sobrepor Camadas",
    overlayLayersUsage:"Combina múltiplas camadas em uma única camada com informações de camadas originais preservadas.",
    overlayLayersInputTip:"Especifica a camada de feição que será sobreposta com a camada de sobreposição.",
    planRoutes:"Planejar Rotas",
    planRoutesUsage:"Determina como dividir eficazmente tarefas entre uma mão-de-obra móvel.",
    planRoutesInputTip:"Especifica os pontos que os veículos, motoristas ou rotas devem visitar.",
    summarizeNearby:"Resumir Mais Próximo",
    summarizeNearbyUsage:"Para cada feição em uma camada de entrada, resuma os dados dentro de uma distância das feições em outra camada.",
    summarizeNearbyInputTip:"Especifica a camada de feição de ponto, linha ou polígono da qual a distância será medida para as feições ao resumir a camada.",
    summarizeWithin:"Resumir Dentro",
    summarizeWithinUsage:"Para cada polígono em uma camada de polígono de entrada, resuma os dados localizados dentro dela a partir das feições em outra camada.",
    summarizeWithinInputTip:"Especifica a camada de feição de polígono a ser resumida.",
    traceDownstream:"Traçar Jusante",
    traceDownstreamUsage:"Determina os caminhos de fluxo em uma direção da jusante a partir de locais que você especifica.",
    traceDownstreamInputTip:"Especifica as feições de ponto utilizadas para iniciar o local de um traçado da jusante."
  })
);
