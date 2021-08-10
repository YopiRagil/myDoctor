const data = {
  banner: [
    {
      link: 'https://trustmedis.com/wp-content/uploads/2021/06/FREE-HIS-Pakai-Doctugo-1.png',
    },
    {
      link: 'https://trustmedis.com/wp-content/uploads/2021/03/Blog-18_3_2021.png',
    },
    {
      link: 'https://trustmedis.com/wp-content/uploads/2020/05/Sosmed_konten_Blog_Mei_-_18-05-2020.jpg',
    },
  ],
  doctors: [
    {
      id: 1,
      name: 'dr. Purnomo',
      specialis: 'Kardiologi',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      address: 'Jl. Soekarno Hatta, No. 15, Kota Malang',
      rate: 90,
      exp: 3,
      picture:
        'https://cdn-asset.jawapos.com/wp-content/uploads/2017/06/kisah-meninggalnya-dokter-stefanus-taofik-saat-kerja-piket-lebaran_m_140859-640x421.jpeg',
      phone: '+6281233069969',
    },
    {
      id: 2,
      name: 'dr. Indira',
      specialis: 'Pulmonologi',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      address: 'Jl. Patimura, Surabaya',
      rate: 98,
      exp: 2,
      picture:
        'https://www.honestdocs.id/system/blog_articles/main_hero_images/000/005/310/medium/iStock-913714110_%281%29.jpg',
      phone: '+6281233069969',
    },
    {
      id: 3,
      name: 'dr. Adisti',
      specialis: 'Ophthalmologi',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      address: 'J. Abdurahman Wahid, Jombang',
      rate: 100,
      exp: 2,
      picture:
        'https://cdn1-production-images-kly.akamaized.net/ZO1TQRvq2XHJD1w6BN6pVDhCF00=/0x0:0x0/640x480/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-gray-square-new.png,45,405,0)/kly-media-production/medias/1994537/original/029339800_1521017695-iStock-468613710.jpg',
      phone: '+6281233069969',
    },
    {
      id: 4,
      name: 'dr. Adityo',
      specialis: 'Gynecologi',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      address: 'Jl. Sumbersari, Malang',
      rate: 97,
      exp: 4,
      picture:
        'data:image/jpeg;base64,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',
      phone: '+6281233069969',
    },
  ],
  specialis: [
    {
      type: 'Kardiologi',
      icon: { iconType: 'FontAwesome', icon: 'heartbeat', color: '#a80a0a' },
    },
    {
      type: 'Pulmonologi',
      icon: { iconType: 'FontAwesome5', icon: 'lungs', color: 'blue' },
    },
    {
      type: 'Gynecologi',
      icon: { iconType: 'FontAwesome', icon: 'intersex', color: 'brown' },
    },
    {
      type: 'Ophthalmologi',
      icon: { iconType: 'Entypo', icon: 'eye', color: 'black' },
    },
  ],
};

export default data;
