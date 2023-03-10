const productData = [
  {
    product_id: 101,
    product_category: 'A00',
    product_sapcode: '303224',
    product_name: '삼양라면(5입멀)',
    product_price: 23628.0,
  },
  {
    product_id: 102,
    product_category: 'A00',
    product_sapcode: '303542',
    product_name: '삼양라면매운맛(5입멀)',
    product_price: 23628.0,
  },
  {
    product_id: 103,
    product_category: 'A00',
    product_sapcode: '304817',
    product_name: '삼양라면골드(4입멀)',
    product_price: 17248.0,
  },
  {
    product_id: 104,
    product_category: 'A00',
    product_sapcode: '303229',
    product_name: '불닭볶음면(5입멀)',
    product_price: 30272.0,
  },
  {
    product_id: 105,
    product_category: 'A00',
    product_sapcode: '303232',
    product_name: '짜짜로니(5입멀)',
    product_price: 25960.0,
  },
  {
    product_id: 106,
    product_category: 'A00',
    product_sapcode: '303237',
    product_name: '쇠고기면(5입멀)',
    product_price: 20240.0,
  },
  {
    product_id: 107,
    product_category: 'A00',
    product_sapcode: '303234',
    product_name: '맛있는라면(5입멀)',
    product_price: 30272.0,
  },
  {
    product_id: 108,
    product_category: 'A00',
    product_sapcode: '303244',
    product_name: '간짬뽕(5입멀)',
    product_price: 30272.0,
  },
  {
    product_id: 109,
    product_category: 'A00',
    product_sapcode: '303703',
    product_name: '까르보불닭볶음면(4입)',
    product_price: 32384.0,
  },
  {
    product_id: 110,
    product_category: 'A00',
    product_sapcode: '304983',
    product_name: '크림까르보불닭볶음면(4입멀)',
    product_price: 35024.0,
  },
  {
    product_id: 111,
    product_category: 'A00',
    product_sapcode: '303240',
    product_name: '나가사끼짬뽕(5입멀)',
    product_price: 30272.0,
  },
  {
    product_id: 112,
    product_category: 'A00',
    product_sapcode: '302979',
    product_name: '열무비빔면(5입멀)',
    product_price: 25960.0,
  },
  {
    product_id: 113,
    product_category: 'A00',
    product_sapcode: '304807',
    product_name: '도전불닭비빔면(5입멀)',
    product_price: 31680.0,
  },
  {
    product_id: 114,
    product_category: 'A00',
    product_sapcode: '300108',
    product_name: '된장라면(5입멀)',
    product_price: 20240.0,
  },
  {
    product_id: 115,
    product_category: 'A00',
    product_sapcode: '300246',
    product_name: '손칼국수(5입멀)',
    product_price: 23276.0,
  },
  {
    product_id: 116,
    product_category: 'A00',
    product_sapcode: '300253',
    product_name: '바지락칼국수(4입멀)',
    product_price: 34320.0,
  },
  {
    product_id: 117,
    product_category: 'A00',
    product_sapcode: '300067',
    product_name: '대관령쇠고기면(30입덕)',
    product_price: 11913.0,
  },
  {
    product_id: 118,
    product_category: 'A00',
    product_sapcode: '300088',
    product_name: '사리면(48입)',
    product_price: 11457.6,
  },
  {
    product_id: 119,
    product_category: 'A00',
    product_sapcode: '304200',
    product_name: '사리면(5입멀)',
    product_price: 9548.0,
  },
  {
    product_id: 120,
    product_category: 'A00',
    product_sapcode: '303246',
    product_name: '수타면(5입멀)',
    product_price: 23276.0,
  },
  {
    product_id: 121,
    product_category: 'A00',
    product_sapcode: '302504',
    product_name: '치즈불닭볶음면(4입멀)',
    product_price: 32384.0,
  },
  {
    product_id: 122,
    product_category: 'A00',
    product_sapcode: '303757',
    product_name: '맛있는라면해물맛(5입멀)',
    product_price: 30272.0,
  },
  {
    product_id: 123,
    product_category: 'A00',
    product_sapcode: '304518',
    product_name: '마라탕면(4입멀)',
    product_price: 32384.0,
  },
  {
    product_id: 124,
    product_category: 'A00',
    product_sapcode: '304509',
    product_name: '마라볶음면(4입멀)',
    product_price: 32384.0,
  },
  {
    product_id: 125,
    product_category: 'A00',
    product_sapcode: '304564',
    product_name: '라이트불닭볶음면(5입멀)',
    product_price: 31680.0,
  },
  {
    product_id: 126,
    product_category: 'A00',
    product_sapcode: '304675',
    product_name: '미트스파케티불닭(4입멀)',
    product_price: 32384.0,
  },
  {
    product_id: 127,
    product_category: 'A00',
    product_sapcode: '304963',
    product_name: '김치불닭볶음면(4입멀)',
    product_price: 32384.0,
  },
  {
    product_id: 128,
    product_category: 'A00',
    product_sapcode: '304722',
    product_name: '바지락술찜면(4입멀)',
    product_price: 32384.0,
  },
  {
    product_id: 129,
    product_category: 'A00',
    product_sapcode: '304157',
    product_name: '짜짜로니(4입멀)',
    product_price: 19008.0,
  },
  {
    product_id: 130,
    product_category: 'A00',
    product_sapcode: '303227',
    product_name: '삼양라면(20입)',
    product_price: 11814.0,
  },
  // 용기면 300번대
  {
    product_id: 301,
    product_category: 'B00',
    product_sapcode: '303248',
    product_name: '큰컵불닭볶음면(16입)',
    product_price: 16104.0,
  },
  {
    product_id: 302,
    product_category: 'B00',
    product_sapcode: '303706',
    product_name: '큰컵까르보불닭볶음면(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 303,
    product_category: 'B00',
    product_sapcode: '303250',
    product_name: '큰컵간짬뽕(16입)',
    product_price: 15576.0,
  },
  {
    product_id: 304,
    product_category: 'B00',
    product_sapcode: '304711',
    product_name: '큰컵삼양라면(16입)',
    product_price: 12848.0,
  },
  {
    product_id: 305,
    product_category: 'B00',
    product_sapcode: '304713',
    product_name: '큰컵삼양라면매운맛(16입)',
    product_price: 12848.0,
  },
  {
    product_id: 306,
    product_category: 'B00',
    product_sapcode: '303256',
    product_name: '큰컵나가사끼짬뽕(16입)',
    product_price: 15576.0,
  },
  {
    product_id: 307,
    product_category: 'B00',
    product_sapcode: '303258',
    product_name: '큰컵맛있는라면(16입)',
    product_price: 16104.0,
  },
  {
    product_id: 308,
    product_category: 'B00',
    product_sapcode: '302615',
    product_name: '큰컵치즈불닭볶음면(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 309,
    product_category: 'B00',
    product_sapcode: '303788',
    product_name: '큰컵짜장불닭볶음면(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 310,
    product_category: 'B00',
    product_sapcode: '304985',
    product_name: '큰컵크림까르보불닭볶음면(16입)',
    product_price: 17512.0,
  },
  {
    product_id: 311,
    product_category: 'B00',
    product_sapcode: '303700',
    product_name: '큰컵쯔유간장우동(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 312,
    product_category: 'B00',
    product_sapcode: '304198',
    product_name: '큰컵쫄볶이불닭볶음면(16입)',
    product_price: 17512.0,
  },
  {
    product_id: 313,
    product_category: 'B00',
    product_sapcode: '304267',
    product_name: '큰컵튀김칼국수(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 314,
    product_category: 'B00',
    product_sapcode: '304527',
    product_name: '큰컵마라탕면(16입)',
    product_price: 17512.0,
  },
  {
    product_id: 315,
    product_category: 'B00',
    product_sapcode: '304531',
    product_name: '큰컵마라볶음면(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 316,
    product_category: 'B00',
    product_sapcode: '304619',
    product_name: '큰컵쇠고기면(16입)',
    product_price: 11580.8,
  },
  {
    product_id: 317,
    product_category: 'B00',
    product_sapcode: '302856',
    product_name: '큰컵김치찌개면(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 318,
    product_category: 'B00',
    product_sapcode: '304678',
    product_name: '큰컵미트스파게티불닭(16입)',
    product_price: 16192.0,
  },
  {
    product_id: 319,
    product_category: 'B00',
    product_sapcode: '304763',
    product_name: '큰컵신림동백순대볶음(5입멀)',
    product_price: 17512.0,
  },
  {
    product_id: 350,
    product_category: 'B00',
    product_sapcode: '303263',
    product_name: '컵삼양라면(6입T)',
    product_price: 3894.0,
  },
  {
    product_id: 351,
    product_category: 'B00',
    product_sapcode: '303267',
    product_name: '컵불닭볶음면(6입T)',
    product_price: 4554.0,
  },
  {
    product_id: 352,
    product_category: 'B00',
    product_sapcode: '304112',
    product_name: '컵까르보불닭볶음면(6입T)',
    product_price: 4884.0,
  },
  {
    product_id: 353,
    product_category: 'B00',
    product_sapcode: '303273',
    product_name: '컵맛있는라면(6입T)',
    product_price: 3894.0,
  },
  {
    product_id: 354,
    product_category: 'B00',
    product_sapcode: '303270',
    product_name: '컵나가사끼짬뽕(6입T)',
    product_price: 4554.0,
  },
  {
    product_id: 370,
    product_category: 'B00',
    product_sapcode: '303264',
    product_name: '컵삼양라면(30입)',
    product_price: 19470.0,
  },
  {
    product_id: 371,
    product_category: 'B00',
    product_sapcode: '303274',
    product_name: '컵맛있는라면(30입)',
    product_price: 19470.0,
  },
  {
    product_id: 372,
    product_category: 'A00',
    product_sapcode: '303271',
    product_name: '컵나가사끼짬뽕(30입)',
    product_price: 22770.0,
  },
  {
    product_id: 373,
    product_category: 'A00',
    product_sapcode: '303276',
    product_name: '육개장(24입)',
    product_price: 14916.0,
  },
  // 스낵류 500번대
  {
    product_id: 501,
    product_category: 'C00',
    product_sapcode: '302572',
    product_name: '별뽀빠이(4입멀)',
    product_price: 24578.4,
  },
  {
    product_id: 502,
    product_category: 'C00',
    product_sapcode: '302575',
    product_name: '사또밥(20입)',
    product_price: 18700.0,
  },
  {
    product_id: 503,
    product_category: 'C00',
    product_sapcode: '302777',
    product_name: '사또밥80G(10입)',
    product_price: 11440.0,
  },
  {
    product_id: 504,
    product_category: 'C00',
    product_sapcode: '302570',
    product_name: '짱구(24입)',
    product_price: 22440.0,
  },
  {
    product_id: 505,
    product_category: 'C00',
    product_sapcode: '305078',
    product_name: '미니짱구후라이드(20입)',
    product_price: 14300.0,
  },
  {
    product_id: 506,
    product_category: 'C00',
    product_sapcode: '304527',
    product_name: '미니짱구양념(20입)',
    product_price: 14300.0,
  },
  {
    product_id: 507,
    product_category: 'C00',
    product_sapcode: '302653',
    product_name: '왕짱구(10입)',
    product_price: 20020.0,
  },
  {
    product_id: 508,
    product_category: 'C00',
    product_sapcode: '301946',
    product_name: '라면스낵불닭(3입)',
    product_price: 12870.0,
  },
  {
    product_id: 509,
    product_category: 'C00',
    product_sapcode: '302820',
    product_name: '사또밥(10입)서원전용)',
    product_price: 13420.0,
  },
  {
    product_id: 510,
    product_category: 'C00',
    product_sapcode: '304864',
    product_name: '사또밥갈릭버터맛(20입)',
    product_price: 18700.0,
  },
  {
    product_id: 511,
    product_category: 'C00',
    product_sapcode: '501789',
    product_name: '곡물치즈롤(20입)',
    product_price: 31460.0,
  },
  {
    product_id: 512,
    product_category: 'C00',
    product_sapcode: '502723',
    product_name: '마라오징어(20입)',
    product_price: 64900.0,
  },
  {
    product_id: 513,
    product_category: 'C00',
    product_sapcode: '502368',
    product_name: '불닭오징어(20입)',
    product_price: 64900.0,
  },
  // 소스류 550번대
  {
    product_id: 551,
    product_category: 'K02',
    product_sapcode: '305056',
    product_name: '불닭소스(유이,25입)',
    product_price: 90200.0,
  },
  {
    product_id: 552,
    product_category: 'K02',
    product_sapcode: '305058',
    product_name: '핵불닭소스(유이,25입)',
    product_price: 90200.0,
  },
  {
    product_id: 553,
    product_category: 'K02',
    product_sapcode: '305060',
    product_name: '까르보불닭소스(유이,25입)',
    product_price: 90200.0,
  },
  {
    product_id: 554,
    product_category: 'K02',
    product_sapcode: '502692',
    product_name: '불닭파스타소스150g(32입)',
    product_price: 59488.0,
  },
  {
    product_id: 555,
    product_category: 'K02',
    product_sapcode: '502689',
    product_name: '크림불닭파스타소스140g(32입)',
    product_price: 59488.0,
  },
  {
    product_id: 570,
    product_category: 'K05',
    product_sapcode: '502994',
    product_name: '불닭마요(유이,25입)',
    product_price: 90200.0,
  },
  {
    product_id: 580,
    product_category: 'K04',
    product_sapcode: '304869',
    product_name: '스틱불닭소스(10카톤)',
    product_price: 86592.0,
  },
  {
    product_id: 601,
    product_category: 'U00',
    product_sapcode: '304664',
    product_name: '불닭떡볶이(16입)',
    product_price: 34672.0,
  },
  {
    product_id: 602,
    product_category: 'U00',
    product_sapcode: '304668',
    product_name: '핵불닭떡볶이(16입)',
    product_price: 34672.0,
  },
  {
    product_id: 603,
    product_category: 'U00',
    product_sapcode: '304666',
    product_name: '까르보불닭떡볶이(16입)',
    product_price: 34672.0,
  },
  {
    product_id: 700,
    product_category: 'I00',
    product_sapcode: '503010',
    product_name: '삼양목장밀크캔디(20입)',
    product_price: 41800.0,
  },
];

const DeliveryTimes = [
  {key: 1, value: '오전 배송'},
  {key: 2, value: '오후 배송'},
];

export {productData, DeliveryTimes};
