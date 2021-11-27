var regions = [
  { id: "", value: "ALL" },
  { id: "3f27fa7f-8274-431c-b38b-c1b342c43532", value: "Béni Mellal-Khénifra" },
  { id: "ef665c1f-cd0f-4179-8a66-be218893cfa8", value: "Casablanca-Settat" },
  { id: "28a2faa7-a0dd-44e4-9674-eb6dd93609a8", value: "Dakhla-Oued Ed-Dahab" },
  { id: "53b09ea3-bec8-403e-afa2-336bb48fb52b", value: "Drâa-Tafilalet" },
  { id: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2", value: "Fès-Meknès" },
  { id: "6f35d681-4991-4538-bf15-146d49d160b9", value: "Guelmim-Oued Noun" },
  { id: "99bbb0ee-6821-48ad-a892-4cae2c009d83", value: "L'oriental" },
  {
    id: "a5c6ebb1-679a-480f-b127-cb15e81e3fe8",
    value: "Laâyoune-Sakia El Hamra",
  },
  { id: "a103332e-9e9f-4439-89d6-7ac03598dea3", value: "Marrakech-Safi" },
  { id: "d678ccad-98e3-4363-a031-0abf796002cb", value: "Rabat-Salé-Kénitra" },
  { id: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b", value: "Souss-Massa" },
  {
    id: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
    value: "Tanger-Tetouan-Al Hoceima",
  },
];
var province = [
  { id: "", value: "ALL", region: "" },
  {
    id: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
    value: "AGADIR IDA OUTANANE",
    region: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b",
  },
  {
    id: "26ff9ead-8111-4a79-b924-5491120b9297",
    value: "AIN CHOCK",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "aa1204f3-85ae-4659-9e98-1e7a87d55d0b",
    value: "AIN SEBAA HAY MOHAMMADI",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "940b0295-fec6-4191-9529-20bca7457f56",
    value: "AL FIDA MERS SULTAN",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
    value: "AL HAOUZ",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  value: "AL HOCEIMA",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "a87a5c26-8774-4834-95d7-a6d2650b6080",
    value: "AOUSSERD",
    region: "28a2faa7-a0dd-44e4-9674-eb6dd93609a8",
  },
  {
    id: "288d4c63-b1ae-4861-9157-37cd85a43a06",
    value: "ASSA-ZAG",
    region: "6f35d681-4991-4538-bf15-146d49d160b9",
  },
  {
    id: "000cb9b3-60b0-48a4-948a-0791047c6d25",
    value: "AZILAL",
    region: "3f27fa7f-8274-431c-b38b-c1b342c43532",
  },
  {
    id: "2051094d-aa42-4689-8649-35b47e204bf4",
    value: "BEN M'SICK",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
    value: "BENI MELLAL",
    region: "3f27fa7f-8274-431c-b38b-c1b342c43532",
  },
  {
    id: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
    value: "BENSLIMANE",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
    value: "BERKANE",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "ef380988-dbe7-4a63-965c-2617b97252c4",
    value: "BERRECHID",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "ae531a03-51c2-4701-8325-8cdc1c7f951a",
    value: "BOUJDOUR",
    region: "a5c6ebb1-679a-480f-b127-cb15e81e3fe8",
  },
  {
    id: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
    value: "BOULEMANE",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "e2b10e71-a67a-4987-8b4f-b110b4964e2f",
    value: "CASABLANCA",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "3eaec44b-b4fb-4105-bb7b-a819e227763b",
    value: "CASABLANCA ANFA",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
    value: "CHEFCHAOUEN",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
    value: "CHICHAOUA",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "ad367971-7199-48ac-b029-d670e0e2c5cd",
    value: "CHTOUKA-AIT BAHA",
    region: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b",
  },
  {
    id: "4388c589-843d-4b47-830f-b10b783b57d1",
    value: "DRIOUCH",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
    value: "EL HAJEB",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "43c16a65-5e52-460b-be6b-d0526302dea5",
    value: "EL JADIDA",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "68e235d5-d0f1-4252-8331-4118ba5080c4",
    value: "EL KELAA DES SRAGHNA",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "50ca6b47-08f0-4153-a080-efe346dac6bc",
    value: "ERRACHIDIA",
    region: "53b09ea3-bec8-403e-afa2-336bb48fb52b",
  },
  {
    id: "db740e29-39e6-4362-8adf-bf6963a0527e",
    value: "ES-SEMARA",
    region: "a5c6ebb1-679a-480f-b127-cb15e81e3fe8",
  },
  {
    id: "7089fa52-14c6-4def-8937-7a5c6bda2829",
    value: "ESSAOUIRA",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "73bd6373-cada-4282-b5be-55047546df3f",
    value: "FAHS-ANJARA",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
    value: "FES",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "4d51795f-7794-45ca-b08c-35cc9fb40509",
    value: "FIGUIG",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
    value: "FQUIH BEN SALAH",
    region: "3f27fa7f-8274-431c-b38b-c1b342c43532",
  },
  {
    id: "b050c753-c450-4887-b91f-10c58de73321",
    value: "GUELMIM",
    region: "6f35d681-4991-4538-bf15-146d49d160b9",
  },
  {
    id: "86591827-d353-4065-aedc-7db33da7e17b",
    value: "GUERCIF",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "23e449de-00bd-460d-88f1-3465cb114ed6",
    value: "HAY HASSANI",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
    value: "IFRANE",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "d995796c-51dd-4471-909f-9d1510057344",
    value: "INEZGANE-AIT MELLOUL",
    region: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b",
  },
  {
    id: "12e4beb1-74dc-4730-b495-8b319efb525d",
    value: "JERADA",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
    value: "KENITRA",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
    value: "KHEMISSET",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
    value: "KHENIFRA",
    region: "3f27fa7f-8274-431c-b38b-c1b342c43532",
  },
  {
    id: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
    value: "KHOURIBGA",
    region: "3f27fa7f-8274-431c-b38b-c1b342c43532",
  },
  {
    id: "78ed197b-8a57-4962-ab15-07d0c24c4fc0",
    value: "LAAYOUNE",
    region: "a5c6ebb1-679a-480f-b127-cb15e81e3fe8",
  },
  {
    id: "57878537-0e59-471e-95f7-ef5edb099614",
    value: "LARACHE",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "2241f2a3-365b-47cc-a0f8-b11b278c2b48",
    value: "M'DIQ - FNIDQ",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "561c1736-9c10-435e-8dd2-050c761357a6",
    value: "MARRAKECH",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "442089d7-5cb2-4bba-844e-4710c4b9b0b1",
    value: "MEDIOUNA",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
    value: "MEKNES",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
    value: "MIDELT",
    region: "53b09ea3-bec8-403e-afa2-336bb48fb52b",
  },
  {
    id: "808202e9-de03-44ff-bed9-b0829eae83d8",
    value: "MOHAMMADIA",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "6a46c73a-a0fb-4ef7-9aaf-f5b8c4d47917",
    value: "MOULAY RACHID",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
    value: "MOULAY YACOUB",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
    value: "NADOR",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "05732887-a6b0-442b-b68b-57ef5cb798dc",
    value: "NOUACEUR",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
    value: "OUARZAZATE",
    region: "53b09ea3-bec8-403e-afa2-336bb48fb52b",
  },
  {
    id: "ac966848-ffbd-4451-9b12-0d990008c22c",
    value: "OUED ED DAHAB",
    region: "28a2faa7-a0dd-44e4-9674-eb6dd93609a8",
  },
  {
    id: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
    value: "OUEZZANE",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "69d99eae-07ce-4bad-8469-0756c5460680",
    value: "OUJDA-ANGAD",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
    value: "RABAT",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "64257d4c-0cce-440b-9057-ab55938ebc1e",
    value: "REHAMNA",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "88f4f910-e63f-4e10-bddd-9022df6b0948",
    value: "SAFI",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "97be0881-ffaf-4540-9292-3131da446a04",
    value: "SALE",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
    value: "SEFROU",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
    value: "SETTAT",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
    value: "SIDI BENNOUR",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "7f6f6757-4ea2-4192-905b-66835c00844b",
    value: "SIDI BERNOUSSI",
    region: "ef665c1f-cd0f-4179-8a66-be218893cfa8",
  },
  {
    id: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
    value: "SIDI IFNI",
    region: "6f35d681-4991-4538-bf15-146d49d160b9",
  },
  {
    id: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
    value: "SIDI KACEM",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
    value: "SIDI SLIMANE",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
    value: "SKHIRATE-TEMARA",
    region: "d678ccad-98e3-4363-a031-0abf796002cb",
  },
  {
    id: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
    value: "TAN-TAN",
    region: "6f35d681-4991-4538-bf15-146d49d160b9",
  },
  {
    id: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
    value: "TANGER-ASSILAH",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
    value: "TAOUNATE",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "2349f3b4-66aa-4941-a450-343fee4410a6",
    value: "TAOURIRT",
    region: "99bbb0ee-6821-48ad-a892-4cae2c009d83",
  },
  {
    id: "053e7f0d-6812-4048-8f9a-fcfbb3323fd5",
    value: "TARFAYA",
    region: "a5c6ebb1-679a-480f-b127-cb15e81e3fe8",
  },
  {
    id: "109671be-dae6-4369-960c-d88a38637e72",
    value: "TAROUDANNT",
    region: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b",
  },
  {
    id: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
    value: "TATA",
    region: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b",
  },
  {
    id: "6de23051-a88a-41cb-91a6-495558917535",
    value: "TAZA",
    region: "8a901d0b-9f63-4ccb-894b-bfed8714f0b2",
  },
  {
    id: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
    value: "TETOUAN",
    region: "e259fb33-fb48-4d9a-af7b-df0b26f6dde8",
  },
  {
    id: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
    value: "TINGHIR",
    region: "53b09ea3-bec8-403e-afa2-336bb48fb52b",
  },
  {
    id: "477f7e34-9da5-4361-b4f0-9835b058f432",
    value: "TIZNIT",
    region: "5e013a3b-e284-42e6-a7cb-1d12d6d35a0b",
  },
  {
    id: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
    value: "YOUSSOUFIA",
    region: "a103332e-9e9f-4439-89d6-7ac03598dea3",
  },
  {
    id: "df613b39-3c3e-4e88-b462-bb0cc0749563",
    value: "ZAGORA",
    region: "53b09ea3-bec8-403e-afa2-336bb48fb52b",
  },
];
var communs = [
  { id: "", value: "ALL", province: "" },
  {
    id: "29ea197f-3d80-4815-bcb3-377323e1c5e3",
    value: "AARAB SEBBAH GHERIS",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "5009ee4a-8ecd-4fb9-ab8f-59c582cb661a",
    value: "AARAB SEBBAH ZIZ",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "f5453cd1-197c-45a1-b572-3c83db9742c6",
    value: "ABADOU",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "a37b7f96-d926-4eef-968f-ca8baba9d89e",
    value: "ABAYNOU",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "002b1908-2918-449e-bd21-b8a2aaa59e03",
    value: "ABBOU LAKHAL",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "fe4f7a40-792e-4f35-9f62-40dc95366393",
    value: "ABDELGHAYA SOUAHEL",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "72894e1f-de96-44c4-920a-3deef29d3df6",
    value: "ABTEH",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "02d6cd9f-cfdc-4ad7-ad06-a5a0048e5bc9",
    value: "ADAGHAS",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "01d935b4-2e9d-47e9-8446-2e62956032ac",
    value: "ADAR",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "a748856c-64bc-43a2-99bb-096f6fbb4b54",
    value: "ADASSIL",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "169210bb-2f81-42ee-a8bb-dc863d67ae65",
    value: "ADAY",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "24b04f1a-b5e3-40e1-96ee-0500286c7d56",
    value: "ADIS",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "953c1d21-2599-4147-912c-7c67181df1c2",
    value: "ADREJ",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "1bfd338d-76f8-4de6-803f-5d5edeb0064c",
    value: "AFALLA ISSEN",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "a81baa84-5a96-4bbd-9da1-d56037135e5e",
    value: "AFELLA IGHIR",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "11086ccf-93a8-43b5-9ade-23093625856d",
    value: "AFELLA N'DRA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "bf55d710-b776-46d8-a367-e84193c031d6",
    value: "AFERKAT",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "28963a00-ed2e-4b60-b37f-37e739263685",
    value: "AFOURAR",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "b545237d-2092-4a4b-9ace-f45c6a308192",
    value: "AFRA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "06058cf6-d9d2-4bfe-b810-4e89fcc877d9",
    value: "AFSOU",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "e5374ce5-849e-4c88-b6bd-62ec1c9785dd",
    value: "AGADIR",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "7e7096cc-58e7-4033-b2b6-35fdad261d13",
    value: "AGADIR MELLOUL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "930c93cc-b0e5-460d-937c-9fcd0c98f2ae",
    value: "AGAFAY",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "bc5da928-0aa8-40d1-a316-56076c71caad",
    value: "AGDAL",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "0315bd3e-5da3-49a0-94b4-444791c845e0",
    value: "AGDAL RIYAD",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "4ad1e369-680b-4a00-acbc-9abcea8e3518",
    value: "AGDZ",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "10072b02-ab52-4c86-98d6-45bfca849788",
    value: "AGHBAL",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "be1d17ef-16a3-4bc1-a12c-eb482c5524c6",
    value: "AGHBALA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "eb9d7b7e-f5ed-4428-b40b-57d498093f87",
    value: "AGHBALOU",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "f83d9d6d-1603-4df4-9f5e-4436950626b1",
    value: "AGHBALOU AQORAR",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "66acf3dc-2c6e-4900-9039-18198332c844",
    value: "AGHBALOU N'KERDOUS",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "c2f19ea2-a1cb-416d-9ee0-e936f4bdc4ff",
    value: "AGHBAR",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "aaa445b4-3dcc-43a0-9049-3b008f08f645",
    value: "AGHOUATIM",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "a19ade6c-b12f-4b53-98e0-c51b6254c1a7",
    value: "AGHOUINITE",
    province: "a87a5c26-8774-4834-95d7-a6d2650b6080",
  },
  {
    id: "80bc6dd2-de5c-4073-a87c-a621913a0767",
    value: "AGLIF",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "58cfcdd5-e435-4c1f-809b-a600dbaae147",
    value: "AGOUDI N'LKHAIR",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "37d267e5-274f-4ec3-969e-6f2a3c90d4da",
    value: "AGOUDIM",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "e37eabfd-6424-4798-a0b5-bc962db49012",
    value: "AGOURAI",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "714647c0-d049-480c-bf5b-302dd5a864b1",
    value: "AGUELMAM AZEGZA",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "81e42800-f552-4bf8-94ba-394f830f5655",
    value: "AGUELMOUS",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "f3d9a864-b013-4cc5-b944-7cee1cf055db",
    value: "AGUERD",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "fb5e5a17-2828-4692-a4c0-fe10c14f2d66",
    value: "AGUINANE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "829edaa5-e5b7-417e-9704-5724abc28ef1",
    value: "AHDIL",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "f75c7208-2586-4a0e-9e2f-ed65fbbb45bf",
    value: "AHFIR",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "db1725a5-d72b-4bad-b1bc-b91c24981740",
    value: "AHL ANGAD",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "f859a20f-de19-4d0f-ade7-bba08e1cb02f",
    value: "AHL OUED ZA",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "4260754a-9d86-4818-8cdf-5f19263b6bf6",
    value: "AHL RAMEL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "092e1ba6-e890-440f-a578-60384e5fd644",
    value: "AHL SIDI LAHCEN",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "097786c4-d7f7-4aec-8385-b5d9fc920fca",
    value: "AHL TIFNOUTE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "72a345e0-2410-4f56-b971-b38a7fe83977",
    value: "AHLAF",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "58ed12ba-4cf0-4398-82ee-3e629f570cc5",
    value: "AHMAR LAGLALCHA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "3c21ea82-a687-40cf-a1b3-cd1bc92924c5",
    value: "AIN AICHA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "5eb5b5fd-0e1e-48ef-a193-46a04149942f",
    value: "AIN ATTIG",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "04a5daac-44b8-4ab5-b821-bf9910514967",
    value: "AIN BEIDA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "e9fe3699-d0ab-464f-8364-9700822b950d",
    value: "AIN BIDA",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "a772258a-3955-4035-b692-75e785c8c19d",
    value: "AIN BLAL",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "d8fad233-536f-4499-a7e6-deaf3c28d596",
    value: "AIN BNI MATHAR",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "822a6c50-0a05-4f99-b6d7-e63f452a7a29",
    value: "AIN BOU ALI",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "aa013eb8-af6e-4819-bf07-f342f091f7b0",
    value: "AIN CHAIR",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "892c007b-1f8e-4a32-a716-81d4c7c81381",
    value: "AIN CHEGGAG",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "f1aa6790-0c1a-4e8c-a97f-11172d825241",
    value: "AIN CHKEF",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "d14e5ebf-bffb-44a1-8e5c-023bf3242238",
    value: "AIN CHOCK",
    province: "26ff9ead-8111-4a79-b924-5491120b9297",
  },
  {
    id: "7fe316a3-51e7-4157-9afd-c522fef15b2d",
    value: "AIN CHOUATER",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "8ba2acb1-663f-4748-a44a-91e63d4bf74f",
    value: "AIN DFALI",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "bb21ac23-1a52-4fcc-95fb-833d13c0c9da",
    value: "AIN DORBANE - LAHLAF",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "e67a1aec-5cd4-4ebe-a053-95fd2b020e00",
    value: "AIN EL AOUDA",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "e1cdea26-131f-487e-ad65-c5bd7040988d",
    value: "AIN ERREGGADA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "9c627c87-814d-455d-8238-8982218cb4c0",
    value: "AIN HARROUDA",
    province: "808202e9-de03-44ff-bed9-b0829eae83d8",
  },
  {
    id: "5957ae58-7110-45aa-b9ac-9a4d409726a3",
    value: "AIN JEMAA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "4d102b4a-b8cc-4038-8f92-4ce54e4039c9",
    value: "AIN JOHRA - SIDI BOUKHALKHAL",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "3470e603-e0b0-4ab9-a89c-9e41909ee3ab",
    value: "AIN KAICHER",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "3e913578-e2a3-4267-9585-8d866e0f123b",
    value: "AIN KANSARA",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "163b3b73-2d8e-4ef2-b719-2e113c3f5c66",
    value: "AIN KARMA-OUED ROMMANE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "b86c63ed-b9a9-467e-82ab-b15af793489d",
    value: "AIN LAHSAN",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "02627a10-2d54-4484-ae57-7459f97bba2f",
    value: "AIN LEGDAH",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "43c25da6-3609-4530-b0a5-965899c981f1",
    value: "AIN LEHJER",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "bd02002c-09d7-4f5d-8452-2e5ac00f2f65",
    value: "AIN MAATOUF",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "df3532a3-7e8b-4c40-b7d4-21543c0d3441",
    value: "AIN MEDIOUNA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "6495e600-8afd-4d19-a6b5-f182a7ba23ac",
    value: "AIN ORMA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "eec1bba5-944a-42e5-a5a2-edcf0358e509",
    value: "AIN SBIT",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "66ac4eac-fcfe-42b8-8744-5343825b3fae",
    value: "AIN SEBAA",
    province: "aa1204f3-85ae-4659-9e98-1e7a87d55d0b",
  },
  {
    id: "4ed47ec1-6cf3-4ee5-8245-0484a279ee12",
    value: "AIN SFA",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "cf1151ca-52da-41fa-b231-bc8d01fb8c2f",
    value: "AIN TAOUJDATE",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "910573a6-4e0e-4b19-8967-af86f0fec34b",
    value: "AIN TAZITOUNTE",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "b8896ed1-6fbf-43df-bbce-6e9f69c640f4",
    value: "AIN TIMGUENAI",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "8efc2f04-1aed-48bc-beda-f2076464a327",
    value: "AIN TIZGHA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "1e87b42c-0f88-4546-ba03-eef3b125da33",
    value: "AIN ZOHRA",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "9f5d161e-e415-4784-b521-e57c0f5524c6",
    value: "AIN-LEUH",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "9a7d8607-18a9-4663-848f-e867d7fbda00",
    value: "AIT AADEL",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "16214a9a-4dd0-470d-80dd-84df4b440499",
    value: "AIT ABBAS",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "f0d8887e-35e1-4caf-8d8f-c1ca1df4e391",
    value: "AIT ABDALLAH",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "b068e923-4529-4e10-a2e8-bcd058cd394a",
    value: "AIT AISSI IHAHANE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "2d28c17b-1c35-4455-80a8-33dba549e65a",
    value: "AIT ALI OU LAHCEN",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "a2727bac-2a51-43e8-96be-07128a6e63a7",
    value: "AIT AMIRA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "c2e0b5e9-b78f-4799-99e6-f4eb77662e17",
    value: "AIT AMMAR",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "675ce2fa-fbf9-44a2-acec-f9808286d641",
    value: "AIT AYACH",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "178d7b1d-9739-4860-ba7b-40162c3613c7",
    value: "AIT BAHA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "5d7246b3-ac00-45f3-9994-210f205ad40c",
    value: "AIT BAZZA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "e4b3b826-39fc-43d5-9752-5ff21d287fce",
    value: "AIT BELKACEM",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "952a8696-9633-48c7-a28e-6e349ec843f7",
    value: "AIT BEN YACOUB",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "f06959c5-b9d9-4314-9d32-8c866986c61b",
    value: "AIT BLAL",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "0e418ffd-0aaf-49be-91bc-4becdc8d4621",
    value: "AIT BOU OULLI",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "226a64d7-027f-4559-89e3-81fb71360edc",
    value: "AIT BOUBIDMANE",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "91ad8ea5-adcd-419a-831a-979640435374",
    value: "AIT BOUDAOUD",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "c8e763db-468e-4309-bb86-93f2e5b304e2",
    value: "AIT BOUFOULEN",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "ea5a625f-d9a6-4fb4-8049-b80df039e6e3",
    value: "AIT BOURZOUINE",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "2a80418b-e1fa-4621-a14d-076c41ef31fe",
    value: "AIT BOUYAHIA EL HAJJAMA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "2c2f7571-f7e3-471c-997b-772b308eef2b",
    value: "AIT DAOUD",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "5083f057-3719-41d1-a51f-a97332f97404",
    value: "AIT EL FARSI",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "e265586a-ab5c-43f5-9bd9-4797fa675504",
    value: "AIT EL MANE",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "fae9c377-c2d9-4eb0-9898-6cd250c35bd8",
    value: "AIT ERKHA",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "fdd786d3-cd73-4bf4-9c10-9df8daf5485d",
    value: "AIT FASKA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "b00f2809-9860-40ce-99df-011472a619f1",
    value: "AIT HADDOU YOUSSEF",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "f26fabf3-06d8-41a4-8b57-b2ea1faaee88",
    value: "AIT HADI",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "c87c62f4-cabb-4e2c-8062-e5f092748455",
    value: "AIT HAMMOU",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "d6feaa28-7e2a-4285-9b6f-58357cfeea5a",
    value: "AIT HARZ ALLAH",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "57341d93-b862-4739-9a4a-038766cf005b",
    value: "AIT HKIM AIT YZID",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "9295d80f-936f-4e27-ba9c-dd7039fa5ed3",
    value: "AIT IAAZA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "4c944386-cfab-4ab1-9e85-01c4264ea72d",
    value: "AIT ICHOU",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "114ee5ef-0e1d-4035-a84c-fb420b45f528",
    value: "AIT IGAS",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "dce0485c-6247-4268-ae36-e8e358c38d2f",
    value: "AIT IKKOU",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "b7d53ffb-334a-4bb5-acf5-de4ccdedf23b",
    value: "AIT IMOUR",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "23d7ba52-fa93-46ce-b08d-aadfca5e6389",
    value: "AIT ISHAQ",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "013e9e6d-80ba-4d2d-aa65-2aad25ce8136",
    value: "AIT ISSAFEN",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "210b48b3-3efc-44b6-8f99-faa2f1db9184",
    value: "AIT IZDEG",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "1698a62b-462e-4ecc-b0f5-e1634d71db18",
    value: "AIT KAMRA",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "2f21b55e-7529-4245-8717-44b07fbaefd1",
    value: "AIT M'HAMED",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "ebef1d11-6e50-4996-a92c-df6ed47d52ac",
    value: "AIT M'ZAL",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "78664494-f075-403d-b152-4100e66e2aea",
    value: "AIT MAJDEN",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "b5b3fd98-868f-4a28-ada3-71b68dd6740f",
    value: "AIT MAKHLOUF",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "0492ac80-c00d-4124-bd95-b53b183c57b0",
    value: "AIT MALEK",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "703a1733-16a9-4663-a28d-089484b50294",
    value: "AIT MAZIGH",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "48aa6f50-8079-4504-8ccc-7c8da7bb5189",
    value: "AIT MELLOUL",
    province: "d995796c-51dd-4471-909f-9d1510057344",
  },
  {
    id: "2dbf4e03-cedc-432f-b53a-47eb8ac9eb0f",
    value: "AIT MILK",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "24629906-9b5d-4c66-a10a-177eb0c1cb13",
    value: "AIT MIMOUNE",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "f5555d70-86cf-43f5-a065-93ef4c3f6306",
    value: "AIT NAAMANE",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "cd2fa418-0861-4f8b-b081-18c791510c21",
    value: "AIT OUAARDA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "11d1fd23-d9a2-406e-a06c-1e2858b49b8a",
    value: "AIT OUABELLI",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "325028e2-31a6-446c-94ce-b7fa2590aefc",
    value: "AIT OUADRIM",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "51382b8e-1d16-4785-96ba-7ec6963d5be4",
    value: "AIT OUAFQA",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "8d672378-ca97-4629-bcf7-64178cdcc444",
    value: "AIT OUALLAL",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "abf16e68-630f-4bc4-98e4-2dbd9e04c8d3",
    value: "AIT OUASSIF",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "f2391270-9cc6-4d26-9d54-548dc3918d44",
    value: "AIT OUIKHALFEN",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "83d15b97-0290-43dc-87b2-cfd8030a165b",
    value: "AIT OUM EL BEKHT",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "67193f71-bcf6-4652-b48b-b0c044d259f6",
    value: "AIT OUMDIS",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "a41a3022-1592-4149-945a-77d7f264243f",
    value: "AIT OUQABLI",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "b6014af8-8b35-4220-8ce8-11e8a50a050f",
    value: "AIT OURIBEL",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "af7be5b6-0d45-4651-87d3-0e9c86c8f28c",
    value: "AIT OURIR",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "daa44a5e-31f1-42ef-9369-8b8b55929b9f",
    value: "AIT SAADELLI",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "4044f87e-a2ff-4298-b5a5-a1165695374e",
    value: "AIT SAGHROUCHEN",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "e79a5ec5-eead-442d-9ad8-73ec1e339087",
    value: "AIT SAID",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "284ceee9-2f50-4c2e-a3a6-a412e202836a",
    value: "AIT SEBAA LAJROUF",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "3179d8a9-ecab-444d-bcec-a7ccc6f2642f",
    value: "AIT SEDRATE JBEL EL OULIA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "7b1b33c6-d18a-47d1-bfe1-061ad8b971e2",
    value: "AIT SEDRATE JBEL SOUFLA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "3a573e28-84b2-40ad-bef0-09b43d356ad7",
    value: "AIT SEDRATE SAHL CHARKIA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "0fbbf177-a7ab-46cd-8cfc-33f39bc38f26",
    value: "AIT SEDRATE SAHL EL GHARBIA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "4c00a977-be3c-4f65-a26e-c8fe21b9fe26",
    value: "AIT SIBERNE",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "d59a36ec-2f1c-4b63-b650-b93dc6bb1791",
    value: "AIT SIDI DAOUD",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "6f3b1122-72ec-44e9-a11b-9b0ba22e0e9c",
    value: "AIT TAGUELLA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "51ef7ca3-0f26-4723-9bd8-20077bf598f9",
    value: "AIT TALEB",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "7fb7803f-74c8-48f1-8e58-b1af7c9fd840",
    value: "AIT TAMLIL",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "eacca76c-90d9-453a-bd93-eb53ac57ee28",
    value: "AIT YAAZEM",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "c033bdb7-7117-406d-8cb9-a5ed730f30b9",
    value: "AIT YADINE",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "57ae18ce-7ae8-4dd5-b858-5823eb806d0b",
    value: "AIT YAHYA",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "254a54a1-2888-4135-93b0-509d518658e4",
    value: "AIT YOUL",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "545f9791-ffd4-481a-8b61-f6705b79bd06",
    value: "AIT YOUSSEF OU ALI",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "85e6d70b-9396-45e3-8f24-3a2725731c39",
    value: "AIT ZINEB",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "7424b68f-2fc0-4348-a047-46908c59cbb8",
    value: "AIT-HANI",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "5af1659f-4b45-4864-8075-b7e756f5c38c",
    value: "AIT-MAIT",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "c3835a41-161d-4a74-b0d6-9aa8a8cc011b",
    value: "AIT-OUALLAL",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "6bde10e5-4633-4714-bc61-876ac5d03e76",
    value: "AJDIR",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "1f9a1efc-8a51-45ff-be90-4fb3ec4598ae",
    value: "AJDIR",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "2aabb29c-f536-4ecf-8b32-fd301e476d49",
    value: "AKARMA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "151bd665-3a66-4e73-ad3f-b8bf7ded5164",
    value: "AKHFENNIR",
    province: "053e7f0d-6812-4048-8f9a-fcfbb3323fd5",
  },
  {
    id: "72aab20a-2305-4316-8678-32a3afa83d0b",
    value: "AKKA",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "3bbd99ec-8fe0-4059-b3aa-9beff2606187",
    value: "AKKA IGHANE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "3edb9c30-e4ea-462c-b879-186c1691eb69",
    value: "AKLIM",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "55d570f3-d53a-40e4-9111-83f3d64499c9",
    value: "AKNOUL",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "c94ee914-ecc6-4e2e-8324-c497a10a6bc2",
    value: "AL AAROUI",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "9890d45d-587a-47f8-8e3c-d2896aaf4a82",
    value: "AL BAHRAOYINE",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "7adaa45f-0c69-4de0-9d50-4e5224370fd5",
    value: "AL BARKANYENE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "b552e885-5cb6-4f3c-95db-8fad7938503d",
    value: "AL FIDA",
    province: "940b0295-fec6-4191-9529-20bca7457f56",
  },
  {
    id: "928dce3b-bb24-40bf-807b-4249f4879bf0",
    value: "AL HAMRA",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "1a8461da-9181-46dc-a0a8-8d71508e19e2",
    value: "AL HAOUAFATE",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "a13ba1f4-aaa0-4d0e-a993-f7bf9c99b96e",
    value: "AL HOCEIMA",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "58cd3d55-0148-4e28-8e22-0880cf021a44",
    value: "AL KHARROUB",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "604fb4d6-af81-4604-a156-6ab864525e2a",
    value: "AL MACHOUAR STINIA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "9efdea51-5ffc-4904-9ccd-8f7a173d47f3",
    value: "AL MAHBASS",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "3d6710be-6f0f-4128-af15-d9566746f828",
    value: "AL MAJJATIA OULAD TALEB",
    province: "442089d7-5cb2-4bba-844e-4710c4b9b0b1",
  },
  {
    id: "f007fda8-ba90-4b89-8bbb-ef195e576d69",
    value: "AL MANZLA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "e4f983e5-38eb-4579-afa6-15a389d3b908",
    value: "AL MARINIYNE",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "80d4e4e6-21dc-47eb-b0d3-e722d1f4569e",
    value: "AL OUED",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "4c2502f3-d5bc-43a9-969b-9f51cb75d4b8",
    value: "AL OUIDANE",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "f0308816-06a0-42f0-8ad9-cd1e488f0ac8",
    value: "ALLOUGOUM",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "1f34eeaa-974b-4838-9305-fb2a9888804b",
    value: "ALLYENE",
    province: "2241f2a3-365b-47cc-a0f8-b11b278c2b48",
  },
  {
    id: "a501f591-c827-4e3e-8874-7e46e7e4250d",
    value: "ALMIS MARMOUCHA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "ee1b492f-083a-4150-9623-ae4cd237d2ab",
    value: "ALNIF",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "e462bf1e-4ec5-48c5-bbdd-8e2195dad4f3",
    value: "AMALOU",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "e0a64277-4f16-420a-833d-fbea9b7b3a56",
    value: "AMEJJAOU",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "d3796ba5-10c9-4446-bb19-33340f091dae",
    value: "AMELLAGOU",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "1da638a6-39a6-4566-94ae-35c694af827d",
    value: "AMERSID",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "bb1c915b-0a29-4d7d-83ad-9a77b57e4c48",
    value: "AMERZGANE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "0319e361-c426-4ea4-8e79-07fc1052ec4a",
    value: "AMEUR",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "ce4eb9dc-6c67-41aa-a630-df128c209848",
    value: "AMEUR CHAMALIA",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "d2e639c5-bf7c-436f-b6b9-093eaf345cdf",
    value: "AMEUR SEFLIA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "bb77c2a9-c5fe-48a8-8a4c-d71c92f20e90",
    value: "AMGALA",
    province: "db740e29-39e6-4362-8adf-bf6963a0527e",
  },
  {
    id: "61dd2e10-4429-4690-ab09-0588e8b429db",
    value: "AMGHRAS",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "2d0815bf-9092-4d8b-94cf-e7461cf4b525",
    value: "AMIZMIZ",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "e9ff81f9-7ab9-42ed-b2bb-2c6bd0d0609d",
    value: "AMMELNE",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "dcc1458e-64df-4b7b-9bd2-5d251155f450",
    value: "AMOUGUER",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "a6235d1f-ae6f-4a9e-91c2-d1bd65aed527",
    value: "AMSKROUD",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "22b849af-7ff2-43bd-a9fe-c7a4777595dd",
    value: "AMTAR",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "5d2cda8c-f124-4a60-861d-030b44b8f131",
    value: "AMTDI",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "cd79849b-7ea8-4448-b394-b2959be135d7",
    value: "ANEMZI",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "23fbabfd-39a1-4d31-9278-b4b2a44826f0",
    value: "ANERGUI",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "c757cb7a-cca0-437d-ab5f-b99ca4c51333",
    value: "ANFA",
    province: "3eaec44b-b4fb-4105-bb7b-a819e227763b",
  },
  {
    id: "51151069-961c-47cb-98de-5e0b09f4b675",
    value: "ANFEG",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "f69d386f-7400-4d97-a623-2494e0cc9710",
    value: "ANJRA",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "1ee1bc12-284b-4ddb-8b5e-1c85499ea006",
    value: "ANNAKHIL",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "aef25dea-c52a-4cbb-a6f5-a6cd117aa943",
    value: "ANOUGAL",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "34e6099b-7c20-42de-b5b8-a78a99c715fc",
    value: "ANZI",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "9b88dd70-ec16-4614-ade6-340a87cf50c1",
    value: "ANZOU",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "6da7427d-0283-416a-8fd2-b2ab99dd4160",
    value: "AOUFOUS",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "8b85b8ef-f512-4953-92f7-4d572d4210f9",
    value: "AOUGUENZ",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "5cd7e947-44a4-4c8e-a359-8d395407f773",
    value: "AOUINT LAHNA",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "a9b4b093-22c5-435d-af01-d7e615a9d541",
    value: "AOUINT YGHOMANE",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "bb956d9e-b3db-4946-9cf1-c4e4bcc27e40",
    value: "AOULOUZ",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "90e66dad-b3e3-4c43-8688-46c9f5a481fc",
    value: "AOURIR",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "46084363-e24d-44ae-8cf9-bc9576b8e017",
    value: "AOUSSERD",
    province: "a87a5c26-8774-4834-95d7-a6d2650b6080",
  },
  {
    id: "2aec0504-ce2f-441d-9099-e5f44f104f1b",
    value: "AQSRI",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "7ac785eb-1e2b-4c8e-a781-e7d1be68886c",
    value: "AQUERMOUD",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "b8f61700-b88a-4902-94db-c3b872590316",
    value: "AQUOUASS BRIECH",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "b9d06d23-b81c-4872-9eb3-c58a42450b1c",
    value: "ARAZANE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "bcc7ecb5-09db-43d3-8599-a68178747956",
    value: "ARBAA AIT ABDELLAH",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "425b23f3-6225-4223-8d79-07b56fa2afea",
    value: "ARBAA AIT AHMED",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "47f27baa-f44c-4605-917e-ae6db6270dc6",
    value: "ARBAA RASMOUKA",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "7dc3f85f-0287-4051-b1dc-a03740ecc38b",
    value: "ARBAA SAHEL",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "0e8db9f3-212e-43f6-828e-6d2e5b318b72",
    value: "ARBAA TAOURIRT",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "b9479d48-99dd-4a88-9d39-b08c31b36f50",
    value: "ARBAOUA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "5606c2b9-4b59-43eb-8017-dd8a8d1a45e7",
    value: "AREKMANE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "070a5a63-99e2-4f59-8c61-eb8c81a40942",
    value: "ARFOUD",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "a3eafcbd-8a41-4cd0-80ad-abf4cc7f8ef9",
    value: "ARGANA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "eb174bb2-5d7a-4fdf-b8e1-977ed5d92825",
    value: "ASJEN",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "990c9dac-8ec4-4b8a-95b5-7b26fdf7eb18",
    value: "ASKAOUEN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "6895a3e7-4b5e-46a6-9b98-5adb37eb16c7",
    value: "ASNI",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "a0e14450-6799-46b4-9042-4be996d32c3c",
    value: "ASRIR",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "d3916d08-f630-4b82-8763-1932283f5ba3",
    value: "ASSA",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "86351951-ba72-4ef4-8001-82c7646e41fc",
    value: "ASSADS",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "e4c3330b-93dd-49e5-ac2d-c4934712e3df",
    value: "ASSAHRIJ",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "6820099a-4b7a-45bf-b9b0-639cfe2e0367",
    value: "ASSAIS",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "6430551a-d5e4-4b12-a813-0a18613fc75a",
    value: "ASSAISSE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "f83bbd20-ee9a-4296-8271-a135d2e3ee91",
    value: "ASSAKI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "6fcf0dc2-0f65-4421-ac16-a8d5e2a72a95",
    value: "ASSEBBAB",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "9874feb9-9f17-40d6-9cc3-4cfeabfb132e",
    value: "ASSIF EL MAL",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "97f9d917-c4ad-4265-afad-806f71f1cb3a",
    value: "ASSILAH",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "5aee1c1e-fd01-4049-92d9-59c5a4e9645b",
    value: "ASSOUKHOUR ASSAWDA",
    province: "aa1204f3-85ae-4659-9e98-1e7a87d55d0b",
  },
  {
    id: "e5a1a560-a7e9-43b3-94d6-c5f426ab88cf",
    value: "ASSOUL",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "344bd920-3d18-4452-a02c-9b678078b803",
    value: "ATIAMIM",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "6865c6e1-a5ff-45d1-be4b-8019776841cc",
    value: "ATOUABET",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "05d2f53f-f6dc-4fb5-aec0-560e84213d84",
    value: "AYACHA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "b7d59b41-2de2-408f-b637-f756756081c3",
    value: "AYIR",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "a72300b2-a6ab-4bcc-879c-0e4332db0151",
    value: "AZAGHAR N'IRS",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "56fc4e11-2611-48b5-8e33-22aa3b2b0d2e",
    value: "AZEMMOUR",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "af866830-eb18-4847-9a41-2d778433b752",
    value: "AZGHAR",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "b60fd29f-9676-450b-8d98-cf4c408a1b91",
    value: "AZGOUR",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "78d07e84-f1f1-4563-ac63-b0b1e755711f",
    value: "AZIAR",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "534514e9-0651-4469-b4fc-87eba21ba57b",
    value: "AZILAL",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "49003081-347e-4eaf-a4f1-13a2f2153b9e",
    value: "AZLA",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "877faf35-f7f1-4cce-9691-36d8674d0d04",
    value: "AZLAF",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "a3b4e4e3-ae0a-41ff-a2b7-5b85a171a462",
    value: "AZRAR",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "7937fc4c-a5b0-45e3-ba91-5e878b3ce391",
    value: "AZROU",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "33b8b821-a33b-496e-a4b7-02d6b79c62ea",
    value: "AZZABA",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "93701e65-0017-45d4-b334-26933d47b56e",
    value: "BAB BERRED",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "85ea2ccb-5fa9-4ff0-936a-5f5084bca298",
    value: "BAB BOUDIR",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "97c5ae34-7cf9-4cf0-a757-73ebbb3a9f1a",
    value: "BAB LAMRISSA",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "8889a48b-a035-465a-b01f-ca999b962f7c",
    value: "BAB MARZOUKA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "ae4faf0f-1476-48f6-a033-ea5068d1c287",
    value: "BAB TAZA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "987b1651-0f2a-4d61-bd63-babcee51b269",
    value: "BAB TIOUKA",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "462576a1-15ad-4de9-8e55-1306f0cb683e",
    value: "BAHHARA OULED AYAD",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "2709b2d9-6fe2-4d60-a700-0478d2fd184c",
    value: "BARKINE",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "3e0adace-e9db-4c95-a4dd-e33f4e259f1d",
    value: "BEJAAD",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "3607ed39-a96d-4f31-b9a1-5113ab71ffa9",
    value: "BELFAA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "ef474931-9115-4dfc-9dd8-c492c3641766",
    value: "BELYOUNECH",
    province: "2241f2a3-365b-47cc-a0f8-b11b278c2b48",
  },
  {
    id: "ef474931-9115-4dfc-9dd8-c492c3641767",
    value: "BOU AHMED",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "924ebc25-ba0d-4f5b-a9c4-a6f41f087a30",
    value: "BEN AHMED",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "264f3db3-7099-426c-a46f-c1448dd66eaf",
    value: "BEN GUERIR",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "aaa3289f-303f-4eda-a65d-a69a54b4f544",
    value: "BEN KHLIL",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "71e65548-401f-4400-998d-daea48c09fef",
    value: "BEN M'SICK",
    province: "2051094d-aa42-4689-8649-35b47e204bf4",
  },
  {
    id: "75fe1ef8-29c9-4322-8709-b4dcba35a0cc",
    value: "BEN MAACHOU",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "165db9d2-91c9-4e1e-9757-356ba230270c",
    value: "BEN SMIM",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "3d9c5bfe-2fd9-488d-b866-0821c860def8",
    value: "BEN TAIEB",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "6f60b525-cf54-45f6-bb50-2e9c9460b7c0",
    value: "BENI MALEK",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "0b2e5d0f-d9ee-448e-854b-b4a3c778764e",
    value: "BENI MELLAL",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "ce369613-6e1a-49ee-9ec3-5c006cab3a25",
    value: "BENMANSOUR",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "3aaf1813-3eb5-4250-a626-29305fd423c1",
    value: "BENSLIMANE",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "f862bb34-d4a0-47a7-bd1f-28a17c9a2a43",
    value: "BERKANE",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "ad46760a-6fb1-41aa-8ba5-390233864f00",
    value: "BERRECHID",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "49d02c09-33dc-4231-8f49-6b488dd3b065",
    value: "BETTANA",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "cfe4396c-ed3e-46b7-9861-d069de947482",
    value: "BGHAGHZA",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "c1c65688-7d6d-463a-8f09-f741c732280b",
    value: "BHALIL",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "5879b036-466e-490f-885d-653162a8ea87",
    value: "BIGOUDINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "931e5d5b-6458-453f-b717-54a342de0bcd",
    value: "BIN EL OUIDANE",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "390aaa96-0a6a-416b-baae-ab8d6afa46c1",
    value: "BIOUGRA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "a2676d9d-609a-4523-8d07-e28f7ebf2d16",
    value: "BIR ANZARANE",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "e47599ac-7826-4a98-8450-26180c0b3988",
    value: "BIR ENNASR",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "b3c2463f-e9cf-40c6-b64b-e5a362b6d4d0",
    value: "BIR GANDOUZ",
    province: "a87a5c26-8774-4834-95d7-a6d2650b6080",
  },
  {
    id: "3e13caca-bd57-4ccf-946a-265949359644",
    value: "BIR MEZOUI",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "fbcedcc5-8e5c-4e31-a41e-e4989ac8b556",
    value: "BIR TALEB",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "4a5db432-46f2-49c2-ac49-497f32fb165e",
    value: "BIR TAM-TAM",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "8338ca8a-2205-4550-90e5-8e6c9bde9f61",
    value: "BITIT",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "69cd0142-616d-4f6f-bb07-5d2f487d0152",
    value: "BIZDAD",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "2c8aee0d-8692-4470-96fc-1334d5cd7690",
    value: "BLEIDA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "8a17d2b5-0365-4378-b395-2e1649c2dfcb",
    value: "BNI A'YAT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "90e9ffe7-db37-485f-9a49-2cedd59daba8",
    value: "BNI ABDELLAH",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "94cb43e3-8151-46b4-ac7e-9915edd7faee",
    value: "BNI AHMED CHERQIA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "caffcbc7-9032-4884-a0c7-ea46507bb649",
    value: "BNI AHMED GHARBIA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "18c34bff-2946-4108-abdd-fbfa3f92a1ba",
    value: "BNI AHMED IMOUKZAN",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "d996442b-0e94-420d-a74b-d62ac346d780",
    value: "BNI AMMART",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "c76bf4bf-bbf3-4247-ab18-63eb5ea4cc26",
    value: "BNI ANSAR",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "e6fe8bf7-7d03-41d7-bee2-1e4d60b4aa5f",
    value: "BNI AROUSS",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "1652628a-27a6-422e-82e8-f65335f82165",
    value: "BNI BATAOU",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "42b64761-cdd9-4f66-80c6-4fac0a348cfe",
    value: "BNI BCHIR",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "d1eecc1f-4895-4ef4-a02a-16fcadcb7291",
    value: "BNI BOUAYACH",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "f50d2ce0-d3b3-4069-b66e-edf07988b460",
    value: "BNI BOUCHIBET",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "d0c6083e-9d8b-4cef-8acf-737a911eb5b3",
    value: "BNI BOUFRAH",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "e1dcbeb7-0a0a-43cf-8b04-5eaba1e11c67",
    value: "BNI BOUIFROUR",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "a17a2631-28da-4ae7-a21d-6da424761eda",
    value: "BNI BOUNSAR",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "ff289a13-f39c-4e38-98b0-60ad48e2b5ac",
    value: "BNI BOUZRA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "eef75cb4-60d6-4ecf-a880-87f46d8187f4",
    value: "BNI CHEGDALE",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "dc625cc3-7246-4e5f-a866-d100c29d1aae",
    value: "BNI CHIKER",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "91086801-11df-41ed-a162-07944f12016e",
    value: "BNI DARKOUL",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "23f545af-7fda-414c-bc08-32d779a8884d",
    value: "BNI DRAR",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "30569956-fdb2-4b64-91a5-ad6e5d58290c",
    value: "BNI FAGHLOUM",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "15422bad-0257-4393-8091-91635222233e",
    value: "BNI FRASSEN",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "ff5ff9a1-d4d0-4aa2-ba79-4fc12421fd41",
    value: "BNI FTAH",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "4bf36207-8417-4095-a67f-87db8f6bc3c3",
    value: "BNI GARFETT",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "70715331-cc8e-4a37-b01d-959ba9770559",
    value: "BNI GMIL",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "5619963f-d183-42b2-ae39-d4ddf91f0963",
    value: "BNI GMIL MAKSOULINE",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "1d4f68db-3e02-4bc2-a14f-724975186b3f",
    value: "BNI GUIL",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "e820059a-3db5-4db2-991f-06c8e9a3796d",
    value: "BNI HADIFA",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "47a4c54a-2d8a-4aea-9a39-b40af7f7778d",
    value: "BNI HARCHEN",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "458bf8e4-9e93-474f-b0e9-24926c677563",
    value: "BNI HASSANE",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "5ccf6990-47ce-4c20-96ea-081d0ffd7032",
    value: "BNI HILAL",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "1a4aaa8b-713b-4e6b-9020-d26ac3743747",
    value: "BNI IDDER",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "4e46948b-829c-461d-b5bd-a61cd55d15e9",
    value: "BNI KHALED",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "7ec0d29d-3d17-4285-850f-24ce83b1a7f7",
    value: "BNI KHLOUG",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "d190589b-7e44-4c9b-81b9-fa5ba6bd5b82",
    value: "BNI LEIT",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "ece8174c-74d7-4ccf-9c1a-cf95ac7e7e51",
    value: "BNI LENT",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "34d1e3e6-7d63-4cbc-9952-6da9f88eee9b",
    value: "BNI M'HAMMED SIJELMASSA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "22ead888-e633-4ba5-b524-6cdcf93e3d22",
    value: "BNI MAKADA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "5cee7f8a-c6ea-473a-a994-7e5decaf0928",
    value: "BNI MANSOUR",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "75a5f2b0-6d73-454c-a689-84e9968f8d99",
    value: "BNI MARGHNINE",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "51b73e74-e69b-41c2-b7fe-d26b1b2ef587",
    value: "BNI MATHAR",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "230f6bcb-5e05-4491-93e2-c1c50ddd3ea9",
    value: "BNI OUAL",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "14a3b62a-2f86-4274-ac66-612999a59a76",
    value: "BNI OUKIL",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "d6e6ce29-cff3-44d8-b5d2-4392660964e1",
    value: "BNI OUKIL OULAD M'HAND",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "43422c3d-e291-49c5-9005-755d39bbaa5e",
    value: "BNI OULID",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "aa806f4d-a8ae-4688-b49e-7d4884f4f313",
    value: "BNI OUNJEL TAFRAOUT",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "1d0ef48a-5614-4fab-926f-217358dc110a",
    value: "BNI QUOLLA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "88d809cd-0d6c-490c-92e5-26c453286455",
    value: "BNI RZINE",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "6a694c8c-66e6-4a5f-b282-85060414835f",
    value: "BNI SAID",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "2b53341a-d2be-4117-8135-51185c792de8",
    value: "BNI SALAH",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "dc31c095-1e25-4f7c-9a86-6e2b7364109c",
    value: "BNI SELMANE",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "845fdd2d-0b8c-4535-9a5f-c631e4d5a242",
    value: "BNI SIDEL JBEL",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "eb0ffa87-7f22-44a2-9683-e32fab360bd1",
    value: "BNI SIDEL LOUTA",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "66b9bdd0-4b98-40d4-938c-ce0022cff0bb",
    value: "BNI SMIH",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "d7cfbe47-2790-43d3-8b28-5ba476777f53",
    value: "BNI SMIR",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "e4e5e95a-fb5d-4726-8ba2-a4ae0bb65e4c",
    value: "BNI SNOUS",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "0b46ae11-1b4f-4dc7-8358-9d6e427bc41c",
    value: "BNI TADJITE",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "5c0044d3-0a3d-4909-ba4d-b43885a80ce7",
    value: "BNI TSIRISS",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "9a9a3836-b470-4d15-8d58-674cd5245612",
    value: "BNI YAGRINE",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "97af23b7-d144-4812-90f0-ac0e8120f28e",
    value: "BNI YAKHLEF",
    province: "808202e9-de03-44ff-bed9-b0829eae83d8",
  },
  {
    id: "03bd6019-e6ec-453d-9d62-0a6c1f33e9fe",
    value: "BNI YKHLEF",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "d964bf67-2eb7-4626-918c-0bd743b9696e",
    value: "BNI ZOLI",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "df908975-eb1f-4a6f-a725-0572b0a60d32",
    value: "BNI ZRANTEL",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "8fa08f4f-2596-4053-bdd3-2dffd9023a76",
    value: "BOU JEDYANE",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "b398846c-3c85-437d-88da-5baeaade2edc",
    value: "BOU-AZMOU",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "d442b6f0-c034-4a51-9fa4-d36d77ad0d10",
    value: "BOUABOUT",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "af4ca6c2-d06c-40b6-b326-ae7f13bcf0b8",
    value: "BOUABOUT AMDLANE",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "608e4a5a-1ac7-49aa-883e-8348c7fbd243",
    value: "BOUADEL",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "9513120c-a149-4631-8aea-29fbbaafc364",
    value: "BOUANANE",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "018672bb-49be-46d7-b193-b02bab22ee57",
    value: "BOUARFA",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "b1e4fc8c-92a8-45e9-b203-746c3c5732f0",
    value: "BOUARG",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "3311747b-46f6-4895-8ece-ad12a29c5d7f",
    value: "BOUAROUSS",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "f78203e6-cdeb-4fa7-a2fe-3e8ce9506901",
    value: "BOUCHABEL",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "ab7b12d3-1804-40c4-be3f-7f5da25048f2",
    value: "BOUCHANE",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "36efc46d-66a9-470c-850e-4a49efe7a829",
    value: "BOUCHAOUENE",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "0472dfac-f1c4-40d8-87f5-3be784c5376f",
    value: "BOUCHFAA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "577a3d57-bdf7-485f-b3ac-f6c5d3ffe25c",
    value: "BOUDINAR",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "5f2acfc1-5da9-421e-bb67-4c478428aa0b",
    value: "BOUDNIB",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "2f43597c-356e-416b-bd2c-86f20ae4457e",
    value: "BOUFAKRANE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "8823da40-0c26-4f0d-8abb-bf9e7c8db5d9",
    value: "BOUGHRIBA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "50051bc9-adc7-42cb-91f6-af20f4a04275",
    value: "BOUGUARGOUH",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "624df073-aabb-4cff-b539-62b422923a3e",
    value: "BOUGUEDRA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "af6e3248-b49a-4a20-be6c-407b11a80476",
    value: "BOUHLOU",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "4f32c37b-c92e-42f6-8141-a2ab11bc8393",
    value: "BOUHMAME",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "1d2808f7-377c-4816-bbef-1dce66e874cc",
    value: "BOUHOUDA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "cf0f0426-0c7d-4609-b4e5-cba58b755aa4",
    value: "BOUIZAKARNE",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "fbc996b3-05b7-4960-a7b0-0d6eea03abea",
    value: "BOUJDOUR",
    province: "ae531a03-51c2-4701-8325-8cdc1c7f951a",
  },
  {
    id: "dcce261a-e549-43a4-a50f-b3ecd99b26ea",
    value: "BOUJNIBA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "0f03d82f-b7c9-4218-9e6b-7c0ac490e165",
    value: "BOUKHRISSE",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "95d8e6d5-8bea-4f39-bebc-d3713a9861aa",
    value: "BOUKRAA",
    province: "78ed197b-8a57-4962-ab15-07d0c24c4fc0",
  },
  {
    id: "dd405315-0d50-49de-9c0a-e1fa91ad0083",
    value: "BOULANOUARE",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "672717c5-7e4a-4865-b604-66d87944023e",
    value: "BOULAOUANE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "19215805-ff57-4380-b049-f0db8b09d191",
    value: "BOULEMANE",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "b55a303d-db3e-4f4a-b2e3-75908aa078e2",
    value: "BOUMAIZ",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "acdaadc4-ae24-4f97-bfb5-c58e2ba37e90",
    value: "BOUMALNE DADES",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "20910d45-12cd-432d-9ee1-b22c3ec98502",
    value: "BOUMERIEME",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "af57f794-fa25-4962-b0ea-aac2ff06f1fe",
    value: "BOUMIA",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "7c13657e-cb5d-4b1e-873c-f8ca3af2fdbf",
    value: "BOUNAAMANE",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "6577bc09-2f3e-452b-946e-3bf4b3601ed9",
    value: "BOUNRAR",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "43887a20-7dbd-4617-a0e6-a8322f36d912",
    value: "BOUQACHMIR",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "1f20d61c-1c28-4b85-9f31-3832dd78620c",
    value: "BOURD",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "f8c46227-1f1f-4836-9aae-f71a89fc4ec4",
    value: "BOURROUS",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "a2031a5c-4851-4ded-8280-9cdc32d5fca3",
    value: "BOUSKOURA",
    province: "05732887-a6b0-442b-b68b-57ef5cb798dc",
  },
  {
    id: "71cce503-6ea0-455c-857b-1f7453db6d02",
    value: "BOUTFERDA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "c9aa8ede-f9fe-44d7-ae2e-cdf2a17a9dda",
    value: "BOUTROUCH",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "546a4155-e1e2-44ad-b01c-bec26547ef05",
    value: "BOUYA OMAR",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "1ca6b199-d405-46d1-8f1c-cd5970a84ae7",
    value: "BOUYABLANE",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "78ef3cae-afba-43be-8a4e-a9a57089ebb3",
    value: "BOUZEMMOUR",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "8e7f23f6-6745-4752-9426-56522ecd6e4c",
    value: "BOUZEROUAL",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "36557d72-9710-46ff-ad16-c294b93428e4",
    value: "BOUZNIKA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "6a0a95dd-ddb3-42b8-a98c-ebd1db94c74c",
    value: "BRACHOUA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "339a220f-7bc6-473e-b88f-d04313295d3a",
    value: "BRADIA",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "9c207051-52b5-430f-a7cc-7585e09584d5",
    value: "BRAKSA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "3646ea5c-d74e-4f4e-99a9-57a103e38ffa",
    value: "BRARHA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "97f49430-e4b1-4c92-afe9-75ba9b87dca8",
    value: "BRIKCHA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "6b3c3459-33bf-4ffd-b0bd-239db0d09a39",
    value: "BSARA",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "125a6c06-faba-46e8-9e6b-86876ff168ec",
    value: "BZOU",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "f00668cf-aeb8-4eb0-865b-0bb9d480628e",
    value: "CASABLANCA",
    province: "e2b10e71-a67a-4987-8b4f-b110b4964e2f",
  },
  {
    id: "41e1c64a-12f6-4e39-b9b6-bc1001b32591",
    value: "CHAHDA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "0de6a5bf-851c-4ed3-8d1a-56cccfa51431",
    value: "CHAIBATE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "9925cc7b-270c-40c8-82e6-48d3c8418b68",
    value: "CHAKRANE",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "cd1d3077-33cc-4d95-9114-40e1e941a9ab",
    value: "CHARF MGHOGHA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "f95d6aee-1385-4033-99da-dab7fab1f998",
    value: "CHARF SOUANI",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "8da4b359-f571-4fd8-9c5b-b1a6a0f08885",
    value: "CHARQAOUA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "bb81230f-1933-4dd1-a1c5-dadce45b7046",
    value: "CHARRATE",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "5ea617ad-36bc-4b9c-96a4-efc1331bda78",
    value: "CHBANATE",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "e37636fe-93d5-46ef-8d24-d38ddc8181c1",
    value: "CHBIKA",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "46e23964-3da2-4e45-99ec-994fbcb038ae",
    value: "CHEFCHAOUEN",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "17802dc3-0a7e-40f3-a4ed-6158e4d891a2",
    value: "CHICHAOUA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "6e3de50b-4498-48e4-9ed9-f3a56fba4aa0",
    value: "CHOARA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "470b3321-80f8-4e48-abe4-216ad49f468e",
    value: "CHORFA M'DAGHRA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "cc7650bb-05d6-449b-bae4-4e81f46f9752",
    value: "CHOUAFAA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "360a21b8-9432-41f5-862d-8c281fdbd565",
    value: "CHOUGRANE",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "32e54370-8248-4704-a78b-a6daadb3bba0",
    value: "CHOUIHIA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "50003c7d-ed6a-4634-a184-a453bf6cf091",
    value: "CHTAIBA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "4403045f-c669-4c09-a3b3-4c7080128796",
    value: "CHTOUKA",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "5623b826-2bc4-4961-b5ae-95f2e76dff6f",
    value: "DAKHLA",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "8ba31e7b-c492-454c-89b0-582c73627fa1",
    value: "DAOURA",
    province: "053e7f0d-6812-4048-8f9a-fcfbb3323fd5",
  },
  {
    id: "2cc4b73a-aff3-4687-977f-cfbf3db00851",
    value: "DAR BEL AMRI",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "c4001cf7-f8ad-4047-854a-cbdcc52a4ee0",
    value: "DAR BNI KARRICH",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "e64609c3-ede7-4cac-b538-e7d1b5cd193e",
    value: "DAR BOUAZZA",
    province: "05732887-a6b0-442b-b68b-57ef5cb798dc",
  },
  {
    id: "40694da2-4597-443c-91d7-16dff1b8ddd4",
    value: "DAR CHAFFAI",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "156178b6-6df4-456f-8d70-5a3e9969b1c4",
    value: "DAR CHAOUI",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "89ed33e2-01a2-4805-af51-4c700e98bbcf",
    value: "DAR EL HAMRA",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "61e1e186-012e-4203-89cd-90a0c0a46656",
    value: "DAR GUEDDARI",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "3a410cf7-ec75-45ee-b070-18ff5e772937",
    value: "DAR JAMAA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "45da1c0c-76c0-412a-8395-4bd9ba8e9660",
    value: "DAR LAASLOUJI",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "a0a2b5fe-4b28-4b0e-a7dd-6a6461776039",
    value: "DAR OULD ZIDOUH",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "8e7c8c50-6312-4065-8a6d-cfa29573a8ad",
    value: "DAR OUM SOLTANE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "2350c636-a736-4fff-b22d-abd5ed75fa5d",
    value: "DAR SI AISSA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "c10e63c0-a00f-4055-b8f2-b6cc702119ff",
    value: "DAR-EL-KEBDANI",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "e8891e0b-bfd2-42db-9d87-c1d7c854f5ee",
    value: "DAYAT AOUA",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "46c80207-68b3-4045-b1ff-39a14fd16cb5",
    value: "DCHEIRA",
    province: "78ed197b-8a57-4962-ab15-07d0c24c4fc0",
  },
  {
    id: "721de145-f520-4829-93f2-e7b67daa6310",
    value: "DCHEIRA EL JIHADIA",
    province: "d995796c-51dd-4471-909f-9d1510057344",
  },
  {
    id: "68eacd21-dee3-4d75-9820-593ababc500f",
    value: "DEBDOU",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "67c777c2-bba3-4759-ae71-8abc790d31f2",
    value: "DEMNATE",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "0084c383-4c88-4775-a012-a98c128a83bb",
    value: "DERDARA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "84bc663b-52d7-449f-a205-b99214b53c75",
    value: "DEROUA",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "40215a55-9221-4669-9075-e70648ed8045",
    value: "DIR EL KSIBA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "e544a00d-f128-45d3-a1b2-86983364aeb1",
    value: "DKHISSA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "02e429b3-af8e-4c11-b8f0-1f41268a7885",
    value: "DOUIRANE",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "cfa8a794-cfe3-4b6c-8d73-15dfa9e22a22",
    value: "DRARGUA",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "ada15983-b8e8-4a19-bf2d-4ee1df3d8806",
    value: "DRIOUCH",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "dfc3148f-2929-4d6b-93f2-b0bd37da0a6d",
    value: "DZOUZ",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "32d7a0ec-87c7-4fdf-8db9-033b7af1f205",
    value: "ECH-CHALLALATE",
    province: "808202e9-de03-44ff-bed9-b0829eae83d8",
  },
  {
    id: "6bfbf50b-491f-4dee-ab6c-0ce70290d598",
    value: "ECHATEA EL ABIED",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "089c7db9-987d-48d1-a66b-81101d571335",
    value: "ECHEMMAIA",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "dc6e2d55-6754-4293-9525-38d9aedcaf07",
    value: "EDDACHRA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "26910b84-27cc-44a4-9129-fbdaacd8b784",
    value: "EDDIR",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "d6b9eb5b-2e75-4e0c-b13f-63f85ede7ff9",
    value: "EL AAMRIA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "32caa05b-0fc5-43f5-a1fd-424fa70c192a",
    value: "EL AIOUN SIDI MELLOUK",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "c603f12e-0855-4d42-a01f-9b7fced57da6",
    value: "EL ARGOUB",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "b67fbace-c71e-4712-bfc4-862308d4ef29",
    value: "EL ATEF",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "9fbd5950-48c6-4176-abd7-3e8a8c3048aa",
    value: "EL BEDDOUZA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "a00a88ad-fba1-4d03-ab49-cf747ee46b7d",
    value: "EL BIBANE",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "2f0bc693-8eca-4673-92d1-d398a020eb39",
    value: "EL BORJ",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "7700e146-034b-4907-9848-ed7fee4a94fd",
    value: "EL BOROUJ",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "5ed9b3db-cc94-4f6d-a484-36dddcaa8eda",
    value: "EL BSABSA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "9c50df54-623f-4ed2-936c-f9a3261e2b6e",
    value: "EL FAID",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "818692b3-c357-4751-9762-a9a37e95b55b",
    value: "EL FOQRA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "eb8d0773-b726-46a5-9d69-fce8b4537e19",
    value: "EL GANTOUR",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "0d5f2ea6-fc66-4057-ae57-b8001467d28c",
    value: "EL GANZRA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "5ed221c9-f886-49a5-b229-a7c40f5b2339",
    value: "EL GARA",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "d32547ce-6f5f-484d-a8a4-bb327072abb7",
    value: "EL GHIATE",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "0815f686-63b5-4a48-9e73-71ac9de5b3b5",
    value: "EL GOURAANI",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "ae23e6f3-ed5e-46e4-92d8-c8ad6b26a7b5",
    value: "EL GOUZATE",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "7f382355-cea3-4c67-8477-ff7331678d87",
    value: "EL GUERDANE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "9ab71837-40af-4db9-bfe3-7fc2bd95bb0e",
    value: "EL HAGOUNIA",
    province: "053e7f0d-6812-4048-8f9a-fcfbb3323fd5",
  },
  {
    id: "ce55647d-f8e3-4d05-a39f-ffb0b8c99987",
    value: "EL HAMMAM",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "de10e378-d377-4dbf-807e-f1098b6b7a43",
    value: "EL HANCHANE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "c37d4b97-3709-4e9e-93e9-ada9beb60ad4",
    value: "EL JADIDA",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "fe26bbce-4919-4c5e-971e-24f1109edc76",
    value: "EL KBAB",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "867f588a-5510-4818-84af-77ba059125a0",
    value: "EL KOUDIA EL BEIDA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "114898ab-bbfc-402e-8a3f-45c9475d318e",
    value: "EL KSIBA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "c74c87c7-368d-4e19-a9ba-eae2fb65e36a",
    value: "EL MAADER EL KABIR",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "6c1d046f-2a84-4b36-aef7-aec0d7eae371",
    value: "EL MAARIF",
    province: "3eaec44b-b4fb-4105-bb7b-a819e227763b",
  },
  {
    id: "9247c882-528d-4d8c-bf7e-1bf17a357440",
    value: "EL MANSOURIA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "7bd59ab3-6b15-4ac5-a46a-f1fc41d1e08d",
    value: "EL MARBOUH",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "fcc91bd1-5d2c-4d7f-8369-9fd72080a182",
    value: "EL MARSA",
    province: "78ed197b-8a57-4962-ab15-07d0c24c4fc0",
  },
  {
    id: "74e96e8a-588c-4ce0-9e46-085a3a5538e2",
    value: "EL MENZEH",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "422934c5-0704-4a0a-896a-7cfad08e9016",
    value: "EL MENZEL",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "59bdf299-6f3f-4e1f-bfe4-8e670a782078",
    value: "EL MERS",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "49151348-d670-49ed-aa57-ecd4fbb1cfcd",
    value: "EL ORJANE",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "e9739237-6988-482d-b793-da59aac8ae13",
    value: "EL OUATIA",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "12ade98f-7d8b-42b4-8495-c2344c4f18cd",
    value: "EL YOUSSOUFIA",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "15eb7d7b-c43f-46a3-a05e-968c90e3b42b",
    value: "EL-HAJEB",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "9bc02d6b-808b-42d0-a6a7-a69c529a7c8c",
    value: "EN-NZALA",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "3cd5664d-0703-4c02-9ae0-1212ce3952dd",
    value: "ENJIL",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "6d3af576-0e41-4768-8763-9988413955e1",
    value: "ER-RICH",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "0de9c913-2f78-4a5e-9bb6-0dce78bc5df8",
    value: "ER-RISSANI",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "14e9e0e8-749b-4d51-884c-fb4d19c2e21a",
    value: "ER-RTEB",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "6423c4af-32fc-4059-8bdd-79be93196456",
    value: "ERMILA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "cd731b01-294c-48f6-a0fd-ed52417be23a",
    value: "ERRACHIDIA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "68bff6ab-605a-4f7b-a74d-e9122419c97f",
    value: "ERRAFIAYA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "3a729748-155f-4ec3-b55a-1bfe0157b649",
    value: "ERROUHA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "a5a98929-34df-419d-9a3c-ba2e53c2b4db",
    value: "ES SMARA",
    province: "db740e29-39e6-4362-8adf-bf6963a0527e",
  },
  {
    id: "834540f5-d6d5-4ae8-ae2a-844684aca013",
    value: "ES-SFALAT",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "024beb5f-052a-4c3a-a31d-a142b2079dd8",
    value: "ES-SIFA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "9f948b8c-c153-4156-8fe7-19f2062d2feb",
    value: "ESBIAAT",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "00a0024d-bf79-4ff8-8230-83c0c4ed573c",
    value: "ESSAOUIRA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "d7b7b880-fecc-4efc-a3b3-e6988221dc30",
    value: "ET-TAOUS",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "fe873fd6-a91e-4aea-8141-790007b1f523",
    value: "EZZAOUITE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "ca6b65ae-f525-44ca-97bb-a86e31254f3d",
    value: "EZZHILIGA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "ab747136-fd14-4a3f-8a3a-7d991fbb4740",
    value: "FAM EL HISN",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "829a8ac5-cb30-49e0-b87a-9d3ebc15ac70",
    value: "FASK",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "78573962-b5c9-482b-80da-9c4e5230514b",
    value: "FDALATE",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "cdd29772-63a7-4852-b7e2-3f1f3d393211",
    value: "FENNASSA BAB EL HIT",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "61c0e079-10e1-4b6c-b32d-a0e71b056c21",
    value: "FERKLA EL OULIA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "b3ee56c1-a8aa-4a38-bcff-1724fa969913",
    value: "FERKLA ES SOUFLA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "f83fc1aa-f6aa-4d88-a3ae-d132f9353f8f",
    value: "FES",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "84e2aadb-c812-456a-90a3-26f29bce8a00",
    value: "FES MEDINA",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "09307768-4b88-421c-94e9-937bc9afb754",
    value: "FEZNA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "957f8669-5919-4d74-a1be-0e9f405a38ad",
    value: "FEZOUANE",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "31894fa3-bb55-48aa-8ab0-7dd68eb205ed",
    value: "FEZOUATA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "541a95ad-0e5a-4c13-8181-99b071df7542",
    value: "FIFI",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "308d5f79-1c05-4f9a-a602-39bea3775b24",
    value: "FIGUIG",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "c5c40788-7936-4c19-8f7f-0d1737747fb5",
    value: "FNIDEQ",
    province: "2241f2a3-365b-47cc-a0f8-b11b278c2b48",
  },
  {
    id: "adbc109e-58b9-4d9c-a99a-bcd2f19e9c7b",
    value: "FOQRA OULAD AAMEUR",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "5c773188-6cb7-4b2e-b446-48ab67e21ac3",
    value: "FOUM EL ANCEUR",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "5945bb41-ee46-4b8f-987e-4ae681f0d051",
    value: "FOUM EL OUED",
    province: "78ed197b-8a57-4962-ab15-07d0c24c4fc0",
  },
  {
    id: "d2ac25aa-2b67-4080-8f29-7b4b7b2b069b",
    value: "FOUM JEMAA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "4714975a-34d7-48c9-92d2-132fa7e801a2",
    value: "FOUM OUDI",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "9c5deec3-6d23-4cc0-bd92-541f4df9f5f7",
    value: "FOUM-ZGUID",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "14093658-3194-489e-917f-c7d10c432608",
    value: "FQUIH BEN SALAH",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "55e0a970-507e-49bf-bcf7-a29734ebd6dc",
    value: "FRAITA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "fce44d68-82be-4b4a-a944-4cc93901b52f",
    value: "FREIJA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "5854149b-5751-494c-9884-f3dc769a7c9c",
    value: "FRITISSA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "2d2b082a-a739-4961-b489-6840f1bc0688",
    value: "GAFAIT",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "38cf60f4-1885-4432-85c6-f15383df6b31",
    value: "GALAZ",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "ef32b698-ea72-49eb-b7ba-b4174ccdcf08",
    value: "GALDAMANE",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "a8058b88-f2f7-44a2-a7ba-dd709aefd98e",
    value: "GDANA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "160b143b-244c-4d50-802c-b904b971b2bb",
    value: "GHASSATE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "9f2b6051-8122-46eb-873f-9d9d88022c35",
    value: "GHERIS EL OULOUI",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "43edbf3f-03ac-41c2-a210-605a7a4ce07a",
    value: "GHERIS ES-SOUFLI",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "df143efd-bd77-4341-866b-0d6627e275d4",
    value: "GHIATA AL GHARBIA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "6f74bfc7-aa69-4bdc-8bd6-ac3b8d631469",
    value: "GHMATE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "0ef11500-7049-49ab-9a63-c87ac08a16f7",
    value: "GLEIBAT EL FOULA",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "09c9abd9-35c0-4e65-87a4-89955e4a24f0",
    value: "GMASSA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "a8aaccd1-7e13-4a7e-b4c7-a91d5a9fff16",
    value: "GOULMIMA",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "503167b3-6752-48c3-9308-ca516bf1f77b",
    value: "GOURRAMA",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "280065e5-926c-4b62-82e7-492d73398acf",
    value: "GTETER",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "ce6045ab-e237-4f4c-9b74-3c8d470502fd",
    value: "GUELIZ",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "a5f89b06-ad47-4792-b788-c9a3d67dd9aa",
    value: "GUELMIM",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "315e2e44-b89e-4a9f-971a-f130626a727a",
    value: "GUELTAT ZEMMOUR",
    province: "ae531a03-51c2-4701-8325-8cdc1c7f951a",
  },
  {
    id: "96512d8d-ed76-44eb-b730-8b75ecce8273",
    value: "GUENFOUDA",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "14699cff-d832-4624-9e46-67991458e515",
    value: "GUERCIF",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "7cc21980-f77e-4c1d-954b-ab95970d2655",
    value: "GUERS TIAALLALINE",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "1ecbc191-ddba-47be-9f01-cf70c2d20aca",
    value: "GUETTAYA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "8fe6c62a-5afb-43e3-b230-24089bb53849",
    value: "GUEZNAIA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "3374ec69-dafd-41e0-843d-06a37fe6a38a",
    value: "GUIGOU",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "eee5308f-3819-4d4c-a9e8-9c3aecc9d0d2",
    value: "GUIR",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "8522f46d-3637-46e9-90f4-7929e479a941",
    value: "GUISSER",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "0fb7738d-96eb-426a-abde-237d964e984b",
    value: "GZENAYA AL JANOUBIA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "60416d41-cf19-459a-ac73-f4bc5cb375cd",
    value: "H'SSYIA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "fdb40bbe-b509-433d-9b26-ef8ce00d3791",
    value: "HAD AL GHARBIA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "311c41fb-bec7-47e4-be68-304907ce3a7f",
    value: "HAD BOUHSSOUSSEN",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "0f1e4bcf-b92a-43ae-a3a3-3fe376eafda5",
    value: "HAD BOUMOUSSA",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "5c0a7144-2115-43cf-8392-0fd2c295330a",
    value: "HAD DRA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "769d02b7-88b3-475f-bed3-41fd8985ca8d",
    value: "HAD KOURT",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "18ab1682-617f-4f32-8812-e52a19d5bd41",
    value: "HAD SOUALEM",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "d5494798-54b8-4308-b281-ddce4e15984a",
    value: "HADDADA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "2a967184-195c-49e6-ae1f-bf48e3ee1786",
    value: "HAOUZA",
    province: "db740e29-39e6-4362-8adf-bf6963a0527e",
  },
  {
    id: "74195436-a168-493b-912f-55d5bffcae27",
    value: "HAOUZIA",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "02c02816-bc29-43c4-ae68-c12965a60ee8",
    value: "HARBIL",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "19c94362-8137-42ff-b03d-fc6453e5ce49",
    value: "HARHOURA",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "cd5f7b6d-9626-4708-ab84-5e862cf02d64",
    value: "HASSAN",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "817bdb52-780f-45ea-a9b8-532411a428f2",
    value: "HASSI BERKANE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "1c7ca54f-05ad-46a4-b3aa-08d424771795",
    value: "HATTANE",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "ba997c1d-1de7-4693-8920-2a7527adcc19",
    value: "HAY HASSANI",
    province: "23e449de-00bd-460d-88f1-3465cb114ed6",
  },
  {
    id: "f994f4e4-5165-48eb-b114-4011ae3e5129",
    value: "HAY MOHAMMADI",
    province: "aa1204f3-85ae-4659-9e98-1e7a87d55d0b",
  },
  {
    id: "f4c186d1-70b6-4a96-9948-2b019f9fc50e",
    value: "HEL MERBAA",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "7f659edd-e58f-425f-a41e-5f3024a0705c",
    value: "HIADNA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "a36f373b-8872-409a-86d6-f992778600c9",
    value: "HILALA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "b2dc55e1-2b8e-4163-9228-c6e97a67bf36",
    value: "HJAR ENNHAL",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "c8f0d122-1294-478a-a6ca-aa7efef0b43d",
    value: "HOUARA OULAD RAHO",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "c641614a-83f8-4ca0-9abf-2a703ba0b302",
    value: "HOUDERRANE",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "ec545bb3-d582-4001-b5db-1823ccd10f8e",
    value: "HRARA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "e3b4d1e3-120d-4e61-bb8b-514e6e8acef2",
    value: "HSSAINE",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "8ea66f3a-0a12-4b9e-85e4-8d4146a58859",
    value: "IAAZZANENE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "2a31db95-af64-4c3e-9a62-d429af4c22d2",
    value: "IBDAR",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "6a361ad5-9a8e-402d-8a3c-6a97f90ca7e8",
    value: "IBN YACOUB",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "1ad87505-af11-49b6-8d2c-10cc95b08040",
    value: "ICHAMRAREN",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "904d9835-fabe-4c97-b268-ff9e5be1b006",
    value: "IDA OU AAZZA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "780a7ee0-d0f3-4e86-887c-8fbb1fcb436a",
    value: "IDA OU GAILAL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "42093f58-4cd8-4c58-870c-3815fa120c31",
    value: "IDA OU GOUGMAR",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "5fe4dc40-ee80-4673-829a-5da1e4c9d663",
    value: "IDA OU GUELLOUL",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "8a0b9f49-03f3-4beb-a98d-db2b95647b47",
    value: "IDA OU KAZZOU",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "a6843553-46a3-4065-b0fc-7875c8469714",
    value: "IDA OU MOUMEN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "8fadc0ed-090b-49bb-b143-3b1f2ed4147d",
    value: "IDA OUGNIDIF",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "7e3b1766-7089-42aa-be0e-f005588f3fe0",
    value: "IDA OUGOUMMAD",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ed1ea39f-e9ea-4d9e-a629-e200da407bc5",
    value: "IDELSANE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "cd41108b-8359-4cee-8f74-953e6e410d4e",
    value: "IDMINE",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "840ba964-0273-44b6-98c0-71b65db07ca5",
    value: "IFERNI",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "f8543ab6-8ab1-49d8-a895-6d5aa46215de",
    value: "IFRANE",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "9e479b81-fbe6-487d-9341-350c7d8e148f",
    value: "IFRANE ATLAS SAGHIR",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "800c45b5-d143-4377-9c83-8e501ee7bf5d",
    value: "IGHIL",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "56e2ed0b-9c31-49cc-9090-d351d09a2df6",
    value: "IGHIL N'OUMGOUN",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "05295300-87a1-4953-863d-5889cfc70375",
    value: "IGHOUD",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "c234c335-bfd4-4719-aeae-74c3ddb65fa5",
    value: "IGHREM N'OUGDAL",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "81fa17a3-f8d8-406a-9cf2-19dd32980d23",
    value: "IGLI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "3a74db4c-6799-4c44-af78-c0fb84e32a0e",
    value: "IGOUDAR MNABHA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ea3086ec-c2da-47a6-a6fc-87e46eb78614",
    value: "IGUERFEROUANE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "d5417b9b-9a5f-43df-85c1-e82be4829fdd",
    value: "IGUIDI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "b6d45e47-0e5e-421a-b8b5-a5720b92416c",
    value: "IHADDADENE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "7b09897a-c629-4bcb-802d-4c7f772af650",
    value: "IJERMAOUAS",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "792844a1-89bc-4590-93c9-037f90f9f8fb",
    value: "IJOUKAK",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "31f0a887-42fa-407c-819d-5782ad4496f6",
    value: "IKNIOUEN",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "3a04bfa9-a9c7-491d-a2ca-e9eb17c1b978",
    value: "IKSANE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "e37b5e47-5300-464a-a514-f609389b7b11",
    value: "IMAOUEN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "7242ea7b-e843-4737-9785-a9f2e77a0622",
    value: "IMGDAL",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "1449cd56-13be-49f9-8ea0-475f5f6c26bb",
    value: "IMGRADE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "682288e4-af73-4511-9a51-ae5b3fefd3a8",
    value: "IMI MQOURN",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "62cb4748-7d6f-480e-96a7-87fea1af1597",
    value: "IMI N'TAYART",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "4ac7524a-fcd7-4a13-9af5-0bbf05fb4455",
    value: "IMI N'TLIT",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "3e339514-ac69-4b52-bd21-da1e9049338a",
    value: "IMI-N'FAST",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "a7d620bc-7797-413c-887e-d033b3e3ec65",
    value: "IMI-N'OULAOUNE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "ac301575-53a6-4f2b-9568-78d93276fce8",
    value: "IMIDER",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "96527465-0081-487d-a333-e91eebabc31b",
    value: "IMILCHIL",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "e42f90f8-5bee-4dcb-a917-071b12f45255",
    value: "IMILMAISS",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "8536736c-10d4-42d0-bde6-a2f50a5bb0ae",
    value: "IMINDOUNIT",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "d74f6089-2444-45f2-8056-5db9d7523d1c",
    value: "IMINTANOUTE",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "b5144432-99bc-4421-b1a8-3d070373987f",
    value: "IMLIL",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "af8098b2-32a6-4b7c-93f2-c6700c93a39d",
    value: "IMLILI",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "d1a8f84e-f7e3-49d5-906e-c7e40fc7a2a2",
    value: "IMOULASS",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "3a8913f2-90dc-422f-8938-066bdea41b2a",
    value: "IMOUZZER",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "dcdd2ff9-235a-4624-aa1a-7310092c97d3",
    value: "IMOUZZER KANDAR",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "e7100056-9916-4f10-8b81-ec0cb90d5436",
    value: "IMOUZZER MARMOUCHA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "aabbf444-e946-4243-827b-6b1e4afdd783",
    value: "IMRABTEN",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "8bbc222d-62bd-460a-be31-31082cbac723",
    value: "IMSOUANE",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "9fa1706b-04c9-4d38-96c1-e740460c698f",
    value: "IMZOUREN",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "4f03d197-06db-4f1c-b858-de9a9b122bbe",
    value: "INCHADEN",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "b32b672d-c566-47bf-a9ac-6c5a7f1520c3",
    value: "INEZGANE",
    province: "d995796c-51dd-4471-909f-9d1510057344",
  },
  {
    id: "2a2d081d-5f32-4606-9811-093d14b8cb32",
    value: "IOUNANE",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "daa35661-d79d-42ce-9d06-b689451401cc",
    value: "IQADDAR",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "8d022d88-b3df-4620-95a9-a44290652fd9",
    value: "IRHERM",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "5e654472-fcbc-4aa0-a956-4cc7d2348e8b",
    value: "IRHZRANE",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "517a7ab5-0fdf-4cbf-90fc-5105e8ab12f7",
    value: "IRIGH N'TAHALA",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "a30314d8-b9a9-4b99-b0a0-1f2ca1d48264",
    value: "IROHALEN",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "824b2469-2af2-497f-8914-a55189eb5869",
    value: "ISLY",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "9235fc85-9c81-4c46-aff1-58e3e8bd2b40",
    value: "ISSAFEN",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "cbd392f1-79b3-4fcd-a2f0-cc856ab3b3a0",
    value: "ISSAGUEN",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "e9a6fa3d-63e5-4b03-9839-0b7a0e9596d0",
    value: "ISSEKSI",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "8fcd03ff-8d03-4981-99ce-5650347c95ea",
    value: "ISSEN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "747d9eb3-390e-451a-a76d-09a1b2327317",
    value: "ITZER",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "72ea6421-4a55-4788-b371-02414b02fe6c",
    value: "IZEMMOUREN",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "18210ca3-de8b-4a22-a400-1e33b3b75d56",
    value: "IZNAGUEN",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "f382462f-c492-4975-a0da-287edc649db9",
    value: "JAAFRA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "7b1b5900-3929-4dc2-90d5-95a476a8fa83",
    value: "JABRIA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "e0b81fb2-5a16-496d-8e4b-06d20bbc8fe7",
    value: "JAHJOUH",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "f560e494-cd04-4e5c-a987-fab104bfcd3a",
    value: "JAIDATE",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "a89c7518-729c-4ad0-844e-2887f1a65576",
    value: "JAMAAT SHAIM",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "92af6139-d32f-436c-a2d3-6147d5bb6649",
    value: "JAQMA",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "a737c4f5-b129-4aa3-aa54-165f70bd7e00",
    value: "JBABRA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "fcd7f36e-ccc6-44fc-83dd-861dde15191f",
    value: "JBARNA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "893e5197-15e4-400c-84b5-a70fc12a8852",
    value: "JBEL LAHBIB",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "6df090aa-27e6-47c3-9e57-fd4fda6d57fc",
    value: "JBIEL",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "19ef33d3-2ffc-44fc-abd9-9625e3edc665",
    value: "JBILATE",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "d5c8cbf5-9609-420f-b615-c4352cdabf6b",
    value: "JDIRIYA",
    province: "db740e29-39e6-4362-8adf-bf6963a0527e",
  },
  {
    id: "f23d0062-2579-4786-b3b6-dd0800c2efb2",
    value: "JDOUR",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "088f37f9-b955-4076-87ee-ea959805ebe0",
    value: "JEMAAT MOUL BLAD",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "0b3954ff-083c-44e4-b9bf-a7730a0fc4be",
    value: "JERADA",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "844e9af1-da10-4d12-950b-7db79ff9a239",
    value: "JNANE AL OUARD",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "514a7391-35d6-4652-8500-a80d4056c6cb",
    value: "JNANE BOUIH",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "360c2c19-9afb-4b07-9e83-759e76ceadc5",
    value: "JORF",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "4908712b-6bb6-47f5-9ab3-e84e6058aba3",
    value: "JORF EL MELHA",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "414ea2f3-918b-434e-9665-1319f423bfbe",
    value: "JOUALA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "f57ae02e-429a-4459-93a7-1f2021bec13e",
    value: "JOUAMAA",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "cf4a9347-d86f-4c98-9028-c03f58fba975",
    value: "JRAIFIA",
    province: "ae531a03-51c2-4701-8325-8cdc1c7f951a",
  },
  {
    id: "4b685b65-dc83-4ea7-9f74-b327b2a4fec8",
    value: "KAF AL GHAR",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "5fe2215a-72ff-4f86-9b47-5dd1c24f7006",
    value: "KALAAT BOUQORRA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "b4346c98-9c69-4410-8704-42000fca5202",
    value: "KALAAT M'GOUNA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "b90865a5-fe4e-44f3-a9c5-f7912e0ff773",
    value: "KALAAT SRAGHNA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "4846c66e-748b-4585-8d7e-7c94767e46aa",
    value: "KANDAR SIDI KHIAR",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "1739562a-fe10-47a0-a46a-608435243c45",
    value: "KARIA BA MOHAMED",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "91639483-112a-49db-b7e7-0e030c09b506",
    value: "KARIAT BEN AOUDA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "3ad2e0a6-3a8d-433d-acef-46937a6fe925",
    value: "KASBA TADLA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "ceee0594-1a09-4b1a-91c1-faad5678d92e",
    value: "KASBAT BEN MCHICH",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "54aad3d9-d86c-4729-aed3-41217478fa57",
    value: "KASBAT SIDI ABDELLAH BEN M'BAREK",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "e93fd1e4-c79e-4dbd-b9f8-9598c6c41411",
    value: "KASBAT TROCH",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "9546a2ad-12b1-4a48-8768-9a421cf18854",
    value: "KCEIBYA",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "f89bba9f-7cd0-4f32-8100-41032999f03f",
    value: "KECHOULA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "385b6666-a206-46e0-a0e1-69ae4180d25b",
    value: "KENITRA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "a6980a7c-19f5-4ad7-9656-ecb8cd4d4115",
    value: "KERROUCHEN",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "6db8e893-e0ee-4412-842d-f7827465a6bc",
    value: "KETAMA",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "178d2d05-cb50-4f79-ac10-f35ac930ea2e",
    value: "KHALFIA",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "fe555bac-f924-4fbf-b7a7-fdcecddba348",
    value: "KHATAZAKANE",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "0905c2bf-48fb-4496-9616-6b9e8c6b7c20",
    value: "KHEMIS SIDI YAHYA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "832b3ce0-6d2e-4b07-af3a-9235f57f5504",
    value: "KHEMISSET",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "56996b8a-9762-4fda-aaac-07fdc24815c1",
    value: "KHEMISSET CHAOUIA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "72c1e265-8094-4338-bc9c-4864be6efdda",
    value: "KHENIFRA",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "633df221-b126-4ba6-b1db-493477add66b",
    value: "KHLALFA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "fd946b7d-2c96-4326-8dad-dd9332529224",
    value: "KHMIS KSIBA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "0e2d5bee-99e9-43e0-aad8-8682b9aebc05",
    value: "KHNICHET",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "c72d8dd1-6d01-4ffd-9c40-ea9fd02b9520",
    value: "KHOURIBGA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "516ec2dd-50bc-4c69-a78f-f14c8d3a8594",
    value: "KHOUZAMA",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "1ab36a7a-cb49-45c6-8622-a06446c1ae20",
    value: "KISSANE",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "7602f3f0-10aa-4936-bf33-6c1642d901be",
    value: "KORIMATE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "a40e9314-9a10-482c-a223-1535062903b6",
    value: "KOUDIAT BNI DGHOUGH",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "30094567-5c31-4479-94a6-da4eb192bd18",
    value: "KOUZEMT",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "4fa15606-6fbc-480e-ae7d-020658c19705",
    value: "KRIDID",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "257901f0-eb7a-49ae-9552-8d70f48bed80",
    value: "KRIFATE",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "e2257c97-45f4-42de-bf28-eb2e812df9f6",
    value: "KSABI MOULOUYA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "eb9a598c-f25f-4d7d-a678-4cff7772cd12",
    value: "KSAR BJIR",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "94e12307-be41-491d-9883-9a721fc52948",
    value: "KSAR EL KEBIR",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "2dfbb0a8-f56b-4ebd-9a18-6be62eb5d6c2",
    value: "KSAR EL MAJAZ",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "d1857d5f-b83d-4c2f-ad98-8b4b52f294b8",
    value: "KSAR SGHIR",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "7ae75d6b-b5e6-436d-8c33-5f3779c94794",
    value: "KTAOUA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "2c09d71f-9a49-4ffe-ae3a-dd15c31eb7b0",
    value: "L'AATAMNA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "b5ee525d-7771-4973-a78c-5433eb5c9f27",
    value: "LAAGAGCHA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "36a5506a-ea31-4938-9736-99f8c60c362e",
    value: "LAAJAJRA",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "a05c060d-265f-49b7-8844-dc0d359699ba",
    value: "LAAMAMRA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "99b22f17-4f59-4019-b6b7-c3f1cb8a26bc",
    value: "LAAMRIA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "e201302f-1b3f-4aa1-b9dd-b79b666e901d",
    value: "LAANOUSSAR",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "ce10f0f7-7b9b-4734-b498-787f43e65e61",
    value: "LAAOUAMA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "6c3243fd-55d0-43e6-856c-fecff08f9b6e",
    value: "LAAOUINATE",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "181cb013-d021-4a40-aff9-558903cc9cac",
    value: "LAAOUNATE",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "9b2b55ed-3a58-486e-b183-154dbe92b7b3",
    value: "LAATAMNA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "fde8d96e-58df-4493-9cba-7a5124989fe4",
    value: "LAATATRA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "3038fa3a-d5d8-4fe3-b36c-ae9c878e23ca",
    value: "LAATTAOUIA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "692542c3-8674-4708-aec2-8ca58ceb1ea4",
    value: "LAATTAOUIA ECH CHAIBIA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "ce604926-00d1-4328-8a48-f0d491b45bc1",
    value: "LAAYOUNE",
    province: "78ed197b-8a57-4962-ab15-07d0c24c4fc0",
  },
  {
    id: "6e377f4e-b8ca-4e1a-85e0-059915593493",
    value: "LABKHATI",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "ac45d6fd-7ef6-43fe-aa00-5c18180d7912",
    value: "LABOUIRAT",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "ea671c6d-7152-4b6b-b588-ffff116abd86",
    value: "LABRIKIYNE",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "8120bfa4-f47d-4c0a-b1fa-2cbd81d2fe56",
    value: "LABYAR",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "55d645f8-0e8a-4611-b51e-b734ca138484",
    value: "LAGDADRA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "f09bb9eb-ada9-46ec-852a-eb783048f451",
    value: "LAGFAF",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "1c4e6270-6685-48de-84a4-cea19be990ed",
    value: "LAGFIFAT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "f94a3193-41b3-4f56-8e0f-9d4cec29746b",
    value: "LAGHDIR",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "b519d167-78d4-422d-b5a0-45196de60dc7",
    value: "LAGHDIRA",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "84fa6532-3f11-473f-ad80-7b0a36336481",
    value: "LAGHNADRA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "c3e619b0-6dcb-42b3-892b-ac1db7d6aa0b",
    value: "LAGHNIMYINE",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "f52b13c8-b93e-4a3d-bce6-a598a8b43034",
    value: "LAGHOUALEM",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "59f92dd8-de26-4bfb-a94d-2eb287c9f266",
    value: "LAGNADIZ",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "7ea99797-8bfd-40b4-8ec5-d9b5d15b3bcb",
    value: "LAGOUIRA",
    province: "a87a5c26-8774-4834-95d7-a6d2650b6080",
  },
  {
    id: "f3e8e903-b92c-421f-a787-4ac3e4b5c924",
    value: "LAHDAR",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "8364b58d-18f1-42e6-9ab1-8375e53dd1d4",
    value: "LAHOUAZA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "fbb62024-7169-4ba2-9152-8a6e9f7c31cf",
    value: "LAHRAOUYINE",
    province: "442089d7-5cb2-4bba-844e-4710c4b9b0b1",
  },
  {
    id: "e0499a85-7839-4d59-aec3-7bdb741b6d14",
    value: "LAHSASNA",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "5f2c85ac-e98a-45e0-b08a-460e02012dd9",
    value: "LAHSINATE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "3f9e36b6-7660-4fbe-9af5-aa88177f4a3f",
    value: "LAKHNAFIF",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "945b1b4f-8c2c-4fe7-95e9-30b2336d031a",
    value: "LAKHOUALQA",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "e1f770b9-261c-4769-bd87-c03f413bdd80",
    value: "LAKHSAS",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "03ffefe0-da5a-4593-9113-a323dddf6cdb",
    value: "LAKHZAZRA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "837cb7cb-b13b-46a2-90ba-4ea426c5e96f",
    value: "LALLA AAZIZA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "a3ea792f-94e4-4718-95bc-a02a322e96dc",
    value: "LALLA MIMOUNA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "02fe52ab-18c3-42a9-bd5a-930c4ca782cb",
    value: "LALLA TAKARKOUST",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "b90cc63f-55f7-4d2b-b82f-af256450e9fe",
    value: "LAMAACHATE",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "d949d797-f7d5-4f41-8e29-e1366d6bf8b2",
    value: "LAMBARKIYINE",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "604c0050-7b56-45de-8c34-9fe820193639",
    value: "LAMHADI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "1960d153-4954-4921-b059-15f2bb0239f3",
    value: "LAMHARA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ff1949e3-a378-44b3-a221-5287de5ffb9c",
    value: "LAMHARRA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "37808133-f2cb-4246-9cc9-6562cc793e0b",
    value: "LAMHARZA ESSAHEL",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "0cbe6d1f-8037-4fa0-abe9-620beaafe2e9",
    value: "LAMJAARA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "a3dd6c0d-f353-45f7-9061-29322c0ef573",
    value: "LAMNIZLA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "0a2f941a-89ef-4151-b832-605e5a49ce01",
    value: "LAMRABIH",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "1d2d3579-26da-4472-912d-f9c49ca6c5fd",
    value: "LAMRASLA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "d4cffd92-40c2-44f5-a0e4-1a25c7d47fef",
    value: "LAMRIJA",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "441b2040-45c5-4db6-9267-fbadc4f13c55",
    value: "LAMSABIH",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "a6774045-db59-420c-8ad4-1c11b2742be2",
    value: "LAMSSID",
    province: "ae531a03-51c2-4701-8325-8cdc1c7f951a",
  },
  {
    id: "d4dd954e-572f-4d03-a54c-41f7c50cad21",
    value: "LAMZOUDIA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "3368f1d7-6a81-47db-ac6c-e10355a49d67",
    value: "LAOUAMRA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "c1b8233b-8375-4b8b-aa3e-5ff0ba4dc956",
    value: "LAQRAQRA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "48fdfc5a-516e-4be7-8610-797241372072",
    value: "LAQSABI TAGOUST",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "5db9db3d-3238-4ced-a23a-72817a7fb018",
    value: "LAQSIR",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "236a94f4-ea75-4414-a086-6ef8ec989b7d",
    value: "LARACHE",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "9c0402e6-9ff5-44c5-a61b-39a5e512261e",
    value: "LAYAYDA",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "e6452a7c-1276-4a98-92e6-ac249ec29486",
    value: "LBIR JDID",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "0b87d9ed-44c6-49d8-880c-c09a9b847ba3",
    value: "LEBKHATA",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "96e019b5-3a13-4588-8ff7-ebe23d3d78e1",
    value: "LEHRI",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "91ee8c1e-22a1-4313-8be6-8251fe0d30a8",
    value: "LGHARBIA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "8dba1278-7aea-416b-98e4-e90bd16b0e50",
    value: "LKHENG",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "b4374cea-a135-49bc-bbcd-794b585c27e6",
    value: "LMECHREK",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "637fa85e-2a50-4974-9c46-80519d6ff63d",
    value: "LOUAD LAKHDAR",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "4e1f7117-454a-49d2-abac-53a87343545b",
    value: "LOUADAINE",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "69fb25c5-03fe-421e-a9a6-3a4cea63585c",
    value: "LOUALIDIA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "cea3a646-8263-4472-9601-b5c402c75f4a",
    value: "LOUDAYA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "cb09214a-015c-45c1-b323-14b970a4bde5",
    value: "LOULAD",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "6f9afdc5-ce92-4c25-930d-49312641d0ca",
    value: "LOULJA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "02b8a757-eeaa-47f8-9cd7-f8add82c34f1",
    value: "LOUNASDA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "838ad866-adb5-4e5b-b37f-6fadc8254657",
    value: "LOUTA",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "d6a8dd00-5051-40fb-803f-2a16986d26c6",
    value: "LQLIAA",
    province: "d995796c-51dd-4471-909f-9d1510057344",
  },
  {
    id: "bd04959d-1215-42d7-888e-7631e48dae7a",
    value: "M'DIQ",
    province: "2241f2a3-365b-47cc-a0f8-b11b278c2b48",
  },
  {
    id: "6a82e459-8cf5-4c87-8679-915cd74a6f31",
    value: "M'FASSIS",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "06a8c285-7855-438a-9c34-7b1cee5295d4",
    value: "M'GARTO",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "ed3899b2-bca6-42ad-9b37-f2ca21fe349d",
    value: "M'HAJER",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "cc9be25a-763d-4549-89fa-fd106c911072",
    value: "M'HAMID EL GHIZLANE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "0e1ac7a0-e6dc-460a-a140-816d58f6b7f6",
    value: "M'HAYA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "f6945f2b-a9e4-4f20-b9e9-a698646949db",
    value: "M'KHALIF",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "29709ef6-60cf-4f60-bc6e-609a2663c152",
    value: "M'NABHA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "77fac847-de9a-415c-aa1d-67c5cb5a1f6b",
    value: "M'QAM TOLBA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "14ade52a-6911-4f4c-91c1-6ec9851469f5",
    value: "M'RAMER",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "f57c3119-5222-4277-84f3-3135ff753b37",
    value: "M'RIRT",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "0f0da896-a2bf-4ce1-bcbf-3cbd7328f9e0",
    value: "M'SAADA",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "76305978-b4f0-4f1b-82e3-ca215e4ca9af",
    value: "M'SEMRIR",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "04f83e57-faf4-4710-8b2d-200d3975d0e4",
    value: "M'SSICI",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "d7d858f4-3d96-4e52-8ef3-d7851892e6be",
    value: "M'TAL",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "e73de0a1-aaa2-4460-a450-ca7ae2ccfc01",
    value: "M'TIOUA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "1ae40a3c-9081-407d-ab6f-547aed15c67e",
    value: "M'ZEM SANHAJA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "6024e752-4436-4da3-b516-3d89b9cf1bee",
    value: "M'ZIZEL",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "c5d34691-4e8f-4171-854f-3ee8556e496e",
    value: "M'ZOUDA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "356722aa-018c-4a9b-ab85-cba9df9a42cd",
    value: "MAADNA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "88a587a9-4e94-4172-8100-048c5f108c0b",
    value: "MAATARKA",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "da2a2ab0-168a-4b8e-86ce-a6723a08b1e8",
    value: "MAAZIZ",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "0fc10f09-56d9-4f98-82ce-a31c04067ca1",
    value: "MACHRAA BEN ABBOU",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "5d2eb74f-f8b9-4b46-82f9-15e05d17a651",
    value: "MACHRAA EL AIN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "f5d3f681-46e1-4777-806a-86b15dc61345",
    value: "MADAGH",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "fd843fda-94ac-468b-8fcc-81a1f4bf18bc",
    value: "MAGHRAOUA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "f3aee7d3-f014-406f-8652-30022c09a130",
    value: "MAJJAT",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "cc46f9ba-fc6f-42a6-9196-c809a5b78db9",
    value: "MAJJATE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "e5024081-d91f-4293-a466-9ed967bcb13b",
    value: "MAJMAA TOLBA",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "12523f66-7dd8-4842-983d-0f3d2c8b9e19",
    value: "MAKNASSA ACHARQIA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "82c0402a-5da0-4a64-8846-10684f63ac84",
    value: "MAKNASSA AL GHARBIA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "c80e4538-1fc2-40f7-8aeb-afa4b56b3d17",
    value: "MALLALIENNE",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "7fd98195-8b11-4c40-8fbe-9ddf28d66518",
    value: "MALLOUSSA",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "b4ff2e13-f25b-479b-8b65-ccb36cd461b9",
    value: "MANSOURA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "a10fdd9a-712e-487b-bc06-1fece74fb5b6",
    value: "MARCHOUCH",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "8a5678e5-a554-4897-bdd0-4c0e21499f5a",
    value: "MARRAKECH",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "1a6e1532-778f-4aa5-b5c6-2ece409fb398",
    value: "MARRAKECH-MEDINA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "97190d69-d950-4bf2-ad64-9225230825d0",
    value: "MARTIL",
    province: "2241f2a3-365b-47cc-a0f8-b11b278c2b48",
  },
  {
    id: "2152a5a9-ebee-43e6-9672-516100961afa",
    value: "MASMOUDA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "a85895a3-ea89-4634-b656-6a14efd7921d",
    value: "MASSA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "3b76fa44-6a95-463c-ad83-f23cee279173",
    value: "MATMATA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "ce0a3117-7029-415d-bfd2-62c1acfe9269",
    value: "MAYATE",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "bc8f7eee-2307-43ec-9018-46fca8cd62d0",
    value: "MAZGUITAM",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "43951ea4-aa0a-4606-a6c7-9c4847c9b94c",
    value: "MECHOUAR CASABLANCA",
    province: "e2b10e71-a67a-4987-8b4f-b110b4964e2f",
  },
  {
    id: "32b910a2-1918-4213-847b-1871132d8bd6",
    value: "MECHOUAR FES EL JADID",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "7ef3b4fc-145b-45c2-939f-16620940adf9",
    value: "MECHOUAR-KASBA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "02e81944-334c-4cad-840f-d4736bf34f14",
    value: "MECHRA BEL KSIRI",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "01370a88-a52b-4aed-9946-59ce492a8d8b",
    value: "MECHRAA HAMMADI",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "8be7773a-5f0c-4864-a8e1-d44b1daf0bc4",
    value: "MEDIOUNA",
    province: "442089d7-5cb2-4bba-844e-4710c4b9b0b1",
  },
  {
    id: "9dcf47ad-382d-423b-b207-cdf07afe6f0c",
    value: "MEHDYA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "e584dc04-6e56-4afe-9a52-1e57deef29cd",
    value: "MEJJI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "35867339-4b52-4f9f-987c-c5445d3a73a9",
    value: "MEKNES",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "7f2232d3-aec6-4a70-9932-6861ef550baf",
    value: "MELAAB",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "914259ac-2adb-4c7a-9319-fc2db415dd04",
    value: "MELG EL OUIDANE",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "5560eb39-16e9-4524-a66f-bbee33826499",
    value: "MELLILA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "42ff1176-3b40-4079-929e-6da7082d2895",
    value: "MENARA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "07d1a29c-2115-4f2c-bb3a-7925ddc4d93d",
    value: "MERS EL KHEIR",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "d8eb11f3-c6db-4443-ba61-a31419b5f58a",
    value: "MERS SULTAN",
    province: "940b0295-fec6-4191-9529-20bca7457f56",
  },
  {
    id: "7beb9810-85e4-4594-97bf-64de480c6b2b",
    value: "MESKALA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "d318238a-8b8e-4c62-80a6-40e6d9820c80",
    value: "MESKOURA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "0f5a2183-b3d2-4c0a-9511-d9035054962c",
    value: "MESSASSA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "a6d6baff-9fd1-4527-b23f-b8691038f1d4",
    value: "MESTEGMER",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "64b9b8f6-9bbf-40e7-b353-d625514cafb8",
    value: "MESTFERKI",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "36001c2c-b43b-4101-8033-c46ad7202a7f",
    value: "MESTI",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "f6b93177-1f43-4042-b483-e0ea62255d2e",
    value: "METRANE",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "653b469a-fbe4-4199-a4d9-3495325e0305",
    value: "METTOUH",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "cb313a5e-66ac-407c-9c13-045b27452702",
    value: "MEZGUITA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "8d28b602-d80c-429d-8742-1e88b3c349c1",
    value: "MEZRAOUA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "b80acb80-ac04-40cb-9ecc-4ce1aecd3ace",
    value: "MIBLADEN",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "ebba611c-4aa8-469a-b41d-ed30dc5fa696",
    value: "MIDAR",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "5e6ea69e-9fa9-46bf-bbd7-72e751b77b20",
    value: "MIDELT",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "bcdfdd7c-691e-4ea1-a4f6-5afa2ab3412d",
    value: "MIJIK",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "3d1d13e4-0510-4012-85ac-4b7c89d9c273",
    value: "MIKKES",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "2ef94d41-3864-4785-9291-bfe67603887a",
    value: "MIRLEFT",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "610b5c0f-91ce-49e3-8c47-d5b51fe62795",
    value: "MISSOUR",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "6626bf97-78e3-4fcd-a7a4-ca8991ba5466",
    value: "MKANSA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "85fb4d9a-3d68-4269-9966-a64b33a4448e",
    value: "MNASRA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "9aaefa00-7e44-41f2-985d-3b0cec7162ec",
    value: "MNIAA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "6005bb31-d086-4089-8cbf-9a4e68117785",
    value: "MOGRANE",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "86de083d-04bc-43ff-8599-8cb1e27c2b95",
    value: "MOGRESS",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "874c9a53-b56d-4991-a918-9d4a682294d7",
    value: "MOHA OU HAMMOU ZAYANI",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "154a6ed9-79a3-4fb1-b79c-a1745d868eba",
    value: "MOHAMMADIA",
    province: "808202e9-de03-44ff-bed9-b0829eae83d8",
  },
  {
    id: "30c1eb16-fe29-493d-ac68-e1548b8c5f64",
    value: "MOQRISSAT",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "878d892d-8f12-4362-9500-4e59d6c05738",
    value: "MOUALINE EL OUED",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "f72c5cd1-c81e-4238-9509-4122c5566687",
    value: "MOUARID",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "dd1770f0-7ac2-4037-a2fb-dd01e6535edf",
    value: "MOUL EL BERGUI",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "a51a4de6-f368-4b0f-895b-3e36fc097089",
    value: "MOULAY ABDELKADER",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "e18d7865-608d-46c1-aa7a-bf05e9b12522",
    value: "MOULAY ABDELKRIM",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "e5c120f0-572a-4799-ab77-8ef5c2eb54d7",
    value: "MOULAY AHMED CHERIF",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "a7772d3f-a4c0-4be0-be4c-b2baa526c5cb",
    value: "MOULAY AISSA BEN DRISS",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "c294d02a-bb12-433a-beed-8fd8a65abb61",
    value: "MOULAY ALI CHERIF",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "f1f4daa6-faca-45df-b797-7a2e210dfd0f",
    value: "MOULAY BOUAZZA",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "2ccc7257-7f4a-4311-b9aa-f0a24880e180",
    value: "MOULAY BOUCHTA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "76c03588-9ed3-4595-8e22-77503196c88f",
    value: "MOULAY BOUSSELHAM",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "c1b98cfe-9c0b-48be-908c-36ee531b0a58",
    value: "MOULAY BOUZARQTOUNE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "cf0c641c-c236-489a-92bb-1e9a7a6f3d3e",
    value: "MOULAY BRAHIM",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "528e08e7-a204-49a9-9d74-bcd583e9cdcd",
    value: "MOULAY IDRISS ZARHOUN",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "a0cae6e7-a1ea-4e06-b9e2-958220afdf7a",
    value: "MOULAY RACHID",
    province: "6a46c73a-a0fb-4ef7-9aaf-f5b8c4d47917",
  },
  {
    id: "1d3eee59-f0ca-45ac-b029-f801c07db280",
    value: "MOULAY YACOUB",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "d39945d7-d83a-45c4-8dac-61a360b528ef",
    value: "MRHASSIYINE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "54f76bb3-3d1a-4741-8c96-44a19ac659ee",
    value: "MRIJA",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "5f2809ca-9c9c-4cfd-b414-a5962abc9e5e",
    value: "MRIZIGUE",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "75c7c8e2-de04-4c27-af32-1df8fe16d39f",
    value: "MSIED",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "79b6389f-a5bb-4e81-9fd0-849e3675d61f",
    value: "MSILA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "4c5d9d2e-cf31-4843-88ea-df82eb8b96d9",
    value: "MTALSSA",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "f7afc563-9537-4a5e-8e31-773974cda133",
    value: "MTARNAGHA",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "cb10b0ef-d491-453b-8939-5258572b6952",
    value: "MY ABDELLAH",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "e9d18ff6-e9cd-4b96-98b3-fe2b8d7921a1",
    value: "MY DRISS AGHBAL",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "877b159b-34a0-4892-ae85-fc499d868613",
    value: "MZAMZA JANOUBIA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "84e316a7-a546-4ccb-9caa-51ac59c9ce46",
    value: "MZEFROUNE",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "83abb55b-af55-404f-8ee4-7b4db4cf9ed5",
    value: "MZILATE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "854e251f-6a46-4940-99d7-d83b8828412d",
    value: "MZOURA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "c73ac886-c6ec-4fef-b6e0-5fcefca73f21",
    value: "N'KHILA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "39b8523e-c677-4d9b-b5c0-f4f0cce2060b",
    value: "N'KOB",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "50d66a3b-3526-4e12-9b31-c694c905c70a",
    value: "N'ZALAT BNI AMAR",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "9afbcdf3-7708-4791-8b91-7f52bbfd2afc",
    value: "NADOR",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "9bc75b20-337a-4315-bfb8-f0655c02a44e",
    value: "NAGGA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "0e6ea9bf-26f9-491d-8a9e-dfe12182eb2d",
    value: "NAIMA",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "fcdc7853-002f-4f86-98c5-e6defb468d92",
    value: "NAOUR",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "48cbe2a7-dbb9-4e03-9b21-ec56c70dcaef",
    value: "NEKKOUR",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "987e7096-62f6-4fc7-9d11-231802c0194b",
    value: "NFIFA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "33c49e68-1f48-470f-b9f3-7e7735e54bab",
    value: "NIHIT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "4bf8ac53-ee83-4f9d-9886-2991a5a1f3af",
    value: "NOUACEUR",
    province: "05732887-a6b0-442b-b68b-57ef5cb798dc",
  },
  {
    id: "7efe929b-fe81-41b6-aa05-f57c1837a2d0",
    value: "NOUIRATE",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "2084793c-3524-4f67-9612-0da2706c4479",
    value: "NZALAT LAADAM",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "29382486-2838-4dd8-a4ca-6eec3e1b638d",
    value: "OUAD AMLIL",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "02f13036-a943-4473-a3c3-b3b2f2e75aa0",
    value: "OUAD L'BOUR",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "4bbac0b6-bec7-47bf-b04d-ec8a4e186271",
    value: "OUAHAT SIDI BRAHIM",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "ea54b893-43a8-495e-b51f-b94aeb55f291",
    value: "OUAKLIM",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "85770856-57d5-453d-a9ae-9a699d3da1ae",
    value: "OUALILI",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "d3d9824c-1783-48ed-86df-836b66652433",
    value: "OUALQADI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "17ede50e-1e49-4f75-b429-67e7c747dc36",
    value: "OUAOUIZEGHT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "3726e64e-e0c3-485d-b884-2d47897eb775",
    value: "OUAOULA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "6d3c2112-b415-4bfc-9692-4253f8baa994",
    value: "OUAOUMANA",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "3c4660d2-515f-40d1-b704-c4bfe22880aa",
    value: "OUAOUZGANE",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "26ee703d-6378-4f25-9ded-eab6a1c9daef",
    value: "OUARDANA",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "3f6f2c36-6773-4816-ac2d-060ed0d18c8f",
    value: "OUARGUI",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "215b8f85-bc9e-4209-a23f-6e23a961fc1f",
    value: "OUARZAZATE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "8016b044-3023-43b1-845d-71250ffac119",
    value: "OUAZGUITA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "438d4252-12d4-4cb8-bca9-041c03dcc4fa",
    value: "OUDKA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "2af5b4fe-69ab-4d41-a522-e5db9f1a10bb",
    value: "OUED EL MAKHAZINE",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "3d850bb0-6a00-4dff-8eb8-e8a37f5717c1",
    value: "OUED ESSAFA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "3c5fe5ee-cf33-4f07-b342-74004ff6d6e3",
    value: "OUED IFRANE",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "6552c429-831b-429a-b3b2-4ae58863c739",
    value: "OUED JDIDA",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "8f5e8528-c3fc-4c37-8ca1-4605df4467d4",
    value: "OUED JEMAA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "d14e7d9e-2a19-4113-ada2-cc1ff334b913",
    value: "OUED LAOU",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "553ccf79-756b-4e94-afc2-3b3cb01e7f40",
    value: "OUED MALHA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "17cef838-dd1a-4f74-b62a-d104a40dcc5a",
    value: "OUED NAAM",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "2a2b317b-be7e-4034-a108-01022435db67",
    value: "OUED NAANAA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "d917e9bf-e4eb-4d8a-a37f-6e49cc584769",
    value: "OUED ZEM",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "a91e1a7e-1931-4883-9a66-3fd18ac4ae74",
    value: "OUEZZANE",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "857a5813-a242-41b7-abaf-50e33e8e3c92",
    value: "OUIJJANE",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "0751d17b-e17e-40d4-a605-daf8242a0e66",
    value: "OUIRGANE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "264fe149-a84c-45df-866a-c27c107db125",
    value: "OUISLANE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "d5e4dc01-7f7a-4049-a20f-b16e9e60e8b7",
    value: "OUISSELSATE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "e71aaebe-f9f0-4efb-9949-f59632764d48",
    value: "OUIZEGHT",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "34df39a7-a01d-4794-a347-dadbb0962295",
    value: "OUJDA",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "4d102420-ea90-404e-9ce7-351118c96220",
    value: "OUKAIMDEN",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "b1de92a0-fc88-46bb-864c-9f658307038d",
    value: "OULAD AAMER",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "5932add9-99fe-407c-860e-2771a5c48f02",
    value: "OULAD AAMER TIZMARINE",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "5951cdee-4069-476d-9d70-fd9a4b9dab26",
    value: "OULAD AARRAD",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "6287937d-025d-4f5e-a609-a896dd84b41f",
    value: "OULAD ABBOU",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "6772f90b-5129-4799-ac5a-4139df8addb8",
    value: "OULAD ABDOUNE",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "83821e2a-1f0b-4073-9747-49f4466fcc45",
    value: "OULAD AISSA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "b97e9b80-d979-4ad3-8912-20de9f59d295",
    value: "OULAD ALI MANSOUR",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "c9931365-82a5-423b-a757-0b1c8362974d",
    value: "OULAD ALI TOUALAA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "94a9caf8-8ff1-45ab-b874-7141fae2b86d",
    value: "OULAD ALI YOUSSEF",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "e05d0335-b207-471f-8a10-876f18cf6923",
    value: "OULAD AMER",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "8bd50930-c2ba-4cb5-a04f-e90ebb534770",
    value: "OULAD AMGHAR",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "a90ed869-eb69-4213-b6f9-91f2b6230a63",
    value: "OULAD AMRANE",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "f0be9a03-e601-4698-ac90-c6ea87ae08fc",
    value: "OULAD AYYAD",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "b561de35-97ae-4bfe-a1dc-4687640c2745",
    value: "OULAD AZZOUZ",
    province: "05732887-a6b0-442b-b68b-57ef5cb798dc",
  },
  {
    id: "2cfeb538-4e39-4041-ae27-bfdeb93e0495",
    value: "OULAD AZZOUZ",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "2795de59-019f-4a80-b39d-373bb290a969",
    value: "OULAD BERHIL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "676baf10-70b9-43fa-8ac7-d9c599b6e82f",
    value: "OULAD BOUALI LOUED",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "bdbbb464-c267-4806-b0a9-4c4cb05a9947",
    value: "OULAD BOUALI NOUAJA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "c579c90f-989b-4cb2-8001-83f4735fd032",
    value: "OULAD BOUBKER",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "5390b316-f1d2-4329-96cc-766210a9968f",
    value: "OULAD BOUGHADI",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "b3ed51ee-0e68-4e4d-9d82-f358c4f9d208",
    value: "OULAD BOURIMA",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "16781cc1-ad93-4929-b884-1b06b04a2793",
    value: "OULAD BOUSSAKEN",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "29d9693c-d15f-49bc-ba4f-1a266c2b3c89",
    value: "OULAD CHBANA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "da02f34e-2356-4e77-a176-a42750750713",
    value: "OULAD CHERKI",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "6ba40d14-42de-4ed2-b96b-108ea3f1d67d",
    value: "OULAD CHRIF",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "7a3219c8-ef5f-4cb1-a8ec-5c6f80f94cbb",
    value: "OULAD DAHOU",
    province: "d995796c-51dd-4471-909f-9d1510057344",
  },
  {
    id: "665ed3bc-b328-4b23-af51-ff8687842472",
    value: "OULAD DAOUD",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "ee81b632-bce1-4ab2-9d16-f190d875b9c9",
    value: "OULAD DAOUD ZKHANINE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "7e8ba913-7044-4deb-8294-cdfa0c1f35dd",
    value: "OULAD EL GARNE",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "7300a6b1-3faf-418b-88c4-7e43e35598df",
    value: "OULAD FARES",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "91d24908-3eaa-4d13-86af-0bf746cab4ea",
    value: "OULAD FARES EL HALLA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "2a351b10-e350-4d7b-bd81-ff86352f5081",
    value: "OULAD FENNANE",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "246324a1-0378-4164-84d5-f381bf6db6e7",
    value: "OULAD FREIHA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "550976cc-01c9-476c-b75d-7d003173b191",
    value: "OULAD FTATA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "46d6ffbd-b2e1-41c6-82ea-f9bb282f4864",
    value: "OULAD GOUAOUCH",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "17ee730a-4dbb-4343-8e49-df10ae5871bd",
    value: "OULAD HAMDANE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "51d41049-c052-46ab-a1d1-82b36286891e",
    value: "OULAD HASSOUNE",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "5c8d1a76-16d9-46b5-9a57-89c67aef3876",
    value: "OULAD HASSOUNE HAMRI",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "1909ccdc-b0fb-49bc-95dd-ed624deeb2ec",
    value: "OULAD IMLOUL",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "68e43308-1de5-4cb6-92c8-63236ff918b5",
    value: "OULAD KHALLOUF",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "aed9793c-7ecd-4a2f-8358-2871532f8f0b",
    value: "OULAD M'HAMED",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "d4fdbec5-636c-4740-8822-f8c3b397df69",
    value: "OULAD M'RABET",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "62d1fba1-e324-4db7-bcb6-a208b1eda7ef",
    value: "OULAD M'RAH",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "dde760c4-701d-45b0-b499-b48a733e7141",
    value: "OULAD MASSAOUD",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "faea44b1-60c1-43f4-9a21-63a30149dcae",
    value: "OULAD MIMOUN",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "a4606a49-0c18-4e6e-93bc-c133fbd0faad",
    value: "OULAD MKOUDOU",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "670f254e-9b64-4fbf-9adb-3ca52e69b5e0",
    value: "OULAD MOUMNA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "3406a209-1243-4391-85c9-72b2e2f55ac3",
    value: "OULAD MSABBEL",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "7f44e5d0-5b06-4cb4-b354-f89328e95175",
    value: "OULAD MTAA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "9ef7acce-5347-4974-9612-431061ee3a7b",
    value: "OULAD NOUEL",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "85337446-0a11-4c33-8641-ac78c2b396d6",
    value: "OULAD OUCHIH",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "73bcb56a-abee-4539-bc6c-ce28251bd173",
    value: "OULAD RAHMOUNE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "ca4dc21b-084b-40dd-acc1-604be1aed6bd",
    value: "OULAD SAID",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "d9a73901-c067-403b-b19a-68f799eebc9a",
    value: "OULAD SALAH",
    province: "05732887-a6b0-442b-b68b-57ef5cb798dc",
  },
  {
    id: "a0b74c9d-c742-4e30-991e-a3bde0d06e74",
    value: "OULAD SBAITA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "45416825-51c2-413c-b18c-ca74cc870613",
    value: "OULAD SBIH",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "e082c8e5-c73b-42f6-8770-0aed70bc63a1",
    value: "OULAD SETTOUT",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "9a58b124-ddc4-4b8f-b20a-2e084f9b6750",
    value: "OULAD SGHIR",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "de6efef8-12ac-4964-9f53-4e2d04f803cc",
    value: "OULAD SI BOUHYA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "68d4d26a-5184-4cca-822f-fe2f39ae6ae3",
    value: "OULAD SIDI ALI BEN YOUSSEF",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "27835419-f481-492f-9d20-e27d0628433f",
    value: "OULAD TAYEB",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "e1d30982-1664-4020-92d0-53e45207d42a",
    value: "OULAD TEIMA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "6f882e32-84fa-402f-bca4-072288d563af",
    value: "OULAD YAAGOUB",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "032b1604-28be-4b43-9489-1fd55dfcc685",
    value: "OULAD YAHIA LAGRAIRE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "536bf522-f3c5-44e0-b6a3-0c34bc0b4ac6",
    value: "OULAD YAHYA LOUTA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "3afdc43a-d07e-4f47-a6e6-5ed0e7eda780",
    value: "OULAD ZARRAD",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "7ae2151e-7693-4b1d-8380-742044cb3292",
    value: "OULAD ZBAIR",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "8025cfe2-8f0c-4cc2-be89-9576de026633",
    value: "OULAD ZIYANE",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "50eba274-0556-4e3d-8d6b-5fcd4ccf6042",
    value: "OULED AISSA",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "00f51e81-6624-416c-9997-97a1c2f65535",
    value: "OULED AYAD",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "b80648c3-2a70-40cd-b428-7abcc123d6c1",
    value: "OULED BEN HAMMADI",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "6bba3a30-a868-41f8-8793-2bb348380428",
    value: "OULED BOURAHMOUNE",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "6f31285d-69ff-443b-baa7-f488a73d980c",
    value: "OULED CEBBAH",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "cc3b2ebc-fa3b-4f11-8351-6f57e4a0c0a4",
    value: "OULED DLIM",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "17467912-15d0-452a-9274-59268a73b7a7",
    value: "OULED FREJ",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "9e369dad-c97d-45ff-9a1c-d9bac36e2609",
    value: "OULED GHANEM",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "33db9703-8e4a-4174-9871-795a16fc3485",
    value: "OULED GHZIYEL",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "8c03fb7c-fea7-4366-b1c2-d384e677cf57",
    value: "OULED GNAOU",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "5eb84567-d852-44d0-b35f-cee5a0a7ac2a",
    value: "OULED H'CINE",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "b4ed8b1f-d1ae-4f5f-8749-f2c4065add53",
    value: "OULED HCINE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "31578b16-c1f1-459a-af77-c65cae0a22af",
    value: "OULED M'BAREK",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "7a5a95f6-c945-4f03-a2a8-067e87c03d5b",
    value: "OULED M'HAMED",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "ee01cfb9-854a-4176-9b7a-e9760a3ffef2",
    value: "OULED NACER",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "b3b37567-4784-4f72-8fc4-a67ccefa5f4d",
    value: "OULED SAID LOUED",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "8cfeb9b4-c4a3-4e2d-85e9-47ef97ce5687",
    value: "OULED SALMANE",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "52daa2c8-17ff-4d6a-92f4-d26b86d50932",
    value: "OULED SIDI ABDELHAKEM",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "d5152739-42b3-481b-934d-cd4cf347bdf4",
    value: "OULED SLAMA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "1b5487c3-d199-4639-a4c2-742998fd141c",
    value: "OULED YAICH",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "077f9b5e-61ae-4bc7-9c41-f7559917e975",
    value: "OULED YOUSSEF",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "44e49cc8-2ae4-4dc2-a75d-125b0498d8a0",
    value: "OULED ZIDANE",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "6c857d86-8520-46bc-abb1-334b53d90c8b",
    value: "OULED ZMAM",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "8c737e4f-4d90-4d5e-a0c1-e2d3f73fe3e1",
    value: "OULED-AISSA",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "525f6c96-16dc-4e7f-8570-8309f58e7f6b",
    value: "OULMES",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "c422952d-f175-48cd-88ef-750f98a84c1a",
    value: "OUM AZZA",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "79f1a00d-f1c4-48eb-8f73-4c2081175600",
    value: "OUM DREYGA",
    province: "ac966848-ffbd-4451-9b12-0d990008c22c",
  },
  {
    id: "2f55fcb9-29cd-4c16-96c4-e11beb98527a",
    value: "OUM EL GUERDANE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "203a539d-4950-4152-90bb-1e786fb469ca",
    value: "OUM RABIA",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "70f9c45f-f813-45c6-bc36-60174f38e522",
    value: "OUNAGHA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "78ef81ba-3f14-4e9d-8c3a-fb4bb529d9a6",
    value: "OUNEINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "271d88f1-203f-472b-8a45-cd13e71c4a4e",
    value: "OUNNANA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "c2c4afcc-74ce-41a7-8228-3f2b222e9c9c",
    value: "OURIKA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "0e802a25-286d-4ed7-8177-1744a46c8dcc",
    value: "OURTZARH",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "5133005b-6036-4177-b27b-f757856648de",
    value: "OUTABOUABANE",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "e59cce4a-4fe7-4847-8f0c-7e9ccbd7ede5",
    value: "OUTAT EL HAJ",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "34fd372c-cd81-42f9-91b4-f316a703e712",
    value: "OUTERBAT",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "d56cfe8e-f5f8-4d9b-b525-49ea5f4697ab",
    value: "OUZIOUA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "7d861ddd-5af0-4270-b0d1-4adb86f3f42f",
    value: "RABAT",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "bea10421-0e75-456a-bd4d-5c275ec658ed",
    value: "RAHHALA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "e0725f7b-843a-4c01-965b-6e64baf1af68",
    value: "RAS AIN RHAMNA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "af7eafe8-86ee-439d-9da9-1895154b5bd0",
    value: "RAS ASFOUR",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "fc65bbb7-9396-41a7-8fbb-764b650fd685",
    value: "RAS EL AIN",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "54253f93-76d6-41ea-94d1-c9485e2bffb3",
    value: "RAS EL AIN CHAOUIA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "5d21eeaa-33a2-445c-a872-34f33c222b32",
    value: "RAS EL OUED",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "a049bca8-c916-418c-8f05-751340e546f7",
    value: "RAS IJERRI",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "0286328c-05c2-414c-a928-6f2189fe6949",
    value: "RAS LAKSAR",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "55305352-cecf-425d-a356-4992b5c81837",
    value: "RAS TABOUDA",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "a63e6bb7-9309-4492-b750-9ae3c5884583",
    value: "RAS-EL-MA",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "95fc26a7-7bf3-4ff5-914f-5ca456cc8a6a",
    value: "RASS OUMLIL",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "c6f5ee67-b524-4eda-9a4c-1337ce578adf",
    value: "RATBA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "378b9848-1a15-46f9-be8b-60df83106909",
    value: "RBAA EL FOUKI",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "5fa64979-9693-465e-8a6a-3059c8728867",
    value: "RDADNA OULAD MALEK",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "526e2472-f25a-4598-bbb0-a7133f3e5efc",
    value: "REGGADA",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "ddb4224f-07f5-4b40-bcc0-24274ef5d45c",
    value: "RFALA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "b9793a4f-5486-4f55-8d13-bbb39b0974d9",
    value: "RGHIOUA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "99656823-85a1-4fa5-a5c9-7aa45bbad8b4",
    value: "RHAFSAI",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "30591860-8f6a-4d5b-951f-54d049851f3a",
    value: "RHOUAZI",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "9ce6877a-f17e-45a7-8b0b-0c7ffe559bb0",
    value: "RIAH",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "20df5269-f726-411c-8b05-6018477bbf41",
    value: "RIBATE EL KHEIR",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "bbd11b33-f990-4e89-bdac-3f4f1637124a",
    value: "RIMA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "9bf6288b-1a01-4869-ad06-c0f9c80985ba",
    value: "RISLANE",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "cc1327b2-bae3-4fd6-9da2-adbf21395814",
    value: "RISSANA CHAMALIA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "924701e8-9bc7-4eba-980e-aac0e8832135",
    value: "RISSANA JANOUBIA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "358176fd-47a4-4a60-b32b-84e58032c692",
    value: "RMILAT",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "31c3adfb-052a-4cca-b97b-989799cfb110",
    value: "ROMMANI",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "169e57b2-c79f-4ed8-8ddb-52630fee94c4",
    value: "ROUACHED",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "c197c8b1-02b1-4420-83ab-8f8dbde30aec",
    value: "ROUADI",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "cc405367-cbe2-4369-a6e3-4f9ae68044e0",
    value: "SAADA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "cbcf9d0a-d017-4fca-a236-2958e395bf14",
    value: "SAADLA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "47ec9d00-b259-497d-9907-569e580c9f33",
    value: "SABAA AIYOUN",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "8f435022-80e5-4d9b-8f66-6b5152d1a1b0",
    value: "SABBAH",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "ff403764-fed1-4eb5-9e99-769c73955258",
    value: "SADDINA",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "ebbd475d-d97e-41c4-b195-24af23eb4d70",
    value: "SAFI",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "ceb4bf74-b8d0-4d37-8de8-f01558c3f8c5",
    value: "SAHEL",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "bc29dbc6-ae63-4ab9-b3a9-858d250b8cfb",
    value: "SAHEL CHAMALI",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "1532434c-b70e-4c3a-a589-16a51ca1fe21",
    value: "SAHEL OULAD H'RIZ",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "2026ebd8-1fc2-4a63-a522-8c0798fbf09a",
    value: "SAHTRYINE",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "6e6fec51-a2b0-491c-8771-753912d443cb",
    value: "SAIDATE",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "25073259-9671-4292-899d-26a4f30b6511",
    value: "SAIDIA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "2618110c-793a-4c0a-a254-6f8bbdc7edbf",
    value: "SAISS",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "eccc7c50-b51a-452c-8ce7-d4e6c3bda68d",
    value: "SAKA",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "c64d15fa-2025-49c7-820c-dc56919333e4",
    value: "SALE",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "1ba37eeb-518b-42c0-b941-b05715b97001",
    value: "SANIAT BERGUIG",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "de4872d6-4d14-4653-a8a6-9bdab26ada97",
    value: "SBATA",
    province: "2051094d-aa42-4689-8649-35b47e204bf4",
  },
  {
    id: "3d9e0d85-7f5a-468d-ba41-5edcf7eb038a",
    value: "SBOUYA",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "2c013c3e-c727-470b-855b-bc71f8a1af95",
    value: "SEBAA ROUADI",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "b93904b1-c729-4eeb-8d65-373f630d3a6a",
    value: "SEBT AIT RAHOU",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "8d370645-daaa-4ed5-8047-61cf4f76e9df",
    value: "SEBT AZZINATE",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "5e40d52f-b419-4427-9ef6-79682146e744",
    value: "SEBT ENNABOUR",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "d67c6a7d-fcb6-4b9f-9395-223440af85d8",
    value: "SEBT GZOULA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "acb958aa-60dd-497e-853d-2b47c9a2b29e",
    value: "SEBT LOUDAYA",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "35e460b9-24e0-4b56-91ff-a30f1c8db873",
    value: "SEBT SAISS",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "7d2dda51-2808-45ab-8a79-a4c65ec5e3f5",
    value: "SEFROU",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "83771572-6887-4b26-bbb6-2943bfc2c754",
    value: "SEFSAF",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "f2da91db-1f40-4e04-be49-b31873a27b9b",
    value: "SELFAT",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "4a434360-db4e-4f8b-9b8b-9783f1b4d88e",
    value: "SELOUANE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "cfaac7e8-4cb1-4486-8538-8c8c6b790551",
    value: "SEMGUET",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "b3809119-3ef1-41b6-b707-3bf1fb851dee",
    value: "SENADA",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "320c0bf1-3750-40e2-82dd-d83a8da45ba5",
    value: "SERGHINA",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "ef0fdeda-f5c1-4312-bb8a-97dd2741dd8a",
    value: "SETTAT",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "c61cc73e-6f9f-4747-ba79-cb6529a3d39f",
    value: "SFAFAA",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "84ec9b21-4bbc-4dea-87df-1a147030bbcc",
    value: "SFASSIF",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "a0bd0c92-0da0-4c4d-a1c9-27590c5362a2",
    value: "SGAMNA",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "34ca1397-d968-436d-b9a2-83c4c12d20e3",
    value: "SHOUL",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "d2d1606d-a98c-4b98-bad4-2b7496777cf7",
    value: "SI HSAIEN BEN ABDERRAHMANE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "592c6841-1c30-408f-8e9e-f63a825134cd",
    value: "SID L'MOKHTAR",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "3239171d-e338-49a3-93c4-7608a825e9cf",
    value: "SID ZOUINE",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "2b8f8596-a680-4432-92d9-0f5dbf36c004",
    value: "SIDI AAYAD",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "56e511f7-6fcc-45ec-beb1-e182bb4ff841",
    value: "SIDI ABDALLAH EL BOUCHOUARI",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "78993655-95de-4143-8594-aea2dbd6b481",
    value: "SIDI ABDALLAH OU SAID",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "841b39bf-919c-4719-9d5e-ac93cf05a9e9",
    value: "SIDI ABDELJALIL",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "85f192bf-4026-47dc-b2c4-0ecf0052e012",
    value: "SIDI ABDELKHALEQ",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "51809bc1-d0d8-4802-9c0d-5e0c582a2f16",
    value: "SIDI ABDELKRIM",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "0b5e65ee-26ea-4ba9-8a1f-8f92fa985676",
    value: "SIDI ABDELLAH",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "5b63fdf9-5dc2-4b84-8950-fe0292657cbe",
    value: "SIDI ABDELLAH AL KHAYAT",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "652fc13e-e702-437e-9a94-c5d2d5d279dd",
    value: "SIDI ABDELLAH GHIAT",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "4cf825fa-33ce-46aa-b72f-b59106f9161c",
    value: "SIDI ABDELLAH OU BELAID",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "21a78948-2899-42dc-9b53-c0c7ee8f7062",
    value: "SIDI ABDELMOUMEN",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "0bfdf883-9ae9-43e4-96d4-5a3db6a9c2fd",
    value: "SIDI ABDERRAZAK",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "1a44df7a-0122-4180-b95b-5aec07260853",
    value: "SIDI ABED",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "a290c6a8-b76d-4db9-a947-99b00d28d8ea",
    value: "SIDI AHMED BEN AISSA",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "e5cc2cc0-6d98-44c7-afed-c581913b2200",
    value: "SIDI AHMED CHERIF",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "b538a738-e93b-47b5-807f-f56261a8fc50",
    value: "SIDI AHMED EL KHADIR",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "9650e3ae-0fba-4524-b6d2-5037b1c98db0",
    value: "SIDI AHMED ESSAYEH",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "eb741090-070d-40ef-b744-ca3ea88acba7",
    value: "SIDI AHMED LAAROUSSI",
    province: "db740e29-39e6-4362-8adf-bf6963a0527e",
  },
  {
    id: "485c1176-160a-4c3c-a586-da3a2998e8cf",
    value: "SIDI AHMED OU ABDALLAH",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "5e226e09-4e28-4d24-8f57-75d4b8afa96a",
    value: "SIDI AHMED OU AMAR",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "9219447d-fb7f-451a-8fe9-39abe3aec210",
    value: "SIDI AHMED OU MOUSSA",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "8544b08c-3b3f-4e74-8931-835bf0b13be8",
    value: "SIDI AISSA",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "a7ed5220-573c-411a-a9a5-f7347fec7937",
    value: "SIDI AISSA BEN ALI",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "0885c0e4-263b-4bd6-978a-2134a473fe82",
    value: "SIDI AISSA BEN SLIMANE",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "078e2da8-17a9-42ff-ad1c-6e7d55578721",
    value: "SIDI AISSA REGRAGUI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "cde85a4f-df6e-4d59-912d-f95883406472",
    value: "SIDI AL KAMEL",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "d0a70c53-8b46-4df2-8fea-678e4e99de40",
    value: "SIDI ALI",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "40b1fab2-1366-498f-8042-d4bfcbfdd48c",
    value: "SIDI ALI BEL QUASSEM",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "ab367ea5-7836-407d-bdd6-aee77600fb30",
    value: "SIDI ALI BEN HAMDOUCHE",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "450c13bd-84c0-47da-a4f1-3deed79c0694",
    value: "SIDI ALI BOURAKBA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "8918a0f3-9bed-4695-a866-498cf84b48df",
    value: "SIDI ALI EL KORATI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "9485ed89-10cc-436e-9a96-0070c5cbe6c8",
    value: "SIDI ALI LABRAHLA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "680c7f3c-2917-42aa-a976-e47ae29dd8d6",
    value: "SIDI ALLAL EL BAHRAOUI",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "786d0fd2-c02a-4362-9611-0026f7ebe149",
    value: "SIDI ALLAL LAMSADDER",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "64e233f1-dbc0-4cd6-9e2a-111548bfe18b",
    value: "SIDI ALLAL TAZI",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "e333d68e-500c-41ed-a3fc-a216e63265ad",
    value: "SIDI AMAR",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "bc752ae3-7759-418c-b314-951f98a3be6c",
    value: "SIDI AMEUR AL HADI",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "4f6e1b25-a7ee-47b5-9321-57575648bca3",
    value: "SIDI AZZOUZ",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "2250ac83-9602-492f-bcc2-a5c838b56a22",
    value: "SIDI BADHAJ",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "aa33deb1-0219-46d7-99cf-bfaedc14d43f",
    value: "SIDI BELYOUT",
    province: "3eaec44b-b4fb-4105-bb7b-a819e227763b",
  },
  {
    id: "f0a93dbf-f7af-4543-9fc9-dd5e51346cec",
    value: "SIDI BENNOUR",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "4759a8e4-5e31-4abe-8f0c-d5d474ccc07c",
    value: "SIDI BERNOUSSI",
    province: "7f6f6757-4ea2-4192-905b-66835c00844b",
  },
  {
    id: "16214128-ca48-4597-99e2-b47cf899399a",
    value: "SIDI BETTACHE",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "2cb2f174-a672-4e9b-a2f6-97a737f72419",
    value: "SIDI BIBI",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "c1e40165-fbb8-444b-b25d-ea29c8df1aab",
    value: "SIDI BOAAL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "fd5db0fa-d006-4966-8363-e749511fae41",
    value: "SIDI BORJA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "6945915c-f37e-488c-b069-91c64bcf7b9c",
    value: "SIDI BOU OTHMANE",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "a8ca73a1-1a0a-47f0-9749-12f91f80b443",
    value: "SIDI BOUABDELLI",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "b5c7b0b5-86fa-42f3-b97c-4e3483bcc51f",
    value: "SIDI BOUBKER",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "55a5e39c-1333-4c04-9ce3-86f774b2deff",
    value: "SIDI BOUBKER EL HAJ",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "c01828ac-8819-4938-83b7-19139f6270b4",
    value: "SIDI BOUHRIA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "da13e7a8-b027-4194-9ac7-733dc80302c0",
    value: "SIDI BOUKNADEL",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "02bbd79d-1546-42d9-afbd-a79b7c1f983e",
    value: "SIDI BOULAALAM",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "303846b3-7085-46a2-91ec-e1ee994bc70b",
    value: "SIDI BOULENOUAR",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "dd6c5e62-2814-4311-af78-17c6ecb1a727",
    value: "SIDI BOULKHALF",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "0ab9dd07-de28-4ba7-8ce5-23b5bffbc03e",
    value: "SIDI BOUMEHDI",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "c071b9cf-7886-4af3-8a26-660b10fa03ec",
    value: "SIDI BOUMOUSSA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "a8856df6-544d-4567-a67b-210a74bc4f5d",
    value: "SIDI BOUSBER",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "16a74e4d-8a6e-4e2c-a12f-8266c88c0812",
    value: "SIDI BOUSHAB",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "554054fd-1465-43e0-9dff-a1a1151b5854",
    value: "SIDI BOUTAYEB",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "bebe79e8-b1d4-415c-916e-1cbab2025c9c",
    value: "SIDI BOUTMIM",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "a3658f21-162f-4d06-87d7-27ec36e008f2",
    value: "SIDI BOUZID ARRAGRAGUI",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "3ba47dc0-10f3-4915-8b96-f680a5512970",
    value: "SIDI BOUZINEB",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "9bcf3d99-68db-4a3e-a5c6-62239716c325",
    value: "SIDI CHIKER",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "9c91dbe1-9632-40a2-a085-b1c2e661677d",
    value: "SIDI DAHBI",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "e7c56cac-2e0a-4e87-9c33-2a1a03ecad2e",
    value: "SIDI DAHMANE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "04bf2f1e-11b4-47c0-bd82-19521bf67454",
    value: "SIDI DAOUD",
    province: "dd59b8f7-f2ad-4ed7-9cdd-5d58af0e2cf1",
  },
  {
    id: "39b13ef7-acec-4910-917b-db63ddab701b",
    value: "SIDI EL ABED",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "aafbc597-0a03-4754-909f-207d025d71eb",
    value: "SIDI EL AIDI",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "1da03f50-9c64-4449-8aec-c8639169c046",
    value: "SIDI EL HATTAB",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "857a205f-113e-463f-80eb-a25e50d31952",
    value: "SIDI EL JAZOULI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "9115e4ce-7132-4033-8b8e-ffbdd8557882",
    value: "SIDI EL MAKHFI",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "983972a7-a242-4904-b50a-43e5d7e37bab",
    value: "SIDI EL MEKKI",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "c05a0087-e9cb-4979-b362-c49f54e9667a",
    value: "SIDI EL RHANDOUR",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "6d9c36e1-c48c-4ce7-ab91-663d9cf5c574",
    value: "SIDI ETTIJI",
    province: "88f4f910-e63f-4e10-bddd-9022df6b0948",
  },
  {
    id: "feeeee7d-a238-47f6-84ba-a4f4c4f1e6b7",
    value: "SIDI GHANEM",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "fa755d9f-d6e0-46a8-a63d-9c0f0df45bbe",
    value: "SIDI GHANEME",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "453dd2f1-ee28-411b-86c9-2a0decebbe9d",
    value: "SIDI H'MAD OU HAMED",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "d2354236-04f6-427a-962a-e56062f16ef6",
    value: "SIDI H'SAINE OU ALI",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "3c66ac20-48e3-44c6-a082-ea1bfb81a18e",
    value: "SIDI HAJ M'HAMED",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "15d0a13b-e34c-4de4-9198-2614dc00a372",
    value: "SIDI HAJJAJ",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "7433f6da-72d5-49b1-8f5e-2bf4a4667bf7",
    value: "SIDI HAJJAJ OUED HASSAR",
    province: "442089d7-5cb2-4bba-844e-4710c4b9b0b1",
  },
  {
    id: "2cdf44f9-2bc4-471b-a88c-4647a7156589",
    value: "SIDI HAMMADI",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "9e1d5840-c923-4e76-8359-160fea842bc0",
    value: "SIDI HARAZEM",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "6e2f7dcc-943a-499b-8309-2308162da1e9",
    value: "SIDI HCINE",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "0364f1e5-a444-4914-932c-57a42cfb5601",
    value: "SIDI HMAD OU M'BAREK",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "1cd3b1ff-2e3f-485b-88b6-db4dd0a8379b",
    value: "SIDI HSAINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "f3a79365-de2c-4c3c-bf6f-0fbe3665e090",
    value: "SIDI IFNI",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "a4117e42-7f89-4e23-a804-472af800ff70",
    value: "SIDI ISHAQ",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "b9429ad2-d5b5-4565-9d02-da03f5967609",
    value: "SIDI JABER",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "6c9e6cf0-0007-434a-a3d1-04b429e7ebc3",
    value: "SIDI KACEM",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "87e31d38-06bc-4d24-aaee-46e739c458f5",
    value: "SIDI KAOUKI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "b85e9168-50eb-40ec-84e3-f536e7290aac",
    value: "SIDI LAAROUSSI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "1eb2a3ef-275a-4a67-bb14-388a1b0488fd",
    value: "SIDI LAHSEN",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "93395546-2f0f-460a-b286-fa6b0526b9da",
    value: "SIDI LAMINE",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "57f0df1f-7518-412a-a856-2585b06623d3",
    value: "SIDI LYAMANI",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "a9abfce8-12f4-4d84-ab82-bceb479bf78a",
    value: "SIDI M'BARK",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "495bff74-22ed-440e-8124-ef6ea8866fb0",
    value: "SIDI M'HAMED AKHDIM",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "34e7ae20-c1a0-41c8-8112-8900d61e8653",
    value: "SIDI M'HAMED BEN LAHCEN",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "20621c76-aedf-441a-b732-47de7a6e34f9",
    value: "SIDI M'HAMED CHELH",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "79b158e5-5107-4a89-9c55-e65fb663b764",
    value: "SIDI M'HAMED DALIL",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "70185583-d4f3-47bf-ac2a-36a8a2f5bdaa",
    value: "SIDI M'HAMED OU MARZOUQ",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "d7d0e87b-8619-4cc0-bae9-e26d6b9fda3b",
    value: "SIDI MANSOUR",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "1d5e494d-048f-497d-bf3f-3dd8ac926b4a",
    value: "SIDI MOHAMED BENMANSOUR",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "2a778ad1-22af-40ca-871a-fcd8f1a02d29",
    value: "SIDI MOHAMED LAHMAR",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "eb903cc3-10c3-48a8-b79c-14abd7a90e26",
    value: "SIDI MOHAMMED BEN RAHAL",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "c350129e-adc1-4dbc-b132-cbf798cf890e",
    value: "SIDI MOKHFI",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "1a3a32df-7900-41a7-8e9c-9525caead04a",
    value: "SIDI MOUMEN",
    province: "7f6f6757-4ea2-4192-905b-66835c00844b",
  },
  {
    id: "52ec3249-82bc-4a89-be3f-008a82a56fe3",
    value: "SIDI MOUSSA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "db8a5486-f931-4f69-8ce3-4e018e87ea6e",
    value: "SIDI MOUSSA BEN ALI",
    province: "808202e9-de03-44ff-bed9-b0829eae83d8",
  },
  {
    id: "a94f8c3d-5640-499e-a8b4-242ecb7cc707",
    value: "SIDI MOUSSA EL MAJDOUB",
    province: "808202e9-de03-44ff-bed9-b0829eae83d8",
  },
  {
    id: "bc7ca408-1b7a-4e17-961c-dd607a5b00c5",
    value: "SIDI MOUSSA LEMHAYA",
    province: "69d99eae-07ce-4bad-8469-0756c5460680",
  },
  {
    id: "f15a6c46-dc2b-4da8-beb1-5474e6e8edad",
    value: "SIDI MOUSSA LHAMRI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "07897115-5806-4a88-ad94-69e90dd0ec1c",
    value: "SIDI MZAL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "393d49c2-2b34-468c-902e-90e9a3bec9ad",
    value: "SIDI OTHMANE",
    province: "6a46c73a-a0fb-4ef7-9aaf-f5b8c4d47917",
  },
  {
    id: "a855e19f-335d-43a9-b8ee-d341aee17a5e",
    value: "SIDI OUAAZIZ",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ccad7df4-7b67-4e98-8a46-5e9e6b4f5dee",
    value: "SIDI OUASSAY",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "ede311e8-57fd-44a4-817c-06bda69a48b5",
    value: "SIDI RAHAL",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "e6c7f412-10ba-49bc-907a-2d774a732448",
    value: "SIDI RAHAL CHATAI",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "0c6176ef-6bf5-4e7d-89d4-2dfb80901d9c",
    value: "SIDI REDOUANE",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "c8781ce4-8932-4e49-ab64-fa0e5effa061",
    value: "SIDI SLIMANE",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "bdbf4cf4-b7d5-48c3-b804-afa98483af46",
    value: "SIDI SLIMANE ECHCHARAA",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "6d1afdd9-5f0a-417c-bc62-f2449df38834",
    value: "SIDI SLIMANE MOUL AL KIFANE",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "ee6af803-e1dc-45d9-bcc2-9650856ac1d3",
    value: "SIDI SMAIL",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "76458f91-1680-473c-8ab1-e5d572d52f34",
    value: "SIDI TAIBI",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "d18f6d9a-ed42-4bc3-9dc3-2091ee859305",
    value: "SIDI YACOUB",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "27158066-0bbf-47cf-a178-714b750e631d",
    value: "SIDI YAHIA BNI ZEROUAL",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "3003f467-c1f1-4bd7-b4bb-4ed43534bcf7",
    value: "SIDI YAHIA EL GHARB",
    province: "5ad68e0e-a9d2-410b-9358-3dc77cd68070",
  },
  {
    id: "62101e22-55ca-4b92-8e5c-1bddc3cefb32",
    value: "SIDI YAHIA OU YOUSSEF",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "1288570d-b54c-47e2-86ab-80d1f3f7d68c",
    value: "SIDI YAHYA OU SAAD",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "ca93d466-7830-4116-816a-4d9c6260026d",
    value: "SIDI YAHYA ZAER",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "76fb41cb-e689-466a-b2ad-c84b1722baca",
    value: "SIDI YOUSSEF BEN AHMED",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "085ae9c3-36e9-45b9-a4fb-1e5820dd6630",
    value: "SIDI YOUSSEF BEN ALI",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "575ca338-bcaa-4f77-b11d-21ff89a81ba9",
    value: "SIDI-BOUBKER",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "89f73d18-7a65-4f2f-8574-77627f199d95",
    value: "SIDI-GHANEM",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "9a88510e-4da9-400f-a393-a4200eff6c61",
    value: "SIROUA",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "bc62e863-002e-48e8-b0ea-97c8fa383d22",
    value: "SKHIRATE",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "b7f83f60-5e5c-47c7-a7e8-0333b33037c6",
    value: "SKHOUR RHAMNA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "fc889a94-991e-43bc-a300-9d059ec48631",
    value: "SKOURA AHL EL OUST",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "398608f0-d56b-4c7f-b836-b694ebd2400c",
    value: "SKOURA LHADRA",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "6777b216-05f6-4b34-aec9-22e048d1b933",
    value: "SKOURA M'DAZ",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "105dd5ae-5d85-4c5b-8cbc-c45c3fd53105",
    value: "SMIA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "4076a575-2197-49d9-9c16-20b7f7436119",
    value: "SMIMOU",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "f19fb595-cd00-4390-a6f6-2de354815680",
    value: "SOUAKEN",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "a2f804b3-8c59-4d69-b77d-3a86573d08a5",
    value: "SOUALEM TRIFIYA",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "345ce304-487f-4fce-b4e9-55932cda34fc",
    value: "SOUIHLA",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "c2de937c-3697-4576-9596-4d31db7c785c",
    value: "SOUISSI",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "a66c9ae9-d08f-4c95-b04b-90e0b0ee5f5c",
    value: "SOUK EL ARBAA",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "ad1ae76b-bfb9-48c4-b7e9-018c9767c551",
    value: "SOUK KDIM",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "63629ad0-53b2-4587-8983-0409093a168c",
    value: "SOUK L'QOLLA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "0cfbf469-f963-49e9-9cd7-a2a281e0af21",
    value: "SOUK LAKHMIS DADES",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "48a3748a-1c31-4ded-94b4-982d0e30f865",
    value: "SOUK SEBT OULED NEMMA",
    province: "983e6b4d-da96-451f-9703-f9fb8ff5f118",
  },
  {
    id: "cd907490-2377-4dd3-b211-9d67c46a4b5f",
    value: "SOUK TLET EL GHARB",
    province: "58559dcc-759c-4edc-ab9f-23a7e32457ff",
  },
  {
    id: "28148b78-be4a-4c1d-b7f0-36aca621a4f3",
    value: "SOUK TOLBA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "eadc4fb5-f6c0-4bb7-89ff-58473f0a593f",
    value: "SOUR EL AAZ",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "673bf7c8-4765-45bb-87de-816d9447153b",
    value: "STEHA",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "798b31dc-948f-44ca-a9d0-5e70f0479dac",
    value: "STI FADMA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "30f1920d-84bb-4a54-a477-088b57fb164f",
    value: "TABANT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "6c1f82f6-64b2-4683-8f7d-7fb8efb4b8a7",
    value: "TABAROUCHT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "a4d73113-6620-4a58-9be6-473ae53fe8e1",
    value: "TABIA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "b3a6d4bd-7173-4706-9421-d1aec5da0160",
    value: "TABIA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "7a9efffe-e91d-4599-9375-cfef5d4bf527",
    value: "TABOUDA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "298964ea-93d7-46f5-9283-5fe5c58bfa73",
    value: "TABRIQUET",
    province: "97be0881-ffaf-4540-9292-3131da446a04",
  },
  {
    id: "eba3b5fb-cb13-4db6-b9c6-345b85db2e5e",
    value: "TACHRAFAT",
    province: "ae489817-70cf-4d83-8d7b-ce34c6c30b74",
  },
  {
    id: "f09aab72-268c-4ab3-9272-076062835b81",
    value: "TADDART",
    province: "86591827-d353-4065-aedc-7db33da7e17b",
  },
  {
    id: "7e198ef5-1f89-4ea7-b2fd-8abdd4d3b567",
    value: "TADIGHOUST",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "380e0895-78a3-4f29-ae2a-b85b1a242ff7",
    value: "TADRART",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "1b593347-e247-4530-8a6c-8997eaf7ff20",
    value: "TAFAJIGHT",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "d3426db3-a671-47fb-ae19-182c633477e9",
    value: "TAFEDNA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "e980d46b-9c43-4d9e-8174-6ce37cb43ad2",
    value: "TAFERSIT",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "3f07e23c-57db-4e34-9e1e-a8d61d7147d0",
    value: "TAFETACHTE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "4461a1b7-9749-4840-8709-387371665f7c",
    value: "TAFINGOULT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "35f7382f-ed42-437d-99e6-47d6b2f2d4d1",
    value: "TAFOUGHALT",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "a826adc3-f264-4d09-88e8-9b91481a5c91",
    value: "TAFRANT",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "c401bc9e-e329-49c0-948d-f2f9d4cde10f",
    value: "TAFRAOUT",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "9a5b0548-1f20-47c5-8779-645174cc824a",
    value: "TAFRAOUT EL MOULOUD",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "6558c37d-1be4-4b26-be23-f53ac2002b91",
    value: "TAFRAOUTEN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "8776fbf0-aab0-421a-8168-694976e6e187",
    value: "TAFTECHNA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "90e6fe09-fb9f-4bca-bbac-f9554ed96a0f",
    value: "TAGANTE",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "41f20b0d-592a-419c-a565-ce110ac8c43a",
    value: "TAGHAZOUT",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "d20011e6-981f-445d-b55d-81535ea0b0da",
    value: "TAGHBALTE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "c1e03cef-f968-4ef2-ae91-6c2b2a8a1e42",
    value: "TAGHJIJT",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "3e360448-f668-4cae-80c8-a938868ee89b",
    value: "TAGHRAMT",
    province: "73bd6373-cada-4282-b5be-55047546df3f",
  },
  {
    id: "4501c929-710b-4a34-9be0-89a8d0c790dc",
    value: "TAGHZIRT",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "98b450b0-cff5-4ebf-8bf4-c76b49166e20",
    value: "TAGHZOUT",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "e48da181-5e2d-4722-b9ac-caaa9667672e",
    value: "TAGHZOUTE N'AIT ATTA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "e4afc5de-a249-4a87-b328-995e63674d67",
    value: "TAGLEFT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "e15adfd6-8989-4ed6-97b7-8ef3ab0b367c",
    value: "TAGMOUT",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "aec064ba-8480-42f9-ae32-8a1cf1a283e7",
    value: "TAGOUNITE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "b82fdb46-969f-4d82-9ee5-efeafce8939d",
    value: "TAH",
    province: "053e7f0d-6812-4048-8f9a-fcfbb3323fd5",
  },
  {
    id: "e4daf13c-dc8f-45c8-b761-2b0a33036c91",
    value: "TAHANNAOUT",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "05848500-eeae-47de-a379-6b8141a0dc6a",
    value: "TAHELOUANTE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "4696ab60-abc1-4630-887e-62ddea5bc14b",
    value: "TAHLA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "a8d862db-472b-41f8-89d9-06ac81e70c92",
    value: "TAIFA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "b46dd1f1-d43f-4cd0-a7a7-8dfe89fd04ff",
    value: "TAINASTE",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "5367f7ed-abe3-4b4f-9364-de74b1b2fb81",
    value: "TAKATE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "80b8109d-f4ab-43f2-9492-307efb815484",
    value: "TAKOUCHT",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "f397506d-73a1-4c9a-b5af-2498860d0599",
    value: "TALAMBOTE",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "a6a9921c-0ef1-46df-acf4-29c3d475c9bd",
    value: "TALAT N'YAAQOUB",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "739e3013-eb5b-4e39-bd7a-2b285e32747a",
    value: "TALGJOUNT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "edededa8-c24e-44db-9824-c8bc020c9bf9",
    value: "TALILIT",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "18bafc7b-3c73-4626-a9e2-e467e92c58cb",
    value: "TALIOUINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "5fcb9153-5c08-4052-899e-4bd6f378ed48",
    value: "TALIOUINE ASSAKA",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "56553edb-4ea9-4527-aa9f-2a4cb9f75bbd",
    value: "TALMAKANTE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "19402737-e76b-43fc-a69b-4447cae09ef9",
    value: "TALMEST",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "c6d490dc-352c-463b-8ed4-a812fac2809b",
    value: "TALSINT",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "2efecebc-3ba1-49ea-a268-34745a338687",
    value: "TALZEMT",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "1ff22dfb-1cf6-4576-ad22-3cdcae9d1efe",
    value: "TAMAGUERT",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "2c43e2e4-8663-4348-bbe0-db8131c9f794",
    value: "TAMALLALT",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "555968bc-abf7-4212-b032-89a84141273a",
    value: "TAMALOUKTE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "89257950-ac85-4c88-85a0-c22a3ee3b8cd",
    value: "TAMANAR",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "f183faf8-d29b-4e9f-b1d4-86a9c12dc641",
    value: "TAMANARTE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "cbcc7634-dcb9-4b12-ae40-8f788048587e",
    value: "TAMAZOUZTE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "e6d397f3-0e13-4c93-b28e-b29bc856b76d",
    value: "TAMCHACHATE",
    province: "4fd263be-fbce-4fbb-9e91-8ec2406d7803",
  },
  {
    id: "821da1bf-8070-41c3-a00c-5416f18ab65e",
    value: "TAMDA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "dbc47191-a3aa-405a-a9e7-33c1d9e1fd35",
    value: "TAMDA NOUMERCID",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "03c4f952-4920-48ca-9dc7-f0ff24537c33",
    value: "TAMEDIT",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "c1a8a68f-1a77-4cc9-8307-717410dc68f8",
    value: "TAMEGROUTE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "26b7492f-ac89-4290-89c2-d9e5de08c305",
    value: "TAMESLOHTE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "264cf7d8-291d-4785-9540-f4ad1420e6a5",
    value: "TAMEZMOUTE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "c265b969-7849-4218-8115-4fd0c8fb5f64",
    value: "TAMOROT",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "bb1f3365-4819-46be-9702-3992a08c147f",
    value: "TAMRI",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "81a9d3a4-39ca-46a0-8c47-2f38ae65c282",
    value: "TAMSAOUT",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "6dbd54e3-d638-4935-a8de-6139ef890f77",
    value: "TAN TAN",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "4a8cc0f9-4817-4828-a638-5e8ba8465d48",
    value: "TANALT",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "6bb8452e-ad6d-4d09-ae6a-f50e27775d37",
    value: "TANANT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "b781666c-8c9b-48c9-b130-0697d5025790",
    value: "TANAQOUB",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "3f78096c-a7d6-4422-b253-aed8c438febb",
    value: "TANCHERFI",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "001c2ee0-248b-48b7-82f3-2a67b9670676",
    value: "TANGARFA",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "ce7f585c-59d4-4c6a-a616-2d0b9df5cdf4",
    value: "TANGER",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "af8a3b69-d880-43d0-8a8f-952751cacc82",
    value: "TANGER MEDINA",
    province: "4deefe8e-5f7f-4ea8-acaf-4979349e34ff",
  },
  {
    id: "35423d92-db2e-46f3-a0de-aef31b0322e0",
    value: "TANOUGHA",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "bf85423f-b10d-4bbb-a5b7-0f2a141a6faa",
    value: "TANOURDI",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "944997b3-26c3-493a-80de-c26e77d30f82",
    value: "TANSIFTE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "45dddd11-0ecc-4358-91e3-254dd2ce3447",
    value: "TAOUGHILT",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "59000140-c688-4a3e-a813-27699e44d5a0",
    value: "TAOULOUKOULT",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "8117bc56-ef70-4813-90d3-6f0180d397c7",
    value: "TAOUNATE",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "e0fc3681-80c1-45bf-b63b-3b92109e0e3b",
    value: "TAOUNZA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "037f41fc-f539-416a-b8af-92e7d2a5b738",
    value: "TAOURIRT",
    province: "2349f3b4-66aa-4941-a450-343fee4410a6",
  },
  {
    id: "55d3ab1b-aa1a-45bc-a990-fbe64d0ad465",
    value: "TAOUYALTE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "824cbb97-6286-4ae3-bc24-2852bd2631d5",
    value: "TAOUZINT",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "fa8937c6-7abe-4cee-8d46-76249d8e80d8",
    value: "TARFAYA",
    province: "053e7f0d-6812-4048-8f9a-fcfbb3323fd5",
  },
  {
    id: "e143fa32-b2f2-4a6a-9474-f8a40cf6385c",
    value: "TARGA WASSAY",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "a57a3a0c-a28a-44f8-9596-2ad877f0e025",
    value: "TARGANTE",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "016945be-3acd-4763-a18f-05e9dd8d080c",
    value: "TARGUA-NTOUCHKA",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "89da3486-73b8-4e0c-8b3c-fb85142a9b9c",
    value: "TARGUIST",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "63cb990b-3305-4079-89de-ab05555d6a9e",
    value: "TARMIGT",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "1c60e660-ab18-4f24-bc53-b4244de64040",
    value: "TAROUDANNT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "0cf02728-c753-49f8-99fb-74621da56b47",
    value: "TARSOUAT",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "d4f29e71-03c9-41c5-aea9-dd79c3c549ea",
    value: "TASSEGDELT",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "7db4252d-7a48-4d88-9d7d-fb2561dffca8",
    value: "TASSIFT",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "2e444ace-0948-45e3-9e8b-fbce26f0374b",
    value: "TASSOULTANTE",
    province: "561c1736-9c10-435e-8dd2-050c761357a6",
  },
  {
    id: "6e0ed785-6c2b-4cd0-b9be-603265534615",
    value: "TASSOUSFI",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "91a7ecc9-6d5d-42fe-a494-709d4311fde2",
    value: "TASSRIRT",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "ed0d8374-ef84-47ab-b21e-e82bacbbe600",
    value: "TATA",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "3396d320-1df0-4b3c-a3f4-46c21d325c3c",
    value: "TATAOUTE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "f5a8f976-6323-41bb-b27b-7186c3382fe1",
    value: "TATOFT",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "ab83f97c-638f-477a-9f92-8dfa1c503e9c",
    value: "TAZA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "ccad667a-04e1-4a78-97ed-939c882c0925",
    value: "TAZAGHINE",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "6b9f9df1-887d-41e0-a38e-541e2e9dce08",
    value: "TAZARINE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "b78f55ba-c578-4a51-8d22-256fc6ca875c",
    value: "TAZARINNE",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "e682fd4e-520b-4098-88b3-7509fbf9cbed",
    value: "TAZART",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "dcab411b-1fea-4301-9d15-0ed25a84e19c",
    value: "TAZEMMOURT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "5124e271-b5d4-4c36-a10b-800b69f54caf",
    value: "TAZNAKHT",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "22fec601-29d0-4465-a5ae-1ddf7e442e09",
    value: "TAZOUTA",
    province: "c5b834ba-62f8-4251-9b35-64c796dca2fe",
  },
  {
    id: "69ec6b7e-84c3-4ac2-8145-10112d27b3b4",
    value: "TAZROUTE",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "2e122f96-e116-420f-a850-747d01535fab",
    value: "TEKNA",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "20cbdee5-71fa-4abd-bb31-d70f416a01f0",
    value: "TELOUET",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "add30592-47f4-41c6-b131-2cfd086f5e0e",
    value: "TEMARA",
    province: "cc033eaa-6dff-4a53-b1ed-7ae14b74d34f",
  },
  {
    id: "6cb7a2db-a8f5-4364-9370-de2fb56676fb",
    value: "TEMSAMANE",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "12482bed-1066-490b-bd49-758337a8c022",
    value: "TEMSIA",
    province: "d995796c-51dd-4471-909f-9d1510057344",
  },
  {
    id: "82a62c53-18ef-48e9-80a7-b2e8686d1ec0",
    value: "TENDRARA",
    province: "4d51795f-7794-45ca-b08c-35cc9fb40509",
  },
  {
    id: "3081f6d5-58e7-4a4e-bf29-9206c57bbf03",
    value: "TERNATA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "ad6400b7-d10a-41f3-a17d-32d34e1edcf4",
    value: "TEROUAL",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "0e2c4576-5688-404e-9d05-230251b6473e",
    value: "TETOUAN",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "bd1b498d-d255-4aec-bb0c-d7a4c66af844",
    value: "THAR ES-SOUK",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "438db455-452e-41c3-a048-d3c5f69b9af0",
    value: "TICHLA",
    province: "a87a5c26-8774-4834-95d7-a6d2650b6080",
  },
  {
    id: "6877d82c-a1e9-4219-853a-b2f9fc20b35d",
    value: "TIDDAS",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "0c8ad6e5-72e5-4938-a349-eb94053b44e7",
    value: "TIDILI",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "21846a2e-5199-46f4-af84-cf60f91f2726",
    value: "TIDILI FETOUAKA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "f5fae0a1-3600-4757-b11c-a98d3b1c8256",
    value: "TIDILI MESFIOUA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "4cc2ea5f-e3a3-4d92-806a-997ec3ac25b7",
    value: "TIDSI NISSENDALENE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "e721af7b-ac6d-4bd2-8dd9-d2f8b61f5187",
    value: "TIDZI",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "c6ff5697-69fc-46e0-8c7d-24a03708b028",
    value: "TIFARITI",
    province: "db740e29-39e6-4362-8adf-bf6963a0527e",
  },
  {
    id: "90bf4b73-8f6f-4a38-a112-ddf4d5c2503a",
    value: "TIFAROUINE",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "1c380669-66de-431e-b1ea-c8bf78243297",
    value: "TIFFERT N'AIT HAMZA",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "c26f37bb-b97a-46c7-a32e-85671fb21689",
    value: "TIFLET",
    province: "5568d5eb-8010-44bc-8be4-8c95ef4af707",
  },
  {
    id: "4af293e3-f171-4115-bcb9-5772352da516",
    value: "TIFNI",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "0e154827-250a-46fd-bc0a-8ae9cc8c280c",
    value: "TIGHASSALINE",
    province: "64fb3112-d79c-47c5-be54-f8ec32172d0f",
  },
  {
    id: "1fcb906c-8675-4d78-9bdf-b84e6b242fa3",
    value: "TIGHEDOUINE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "cfbfdd47-add1-4f40-8979-f53dd8142bc6",
    value: "TIGHIRT",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "0636a85d-24a6-467b-bbaf-d98336ad537b",
    value: "TIGHMI",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "a2ebc425-5789-41e6-b0d4-3df48701a1a9",
    value: "TIGLIT",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "c3d82880-46fd-4061-997f-2ecb9701adc6",
    value: "TIGOUGA",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ebd72655-cd6a-473a-81a9-ead155b36aab",
    value: "TIGRIGRA",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "7dfa3ba2-a041-457d-85e3-3ba1ab0c28e0",
    value: "TIGZMERTE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "589641ba-d786-4319-b5e4-9fd3ea12a21a",
    value: "TILEMZOUN",
    province: "02f70835-c7b6-40c4-85fc-d627d13d3ce2",
  },
  {
    id: "eef3b228-9a26-436e-9276-33ce12b0ca68",
    value: "TILMI",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "4c067a46-d88e-419f-abf3-57dd6a312ac7",
    value: "TILOUGGUITE",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "76cced0d-9290-4a6b-8ad7-fb3a37913ed0",
    value: "TIMAHDITE",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "2253b23f-31a0-420b-849f-b5790ad6009f",
    value: "TIMEZGADIOUINE",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "8a93db4e-3a09-4e08-83d9-275a7dbb1642",
    value: "TIMEZGANA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "1a0234b1-f877-44f9-a019-6f9614379de8",
    value: "TIMLILT",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "16ca3d6c-c4f5-4172-b8b7-dadb2f3047e3",
    value: "TIMOULAY",
    province: "b050c753-c450-4887-b91f-10c58de73321",
  },
  {
    id: "b8c89db8-1041-4885-a65a-3d414aa1075e",
    value: "TIMOULILT",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "cb05661a-3e6a-4107-bc86-80ce28e887bd",
    value: "TIMZGUIDA-OUFTAS",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "154ec367-73b7-4829-ab2f-73db0a364fd5",
    value: "TINDINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "fdacdf73-8523-41ab-b8fa-ec2731fbab71",
    value: "TINEJDAD",
    province: "50ca6b47-08f0-4153-a080-efe346dac6bc",
  },
  {
    id: "98e7b822-dfff-4e77-aa2a-b7e468524a77",
    value: "TINGHIR",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "03e79ea8-421b-497d-b6d8-0c60d506817b",
    value: "TINZART",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "da943872-e198-4081-8c32-538cf4c844b7",
    value: "TINZOULINE",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "261d2c2a-0d2f-447e-9cf7-75526a914e40",
    value: "TIOUGHZA",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "917e5726-6e98-471c-be62-52b49d29c543",
    value: "TIOULI",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "d45ae916-b664-4b55-bda9-e6d8e736dac2",
    value: "TIOUT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "69958676-2718-4277-86b0-047399cdbf5e",
    value: "TIQQI",
    province: "c98b28fd-fabd-42d6-9168-4fdf5ea7e7b7",
  },
  {
    id: "5b449ca2-b048-48a0-85f9-8576488b19c4",
    value: "TISFANE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "b592e3c5-437d-46e5-bc23-eb2bcad8eed0",
    value: "TISQI",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "8de7de8a-76d2-49ed-96a1-26fc8e08d90d",
    value: "TISRASSE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ba1ca032-8cde-4214-a2af-cf91b8b92f89",
    value: "TISSA",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
  {
    id: "d4423c31-1d91-4be4-bada-8b9f1b67e4a5",
    value: "TISSAF",
    province: "a416ee0b-8773-4af6-927f-66a06fd8e06a",
  },
  {
    id: "43d4439d-ec8a-40ca-9ea0-ebca0d76e359",
    value: "TISSINT",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "1d816d10-6e05-42d6-bafa-64de6933b887",
    value: "TIT MELLIL",
    province: "442089d7-5cb2-4bba-844e-4710c4b9b0b1",
  },
  {
    id: "1b7227e9-c7f3-4c1b-a801-5d02d4c29457",
    value: "TIZAGHTE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "00826088-c5db-4c24-8e29-5eab2e9adaa8",
    value: "TIZGANE",
    province: "9ee532e2-8bc5-447c-9542-4402353d9e5d",
  },
  {
    id: "5c4e7e10-0c10-430f-9806-3cde147e7183",
    value: "TIZGUINE",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "4049806a-42b8-4ba3-b6d0-0e7eac5536ee",
    value: "TIZGUITE",
    province: "2c42dfe5-801f-4b17-b1ba-00de46189ef0",
  },
  {
    id: "1bcc12ff-268b-4e58-8c20-bcf54ccf1e90",
    value: "TIZGZAOUINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "dbdff695-96cd-441d-aa34-c9a1c525299e",
    value: "TIZI N'GHACHOU",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "98e4aa26-82ce-4476-88ac-ba40db2d9c47",
    value: "TIZI N'ISLY",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "42934d06-bf5f-48aa-82aa-4feefbed6c5f",
    value: "TIZI N'TEST",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "31ce6638-8b68-4c2f-8914-a88e166d2d6a",
    value: "TIZI NTAKOUCHT",
    province: "ad367971-7199-48ac-b029-d670e0e2c5cd",
  },
  {
    id: "0e9cce44-cead-45b0-8cc4-83fa77cea6a0",
    value: "TIZI OUASLI",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "304858ef-5ced-4045-bda8-d69bd108c0ea",
    value: "TIZNIT",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "9df367f4-fe0c-4436-9e3f-abef9da63920",
    value: "TIZOUGHRANE",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "f4e94666-5c13-42fb-8666-99f7587a5ebe",
    value: "TIZOUNINE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "793ff5e7-aa13-4b22-b004-2d4c94b82104",
    value: "TIZTOUTINE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "0e223148-6501-46d7-aa80-186adc6b2229",
    value: "TLAUH",
    province: "64257d4c-0cce-440b-9057-ab55938ebc1e",
  },
  {
    id: "72bb612a-7ec1-4f78-be83-a1c26a7acf35",
    value: "TLITE",
    province: "5172f04a-d022-455f-aa3a-7c96bd1aab80",
  },
  {
    id: "c9be560f-cc32-47b9-a833-2c94dd660649",
    value: "TNINE ADAY",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "f20cfb67-3a62-4d6a-8697-43198f3a199e",
    value: "TNINE AGLOU",
    province: "477f7e34-9da5-4361-b4f0-9835b058f432",
  },
  {
    id: "d7f000b9-bdd7-43fe-8d0e-8271850a58b6",
    value: "TNINE AMELLOU",
    province: "ab86f78b-ad1b-42f7-8eb0-24bc53971871",
  },
  {
    id: "c0e4af16-06be-43e3-ba68-db9b583e9c6d",
    value: "TOUALET",
    province: "8cd90b81-207d-4603-a362-9e4bc2eab16b",
  },
  {
    id: "c2d1f1b8-39f1-4d55-b866-320e0769706c",
    value: "TOUAMA",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "fcb19c42-2717-4b4d-a8e8-76186480e369",
    value: "TOUARGA",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "3615c82e-f6b7-43b7-a14b-be3c2ecb1bcd",
    value: "TOUBKAL",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "545f1642-3570-4f7e-9882-0319b8bad431",
    value: "TOUDGHA EL OULIA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "92419070-389c-4d39-a8b7-e1e4e5c3aae8",
    value: "TOUDGHA ES SOUFLA",
    province: "33bdf1cb-94d6-4e4a-a5e1-4095104a6cfe",
  },
  {
    id: "7591827b-ef5b-49be-8ef5-8e02717ece19",
    value: "TOUFELAAZT",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "4c83825d-edf5-4f0f-9cad-75934ab08d15",
    value: "TOUGHMART",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "d74e694b-6b69-4c8d-90e7-9a7e174b8f1f",
    value: "TOUISSIT",
    province: "12e4beb1-74dc-4730-b495-8b319efb525d",
  },
  {
    id: "b7d92654-b594-4877-9c30-9a13dc89eb79",
    value: "TOUIZGUI",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "777ed792-1f8c-4250-aef7-b38f5d81e2ac",
    value: "TOULAL",
    province: "f2ecebdb-963d-49e1-9b3f-ba21121d92b3",
  },
  {
    id: "b13f6294-0b6d-4f51-96ba-f148b7e948ad",
    value: "TOUMLILINE",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "ad4741d4-7cc0-4e9e-98ba-51515f5fccef",
    value: "TOUNDOUTE",
    province: "08104d8c-4c2b-4c9a-8097-84a534ea05a7",
  },
  {
    id: "c00a9cf4-b684-40e6-b0b4-7cf9f0e72156",
    value: "TOUNFITE",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "6c076e27-c0ba-4845-969f-0f8e63d20d44",
    value: "TRAIBA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "def6ade5-7081-461d-a433-32f55dfdcac4",
    value: "TROUGOUT",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "f6ebc7a9-4483-45e8-ab62-4777c1f0d0ac",
    value: "TSAFT",
    province: "4388c589-843d-4b47-830f-b10b783b57d1",
  },
  {
    id: "0bfbe0c9-3e6a-45d9-b7fe-217277b19948",
    value: "YACOUB EL MANSOUR",
    province: "0ec86c46-3be5-4690-afd8-2c1a007b1ace",
  },
  {
    id: "bec66cf7-6040-48e6-ab0b-d32172d3a3f4",
    value: "YOUSSOUFIA",
    province: "9797c9c4-3f2d-4345-a35e-3c72e7beb145",
  },
  {
    id: "1bcc3c2d-01e6-4bdc-a97d-7c5749c78d30",
    value: "ZAAROURA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "1eafc899-1699-4480-960e-d0ee9d95124b",
    value: "ZAG",
    province: "288d4c63-b1ae-4861-9157-37cd85a43a06",
  },
  {
    id: "4ae5161f-fe65-4f2d-9033-f9fd83fd6dae",
    value: "ZAGGOTA",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "e2a32303-b9ae-4ef2-9d33-8eaed475e6c8",
    value: "ZAGMOUZEN",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "981b1bf2-108f-4e59-908e-b8eabda5b407",
    value: "ZAGORA",
    province: "df613b39-3c3e-4e88-b462-bb0cc0749563",
  },
  {
    id: "7582c81c-7d8a-4bfc-be5a-7300131dbaef",
    value: "ZAIDA",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "03761fbc-120e-4a5b-8d27-af185812dc41",
    value: "ZAIO",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "37b87383-1b31-4e9f-8f0d-3f533b997572",
    value: "ZAITOUNE",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "8db97cb2-32f8-4690-b615-8efa0eac0e18",
    value: "ZAOUIA ANNAHLIA",
    province: "1b9bce3f-3931-43e3-a3e1-66d60fff7645",
  },
  {
    id: "30b20a29-91d4-42c0-a5c9-994c855df70b",
    value: "ZAOUIA SIDI TAHAR",
    province: "109671be-dae6-4369-960c-d88a38637e72",
  },
  {
    id: "d4c7a691-10d0-42fd-a265-882347d36a73",
    value: "ZAOUIAT AHANSAL",
    province: "000cb9b3-60b0-48a4-948a-0791047c6d25",
  },
  {
    id: "7e952fa9-b3fa-4be5-9329-3d8747d6eece",
    value: "ZAOUIAT BEN HMIDA",
    province: "7089fa52-14c6-4def-8937-7a5c6bda2829",
  },
  {
    id: "9df71efa-c18e-424f-8195-c1027195514c",
    value: "ZAOUIAT CHEIKH",
    province: "2eb05fe5-c449-4cab-bd54-e61bd2d01b0d",
  },
  {
    id: "36fdd712-b5a8-4cb8-bb46-e4ab48246781",
    value: "ZAOUIAT LAKOUACEM",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "6af5ad65-36b7-4240-b88d-88c8c960c7fd",
    value: "ZAOUIAT SAISS",
    province: "43c16a65-5e52-460b-be6b-d0526302dea5",
  },
  {
    id: "0387280c-8d4c-46b2-8325-d93efd8c25b0",
    value: "ZAOUIAT SIDI ABDELKADER",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "3a2c7065-e7bb-41b5-9801-a272a32d068c",
    value: "ZAOUIAT SIDI BEN HAMDOUN",
    province: "ef380988-dbe7-4a63-965c-2617b97252c4",
  },
  {
    id: "512992b7-553c-49f5-a4e0-7174e9cd2dd4",
    value: "ZAOUIAT SIDI HAMZA",
    province: "2bbec3a3-a8a2-44d4-9848-8f63b3646e66",
  },
  {
    id: "651e93aa-e6e3-4991-a6ff-90efcc36a512",
    value: "ZAOUIAT SIDI KACEM",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "63ae5be6-e1f1-438a-88d7-fa7a28603d7b",
    value: "ZARKT",
    province: "e6a84723-3c0a-48e3-80b2-c4c45afbdb7e",
  },
  {
    id: "19ad9651-38b1-44d3-811a-6022a4f60d59",
    value: "ZEGHANGHANE",
    province: "9fb8d782-9484-4ee8-a18a-1ad96f3ea05e",
  },
  {
    id: "b6a7b8f3-7100-402e-bab4-a12f805a3335",
    value: "ZEGZEL",
    province: "4f459067-d7d1-4a87-a0ea-37009c5bfaa2",
  },
  {
    id: "413be56c-b2fb-4cdb-a538-5c01d64c6c22",
    value: "ZEMRANE",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "9c6c3062-a9a8-459d-836d-216b71984042",
    value: "ZEMRANE CHARQIA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "29efd317-b7f6-41ad-beb7-68bec6f05eb7",
    value: "ZERKTEN",
    province: "348a93e9-4bb7-4e6f-82fc-52bce315150e",
  },
  {
    id: "2bf26151-85d3-4e8a-bf4a-5d24f3f267fc",
    value: "ZGHIRA",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "8f26d9b3-443c-431f-b0b0-1275edaa3748",
    value: "ZIAIDA",
    province: "1f76050f-33f9-4ffc-a05d-e17fcb1f2f29",
  },
  {
    id: "2a64e2af-aea4-423f-979e-57560e658bf6",
    value: "ZINAT",
    province: "f40ac90d-8718-4ee1-b34b-5b1afd62969d",
  },
  {
    id: "b6e5b65b-6fca-4c38-90a4-c14938835b65",
    value: "ZIRARA",
    province: "adfef62e-d2c7-4e11-a5bf-c850ebfc5ed8",
  },
  {
    id: "74d906ef-f45e-4931-9155-a9e34fae62c9",
    value: "ZMAMRA",
    province: "1dbaa184-c0a2-4ea1-bfc6-5d8a279abf98",
  },
  {
    id: "1976ff8d-1787-4b57-924e-a663cebb300b",
    value: "ZNADA",
    province: "68e235d5-d0f1-4252-8331-4118ba5080c4",
  },
  {
    id: "27796794-b3bb-4511-a0b4-5b27ef30657f",
    value: "ZOUADA",
    province: "57878537-0e59-471e-95f7-ef5edb099614",
  },
  {
    id: "9299791e-5fb7-4988-bf6b-dff3365a4c64",
    value: "ZOUAGHA",
    province: "efd1faf5-0016-4c24-bb9f-1a5125a707e0",
  },
  {
    id: "78ad43b4-c580-4eb6-a858-04adff835319",
    value: "ZOUG",
    province: "a87a5c26-8774-4834-95d7-a6d2650b6080",
  },
  {
    id: "244c9136-9279-44ee-956a-2a8c612247c7",
    value: "ZOUMI",
    province: "a7f51595-6498-4cd4-986b-3784eaaa00d8",
  },
  {
    id: "38b57386-4f4c-47ba-83e7-0e9a52dcd5f8",
    value: "ZRARDA",
    province: "6de23051-a88a-41cb-91a6-495558917535",
  },
  {
    id: "661801b0-ecf0-48d2-949e-da50be9d52e6",
    value: "ZRIZER",
    province: "e9e940ac-8a92-47e0-ba27-7e2af94b32e2",
  },
];
