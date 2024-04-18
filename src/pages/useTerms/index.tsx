const UseTerms = () => {
  return (
    <div className="flex-1">
      <div className="py-6 mx-auto w-11/12 flex flex-col gap-2">
        <h3 className="text-3xl drop-shadow-lg font-bold text-neutral-800">
          Termos de Uso da TECMA Educação e Trabalho
        </h3>

        <p className="text-justify text-sm">
          Ao utilizar a TECMA Educação e Trabalho, você concorda em cumprir
          estes Termos de Uso, que estão em conformidade com a Lei Federal
          Brasileira de Direitos Autorais (Lei Nº 9.610/98) e outras legislações
          aplicáveis a infoprodutos e educação online.
        </p>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Registro e Uso da Plataforma
        </h4>

        <ul className="">
          <li className="text-sm list-disc ml-7 text-justify">
            Criação de Conta: Informações precisas e atualizadas devem ser
            fornecidas ao criar uma conta.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Uso Responsável: A plataforma deve ser usada de maneira ética,
            respeitando os direitos autorais e leis de proteção de dados (Lei
            Geral de Proteção de Dados Pessoais - LGPD).
          </li>
        </ul>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Direitos Autorais e Propriedade Intelectual
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Conformidade com a Lei de Direitos Autorais: Todo conteúdo da
            plataforma, incluindo materiais de curso, é protegido por direitos
            autorais sob a Lei Nº 9.610/98.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Uso Autorizado de Conteúdo: O conteúdo fornecido é para uso
            exclusivo do usuário inscrito e não pode ser compartilhado, copiado,
            revendido ou redistribuído sem autorização.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Política de Violação de Direitos Autorais: Implementamos uma
            política de resposta a notificações de alegadas violações de
            direitos autorais.
          </li>
        </ul>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Conteúdo e Contribuições dos Usuários
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Postagens e Comentários: Usuários podem postar conteúdo, sujeito à
            não violação de direitos autorais ou leis aplicáveis.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Licenciamento para TECMA: Ao postar, você concede à TECMA uma
            licença para usar seu conteúdo na plataforma.
          </li>
        </ul>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Responsabilidade do Usuário
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Segurança da Conta: Você é responsável por manter a
            confidencialidade da sua conta e senha.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Conduta do Usuário: Você se compromete a não utilizar a plataforma
            para atividades ilícitas ou violação de direitos de terceiros.
          </li>
        </ul>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Limitações e Responsabilidade
        </h4>
        <ul>
          <li className="text-sm list-disc ml-7 text-justify">
            Exclusão de Garantias: A plataforma é fornecida no estado em que se
            encontra, sem garantias de performance.
          </li>
          <li className="text-sm list-disc ml-7 text-justify">
            Limitação de Responsabilidade: Não nos responsabilizamos por danos
            indiretos, consequenciais, exemplares ou punitivos.
          </li>
        </ul>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Modificações dos Termos
        </h4>
        <p className="text-justify text-sm">
          Estes Termos de Uso podem ser alterados a qualquer momento, e o uso
          continuado da plataforma constitui a aceitação dessas mudanças.
        </p>

        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Legislação e Jurisdição
        </h4>
        <p className="text-justify text-sm">
          Estes Termos são regidos pelas leis brasileiras. E o foro responsável
          para dirimir qualquer questão judicial será o Foro de Caçapava do
          Estado de São Paulo.
        </p>
        <h4 className="text-xl drop-shadow-lg font-bold text-neutral-800">
          Contato e Notificações
        </h4>
        <p className="text-justify text-sm">
          Contate-nos em{" "}
          <a
            className="text-blue-600"
            title="TECMA - Clique aqui para entrar em contato via e-mail"
            href="mailto:contato@tecmaeducacao.com.br"
            target="_blank"
          >
            contato@tecmaeducacao.com.br
          </a>{" "}
          para dúvidas ou notificações de violação de direitos autorais.
        </p>
      </div>
    </div>
  );
};

export default UseTerms;
