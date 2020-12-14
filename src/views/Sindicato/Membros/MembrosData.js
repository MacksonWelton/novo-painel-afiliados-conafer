import AC0132000_PDS_POLO_PIRA_DE_RAv3_2008mb_1 from "../../../assets/doc/AC0132000_PDS_POLO_PIRA_DE_RA v3_2008mb-1.png";
import AC0132000_PDS_POLO_PIRA_DE_RAv3_2018mb_1 from "../../../assets/doc/AC0132000_PDS_POLO_PIRA_DE_RA v3_2018mb-1.png";
import GO0136000_PA_SANTA_MARTA_v3_2008mb_1 from "../../../assets/doc/GO0136000_PA_SANTA_MARTA_v3_2008mb-1.png";
import GO0136000_PA_SANTA_MARTA_v3_2018mb_1 from "../../../assets/doc/GO0136000_PA_SANTA_MARTA_v3_2018mb-1.png";


const MembrosData = [
  {
    id: "0",
    name: "Lislei Antônio Viana Wisneski",
    phone: "(11) 99999-9999",
    email: "email@conafer.org.br",
    birthDate: "21/11/1984",
    school: "Ens. Fund. Completo",
    sourceOfIncome: "Agricultor/a",
    cpf: "000.000.000-00",
    nationality: "brasileira",
    naturality: "Três de Maio - Rio Grande do Sul",
    incra: "Sim",
    status_rb: "Assentado",
    coleta: "754",
    address: "Ramal Bom Jesus, 2504",
    is_active: true,
    lot: {
      cep: "00000-00",
      state: "Acre",
      city: "Senador Guiomard",
      settlement: "AC0132000 - PDS POLO PIRÃ DE RÃ",
      incra_allotment_number: "99",
      access_way: "Direto por estrada/rua de terra", 
      coordinates: { lat: -10.139881, lng: -67.691507 },
      lot_geometry: {before: AC0132000_PDS_POLO_PIRA_DE_RAv3_2008mb_1, after: AC0132000_PDS_POLO_PIRA_DE_RAv3_2018mb_1}
    },
    production: {
      operational_core: "CODEAGRO",
      limit: "Sim",
      marking: "Sim",
      legalized: "Sim",
    },
  },
  {
    id: "1",
    name: "Cauã Marcos Miguel Assunção",
    phone: "(11) 99999-9999",
    email: "email@conafer.org.br",
    birthDate: "24/05/1965",
    school: "Ens. Fund. Completo",
    sourceOfIncome: "Agricultor/a",
    cpf: "000.000.000-00",
    nationality: "brasileira",
    naturality: "Sanclerlândia",
    incra: "Sim",
    status_rb: "Assentado",
    coleta: "754",
    address: "Rua mato grosso Quadra 13, lote 1",
    is_active: true,
    lot: {
      cep: "00000-00",
      state: "Goiás",
      city: "Sanclerlândia",
      settlement: "GO0136000 - PA SANTA MARTA",
      incra_allotment_number: "424",
      access_way: "Direto por estrada/rua de terra",
      coordinates: { lat: -13.900583, lng: -50.158089 },
      lot_geometry: {before: GO0136000_PA_SANTA_MARTA_v3_2008mb_1, after: GO0136000_PA_SANTA_MARTA_v3_2018mb_1}
    },
    production: {
      operational_core: "CODEAGRO",
      limit: "Sim",
      marking: "Sim",
      legalized: "Sim",
    },
  },
];

export default MembrosData;
