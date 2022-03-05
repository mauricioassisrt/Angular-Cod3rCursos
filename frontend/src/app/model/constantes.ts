/**
 * @component agrupa as configurações gerais do sistema
 *
 * @classname Constantes
 *
 */
export abstract class Constantes {

    static readonly mensagemExclusao = (str: string) => `Este registro pode estar ligado a registros de ${str}. Deseja realmente excluir?`;
    static readonly mensagemExclusaoSimples = (str: string) => `Deseja realmente excluir este item?`;
    static readonly erroCamposObrigatorios = `Preencha os campos obrigatórios!`;
    static readonly erroSegmentoObrigatorio = `É obrigatório adicionar pelo menos um produto do segmento de interesse!`;
    static readonly erroProdutoObrigatorios = `Preencha pelo menos um produto!`;
    static readonly erroCampoObrigatorio = `Campo obrigatório`;
    static readonly erroEmailInvalido = `E-mail inválido`;
    static readonly erroCNPJInvalido = `CNPJ inválido`;
    static readonly erroCPFInvalido = `CPF inválido`;
    static readonly erroDataInvalido = `Data inválida`;
    static readonly erroSenhaInvalido = `A senha deve possuir no mínimo 6 caracteres e no máximo 20`;
    static readonly erroListarRegistros = `Error ao listar os registros!`;
    static readonly erroListarCombo = `Error ao listar os registros para o combo!`;
    static readonly erroSenhaAtualNaoInformada = `É necessário informar a senha atual para alterar a senha`;
    static readonly erroSenhasNaoConferem = `O campo senha e confirmar senha não conferem`;
    static readonly erroSelecionePeloMenosUmaNotificacao = `É necessário selecionar pelo menos um tipo de notificação`;
    static readonly mensagemConfirmarSalvarNomeSegmentoParecido = `Já existe um segmento com nome parecido, deseja realmente salvar?`;
    static readonly CEDENTE = "C";
    static readonly INVESTIDOR = "I";
    static readonly ADMINISTRADOR = "A";
    static readonly ADMINISTRADOR_PROCESSO_COMPETITIVO = "APC";
    static readonly TIPO_CARTEIRA_FREE = "FREE";
    static readonly TITULO_CARTEIRA_FREE = "Classificados";
    static readonly TIPO_CARTEIRA_PREMIUM = "PREMIUM";
    static readonly TITULO_CARTEIRA_PREMIUM = "Carteiras Premium";
    static readonly TIPO_CARTEIRA_PROCESSOS_COMPETITIVOS = "PROCESSOS COMPETITIVOS";

    // TIPO CREDITO
    static readonly ATRASO_A_VENCER = "ATRASO_A_VENCER";
    static readonly ATRASO_EM_ANDAMENTO = "ATRASO_EM_ANDAMENTO";
    static readonly VENCIDOS = "VENCIDOS";
    static readonly PESSOA_FISICA = "PESSOA_FISICA";
    static readonly PESSOA_JURIDICA = "PESSOA_JURIDICA";
    static readonly RANGE = "RANGE";
    static readonly ESTADO = "ESTADO";
    static readonly AJUIZADO = "AJUIZADO";
    static readonly NAO_AJUIZADO = "NAO_AJUIZADO";
    static readonly COM_GARANTIA = "COM_GARANTIA";
    static readonly SEM_GARANTIA = "SEM_GARANTIA";
    static readonly NEGATIVADO_SERASA_SPC = "NEGATIVADO_SERASA_SPC";
    static readonly NAO_NEGATIVADO_SERASA_SPC = "NAO_NEGATIVADO_SERASA_SPC";
    static readonly ATRASO_MESES = "ATRASO_MESES";
    static readonly PJ_TABELA = "PJ_TABELA";

    // TIPO CREDITO PARA EXIBICAO
    static readonly ATRASO_A_VENCER_EXIBICAO = "Atraso a Vencer";
    static readonly ATRASO_EM_ANDAMENTO_EXIBICAO = "Atraso em Andamento";
    static readonly PESSOA_FISICA_EXIBICAO = "Pessoa Fisica";
    static readonly PESSOA_JURIDICA_EXIBICAO = "Pessoa Juridica";
    static readonly COM_GARANTIA_EXIBICAO = "Créditos com garantia";
    static readonly NEGATIVADO_SERASA_SPC_EXIBICAO = "Negativado Serasa e/ou SCPC";
    static readonly VENCIDOS_EXIBICAO = "Contratos Vencidos";
    static readonly AJUIZADO_EXIBICAO = "Créditos Ajuizados";
    static readonly ESTADO_EXIBICAO = "Estado";
    static readonly RANGE_EXIBICAO = "Range";
    static readonly ATRASO_MESES_EXIBICAO = "Faixa de Atraso (Meses)";
    static readonly PJ_TABELA_EXIBICAO = "PJ tabela";

    // AGRUPAMENTO TIPO CREDITO
    static readonly TIPO_PESSOA = "TIPO_PESSOA";
    static readonly FAIXA_ATRASO = "FAIXA_ATRASO";

    // TOOLTIPS
    static readonly TOOLTIP_DELAY = 0;

    // CEDENTE/INVESTIDOR - ETAPA 1
    static readonly TOOLTIP_NOME = "Informe aqui o seu nome";
    static readonly TOOLTIP_SOBRENOME = "Informe aqui o seu sobrenome";
    static readonly TOOLTIP_TELEFONE = "Caso queira, informe aqui o seu número de telefone fixo para contato";
    static readonly TOOLTIP_CELULAR = "Caso queira, informe aqui o número do seu celular para contato";
    static readonly TOOLTIP_LOGIN = "Informe aqui um e-mail válido que será utilizado para logar no sistema. *OBS: Iremos confirmar o seu e-mail posteriormente.";
    static readonly TOOLTIP_SENHA = "Informe aqui a senha que será usada para logar no sistema";
    static readonly TOOLTIP_CONFIRMAR_SENHA = "Repita a senha inserida no campo anterior";

    static readonly TOOLTIP_EMAIL = "Informe um e-mail para contato. Este e-mail será utilizado para o envio de notificações do sistema e como meio de comunicação. Por padrão pegamos o e-mail informado no cadastro de seu login para servir como e-mail de contato, mas você pode escolher outro alterando este campo.";
    static readonly TOOLTIP_ESTADO = "Selecione o seu estado";
    static readonly TOOLTIP_CIDADE = "Procure pelo nome de sua cidade e selecione";
    static readonly TOOLTIP_DIVULGA_CIDADE = "Se optar por divulgar a sua cidade os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_NOME_EMPRESA_CEDENTE = "Informe aqui o nome da empresa cedente dos créditos";
    static readonly TOOLTIP_DIVULGA_NOME_EMPRESA_CEDENTE = "Se optar por divulgar o nome da empresa cedente dos créditos os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_CARGO_EMPRESA = "Informe o seu cargo na empresa cedente dos créditos";
    static readonly TOOLTIP_DIVULGA_CARGO_EMPRESA = "Se optar por divulgar o seu cargo na empresa cedente dos créditos os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_SITE_EMPRESA = "Caso queira, informe o site da empresa";
    static readonly TOOLTIP_DIVULGA_SITE_EMPRESA = "Se optar por divulgar o site da empresa cedente dos créditos os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_CNPJ = "Caso queira, informe o CNPJ da empresa";
    static readonly TOOLTIP_DIVULGA_CNPJ = "Se optar por divulgar o CNPJ da empresa cedente dos créditos os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_DIVULGA_NUMERO_CELULAR = "Se optar por divulgar o número do seu celular os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_DIVULGA_NUMERO_TELEFONE = "Se optar por divulgar o número do seu telefone fixo os investidores poderão visualizar esta informação em suas carteiras de créditos";
    static readonly TOOLTIP_NOTIFICACOES = "Selecione nas opções abaixo os meios de comunicação em que deseja receber notificações do sistema. Ex: Novas mensagens, Investidores interessados...";
    static readonly TOOLTIP_LOGO = "Caso queira, selecione a imagem com o logo da empresa cedente dos créditos. A logo será exibida nas carteiras de créditos cadastradas por você. **Apenas será exibida se optar por divulgar o nome da empresa cedente dos créditos.";

    static readonly TOOLTIP_CPF_OU_CNPJ = "Selecione o tipo de documento que irá informar. *Não é obrigatório informar um documento";
    static readonly TOOLTIP_CPF = "Caso queira, informe o seu CPF";
    static readonly TOOLTIP_NOME_EMPRESA = "Caso queira, informe o nome de sua empresa";
    static readonly TOOLTIP_NOME_EMPRESA_REPRESENTANTE = "Caso queira, informe o nome da empresa que você está representando";

    // TIPO DE DOCUMENTO
    static readonly TIPO_DOC_CPF = 0;
    static readonly TIPO_DOC_CNPJ = 1;

    //STATUS DOCUMENTO
    static readonly CERTO = "OK";
    static readonly INCONSISTENTE = "Inconsistente";
    static readonly EM_ANALISE = "Em análise";
    static readonly PENDENTE = "Pendente";

    static readonly OK = "OK";
    static readonly IN = "IN"; // Inconsistente
    static readonly EA = "EA"; // Em Análise
    static readonly PE = "PE"; // Pendente

    //CARTEIRA STATUS
    static readonly PUBLICADO = "PUBLICADO";

    //LOG
    static readonly DATASTORE_PERSIST = 1;
    static readonly DATASTORE_UPDATE = 2;
    static readonly DATASTORE_DELETE = 3;

    static readonly INCLUSAO = "Incluido";
    static readonly ATUZALIZACAO = "Modificado";
    static readonly DELETADO = "Deletado";

    static readonly USUARIO = "Usuario";
    static readonly CEDENTE_LOG = "Cedente";
    static readonly INVESTIDOR_LOG = "Investidor";
    static readonly ADMINISTRADOR_LOG = "Administrador";
    static readonly PRODUTO = "Produto";
    static readonly SEGMENTO = "Segmento";
    static readonly CARTEIRA = "Carteira";
    static readonly CREDITO = "Credito";
    static readonly LEILAO = "Leilao";
    static readonly PARTICIPANTE_LEILAO = "ParticipanteLeilao";
    static readonly PARTICIPANTE_LEILAO_OFERTA = "ParticipanteLeilaoOferta";
    static readonly PARTICIPANTE_DOCUMENTO_LEILAO = "ParticipanteDocumentoLeilao";
    static readonly PARTICIPANTE_DOCUMENTO_LEILAO_VO = "ParticipanteDocumentoLeilaoVo";

    static readonly PROCESSO_COMPETITIVO_EXIBICAO = "Processo Competitivo";
    static readonly PARTICIPANTE_LEILAO_EXIBICAO = "Participante do processo competitivo";
    static readonly PARTICIPANTE_LEILAO_OFERTA_EXIBICAO = "Ofertas do processo competitivo";
    static readonly PARTICIPANTE_DOCUMENTO_LEILAO_EXIBICAO = "Documentos do participante do processo competitivo";

    //banco
    static readonly CIDADE = "Cidade";
    static readonly LOG_PARTICIPANTE_LEILAO_VO = "LogParticipanteLeilaoVo";
    static readonly LOG_INTERESSE_CARTEIRA_VO = "LogInteresseCarteiraVo";
    //static readonly ESTADO = "Estado";
    static readonly CEDENTE_CAMPO_DIVULGACAO = "CedenteCampoDivulgacao";
    static readonly CEDENTE_TIPO_NOTIFICACAO = "CedenteTipoNotificacao";
    static readonly TIPO_NOTIFICACAO = "TipoNotificacao";
    static readonly INVESTIDOR_TIPO_NOTIFICACAO = "InvestidorTipoNotificacao";
    static readonly PERMISSAO = "Permissao";
    static readonly PERMISSAO_ADMINISTRADOR = "PermissaoAdministrador";
    static readonly INVESTIDOR_SEGMENTO_INTERESSE = "InvestidorSegmentoInteresse";
    static readonly TIPO_CARTEIRA = "TipoCarteira";
    static readonly CAMPO_SEGMENTO = "CampoSegmento";
    static readonly CAMPO_SEGMENTO_CARTEIRA_PREENCHIMENTO = "CampoSegmentoCarteiraPreenchimento";
    static readonly TIPO_CRETIDO = "TipoCredito";
    //static readonly CREDITO = "Credito";
    static readonly ANEXO_CARTEIRA = "AnexoCarteira";
    static readonly CARTEIRA_CREDITO = "CarteiraCredito";
    static readonly CARTEIRA_PRODUTO = "CarteiraProduto";
    static readonly CARTEIRA_TIPO_CREDITO_TOTAIS = "CarteiraTipoCreditoTotais";
    static readonly ROLE = "Role";
    static readonly USUARIO_ROLE = "UsuarioRole";
    static readonly SALA_CHAT = "SalaChat";
    static readonly USUARIO_SALA_CHAT = "UsuarioSalaChat";
    static readonly MENSAGEM = "Mensagem";
    static readonly MENSAGEM_ANEXO = "MensagemAnexo";
    static readonly CAMPO_DOCUMENTO_LEILAO = "CampoDocumentoLeilao";
    static readonly AVALIACAO_PLATAFORMA = "AvaliacaoPlataforma";

    //exibicao
    static readonly LOG_PARTICIPANTE_LEILAO_EXIBICAO = "Interessado no processo competitivo";
    static readonly LOG_INTERESSE_CARTEIRA_EXIBICAO = "Interessado em carteira premium";
    static readonly CIDADE_EXIBICAO = "Cidade";
    static readonly CEDENTE_CAMPO_DIVULGACAO_EXIBICAO = "Campo de divulgação do cedente";
    static readonly CEDENTE_TIPO_NOTIFICACAO_EXIBICAO = "Tipo de notificação do cedente";
    static readonly TIPO_NOTIFICACAO_EXIBICAO = "Tido da notificacão";
    static readonly INVESTIDOR_TIPO_NOTIFICACAO_EXIBICAO = "Tipo notificacao do investidor";
    static readonly PERMISSAO_EXIBICAO = "Permissao";
    static readonly PERMISSAO_ADMINISTRADOR_EXIBICAO = "Permissão do administrador";
    static readonly INVESTIDOR_SEGMENTO_INTERESSE_EXIBICAO = "Segmento de interesse do investidor";
    static readonly TIPO_CARTEIRA_EXIBICAO = "Tipo da carteira";
    static readonly CAMPO_SEGMENTO_EXIBICAO = "Campos do segmento";
    static readonly CAMPO_SEGMENTO_CARTEIRA_PREENCHIMENTO_EXIBICAO = "Preenchimento do campo do segmento";
    static readonly TIPO_CRETIDO_EXIBICAO = "Tipo do crédito";
    static readonly CREDITO_EXIBICAO = "Crédito";
    static readonly ANEXO_CARTEIRA_EXIBICAO = "Anexo da carteira";
    static readonly CARTEIRA_CRETIDO_EXIBICAO = "Crédito da carteira";
    static readonly CARTEIRA_PRODUTO_EXIBICAO = "Produto da carteira";
    static readonly CARTEIRA_TIPO_CREDITO_TOTAIS_EXIBICAO = "Tipo de credito total ";
    static readonly ROLE_EXIBICAO = "Role";
    static readonly USUARIO_ROLE_EXIBICAO = "Role do usuário";
    static readonly SALA_CHAT_EXIBICAO = "Sala do chat";
    static readonly USUARIO_SALA_CHAT_EXIBICAO = "Sala do chat do usuário";
    static readonly MENSAGEM_EXIBICAO = "Mensagem";
    static readonly MENSAGEM_ANEXO_EXIBICAO = "Anexo da mensagem";
    static readonly CAMPO_DOCUMENTO_LEILAO_EXIBICAO = "Documento do Processo Competitivo";
    static readonly AVALIACAO_PLATAFORMA_EXIBICAO = "Avaliação da plataforma";
    static readonly TITLE_CONFIRMACAO_SMS = "Confirme sua identificação por SMS!";
    static readonly DESCRIPTION_CONFIRMACAO_SMS = "Para alterar a senha é necessario a validação por meio do SMS";
    static readonly MENSAGEM_DE_EXCLUSAO_DO_PRODUTO = "Essas carteiras contém  o produto selecionado ";


    static readonly branch_pipa = "Branch Pipa ";
    static readonly description = "Descrição ";
    static readonly phone = "Telefone";
    static readonly address = "Endereço";
    static readonly zip = "Cep";
    static readonly cnpj = "CNPJ ";
    static readonly ie = "Inscrição Estadual ";
    static readonly number = "Número";
    static readonly complement = "Complemento";
    static readonly rn = "RN ";


}
