import { FaCheckCircle, FaList, FaUsers, FaVideo } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdOndemandVideo, MdOutlineDocumentScanner } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bottom-0 right-0 flex-0 w-full m-auto flex flex-col items-center bg-white">
      <div className="flex gap-6 items-center">
        <img
          className="mt-10 hidden sm:block"
          src="https://www.sie.com.br/admin/_img/app.png?v3"
          alt="cellphone"
        />
        <div className="flex flex-col gap-3 sm:mt-[-150px] p-3">
          <h2 className="text-3xl ">Baixe o App</h2>
          <p className="max-w-96 w-full">
            Com o nosso app, é possível acessar todos os seus cursos e estudar
            de qualquer lugar com seu celular ou tablet.
          </p>
          <p>Grátis, disponível para Android e iOS.</p>
          <div className="flex gap-2 flex-wrap items-center">
            <a
              href="https://play.google.com/store/apps/details?id=br.com.iped.meuscursos.novo"
              target="_blank"
            >
              <img
                src="https://www.iped.com.br/_img/email-icon-googleplay.png"
                alt="PlayStore"
              />
            </a>
            <a
              href="https://itunes.apple.com/us/app/meus-cursos-online/id1327803813?mt=8"
              target="_blank"
            >
              <img
                src="https://www.iped.com.br/_img/email-icon-appstore.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-cyan-500 w-full h-full sm:mt-[-150px] items-center flex flex-col p-6 text-white drop-shadow-lg">
        <h2 className="text-2xl text-center">
          Vantagens em estudar na plataforma
        </h2>
        <p className="text-sm text-justify">
          Cursos 100% em vídeo, ótimos professores e infraestrutura de ponta.
        </p>
        <div className="w-2/4 mx-auto sm:justify-between justify-center items-center flex gap-2 mt-10 flex-wrap font-light">
          <div className="flex-col gap-6 flex items-center">
            <div className="text-white flex flex-col gap-1 items-center text-center">
              <FaCheckCircle className="text-3xl" />
              <p>Cursos disponíveis</p>
              <p>24h por dia</p>
            </div>
            <div className="text-white flex flex-col gap-1 items-center text-center">
              <p className="flex gap-3 text-2xl font-light items-center">
                <FaVideo />
                1.096
              </p>
              <p>Cursos</p>
            </div>
          </div>
          <div className="flex-col gap-6 flex items-center">
            <div className="text-white flex flex-col gap-1 items-center text-center">
              <MdOndemandVideo className="text-3xl" />
              <p>Cursos 100% em</p>
              <p>vídeos aulas</p>
            </div>
            <div className="text-white flex flex-col gap-1 items-center text-center">
              <p className="flex gap-3 text-2xl font-light items-center">
                <FaList /> 32.880
              </p>
              <p>Aulas</p>
            </div>
          </div>
          <div className="flex-col gap-6 flex items-center">
            <div className="text-white flex flex-col gap-1 items-center text-center justify-center">
              <MdOutlineDocumentScanner className="text-3xl" />
              <p>Certificação digital</p>
              <p>gratuita</p>
            </div>
            <div className="text-white flex flex-col gap-1 items-center text-center justify-center">
              <p className="flex gap-3 text-2xl font-light items-center">
                <FaUsers /> 6.835.813
              </p>
              <p>Alunos</p>
            </div>
          </div>
          <div className="flex-col gap-6 flex items-center">
            <div className="text-white flex flex-col gap-1 items-center">
              <MdOutlineDocumentScanner className="text-3xl" />
              <p>Plataforma</p>
              <p>robusta e intuitiva</p>
            </div>
            <div className="text-white flex flex-col gap-1 items-center">
              <p className="flex gap-3 text-2xl font-light items-center">
                <GiTeacher /> 1.028
              </p>
              <p>Professores</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-6 flex justify-between flex-wrap gap-4">
        <form className="flex flex-col gap-1">
          <label className="text-sm text-neutral-500">
            Conferir autenticidade do certificado:
          </label>
          <div className="flex flex-wrap">
            <input
              placeholder="Digite o numero do certificado"
              type="text"
              className="border shadow-sm p-1 basis-36 flex-grow"
            />
            <button className="bg-neutral-200 border border-neutral-500 p-1 flex-grow">
              Consultar
            </button>
          </div>
        </form>

        <img src="https://www.iped.com.br/_img/selo_seguranca2.jpg" />
      </div>
    </footer>
  );
};

export default Footer;
