import React, { useState } from 'react';
import _ from 'lodash';
import Popup from './Popup';
import { StarOutlined } from '@ant-design/icons';

const data = [
  {
    maMonAn: 'MA01',
    tenMonAn: 'Cơm chiên dương châu',
    gia: 200,
    hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA01.jpeg',
    maDanhMuc: 'MC',
    tenDanhMuc: 'Món chiên',
  },
  {
    maMonAn: 'MA02',
    tenMonAn: 'Cơm chiên cá mặn',
    gia: 300,
    hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA02.jpeg',
    maDanhMuc: 'MC',
    tenDanhMuc: 'Món chiên',
  },
  {
    maMonAn: 'MA03',
    tenMonAn: 'Gà nướng muối ớt',
    gia: 500,
    hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA03.jpeg',
    maDanhMuc: 'MN',
    tenDanhMuc: 'Món nướng',
  },
  {
    maMonAn: 'MA04',
    tenMonAn: 'Gà nướng muối tiêu chanh ',
    gia: 600,
    hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA04.jpeg',
    maDanhMuc: 'MN',
    tenDanhMuc: 'Món nướng',
  },
  {
    maMonAn: 'MA05',
    tenMonAn: 'Trà đào cam sả',
    gia: 50,
    hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA05.jpeg',
    maDanhMuc: 'GK',
    tenDanhMuc: 'Giải khát',
  },
  {
    maMonAn: 'MA06',
    tenMonAn: 'Bia heniken',
    gia: 50,
    hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA06.jpeg',
    maDanhMuc: 'GK',
    tenDanhMuc: 'Giải khát',
  },

  {
    maMonAn: 'MA07',
    tenMonAn: 'Tropical Forest Cake',
    gia: 80,
    hinhAnh:
      'https://images.foody.vn/res/g5/41351/prof/s640x400/file_restaurant_photo_iini_16171-7a7eb29d-210330173709.jpg',
    maDanhMuc: 'BK',
    tenDanhMuc: 'Bánh kem',
  },

  {
    maMonAn: 'MA08',
    tenMonAn: 'Bánh kem sinh nhật',
    gia: 120,
    hinhAnh:
      'https://images.foody.vn/res/g101/1003267/prof/s640x400/file_restaurant_photo_bsrs_16042-abd54f3f-201101144927.jpeg',
    maDanhMuc: 'BK',
    tenDanhMuc: 'Bánh kem',
  },
  {
    maMonAn: 'MA09',
    tenMonAn: 'Bánh nhỏ B2 gấu Brown',
    gia: 70,
    hinhAnh: 'https://images.foody.vn/res/g30/290514/s570x570/89ee8504-7e29-4124-9a9c-a1554b49c20d.jpg',
    maDanhMuc: 'BK',
    tenDanhMuc: 'Bánh kem',
  },
  {
    maMonAn: 'MA10',
    tenMonAn: 'Bánh nhỏ B2 dâu tây - redvelvet trái tim',
    gia: 130,
    hinhAnh:
      'https://images.foody.vn/res/g30/290514/s570x570/e298517e-6e7c-46b8-bd22-5c585d2d-6af196dd-201216073933.jpeg',
    maDanhMuc: 'BK',
    tenDanhMuc: 'Bánh kem',
  },

  {
    maMonAn: 'MA11',
    tenMonAn: 'Trà Sữa Trân Châu Trắng',
    gia: 30,
    hinhAnh:
      'https://images.foody.vn/res/g30/291783/s570x570/dd854cfd-804a-4749-b565-6ee94292-91a9d905-201217154709.jpeg',
    maDanhMuc: 'TM',
    tenDanhMuc: 'Tráng miệng',
  },

  {
    maMonAn: 'MA12',
    tenMonAn: 'Trà Sữa Sương Sáo',
    gia: 40,
    hinhAnh:
      'https://images.foody.vn/res/g30/291783/s570x570/561abfd9-6e2f-45ae-901c-bcf4a3e9-7b4193c8-200919162820.jpeg',
    maDanhMuc: 'TM',
    tenDanhMuc: 'Tráng miệng',
  },

  {
    maMonAn: 'MA13',
    tenMonAn: 'Chè hoa quả',
    gia: 55,
    hinhAnh:
      'https://images.foody.vn/res/g100003/1000026801/s570x570/c363320a-585e-4365-bbf7-3ac3fcd9-38d962c9-210604163208.jpeg',
    maDanhMuc: 'TM',
    tenDanhMuc: 'Tráng miệng',
  },

  {
    maMonAn: 'MA14',
    tenMonAn: 'Chè hoa quả Singgapore',
    gia: 60,
    hinhAnh:
      'https://images.foody.vn/res/g100003/1000026801/s570x570/0468e789-1f1a-46a6-8fe7-0f7448ee-12d25ec5-210604163222.jpeg',
    maDanhMuc: 'TM',
    tenDanhMuc: 'Tráng miệng',
  },
  {
    maMonAn: 'MA15',
    tenMonAn: 'Thạch dừa',
    gia: 20,
    hinhAnh:
      'https://images.foody.vn/res/g100003/1000026801/s570x570/95b1e423-e2f6-4012-b521-d9919332-d8e692b3-210604170038.jpeg',
    maDanhMuc: 'TM',
    tenDanhMuc: 'Tráng miệng',
  },

  {
    maMonAn: 'MA16',
    tenMonAn: 'Burger Mozzarella',
    gia: 30,
    hinhAnh: 'https://images.foody.vn/res/g1/6452/s570x570/830c137f-a95f-4428-8e1c-4674cbb8-fc7d8c0d-210618012504.jpeg',
    maDanhMuc: 'BRPZ',
    tenDanhMuc: 'Burger/Pizza',
  },

  {
    maMonAn: 'MA17',
    tenMonAn: 'Super Jumbo Burger + Pepsi (M)',
    gia: 60,
    hinhAnh: 'https://images.foody.vn/res/g1/6452/s570x570/9ad2f2c3-ce0e-4164-943b-53d2fc67-f2aac1ff-210618012556.jpeg',
    maDanhMuc: 'BRPZ',
    tenDanhMuc: 'Burger/Pizza',
  },

  {
    maMonAn: 'MA18',
    tenMonAn: 'Burger Bò Teriyaki',
    gia: 30,
    hinhAnh: 'https://images.foody.vn/res/g1/6452/s570x570/2675643c-fa66-4c18-90bb-10a3aa49-a7dbb3c8-210615123403.jpeg',
    maDanhMuc: 'BRPZ',
    tenDanhMuc: 'Burger/Pizza',
  },

  {
    maMonAn: 'MA19',
    tenMonAn: 'Pizza Hawaine',
    gia: 40,
    hinhAnh:
      'https://images.foody.vn/res/g11/105913/s570x570/f16dd175-1385-4d1c-bb1d-7b4226c6-5606c805-210916071905.jpeg',
    maDanhMuc: 'BRPZ',
    tenDanhMuc: 'Burger/Pizza',
  },

  {
    maMonAn: 'MA20',
    tenMonAn: 'Pizza Xúc Xich',
    gia: 30,
    hinhAnh:
      'https://images.foody.vn/res/g11/105913/s570x570/8d8c74c7-6f3d-4cbb-8941-2e732b56-87a5bfcb-210916072002.jpeg',
    maDanhMuc: 'BRPZ',
    tenDanhMuc: 'Burger/Pizza',
  },
  {
    maMonAn: 'MA21',
    tenMonAn: 'Nem rán',
    gia: 200,
    hinhAnh: 'https://icdn.one/upload/2021/01/21/20210121142711-52a98d92.jpg',
    maDanhMuc: 'MC',
    tenDanhMuc: 'Món chiên',
  },

  {
    maMonAn: 'MA22',
    tenMonAn: 'Tôm tẩm bột chiên xù',
    gia: 200,
    hinhAnh: 'https://icdn.one/upload/2021/01/21/20210121142713-a70585a1.jpg',
    maDanhMuc: 'MC',
    tenDanhMuc: 'Món chiên',
  },

  {
    maMonAn: 'MA23',
    tenMonAn: 'Nước cam',
    gia: 20,
    hinhAnh: 'https://classiccoffee.com.vn/upload/Wy4OS7ltVKGpg0GwbJHBZtHfSSbKmY8jxd8.jpg',
    maDanhMuc: 'GK',
    tenDanhMuc: 'Giải khát',
  },
  {
    maMonAn: 'MA24',
    tenMonAn: 'Mực nướng',
    gia: 500,
    hinhAnh: 'https://travelgear.vn/blog/wp-content/uploads/2019/12/muc-nuong-ngon1.jpg',
    maDanhMuc: 'MN',
    tenDanhMuc: 'Món nướng',
  },

  {
    maMonAn: 'MA25',
    tenMonAn: 'Sushi Cá Hồi Dynamite',
    gia: 50,
    hinhAnh: 'https://images.foody.vn/res/g74/731540/s570x570/2018419172722-sushi-ca-hoi-dynamite-2-7k.jpg',
    maDanhMuc: 'SS',
    tenDanhMuc: 'Sushi',
  },

  {
    maMonAn: 'MA26',
    tenMonAn: 'Sushi Salad Thanh Cua',
    gia: 40,
    hinhAnh: 'https://images.foody.vn/res/g74/731540/s570x570/2018419172432-sushi-salad-thanh-cua-17k.jpg',
    maDanhMuc: 'SS',
    tenDanhMuc: 'Sushi',
  },

  {
    maMonAn: 'MA27',
    tenMonAn: 'Sushi Cá Ngừ Dynamite',
    gia: 50,
    hinhAnh: 'https://images.foody.vn/res/g74/731540/s570x570/201841917246-sushi-ca-ngu-dynamite-2-5k.jpg',
    maDanhMuc: 'SS',
    tenDanhMuc: 'Sushi',
  },
];

export default function BaiTapTongHop() {
  const mangDanhMuc = _.uniqBy(data, 'maDanhMuc');
  const [maDanhMuc, setMaDanhMuc] = useState(mangDanhMuc[0].maDanhMuc);
  const [item, setItem] = useState({});
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Popup openModal={openModal} setOpenModal={setOpenModal} item={item} />
      <div className="grid grid-cols-6">
        <div className="h-full p-3 cols-span-1 space-y-2 bg-coolGray-50 text-coolGray-800">
          <div className="flex items-center p-2 space-x-4">
            <img
              style={{ objectFit: 'cover' }}
              src="https://vietucnews.net/wp-content/uploads/2017/10/food_photography_palm_beach_gardens_florida_parched_pig.jpg"
              alt="123"
              className="w-12 h-12 rounded-full bg-coolGray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">TS Food Store</h2>

              <span style={{ color: 'red' }} className="flex items-center space-x-1 ml-2">
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
              </span>
            </div>
          </div>
          <div className="divide-y divide-coolGray-300">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {mangDanhMuc.map((danhMuc, index) => {
                const classNameActive = [
                  'flex',
                  'items-center',
                  'p-2',
                  'space-x-3',
                  'rounded-md',
                  maDanhMuc === danhMuc.maDanhMuc ? 'bg-black text-white' : '',
                ];
                return (
                  <li
                    onClick={() => {
                      setMaDanhMuc(danhMuc.maDanhMuc);
                    }}
                    key={index}
                    className="bg-coolGray-100 text-coolGray-900"
                  >
                    <a href="#" className={classNameActive.join(' ')}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-coolGray-600"
                      >
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z" />
                      </svg>
                      <span>{danhMuc.tenDanhMuc}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-5">
          <div style={{ fontFamily: 'cursive' }} className="text-center text-red-600 text-5xl mt-5">
            Menu
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                {_.filter(data, (item) => item.maDanhMuc === maDanhMuc).map((item, index) => {
                  return (
                    <div key={index} className="p-4 lg:w-1/4">
                      <div
                        style={{ backgroundColor: 'aliceblue' }}
                        className=" bg-opacity-75 px-8 pb-24 rounded-lg overflow-hidden text-center relative"
                      >
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">
                          {item.tenDanhMuc}
                        </h2>
                        <p style={{ height: 40 }} className="title-font font-medium text-gray-900 mb-3">
                          {item.tenMonAn}
                        </p>
                        <div className="leading-relaxed mb-3">
                          <img
                            style={{ width: 300, height: 120, objectFit: 'cover' }}
                            src={item.hinhAnh}
                            alt={item.hinhAnh}
                          />
                        </div>
                        <a
                          onClick={() => {
                            setOpenModal(true);
                            setItem(item);
                          }}
                          className="text-indigo-500 inline-flex items-center cursor-pointer"
                        >
                          Chi tiết
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="text-center leading-none flex justify-end absolute bottom-0 left-0 w-full pb-5 ">
                          <span className="text-black mr-3 inline-flex items-center leading-none  pr-3 text-xl  ">
                            Giá: {item.gia}$
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
