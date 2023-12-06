'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Signs',
      [
        {
          code: "DP.135",
          content: "Biển báo hết tất cả các lệnh cấm",
          url: "https://i.imgur.com/eyDKz4u.png"
        },
        {
          code: "P.102",
          content: "Biển báo cấm đi ngược chiều",
          url: "https://i.imgur.com/w6lRRQo.png"
        },
        {
          code: "P.103a",
          content: "Biển báo cấm ô tô",
          url: "https://i.imgur.com/FfqCzSS.png"
        },
        {
          code: "P.103b",
          content: "Biển báo cấm xe ô tô rẽ trái",
          url: "https://i.imgur.com/OqHHGSo.png",
        },
        {
          code: "P.103c",
          content: "Biển báo cấm xe ô tô rẽ phải",
          url: "https://i.imgur.com/0uo9s8M.png",
        },
        {
          code: "P.104",
          content: "Biển báo cấm mô tô",
          url: "https://i.imgur.com/aLX7y2E.png"
        },
        {
          code: "P.106a",
          content: "Biển báo cấm xe tải",
          url: "https://i.imgur.com/UBXTZsv.png"
        },
        {
          code: "P.106b",
          content: "Biển báo cấm ô tô tải có khối lượng chuyên chở lớn hơn giới hạn",
          url: "https://i.imgur.com/wVPEAv8.png"
        },
        {
          code: "P.107a",
          content: "Biển báo cấm ô tô khách",
          url: "https://i.imgur.com/TRXY7Fs.png"
        },
        {
          code: "P.112",
          content: "Biển báo cấm người đi bộ",
          url: "https://i.imgur.com/b9BoUZE.png"
        },
        {
          code: "P.115",
          content: "Biển báo hạn chế trọng lượng xe",
          url: "https://i.imgur.com/ZlF7chN.png"
        },
        {
          code: "P.117",
          content: "Biển báo hạn chế chiều cao",
          url: "https://i.imgur.com/pkNXyfO.png"
        },
        {
          code: "P.123a",
          content: "Biển báo cấm rẽ trái",
          url: "https://i.imgur.com/T0f6SOI.png"
        },
        {
          code: "P.123b",
          content: "Biển báo cấm rẽ phải.",
          url: "https://i.imgur.com/4uGpZ5c.png"
        },
        {
          code: "P.124a",
          content: "Biển báo cấm quay đầu xe.",
          url: "https://i.imgur.com/AqAfHvV.png"
        },
        {
          code: "P.124b",
          content: "Biển báo cấm ô tô quay đầu xe",
          url: "https://i.imgur.com/X2gJeCb.png"
        },
        {
          code: "P.124c",
          content: "Biển báo cấm rẽ và quay xe",
          url: "https://i.imgur.com/6b60Hwe.png"
        },
        {
          code: "P.125",
          content: "Biển báo cấm vượt",
          url: "https://i.imgur.com/2VAnCHQ.png"
        },
        {
          code: "P.127",
          content: "Biển báo giới hạn tốc độ.",
          url: "https://i.imgur.com/R94rsMz.png"
        },
        {
          code: "P.128",
          content: "Biển báo cấm sử dụng còi",
          url: "https://i.imgur.com/NCYR8uB.png"
        },
        {
          code: "P.130",
          content: "Biển báo cấmIdừng và đỗ xe..",
          url: "https://i.imgur.com/FZkJWq5.png"
        },
        {
          code: "P.131a",
          content: "Biển báo cấm đỗ xe.",
          url: "https://i.imgur.com/um7ATk0.png"
        },
        {
          code: "P.137",
          content: "Biển báo cấm rẽ trái và rẽ phải",
          url: "https://i.imgur.com/mB8UCJs.png"
        },
        {
          code: "R.301c",
          content: "Biển báo các phương tiện chỉ được rẽ trái",
          url: "https://i.imgur.com/nyE9ydO.png"
        },
        {
          code: "R.301d",
          content: "Biển báo các phương tiện chỉ đươc rẽ phải.",
          url: "https://i.imgur.com/zyDVtEq.png"
        },
        {
          code: "R.301e",
          content: "Biển báo các phương tiện chỉ được rẽ trái.",
          url: "https://i.imgur.com/UxTz01d.png"
        },
        {
          code: "R.302a",
          content: "Biển báo hướng phải đi vòng chướng ngại vật qua phải.",
          url: "https://i.imgur.com/Bn2CUIf.png"
        },
        {
          code: "R.302b",
          content: "Biển báo hướng phải đi vòng chướng ngại vật qua trái.",
          url: "https://i.imgur.com/CY6y4kx.png"
        },
        {
          code: "R.303",
          content: "Biển báo nơi giao nhau chạy theo vòng xuyến.",
          url: "https://i.imgur.com/4OVsSfl.png"
        },
        {
          code: "R.407a",
          content: "Biển báo đường một chiều.",
          url: "https://i.imgur.com/lBV2wgi.png"
        },
        {
          code: "R.409",
          content: "Biển báo chỗ quay xe",
          url: "https://i.imgur.com/JtLCIOG.png"
        },
        {
          code: "R.425",
          content: "Biển báo bệnh viện",
          url: "https://i.imgur.com/cL7lBLt.png"
        },
        {
          code: "R.434",
          content: "Biển báo bến xe buýt",
          url: "https://i.imgur.com/CTZBr5O.png"
        },
        {
          code: "W.201a",
          content: "Biển báo chỗ ngoặt nguy hiểm vòng bên trái.",
          url: "https://i.imgur.com/WYkrtnK.png"
        },
        {
          code: "W.201b",
          content: "Biển báo chỗ ngoặt nguy hiểm vòng bên phải.",
          url: "https://i.imgur.com/Ok6jIIf.png"
        },
        {
          code: "W.202a",
          content: "Biển báo nhiều chỗ ngoặt nguy hiểm liên tiếp, chỗ đầu tiên sang trái",
          url: "https://i.imgur.com/ppHSLgJ.png"
        },
        {
          code: "W.202b",
          content: "Biển báo nhiều chỗ ngoặt nguy hiểm liên tiếp, chỗ đầu tiên sang phải",
          url: "https://i.imgur.com/ZBsopja.png"
        },
        {
          code: "W.203b",
          content: "Biển báo đường bị hẹp về phía trái.",
          url: "https://i.imgur.com/if8Rr2c.png"
        },
        {
          code: "W.203c",
          content: "Biển báo đường bị hẹp về phía phải.",
          url: "https://i.imgur.com/ML7CC83.png"
        },
        {
          code: "W.205a",
          content: "Biển báo đường giao nhau.",
          url: "https://i.imgur.com/02n3Dm5.png"
        },
        {
          code: "W.205b",
          content: "Biển báo đường giao nhau.",
          url: "https://i.imgur.com/DZxxh1Q.png"
        },
        {
          code: "W.205d",
          content: "Biển báo đường giao nhau.",
          url: "https://i.imgur.com/rpabQkf.png"
        },
        {
          code: "W.207a",
          content: "Biển báo giao nhau với đường không ưu tiên..",
          url: "https://i.imgur.com/NpWf8R3.png"
        },
        {
          code: "W.207b",
          content: "Biển báo giao nhau với đường không ưu tiên..",
          url: "https://i.imgur.com/I9aky8n.png"
        },
        {
          code: "W.207c",
          content: "Biển báo giao nhau với đường không ưu tiên..",
          url: "https://i.imgur.com/BNXlBMl.png"
        },
        {
          code: "W.208",
          content: "Biển báo giao nhau với đường ưu tiên.",
          url: "https://i.imgur.com/tcScj51.png"
        },
        {
          code: "W.209",
          content: "Biển báo giao nhau có tín hiệu đèn giao thông",
          url: "https://i.imgur.com/UO1V4lX.png"
        },
        {
          code: "W.210",
          content: "Biển báo giao nhau với đường sắt có rào chắn",
          url: "https://i.imgur.com/X01UzyM.png"
        },
        {
          code: "W.219",
          content: "Biển báo dốc xuống nguy hiểm.",
          url: "https://i.imgur.com/jrVEVLz.png"
        },
        {
          code: "W.221b",
          content: "Biển báo đường có gồ giảm tốc",
          url: "https://i.imgur.com/3lqM29z.png"
        },
        {
          code: "W.224",
          content: "Biển báo đường người đi bộ cắt ngang.",
          url: "https://i.imgur.com/5pqM2kM.png"
        },
        {
          code: "W.225",
          content: "Biển báo có trẻ em.",
          url: "https://i.imgur.com/mg5aTKx.png"
        },
        {
          code: "W.227",
          content: "Biển báo có công trường",
          url: "https://i.imgur.com/vO9LFlX.png"
        },
        {
          code: "W.233",
          content: "Biển báo có nguy hiểm khác",
          url: "https://i.imgur.com/trC1aNz.png"
        },
        {
          code: "W.235",
          content: "Biển báo có đường đôi",
          url: "https://i.imgur.com/FymipbT.png"
        },
        {
          code: "W.245a",
          content: "Biển báo đi chậm.",
          url: "https://i.imgur.com/ldAO9Bo.png"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
