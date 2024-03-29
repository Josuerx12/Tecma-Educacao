/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../config/api";
import { IAddress } from "../interfaces/IAddressesByCep";
import { ICategories, ICategoriesWithCourses } from "../interfaces/ICategories";

function useUtils() {
  const token = "10ddc14a0c24267b41c1fa2a81727b514ec9f857";

  async function findByCep(cep: string): Promise<IAddress> {
    try {
      const payload = (await api.post("/api/app/get-postalcode", cep)).data
        .ADDRESS;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  async function fetchCategories(): Promise<ICategories[]> {
    const formData = new FormData();

    formData.append("token", token);

    try {
      const payload = (await api.post("/api/category/get-categories", formData))
        .data.CATEGORIES;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  async function fetchCategoriesWithCourses(): Promise<
    ICategoriesWithCourses[]
  > {
    const formData = new FormData();

    formData.append("token", token);

    try {
      const payload = (
        await api.post("/api/course/get-categories-courses", formData)
      ).data.CATEGORIES;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  const countries = [
    {
      id: 1,
      name: "Afeganistão",
    },
    {
      id: 2,
      name: "África do Sul",
    },
    {
      id: 3,
      name: "Aland - Finlândia",
    },
    {
      id: 4,
      name: "Albânia",
    },
    {
      id: 5,
      name: "Alemanha",
    },
    {
      id: 6,
      name: "Andorra",
    },
    {
      id: 7,
      name: "Angola",
    },
    {
      id: 8,
      name: "Anguilla - Reino Unido",
    },
    {
      id: 9,
      name: "Antártida",
    },
    {
      id: 10,
      name: "Antígua e Barbuda",
    },
    {
      id: 11,
      name: "Antilhas Holandesas",
    },
    {
      id: 12,
      name: "Arábia Saudita",
    },
    {
      id: 13,
      name: "Argélia",
    },
    {
      id: 14,
      name: "Argentina",
    },
    {
      id: 15,
      name: "Armênia",
    },
    {
      id: 16,
      name: "Aruba - Holanda",
    },
    {
      id: 17,
      name: "Ascensão - Reino Unido",
    },
    {
      id: 18,
      name: "Austrália",
    },
    {
      id: 19,
      name: "Áustria",
    },
    {
      id: 20,
      name: "Azerbaijão",
    },
    {
      id: 21,
      name: "Bahamas",
    },
    {
      id: 22,
      name: "Bahrein",
    },
    {
      id: 23,
      name: "Bangladesh",
    },
    {
      id: 24,
      name: "Barbados",
    },
    {
      id: 25,
      name: "Belarus",
    },
    {
      id: 26,
      name: "Bélgica",
    },
    {
      id: 27,
      name: "Belize",
    },
    {
      id: 28,
      name: "Benin",
    },
    {
      id: 29,
      name: "Bermudas - Reino Unido",
    },
    {
      id: 30,
      name: "Bioko - Guiné Equatorial",
    },
    {
      id: 31,
      name: "Bolívia",
    },
    {
      id: 32,
      name: "Bósnia-Herzegóvina",
    },
    {
      id: 33,
      name: "Botsuana",
    },
    {
      id: 34,
      name: "Brasil",
    },
    {
      id: 35,
      name: "Brunei",
    },
    {
      id: 36,
      name: "Bulgária",
    },
    {
      id: 37,
      name: "Burkina Fasso",
    },
    {
      id: 38,
      name: "Burundi",
    },
    {
      id: 39,
      name: "Butão",
    },
    {
      id: 40,
      name: "Cabo Verde",
    },
    {
      id: 41,
      name: "Camarões",
    },
    {
      id: 42,
      name: "Camboja",
    },
    {
      id: 43,
      name: "Canadá",
    },
    {
      id: 44,
      name: "Cazaquistão",
    },
    {
      id: 45,
      name: "Ceuta - Espanha",
    },
    {
      id: 46,
      name: "Chade",
    },
    {
      id: 47,
      name: "Chile",
    },
    {
      id: 48,
      name: "China",
    },
    {
      id: 49,
      name: "Chipre",
    },
    {
      id: 50,
      name: "Cidade do Vaticano",
    },
    {
      id: 51,
      name: "Cingapura",
    },
    {
      id: 52,
      name: "Colômbia",
    },
    {
      id: 53,
      name: "Congo",
    },
    {
      id: 54,
      name: "Coréia do Norte",
    },
    {
      id: 55,
      name: "Coréia do Sul",
    },
    {
      id: 56,
      name: "Córsega - França",
    },
    {
      id: 57,
      name: "Costa do Marfim",
    },
    {
      id: 58,
      name: "Costa Rica",
    },
    {
      id: 59,
      name: "Creta - Grécia",
    },
    {
      id: 60,
      name: "Croácia",
    },
    {
      id: 61,
      name: "Cuba",
    },
    {
      id: 62,
      name: "Curaçao - Holanda",
    },
    {
      id: 63,
      name: "Dinamarca",
    },
    {
      id: 64,
      name: "Djibuti",
    },
    {
      id: 65,
      name: "Dominica",
    },
    {
      id: 66,
      name: "Egito",
    },
    {
      id: 67,
      name: "El Salvador",
    },
    {
      id: 68,
      name: "Emirado Árabes Unidos",
    },
    {
      id: 69,
      name: "Equador",
    },
    {
      id: 70,
      name: "Eritréia",
    },
    {
      id: 71,
      name: "Eslováquia",
    },
    {
      id: 72,
      name: "Eslovênia",
    },
    {
      id: 73,
      name: "Espanha",
    },
    {
      id: 74,
      name: "Estados Unidos",
    },
    {
      id: 75,
      name: "Estônia",
    },
    {
      id: 76,
      name: "Etiópia",
    },
    {
      id: 77,
      name: "Fiji",
    },
    {
      id: 78,
      name: "Filipinas",
    },
    {
      id: 79,
      name: "Finlândia",
    },
    {
      id: 80,
      name: "França",
    },
    {
      id: 81,
      name: "Gabão",
    },
    {
      id: 82,
      name: "Gâmbia",
    },
    {
      id: 83,
      name: "Gana",
    },
    {
      id: 84,
      name: "Geórgia",
    },
    {
      id: 85,
      name: "Gibraltar - Reino Unido",
    },
    {
      id: 86,
      name: "Granada",
    },
    {
      id: 87,
      name: "Grécia",
    },
    {
      id: 88,
      name: "Groenlândia - Dinamarca",
    },
    {
      id: 89,
      name: "Guadalupe - França",
    },
    {
      id: 90,
      name: "Guam - Estados Unidos",
    },
    {
      id: 91,
      name: "Guatemala",
    },
    {
      id: 92,
      name: "Guiana",
    },
    {
      id: 93,
      name: "Guiana Francesa",
    },
    {
      id: 94,
      name: "Guiné",
    },
    {
      id: 95,
      name: "Guiné Equatorial",
    },
    {
      id: 96,
      name: "Guiné-Bissau",
    },
    {
      id: 97,
      name: "Haiti",
    },
    {
      id: 98,
      name: "Holanda",
    },
    {
      id: 99,
      name: "Honduras",
    },
    {
      id: 100,
      name: "Hong Kong",
    },
    {
      id: 101,
      name: "Hungria",
    },
    {
      id: 102,
      name: "Iêmen",
    },
    {
      id: 103,
      name: "IIhas Virgens - Estados Unidos",
    },
    {
      id: 104,
      name: "Ilha de Man - Reino Unido",
    },
    {
      id: 105,
      name: "Ilha Natal - Austrália",
    },
    {
      id: 106,
      name: "Ilha Norfolk - Austrália",
    },
    {
      id: 107,
      name: "Ilha Pitcairn - Reino Unido",
    },
    {
      id: 108,
      name: "Ilha Wrangel - Rússia",
    },
    {
      id: 109,
      name: "Ilhas Aleutas - Estados Unidos",
    },
    {
      id: 110,
      name: "Ilhas Canárias - Espanha",
    },
    {
      id: 111,
      name: "Ilhas Cayman - Reino Unido",
    },
    {
      id: 112,
      name: "Ilhas Comores",
    },
    {
      id: 113,
      name: "Ilhas Cook - Nova Zelândia",
    },
    {
      id: 114,
      name: "Ilhas do Canal - Reino Unido",
    },
    {
      id: 115,
      name: "Ilhas Salomão",
    },
    {
      id: 116,
      name: "Ilhas Seychelles",
    },
    {
      id: 117,
      name: "Ilhas Tokelau - Nova Zelândia",
    },
    {
      id: 118,
      name: "Ilhas Turks e Caicos - Reino Unido",
    },
    {
      id: 119,
      name: "Ilhas Virgens - Reino Unido",
    },
    {
      id: 120,
      name: "Ilhas Wallis e Futuna - França",
    },
    {
      id: 121,
      name: "Ilhsa Cocos - Austrália",
    },
    {
      id: 122,
      name: "Índia",
    },
    {
      id: 123,
      name: "Indonésia",
    },
    {
      id: 124,
      name: "Irã",
    },
    {
      id: 125,
      name: "Iraque",
    },
    {
      id: 126,
      name: "Irlanda",
    },
    {
      id: 127,
      name: "Islândia",
    },
    {
      id: 128,
      name: "Israel",
    },
    {
      id: 129,
      name: "Itália",
    },
    {
      id: 130,
      name: "Iugoslávia",
    },
    {
      id: 131,
      name: "Jamaica",
    },
    {
      id: 132,
      name: "Jan Mayen - Noruega",
    },
    {
      id: 133,
      name: "Japão",
    },
    {
      id: 134,
      name: "Jordânia",
    },
    {
      id: 135,
      name: "Kiribati",
    },
    {
      id: 136,
      name: "Kuait",
    },
    {
      id: 137,
      name: "Laos",
    },
    {
      id: 138,
      name: "Lesoto",
    },
    {
      id: 139,
      name: "Letônia",
    },
    {
      id: 140,
      name: "Líbano",
    },
    {
      id: 141,
      name: "Libéria",
    },
    {
      id: 142,
      name: "Líbia",
    },
    {
      id: 143,
      name: "Liechtenstein",
    },
    {
      id: 144,
      name: "Lituânia",
    },
    {
      id: 145,
      name: "Luxemburgo",
    },
    {
      id: 146,
      name: "Macau - Portugal",
    },
    {
      id: 147,
      name: "Macedônia",
    },
    {
      id: 148,
      name: "Madagascar",
    },
    {
      id: 149,
      name: "Madeira - Portugal",
    },
    {
      id: 150,
      name: "Malásia",
    },
    {
      id: 151,
      name: "Malaui",
    },
    {
      id: 152,
      name: "Maldivas",
    },
    {
      id: 153,
      name: "Mali",
    },
    {
      id: 154,
      name: "Malta",
    },
    {
      id: 155,
      name: "Marrocos",
    },
    {
      id: 156,
      name: "Martinica - França",
    },
    {
      id: 157,
      name: "Maurício - Reino Unido",
    },
    {
      id: 158,
      name: "Mauritânia",
    },
    {
      id: 159,
      name: "México",
    },
    {
      id: 160,
      name: "Micronésia",
    },
    {
      id: 161,
      name: "Moçambique",
    },
    {
      id: 162,
      name: "Moldova",
    },
    {
      id: 163,
      name: "Mônaco",
    },
    {
      id: 164,
      name: "Mongólia",
    },
    {
      id: 165,
      name: "MontSerrat - Reino Unido",
    },
    {
      id: 166,
      name: "Myanma",
    },
    {
      id: 167,
      name: "Namíbia",
    },
    {
      id: 168,
      name: "Nauru",
    },
    {
      id: 169,
      name: "Nepal",
    },
    {
      id: 170,
      name: "Nicarágua",
    },
    {
      id: 171,
      name: "Níger",
    },
    {
      id: 172,
      name: "Nigéria",
    },
    {
      id: 173,
      name: "Niue",
    },
    {
      id: 174,
      name: "Noruega",
    },
    {
      id: 175,
      name: "Nova Bretanha - Papua-Nova Guiné",
    },
    {
      id: 176,
      name: "Nova Caledônia - França",
    },
    {
      id: 177,
      name: "Nova Zelândia",
    },
    {
      id: 178,
      name: "Omã",
    },
    {
      id: 179,
      name: "Palau - Estados Unidos",
    },
    {
      id: 180,
      name: "Palestina",
    },
    {
      id: 181,
      name: "Panamá",
    },
    {
      id: 182,
      name: "Papua-Nova Guiné",
    },
    {
      id: 183,
      name: "Paquistão",
    },
    {
      id: 184,
      name: "Paraguai",
    },
    {
      id: 185,
      name: "Peru",
    },
    {
      id: 186,
      name: "Polinésia Francesa",
    },
    {
      id: 187,
      name: "Polônia",
    },
    {
      id: 188,
      name: "Porto Rico",
    },
    {
      id: 189,
      name: "Portugal",
    },
    {
      id: 190,
      name: "Qatar",
    },
    {
      id: 191,
      name: "Quênia",
    },
    {
      id: 192,
      name: "Quirguistão",
    },
    {
      id: 193,
      name: "Reino Unido",
    },
    {
      id: 194,
      name: "República Centro-Africana",
    },
    {
      id: 195,
      name: "República Dominicana",
    },
    {
      id: 196,
      name: "República Tcheca",
    },
    {
      id: 197,
      name: "Romênia",
    },
    {
      id: 198,
      name: "Ruanda",
    },
    {
      id: 199,
      name: "Rússia",
    },
    {
      id: 200,
      name: "Samoa Ocidental",
    },
    {
      id: 201,
      name: "San Marino",
    },
    {
      id: 202,
      name: "Santa Helena - Reino Unido",
    },
    {
      id: 203,
      name: "Santa Lúcia",
    },
    {
      id: 204,
      name: "São Cristovão e Névis",
    },
    {
      id: 205,
      name: "São Tomé e Príncipe",
    },
    {
      id: 206,
      name: "São Vicente e Granadinas",
    },
    {
      id: 207,
      name: "Sardenha - Itália",
    },
    {
      id: 208,
      name: "Senegal",
    },
    {
      id: 209,
      name: "Serra Leoa",
    },
    {
      id: 210,
      name: "Síria",
    },
    {
      id: 211,
      name: "Somália",
    },
    {
      id: 212,
      name: "Sri Lanka",
    },
    {
      id: 213,
      name: "Suazilândia",
    },
    {
      id: 214,
      name: "Sudão",
    },
    {
      id: 216,
      name: "Suécia",
    },
    {
      id: 215,
      name: "Suíça",
    },
    {
      id: 217,
      name: "Suriname",
    },
    {
      id: 218,
      name: "Tadjiquistão",
    },
    {
      id: 219,
      name: "Tailândia",
    },
    {
      id: 220,
      name: "Taiti",
    },
    {
      id: 221,
      name: "Taiwan",
    },
    {
      id: 222,
      name: "Tanzânia",
    },
    {
      id: 223,
      name: "Terra de Francisco José - Rússia",
    },
    {
      id: 224,
      name: "Togo",
    },
    {
      id: 225,
      name: "Tonga",
    },
    {
      id: 226,
      name: "Trinidad e Tobago",
    },
    {
      id: 227,
      name: "Tristão da Cunha - Reino Unido",
    },
    {
      id: 228,
      name: "Tunísia",
    },
    {
      id: 229,
      name: "Turcomenistão",
    },
    {
      id: 230,
      name: "Turquia",
    },
    {
      id: 231,
      name: "Tuvalu",
    },
    {
      id: 232,
      name: "Ucrânia",
    },
    {
      id: 233,
      name: "Uganda",
    },
    {
      id: 234,
      name: "Uruguai",
    },
    {
      id: 235,
      name: "Uzbequistão",
    },
    {
      id: 236,
      name: "Vanuatu",
    },
    {
      id: 237,
      name: "Venezuela",
    },
    {
      id: 238,
      name: "Vietnã",
    },
    {
      id: 239,
      name: "Zaire",
    },
    {
      id: 240,
      name: "Zâmbia",
    },
    {
      id: 241,
      name: "Zimbábue",
    },
  ];

  const ocupationArea = [
    {
      id: 110,
      label: "Administrativo",
    },
    {
      id: 109,
      label: "Atendimento",
    },
    {
      id: 106,
      label: "Compras",
    },
    {
      id: 117,
      label: "Engenharia e Segurança do Trabalho",
    },
    {
      id: 114,
      label: "Facilities",
    },
    {
      id: 107,
      label: "Financeiro",
    },
    {
      id: 112,
      label: "Gestão de Pessoas",
    },
    {
      id: 113,
      label: "Inovação",
    },
    {
      id: 115,
      label: "Jurídico",
    },
    {
      id: 102,
      label: "Logística",
    },
    {
      id: 100,
      label: "Marketing",
    },
    {
      id: 101,
      label: "Negócios",
    },
    {
      id: 111,
      label: "Produção",
    },
    {
      id: 116,
      label: "Qualidade",
    },
    {
      id: 103,
      label: "R.H.",
    },
    {
      id: 108,
      label: "T.I.",
    },
    {
      id: 104,
      label: "Treinamento",
    },
    {
      id: 105,
      label: "Vendas",
    },
  ];

  return {
    findByCep,
    fetchCategories,
    countries,
    ocupationArea,
    fetchCategoriesWithCourses,
  };
}

export { useUtils };