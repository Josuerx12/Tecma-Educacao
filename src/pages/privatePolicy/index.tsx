const PrivatePolicy = () => {
  return (
    <div className="flex-1">
      <div className="py-6 mx-auto w-11/12 flex flex-col gap-2">
        <h3 className="text-3xl drop-shadow-lg font-bold text-neutral-800">
          Política de Privacidade
        </h3>

        <p className="text-justify text-sm">
          A TECMA Educação e Trabalho Ltda tem o compromisso de manter a
          privacidade de cada um dos seus alunos. Conheça abaixo algumas de
          nossas condutas e informações sobre direitos autorais.
        </p>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Informações que Coletamos
        </h4>

        <h5 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Dados Pessoais:
        </h5>
        <ul className="">
          <li className="text-sm list-disc ml-7 text-justify">
            Identificação e contato: Nome, endereço de e-mail, número de
            telefone, data de nascimento.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Dados de pagamento e faturamento: Para processamento de transações.
          </li>
        </ul>

        <h5 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          {" "}
          Dados Técnicos:
        </h5>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Dados de Log e Dispositivo: Endereço IP, informações de login, tipo
            e versão do navegador, configurações de fuso horário, tipos e
            versões de plug-in do navegador, sistema operacional.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Dados de Uso: Informações sobre como você usa nossa plataforma,
            produtos e serviços.
          </li>
        </ul>
        <h5 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Dados Sensíveis:
        </h5>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Não coletamos categorias especiais de dados pessoais (dados
            relacionados a raça ou etnia, crenças religiosas ou filosóficas,
            vida sexual, orientação sexual, opiniões políticas, filiação
            sindical, informações sobre sua saúde e dados genéticos e
            biométricos).
          </li>
        </ul>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Como Usamos Seus Dados
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Para fornecer e gerenciar acesso aos nossos serviços: Gestão de
            contas, comunicação sobre mudanças nos serviços.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Para melhorar a experiência do usuário: Desenvolvimento e
            aprimoramento de produtos, análise de tendências de uso.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Marketing e Comunicações: Enviar atualizações e ofertas relevantes
            (com sua permissão).
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Para cumprir uma obrigação legal ou regulatória.
          </li>
        </ul>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Compartilhamento de Informações
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Terceiros de confiança: Provedores de serviços que realizam funções
            em nosso nome, como processamento de pagamentos.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Por exigência legal: Quando exigido para cumprir com a lei, prevenir
            fraudes ou proteger nossos direitos.
          </li>
        </ul>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Segurança dos Dados
        </h4>
        <p className="text-justify text-sm">
          Implementamos medidas de segurança adequadas para evitar que seus
          dados pessoais sejam acidentalmente perdidos, utilizados ou acessados
          de forma não autorizada, alterados ou divulgados.
        </p>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Retenção de Dados
        </h4>
        <p className="text-justify text-sm">
          Reteremos seus dados pessoais apenas pelo tempo necessário para os
          fins para os quais foram coletados.
        </p>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          {" "}
          Seus Direitos
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Acesso e correção: Direito de solicitar cópias de seus dados
            pessoais.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Exclusão: Direito de solicitar que seus dados pessoais sejam
            apagados.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Restrição de processamento: Direito de solicitar a suspensão do
            processamento de seus dados pessoais.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Portabilidade de dados: Direito de solicitar a transferência de seus
            dados a você ou a um terceiro.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Oposição ao processamento: Quando nos baseamos em um interesse
            legítimo (ou de terceiros) e há algo em sua situação particular que
            faz você querer se opor ao processamento.
          </li>
        </ul>

        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Alterações à Política de Privacidade
        </h4>
        <p className="text-justify text-sm">
          Reservamo-nos o direito de fazer alterações a esta política de
          privacidade a qualquer momento. As alterações entrarão em vigor
          imediatamente após a publicação na nossa plataforma.
        </p>
        <h4 className="text-2xl drop-shadow-lg font-bold text-neutral-800">
          Contato
        </h4>
        <p className="text-justify text-sm">
          Em caso de dúvidas sobre esta política, entre em contato conosco
          através do e-mail:{" "}
          <a
            className="text-blue-600"
            title="TECMA - Clique aqui para entrar em contato via e-mail"
            href="mailto:contato@tecmaeducacao.com.br"
            target="_blank"
          >
            contato@tecmaeducacao.com.br
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivatePolicy;
